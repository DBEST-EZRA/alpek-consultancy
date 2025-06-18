import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MoreServices from "./components/MoreServices";
import NavbarComponent from "./components/NavbarComponent";
import Services from "./components/Services";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <Services />
      <AboutUs />
      <MoreServices />
      <TestimonialsSection />
      <ContactSection />
      <FloatingWhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
