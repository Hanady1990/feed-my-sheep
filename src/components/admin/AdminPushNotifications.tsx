import { useState, useEffect } from "react";
import { useAdminApi } from "@/hooks/use-admin-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Bell, Send, Users, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAdmin } from "@/contexts/AdminContext";

const AdminPushNotifications = () => {
  const { password } = useAdmin();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [language, setLanguage] = useState<"all" | "en" | "ar">("all");
  const [sending, setSending] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [loadingCount, setLoadingCount] = useState(true);

  useEffect(() => {
    loadSubscriberCount();
  }, []);

  const loadSubscriberCount = async () => {
    setLoadingCount(true);
    try {
      const { count, error } = await supabase
        .from("push_subscriptions")
        .select("*", { count: "exact", head: true })
        .eq("enabled", true);
      if (!error) setSubscriberCount(count ?? 0);
    } catch {
      // ignore
    }
    setLoadingCount(false);
  };

  const handleSend = async () => {
    if (!title.trim() || !body.trim()) {
      toast.error("Title and body are required");
      return;
    }

    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-push-custom", {
        body: { password, title, body, language },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      toast.success(`Sent to ${data.sent} subscriber(s), ${data.failed} failed`);
      setTitle("");
      setBody("");
    } catch (e: any) {
      toast.error(e.message || "Failed to send notification");
    }
    setSending(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Push Notifications</h2>
        <Badge variant="secondary" className="gap-1">
          <Users className="w-3 h-3" />
          {loadingCount ? "..." : `${subscriberCount} subscriber(s)`}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Bell className="w-4 h-4" />
            Send Custom Notification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Target Language</label>
            <Select value={language} onValueChange={(v) => setLanguage(v as "all" | "en" | "ar")}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subscribers</SelectItem>
                <SelectItem value="en">English Only</SelectItem>
                <SelectItem value="ar">Arabic Only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Title</label>
            <Input
              placeholder="e.g. ✝ Special Feast Day Reminder"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Body</label>
            <Textarea
              placeholder="Notification message..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={3}
            />
          </div>

          <Button onClick={handleSend} disabled={sending || !title.trim() || !body.trim()}>
            {sending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
            {sending ? "Sending..." : "Send Notification"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPushNotifications;
