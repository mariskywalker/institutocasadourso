import logoBear from '@/assets/brand/logo-bear.png';
import { Download } from 'lucide-react';

export const BrandElementsSection = () => {
  const elements = [
    { icon: '✱', name: 'Asterisco', color: 'text-sunshine', bg: 'bg-sunshine-light', usage: 'Destaque, novidades' },
    { icon: '❤', name: 'Coração', color: 'text-coral', bg: 'bg-coral-light', usage: 'Afeto, cuidado' },
    { icon: '☁', name: 'Nuvem', color: 'text-sky', bg: 'bg-sky-light', usage: 'Leveza, imaginação' },
    { icon: '🧸', name: 'Urso', color: 'text-navy', bg: 'bg-coral-light', usage: 'Mascote principal' },
  ];

  const shapes = [
    { name: 'Bloco Rosa', className: 'bg-coral-light rounded-2xl', usage: 'Cards, fundos' },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {elements.map((el) => (
              <div key={el.name} className="bg-white rounded-2xl p-6 shadow-card border border-border text-center">
                <div className={`w-20 h-20 ${el.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {el.name === 'Urso' ? (
                    <img src={logoBear} alt="Urso" className="w-12 h-12" />
                  ) : (
                    <span className={`text-4xl ${el.color}`}>{el.icon}</span>
                  )}
                </div>
                <h4 className="font-display font-bold text-navy">{el.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{el.usage}</p>
              </div>
            ))}
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
            <div className="relative aspect-video bg-gradient-to-br from-coral-light via-white to-sky-light rounded-2xl overflow-hidden p-6">
              {/* Blocos decorativos */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-coral-light rounded-xl opacity-80" />
              <div className="absolute top-12 right-12 w-12 h-12 bg-sky rounded-xl opacity-80" />
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-sunshine-light rounded-xl opacity-80" />
              
              {/* Conteúdo */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">✱</span>
                  <span className="text-coral text-lg">❤</span>
                  <span className="text-sky text-lg">☁</span>
                  <img src={logoBear} alt="Urso" className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-navy text-xl">
                  Exemplo de Layout
                </h4>
              </div>
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
