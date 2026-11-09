
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Yvonne Barraza",
      review: "Great attorney. Cares about clients and wants to do her best for them. Will do her best for her clients!",
      rating: 5
    },
    {
      name: "Michael Hernandez",
      review: "My wife and I could not have been represented by a better attorney. She has handled our case with the utmost professionalism, patience, and extreme dedication. The passion she carries for her cases and her clients is unmatched! She represented us as if she were a part of our family. Highly recommended!!!!",
      rating: 5
    },
    {
      name: "Em GMoreira",
      review: "I definitely recommend! Excellent lawyer!! We had someone else working on our case for many years and nothing was resolved, until I came to Mrs. Valdez-Garza. We were beyond satisfied as to how she handled everything and how quickly it concluded. She rocks!!",
      rating: 5
    },
    {
      name: "Freddy Gonzalez Jr",
      review: "She is a strong, intelligent, and empathic attorney. She takes no short cuts and has changed my life and my family's for the best! Thanks Liz!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #b92025 0%, transparent 50%), radial-gradient(circle at 75% 75%, #b92025 0%, transparent 50%)'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Client Reviews
            <span className="block text-[#b92025] mt-2">What Our Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#b92025] to-red-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="group bg-black/70 backdrop-blur-md border border-white/20 hover:border-[#b92025]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#b92025]/20 cursor-pointer h-full">
              <CardHeader className="pb-6 pt-8">
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#b92025] fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg font-black text-white mb-3 tracking-wide text-center group-hover:text-[#b92025] transition-colors duration-300">
                  {review.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <CardDescription className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                  "{review.review}"
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Logo Button - Clickable to Call */}
        <div className="text-center mt-16">
          <a 
            href="tel:866-525-3662" 
            className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200 rounded-lg"
          >
            <img 
              src="/lovable-uploads/liz-garza-logo.png" 
              alt="Call (866) LA LEONA" 
              className="h-16 w-auto mx-auto hover:opacity-90 transition-opacity cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
