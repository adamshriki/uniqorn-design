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
      <Services />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <Stats />
      <ArticlesPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
