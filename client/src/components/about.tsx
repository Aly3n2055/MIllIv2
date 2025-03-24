import { motion } from "framer-motion";
import { Shield, DollarSign, Sliders, Sparkles, BrainCircuit, Telescope } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute w-96 h-96 -top-40 left-1/3 rounded-full blur-3xl bg-[#00f0ff]/10 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] mb-6">
            <Telescope className="w-3 h-3 mr-1" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">
            <span className="block text-white mb-2">Beyond Conventional</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#0080ff]">
              AI Systems
            </span>
          </h2>
        </div>
      
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full">
              <div className="absolute -inset-1.5 bg-[#00f0ff]/10 rounded-xl blur-sm"></div>
              <div className="relative bg-[#08080c]/80 rounded-xl p-6 sm:p-8 border border-[#00f0ff]/30 h-full tech-border scanner overflow-hidden">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 alien-circle flex items-center justify-center text-[#00f0ff] font-bold text-xl mr-4 relative">
                    <div className="absolute inset-0 scanner"></div>
                    <span>M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Our Vision</h3>
                </div>
                <p className="text-gray-300 mb-8">
                  MIT aims to establish itself as a leader in AI automation, providing cutting-edge AI solutions, automation services, and consulting for businesses seeking to leverage artificial intelligence for efficiency, scalability, and innovation beyond conventional limits.
                </p>
                
                <div className="space-y-8">
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 alien-circle flex items-center justify-center text-[#00f0ff] font-bold text-sm mr-4 relative">
                        <BrainCircuit className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-medium text-white">Subscription-Based Services</h4>
                    </div>
                    <p className="text-gray-300 ml-14">
                      Scalable AI solutions with tiered service levels, custom AI development, and continuous model improvements.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 alien-circle flex items-center justify-center text-[#00f0ff] font-bold text-sm mr-4 relative">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-medium text-white">Full-Cycle AI Development</h4>
                    </div>
                    <p className="text-gray-300 ml-14">
                      End-to-end AI solutions from ideation to deployment, supporting businesses with AI-driven transformation.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 alien-circle flex items-center justify-center text-[#00f0ff] font-bold text-sm mr-4 relative">
                        <Telescope className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-medium text-white">Educational Initiatives</h4>
                    </div>
                    <p className="text-gray-300 ml-14">
                      Creating AI learning content for businesses and individuals, offering workshops, webinars, and interactive training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#0080ff]">Why Choose MIT?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              MIT is positioned to be a trailblazer in AI automation, delivering intelligent, adaptive, and scalable solutions for businesses worldwide. Our approach ensures clear, strategic AI implementation to drive your business into the AI-driven future.
            </p>
            
            <div className="space-y-8">
              <div className="relative bg-[#08080c]/50 p-6 rounded-lg border border-[#00f0ff]/20 transition-all duration-300 hover:border-[#00f0ff]/40 tech-border group">
                <div className="absolute inset-0 tech-grid opacity-30"></div>
                
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-lg bg-[#08080c] border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] group-hover:alien-glow transition-all duration-300">
                      <Shield className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-medium text-white">Cutting-Edge Technology</h3>
                    <p className="mt-2 text-gray-300">
                      Leverage the most advanced AI technologies tailored specifically for your business needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative bg-[#08080c]/50 p-6 rounded-lg border border-[#00f0ff]/20 transition-all duration-300 hover:border-[#00f0ff]/40 tech-border group">
                <div className="absolute inset-0 tech-grid opacity-30"></div>
                
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-lg bg-[#08080c] border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] group-hover:alien-glow transition-all duration-300">
                      <DollarSign className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-medium text-white">ROI-Focused Solutions</h3>
                    <p className="mt-2 text-gray-300">
                      Our AI implementations are designed to deliver measurable results and clear business value.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative bg-[#08080c]/50 p-6 rounded-lg border border-[#00f0ff]/20 transition-all duration-300 hover:border-[#00f0ff]/40 tech-border group">
                <div className="absolute inset-0 tech-grid opacity-30"></div>
                
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-lg bg-[#08080c] border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] group-hover:alien-glow transition-all duration-300">
                      <Sliders className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-xl font-medium text-white">Customized Approach</h3>
                    <p className="mt-2 text-gray-300">
                      We don't believe in one-size-fits-all solutions. Each AI implementation is tailored to your specific industry and needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
