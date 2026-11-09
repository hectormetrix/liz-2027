import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LizGarzaTruckSection from '@/components/LizGarzaTruckSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const TruckAccidents = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica font-bold">
      <Navigation />
      <HeroSection 
        imageUrl="/lovable-uploads/cec15a5c-dcfe-43d6-a449-9bea57581497.png"
        imageAlt="Truck Accident Scene - Semi Truck and Car Collision"
        title="Truck Accident Attorney Brownsville, TX"
        subtitle="Injured in a Truck Accident? You Need an Experienced Semi Truck Lawyer."
        messageTitle="Fighting for Truck Accident Victims"
        messageSubtitle="Maximum Compensation. Proven Results."
      />
      <ReviewsSection />
      <LizGarzaTruckSection />
      <Footer />
    </div>
  );
};

export default TruckAccidents;
