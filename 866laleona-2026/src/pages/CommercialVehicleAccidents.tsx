import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LizGarzaSection from '@/components/LizGarzaSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const CommercialVehicleAccidents = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica font-bold">
      <Navigation />
      <HeroSection 
        imageUrl="/lovable-uploads/0fb8e7ed-2e38-44ae-8bbc-2b21894150ff.png"
        imageAlt="Commercial Vehicle - Box Truck for Business Deliveries"
        title="Commercial Vehicle Accident Attorney Brownsville, TX"
        subtitle="Injured in a Commercial Vehicle Accident? You Need an Experienced Fleet Accident Lawyer."
        messageTitle="Fighting for Commercial Vehicle Victims"
        messageSubtitle="Maximum Compensation. Proven Results."
      />
      <ReviewsSection />
      <LizGarzaSection />
      <Footer />
    </div>
  );
};

export default CommercialVehicleAccidents;
