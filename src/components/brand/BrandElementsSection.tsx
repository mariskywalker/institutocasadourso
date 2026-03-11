import iconsHorizontal from '@/assets/brand/icons-horizontal.png';
import exemploLayout from '@/assets/brand/exemplo-layout-social.png';
import { Download } from 'lucide-react';
import { IconAutonomia, IconEmocional, IconComunicacao, IconSocial } from './BrandIcons';

export const BrandElementsSection = () => {
  const iconNames = [
    { name: 'Asterisco', usage: 'Escola' },
    { name: 'Coração', usage: 'Família' },
    { name: 'Casa', usage: 'Clínica' },
    { name: 'Urso', usage: 'Metodologia' },
  ];

  const shapes = [
    { name: 'Bloco Doce', className: 'bg-coral rounded-2xl', usage: 'Cards, fundos' },
    { name: 'Bloco Azul', className: 'bg-sky rounded-2xl', usage: 'Botões, ícones' },
    { name: 'Bloco Amarelo', className: 'bg-sunshine rounded-2xl', usage: 'Alertas, destaques' },
    { name: 'Bloco Navy', className: 'bg-navy rounded-2xl', usage: 'Fundos, headers' },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-mint-light rounded-full text-sm font-medium text-navy mb-4">
            Elementos
          </span>
          <h2 className="text-4xl font-display font-bold text-navy mb-4">
            Elementos da Marca
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ícones e formas geométricas que compõem a identidade visual lúdica e acolhedora.
          </p>
        </div>

        {/* Ícones */}
        <div className="mb-12">
          <h3 className="font-display font-bold text-navy text-xl mb-6">Ícones Principais</h3>
          <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-3">
                <span className="text-sunshine"><IconAutonomia className="w-16 h-16" /></span>
                <div>
                  <h4 className="font-display font-bold text-navy">Asterisco</h4>
                  <p className="text-xs text-muted-foreground">Escola</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-coral"><IconEmocional className="w-16 h-16" /></span>
                <div>
                  <h4 className="font-display font-bold text-navy">Coração</h4>
                  <p className="text-xs text-muted-foreground">Família</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-sky"><IconComunicacao className="w-16 h-16" /></span>
                <div>
                  <h4 className="font-display font-bold text-navy">Casa</h4>
                  <p className="text-xs text-muted-foreground">Lar, acolhimento</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-[#CD995B]"><IconSocial className="w-16 h-16" /></span>
                <div>
                  <h4 className="font-display font-bold text-navy">Urso</h4>
                  <p className="text-xs text-muted-foreground">Mascote principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formas Geométricas */}
        <div className="mb-12">
          <h3 className="font-display font-bold text-navy text-xl mb-6">Blocos Geométricos</h3>
          <div className="bg-muted rounded-3xl p-8">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {shapes.map((shape) => (
                <div key={shape.name} className="text-center">
                  <div className={`w-24 h-24 ${shape.className}`} />
                  <p className="text-sm font-medium text-navy mt-2">{shape.name}</p>
                  <p className="text-xs text-muted-foreground">{shape.usage}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Os blocos coloridos fazem referência aos brinquedos de montar, 
              reforçando a conexão com o universo infantil.
            </p>
          </div>
        </div>

        {/* Composição */}
        <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
          <h3 className="font-display font-bold text-navy text-xl mb-6">Composição Visual</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Exemplo de composição */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src={exemploLayout} 
                alt="Exemplo de layout para redes sociais da Casa do Urso" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Diretrizes */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                <div className="w-8 h-8 bg-mint rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-display font-semibold text-navy">Use sobreposições suaves</h5>
                  <p className="text-sm text-muted-foreground">Blocos com transparência criam profundidade sem poluir.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                <div className="w-8 h-8 bg-mint rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-display font-semibold text-navy">Mantenha assimetria controlada</h5>
                  <p className="text-sm text-muted-foreground">Elementos dispersos mas com equilíbrio visual.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                <div className="w-8 h-8 bg-mint rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h5 className="font-display font-semibold text-navy">Priorize legibilidade</h5>
                  <p className="text-sm text-muted-foreground">Texto sempre sobre fundos com bom contraste.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download All */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white rounded-full font-display font-semibold hover:bg-navy-light transition-colors shadow-elevated">
            <Download size={20} />
            Baixar Kit de Elementos (SVG + PNG)
          </button>
        </div>
      </div>
    </section>
  );
};
