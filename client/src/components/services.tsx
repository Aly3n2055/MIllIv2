import { motion } from "framer-motion";
import { Check, Cpu, Zap, MessageSquare, ChevronRight, Sparkles } from "lucide-react";

interface ServiceItem {
  title: string;
  icon: JSX.Element;
  features: string[];
}

export function Services() {
  const servicesList: ServiceItem[] = [
    {
      title: "Autonomous AI & Workflow Automation",
      icon: <Cpu className="h-8 w-8 text-white" />,
      features: [
        "AI-Powered Business Process Automation",
        "Natural Language to SQL & Data Querying",
        "Complex Data Pipelines",
        "Self-Adaptive AI Systems"
      ],
    },
    {
      title: "AI Consulting & Enterprise Solutions",
      icon: <Zap className="h-8 w-8 text-white" />,
      features: [
        "AI Strategy Development",
        "Performance Audits & Optimization",
        "Industry-Specific AI Use Cases",
        "Feasibility & ROI Assessments"
      ],
    },
    {
      title: "AI-Powered Chatbots & Intelligent Assistants",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      features: [
        "GPT-Based Chatbot Development",
        "Secure Conversational AI",
        "Knowledge-Based AI Assistants",
        "Custom Model Fine-Tuning"
      ],
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-40"></div>
      <div className="absolute w-96 h-96 bottom-0 right-0 rounded-full blur-3xl bg-[#00f0ff]/10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] mb-6">
            <Sparkles className="w-3 h-3 mr-1" />
            <span>OUR TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">
            <span className="block text-white mb-2">Advanced AI Services</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#0080ff]">
              For The Next Generation
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            MIT delivers a structured suite of advanced AI services across three core categories to transform your business operations beyond conventional limitations.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              className="relative bg-[#08080c]/80 rounded-xl p-6 border border-[#00f0ff]/20 transition-all duration-300 
                       hover:border-[#00f0ff]/50 hover:-translate-y-1 tech-border overflow-hidden group"
              variants={itemVariants}
            >
              <div className="absolute inset-0 tech-grid opacity-30"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-[#00f0ff]/5 group-hover:bg-[#00f0ff]/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-lg bg-[#08080c] border border-[#00f0ff]/30 flex items-center justify-center mb-6 alien-glow">
                  <div className="absolute inset-0 scanner"></div>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                
                <ul className="space-y-3 text-gray-300 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-[#00f0ff] mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-[#00f0ff] hover:text-white font-medium flex items-center group"
                >
                  <span className="mr-1 transition-all duration-300 group-hover:mr-2">Contact us</span>
                  <ChevronRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
