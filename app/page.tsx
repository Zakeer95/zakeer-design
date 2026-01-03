import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import { Feedbacks } from "@/components/Feedbacks";
import { Testimonials as Feedbacks2 } from "@/components/Feedbacks2";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />      
      <Hero /> 
      <About />
      <Portfolio /> 
      <Services />
      <Feedbacks />
      <CallToAction />
      <Footer />
    </main>
  );
}
