
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Car, Wrench, Truck, Building, Zap } from 'lucide-react';

const PersonalInjurySection = () => {
  const injuryTypes = [
    {
      icon: Car,
      title: "Car Accidents",
      description: "Bad things happen to good people and when they do know you have a lawyer you can trust.",
      href: "/personal-injury/car-accidents"
    },
    {
      icon: Wrench,
      title: "Work Injuries", 
      description: "It is your employer's responsibility to provide a safe environment to work. If you've been hurt at work we can help.",
      href: "/personal-injury/workplace-injuries"
    },
    {
      icon: Truck,
      title: "Truck Accidents",
      description: "Semi Trucks are dangerous vehicles weighing thousands of pounds. When they crash people get hurt.",
      href: "/personal-injury/truck-accidents"
    },
    {
      icon: Building,
      title: "Commercial Vehicles",
      description: "Distracted employees in company vehicles put others at risk. If a company vehicle has injured you call today.",
      href: "/personal-injury/commercial-vehicle-accidents"
    },
    {
      icon: Zap,
      title: "Oil Field Accidents",
      description: "Oil Field employees and the communities around them suffer from reckless and careless accidents.",
      href: "/personal-injury/oil-field-accidents"
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
            Representing Personal Injury Cases
            <span className="block text-[#b92025] mt-2">Throughout Texas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#b92025] to-red-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {injuryTypes.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link key={index} to={item.href} className="block">
                <Card className="group bg-black/70 backdrop-blur-md border border-white/20 hover:border-[#b92025]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#b92025]/20 cursor-pointer h-full">
                  <CardHeader className="text-center pb-6 pt-8">
                    <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-[#b92025] to-red-700 rounded-full w-fit shadow-lg group-hover:shadow-[#b92025]/50 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-base font-black text-white mb-3 tracking-wide group-hover:text-[#b92025] transition-colors duration-300 whitespace-nowrap">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-8">
                    <CardDescription className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
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

export default PersonalInjurySection;
