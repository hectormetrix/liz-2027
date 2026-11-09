import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import CaseReviewStrip from "@/components/home/CaseReviewStrip";
import PracticeAreasGrid from "@/components/home/PracticeAreasGrid";
import MeetLiz from "@/components/home/MeetLiz";
import ProcessSteps from "@/components/home/ProcessSteps";
import ClientReviews from "@/components/home/ClientReviews";
import SpanishBand from "@/components/home/SpanishBand";
import FinalCta from "@/components/home/FinalCta";

const Index = () => (
  <div className="min-h-screen bg-white font-sans text-brand-ink">
    <Navigation />
    <main>
      <HomeHero />
      <CaseReviewStrip />
      <PracticeAreasGrid />
      <MeetLiz />
      <ProcessSteps />
      <ClientReviews />
      <SpanishBand />
      <FinalCta />
    </main>
    <Footer />
  </div>
);

export default Index;
