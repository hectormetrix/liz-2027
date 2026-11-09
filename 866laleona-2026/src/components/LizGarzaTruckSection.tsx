
import React from 'react';

const LizGarzaTruckSection = () => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/lovable-uploads/345f5cf0-c008-4b26-bd3e-13d3fb15b67b.png)'
      }}
    >
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Truck Accident Content */}
          <div className="flex flex-col justify-center p-6 bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
            <div className="mb-3 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                <span className="text-[#b92025]">Truck Accident Attorney</span> Brownsville, TX
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 mb-4 leading-relaxed">
                Experienced Semi Truck Lawyer Fighting for Maximum Compensation in Brownsville, Texas.
              </p>
            </div>
            
            <div className="text-white/90 space-y-4 leading-relaxed">
              <p>
                If you've been injured in a truck accident in Brownsville, Texas, you need an experienced truck accident attorney who understands the complexities of semi truck collision cases. Liz Valdez Garza specializes in representing victims of commercial truck accidents throughout the Rio Grande Valley.
              </p>
              
              <p>
                Truck accidents in Brownsville often involve serious injuries due to the massive size and weight of commercial vehicles. Common causes include driver fatigue, improper loading, mechanical failures, distracted driving, and violations of federal trucking regulations. Our firm investigates every aspect of your truck accident case.
              </p>
              
              <p>
                As your truck accident lawyer, we handle cases involving semi trucks, 18-wheelers, commercial delivery vehicles, construction trucks, and other large commercial vehicles. We work with accident reconstruction experts and medical professionals to build the strongest possible case for maximum compensation.
              </p>
              
              <p>
                Truck accident victims in Brownsville may be entitled to compensation for medical expenses, lost wages, pain and suffering, disability, and punitive damages. Don't let trucking companies and their insurance providers minimize your claim. Contact our experienced truck accident attorney today for a free consultation.
              </p>
            </div>
          </div>

          {/* Right Column - Liz Image with Clickable Logo */}
          <div className="flex flex-col justify-center items-center text-center px-8">
            <div className="relative">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/a2fda34f-8449-4af7-88ae-2b228c52e5fd.png" 
                  alt="Liz Valdez Garza - Truck Accident Attorney Brownsville TX" 
                  className="w-144 h-auto mx-auto drop-shadow-2xl transform perspective-1000 rotateY-5 hover:rotateY-0 transition-transform duration-500"
                  style={{
                    filter: 'drop-shadow(20px 20px 20px rgba(0,0,0,0.3))',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                    maxWidth: '576px'
                  }}
                />
              </div>
            </div>
            
            <div className="bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center">
                <a 
                  href="tel:866-525-3662" 
                  className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200 rounded-lg"
                >
                  <img 
                    src="/lovable-uploads/liz-garza-logo.png" 
                    alt="Call (866) LA LEONA" 
                    className="h-20 w-auto mx-auto hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LizGarzaTruckSection;
