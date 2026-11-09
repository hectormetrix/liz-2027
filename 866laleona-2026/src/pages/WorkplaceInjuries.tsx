import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LizGarzaWorkplaceSection from '@/components/LizGarzaWorkplaceSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const WorkplaceInjuries = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica font-bold">
      <Navigation />
      <HeroSection 
        imageUrl="/lovable-uploads/6c150c1d-b9e5-427e-873a-57c6ee49662e.png"
        imageAlt="Workplace Injury - Workers Compensation"
        title="Workers Compensation Lawyer Brownsville, TX"
        subtitle="Injured at Work? You Need a Workers Compensation Lawyer That Will Fight for You."
        messageTitle="Fighting for Injured Workers"
        messageSubtitle="Get the Benefits You Deserve."
      />
      <ReviewsSection />
      <LizGarzaWorkplaceSection />
      <Footer />
    </div>
  );
};

export default WorkplaceInjuries;
