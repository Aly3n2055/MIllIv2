import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Roadmap } from "@/components/roadmap";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-50 font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Roadmap />
      <ContactForm />
      <Footer />
    </div>
  );
}
