import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Facebook, Instagram } from 'lucide-react';

interface HeroSectionProps {
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  messageTitle?: string;
  messageSubtitle?: string;
}

const HeroSection = ({ 
  imageUrl = "/lovable-uploads/liz-26-update-3.png",
  imageAlt = "Liz - Personal Injury Lawyer",
  title = "Personal Injury Lawyer Brownsville, TX",
  subtitle = "You Need a Personal Injury Lawyer That Will Protect You.",
  messageTitle = "Fighting for Your Rights",
  messageSubtitle = "Experienced. Aggressive. Results-Driven."
}: HeroSectionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseDescription: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href
        }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        toast({
          title: "Success!",
          description: "Your case inquiry has been sent. We'll contact you soon!",
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          caseDescription: ''
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please call us directly at (866) LA-LEONA.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/lovable-uploads/345f5cf0-c008-4b26-bd3e-13d3fb15b67b.png)'
      }}
    >
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Professional CTA with Contact Form */}
          <div className="flex flex-col justify-center p-6 bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
            <div className="mb-3 text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {title.includes("Brownsville, TX") ? (
                  <>
                    {title.split("Brownsville, TX")[0]}
                    <span className="text-[#b92025]">Brownsville, TX</span>
                  </>
                ) : (
                  title
                )}
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 mb-4 leading-relaxed">
                {subtitle}
              </p>
            </div>
            
            {/* Compact Professional Contact Form with Tracking ID */}
            <form id="lead-form-brownsville-tx" className="space-y-2 mb-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1">First Name</label>
                  <Input 
                    name="firstName"
                    placeholder="First name" 
                    className="h-8 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-red-400 focus:ring-red-400 text-xs"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white mb-1">Last Name</label>
                  <Input 
                    name="lastName"
                    placeholder="Last name" 
                    className="h-8 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-red-400 focus:ring-red-400 text-xs"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-white mb-1">Email</label>
                <Input 
                  name="email"
                  placeholder="Email address" 
                  type="email" 
                  className="h-8 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-red-400 focus:ring-red-400 text-xs"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-white mb-1">Phone</label>
                <Input 
                  name="phone"
                  placeholder="Phone number" 
                  type="tel" 
                  className="h-8 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-red-400 focus:ring-red-400 text-xs"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-white mb-1">Tell us about your case</label>
                <Textarea 
                  name="caseDescription"
                  placeholder="Describe your situation..." 
                  rows={2} 
                  className="border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-red-400 focus:ring-red-400 resize-none text-xs"
                  value={formData.caseDescription}
                  onChange={handleInputChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-9 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Get Your Free Consultation Now'}
              </Button>
            </form>

            {/* Logo Button - Larger and Below Form */}
            <div className="text-center">
              <a 
                href="tel:866-525-3662" 
                className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200 rounded-lg"
              >
                <img 
                  src="/lovable-uploads/liz-garza-logo.png" 
                  alt="Call (866) LA-LEONA" 
                  className="h-16 w-auto mx-auto hover:opacity-90 transition-opacity cursor-pointer"
                />
              </a>
              
              {/* Follow Me Social Links */}
              <div className="mt-4">
                <p className="text-white text-sm font-semibold mb-2">Follow Me</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.facebook.com/866LaLeona/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#b92025] transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/866laleona/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#b92025] transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@866laleona" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#b92025] transition-colors"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image with 3D Effect */}
          <div className="flex flex-col justify-center items-center text-center px-8">
            {/* Image with 3D Effect - 2x Bigger and No Background */}
            <div className="relative">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-128 h-auto mx-auto drop-shadow-2xl transform perspective-1000 rotateY-5 hover:rotateY-0 transition-transform duration-500 rounded-2xl"
                  style={{
                    filter: 'drop-shadow(20px 20px 20px rgba(0,0,0,0.3))',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
                    maxWidth: '512px'
                  }}
                />
              </div>
            </div>
            
            {/* Message Box matching left column transparency */}
            <div className="bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-center">
                {messageTitle.includes("Your Rights") ? (
                  <>
                    {messageTitle.split("Your Rights")[0]}
                    <span className="block text-[#b92025]">Your Rights</span>
                  </>
                ) : (
                  messageTitle
                )}
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed text-center">
                {messageSubtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
