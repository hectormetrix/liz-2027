
import React from 'react';

const LizGarzaWorkplaceSection = () => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/lovable-uploads/345f5cf0-c008-4b26-bd3e-13d3fb15b67b.png)'
      }}
    >
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Workplace Injury SEO Content */}
          <div className="flex flex-col justify-center p-6 bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
            <div className="mb-3 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Workers Compensation Attorney <span className="text-[#b92025]">Brownsville, TX</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 mb-4 leading-relaxed">
                Experienced Workplace Injury Lawyer Fighting for Your Workers Comp Benefits.
              </p>
            </div>
            
            <div className="text-white/90 space-y-4 leading-relaxed">
              <p>
                If you've been injured at work in Brownsville, Texas, you need an experienced workers compensation attorney who understands the complexities of workplace injury claims. Our law firm specializes in helping injured workers recover the full benefits they're entitled to under Texas workers compensation law.
              </p>
              
              <p>
                Common workplace injuries in Brownsville include construction accidents, oil field injuries, slip and fall incidents, machinery accidents, and repetitive stress injuries. Whether you work in manufacturing, healthcare, retail, or any other industry, you have the right to workers compensation benefits when injured on the job.
              </p>
              
              <p>
                Workers compensation benefits cover medical expenses, lost wages, temporary disability, permanent disability, and vocational rehabilitation. Don't let your employer or their insurance company deny your claim or offer you less than you deserve. Our workplace injury attorneys fight aggressively to maximize your benefits.
              </p>
              
              <p>
                Contact our Brownsville workers compensation law firm today for a free consultation. We handle all types of workplace injury cases and work on a contingency fee basis, meaning you pay nothing unless we win your case. Call now to protect your rights and secure the compensation you need.
              </p>
            </div>
          </div>

          {/* Right Column - Liz Image with Clickable Logo */}
          <div className="flex flex-col justify-center items-center text-center px-8">
            <div className="relative">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/a2fda34f-8449-4af7-88ae-2b228c52e5fd.png" 
                  alt="Liz Garza - Workers Compensation Lawyer" 
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

export default LizGarzaWorkplaceSection;
