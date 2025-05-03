
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-brand-teal/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-brand-green mr-4"></div>
              <span className="text-brand-green font-medium">About Me</span>
            </div>
            
            <h2 className="section-title">Transforming Data into Strategic Advantages</h2>
            
            <p className="text-brand-light/80 mb-6 text-lg">
              I'm a freelance data scientist and ML engineer with a degree in AI & Data from DTU, 6+ years of hands-on experience in the field of AI, and a track record of delivering real-world AI impact across industries.
            </p>
            
            <p className="text-brand-light/70 mb-6">
              I've worked as an AI consultant, led technical projects in fast-moving teams, facilitated workshops, and advised decision-makers. I'm a certified Google Cloud Professional Machine Learning Engineer, the founder of Women in AI Denmark, and have been nominated for multiple tech awards.
            </p>
            
            <p className="text-brand-light/70 mb-8">
              What sets me apart is my ability to move fluidly between strategy and execution — from shaping AI ideas to building full-stack solutions ready for production. Whether I'm working with international teams or speaking to 650+ people, I focus on cutting through complexity and helping businesses make AI work.
            </p>
            
            <Button className="bg-brand-green hover:bg-brand-green/80 text-black font-medium">
              Download CV
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-xl">
              <img 
                src="/images/speaking-panel.jpg" 
                alt="Speaking at a professional panel" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
