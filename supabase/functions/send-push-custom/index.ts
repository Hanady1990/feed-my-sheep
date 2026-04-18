import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// --- RFC 8291 Web Push Encryption ---

function base64urlDecode(str: string): Uint8Array {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = (4 - (str.length % 4)) % 4;
  str += "=".repeat(pad);
  const binary = atob(str);
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

function uint8ToBase64url(arr: Uint8Array): string {
  let binary = "";
  for (const b of arr) binary += String.fromCharCode(b);
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function concat(...arrays: Uint8Array[]): Uint8Array {
  const len = arrays.reduce((a, b) => a + b.length, 0);
  const result = new Uint8Array(len);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

async function hkdf(salt: Uint8Array, ikm: Uint8Array, info: Uint8Array, length: number): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey("raw", ikm, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const prk = new Uint8Array(await crypto.subtle.sign("HMAC", await crypto.subtle.importKey("raw", salt, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), ikm));
  
  // Actually do proper HKDF extract then expand
  const prkKey = await crypto.subtle.importKey("raw", salt.length ? salt : new Uint8Array(32), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const extractedPrk = new Uint8Array(await crypto.subtle.sign("HMAC", prkKey, ikm));
  
  const expandKey = await crypto.subtle.importKey("raw", extractedPrk, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const infoWithCounter = concat(info, new Uint8Array([1]));
  const okm = new Uint8Array(await crypto.subtle.sign("HMAC", expandKey, infoWithCounter));
  
  return okm.slice(0, length);
}

function createInfo(type: string, clientPublicKey: Uint8Array, serverPublicKey: Uint8Array): Uint8Array {
  const encoder = new TextEncoder();
  const typeBytes = encoder.encode(type);
  // "Content-Encoding: <type>\0" + "P-256\0" + len(recipient) + recipient + len(sender) + sender
  const header = encoder.encode("Content-Encoding: ");
  const nul = new Uint8Array([0]);
  const p256 = encoder.encode("P-256");
  const clientLen = new Uint8Array(2);
  clientLen[0] = 0;
  clientLen[1] = clientPublicKey.length;
  const serverLen = new Uint8Array(2);
  serverLen[0] = 0;
  serverLen[1] = serverPublicKey.length;
  
  return concat(header, typeBytes, nul, p256, nul, clientLen, clientPublicKey, serverLen, serverPublicKey);
}

async function encryptPayload(
  clientPublicKeyB64: string,
  clientAuthB64: string,
  payload: string
): Promise<{ ciphertext: Uint8Array; salt: Uint8Array; serverPublicKey: Uint8Array }> {
  const clientPublicKeyBytes = base64urlDecode(clientPublicKeyB64);
  const clientAuth = base64urlDecode(clientAuthB64);
  const payloadBytes = new TextEncoder().encode(payload);

  // Generate ephemeral ECDH key pair
  const serverKeys = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const serverPublicKeyRaw = new Uint8Array(await crypto.subtle.exportKey("raw", serverKeys.publicKey));

  // Import client public key
  const clientKey = await crypto.subtle.importKey("raw", clientPublicKeyBytes, { name: "ECDH", namedCurve: "P-256" }, false, []);

  // ECDH shared secret
  const sharedSecret = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: clientKey }, serverKeys.privateKey, 256));

  // Generate random salt
  const salt = crypto.getRandomValues(new Uint8Array(16));

  // IKM from auth secret
  const authInfo = new TextEncoder().encode("Content-Encoding: auth\0");
  const ikm = await hkdf(clientAuth, sharedSecret, authInfo, 32);

  // Derive content encryption key
  const cekInfo = createInfo("aesgcm", clientPublicKeyBytes, serverPublicKeyRaw);
  const contentEncryptionKey = await hkdf(salt, ikm, cekInfo, 16);

  // Derive nonce
  const nonceInfo = createInfo("nonce", clientPublicKeyBytes, serverPublicKeyRaw);
  const nonce = await hkdf(salt, ikm, nonceInfo, 12);

  // Pad payload (2-byte padding length prefix)
  const paddingLength = 0;
  const padded = new Uint8Array(2 + paddingLength + payloadBytes.length);
  padded[0] = 0;
  padded[1] = 0;
  padded.set(payloadBytes, 2 + paddingLength);

  // Encrypt with AES-128-GCM
  const key = await crypto.subtle.importKey("raw", contentEncryptionKey, { name: "AES-GCM" }, false, ["encrypt"]);
  const encrypted = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, key, padded));

  return { ciphertext: encrypted, salt, serverPublicKey: serverPublicKeyRaw };
}

