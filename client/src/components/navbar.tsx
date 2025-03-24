import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X, Zap, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const isMobile = useIsMobile();
  const [glowing, setGlowing] = useState(false);

  // Randomly trigger the glowing effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlowing(true);
      setTimeout(() => setGlowing(false), 800);
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      if (location !== "/") {
        setLocation("/");
      }
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
      scrolled 
        ? "bg-[#262626]/90 backdrop-blur-lg border-[#00FF00]/10 tech-border" 
        : "bg-transparent border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              if (location !== "/") {
                setLocation("/");
              }
            }}>
              <div className={cn(
                "h-10 w-10 rounded-md relative bg-[#262626] overflow-hidden tech-grid border border-[#00FF00]/30 transition-all duration-300",
                glowing ? "alien-glow" : ""
              )}>
                <div className="absolute inset-0 tech-grid opacity-30"></div>
                <div className="absolute inset-0 scanner"></div>
                <img src="/images/alien-logo.png" className="h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="GlaCK0N" />
              </div>
              <div className="ml-3 flex flex-col">
                <span className={cn(
                  "text-lg font-bold text-white tracking-wider glitch uppercase",
                  glowing ? "glow-text" : ""
                )}>GlaCK0N</span>
                <span className="text-xs text-[#00FF00] tracking-widest -mt-1">ALIEN TECHNOLOGY</span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("services")} className="text-white hover:text-[#FF00FF] transition-colors duration-200 uppercase tracking-wider text-sm font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-[#FF00FF] transition-colors duration-200 uppercase tracking-wider text-sm font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("roadmap")} className="text-white hover:text-[#FF00FF] transition-colors duration-200 uppercase tracking-wider text-sm font-medium">
              Roadmap
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" className="border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF]/10 hover:text-white relative group overflow-hidden uppercase tracking-wider">
              <span className="relative z-10">Make Contact</span>
              <span className="absolute inset-0 bg-[#FF00FF]/0 group-hover:bg-[#FF00FF]/10 transition-all duration-300"></span>
            </Button>
          </div>

          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-[#00FF00] hover:text-white hover:bg-[#00FF00]/10">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div className={cn(
          "fixed top-[60px] left-0 right-0 z-50 md:hidden bg-[#262626]/95 backdrop-blur-lg border-b border-[#00FF00]/10 transition-all duration-300 transform",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}>
          <div className="px-4 pt-4 pb-6 space-y-3">
            <button 
              onClick={() => scrollToSection("services")} 
              className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:text-[#FF00FF] border-l-2 border-transparent hover:border-[#FF00FF] transition-all duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:text-[#FF00FF] border-l-2 border-transparent hover:border-[#FF00FF] transition-all duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("roadmap")} 
              className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:text-[#FF00FF] border-l-2 border-transparent hover:border-[#FF00FF] transition-all duration-200"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:text-[#FF00FF] border border-[#FF00FF]/50 mt-4"
            >
              <span className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 text-[#FF00FF]" />
                Make Contact
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}