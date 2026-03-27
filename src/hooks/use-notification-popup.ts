import { useState, useEffect } from "react";

export interface NotificationData {
  title: string;
  body: string;
}

export function useNotificationPopup() {
  const [notification, setNotification] = useState<NotificationData | null>(null);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type === "NOTIFICATION_CLICKED") {
        setNotification({
          title: event.data.title || "Verbum Fidei",
          body: event.data.body || "",
        });
      }
    };

    navigator.serviceWorker?.addEventListener("message", handler);
    return () => navigator.serviceWorker?.removeEventListener("message", handler);
  }, []);

  return { notification, dismiss: () => setNotification(null) };
}
