import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import Specializations from "@/components/Specializations";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import ArticlesPreview from "@/components/ArticlesPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <ClientLogos />

      <div className="section-purple relative">
        <Specializations />
      </div>

      <div className="section-deep relative">
        <Services />
      </div>

      <FeaturedWork />

      <div className="section-cyan relative">
        <Process />
      </div>

      <div className="section-warm relative">
        <Testimonials />
      </div>

      <div className="section-mixed relative">
        <Stats />
      </div>

      <ArticlesPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
