import logoBear from '@/assets/brand/logo-bear.png';
import logoCasadourso from '@/assets/brand/logo-casadourso.png';
import photoChild from '@/assets/brand/photo-child-reading.jpg';
import photoIcons from '@/assets/brand/photo-icons-wall.jpg';
import photoTherapy from '@/assets/brand/photo-therapy-session.jpg';
import fotoIconsForma from '@/assets/brand/foto-icons-forma.png';
import { Download, Instagram } from 'lucide-react';
import { CarouselPostTemplate } from './templates/CarouselPostTemplate';
import { StoryTemplates } from './templates/StoryTemplates';

const TemplateCard = ({ children, title, size, format = "PSD" }: { children: React.ReactNode; title: string; size: string; format?: string }) => (
  <div className="bg-card rounded-2xl p-4 shadow-card border border-border">
    {children}
    <div className="flex justify-between items-center mt-4">
      <div>
        <h4 className="font-display font-semibold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground">{size}</p>
      </div>
      <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
        <Download size={12} />
        {format}
      </button>
    </div>
  </div>
);

export { TemplateCard };

export const InstagramTemplates = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Instagram className="text-coral" size={24} />
        <h3 className="font-display font-bold text-foreground text-xl">Instagram</h3>
      </div>

      {/* Carrossel Educativo */}
      <div className="mb-8">
        <h4 className="font-display font-semibold text-foreground mb-4">Carrossel Educativo — 5 slides</h4>
        <CarouselPostTemplate />
      </div>

      {/* Posts individuais */}
      <h4 className="font-display font-semibold text-foreground mb-4">Posts Individuais</h4>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Post Capa com Foto */}
        <TemplateCard title="Post Capa — Foto" size="1080 × 1080px">
          <div className="aspect-square rounded-xl overflow-hidden relative">
            <img src={photoTherapy} alt="Terapia" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-white/70 text-xs font-medium">@clinicacasadourso</span>
            </div>
            <div className="absolute bottom-6 left-5 right-5">
              <h4 className="font-display font-bold text-white text-lg leading-tight mb-1">
                O brincar é a
              </h4>
              <h4 className="font-display font-bold text-lg leading-tight mb-2">
                <span className="bg-coral px-2 py-0.5 text-white inline-block">linguagem da criança</span>
              </h4>
              <p className="font-body text-xs text-white/70">Deslize para saber mais →</p>
            </div>
          </div>
        </TemplateCard>

        {/* Post Frase — Mint */}
        <TemplateCard title="Post Frase — Mint" size="1080 × 1080px">
          <div className="aspect-square rounded-xl overflow-hidden bg-mint relative p-6 flex flex-col justify-center items-center text-center">
            {/* Organic blobs */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-coral/30 rounded-full blur-sm translate-x-8 -translate-y-8" />
            <div className="absolute top-4 right-8 w-3 h-3 bg-coral/60 rounded-full" />
            <div className="absolute top-8 right-4 w-2 h-2 bg-coral/50 rounded-full" />
            <div className="absolute top-12 right-12 w-2 h-2 bg-coral/40 rounded-full" />
            <div className="absolute bottom-6 left-6 w-3 h-3 bg-coral/50 rounded-full" />
            <div className="absolute bottom-10 left-10 w-2 h-2 bg-coral/40 rounded-full" />
            {/* Bear shape top right */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full" />

            <h4 className="font-display font-black text-white text-2xl leading-tight mb-3">
              Quando não<br />há evolução,
            </h4>
            <p className="font-display font-medium text-white/80 text-sm leading-relaxed mb-1">
              e o comportamento se<br />repete ou se intensifica,
            </p>
            <p className="font-display text-white/80 text-sm">
              é hora de observar com<br /><strong className="text-white">mais atenção.</strong>
            </p>
          </div>
        </TemplateCard>

        {/* Post CTA — Navy */}
        <TemplateCard title="Post CTA — Navy" size="1080 × 1080px">
          <div className="aspect-square rounded-xl overflow-hidden relative bg-navy">
            {/* Organic blob with photo — full width, covers top ~55% */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <clipPath id="blobClipCTA">
                    <path d="M0,0 L400,0 L400,180 Q380,240 320,270 Q260,300 200,280 Q140,260 80,300 Q40,330 0,280 Z" />
                  </clipPath>
                </defs>
                <image href={fotoIconsForma} x="0" y="-40" width="400" height="300" clipPath="url(#blobClipCTA)" preserveAspectRatio="xMidYMid slice" />
              </svg>
            </div>
            {/* Text content */}
            <div className="absolute bottom-4 left-5 right-5 flex flex-col justify-end" style={{ height: '55%' }}>
              <div className="mb-3">
                <p style={{ fontFamily: 'Poppins, sans-serif' }} className="text-white text-base font-medium leading-snug mb-1">
                  Quando antes<br />o apoio chega,
                </p>
                <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-coral text-lg leading-tight mb-1">
                  Mais leve fica<br />o caminho
                </p>
                <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-white text-base leading-snug mb-3">
                  da criança e da família.
                </p>
                <p style={{ fontFamily: 'Poppins, sans-serif' }} className="text-white/60 text-[10px] leading-relaxed mb-0.5">
                  Se algo te preocupa,<br />confie no seu olhar.
                </p>
                <p style={{ fontFamily: 'Poppins, sans-serif' }} className="font-bold text-coral text-xs">
                  Confie na Casa do Urso.
                </p>
              </div>
              <img src={logoCasadourso} alt="Casa do Urso" className="h-auto self-end" />
            </div>
          </div>
        </TemplateCard>
      </div>

      {/* Story Templates */}
      <StoryTemplates />
    </div>
  );
};
