import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import DesignCard from "../components/DesignCard";
import UIArticles from "@/components/UIArticles";
import UxResearchers from "@/components/UxResearchers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedSection />
      <DesignCard />
      <UIArticles />
      <UxResearchers />
      <Footer />
    </main>
  );
}
