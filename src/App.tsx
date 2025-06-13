
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Tickets from "./pages/Tickets";
import Location from "./pages/Location";
import FAQ from "./pages/FAQ";
import Sponsors from "./pages/Sponsors";
import Volunteers from "./pages/Volunteers";
import City from "./pages/City";
import Accommodation from "./pages/Accommodation";
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
          <Route path="/sobre" element={<About />} />
          <Route path="/agenda" element={<Schedule />} />
          <Route path="/ingressos" element={<Tickets />} />
          <Route path="/local" element={<Location />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/patrocinadores" element={<Sponsors />} />
          <Route path="/voluntarios" element={<Volunteers />} />
          <Route path="/cidade" element={<City />} />
          <Route path="/hospedagem" element={<Accommodation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
