import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IconAutonomia, IconEmocional, IconComunicacao, IconSocial } from './BrandIcons';
import { BrandFooter } from './BrandFooter';
import { ReactNode } from 'react';

interface BrandPageLayoutProps {
  children: ReactNode;
}

export const BrandPageLayout = ({ children }: BrandPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-sunshine"><IconAutonomia className="w-6 h-6" /></span>
            <span className="text-coral"><IconEmocional className="w-6 h-6" /></span>
            <span className="text-sky"><IconComunicacao className="w-6 h-6" /></span>
            <span className="text-[#CD995B]"><IconSocial className="w-6 h-6" /></span>
            <span className="font-display font-bold text-navy ml-1">Casa do Urso</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-navy font-display font-semibold text-sm hover:text-sky transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>
        </div>
      </nav>
      <main>{children}</main>
      <BrandFooter />
    </div>
  );
};
