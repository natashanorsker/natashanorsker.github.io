
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import TypedLogoText from "./TypedLogoText";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-4 pt-4">
      <div
        className={`container mx-auto px-6 py-3 rounded-xl transition-all duration-300 ${
          isScrolled
            ? "bg-bde-void/80 backdrop-blur-lg"
            : "bg-bde-void/40 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href={window.location.pathname}
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace(window.location.pathname);
              }}
            >
              <TypedLogoText />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="font-ui text-bde-violet-muted hover:text-bde-frost transition-colors text-sm"
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')}>
              <Button className="bg-bde-green hover:bg-bde-green-dark text-bde-void font-display font-medium">
                Get in Touch
              </Button>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-bde-frost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-bde-void/95 backdrop-blur-md p-4 rounded-lg shadow-lg">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="font-ui text-bde-violet-muted hover:text-bde-frost transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')}>
                <Button className="bg-bde-green hover:bg-bde-green-dark text-bde-void font-display font-medium w-full">
                  Get in Touch
                </Button>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
