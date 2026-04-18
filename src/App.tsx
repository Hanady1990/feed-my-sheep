import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AdminProvider } from "@/contexts/AdminContext";
import AppLayout from "@/components/AppLayout";
import PwaInstallBanner from "@/components/PwaInstallBanner";
import Index from "./pages/Index";
import TeachingsPage from "./pages/Teachings";
import BiblePage from "./pages/Bible";
import FathersPage from "./pages/Fathers";
import PapalPage from "./pages/Papal";
import VaticanPage from "./pages/Vatican";
import HeresiesPage from "./pages/Heresies";
import HeresyDetail from "./pages/HeresyDetail";
import SocialPage from "./pages/Social";
import SaintsPage from "./pages/Saints";
import SaintDetail from "./pages/SaintDetail";
import SearchPage from "./pages/SearchPage";
import MorePage from "./pages/More";
import InboxPage from "./pages/Inbox";
import ArticleDetail from "./pages/ArticleDetail";
import CatechismPage from "./pages/Catechism";
import GamesPage from "./pages/Games";
import GuessTheSaint from "./pages/games/GuessTheSaint";
import BibleQuiz from "./pages/games/BibleQuiz";
import TruthVsHeresy from "./pages/games/TruthVsHeresy";
import WordScramble from "./pages/games/WordScramble";
import MatchThePatron from "./pages/games/MatchThePatron";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AdminProvider>
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
                <Route path="/heresies/:slug" element={<HeresyDetail />} />
                <Route path="/social" element={<SocialPage />} />
                <Route path="/saints" element={<SaintsPage />} />
                <Route path="/saints/:slug" element={<SaintDetail />} />
                <Route path="/catechism" element={<CatechismPage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/games/guess-the-saint" element={<GuessTheSaint />} />
                <Route path="/games/bible-quiz" element={<BibleQuiz />} />
                <Route path="/games/truth-vs-heresy" element={<TruthVsHeresy />} />
                <Route path="/games/word-scramble" element={<WordScramble />} />
                <Route path="/games/match-the-patron" element={<MatchThePatron />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/more" element={<MorePage />} />
                <Route path="/inbox" element={<InboxPage />} />
                <Route path="/article/:slug" element={<ArticleDetail />} />
              </Route>
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AdminProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
