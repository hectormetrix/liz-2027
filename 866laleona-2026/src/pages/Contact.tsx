import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica font-bold">
      <Navigation />
      <HeroSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Contact;
