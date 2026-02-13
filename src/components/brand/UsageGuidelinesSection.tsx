import logoBear from '@/assets/brand/logo-bear.png';
import { Check, X } from 'lucide-react';
import { IconAutonomia, IconEmocional, IconComunicacao, IconSocial } from './BrandIcons';

const BrandIconsRow = ({ size = "w-4 h-4", className = "" }: { size?: string; className?: string }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <span className="text-sunshine"><IconAutonomia className={size} /></span>
    <span className="text-coral"><IconEmocional className={size} /></span>
    <span className="text-sky"><IconComunicacao className={size} /></span>
    <span className="text-[#CD995B]"><IconSocial className={size} /></span>
  </div>
);

export const UsageGuidelinesSection = () => {
  return (
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-coral-light rounded-full text-sm font-medium text-navy mb-4">
            Diretrizes
          </span>
          <h2 className="text-4xl font-display font-bold text-navy mb-4">
            Uso Correto da Marca
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Siga estas diretrizes para garantir consistência em todas as aplicações da marca.
          </p>
        </div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Do's */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-mint rounded-full flex items-center justify-center">
                <Check className="text-white" size={20} />
              </div>
              <h3 className="font-display font-bold text-navy text-xl">Faça</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-muted rounded-xl">
                <div className="w-24 h-16 bg-coral-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <BrandIconsRow />
                </div>
                <p className="text-sm text-muted-foreground">
                  Use o logo em fundos claros ou nas cores da paleta.
                </p>
              </div>
              <div className="flex gap-4 p-4 bg-muted rounded-xl">
                <div className="w-24 h-16 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                  <BrandIconsRow className="[&_span]:text-white [&_span.text-coral]:text-coral [&_span.text-sky]:text-sky" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Em fundos escuros, use a versão com ícones claros.
                </p>
              </div>
              <div className="flex gap-4 p-4 bg-muted rounded-xl">
                <div className="w-24 h-16 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-dashed border-coral">
                  <BrandIconsRow />
                </div>
                <p className="text-sm text-muted-foreground">
                  Mantenha sempre a área de proteção ao redor do logo.
                </p>
              </div>
            </div>
          </div>

          {/* Don'ts */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-coral-dark rounded-full flex items-center justify-center">
                <X className="text-white" size={20} />
              </div>
              <h3 className="font-display font-bold text-navy text-xl">Não Faça</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-muted rounded-xl">
                <div className="w-24 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 relative">
                  <BrandIconsRow />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <X className="text-red-500" size={32} strokeWidth={3} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Não use o logo sobre fundos que não pertencem à paleta.
                </p>
              </div>
              <div className="flex gap-4 p-4 bg-muted rounded-xl">
                <div className="w-24 h-16 bg-white border border-border rounded-lg flex items-center justify-center flex-shrink-0 relative">
                  <div style={{ transform: 'scaleX(1.5)' }}>
                    <BrandIconsRow />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <X className="text-red-500" size={32} strokeWidth={3} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Não distorça ou estique o logo.
                </p>
              </div>
              <div className="flex gap-4 p-4 bg-muted rounded-xl">
                <div className="w-24 h-16 bg-white border border-border rounded-lg flex items-center justify-center flex-shrink-0 relative">
                  <div className="flex items-center gap-1.5">
                    <span className="text-green-500"><IconAutonomia className="w-4 h-4" /></span>
                    <span className="text-orange-500"><IconEmocional className="w-4 h-4" /></span>
                    <span className="text-purple-500"><IconComunicacao className="w-4 h-4" /></span>
                    <span className="grayscale"><IconSocial className="w-4 h-4" /></span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <X className="text-red-500" size={32} strokeWidth={3} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Não altere as cores dos elementos do logo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tom de Voz */}
        <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
          <h3 className="font-display font-bold text-navy text-2xl mb-6 text-center">Tom de Voz</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-coral-light rounded-2xl">
              <span className="text-4xl mb-4 block">🤗</span>
              <h4 className="font-display font-bold text-navy mb-2">Acolhedor</h4>
              <p className="text-sm text-muted-foreground">
                Comunicação calorosa e empática, como um abraço de urso.
              </p>
            </div>
            <div className="text-center p-6 bg-sky-light rounded-2xl">
              <span className="text-4xl mb-4 block">💡</span>
              <h4 className="font-display font-bold text-navy mb-2">Informativo</h4>
              <p className="text-sm text-muted-foreground">
                Conteúdo educativo e acessível para famílias.
              </p>
            </div>
            <div className="text-center p-6 bg-sunshine-light rounded-2xl">
              <span className="text-4xl mb-4 block">✨</span>
              <h4 className="font-display font-bold text-navy mb-2">Otimista</h4>
              <p className="text-sm text-muted-foreground">
                Foco no potencial e nas conquistas de cada criança.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-muted rounded-2xl">
            <h4 className="font-display font-bold text-navy mb-4">Exemplos de Comunicação</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <span className="text-xs text-mint font-medium uppercase tracking-wider">✓ Prefira</span>
                <p className="text-navy mt-1">"Cada criança tem seu tempo e suas conquistas únicas."</p>
              </div>
              <div>
                <span className="text-xs text-coral-dark font-medium uppercase tracking-wider">✗ Evite</span>
                <p className="text-muted-foreground mt-1">"Tratamento para crianças com problemas."</p>
              </div>
              <div>
                <span className="text-xs text-mint font-medium uppercase tracking-wider">✓ Prefira</span>
                <p className="text-navy mt-1">"Venha conhecer nossa família!"</p>
              </div>
              <div>
                <span className="text-xs text-coral-dark font-medium uppercase tracking-wider">✗ Evite</span>
                <p className="text-muted-foreground mt-1">"Agende uma consulta agora."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
