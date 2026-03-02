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

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ClientLogos />
      <Specializations />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-surface/50 to-transparent pointer-events-none" />
        <Services />
      </div>
      <FeaturedWork />
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.05), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.04), transparent 60%)"
        }} />
        <Process />
      </div>
      <Testimonials />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
        <Stats />
      </div>
      <ArticlesPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
