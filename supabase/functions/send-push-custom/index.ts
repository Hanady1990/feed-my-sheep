import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { encode as base64Encode, decode as base64Decode } from "https://deno.land/std@0.220.0/encoding/base64url.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function base64urlToUint8Array(b64url: string): Uint8Array {
  return base64Decode(b64url.trim());
}

function uint8ArrayToBase64url(arr: Uint8Array): string {
  return base64Encode(arr);
}

async function createJWT(privateKeyBase64url: string, publicKeyBase64url: string, audience: string) {
  const header = { typ: "JWT", alg: "ES256" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    aud: audience,
    exp: now + 12 * 60 * 60,
    sub: "mailto:admin@verbumfidei.app",
  };

  const headerB64 = uint8ArrayToBase64url(new TextEncoder().encode(JSON.stringify(header)));
  const payloadB64 = uint8ArrayToBase64url(new TextEncoder().encode(JSON.stringify(payload)));
  const unsignedToken = `${headerB64}.${payloadB64}`;

  const pubRaw = base64urlToUint8Array(publicKeyBase64url);
  const x = pubRaw.slice(1, 33);
  const y = pubRaw.slice(33, 65);

  const jwk = {
    kty: "EC",
    crv: "P-256",
    x: uint8ArrayToBase64url(x),
    y: uint8ArrayToBase64url(y),
    d: privateKeyBase64url.trim(),
  };

  const key = await crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, new TextEncoder().encode(unsignedToken));
  const sigB64 = uint8ArrayToBase64url(new Uint8Array(signature));

  return `${unsignedToken}.${sigB64}`;
}

async function sendWebPush(subscription: { endpoint: string; p256dh: string; auth: string }, payload: string) {
  const vapidPublicKey = (Deno.env.get("VAPID_PUBLIC_KEY") || "").trim();
  const vapidPrivateKey = (Deno.env.get("VAPID_PRIVATE_KEY") || "").trim();

  console.log("VAPID keys loaded, pub length:", vapidPublicKey.length, "priv length:", vapidPrivateKey.length);

  const url = new URL(subscription.endpoint);
  const audience = `${url.protocol}//${url.host}`;
  const jwt = await createJWT(vapidPrivateKey, vapidPublicKey, audience);

  return await fetch(subscription.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "TTL": "86400",
      "Authorization": `vapid t=${jwt}, k=${vapidPublicKey}`,
    },
    body: payload,
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
        if (res.status === 201 || res.status === 200) {
          sent++;
        } else if (res.status === 404 || res.status === 410) {
          await supabase.from("push_subscriptions").delete().eq("id", sub.id);
          failed++;
        } else {
          console.error(`Push failed for ${sub.id}: ${res.status} ${await res.text()}`);
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
