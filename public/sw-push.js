// Push notification handler for service worker
// This file is imported by the service worker

self.addEventListener("push", (event) => {
  if (!event.data) return;

  try {
    const data = event.data.json();
    const options = {
      body: data.body || "",
      icon: data.icon || "/icons/icon-192x192.png",
      badge: data.badge || "/icons/icon-192x192.png",
      data: data.data || { url: "/" },
      vibrate: [100, 50, 100],
      tag: "verbum-fidei-daily",
      renotify: true,
    };

    event.waitUntil(self.registration.showNotification(data.title || "Verbum Fidei", options));
  } catch (e) {
    console.error("Push event error:", e);
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  const title = event.notification.title || "Verbum Fidei";
  const body = event.notification.body || "";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && "focus" in client) {
          client.postMessage({ type: "NOTIFICATION_CLICKED", title, body });
          return client.focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});
