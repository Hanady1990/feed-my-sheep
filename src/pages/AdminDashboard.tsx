import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, BookOpen, Users, AlertTriangle, HelpCircle, Bell } from "lucide-react";
import AdminArticles from "@/components/admin/AdminArticles";
import AdminSaints from "@/components/admin/AdminSaints";
import AdminHeresies from "@/components/admin/AdminHeresies";
import AdminQuizQuestions from "@/components/admin/AdminQuizQuestions";
import AdminPushNotifications from "@/components/admin/AdminPushNotifications";

const tabs = [
  { key: "articles", label: "Articles", icon: BookOpen },
  { key: "saints", label: "Saints", icon: Users },
  { key: "heresies", label: "Heresies", icon: AlertTriangle },
  { key: "quiz", label: "Quiz Questions", icon: HelpCircle },
  { key: "push", label: "Push Notifications", icon: Bell },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const AdminDashboard = () => {
  const { isAuthenticated, logout } = useAdmin();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabKey>("articles");

  if (!isAuthenticated) {
    navigate("/admin", { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-serif font-bold text-foreground">Admin Panel</h1>
          <Button variant="ghost" size="sm" onClick={() => { logout(); navigate("/admin"); }}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.key)}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {activeTab === "articles" && <AdminArticles />}
        {activeTab === "saints" && <AdminSaints />}
        {activeTab === "heresies" && <AdminHeresies />}
        {activeTab === "quiz" && <AdminQuizQuestions />}
      </div>
    </div>
  );
};

export default AdminDashboard;
