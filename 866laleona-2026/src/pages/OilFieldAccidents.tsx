import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LizGarzaSection from '@/components/LizGarzaSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const OilFieldAccidents = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica font-bold">
      <Navigation />
      <HeroSection 
        imageUrl="/lovable-uploads/e435e0a3-da87-45f5-8378-b5d9d0eb3454.png"
        imageAlt="Oil Field Worker - Industrial Safety Equipment"
        title="Oil Field Accident Attorney Brownsville, TX"
        subtitle="Injured in an Oil Field Accident? You Need an Experienced Oilfield Injury Lawyer."
        messageTitle="Fighting for Oil Field Workers"
        messageSubtitle="Maximum Compensation. Proven Results."
      />
      <ReviewsSection />
      <LizGarzaSection />
      <Footer />
    </div>
  );
};

export default OilFieldAccidents;
