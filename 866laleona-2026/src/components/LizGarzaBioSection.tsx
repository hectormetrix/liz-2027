
import React from 'react';

const LizGarzaBioSection = () => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/lovable-uploads/345f5cf0-c008-4b26-bd3e-13d3fb15b67b.png)'
      }}
    >
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Liz Garza Bio Content */}
          <div className="flex flex-col justify-center p-6 bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
            <div className="mb-3 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                About <span className="text-[#b92025]">Liz Valdez Garza</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 mb-4 leading-relaxed">
                Experienced Personal Injury Attorney Fighting for Justice in Brownsville, TX.
              </p>
            </div>
            
            <div className="text-white/90 space-y-4 leading-relaxed">
              <p>
                Liz Valdez Garza is a dedicated personal injury attorney serving the Brownsville, Texas community with passion and commitment. With years of experience fighting for the rights of injured individuals, she has built a reputation as a fierce advocate who never backs down from a challenge.
              </p>
              
              <p>
                Born and raised in the Rio Grande Valley, Liz understands the unique challenges faced by our community. She specializes in auto accidents, workplace injuries, truck accidents, and all types of personal injury cases, always working tirelessly to ensure her clients receive the maximum compensation they deserve.
              </p>
              
              <p>
                What sets Liz apart is her personal approach to each case. She treats every client like family, providing compassionate support while aggressively pursuing justice. Her bilingual abilities allow her to serve both English and Spanish-speaking clients with equal dedication and care.
              </p>
              
              <p>
                When you choose Liz Valdez Garza as your attorney, you're not just getting legal representation – you're getting a champion who will fight for your rights every step of the way. Contact us today to experience the difference that true dedication makes.
              </p>
            </div>
          </div>

          {/* Right Column - Liz Image with Clickable Logo */}
          <div className="flex flex-col justify-center items-center text-center px-8">
            <div className="relative">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/liz-26-update-1.png" 
                  alt="Liz Valdez Garza - Personal Injury Attorney" 
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

export default LizGarzaBioSection;
