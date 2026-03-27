import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Web Push utilities
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

async function importPrivateKey(base64url: string) {
  const raw = urlBase64ToUint8Array(base64url);
  return await crypto.subtle.importKey(
    "raw",
    raw,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function createJWT(privateKeyBase64: string, publicKeyBase64: string, audience: string) {
  const header = { typ: "JWT", alg: "ES256" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    aud: audience,
    exp: now + 12 * 60 * 60,
    sub: "mailto:admin@verbumfidei.app",
  };

  const enc = new TextEncoder();
  const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const unsignedToken = `${headerB64}.${payloadB64}`;

  // Import the private key for ECDSA signing
  const rawKey = urlBase64ToUint8Array(privateKeyBase64);
  
  // For ECDSA P-256, we need to import as JWK
  const pubRaw = urlBase64ToUint8Array(publicKeyBase64);
  // The public key is 65 bytes uncompressed (04 || x || y)
  const x = pubRaw.slice(1, 33);
  const y = pubRaw.slice(33, 65);
  
  const jwk = {
    kty: "EC",
    crv: "P-256",
    x: btoa(String.fromCharCode(...x)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
    y: btoa(String.fromCharCode(...y)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
    d: privateKeyBase64,
  };

  const key = await crypto.subtle.importKey(
    "jwk",
    jwk,
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    { name: "ECDSA", hash: "SHA-256" },
    key,
    enc.encode(unsignedToken)
  );

  // Convert DER signature to raw r||s format if needed, but WebCrypto returns raw
  const sigArray = new Uint8Array(signature);
  const sigB64 = btoa(String.fromCharCode(...sigArray)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  return `${unsignedToken}.${sigB64}`;
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
  const vapidPublicKey = (Deno.env.get("VAPID_PUBLIC_KEY") || "").trim();
  const vapidPrivateKey = (Deno.env.get("VAPID_PRIVATE_KEY") || "").trim();

  const url = new URL(subscription.endpoint);
  const audience = `${url.protocol}//${url.host}`;

  const jwt = await createJWT(vapidPrivateKey, vapidPublicKey, audience);

  const response = await fetch(subscription.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "TTL": "86400",
      "Authorization": `vapid t=${jwt}, k=${vapidPublicKey}`,
    },
    body: payload,
  });

  return response;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

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

        if (res.status === 201 || res.status === 200) {
          sent++;
        } else if (res.status === 404 || res.status === 410) {
          // Subscription expired, remove it
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
