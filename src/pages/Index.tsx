import { BrandHeader } from '@/components/brand/BrandHeader';
import { BrandFooter } from '@/components/brand/BrandFooter';
import { Link } from 'react-router-dom';
import { Palette, Type, Image, Share2, Shapes, ShieldCheck, Heart, TrendingUp } from 'lucide-react';

const sections = [
  {
    title: 'Logotipos',
    description: 'Variações do logo, área de proteção e versões para fundos claros e escuros.',
    icon: <Image className="w-6 h-6" />,
    href: '/logos',
    color: 'bg-coral-light',
    iconColor: 'text-coral',
  },
  {
    title: 'Paleta de Cores',
    description: 'Cores primárias, secundárias e gradientes da identidade visual.',
    icon: <Palette className="w-6 h-6" />,
    href: '/cores',
    color: 'bg-sky-light',
    iconColor: 'text-sky',
  },
  {
    title: 'Tipografia',
    description: 'Fonte Satoshi — pesos, tamanhos e hierarquia de texto.',
    icon: <Type className="w-6 h-6" />,
    href: '/tipografia',
    color: 'bg-sunshine-light',
    iconColor: 'text-sunshine',
  },
  {
    title: 'Pilares de Desenvolvimento',
    description: 'Os 4 pilares do desenvolvimento infantil que guiam a marca.',
    icon: <Heart className="w-6 h-6" />,
    href: '/pilares',
    color: 'bg-mint-light',
    iconColor: 'text-mint',
  },
  {
    title: 'Social Media',
    description: 'Templates para Instagram, Facebook e LinkedIn.',
    icon: <Share2 className="w-6 h-6" />,
    href: '/social',
    color: 'bg-coral-light',
    iconColor: 'text-coral',
  },
  {
    title: 'Elementos da Marca',
    description: 'Ícones, formas geométricas e diretrizes de composição.',
    icon: <Shapes className="w-6 h-6" />,
    href: '/elementos',
    color: 'bg-sky-light',
    iconColor: 'text-sky',
  },
  {
    title: 'Diretrizes de Uso',
    description: 'Regras de aplicação, tom de voz e exemplos de comunicação.',
    icon: <ShieldCheck className="w-6 h-6" />,
    href: '/diretrizes',
    color: 'bg-sunshine-light',
    iconColor: 'text-sunshine',
  },
  {
    title: 'Sistema de Progresso',
    description: 'Como o app acompanha o desenvolvimento infantil com clareza e humanidade.',
    icon: <TrendingUp className="w-6 h-6" />,
    href: '/progresso',
    color: 'bg-mint-light',
    iconColor: 'text-mint',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BrandHeader />
      
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-navy mb-8">Seções do Brand Guide</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              to={section.href}
              className="group bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center mb-4`}>
                <span className={section.iconColor}>{section.icon}</span>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-sky transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <BrandFooter />
    </div>
  );
};

export default Index;
