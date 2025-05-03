
import { ArrowRight, BarChart2, Cpu, Code, Sparkles, Mic, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import LogoWithBlinkingEyes from './LogoWithBlinkingEyes';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Add keyframes for floating animations to the stylesheet
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float-1 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-5px, -5px); }
      }
      @keyframes float-2 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(5px, -8px); }
      }
      @keyframes float-3 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(8px, 5px); }
      }
      @keyframes float-4 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-8px, 7px); }
      }
      @keyframes float-5 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(10px, 0px); }
      }
      @keyframes float-6 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-7px, -3px); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Handle mouse movement with dramatically increased sensitivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to center of container
      // Much higher sensitivity with smaller divisor (8 instead of 15)
      setMousePosition({
        x: (e.clientX - centerX) / 8,
        y: (e.clientY - centerY) / 8
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Calculate transform with much higher multipliers
  const getTransform = (position: string) => {
    // Dramatically increased multipliers for very evident movement
    switch(position) {
      case 'top-left': return `translate(${-mousePosition.x * 2.5}px, ${-mousePosition.y * 2.5}px)`;
      case 'top-right': return `translate(${mousePosition.x * 3.0}px, ${-mousePosition.y * 3.0}px)`;
      case 'bottom-left': return `translate(${-mousePosition.x * 2.8}px, ${mousePosition.y * 2.8}px)`;
      case 'bottom-right': return `translate(${mousePosition.x * 3.2}px, ${mousePosition.y * 3.2}px)`;
      case 'middle-left': return `translate(${-mousePosition.x * 3.5}px, ${mousePosition.y * 1.5}px)`;
      case 'middle-right': return `translate(${mousePosition.x * 2.5}px, ${mousePosition.y * 2.5}px)`;
      default: return 'translate(0, 0)';
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-teal/20"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-brand-green mr-4"></div>
              <span className="text-brand-green font-medium">Unleashing Data Potential</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-light mb-6 leading-tight">
              Powering Your Business With AI<br />
              <span className="text-brand-green">From Idea to Implementation</span>
            </h1>
            
            <p className="text-lg text-brand-light/80 mb-8 max-w-lg">
              I help businesses bring AI into their organization. I turn complex AI challenges into practical, value-creating solutions by combining technical know-how with real-world understanding of how AI fits into products, teams, and strategy. Whether you need a hands-on data scientist, an AI advisor, or a speaker who makes AI make sense, I help bridge the gap between ambition and execution. My ambition is to cut down on AI Bullshit Bingo and deliver on real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button className="bg-brand-green hover:bg-brand-green/80 text-black font-medium px-6 py-6 text-lg">
                  View Services
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10 font-medium px-6 py-6 text-lg">
                  Latest Projects
                </Button>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md" ref={containerRef}>
              <div className="flex justify-start items-center">
                <LogoWithBlinkingEyes />
                <div className="ml-4">
                  <img 
                    src="/logo-text.svg" 
                    alt="Big Data Energy Text" 
                    className="w-full h-auto max-w-[400px]" 
                  />
                </div>
              </div>
              
              {/* Floating service boxes */}
              <a href="#service-freelance-data-scientist">
                <div 
                  className="absolute -bottom-24 -left-24 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in hover:scale-110 hover:bg-brand-teal/80 transition-all duration-300 cursor-pointer" 
                  style={{ 
                    animationDelay: "0.8s",
                    animation: "float-1 4s ease-in-out infinite",
                    transform: getTransform('bottom-left')
                  }}>
                  <div className="flex items-center">
                    <BarChart2 className="text-brand-green mr-3 group-hover:text-brand-light" />
                    <span className="text-brand-light font-medium">Data Scientist</span>
                  </div>
                </div>
              </a>
              
              <a href="#service-end-to-end-ai-solutions">
                <div 
                  className="absolute -top-4 right-4 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in hover:scale-110 hover:bg-brand-teal/80 transition-all duration-300 cursor-pointer" 
                  style={{ 
                    animationDelay: "1s",
                    animation: "float-2 5s ease-in-out infinite",
                    transform: getTransform('top-right')
                  }}>
                  <div className="flex items-center">
                    <Cpu className="text-brand-green mr-3 group-hover:text-brand-light" />
                    <span className="text-brand-light font-medium">AI Solutions</span>
                  </div>
                </div>
              </a>
              
              <a href="#service-full-stack-development">
                <div 
                  className="absolute bottom-0 -right-28 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in hover:scale-110 hover:bg-brand-teal/80 transition-all duration-300 cursor-pointer" 
                  style={{ 
                    animationDelay: "1.2s",
                    animation: "float-3 4.5s ease-in-out infinite",
                    transform: getTransform('bottom-right')
                  }}>
                  <div className="flex items-center">
                    <Code className="text-brand-green mr-3 group-hover:text-brand-light" />
                    <span className="text-brand-light font-medium">Development</span>
                  </div>
                </div>
              </a>
              
              <a href="#service-public-speaking-&-keynotes">
                <div 
                  className="absolute -top-16 -left-12 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in hover:scale-110 hover:bg-brand-teal/80 transition-all duration-300 cursor-pointer" 
                  style={{ 
                    animationDelay: "1.4s",
                    animation: "float-4 5.5s ease-in-out infinite",
                    transform: getTransform('top-left')
                  }}>
                  <div className="flex items-center">
                    <Mic className="text-brand-green mr-3 group-hover:text-brand-light" />
                    <span className="text-brand-light font-medium">Speaker</span>
                  </div>
                </div>
              </a>
              
              <a href="#service-ai-use-case-validation-&-discovery">
                <div 
                  className="absolute top-1/3 -right-32 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in hover:scale-110 hover:bg-brand-teal/80 transition-all duration-300 cursor-pointer" 
                  style={{ 
                    animationDelay: "1.6s",
                    animation: "float-5 6s ease-in-out infinite",
                    transform: getTransform('middle-right')
                  }}>
                  <div className="flex items-center">
                    <Sparkles className="text-brand-green mr-3 group-hover:text-brand-light" />
                    <span className="text-brand-light font-medium">Use Case Validation</span>
                  </div>
                </div>
              </a>
              
              <a href="#service-workshops-&-training">
                <div 
                  className="absolute top-1/2 -left-28 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in hover:scale-110 hover:bg-brand-teal/80 transition-all duration-300 cursor-pointer" 
                  style={{ 
                    animationDelay: "1.8s",
                    animation: "float-6 5s ease-in-out infinite",
                    transform: getTransform('middle-left')
                  }}>
                  <div className="flex items-center">
                    <ClipboardList className="text-brand-green mr-3 group-hover:text-brand-light" />
                    <span className="text-brand-light font-medium">Workshops</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" className="text-brand-light/50 hover:text-brand-green transition-colors">
          <ArrowRight size={24} className="transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
