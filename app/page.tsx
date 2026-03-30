import HeroSection from "../components/HeroSection";
import CoreServices from "../components/CoreServices";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <CoreServices />
      <CTASection />
    </main>
  );
}