import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pilares from "./pages/Pilares";
import LogosPage from "./pages/LogosPage";
import CoresPage from "./pages/CoresPage";
import TipografiaPage from "./pages/TipografiaPage";
import SocialPage from "./pages/SocialPage";
import ElementosPage from "./pages/ElementosPage";
import DiretrizesPage from "./pages/DiretrizesPage";
import SistemaProgressoPage from "./pages/SistemaProgressoPage";
import VozTomPage from "./pages/VozTomPage";
import WebPage from "./pages/WebPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pilares" element={<Pilares />} />
          <Route path="/logos" element={<LogosPage />} />
          <Route path="/cores" element={<CoresPage />} />
          <Route path="/tipografia" element={<TipografiaPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/elementos" element={<ElementosPage />} />
          <Route path="/diretrizes" element={<DiretrizesPage />} />
          <Route path="/progresso" element={<SistemaProgressoPage />} />
          <Route path="/voz-tom" element={<VozTomPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
