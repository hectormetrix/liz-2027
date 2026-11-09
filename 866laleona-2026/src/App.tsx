import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WorkplaceInjuries from "./pages/WorkplaceInjuries";
import CarAccidents from "./pages/CarAccidents";
import TruckAccidents from "./pages/TruckAccidents";
import OilFieldAccidents from "./pages/OilFieldAccidents";
import CommercialVehicleAccidents from "./pages/CommercialVehicleAccidents";
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personal-injury/workplace-injuries" element={<WorkplaceInjuries />} />
            <Route path="/personal-injury/car-accidents" element={<CarAccidents />} />
            <Route path="/personal-injury/truck-accidents" element={<TruckAccidents />} />
            <Route path="/personal-injury/oil-field-accidents" element={<OilFieldAccidents />} />
            <Route path="/personal-injury/commercial-vehicle-accidents" element={<CommercialVehicleAccidents />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
  </QueryClientProvider>
);
export default App;
