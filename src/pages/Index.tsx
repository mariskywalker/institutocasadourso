import { Header } from "@/components/design-system/Header";
import { HeroSection } from "@/components/design-system/HeroSection";
import { ColorsSection } from "@/components/design-system/ColorsSection";
import { TypographySection } from "@/components/design-system/TypographySection";
import { ComponentsSection } from "@/components/design-system/ComponentsSection";
import { IconsSection } from "@/components/design-system/IconsSection";
import { Footer } from "@/components/design-system/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container">
          <ColorsSection />
          <TypographySection />
          <ComponentsSection />
          <IconsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
