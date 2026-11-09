import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PersonalInjurySection from '@/components/PersonalInjurySection';
import LizGarzaBioSection from '@/components/LizGarzaBioSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-helvetica font-bold">
      <Navigation />
      <LizGarzaBioSection />
      <PersonalInjurySection />
      <HeroSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default About;
