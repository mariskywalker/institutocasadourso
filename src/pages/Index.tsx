import { BrandFooter } from '@/components/brand/BrandFooter';
import { SplineBackground } from '@/components/SplineBackground';
import { Link } from 'react-router-dom';
import { Palette, Type, Image, Share2, Shapes, ShieldCheck, Heart, TrendingUp, MessageSquareHeart, Monitor, School, Sparkles } from 'lucide-react';
import { IconAutonomia, IconEmocional, IconComunicacao, IconSocial } from '@/components/brand/BrandIcons';
import escolaGlow from '@/assets/brand/icon-escola-glow.png';
import ursoBg from '@/assets/brand/urso-bg.png';
import casaBg from '@/assets/brand/casa-bg.png';
import coracaoBg from '@/assets/brand/coracao-bg.png';

const sections = [
  { title: 'Logotipos', description: 'Variações do logo e versões para fundos claros e escuros.', icon: <Image className="w-5 h-5" />, href: '/logos', color: 'bg-coral' },
  { title: 'Paleta de Cores', description: 'Cores primárias, secundárias e gradientes.', icon: <Palette className="w-5 h-5" />, href: '/cores', color: 'bg-sky' },
  { title: 'Tipografia', description: 'Fonte Satoshi — pesos e hierarquia.', icon: <Type className="w-5 h-5" />, href: '/tipografia', color: 'bg-sunshine' },
  { title: 'Pilares', description: 'Escola x Clínica x Casa + Urso (método).', icon: <Heart className="w-5 h-5" />, href: '/pilares', color: 'bg-mint' },
  { title: 'Redes Sociais', description: 'Templates para Instagram, Facebook e LinkedIn.', icon: <Share2 className="w-5 h-5" />, href: '/social', color: 'bg-coral' },
  { title: 'Elementos', description: 'Ícones, formas e composição.', icon: <Shapes className="w-5 h-5" />, href: '/elementos', color: 'bg-sky' },
  { title: 'Diretrizes', description: 'Regras de aplicação e tom de voz.', icon: <ShieldCheck className="w-5 h-5" />, href: '/diretrizes', color: 'bg-sunshine' },
  { title: 'Progresso', description: 'Sistema de acompanhamento do desenvolvimento.', icon: <TrendingUp className="w-5 h-5" />, href: '/progresso', color: 'bg-mint' },
  { title: 'Voz e Tom', description: 'Linguagem e princípios de comunicação.', icon: <MessageSquareHeart className="w-5 h-5" />, href: '/voz-tom', color: 'bg-coral' },
  { title: 'Web', description: 'Botões, componentes e diretrizes para a web.', icon: <Monitor className="w-5 h-5" />, href: '/web', color: 'bg-sky' },
  { title: 'Instituto', description: 'Homepage e componentes do site do Instituto.', icon: <School className="w-5 h-5" />, href: '/', color: 'bg-sunshine' },
  { title: 'Neuroafetivo', description: 'Tese — hero Spline e landing Design Neuroafetivo.', icon: <Sparkles className="w-5 h-5" />, href: '/neuroaffective', color: 'bg-[#8EA890]' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip relative instituto-glow-bg">
      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="text-sunshine"><IconAutonomia className="w-6 h-6" /></span>
          <span className="text-coral"><IconEmocional className="w-6 h-6" /></span>
          <span className="text-sky"><IconComunicacao className="w-6 h-6" /></span>
          <span className="text-[#CD995B]"><IconSocial className="w-6 h-6" /></span>
          <span className="font-display font-bold text-navy ml-1 text-lg">Casa do Urso</span>
        </div>
        <a
          href="https://www.clinicacasadourso.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-display font-medium text-muted-foreground hover:text-navy transition-colors"
        >
          Visitar Site →
        </a>
      </nav>

      {/* Hero + Orbiting Cards */}
      <div className="relative min-h-[100vh] overflow-x-clip flex items-center justify-center">
        <SplineBackground variant="light" />
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-light/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-coral-light/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sunshine-light/30 rounded-full blur-[80px] pointer-events-none" />

        {/* Center text */}
        <div className="flex flex-col items-center justify-center z-20 pointer-events-none px-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-navy text-center leading-[0.95] tracking-tight mb-6">
            Brand<br />System
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground text-center max-w-md">
            Manual de identidade visual
            <br />
            da Clínica Casa do Urso
          </p>
        </div>

        {/* Orbiting cards container — spins slowly */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="relative animate-orbit" style={{ width: 0, height: 0 }}>
            {sections.map((section, i) => {
              const angle = (i / sections.length) * 360 - 90;
              return (
                <Link
                  key={section.href}
                  to={section.href}
                  className="absolute group"
                  style={{
                    // Position on circle using CSS custom properties
                    transform: `rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(${-angle}deg)`,
                    transformOrigin: '0 0',
                    marginLeft: '-100px',
                    marginTop: '-70px',
                  }}
                >
                  {/* Counter-rotate to cancel orbit spin + card stays upright */}
                  <div className="animate-orbit-reverse">
                    <div className="
                      liquid-glass-card
                      rounded-2xl p-4 md:p-5 w-[170px] md:w-[200px] lg:w-[220px]
                      hover:scale-[1.06] hover:-translate-y-0.5
                      hover:shadow-elevated transition-all duration-300 cursor-pointer
                    ">
                      <span aria-hidden="true" className="liquid-glass-core" />
                      <div className={`w-9 h-9 ${section.color} rounded-xl flex items-center justify-center mb-3 text-white shadow-soft`}>
                        {section.icon}
                      </div>
                      <h3 className="font-display font-bold text-navy text-sm mb-1 group-hover:text-sky transition-colors drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
                        {section.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Floating brand icons */}
        <div className="absolute top-[10%] left-[30%] opacity-[0.12] blur-[1px] animate-float pointer-events-none text-sunshine">
          <IconAutonomia className="w-24 h-24" />
        </div>
        <div className="absolute top-[42%] right-[22%] opacity-[0.12] blur-[1px] animate-float-delayed pointer-events-none text-coral">
          <IconEmocional className="w-20 h-20" />
        </div>
        <div className="absolute bottom-[22%] left-[32%] opacity-[0.10] blur-[1px] animate-float pointer-events-none text-sky">
          <IconComunicacao className="w-16 h-16" />
        </div>
        <div className="absolute top-[68%] right-[28%] opacity-[0.12] blur-[1px] animate-float-delayed pointer-events-none text-[#CD995B]">
          <IconSocial className="w-22 h-22" />
        </div>
        <div className="absolute top-[20%] right-[35%] opacity-[0.08] blur-[2px] animate-float pointer-events-none text-mint">
          <IconEmocional className="w-14 h-14" />
        </div>
        <div className="absolute bottom-[35%] right-[40%] opacity-[0.08] blur-[2px] animate-float-delayed pointer-events-none text-sunshine">
          <IconAutonomia className="w-12 h-12" />
        </div>
        <div className="absolute top-[50%] left-[22%] opacity-[0.10] blur-[1px] animate-float pointer-events-none text-coral">
          <IconSocial className="w-16 h-16" />
        </div>
        <img
          src={escolaGlow}
          alt=""
          aria-hidden="true"
          className="absolute top-[8%] right-[-8%] w-[32rem] md:w-[42rem] lg:w-[48rem] opacity-80 animate-float-delayed pointer-events-none select-none"
        />

        {/* Floating background assets (outside card orbit area) */}
        <img
          src={ursoBg}
          alt=""
          aria-hidden="true"
          className="absolute top-[3%] left-[-5%] w-[710px] h-[414px] opacity-70 animate-float pointer-events-none select-none z-10"
        />
        <img
          src={casaBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[10%] left-[4%] w-[15rem] md:w-[19rem] lg:w-[22rem] h-auto opacity-95 animate-float-delayed pointer-events-none select-none z-10"
        />
        <img
          src={coracaoBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[10%] right-[4%] w-[17rem] md:w-[21rem] lg:w-[24rem] h-auto opacity-95 animate-float pointer-events-none select-none z-10"
        />
      </div>

      <BrandFooter />
    </div>
  );
};

export default Index;
