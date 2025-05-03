
import { ArrowRight, Database, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-teal/20"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
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
              Expert data science, AI engineering, and development services to transform your raw data into strategic business advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-green hover:bg-brand-green/80 text-black font-medium px-6 py-6 text-lg">
                View Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10 font-medium px-6 py-6 text-lg">
                Latest Projects
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/6db0e114-a1cc-4d6a-af4f-e5a900fd7965.png" 
                alt="Big Data Energy Logo" 
                className="w-64 md:w-80 h-auto animate-fade-in" 
                style={{ animationDelay: "0.6s" }}
              />
              
              <div className="absolute -bottom-6 -left-6 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center">
                  <Database className="text-brand-green mr-3" />
                  <span className="text-brand-light font-medium">Data Science</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in" style={{ animationDelay: "1s" }}>
                <div className="flex items-center">
                  <Cpu className="text-brand-green mr-3" />
                  <span className="text-brand-light font-medium">AI Engineering</span>
                </div>
              </div>
              
              <div className="absolute bottom-24 -right-12 p-4 bg-brand-teal/60 backdrop-blur-md rounded-xl animate-fade-in" style={{ animationDelay: "1.2s" }}>
                <div className="flex items-center">
                  <Code className="text-brand-green mr-3" />
                  <span className="text-brand-light font-medium">Development</span>
                </div>
              </div>
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
