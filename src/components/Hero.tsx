
import { ArrowRight, BarChart2, Cpu, Code, Sparkles, Mic, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import LogoWithBlinkingEyes from './LogoWithBlinkingEyes';
import { useBreakpoint, useDeviceType, useIsNestHub } from "@/hooks/use-mobile";

const Hero = () => {
  const breakpoint = useBreakpoint();
  const deviceType = useDeviceType();
  const isNestHub = useIsNestHub();
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';
  const isPortrait = deviceType === 'portrait';
  
  // For portrait devices (including all iPads), use the mobile-style layout
  // For landscape devices, use the desktop layout
  // Special case for Nest Hub
  const useFloatingKeywords = (isPortrait || isMobile) && !isNestHub;
  const useGridKeywords = (isTablet && !isPortrait) || isNestHub;
  
  // Service keywords data with corresponding service IDs
  const serviceKeywords = [
    { icon: Mic, text: "Speaker", position: "top-left", serviceId: "service-public-speaking-&-keynotes" },
    { icon: Cpu, text: "AI Solutions", position: "top-right", serviceId: "service-end-to-end-ai-solutions" },
    { icon: Sparkles, text: "Use Case Validation", position: "middle-right", serviceId: "service-ai-use-case-validation-&-discovery" },
    { icon: Code, text: "Development", position: "bottom-right", serviceId: "service-full-stack-development" },
    { icon: ClipboardList, text: "Workshops", position: "middle-left", serviceId: "service-workshops-&-training" },
    { icon: BarChart2, text: "Data Scientist", position: "bottom-left", serviceId: "service-freelance-data-scientist" }
  ];
  
  // Function to scroll to a specific service
  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="home" 
      className={`flex flex-col justify-center section-container bg-brand-teal/10 ${
        isTablet ? 'min-h-[90vh] pt-24 pb-8' : isMobile ? 'min-h-screen pt-16' : 'min-h-screen pt-16'
      }`}
    >
      <div className={`container mx-auto ${isTablet ? 'px-8 py-4' : 'px-4 py-8'}`}>
        <div className={`flex flex-col lg:flex-row items-center gap-8 ${
          isTablet ? 'mt-4 mb-8' : ''
        }`}>
          {/* Left side content */}
          <div className={`${isPortrait || isTablet ? 'w-full text-center' : 'lg:w-1/2'}`}>
            <div className={`${isPortrait || isTablet ? 'justify-center' : ''} flex items-center mb-6`}>
              <div className="h-1 w-12 bg-brand-green mr-4"></div>
              <span className="text-brand-green font-medium">Unleashing Data Potential</span>
            </div>
            
            <h1 className={`font-bold text-brand-light mb-6 leading-tight ${
              isPortrait || isTablet ? 'text-3xl mx-auto max-w-2xl' : 'text-3xl md:text-4xl lg:text-5xl'
            }`}>
              Powering Your Business With AI
              <span className="text-brand-green block">From Idea to Implementation</span>
            </h1>
            
            <p className={`text-brand-light/80 ${
              isPortrait || isTablet ? 'mb-8 text-base mx-auto max-w-xl' : 'mb-8 text-lg'
            }`}>
              I help businesses leverage AI and data science to solve real problems and create measurable value.
            </p>
            
            <div className={`flex ${isPortrait || isTablet ? 'justify-center' : ''} flex-col sm:flex-row gap-4`}>
              <Button 
                className="bg-brand-green hover:bg-brand-green/90 text-black font-medium"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-green text-brand-green hover:bg-brand-green/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Latest Projects
              </Button>
            </div>
          </div>
          
          {/* Right side content - Logo and floating keywords */}
          <div className={`${isPortrait || isTablet ? 'w-full mt-16' : 'lg:w-1/2 mt-12 lg:mt-0'} flex justify-center`}>
            {/* Tablet layout with grid for landscape tablets */}
            {useGridKeywords && (
              <div className="w-full flex justify-center mt-8">
                <div className="tablet-hero-container">
                  {/* Logo and text together */}
                  <div className="flex flex-col items-center justify-center mb-12">
                    <LogoWithBlinkingEyes className="w-[150px]" />
                    <img 
                      src="/logo-text.svg" 
                      alt="Big Data Energy Text" 
                      className="w-[250px] mt-4"
                    />
                  </div>
                  
                  {/* Service keywords in a grid layout */}
                  <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
                    {serviceKeywords.map((keyword, index) => (
                      <button 
                        key={index}
                        onClick={() => scrollToService(keyword.serviceId)}
                        className="tablet-service-button bg-brand-teal/60 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center justify-center hover:bg-brand-teal/80 transition-all"
                      >
                        <keyword.icon className="text-brand-green mr-2" size={16} />
                        <span className="text-brand-light whitespace-nowrap">{keyword.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile/Portrait layout with floating keywords */}
            {useFloatingKeywords && (
              <div className={`w-full ${isPortrait && !isMobile ? 'max-w-[400px]' : 'max-w-[280px]'} mx-auto mt-8`}>
                {/* Container for logo, text, and keywords together */}
                <div className="relative">
                  {/* Container for logo and text as a single unit */}
                  <div className="flex flex-row items-center justify-center logo-text-container">
                    <LogoWithBlinkingEyes className={isPortrait && !isMobile ? "w-[120px]" : "w-[80px]"} />
                    <img 
                      src="/logo-text.svg" 
                      alt="Big Data Energy Text" 
                      className={isPortrait && !isMobile ? "w-[200px] ml-3" : "w-[160px] ml-2"} 
                    />
                  </div>
                  
                  {/* Floating keywords - positioned around logo+text */}
                  <button 
                    onClick={() => scrollToService(serviceKeywords[0].serviceId)}
                    className={`absolute -top-10 -left-8 bg-brand-teal/40 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center service-icon-mobile hover:bg-brand-teal/60 transition-colors ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <Mic className="text-brand-green mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="text-brand-light text-xs">Speaker</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[1].serviceId)}
                    className={`absolute -top-6 right-0 bg-brand-teal/40 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center service-icon-mobile hover:bg-brand-teal/60 transition-colors ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <Cpu className="text-brand-green mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="text-brand-light text-xs">AI Solutions</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[2].serviceId)}
                    className={`absolute top-8 right-0 bg-brand-teal/40 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center service-icon-mobile hover:bg-brand-teal/60 transition-colors ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <Sparkles className="text-brand-green mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="text-brand-light text-xs">Use Case</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[3].serviceId)}
                    className={`absolute bottom-0 right-0 bg-brand-teal/40 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center service-icon-mobile hover:bg-brand-teal/60 transition-colors ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <Code className="text-brand-green mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="text-brand-light text-xs">Development</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[4].serviceId)}
                    className={`absolute -left-8 top-8 bg-brand-teal/40 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center service-icon-mobile hover:bg-brand-teal/60 transition-colors ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <ClipboardList className="text-brand-green mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="text-brand-light text-xs">Workshops</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[5].serviceId)}
                    className={`absolute -bottom-6 -left-8 bg-brand-teal/40 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center service-icon-mobile hover:bg-brand-teal/60 transition-colors ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <BarChart2 className="text-brand-green mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="text-brand-light text-xs">Data Scientist</span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Desktop layout */}
            {!isPortrait && !isTablet && !isMobile && (
              <div className="relative w-full max-w-md">
                {/* Container for logo, text, and keywords together */}
                <div className="relative">
                  {/* Container for logo and text as a single unit */}
                  <div className="flex flex-row items-center justify-center logo-text-container">
                    <LogoWithBlinkingEyes className="w-[150px] sm:w-[180px] md:w-[200px]" />
                    <img 
                      src="/logo-text.svg" 
                      alt="Big Data Energy Text" 
                      className="w-[180px] sm:w-[220px] md:w-[250px] ml-4"
                    />
                  </div>
                  
                  {/* Floating keywords - positioned on top of logo+text */}
                  <button 
                    onClick={() => scrollToService(serviceKeywords[0].serviceId)}
                    className="absolute -top-16 -left-32 bg-brand-teal/40 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center service-icon hover:bg-brand-teal/60 transition-colors"
                  >
                    <Mic className="text-brand-green mr-2" size={18} />
                    <span className="text-brand-light">Speaker</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[1].serviceId)}
                    className="absolute -top-8 right-0 bg-brand-teal/40 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center service-icon hover:bg-brand-teal/60 transition-colors"
                  >
                    <Cpu className="text-brand-green mr-2" size={18} />
                    <span className="text-brand-light">AI Solutions</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[2].serviceId)}
                    className="absolute top-16 right-0 bg-brand-teal/40 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center service-icon hover:bg-brand-teal/60 transition-colors"
                  >
                    <Sparkles className="text-brand-green mr-2" size={18} />
                    <span className="text-brand-light">Use Case Validation</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[3].serviceId)}
                    className="absolute bottom-0 right-0 bg-brand-teal/40 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center service-icon hover:bg-brand-teal/60 transition-colors"
                  >
                    <Code className="text-brand-green mr-2" size={18} />
                    <span className="text-brand-light">Development</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[4].serviceId)}
                    className="absolute -left-32 top-16 bg-brand-teal/40 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center service-icon hover:bg-brand-teal/60 transition-colors"
                  >
                    <ClipboardList className="text-brand-green mr-2" size={18} />
                    <span className="text-brand-light">Workshops</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[5].serviceId)}
                    className="absolute -bottom-8 -left-32 bg-brand-teal/40 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center service-icon hover:bg-brand-teal/60 transition-colors"
                  >
                    <BarChart2 className="text-brand-green mr-2" size={18} />
                    <span className="text-brand-light">Data Scientist</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
