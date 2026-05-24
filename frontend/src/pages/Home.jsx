import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", color: "#f0f0f0", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
