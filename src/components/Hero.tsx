
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
  
  const useFloatingKeywords = (isPortrait || isMobile) && !isNestHub;
  const useGridKeywords = (isTablet && !isPortrait) || isNestHub;
  
  const serviceKeywords = [
    { icon: Mic, text: "Speaker", position: "top-left", serviceId: "service-public-speaking-&-keynotes", dotColor: "text-bde-orange" },
    { icon: Cpu, text: "AI Solutions", position: "top-right", serviceId: "service-end-to-end-ai-solutions", dotColor: "text-bde-violet" },
    { icon: Sparkles, text: "Use Case Validation", position: "middle-right", serviceId: "service-ai-use-case-validation-&-discovery", dotColor: "text-bde-green" },
    { icon: Code, text: "Development", position: "bottom-right", serviceId: "service-full-stack-development", dotColor: "text-bde-violet" },
    { icon: ClipboardList, text: "Workshops", position: "middle-left", serviceId: "service-workshops-&-training", dotColor: "text-bde-green" },
    { icon: BarChart2, text: "Data Scientist", position: "bottom-left", serviceId: "service-freelance-data-scientist", dotColor: "text-bde-orange" }
  ];
  
  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tagBase = "bg-bde-deep border border-bde-green/12 backdrop-blur-sm rounded-lg flex items-center transition-colors";
  const tagHover = "hover:bg-bde-deep/80";
  
  return (
    <section 
      id="home" 
      className={`relative flex flex-col justify-center section-container bg-bde-void overflow-hidden ${
        isTablet ? 'min-h-[90vh] pt-24 pb-8' : isMobile ? 'min-h-screen pt-16' : 'min-h-screen pt-16'
      }`}
    >
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-bde-violet/[0.13] blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-bde-green/[0.13] blur-[120px]" />
      </div>

      <div className={`relative container mx-auto ${isTablet ? 'px-8 py-4' : 'px-4 py-8'}`}>
        <div className={`flex flex-col lg:flex-row items-center gap-8 ${
          isTablet ? 'mt-4 mb-8' : ''
        }`}>
          {/* Left side content */}
          <div className={`${isPortrait || isTablet ? 'w-full text-center' : 'lg:w-1/2'}`}>
            <div className={`${isPortrait || isTablet ? 'justify-center' : ''} flex items-center mb-6`}>
              <div className="h-1 w-12 bg-bde-green mr-4"></div>
              <span className="eyebrow text-bde-green">unleashing_data_potential</span>
            </div>
            
            <h1 className={`font-display font-light text-bde-frost mb-6 tracking-headline leading-headline ${
              isPortrait || isTablet ? 'text-3xl mx-auto max-w-2xl' : 'text-3xl md:text-4xl lg:text-5xl'
            }`}>
              Powering Your Business With AI
              <span className="text-bde-green block font-display font-light tracking-accent leading-section">From Idea to Implementation</span>
            </h1>
            
            <p className={`font-body text-bde-violet-soft/60 leading-body ${
              isPortrait || isTablet ? 'mb-8 text-[13px] mx-auto max-w-xl' : 'mb-8 text-sm'
            }`}>
              I help businesses leverage AI and data science to solve real problems and create measurable value.
            </p>
            
            <div className={`flex ${isPortrait || isTablet ? 'justify-center' : ''} flex-col sm:flex-row gap-4`}>
              <Button 
                className="bg-bde-green hover:bg-bde-green-dark text-bde-void font-display font-medium"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-bde-violet/35 text-bde-violet-soft hover:bg-transparent hover:border-bde-violet/60 hover:text-bde-violet-lightest font-body text-[11px]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                latest_projects →
              </Button>
            </div>
          </div>
          
          {/* Right side content - Logo and floating keywords */}
          <div className={`${isPortrait || isTablet ? 'w-full mt-16' : 'lg:w-1/2 mt-12 lg:mt-0'} flex justify-center`}>
            {/* Tablet layout with grid for landscape tablets */}
            {useGridKeywords && (
              <div className="w-full flex justify-center mt-8">
                <div className="tablet-hero-container">
                  <div className="flex flex-col items-center justify-center mb-12">
                    <LogoWithBlinkingEyes className="w-[150px]" />
                    <img 
                      src="/logo-text.svg" 
                      alt="Big Data Energy Text" 
                      className="w-[250px] mt-4"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
                    {serviceKeywords.map((keyword, index) => (
                      <button 
                        key={index}
                        onClick={() => scrollToService(keyword.serviceId)}
                        className={`tablet-service-button ${tagBase} ${tagHover} px-3 py-2 justify-center`}
                      >
                        <keyword.icon className={`${keyword.dotColor}/70 mr-2`} size={16} />
                        <span className="font-ui text-bde-green-soft/70 whitespace-nowrap">{keyword.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile/Portrait layout with floating keywords */}
            {useFloatingKeywords && (
              <div className={`w-full ${isPortrait && !isMobile ? 'max-w-[400px]' : 'max-w-[280px]'} mx-auto mt-8`}>
                <div className="relative">
                  <div className="flex flex-row items-center justify-center logo-text-container">
                    <LogoWithBlinkingEyes className={isPortrait && !isMobile ? "w-[120px]" : "w-[80px]"} />
                    <img 
                      src="/logo-text.svg" 
                      alt="Big Data Energy Text" 
                      className={isPortrait && !isMobile ? "w-[200px] ml-3" : "w-[160px] ml-2"} 
                    />
                  </div>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[0].serviceId)}
                    className={`absolute -top-10 -left-8 ${tagBase} ${tagHover} px-2 py-1 service-icon-mobile ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <Mic className="text-bde-orange/70 mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="font-ui text-bde-green-soft/70 text-[10px]">Speaker</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[1].serviceId)}
                    className={`absolute -top-6 right-0 ${tagBase} ${tagHover} px-2 py-1 service-icon-mobile ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <Cpu className="text-bde-violet/70 mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="font-ui text-bde-green-soft/70 text-[10px]">AI Solutions</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[2].serviceId)}
                    className={`absolute top-8 right-0 ${tagBase} ${tagHover} px-2 py-1 service-icon-mobile ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <Sparkles className="text-bde-green/70 mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="font-ui text-bde-green-soft/70 text-[10px]">Use Case</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[3].serviceId)}
                    className={`absolute bottom-0 right-0 ${tagBase} ${tagHover} px-2 py-1 service-icon-mobile ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <Code className="text-bde-violet/70 mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="font-ui text-bde-green-soft/70 text-[10px]">Development</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[4].serviceId)}
                    className={`absolute -left-8 top-8 ${tagBase} ${tagHover} px-2 py-1 service-icon-mobile ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <ClipboardList className="text-bde-green/70 mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="font-ui text-bde-green-soft/70 text-[10px]">Workshops</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[5].serviceId)}
                    className={`absolute -bottom-6 -left-8 ${tagBase} ${tagHover} px-2 py-1 service-icon-mobile ${isPortrait && !isMobile ? 'portrait-tablet-keyword' : ''}`}
                  >
                    <BarChart2 className="text-bde-orange/70 mr-1" size={isPortrait && !isMobile ? 16 : 12} />
                    <span className="font-ui text-bde-green-soft/70 text-[10px]">Data Scientist</span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Desktop layout */}
            {!isPortrait && !isTablet && !isMobile && (
              <div className="relative w-full max-w-md">
                <div className="relative">
                  <div className="flex flex-row items-center justify-center logo-text-container">
                    <LogoWithBlinkingEyes className="w-[150px] sm:w-[180px] md:w-[200px]" />
                    <img 
                      src="/logo-text.svg" 
                      alt="Big Data Energy Text" 
                      className="w-[180px] sm:w-[220px] md:w-[250px] ml-4"
                    />
                  </div>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[0].serviceId)}
                    className={`absolute -top-16 -left-32 ${tagBase} ${tagHover} px-4 py-2 service-icon`}
                  >
                    <Mic className="text-bde-orange/70 mr-2" size={18} />
                    <span className="font-ui text-bde-green-soft/70 text-[11px]">Speaker</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[1].serviceId)}
                    className={`absolute -top-8 right-0 ${tagBase} ${tagHover} px-4 py-2 service-icon`}
                  >
                    <Cpu className="text-bde-violet/70 mr-2" size={18} />
                    <span className="font-ui text-bde-green-soft/70 text-[11px]">AI Solutions</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[2].serviceId)}
                    className={`absolute top-16 right-0 ${tagBase} ${tagHover} px-4 py-2 service-icon`}
                  >
                    <Sparkles className="text-bde-green/70 mr-2" size={18} />
                    <span className="font-ui text-bde-green-soft/70 text-[11px]">Use Case Validation</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[3].serviceId)}
                    className={`absolute bottom-0 right-0 ${tagBase} ${tagHover} px-4 py-2 service-icon`}
                  >
                    <Code className="text-bde-violet/70 mr-2" size={18} />
                    <span className="font-ui text-bde-green-soft/70 text-[11px]">Development</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[4].serviceId)}
                    className={`absolute -left-32 top-16 ${tagBase} ${tagHover} px-4 py-2 service-icon`}
                  >
                    <ClipboardList className="text-bde-green/70 mr-2" size={18} />
                    <span className="font-ui text-bde-green-soft/70 text-[11px]">Workshops</span>
                  </button>
                  
                  <button 
                    onClick={() => scrollToService(serviceKeywords[5].serviceId)}
                    className={`absolute -bottom-8 -left-32 ${tagBase} ${tagHover} px-4 py-2 service-icon`}
                  >
                    <BarChart2 className="text-bde-orange/70 mr-2" size={18} />
                    <span className="font-ui text-bde-green-soft/70 text-[11px]">Data Scientist</span>
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
