import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  className: string;
  textColor?: string;
}

const ColorCard = ({ name, hex, rgb, usage, className, textColor = 'text-white' }: ColorCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-border">
      <div className={`h-32 ${className} flex items-end p-4`}>
        <span className={`font-display font-bold text-lg ${textColor}`}>{name}</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">HEX</span>
          <button
            onClick={() => copyToClipboard(hex)}
            className="flex items-center gap-2 font-mono text-sm text-navy hover:text-coral transition-colors"
          >
            {hex}
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">RGB</span>
          <span className="font-mono text-sm text-navy">{rgb}</span>
        </div>
        <p className="text-xs text-muted-foreground pt-2 border-t border-border">{usage}</p>
      </div>
    </div>
  );
};

export const ColorPaletteSection = () => {
  const primaryColors = [
    {
      name: 'Navy',
      hex: '#1E3A5F',
      rgb: '30, 58, 95',
      usage: 'Cor principal. Textos, botões, fundos importantes.',
      className: 'bg-navy',
    },
    {
      name: 'Coral',
      hex: '#E8A5A5',
      rgb: '232, 165, 165',
      usage: 'Destaque emocional. Corações, CTAs, alertas.',
      className: 'bg-coral',
    },
    {
      name: 'Sky Blue',
      hex: '#4497C3',
      rgb: '68, 151, 195',
      usage: 'Elementos de apoio. Ícones, badges, destaques.',
      className: 'bg-sky',
    },
    {
      name: 'Sunshine',
      hex: '#F5C842',
      rgb: '245, 200, 66',
      usage: 'Energia e alegria. Alertas positivos, destaques.',
      className: 'bg-sunshine',
      textColor: 'text-navy',
    },
  ];

  const secondaryColors = [
    {
      name: 'Coral Light',
      hex: '#FADEDE',
      rgb: '250, 222, 222',
      usage: 'Fundos suaves, cards, seções.',
      className: 'bg-coral-light',
      textColor: 'text-navy',
    },
    {
      name: 'Sky Light',
      hex: '#B8D6E8',
      rgb: '184, 214, 232',
      usage: 'Fundos suaves, highlights.',
      className: 'bg-sky-light',
      textColor: 'text-navy',
    },
    {
      name: 'Sunshine Light',
      hex: '#FCF0C5',
      rgb: '252, 240, 197',
      usage: 'Fundos suaves, avisos.',
      className: 'bg-sunshine-light',
      textColor: 'text-navy',
    },
    {
      name: 'Mint',
      hex: '#99D6C9',
      rgb: '153, 214, 201',
      usage: 'Sucesso, confirmações, crescimento.',
      className: 'bg-mint',
      textColor: 'text-navy',
    },
  ];

  return (
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-sky-light rounded-full text-sm font-medium text-navy mb-4">
            Paleta de Cores
          </span>
          <h2 className="text-4xl font-display font-bold text-navy mb-4">
            Cores da Marca
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cores cuidadosamente selecionadas para transmitir acolhimento, confiança e alegria.
            Clique no código HEX para copiar.
          </p>
        </div>

        {/* Cores Primárias */}
        <div className="mb-12">
          <h3 className="font-display font-bold text-navy text-xl mb-6">Cores Primárias</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {primaryColors.map((color) => (
              <ColorCard key={color.name} {...color} />
            ))}
          </div>
        </div>

        {/* Cores Secundárias */}
        <div className="mb-12">
          <h3 className="font-display font-bold text-navy text-xl mb-6">Cores de Apoio</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {secondaryColors.map((color) => (
              <ColorCard key={color.name} {...color} />
            ))}
          </div>
        </div>

        {/* Gradientes */}
        <div>
          <h3 className="font-display font-bold text-navy text-xl mb-6">Gradientes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-border">
              <div className="h-24 gradient-hero" />
              <div className="p-4">
                <h4 className="font-display font-bold text-navy">Hero Gradient</h4>
                <p className="text-xs text-muted-foreground mt-1">Coral → Sky → Sunshine</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-2 block overflow-x-auto">
                  linear-gradient(135deg, #FADEDE 0%, #B8D6E8 50%, #FCF0C5 100%)
                </code>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-border">
              <div className="h-24 gradient-playful" />
              <div className="p-4">
                <h4 className="font-display font-bold text-navy">Playful Gradient</h4>
                <p className="text-xs text-muted-foreground mt-1">Coral → Sky → Sunshine (vibrante)</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-2 block overflow-x-auto">
                  linear-gradient(135deg, #E8A5A5 0%, #4497C3 50%, #F5C842 100%)
                </code>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-border">
              <div className="h-24 bg-gradient-to-br from-navy to-navy-light" />
              <div className="p-4">
                <h4 className="font-display font-bold text-navy">Navy Gradient</h4>
                <p className="text-xs text-muted-foreground mt-1">Navy Dark → Navy Light</p>
                <code className="text-xs bg-muted px-2 py-1 rounded mt-2 block overflow-x-auto">
                  linear-gradient(135deg, #1E3A5F 0%, #3D5A80 100%)
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
