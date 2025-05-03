
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark border-t border-brand-teal/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-brand-green text-xl font-bold mb-4">BIG DATA ENERGY</h3>
            <p className="text-brand-light/70 mb-6 max-w-md">
              Providing expert data science, AI engineering, and development services to transform your data into strategic business advantages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-light/70 hover:text-brand-green transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-brand-light/70 hover:text-brand-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-brand-light/70 hover:text-brand-green transition-colors">
                <Twitter size={20} />
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
                <a href="#" className="text-brand-light/70 hover:text-brand-green transition-colors">Data Science</a>
              </li>
              <li>
                <a href="#" className="text-brand-light/70 hover:text-brand-green transition-colors">AI Engineering</a>
              </li>
              <li>
                <a href="#" className="text-brand-light/70 hover:text-brand-green transition-colors">Development</a>
              </li>
              <li>
                <a href="#" className="text-brand-light/70 hover:text-brand-green transition-colors">Analytics</a>
              </li>
              <li>
                <a href="#" className="text-brand-light/70 hover:text-brand-green transition-colors">Strategy Consulting</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-teal/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-light/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Big Data Energy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-brand-light/50 text-sm hover:text-brand-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-light/50 text-sm hover:text-brand-green transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
