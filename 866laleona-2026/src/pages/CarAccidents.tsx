import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LizGarzaSection from '@/components/LizGarzaSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const CarAccidents = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica font-bold">
      <Navigation />
      <HeroSection 
        imageUrl="/lovable-uploads/627a2a44-2e84-4325-a536-3783c23dfdee.png"
        imageAlt="Car Accident - Car Accident Scene"
        title="Car Accident Attorney Brownsville, TX"
        subtitle="Been in a Car Accident? You Need a Car Accident Lawyer That Will Fight for You."
        messageTitle="Fighting for Accident Victims"
        messageSubtitle="Get the Compensation You Deserve."
      />
      <ReviewsSection />
      <LizGarzaSection />
      <Footer />
    </div>
  );
};

export default CarAccidents;
