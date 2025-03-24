import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Zap, AlertCircle, Sparkles } from "lucide-react";

export function Hero() {
  const [glitching, setGlitching] = useState(false);
  const ufoControls = useAnimation();
  
  // Random glitching effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, Math.random() * 10000 + 5000);
    
    // UFO hover animation
    const runUfoAnimation = async () => {
      while (true) {
        await ufoControls.start({
          x: Math.random() * 50 - 25,
          y: Math.random() * 30 - 15,
          transition: { duration: 4, ease: "easeInOut" }
        });
      }
    };
    
    runUfoAnimation();
    return () => clearInterval(glitchInterval);
  }, [ufoControls]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-40"></div>
      <div className="absolute w-96 h-96 -top-40 -left-40 rounded-full blur-3xl bg-[#00f0ff]/10 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 top-40 -right-40 rounded-full blur-3xl bg-[#00f0ff]/10 animate-pulse-slow animation-delay-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-[#00FF00]/10 border border-[#00FF00]/20 text-[#00FF00] mb-6">
                <Sparkles className="w-3 h-3 mr-1" />
                <span>STRAIGHT OUTTA AREA 51</span>
              </div>
              
              <div className="flex items-center mb-6">
                <img src="/images/alien-logo.png" alt="GlaCK0N" className="w-16 h-16 mr-4" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase">
                  <span className={`block text-white glitch ${glitching ? 'glow-text' : ''}`}>
                    GlaCK0N
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#FF00FF]">
                    TECHNOLOGIES
                  </span>
                </h1>
              </div>
              
              <p className="text-lg sm:text-xl text-[#FFFFFF] mb-8 max-w-xl">
                Pioneering technological disruption with alien intelligence. We're building what humans have only dreamed of, bringing otherworldly innovation to Earth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection("services")}
                  className="relative group px-8 py-6 h-auto border border-[#00FF00] bg-transparent hover:bg-[#00FF00]/10"
                >
                  <span className="relative z-10 flex items-center text-[#00FF00] uppercase tracking-wider font-medium">
                    Discover Our Technologies
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button 
                  onClick={() => scrollToSection("contact")}
                  variant="outline" 
                  className="relative group px-8 py-6 h-auto border-[#FF00FF]/30 hover:border-[#FF00FF]/60 hover:bg-[#FF00FF]/10"
                >
                  <span className="relative z-10 flex items-center text-[#FF00FF] uppercase tracking-wider font-medium">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Make Contact
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-96 tech-grid rounded-md border border-[#00FF00]/20 overflow-hidden scanner">
              {/* Alien Ship */}
              <motion.div 
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2"
                animate={ufoControls}
              >
                <div className="relative">
                  {/* UFO */}
                  <div className="w-40 h-20 relative">
                    {/* UFO top */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-gradient-to-b from-[#00FF00] to-[#009900] rounded-full overflow-hidden alien-glow">
                      <div className="absolute inset-0 opacity-50 tech-grid"></div>
                      <div className="h-2 w-full bg-white/30 absolute top-1/2 transform -translate-y-1/2"></div>
                      <div className="absolute inset-0 scanner"></div>
                    </div>
                    
                    {/* UFO bottom */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-[#262626] border border-[#00FF00]/50 rounded-full overflow-hidden">
                      <div className="absolute inset-0 tech-grid opacity-30"></div>
                      <div className="flex justify-around absolute inset-x-0 bottom-1">
                        <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse-slow"></div>
                        <div className="w-2 h-2 rounded-full bg-[#FF00FF] animate-pulse-slow animation-delay-300"></div>
                        <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse-slow animation-delay-600"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Beam */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-64 bg-gradient-to-b from-[#00FF00]/80 to-transparent">
                    <div className="absolute inset-0 opacity-50 mix-blend-overlay">
                      <svg width="100%" height="100%" viewBox="0 0 10 100" fill="none">
                        <path d="M5 0 L10 100 L0 100 Z" fill="white" fillOpacity="0.3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
                
              {/* Floating bits of data */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute h-2 w-2 rounded-full ${i % 2 === 0 ? 'bg-[#00FF00]/80' : 'bg-[#FF00FF]/80'}`}
                  style={{
                    left: `${Math.random() * 90 + 5}%`,
                    top: `${Math.random() * 80 + 15}%`,
                  }}
                  animate={{
                    y: [0, -Math.random() * 50 - 20],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
              
              {/* Ground elements */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#262626] to-transparent"></div>
              
              <div className="absolute bottom-4 inset-x-0 flex justify-center">
                <div className="text-[#00FF00] text-xs tracking-widest">ALIEN · TECHNOLOGY · DIVISION</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 border-t border-[#00FF00]/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group relative tech-border">
              <div className="px-6 py-4">
                <Zap className="w-6 h-6 text-[#00FF00] mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">&lt; 2025</div>
                <p className="text-white mt-2 uppercase tracking-wider text-sm">Product Launch Target</p>
              </div>
            </div>
            <div className="text-center group relative tech-border">
              <div className="px-6 py-4">
                <div className="w-6 h-6 text-[#FF00FF] mx-auto mb-2 alien-circle flex items-center justify-center">
                  <span className="text-xs">4.0</span>
                </div>
                <div className="text-3xl font-bold text-white">Industry 4.0</div>
                <p className="text-white mt-2 uppercase tracking-wider text-sm">Next-Gen Automation</p>
              </div>
            </div>
            <div className="text-center group relative tech-border">
              <div className="px-6 py-4">
                <Sparkles className="w-6 h-6 text-[#00FF00] mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">Full-Cycle</div>
                <p className="text-white mt-2 uppercase tracking-wider text-sm">AI Development & Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
