import { BrandHeader } from '@/components/brand/BrandHeader';
import { LogoSection } from '@/components/brand/LogoSection';
import { ColorPaletteSection } from '@/components/brand/ColorPaletteSection';
import { TypographySection } from '@/components/brand/TypographySection';
import { SocialMediaSection } from '@/components/brand/SocialMediaSection';
import { BrandElementsSection } from '@/components/brand/BrandElementsSection';
import { UsageGuidelinesSection } from '@/components/brand/UsageGuidelinesSection';
import { BrandFooter } from '@/components/brand/BrandFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BrandHeader />
      <LogoSection />
      <ColorPaletteSection />
      <TypographySection />
      <SocialMediaSection />
      <BrandElementsSection />
      <UsageGuidelinesSection />
      <BrandFooter />
    </div>
  );
};

export default Index;
