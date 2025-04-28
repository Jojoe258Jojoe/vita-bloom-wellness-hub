
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const LandingPage = ({ isAuthenticated = false, onLogout = () => {} }) => {
  return (
    <div className="min-h-screen">
      <Navbar isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
