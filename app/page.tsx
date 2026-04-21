import HeroSection from "./components/HeroSection";
import EventBanner from "./components/EventBanner";
import TrustSection from "./components/TrustSection";
import HowItWorksSection from "./components/HowItWorksSection";
import BenefitsSection from "./components/BenefitsSection";
import AppShowcaseSection from "./components/AppShowcaseSection";
import EarningsSection from "./components/EarningsSection";
import FindCooksSection from "./components/FindCooksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <EventBanner />
      <TrustSection />
      <HowItWorksSection />
      <BenefitsSection />
      <AppShowcaseSection />
      <EarningsSection />
      <FindCooksSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <EventSection />
      <Footer />
    </div>
  );
}
