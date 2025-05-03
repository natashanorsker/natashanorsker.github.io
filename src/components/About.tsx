
import { ArrowRight, Award, ChartLine, Users } from "lucide-react";
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
              I'm a data scientist, AI engineer, and developer with a passion for solving complex problems using cutting-edge technology and data-driven approaches.
            </p>
            
            <p className="text-brand-light/70 mb-8">
              With extensive experience across multiple industries, I help organizations unlock the value in their data through custom solutions that drive growth, efficiency, and innovation. My approach combines technical expertise with strategic thinking to deliver results that align with business objectives.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-brand-green text-4xl font-bold mb-2">7+</div>
                <p className="text-brand-light/70">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-brand-green text-4xl font-bold mb-2">50+</div>
                <p className="text-brand-light/70">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-brand-green text-4xl font-bold mb-2">25+</div>
                <p className="text-brand-light/70">Happy Clients</p>
              </div>
            </div>
            
            <Button className="bg-brand-green hover:bg-brand-green/80 text-black font-medium">
              Download CV
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="space-y-8">
            <div className="card flex p-6">
              <div className="mr-6">
                <div className="p-4 bg-brand-green/20 rounded-lg">
                  <ChartLine className="text-brand-green" size={30} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-light mb-2">Data-Driven Approach</h3>
                <p className="text-brand-light/70">
                  I leverage advanced analytics and statistical methods to extract meaningful insights from complex datasets, enabling informed decision-making and strategic planning.
                </p>
              </div>
            </div>
            
            <div className="card flex p-6">
              <div className="mr-6">
                <div className="p-4 bg-brand-green/20 rounded-lg">
                  <Users className="text-brand-green" size={30} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-light mb-2">Collaborative Process</h3>
                <p className="text-brand-light/70">
                  I work closely with clients to understand their unique challenges and requirements, ensuring solutions are tailored to their specific needs and objectives.
                </p>
              </div>
            </div>
            
            <div className="card flex p-6">
              <div className="mr-6">
                <div className="p-4 bg-brand-green/20 rounded-lg">
                  <Award className="text-brand-green" size={30} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-light mb-2">Quality & Innovation</h3>
                <p className="text-brand-light/70">
                  I prioritize high-quality, innovative solutions that not only address current challenges but also position clients for future success in an evolving technological landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
