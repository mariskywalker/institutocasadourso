import headerIcons from '@/assets/brand/header-icons.png';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BrandHeader = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-coral-light rounded-3xl opacity-60 animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-sky rounded-2xl opacity-60 animate-float-delayed" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-sunshine-light rounded-2xl opacity-60 animate-float" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="mb-8">
          <img src={headerIcons} alt="Casa do Urso" className="h-10" />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold text-navy mb-4">
          Brand Guidelines
        </h1>
        <p className="font-body text-xl text-muted-foreground max-w-2xl mb-8">
          Manual de identidade visual e diretrizes de marca para a 
          <span className="font-semibold text-navy"> Clínica Casa do Urso</span>.
          Use este guia para manter a consistência em todas as comunicações.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/pilares"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky text-white rounded-full font-display font-semibold hover:bg-sky-dark transition-colors shadow-elevated"
          >
            <ArrowRight size={20} />
            Pilares de Desenvolvimento
          </Link>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-full font-display font-semibold hover:bg-navy-light transition-colors shadow-elevated">
            <Download size={20} />
            Baixar Brand Kit Completo
          </button>
          <a 
            href="https://www.clinicacasadourso.com.br" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy rounded-full font-display font-semibold hover:bg-coral-light transition-colors shadow-card border border-border"
          >
            Visitar Site →
          </a>
        </div>
      </div>
    </header>
  );
};
