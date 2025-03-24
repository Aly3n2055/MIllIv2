import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
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
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">M</div>
              <span className="ml-2 text-xl font-bold text-white">MIT</span>
            </div>
            <p className="text-gray-400 mb-6">
              Milli Intelligent Technologies is positioned to be a trailblazer in AI automation, delivering intelligent, adaptive, and scalable solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-purple-400 transition-colors duration-200">AI & Workflow Automation</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-purple-400 transition-colors duration-200">AI Consulting & Enterprise Solutions</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-purple-400 transition-colors duration-200">AI-Powered Chatbots & Assistants</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-purple-400 transition-colors duration-200">Custom Model Fine-Tuning</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-purple-400 transition-colors duration-200">Performance Audits & Optimization</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("about")} className="hover:text-purple-400 transition-colors duration-200">About Us</button></li>
              <li><button onClick={() => scrollToSection("roadmap")} className="hover:text-purple-400 transition-colors duration-200">Roadmap</button></li>
              <li><button className="hover:text-purple-400 transition-colors duration-200">Careers</button></li>
              <li><button className="hover:text-purple-400 transition-colors duration-200">Blog</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-purple-400 transition-colors duration-200">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-purple-400 transition-colors duration-200">Documentation</button></li>
              <li><button className="hover:text-purple-400 transition-colors duration-200">Tutorials</button></li>
              <li><button className="hover:text-purple-400 transition-colors duration-200">Case Studies</button></li>
              <li><button className="hover:text-purple-400 transition-colors duration-200">Privacy Policy</button></li>
              <li><button className="hover:text-purple-400 transition-colors duration-200">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Milli Intelligent Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
