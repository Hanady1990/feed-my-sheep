import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AppLayout from "@/components/AppLayout";
import PwaInstallBanner from "@/components/PwaInstallBanner";
import Index from "./pages/Index";
import TeachingsPage from "./pages/Teachings";
import BiblePage from "./pages/Bible";
import FathersPage from "./pages/Fathers";
import PapalPage from "./pages/Papal";
import VaticanPage from "./pages/Vatican";
import HeresiesPage from "./pages/Heresies";
import SocialPage from "./pages/Social";
import SaintsPage from "./pages/Saints";
import SearchPage from "./pages/SearchPage";
import MorePage from "./pages/More";
import ArticleDetail from "./pages/ArticleDetail";
import CatechismPage from "./pages/Catechism";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Sonner />
        <PwaInstallBanner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/teachings" element={<TeachingsPage />} />
              <Route path="/bible" element={<BiblePage />} />
              <Route path="/fathers" element={<FathersPage />} />
              <Route path="/papal" element={<PapalPage />} />
              <Route path="/vatican" element={<VaticanPage />} />
              <Route path="/heresies" element={<HeresiesPage />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/saints" element={<SaintsPage />} />
              <Route path="/catechism" element={<CatechismPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/more" element={<MorePage />} />
              <Route path="/article/:slug" element={<ArticleDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
