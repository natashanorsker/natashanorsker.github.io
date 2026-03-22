
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-bde-void">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-1 w-12 bg-bde-orange mr-4"></div>
              <span className="eyebrow text-bde-orange">about_me</span>
            </div>
            
            <h2 className="section-title">Transforming Data into Strategic Advantages</h2>
            
            <p className="font-display font-normal text-bde-violet-soft/60 mb-6 text-[15px] leading-body">
              I'm a freelance data scientist and ML engineer with a degree in AI & Data from DTU, 6+ years of hands-on experience in the field of AI, and a track record of delivering real-world AI impact across industries.
            </p>
            
            <p className="font-display font-normal text-bde-violet-soft/60 mb-6 text-[14px] leading-body">
              I've worked as an AI consultant, led technical projects in fast-moving teams, facilitated workshops, and advised decision-makers. I'm a certified Google Cloud Professional Machine Learning Engineer, the founder of Women in AI Denmark, and have been nominated for multiple tech awards.
            </p>
            
            <p className="font-display font-normal text-bde-violet-soft/60 mb-8 text-[14px] leading-body">
              What sets me apart is my ability to move fluidly between strategy and execution — from shaping AI ideas to building full-stack solutions ready for production. Whether I'm working with international teams or speaking to 650+ people, I focus on cutting through complexity and helping businesses make AI work.
            </p>
            
            <Button className="bg-bde-orange hover:bg-bde-orange-dark text-white font-display font-medium">
              Download CV
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-xl">
              <img 
                src="/images/speaking-panel.jpg" 
                alt="Speaking at a professional panel" 
                loading="lazy"
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
