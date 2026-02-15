import { BrandFooter } from '@/components/brand/BrandFooter';
import { Link } from 'react-router-dom';
import { Palette, Type, Image, Share2, Shapes, ShieldCheck, Heart, TrendingUp, MessageSquareHeart } from 'lucide-react';
import { IconAutonomia, IconEmocional, IconComunicacao, IconSocial } from '@/components/brand/BrandIcons';

const sections = [
  {
    title: 'Logotipos',
    description: 'Variações do logo e versões para fundos claros e escuros.',
    icon: <Image className="w-5 h-5" />,
    href: '/logos',
    color: 'bg-coral',
    glowColor: 'shadow-coral',
  },
  {
    title: 'Paleta de Cores',
    description: 'Cores primárias, secundárias e gradientes.',
    icon: <Palette className="w-5 h-5" />,
    href: '/cores',
    color: 'bg-sky',
    glowColor: 'shadow-sky',
  },
  {
    title: 'Tipografia',
    description: 'Fonte Satoshi — pesos e hierarquia.',
    icon: <Type className="w-5 h-5" />,
    href: '/tipografia',
    color: 'bg-sunshine',
    glowColor: '',
  },
  {
    title: 'Pilares',
    description: 'Os 4 pilares do desenvolvimento infantil.',
    icon: <Heart className="w-5 h-5" />,
    href: '/pilares',
    color: 'bg-mint',
    glowColor: '',
  },
  {
    title: 'Social Media',
    description: 'Templates para Instagram, Facebook e LinkedIn.',
    icon: <Share2 className="w-5 h-5" />,
    href: '/social',
    color: 'bg-coral',
    glowColor: 'shadow-coral',
  },
  {
    title: 'Elementos',
    description: 'Ícones, formas e composição.',
    icon: <Shapes className="w-5 h-5" />,
    href: '/elementos',
    color: 'bg-sky',
    glowColor: 'shadow-sky',
  },
  {
    title: 'Diretrizes',
    description: 'Regras de aplicação e tom de voz.',
    icon: <ShieldCheck className="w-5 h-5" />,
    href: '/diretrizes',
    color: 'bg-sunshine',
    glowColor: '',
  },
  {
    title: 'Progresso',
    description: 'Sistema de acompanhamento do desenvolvimento.',
    icon: <TrendingUp className="w-5 h-5" />,
    href: '/progresso',
    color: 'bg-mint',
    glowColor: '',
  },
  {
    title: 'Voz e Tom',
    description: 'Linguagem e princípios de comunicação.',
    icon: <MessageSquareHeart className="w-5 h-5" />,
    href: '/voz-tom',
    color: 'bg-coral',
    glowColor: 'shadow-coral',
  },
];

// Positions for floating cards scattered around the viewport
const cardPositions = [
  // Top-left area
  { top: '8%', left: '3%', rotate: '-6deg', delay: '0s', floatClass: 'animate-float' },
  // Top-right area
  { top: '5%', right: '4%', rotate: '4deg', delay: '1s', floatClass: 'animate-float-delayed' },
  // Left side middle
  { top: '30%', left: '1%', rotate: '-3deg', delay: '0.5s', floatClass: 'animate-float' },
  // Right side middle
  { top: '28%', right: '2%', rotate: '5deg', delay: '1.5s', floatClass: 'animate-float-delayed' },
  // Bottom-left
  { top: '58%', left: '5%', rotate: '-4deg', delay: '0.8s', floatClass: 'animate-float-delayed' },
  // Bottom-right
  { top: '55%', right: '3%', rotate: '3deg', delay: '0.3s', floatClass: 'animate-float' },
  // Far bottom-left
  { top: '78%', left: '8%', rotate: '6deg', delay: '1.2s', floatClass: 'animate-float' },
  // Far bottom-right
  { top: '75%', right: '6%', rotate: '-5deg', delay: '0.7s', floatClass: 'animate-float-delayed' },
  // Bottom center-right
  { top: '85%', left: '38%', rotate: '2deg', delay: '1s', floatClass: 'animate-float' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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

      {/* Hero + Floating Cards */}
      <div className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-light/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-coral-light/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sunshine-light/30 rounded-full blur-[80px] pointer-events-none" />

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-navy text-center leading-[0.95] tracking-tight mb-6">
            Brand<br />Guidelines
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground text-center max-w-md">
            Manual de identidade visual da Clínica Casa do Urso
          </p>
        </div>

        {/* Floating cards */}
        {sections.map((section, i) => {
          const pos = cardPositions[i];
          return (
            <Link
              key={section.href}
              to={section.href}
              className={`absolute z-30 group ${pos.floatClass}`}
              style={{
                top: pos.top,
                left: pos.left,
                right: pos.right,
                transform: `rotate(${pos.rotate})`,
                animationDelay: pos.delay,
              }}
            >
              <div className={`
                bg-card backdrop-blur-md border border-border 
                rounded-2xl p-5 w-[200px] md:w-[220px]
                hover:shadow-elevated hover:scale-105 hover:border-sky-light
                transition-all duration-300 cursor-pointer shadow-card
              `}>
                <div className={`w-9 h-9 ${section.color} rounded-xl flex items-center justify-center mb-3 text-white`}>
                  {section.icon}
                </div>
                <h3 className="font-display font-bold text-navy text-sm mb-1 group-hover:text-sky transition-colors">
                  {section.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </div>
            </Link>
          );
        })}

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
      </div>

      <BrandFooter />
    </div>
  );
};

export default Index;