// --- VAPID JWT ---

async function createJWT(privateKeyB64url: string, publicKeyB64url: string, audience: string) {
  const header = { typ: "JWT", alg: "ES256" };
  const now = Math.floor(Date.now() / 1000);
  const payload = { aud: audience, exp: now + 12 * 60 * 60, sub: "mailto:admin@verbumfidei.app" };

  const headerB64 = uint8ToBase64url(new TextEncoder().encode(JSON.stringify(header)));
  const payloadB64 = uint8ToBase64url(new TextEncoder().encode(JSON.stringify(payload)));
  const unsignedToken = `${headerB64}.${payloadB64}`;

  const pubRaw = base64urlDecode(publicKeyB64url);
  const x = pubRaw.slice(1, 33);
  const y = pubRaw.slice(33, 65);

  const jwk = { kty: "EC", crv: "P-256", x: uint8ToBase64url(x), y: uint8ToBase64url(y), d: privateKeyB64url.trim() };
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, new TextEncoder().encode(unsignedToken));
  return `${unsignedToken}.${uint8ToBase64url(new Uint8Array(signature))}`;
}

async function sendWebPush(subscription: { endpoint: string; p256dh: string; auth: string }, payload: string) {
  const vapidPublicKey = "BMy-B34D0kZhPKN3GUHriNoCCetAji1ljnawFbRwEbEoIIOuZFakczA_lzmHIXbGbzzvG6HTRnr7Sx28WvRbDms";
  const vapidPrivateKey = "sContFs5beDuyziT4fop07Tznj1w4ObiuH2vmOVbZz8";

  const url = new URL(subscription.endpoint);
  const audience = `${url.protocol}//${url.host}`;
  const jwt = await createJWT(vapidPrivateKey, vapidPublicKey, audience);

  // Encrypt the payload
  const { ciphertext, salt, serverPublicKey } = await encryptPayload(subscription.p256dh, subscription.auth, payload);

  console.log(`Sending encrypted push to ${subscription.endpoint.substring(0, 50)}...`);

  return await fetch(subscription.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Encoding": "aesgcm",
      "TTL": "86400",
      "Authorization": `vapid t=${jwt}, k=${vapidPublicKey}`,
      "Encryption": `salt=${uint8ToBase64url(salt)}`,
      "Crypto-Key": `dh=${uint8ToBase64url(serverPublicKey)};p256ecdsa=${vapidPublicKey}`,
    },
    body: ciphertext,
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { password, title, body, language } = await req.json();

    const adminPassword = Deno.env.get("ADMIN_PASSWORD");
    if (!adminPassword || password !== adminPassword) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!title || !body) {
      return new Response(JSON.stringify({ error: "Title and body are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    let query = supabase.from("push_subscriptions").select("*").eq("enabled", true);
    if (language && language !== "all") {
      query = query.eq("language", language);
    }

    const { data: subscriptions, error } = await query;
    if (error) throw error;

    if (!subscriptions?.length) {
      return new Response(JSON.stringify({ sent: 0, failed: 0, total: 0 }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let sent = 0;
    let failed = 0;

    const payload = JSON.stringify({
      title,
      body,
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-192x192.png",
      data: { url: "/" },
    });

    for (const sub of subscriptions) {
      try {
        const res = await sendWebPush(sub, payload);
        const responseText = await res.text();
        console.log(`Push response for ${sub.id}: ${res.status} ${responseText}`);
        
        if (res.status === 201 || res.status === 200) {
          sent++;
        } else if (res.status === 404 || res.status === 410) {
          await supabase.from("push_subscriptions").delete().eq("id", sub.id);
          failed++;
        } else {
          console.error(`Push failed for ${sub.id}: ${res.status} ${responseText}`);
          failed++;
        }
      } catch (e) {
        console.error(`Push error for ${sub.id}:`, e);
        failed++;
      }
    }

    // Log notification to inbox history
    try {
      await supabase.from("notifications").insert({
        title,
        body,
        language: language || "all",
        sent_count: sent,
        failed_count: failed,
      });
    } catch (logErr) {
      console.error("Failed to log notification:", logErr);
    }

    return new Response(JSON.stringify({ sent, failed, total: subscriptions.length }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("send-push-custom error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
