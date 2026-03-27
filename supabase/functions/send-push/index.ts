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
  const prkKey = await crypto.subtle.importKey("raw", salt.length ? salt : new Uint8Array(32), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const extractedPrk = new Uint8Array(await crypto.subtle.sign("HMAC", prkKey, ikm));
  const expandKey = await crypto.subtle.importKey("raw", extractedPrk, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const infoWithCounter = concat(info, new Uint8Array([1]));
  const okm = new Uint8Array(await crypto.subtle.sign("HMAC", expandKey, infoWithCounter));
  return okm.slice(0, length);
}

function createInfo(type: string, clientPublicKey: Uint8Array, serverPublicKey: Uint8Array): Uint8Array {
  const encoder = new TextEncoder();
  const header = encoder.encode("Content-Encoding: ");
  const nul = new Uint8Array([0]);
  const p256 = encoder.encode("P-256");
  const clientLen = new Uint8Array(2);
  clientLen[0] = 0;
  clientLen[1] = clientPublicKey.length;
  const serverLen = new Uint8Array(2);
  serverLen[0] = 0;
  serverLen[1] = serverPublicKey.length;
  return concat(header, encoder.encode(type), nul, p256, nul, clientLen, clientPublicKey, serverLen, serverPublicKey);
}

async function encryptPayload(
  clientPublicKeyB64: string,
  clientAuthB64: string,
  payload: string
): Promise<{ ciphertext: Uint8Array; salt: Uint8Array; serverPublicKey: Uint8Array }> {
  const clientPublicKeyBytes = base64urlDecode(clientPublicKeyB64);
  const clientAuth = base64urlDecode(clientAuthB64);
  const payloadBytes = new TextEncoder().encode(payload);

  const serverKeys = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const serverPublicKeyRaw = new Uint8Array(await crypto.subtle.exportKey("raw", serverKeys.publicKey));
  const clientKey = await crypto.subtle.importKey("raw", clientPublicKeyBytes, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const sharedSecret = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: clientKey }, serverKeys.privateKey, 256));

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const authInfo = new TextEncoder().encode("Content-Encoding: auth\0");
  const ikm = await hkdf(clientAuth, sharedSecret, authInfo, 32);
  const cekInfo = createInfo("aesgcm", clientPublicKeyBytes, serverPublicKeyRaw);
  const contentEncryptionKey = await hkdf(salt, ikm, cekInfo, 16);
  const nonceInfo = createInfo("nonce", clientPublicKeyBytes, serverPublicKeyRaw);
  const nonce = await hkdf(salt, ikm, nonceInfo, 12);

  const padded = new Uint8Array(2 + payloadBytes.length);
  padded[0] = 0;
  padded[1] = 0;
  padded.set(payloadBytes, 2);

  const key = await crypto.subtle.importKey("raw", contentEncryptionKey, { name: "AES-GCM" }, false, ["encrypt"]);
  const encrypted = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce }, key, padded));

  return { ciphertext: encrypted, salt, serverPublicKey: serverPublicKeyRaw };
}

async function createJWT(privateKeyB64url: string, publicKeyB64url: string, audience: string) {
  const header = { typ: "JWT", alg: "ES256" };
  const now = Math.floor(Date.now() / 1000);
  const payload = { aud: audience, exp: now + 12 * 60 * 60, sub: "mailto:admin@verbumfidei.app" };
  const headerB64 = uint8ToBase64url(new TextEncoder().encode(JSON.stringify(header)));
  const payloadB64 = uint8ToBase64url(new TextEncoder().encode(JSON.stringify(payload)));
  const unsignedToken = `${headerB64}.${payloadB64}`;
  const pubRaw = base64urlDecode(publicKeyB64url);
  const jwk = { kty: "EC", crv: "P-256", x: uint8ToBase64url(pubRaw.slice(1, 33)), y: uint8ToBase64url(pubRaw.slice(33, 65)), d: privateKeyB64url.trim() };
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, new TextEncoder().encode(unsignedToken));
  return `${unsignedToken}.${uint8ToBase64url(new Uint8Array(signature))}`;
}

const dailyMessages = {
  en: [
    { title: "✝ Daily Devotion Reminder", body: "Have you completed your daily devotions? Open Verbum Fidei to check your spiritual checklist." },
    { title: "📖 Time for Scripture", body: "\"Your word is a lamp to my feet and a light to my path.\" — Psalm 119:105" },
    { title: "🙏 Prayer Reminder", body: "Take a moment to pray. God is always listening to you." },
    { title: "⛪ Saint of the Day", body: "Discover today's saint and be inspired by their holiness." },
    { title: "📿 Rosary Reminder", body: "Have you prayed the Rosary today? The Blessed Mother intercedes for you." },
  ],
  ar: [
    { title: "✝ تذكير الورد اليومي", body: "هل أتممت أوراد اليوم؟ افتح كلمة الإيمان لمراجعة قائمتك الروحية." },
    { title: "📖 وقت الكتاب المقدس", body: "\"سِرَاجٌ لِرِجْلِي كَلاَمُكَ وَنُورٌ لِسَبِيلِي.\" — مزمور ١١٩: ١٠٥" },
    { title: "🙏 تذكير بالصلاة", body: "خذ لحظة للصلاة. الله يستمع إليك دائمًا." },
    { title: "⛪ قديس اليوم", body: "اكتشف قديس اليوم واستلهم من قداسته." },
    { title: "📿 تذكير بالمسبحة", body: "هل صلّيت المسبحة اليوم؟ العذراء مريم تشفع لك." },
  ],
};

async function sendWebPush(subscription: { endpoint: string; p256dh: string; auth: string }, payload: string) {
  const vapidPublicKey = "BMy-B34D0kZhPKN3GUHriNoCCetAji1ljnawFbRwEbEoIIOuZFakczA_lzmHIXbGbzzvG6HTRnr7Sx28WvRbDms";
  const vapidPrivateKey = "sContFs5beDuyziT4fop07Tznj1w4ObiuH2vmOVbZz8";

  const url = new URL(subscription.endpoint);
  const audience = `${url.protocol}//${url.host}`;
  const jwt = await createJWT(vapidPrivateKey, vapidPublicKey, audience);
  const { ciphertext, salt, serverPublicKey } = await encryptPayload(subscription.p256dh, subscription.auth, payload);

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
    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    const { data: subscriptions, error } = await supabase
      .from("push_subscriptions")
      .select("*")
      .eq("enabled", true);

    if (error) throw error;
    if (!subscriptions?.length) {
      return new Response(JSON.stringify({ sent: 0 }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let sent = 0;
    let failed = 0;

    for (const sub of subscriptions) {
      const lang = (sub.language === "ar" ? "ar" : "en") as "en" | "ar";
      const messages = dailyMessages[lang];
      const msg = messages[Math.floor(Math.random() * messages.length)];

      try {
        const payload = JSON.stringify({
          title: msg.title,
          body: msg.body,
          icon: "/icons/icon-192x192.png",
          badge: "/icons/icon-192x192.png",
          data: { url: "/" },
        });

        const res = await sendWebPush(sub, payload);
        const responseText = await res.text();

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

    return new Response(JSON.stringify({ sent, failed, total: subscriptions.length }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
