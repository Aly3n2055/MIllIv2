import { motion, useAnimation, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Check, ArrowRight, ChevronRight, ArrowRightCircle, CheckCircle, Clock, Sparkles, Telescope, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RoadmapPhase {
  id: string;
  number: number;
  title: string;
  timeline: string;
  points: string[];
  color: string;
}

export function Roadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const phases: RoadmapPhase[] = [
    {
      id: "phase1",
      number: 1,
      title: "Foundation & Infrastructure Setup",
      timeline: "0-6 months",
      color: "from-indigo-500 to-purple-600",
      points: [
        "Establish AI research and development frameworks",
        "Build initial service prototypes",
        "Develop partnerships and outreach strategies"
      ]
    },
    {
      id: "phase2",
      number: 2,
      title: "Product & Service Expansion",
      timeline: "6-12 months",
      color: "from-blue-500 to-purple-500",
      points: [
        "Launch MVP AI solutions",
        "Scale AI automation services",
        "Refine business model based on client feedback"
      ]
    },
    {
      id: "phase3",
      number: 3,
      title: "Market Penetration & Growth",
      timeline: "1-2 years",
      color: "from-indigo-600 to-blue-500",
      points: [
        "Expand subscription-based AI service offerings",
        "Develop strategic collaborations with enterprises",
        "Invest in AI model improvements and R&D"
      ]
    },
    {
      id: "phase4",
      number: 4,
      title: "Global Scaling & Innovation",
      timeline: "2+ years",
      color: "from-purple-600 to-indigo-500",
      points: [
        "Position MIT as a global AI automation leader",
        "Launch AI education initiatives to drive adoption",
        "Develop next-gen AI capabilities for cutting-edge solutions"
      ]
    }
  ];

  const progressVariants: Variants = {
    initial: { width: "0%" },
    animate: (custom: number) => ({
      width: `${(custom + 1) * 25}%`,
      transition: { duration: 0.8, ease: "easeInOut" }
    })
  };

  const nodeVariants: Variants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: { scale: 1.2, opacity: 1 },
    completed: { scale: 1, opacity: 1 }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const pointVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.1, duration: 0.4 }
    }),
    hover: { scale: 1.05, x: 5 }
  };

  useEffect(() => {
    controls.start("animate");
  }, [activePhase, controls]);

  const handlePhaseClick = (index: number) => {
    setActivePhase(index);
  };

  const goToNextPhase = () => {
    if (activePhase < phases.length - 1) {
      setActivePhase(activePhase + 1);
    }
  };

  const goToPrevPhase = () => {
    if (activePhase > 0) {
      setActivePhase(activePhase - 1);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="roadmap" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute w-96 h-96 top-1/3 -right-40 rounded-full blur-3xl bg-[#00f0ff]/10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] mb-6">
            <Rocket className="w-3 h-3 mr-1" />
            <span>PROJECT TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">
            <span className="block text-white mb-2">Strategic Deployment</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#0080ff]">
              Implementation Roadmap
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            MIT follows a phased development approach to ensure successful implementation and growth beyond conventional limitations.
          </p>
        </div>
        
        {/* Interactive Timeline */}
        <div className="mb-16" ref={timelineRef}>
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="h-2 bg-[#08080c] rounded-full mb-6 relative overflow-hidden border border-[#7c3aed]/30 tech-border">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] rounded-full scanner"
                variants={progressVariants}
                initial="initial"
                animate={controls}
                custom={activePhase}
              />
            </div>
            
            {/* Phase Nodes */}
            <div className="flex justify-between relative -mt-12">
              {phases.map((phase, index) => (
                <div key={phase.id} className="flex flex-col items-center">
                  <motion.button
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer relative z-10 border overflow-hidden",
                      index <= activePhase 
                        ? "bg-[#08080c] border-[#7c3aed] alien-glow" 
                        : "bg-[#08080c] border-[#7c3aed]/30"
                    )}
                    variants={nodeVariants}
                    initial="inactive"
                    animate={index === activePhase ? "active" : index < activePhase ? "completed" : "inactive"}
                    onClick={() => handlePhaseClick(index)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {index <= activePhase && (
                      <div className="absolute inset-0 tech-grid opacity-30"></div>
                    )}
                    {index <= activePhase && (
                      <div className="absolute inset-0 scanner"></div>
                    )}
                    
                    {index < activePhase ? (
                      <CheckCircle className="h-6 w-6 text-[#7c3aed] relative z-10" />
                    ) : index === activePhase ? (
                      <span className="text-[#7c3aed] font-bold relative z-10">{phase.number}</span>
                    ) : (
                      <span className="text-gray-400 font-bold relative z-10">{phase.number}</span>
                    )}
                  </motion.button>
                  <div className="mt-2 text-center">
                    <p className={cn(
                      "font-medium transition-colors text-sm uppercase tracking-wider",
                      index === activePhase ? "text-[#7c3aed]" : "text-gray-400"
                    )}>
                      {phase.title.split(' ').slice(0, 2).join(' ')}
                    </p>
                    <p className={cn(
                      "text-xs",
                      index === activePhase ? "text-white" : "text-gray-500"
                    )}>{phase.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Phase Content */}
        <div className="bg-[#08080c]/60 rounded-2xl border border-[#7c3aed]/30 p-6 md:p-10 overflow-hidden tech-border relative">
          <div className="absolute inset-0 tech-grid opacity-30"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            <motion.div 
              key={`content-${activePhase}`}
              className="flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              <div className="mb-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full alien-circle flex items-center justify-center text-[#7c3aed] font-bold mr-4 relative overflow-hidden">
                    <div className="absolute inset-0 scanner"></div>
                    <span className="relative z-10">{phases[activePhase].number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{phases[activePhase].title}</h3>
                </div>
                <div className="flex items-center mt-2 ml-16">
                  <Clock className="h-4 w-4 text-[#7c3aed] mr-2" />
                  <span className="text-[#7c3aed] text-sm">{phases[activePhase].timeline}</span>
                </div>
              </div>
              
              <ul className="space-y-5 pl-16">
                {phases[activePhase].points.map((point, index) => (
                  <motion.li 
                    key={`point-${activePhase}-${index}`}
                    className="flex items-start group"
                    variants={pointVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    whileHover="hover"
                    onHoverStart={() => setHoveredPoint(index)}
                    onHoverEnd={() => setHoveredPoint(null)}
                  >
                    <CheckCircle className={cn(
                      "h-5 w-5 mr-3 mt-0.5 flex-shrink-0 transition-colors",
                      hoveredPoint === index ? "text-[#7c3aed]" : "text-[#7c3aed]/70"
                    )} />
                    <span className="text-gray-200 group-hover:text-white transition-colors">{point}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex space-x-4 mt-8 pl-16">
                <Button 
                  variant="outline" 
                  disabled={activePhase === 0}
                  onClick={goToPrevPhase}
                  className={cn(
                    "border-[#7c3aed]/30 text-[#7c3aed] hover:bg-[#7c3aed]/10",
                    activePhase === 0 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  Previous
                </Button>
                <Button 
                  disabled={activePhase === phases.length - 1}
                  onClick={goToNextPhase}
                  className={cn(
                    "bg-[#08080c] border border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed]/10 relative overflow-hidden group",
                    activePhase === phases.length - 1 && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <span className="relative z-10 flex items-center">
                    Next Phase
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              key={`visual-${activePhase}`}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square rounded-xl bg-[#08080c] p-8 relative overflow-hidden border border-[#7c3aed]/30 tech-border scanner">
                <div className="absolute inset-0 tech-grid opacity-30"></div>
                
                {/* Phase-specific visualization */}
                {activePhase === 0 && (
                  <motion.div 
                    className="h-full w-full flex items-center justify-center relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-[#7c3aed]/10 opacity-70 animate-pulse-slow alien-glow" />
                        <div className="w-24 h-24 rounded-full bg-[#7c3aed]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow animation-delay-300 scanner" />
                        <div className="w-16 h-16 rounded-full border border-[#7c3aed] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center tech-border overflow-hidden">
                          <div className="absolute inset-0 scanner"></div>
                          <span className="text-[#7c3aed] font-bold text-xl relative z-10">MIT</span>
                        </div>
                      </div>
                      <div className="mt-8 grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <motion.div 
                            key={`foundation-${i}`}
                            className="h-16 w-16 rounded-md bg-[#080b0e] border border-[#7c3aed]/40 flex items-center justify-center overflow-hidden relative tech-border"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <div className="absolute inset-0 tech-grid opacity-30"></div>
                            <div className="h-8 w-8 rounded-full border border-[#7c3aed]/70 flex items-center justify-center relative z-10">
                              <span className="text-[#7c3aed] font-bold text-xs">{i}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activePhase === 1 && (
                  <motion.div 
                    className="h-full w-full flex items-center justify-center relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid grid-cols-2 gap-6 w-full">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div 
                          key={`product-${i}`}
                          className="aspect-square rounded-lg bg-[#080b0e] p-4 border border-[#7c3aed]/40 tech-border flex flex-col justify-between relative overflow-hidden group"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          <div className="absolute inset-0 tech-grid opacity-20"></div>
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanner transition-opacity duration-500"></div>
                          <div className="h-10 w-10 rounded-md bg-[#08080c] border border-[#7c3aed]/70 flex items-center justify-center relative z-10 overflow-hidden">
                            <div className="absolute inset-0 tech-grid opacity-30"></div>
                            <span className="text-[#7c3aed] font-bold text-xs relative z-10">MI-{i}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(4)].map((_, idx) => (
                              <div 
                                key={`dot-${i}-${idx}`} 
                                className={`w-2 h-2 rounded-full ${idx < i ? 'bg-[#7c3aed]' : 'bg-[#7c3aed]/20'}`}
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {activePhase === 2 && (
                  <motion.div 
                    className="h-full w-full flex items-center justify-center relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex flex-col w-full h-full items-center justify-center">
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {[1, 2, 3].map((i) => (
                          <motion.div 
                            key={`node-${i}`}
                            className="h-14 w-14 rounded-full border border-[#7c3aed]/70 flex items-center justify-center text-[#7c3aed] relative tech-border overflow-hidden"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                          >
                            <div className="absolute inset-0 scanner"></div>
                            <span className="text-xs font-bold relative z-10">N-{i}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="w-36 h-36 rounded-full border-2 border-[#7c3aed] flex items-center justify-center relative alien-glow tech-border overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="absolute inset-0 tech-grid opacity-30"></div>
                        <div className="absolute inset-0 scanner"></div>
                        <span className="text-[#7c3aed] font-bold text-xl relative z-10">MIT</span>
                        <div className="absolute -inset-1 border border-[#7c3aed]/20 rounded-full"></div>
                        <div className="absolute -inset-3 border border-[#7c3aed]/10 rounded-full animate-pulse-slow"></div>
                      </motion.div>
                      
                      <div className="grid grid-cols-4 gap-4 mt-12">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div 
                            key={`expansion-${i}`}
                            className="h-12 w-12 rounded-lg border border-[#7c3aed]/40 bg-[#080b0e] relative overflow-hidden tech-border"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                          >
                            <div className="absolute inset-0 tech-grid opacity-20"></div>
                            <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#7c3aed]/20 flex items-center justify-center">
                              <span className="text-[#7c3aed] text-[8px]">{i}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activePhase === 3 && (
                  <motion.div 
                    className="h-full w-full flex items-center justify-center relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative w-full h-full">
                      <motion.div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-[#7c3aed] flex items-center justify-center alien-glow overflow-hidden"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="absolute inset-0 scanner"></div>
                        <div className="w-28 h-28 rounded-full border border-[#7c3aed]/70 flex items-center justify-center tech-border overflow-hidden relative">
                          <div className="absolute inset-0 tech-grid opacity-30"></div>
                          <span className="text-[#7c3aed] font-bold text-xl relative z-10">MIT</span>
                        </div>
                      </motion.div>
                      
                      {/* Global connections */}
                      {[45, 90, 135, 180, 225, 270, 315, 360].map((angle, i) => (
                        <motion.div
                          key={`connection-${i}`}
                          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#7c3aed]"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(110px)`
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                        >
                          <div className="absolute inset-0 alien-glow"></div>
                        </motion.div>
                      ))}
                      
                      {/* Connection lines */}
                      {[45, 90, 135, 180, 225, 270, 315, 360].map((angle, i) => (
                        <motion.div
                          key={`line-${i}`}
                          className="absolute top-1/2 left-1/2 h-[1px] w-[80px] bg-gradient-to-r from-[#7c3aed] to-transparent origin-left"
                          style={{
                            transform: `translate(-40px, -50%) rotate(${angle}deg)`
                          }}
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 0.5 }}
                          transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                        />
                      ))}
                      
                      {/* Pulse rings */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#7c3aed]/20 animate-ping" style={{ animationDuration: '3s' }} />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#7c3aed]/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                      
                      {/* Digital particles */}
                      {[...Array(15)].map((_, i) => {
                        const size = Math.random() * 4 + 1;
                        const angle = Math.random() * 360;
                        const distance = Math.random() * 100 + 50;
                        return (
                          <motion.div
                            key={`particle-${i}`}
                            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#7c3aed]/70"
                            style={{
                              width: `${size}px`,
                              height: `${size}px`,
                              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${distance}px)`
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: [0, 0.8, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{ 
                              delay: Math.random() * 2,
                              duration: Math.random() * 3 + 2,
                              repeat: Infinity,
                              repeatDelay: Math.random() * 3
                            }}
                          />
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-6 rounded-lg font-medium text-[#7c3aed] bg-[#08080c] border border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all duration-300 shadow-lg shadow-[#7c3aed]/20 h-auto relative overflow-hidden group tech-border"
          >
            <div className="absolute inset-0 tech-grid opacity-20"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanner transition-opacity duration-700"></div>
            <span className="relative z-10 flex items-center uppercase tracking-wider">
              Start Your AI Journey Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
