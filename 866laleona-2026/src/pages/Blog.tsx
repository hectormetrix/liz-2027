
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PersonalInjurySection from '@/components/PersonalInjurySection';
import LizGarzaSection from '@/components/LizGarzaSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const Blog = () => {
  React.useEffect(() => {
    document.title = "Personal Injury Law Blog - Brownsville TX Attorney | Legal Insights";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read expert legal insights from personal injury attorney Liz Valdez Garza in Brownsville, TX. Stay informed about personal injury law, case studies, and legal tips.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-helvetica font-bold">
      <Navigation />
      <HeroSection />
      <PersonalInjurySection />
      <LizGarzaSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Blog;
