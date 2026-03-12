import { Button } from '@/components/ui/button';
import { Heart, Star, Calendar, MessageCircle, ArrowRight, Phone, Download, ExternalLink, Plus, Check, X, Mail, Search } from 'lucide-react';

export const WebGuidelinesSection = () => {
  return (
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-sky-light rounded-full text-sm font-medium text-navy mb-4">
            Web
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
            Botões & Diretrizes Web
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Componentes e padrões visuais para garantir consistência na presença digital da Casa do Urso.
          </p>
        </div>

        {/* ── Botões da Marca ── */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border mb-10">
          <h3 className="font-display font-bold text-navy text-2xl mb-2">Variantes de Botão</h3>
          <p className="text-muted-foreground mb-8 text-sm">As cores dos botões seguem a paleta oficial. Use a variante adequada ao contexto.</p>

          {/* Primary Brand Variants */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Primárias da Marca</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="coral"><Heart className="w-4 h-4" />Coral</Button>
              <Button variant="sky"><Star className="w-4 h-4" />Sky</Button>
              <Button variant="sunshine"><Calendar className="w-4 h-4" />Sunshine</Button>
              <Button variant="navy"><MessageCircle className="w-4 h-4" />Navy</Button>
            </div>
          </div>

          {/* Outline Variants */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Outline</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="outline-coral">Outline Coral</Button>
              <Button variant="outline-sky">Outline Sky</Button>
              <Button variant="outline">Outline Padrão</Button>
            </div>
          </div>

          {/* System Variants */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Utilitárias</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Hero */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Hero (destaque máximo)</p>
            <Button variant="hero" size="xl">
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* ── Tamanhos ── */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border mb-10">
          <h3 className="font-display font-bold text-navy text-2xl mb-2">Tamanhos</h3>
          <p className="text-muted-foreground mb-8 text-sm">Escolha o tamanho conforme a hierarquia e o espaço disponível.</p>

          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button variant="coral" size="sm">Pequeno</Button>
              <span className="text-xs text-muted-foreground font-mono">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="coral" size="default">Padrão</Button>
              <span className="text-xs text-muted-foreground font-mono">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="coral" size="lg">Grande</Button>
              <span className="text-xs text-muted-foreground font-mono">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="coral" size="xl">Extra Grande</Button>
              <span className="text-xs text-muted-foreground font-mono">xl</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="coral" size="icon"><Plus className="w-4 h-4" /></Button>
              <span className="text-xs text-muted-foreground font-mono">icon</span>
            </div>
          </div>
        </div>

        {/* ── Botões com Ícone ── */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border mb-10">
          <h3 className="font-display font-bold text-navy text-2xl mb-2">Com Ícones</h3>
          <p className="text-muted-foreground mb-8 text-sm">Use ícones à esquerda para reforçar a ação. Ícone à direita para indicar navegação.</p>

          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="navy"><Phone className="w-4 h-4" />Fale Conosco</Button>
            <Button variant="sky"><Mail className="w-4 h-4" />Enviar E-mail</Button>
            <Button variant="coral"><Download className="w-4 h-4" />Download</Button>
            <Button variant="outline">Ver Mais <ArrowRight className="w-4 h-4" /></Button>
            <Button variant="ghost"><ExternalLink className="w-4 h-4" />Link Externo</Button>
            <Button variant="sunshine"><Search className="w-4 h-4" />Buscar</Button>
          </div>
        </div>

        {/* ── Estados ── */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border mb-10">
          <h3 className="font-display font-bold text-navy text-2xl mb-2">Estados</h3>
          <p className="text-muted-foreground mb-8 text-sm">Todos os botões possuem estados hover, focus e disabled integrados.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-muted rounded-2xl text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Normal</p>
              <Button variant="navy">Botão Normal</Button>
            </div>
            <div className="p-6 bg-muted rounded-2xl text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Hover (passe o mouse)</p>
              <Button variant="navy" className="hover:bg-navy-light -translate-y-0.5 shadow-card">Botão Hover</Button>
            </div>
            <div className="p-6 bg-muted rounded-2xl text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Desabilitado</p>
              <Button variant="navy" disabled>Botão Disabled</Button>
            </div>
          </div>
        </div>

        {/* ── Sobre Fundos ── */}
        <div className="mb-10">
          <h3 className="font-display font-bold text-navy text-2xl mb-6">Sobre Diferentes Fundos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border flex flex-col items-center gap-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fundo Claro</p>
              <div className="flex gap-3">
                <Button variant="navy">Navy</Button>
                <Button variant="coral">Coral</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>
            <div className="bg-navy rounded-3xl p-8 flex flex-col items-center gap-4">
              <p className="text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider">Fundo Escuro</p>
              <div className="flex gap-3">
                <Button variant="sunshine">Sunshine</Button>
                <Button variant="coral">Coral</Button>
                <Button className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-navy transition-all">Outline</Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Diretrizes de Uso Web ── */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border mb-10">
          <h3 className="font-display font-bold text-navy text-2xl mb-6">Diretrizes de Uso Web</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-mint rounded-full flex items-center justify-center">
                  <Check className="text-primary-foreground" size={16} />
                </div>
                <h4 className="font-display font-bold text-navy text-lg">Faça</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Use botões com rótulos claros e verbos de ação (ex: "Agendar", "Enviar").',
                  'Mantenha hierarquia visual: 1 botão primário por seção.',
                  'Combine ícone + texto para melhorar a compreensão.',
                  'Garanta contraste adequado entre botão e fundo.',
                  'Use border-radius arredondado (rounded-xl) para manter o tom acolhedor.',
                  'Prefira a variante Navy para CTAs principais e Coral para ações secundárias.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-coral-dark rounded-full flex items-center justify-center">
                  <X className="text-primary-foreground" size={16} />
                </div>
                <h4 className="font-display font-bold text-navy text-lg">Não Faça</h4>
              </div>
              <ul className="space-y-3">
                {[
                  'Não use cores fora da paleta oficial nos botões.',
                  'Evite múltiplos botões primários competindo pela atenção.',
                  'Não use botões sem rótulo de texto (exceto icon buttons).',
                  'Não remova os estados hover/focus — são essenciais para acessibilidade.',
                  'Evite border-radius quadrado (sharp corners) — quebra a identidade visual.',
                  'Não misture estilos de botão de outras bibliotecas com os da marca.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-coral-dark mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Espaçamento e Grid ── */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border mb-10">
          <h3 className="font-display font-bold text-navy text-2xl mb-2">Espaçamento & Layout Web</h3>
          <p className="text-muted-foreground mb-8 text-sm">Padrões recomendados para layouts web da marca.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-muted rounded-2xl text-center">
              <div className="w-full h-20 bg-sky-light rounded-xl border-2 border-dashed border-sky mb-4 flex items-center justify-center">
                <span className="text-xs text-sky-dark font-mono font-bold">max-w-6xl</span>
              </div>
              <h4 className="font-display font-bold text-navy mb-1">Container</h4>
              <p className="text-xs text-muted-foreground">Max-width de 1152px com padding lateral de 24px.</p>
            </div>
            <div className="p-6 bg-muted rounded-2xl text-center">
              <div className="w-full h-20 rounded-xl border-2 border-dashed border-coral mb-4 flex items-center justify-center gap-2">
                <div className="w-8 h-12 bg-coral-light rounded-lg" />
                <div className="w-8 h-12 bg-coral-light rounded-lg" />
                <div className="w-8 h-12 bg-coral-light rounded-lg" />
              </div>
              <h4 className="font-display font-bold text-navy mb-1">Grid</h4>
              <p className="text-xs text-muted-foreground">Grid de 12 colunas com gap de 24px (gap-6).</p>
            </div>
            <div className="p-6 bg-muted rounded-2xl text-center">
              <div className="w-full h-20 rounded-xl border-2 border-dashed border-sunshine mb-4 flex flex-col items-center justify-center">
                <div className="w-20 h-3 bg-sunshine-light rounded mb-1" />
                <div className="w-12 h-2 bg-sunshine-light/60 rounded mb-2" />
                <div className="w-16 h-5 bg-sunshine rounded-lg" />
              </div>
              <h4 className="font-display font-bold text-navy mb-1">Seções</h4>
              <p className="text-xs text-muted-foreground">Padding vertical de 64px (py-16) entre seções.</p>
            </div>
          </div>
        </div>

        {/* ── Border Radius ── */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
          <h3 className="font-display font-bold text-navy text-2xl mb-2">Border Radius</h3>
          <p className="text-muted-foreground mb-8 text-sm">O arredondamento é parte fundamental da identidade acolhedora da marca.</p>

          <div className="flex flex-wrap gap-6 items-end">
            {[
              { label: 'sm', radius: 'rounded-sm', size: 'w-16 h-16' },
              { label: 'md', radius: 'rounded-md', size: 'w-16 h-16' },
              { label: 'lg', radius: 'rounded-lg', size: 'w-16 h-16' },
              { label: 'xl', radius: 'rounded-xl', size: 'w-16 h-16' },
              { label: '2xl', radius: 'rounded-2xl', size: 'w-20 h-20' },
              { label: '3xl', radius: 'rounded-3xl', size: 'w-24 h-24' },
              { label: 'full', radius: 'rounded-full', size: 'w-20 h-20' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className={`${item.size} ${item.radius} bg-sky-light border-2 border-sky`} />
                <span className="text-xs text-muted-foreground font-mono">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
