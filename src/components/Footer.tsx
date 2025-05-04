
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark border-t border-brand-teal/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-brand-green text-xl font-bold mb-4">BIG DATA ENERGY</h3>
            <p className="text-brand-light/70 mb-6 max-w-md">
              Helping businesses turn AI ideas into real, working solutions - through strategy, code and collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/natashanorsker/" className="text-brand-light/70 hover:text-brand-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@bigdataenergy.com" className="text-brand-light/70 hover:text-brand-green transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+4522437629" className="text-brand-light/70 hover:text-brand-green transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-light text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-brand-light/70 hover:text-brand-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-brand-light/70 hover:text-brand-green transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-brand-light/70 hover:text-brand-green transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-brand-light/70 hover:text-brand-green transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-brand-light/70 hover:text-brand-green transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-light text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#service-freelance-data-scientist" className="text-brand-light/70 hover:text-brand-green transition-colors">Freelance Data Scientist</a>
              </li>
              <li>
                <a href="#service-ai-use-case-validation-&-discovery" className="text-brand-light/70 hover:text-brand-green transition-colors">AI Use Case Validation</a>
              </li>
              <li>
                <a href="#service-public-speaking-&-keynotes" className="text-brand-light/70 hover:text-brand-green transition-colors">Public Speaking & Keynotes</a>
              </li>
              <li>
                <a href="#service-workshops-&-training" className="text-brand-light/70 hover:text-brand-green transition-colors">Workshops & Training</a>
              </li>
              <li>
                <a href="#service-end-to-end-ai-solutions" className="text-brand-light/70 hover:text-brand-green transition-colors">End-to-End AI Solutions</a>
              </li>
              <li>
                <a href="#service-full-stack-development" className="text-brand-light/70 hover:text-brand-green transition-colors">Full-Stack Development</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-brand-light/50 text-sm">
            &copy; {currentYear} Big Data Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
