
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bde-void py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-logo text-bde-violet text-xl font-bold tracking-logo mb-4">BIG DATA ENERGY</h3>
            <p className="font-display font-normal text-bde-frost/70 mb-6 max-w-md text-[14px] leading-body">
              Helping businesses turn AI ideas into real, working solutions - through strategy, code and collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/natashanorsker/" className="text-bde-frost/70 hover:text-bde-violet transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@bigdataenergy.com" className="text-bde-frost/70 hover:text-bde-violet transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+4522437629" className="text-bde-frost/70 hover:text-bde-violet transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-bde-frost text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">Home</a>
              </li>
              <li>
                <a href="#services" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">Services</a>
              </li>
              <li>
                <a href="#about" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">About</a>
              </li>
              <li>
                <a href="#projects" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">Projects</a>
              </li>
              <li>
                <a href="#contact" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-bde-frost text-base mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#service-freelance-data-scientist" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">Freelance Data Scientist</a>
              </li>
              <li>
                <a href="#service-ai-use-case-validation-&-discovery" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">AI Use Case Validation</a>
              </li>
              <li>
                <a href="#service-public-speaking-&-keynotes" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">Public Speaking & Keynotes</a>
              </li>
              <li>
                <a href="#service-workshops-&-training" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">Workshops & Training</a>
              </li>
              <li>
                <a href="#service-end-to-end-ai-solutions" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">End-to-End AI Solutions</a>
              </li>
              <li>
                <a href="#service-full-stack-development" className="font-display font-normal text-bde-frost/70 hover:text-bde-violet transition-colors text-[13px]">Full-Stack Development</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="font-display font-normal text-bde-frost/50 text-[12px]">
            &copy; {currentYear} Big Data Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
