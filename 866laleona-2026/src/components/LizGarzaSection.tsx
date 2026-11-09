
import React from 'react';
import { useLocation } from 'react-router-dom';

const LizGarzaSection = () => {
  const location = useLocation();
  const isOilFieldPage = location.pathname.includes('oil-field-accidents');
  const isCommercialVehiclePage = location.pathname.includes('commercial-vehicle-accidents');

  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/lovable-uploads/345f5cf0-c008-4b26-bd3e-13d3fb15b67b.png)'
      }}
    >
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - SEO Content */}
          <div className="flex flex-col justify-center p-6 bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
            <div className="mb-3 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {isOilFieldPage ? (
                  <>Oil Field Accident Attorney <span className="text-[#b92025]">Brownsville, TX</span></>
                ) : isCommercialVehiclePage ? (
                  <>Commercial Vehicle Accident Attorney <span className="text-[#b92025]">Brownsville, TX</span></>
                ) : (
                  <>Car Accident Attorney <span className="text-[#b92025]">Brownsville, TX</span></>
                )}
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 mb-4 leading-relaxed">
                {isOilFieldPage ? (
                  "Experienced Oil Field Injury Lawyer Fighting for Maximum Compensation After Your Oilfield Accident."
                ) : isCommercialVehiclePage ? (
                  "Experienced Commercial Vehicle Accident Lawyer Fighting for Maximum Compensation After Your Fleet Accident."
                ) : (
                  "Experienced Car Accident Lawyer Fighting for Maximum Compensation After Your Auto Accident."
                )}
              </p>
            </div>
            
            <div className="text-white/90 space-y-4 leading-relaxed">
              {isOilFieldPage ? (
                <>
                  <p>
                    If you've been injured in an oil field accident in Brownsville, Texas, you need an experienced oilfield injury attorney who understands the complexities of oil field accident claims. Our law firm specializes in helping oil field workers recover the full compensation they deserve under Texas workers' compensation and personal injury law.
                  </p>
                  
                  <p>
                    Common oil field accidents in Brownsville include equipment failures, explosions, chemical burns, falls from heights, crushing injuries, and exposure to toxic substances. Whether your accident involved drilling equipment, heavy machinery, pipeline incidents, or workplace safety violations, you have the right to seek compensation for your injuries and damages.
                  </p>
                  
                  <p>
                    Oil field accident compensation covers medical expenses, lost wages, pain and suffering, disability benefits, and future medical care. Don't let the oil company or their insurance company deny your claim or offer you less than you deserve. Our oil field accident attorneys fight aggressively to maximize your settlement against negligent employers and equipment manufacturers.
                  </p>
                  
                  <p>
                    Contact our Brownsville oil field accident law firm today for a free consultation. We handle all types of oilfield injury cases and work on a contingency fee basis, meaning you pay nothing unless we win your case. Call now to protect your rights and secure the compensation you need after your oil field accident.
                  </p>
                </>
              ) : isCommercialVehiclePage ? (
                <>
                  <p>
                    If you've been injured in a commercial vehicle accident in Brownsville, Texas, you need an experienced fleet accident attorney who understands the complexities of commercial vehicle accident claims. Our law firm specializes in helping commercial vehicle accident victims recover the full compensation they deserve under Texas personal injury law.
                  </p>
                  
                  <p>
                    Common commercial vehicle accidents in Brownsville include delivery truck crashes, box truck collisions, company van accidents, fleet vehicle rollovers, and commercial driver negligence incidents. Whether your accident involved a delivery truck, service vehicle, company car, or commercial van, you have the right to seek compensation for your injuries and damages.
                  </p>
                  
                  <p>
                    Commercial vehicle accident compensation covers medical expenses, lost wages, pain and suffering, property damage, and future medical care. Don't let commercial insurance companies deny your claim or offer you less than you deserve. Our commercial vehicle accident attorneys fight aggressively to maximize your settlement against negligent companies and their insurers.
                  </p>
                  
                  <p>
                    Contact our Brownsville commercial vehicle accident law firm today for a free consultation. We handle all types of fleet accident cases and work on a contingency fee basis, meaning you pay nothing unless we win your case. Call now to protect your rights and secure the compensation you need after your commercial vehicle accident.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    If you've been injured in an auto accident in Brownsville, Texas, you need an experienced car accident attorney who understands the complexities of auto accident claims. Our law firm specializes in helping car accident victims recover the full compensation they deserve under Texas personal injury law.
                  </p>
                  
                  <p>
                    Common auto accidents in Brownsville include rear-end collisions, T-bone accidents, head-on crashes, rollover accidents, and hit-and-run incidents. Whether your accident involved another car, truck, motorcycle, or pedestrian, you have the right to seek compensation for your injuries and damages.
                  </p>
                  
                  <p>
                    Auto accident compensation covers medical expenses, lost wages, pain and suffering, property damage, and future medical care. Don't let the insurance company deny your claim or offer you less than you deserve. Our auto accident attorneys fight aggressively to maximize your settlement.
                  </p>
                  
                  <p>
                    Contact our Brownsville auto accident law firm today for a free consultation. We handle all types of car accident cases and work on a contingency fee basis, meaning you pay nothing unless we win your case. Call now to protect your rights and secure the compensation you need.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Liz Image with Clickable Logo */}
          <div className="flex flex-col justify-center items-center text-center px-8">
            <div className="relative">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/liz-26-update-1.png" 
                  alt={isOilFieldPage ? "Liz Garza - Oil Field Accident Lawyer" : isCommercialVehiclePage ? "Liz Garza - Commercial Vehicle Accident Lawyer" : "Liz Garza - Auto Accident Lawyer"} 
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

export default LizGarzaSection;
