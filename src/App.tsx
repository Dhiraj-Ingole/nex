import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { FeatureCards } from "./components/FeatureCards";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { StatsSection } from "./components/StatsSection";
import { MilestonesSection } from "./components/MilestonesSection";
import { PreciselyDeliversSection } from "./components/PreciselyDeliversSection";
import { MethodologySection } from "./components/MethodologySection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <WhyChooseSection />
      <StatsSection />
      <MilestonesSection />
      <PreciselyDeliversSection />
      <MethodologySection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}