import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ComingSoonSection } from "./components/ComingSoonSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { SEOHead } from "./components/SEOHead";
import { Analytics } from "./components/Analytics";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Analytics />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ComingSoonSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster position="top-center" richColors />
    </div>
  );
}