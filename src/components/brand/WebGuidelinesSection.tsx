import { Button } from '@/components/ui/button';
import { Heart, Star, Calendar, MessageCircle, ArrowRight, Phone, Download, ExternalLink, Plus, Check, X, Mail, Search, Eye, Info, AlertTriangle, Accessibility } from 'lucide-react';
import { IconAutonomia, IconEmocional, IconComunicacao, IconSocial } from './BrandIcons';

/* ───────────────── helpers ───────────────── */

const SectionTitle = ({ tag, title, description }: { tag: string; title: string; description: string }) => (
  <div className="mb-10">
    <span className="inline-block px-3 py-1 bg-mint-light rounded-full text-xs font-semibold text-mint-dark mb-3 uppercase tracking-wider">
      {tag}
    </span>
    <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-2">{title}</h3>
    <p className="text-muted-foreground max-w-2xl text-sm">{description}</p>
  </div>
);

const ColorVar = ({ name, token, preview }: { name: string; token: string; preview: string }) => (
  <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
    <div className={`w-10 h-10 rounded-lg flex-shrink-0 border border-border ${preview}`} />
    <div className="min-w-0">
      <p className="text-sm font-display font-bold text-foreground truncate">{name}</p>
      <p className="text-xs text-muted-foreground font-mono truncate">{token}</p>
    </div>
  </div>
);

const AccessibilityNote = ({ text }: { text: string }) => (
  <div className="flex gap-2 items-start p-3 bg-mint-light/60 rounded-xl text-sm text-mint-dark border border-mint/30">
    <Accessibility className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
    <span>{text}</span>
  </div>
);

/* ───────────────── main section ───────────────── */

export const WebGuidelinesSection = () => {
  return (
    <section className="py-16 px-6 bg-muted" aria-label="UI Kit Casa do Urso">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint-light rounded-full mb-6">
            <span className="text-sunshine"><IconAutonomia className="w-4 h-4" /></span>
            <span className="text-coral"><IconEmocional className="w-4 h-4" /></span>
            <span className="text-sky"><IconComunicacao className="w-4 h-4" /></span>
            <span className="text-mint-dark"><IconSocial className="w-4 h-4" /></span>
            <span className="text-xs font-semibold text-mint-dark uppercase tracking-wider ml-1">UI Kit</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-foreground mb-4 tracking-tight">
            UI Kit — Web
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Componentes, variáveis e diretrizes para construir interfaces web consistentes, acessíveis e alinhadas à marca Casa do Urso.
          </p>
        </header>

        {/* ═══════════════════════════════════════════
            1. DESIGN TOKENS / VARIÁVEIS
        ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionTitle tag="Tokens" title="Variáveis de Design" description="Todas as cores, sombras e espaçamentos são controlados por CSS custom properties. Nunca use valores fixos — use sempre os tokens." />

          {/* Cores da Marca */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Cores da Marca</h4>
            <p className="text-xs text-muted-foreground mb-6">Definidas em <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">index.css</code> como HSL e mapeadas no Tailwind.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <ColorVar name="Doce (Coral)" token="--coral" preview="bg-coral" />
              <ColorVar name="Sky Blue" token="--sky" preview="bg-sky" />
              <ColorVar name="Milho" token="--sunshine" preview="bg-sunshine" />
              <ColorVar name="Navy" token="--navy" preview="bg-navy" />
              <ColorVar name="Mint (Verde)" token="--mint" preview="bg-mint" />
            </div>
            <div className="mt-4">
              <AccessibilityNote text="Para texto, use as variantes -dark (ex: text-coral-dark, text-mint-dark) que garantem contraste mínimo 4.5:1 (WCAG AA)." />
            </div>
          </div>

          {/* Cores Semânticas */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Cores Semânticas</h4>
            <p className="text-xs text-muted-foreground mb-6">Use tokens semânticos para fundo, texto e superfícies. Suportam dark mode automaticamente.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ColorVar name="Background" token="--background" preview="bg-background border" />
              <ColorVar name="Foreground" token="--foreground" preview="bg-foreground" />
              <ColorVar name="Card" token="--card" preview="bg-card border" />
              <ColorVar name="Muted" token="--muted" preview="bg-muted" />
              <ColorVar name="Primary" token="--primary" preview="bg-primary" />
              <ColorVar name="Secondary" token="--secondary" preview="bg-secondary" />
              <ColorVar name="Accent" token="--accent" preview="bg-accent" />
              <ColorVar name="Border" token="--border" preview="bg-border" />
            </div>
          </div>

          {/* Sombras & Gradientes */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
              <h4 className="font-display font-bold text-foreground text-lg mb-4">Sombras</h4>
              <div className="space-y-4">
                {[
                  { name: 'Soft', cls: 'shadow-soft', token: '--shadow-soft' },
                  { name: 'Card', cls: 'shadow-card', token: '--shadow-card' },
                  { name: 'Elevated', cls: 'shadow-elevated', token: '--shadow-elevated' },
                ].map(s => (
                  <div key={s.name} className="flex items-center gap-4">
                    <div className={`w-20 h-12 bg-card rounded-xl ${s.cls} border border-border`} />
                    <div>
                      <p className="text-sm font-display font-bold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{s.token}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
              <h4 className="font-display font-bold text-foreground text-lg mb-4">Gradientes</h4>
              <div className="space-y-4">
                {[
                  { name: 'Hero', cls: 'gradient-hero', token: '--gradient-hero' },
                  { name: 'Playful', cls: 'gradient-playful', token: '--gradient-playful' },
                  { name: 'Coral', cls: 'gradient-coral', token: '--gradient-coral' },
                  { name: 'Sky', cls: 'gradient-sky', token: '--gradient-sky' },
                ].map(g => (
                  <div key={g.name} className="flex items-center gap-4">
                    <div className={`w-20 h-12 rounded-xl ${g.cls}`} />
                    <div>
                      <p className="text-sm font-display font-bold text-foreground">{g.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{g.token}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            2. BOTÕES
        ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionTitle tag="Botões" title="Variantes de Botão" description="Botões acessíveis com focus ring visível, estados hover/disabled e contraste mínimo WCAG AA." />

          {/* Primary Brand */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Primárias da Marca</h4>
            <p className="text-xs text-muted-foreground mb-6">O verde (mint) é o CTA padrão. Use coral e sky como complemento.</p>
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <Button variant="mint"><Check className="w-4 h-4" />Mint (Verde)</Button>
              <Button variant="coral"><Heart className="w-4 h-4" />Doce (Coral)</Button>
              <Button variant="sky"><Star className="w-4 h-4" />Sky</Button>
              <Button variant="sunshine"><Calendar className="w-4 h-4" />Milho</Button>
              <Button variant="navy"><MessageCircle className="w-4 h-4" />Navy</Button>
            </div>
            <AccessibilityNote text="Todos os botões possuem focus-visible ring com offset de 2px para navegação por teclado." />
          </div>

          {/* Outline */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Outline</h4>
            <p className="text-xs text-muted-foreground mb-6">Para ações secundárias ou contextos onde o fundo precisa respirar.</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="outline-mint">Outline Mint (Verde)</Button>
              <Button variant="outline-coral">Outline Doce</Button>
              <Button variant="outline-sky">Outline Sky</Button>
              <Button variant="outline">Outline Padrão</Button>
            </div>
          </div>

          {/* Utility */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Utilitárias</h4>
            <p className="text-xs text-muted-foreground mb-6">Variantes para links, ações fantasma e ações destrutivas.</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Hero CTA */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Hero CTA</h4>
            <p className="text-xs text-muted-foreground mb-6">Botão de destaque máximo — use apenas 1 por página.</p>
            <Button variant="hero" size="xl">
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Sizes */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Tamanhos</h4>
            <p className="text-xs text-muted-foreground mb-6">Escolha conforme hierarquia e espaço disponível.</p>
            <div className="flex flex-wrap items-end gap-5">
              {[
                { label: 'sm', size: 'sm' as const },
                { label: 'default', size: 'default' as const },
                { label: 'lg', size: 'lg' as const },
                { label: 'xl', size: 'xl' as const },
                { label: 'icon', size: 'icon' as const },
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <Button variant="mint" size={item.size}>
                    {item.size === 'icon' ? <Plus className="w-4 h-4" /> : item.label}
                  </Button>
                  <span className="text-xs text-muted-foreground font-mono">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With Icons */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Com Ícones</h4>
            <p className="text-xs text-muted-foreground mb-6">Ícone à esquerda reforça a ação; à direita indica navegação.</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="mint"><Phone className="w-4 h-4" />Fale Conosco</Button>
              <Button variant="sky"><Mail className="w-4 h-4" />Enviar E-mail</Button>
              <Button variant="coral"><Download className="w-4 h-4" />Download</Button>
              <Button variant="outline-mint">Ver Mais <ArrowRight className="w-4 h-4" /></Button>
              <Button variant="ghost"><ExternalLink className="w-4 h-4" />Link Externo</Button>
              <Button variant="sunshine"><Search className="w-4 h-4" />Buscar</Button>
            </div>
          </div>

          {/* States */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border mb-6">
            <h4 className="font-display font-bold text-foreground text-lg mb-1">Estados Interativos</h4>
            <p className="text-xs text-muted-foreground mb-6">Cada estado é visualmente distinto para feedback claro ao usuário.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Normal', extra: '' },
                { label: 'Hover', extra: '-translate-y-0.5 shadow-card' },
                { label: 'Focus', extra: 'ring-2 ring-ring ring-offset-2' },
                { label: 'Disabled', extra: '' },
              ].map(state => (
                <div key={state.label} className="p-5 bg-muted rounded-2xl text-center" role="group" aria-label={`Estado ${state.label}`}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{state.label}</p>
                  <Button
                    variant="mint"
                    className={state.extra}
                    disabled={state.label === 'Disabled'}
                  >
                    {state.label}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* On backgrounds */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border flex flex-col items-center gap-4" role="group" aria-label="Botões em fundo claro">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fundo Claro</p>
              <div className="flex gap-3 flex-wrap justify-center">
                <Button variant="mint">Mint</Button>
                <Button variant="coral">Doce</Button>
                <Button variant="outline-mint">Outline</Button>
              </div>
            </div>
            <div className="bg-navy rounded-3xl p-8 flex flex-col items-center gap-4" role="group" aria-label="Botões em fundo escuro">
              <p className="text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider">Fundo Escuro (Navy)</p>
              <div className="flex gap-3 flex-wrap justify-center">
                <Button variant="sunshine">Milho</Button>
                <Button variant="coral">Doce</Button>
                <Button className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-navy transition-all rounded-xl font-display font-semibold h-11 px-6">Outline</Button>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            3. DIRETRIZES DO / DON'T
        ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionTitle tag="Diretrizes" title="Boas Práticas Web" description="Regras para manter a consistência e a acessibilidade em todas as interfaces." />

          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Do's */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-mint-dark rounded-full flex items-center justify-center" aria-hidden="true">
                    <Check className="text-primary-foreground" size={18} />
                  </div>
                  <h4 className="font-display font-bold text-foreground text-lg">Faça</h4>
                </div>
                <ul className="space-y-3" role="list">
                  {[
                    'Use rótulos claros com verbos de ação ("Agendar", "Enviar", "Ver mais").',
                    'Mantenha hierarquia: apenas 1 CTA primário por seção.',
                    'Use os tokens de cor (--coral, --sky, --mint) — nunca hex direto.',
                    'Garanta contraste mínimo 4.5:1 (WCAG AA) para todo texto.',
                    'Adicione aria-label em botões que têm só ícone.',
                    'Use border-radius arredondado (rounded-xl+) para manter o tom acolhedor.',
                    'Teste todos os fluxos com navegação por teclado (Tab + Enter).',
                    'Use focus-visible ring em todos os elementos interativos.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-mint-dark mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-coral-dark rounded-full flex items-center justify-center" aria-hidden="true">
                    <X className="text-primary-foreground" size={18} />
                  </div>
                  <h4 className="font-display font-bold text-foreground text-lg">Não Faça</h4>
                </div>
                <ul className="space-y-3" role="list">
                  {[
                    'Não use cores fora da paleta oficial (nada de #hex avulso).',
                    'Evite múltiplos botões primários competindo pela atenção.',
                    'Não use botões sem rótulo de texto (exceto icon buttons com aria-label).',
                    'Não remova focus ring — é essencial para acessibilidade.',
                    'Evite cantos retos (sharp corners) — quebra a identidade.',
                    'Não misture fontes externas — use apenas Satoshi e Poppins.',
                    'Não use texto claro sobre fundo claro ou escuro sobre escuro.',
                    'Não desabilite o zoom do viewport no mobile.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-muted-foreground">
                      <X className="w-4 h-4 text-coral-dark mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            4. LAYOUT & ESPAÇAMENTO
        ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionTitle tag="Layout" title="Espaçamento & Grid" description="Padrões de layout para manter ritmo visual e respiro entre elementos." />

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-card rounded-3xl p-6 shadow-card border border-border text-center">
              <div className="w-full h-20 bg-sky-light rounded-xl border-2 border-dashed border-sky mb-4 flex items-center justify-center" aria-hidden="true">
                <span className="text-xs text-sky-dark font-mono font-bold">max-w-6xl</span>
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">Container</h4>
              <p className="text-xs text-muted-foreground">Max-width 1152px · Padding lateral 24px</p>
            </div>
            <div className="bg-card rounded-3xl p-6 shadow-card border border-border text-center">
              <div className="w-full h-20 rounded-xl border-2 border-dashed border-coral mb-4 flex items-center justify-center gap-2" aria-hidden="true">
                <div className="w-8 h-12 bg-coral-light rounded-lg" />
                <div className="w-8 h-12 bg-coral-light rounded-lg" />
                <div className="w-8 h-12 bg-coral-light rounded-lg" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">Grid</h4>
              <p className="text-xs text-muted-foreground">12 colunas · gap-6 (24px)</p>
            </div>
            <div className="bg-card rounded-3xl p-6 shadow-card border border-border text-center">
              <div className="w-full h-20 rounded-xl border-2 border-dashed border-sunshine mb-4 flex flex-col items-center justify-center" aria-hidden="true">
                <div className="w-20 h-3 bg-sunshine-light rounded mb-1" />
                <div className="w-12 h-2 bg-sunshine-light/60 rounded mb-2" />
                <div className="w-16 h-5 bg-sunshine rounded-lg" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">Seções</h4>
              <p className="text-xs text-muted-foreground">Padding vertical py-16 (64px) ou py-20 (80px)</p>
            </div>
          </div>

          {/* Spacing tokens */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
            <h4 className="font-display font-bold text-foreground text-lg mb-4">Escala de Espaçamento</h4>
            <div className="space-y-3">
              {[
                { name: 'xs', value: '4px', tw: 'p-1', w: 'w-1' },
                { name: 'sm', value: '8px', tw: 'p-2', w: 'w-2' },
                { name: 'md', value: '16px', tw: 'p-4', w: 'w-4' },
                { name: 'lg', value: '24px', tw: 'p-6', w: 'w-6' },
                { name: 'xl', value: '32px', tw: 'p-8', w: 'w-8' },
                { name: '2xl', value: '48px', tw: 'p-12', w: 'w-12' },
                { name: '3xl', value: '64px', tw: 'p-16', w: 'w-16' },
              ].map(sp => (
                <div key={sp.name} className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground font-mono w-8">{sp.name}</span>
                  <div className={`h-4 ${sp.w} bg-mint rounded-sm`} />
                  <span className="text-xs text-muted-foreground">{sp.value}</span>
                  <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">{sp.tw}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            5. BORDER RADIUS
        ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionTitle tag="Formas" title="Border Radius" description="O arredondamento é parte essencial da identidade acolhedora da marca." />

          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
            <div className="flex flex-wrap gap-6 items-end">
              {[
                { label: 'sm', radius: 'rounded-sm', size: 'w-14 h-14' },
                { label: 'md', radius: 'rounded-md', size: 'w-14 h-14' },
                { label: 'lg', radius: 'rounded-lg', size: 'w-14 h-14' },
                { label: 'xl ✦', radius: 'rounded-xl', size: 'w-16 h-16' },
                { label: '2xl', radius: 'rounded-2xl', size: 'w-18 h-18' },
                { label: '3xl ✦', radius: 'rounded-3xl', size: 'w-20 h-20' },
                { label: 'full', radius: 'rounded-full', size: 'w-18 h-18' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div className={`${item.size} ${item.radius} bg-mint-light border-2 border-mint-dark`} />
                  <span className="text-xs text-muted-foreground font-mono">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">✦ Recomendados: <code className="bg-muted px-1.5 py-0.5 rounded font-mono">rounded-xl</code> para botões e inputs, <code className="bg-muted px-1.5 py-0.5 rounded font-mono">rounded-3xl</code> para cards.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            6. ACESSIBILIDADE
        ═══════════════════════════════════════════ */}
        <div>
          <SectionTitle tag="A11y" title="Acessibilidade" description="Checklist de acessibilidade WCAG AA para todas as interfaces da marca." />

          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Eye className="w-5 h-5" />, title: 'Contraste de Cor', desc: 'Texto normal: ratio ≥ 4.5:1. Texto grande (≥18pt): ratio ≥ 3:1. Use as variantes -dark para texto sobre fundo claro.' },
                { icon: <Accessibility className="w-5 h-5" />, title: 'Navegação por Teclado', desc: 'Todos os elementos interativos devem ser focáveis via Tab. Use focus-visible ring. Ordem de foco deve ser lógica.' },
                { icon: <Info className="w-5 h-5" />, title: 'Textos Alternativos', desc: 'Imagens decorativas: aria-hidden="true". Imagens informativas: alt descritivo. Ícones em botões: aria-label no botão.' },
                { icon: <AlertTriangle className="w-5 h-5" />, title: 'Feedback & Erros', desc: 'Mensagens de erro devem ter role="alert". Use cores + ícones + texto (nunca só cor). Campos inválidos: aria-invalid="true".' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-muted rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-mint-light rounded-lg flex items-center justify-center text-mint-dark" aria-hidden="true">
                      {item.icon}
                    </div>
                    <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Contrast examples */}
            <div className="mt-8">
              <h4 className="font-display font-bold text-foreground text-lg mb-4">Exemplos de Contraste</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { bg: 'bg-background', text: 'text-foreground', label: 'Padrão', status: '✓ AA' },
                  { bg: 'bg-coral-light', text: 'text-coral-dark', label: 'Doce', status: '✓ AA' },
                  { bg: 'bg-sky-light', text: 'text-sky-dark', label: 'Sky', status: '✓ AA' },
                  { bg: 'bg-mint-light', text: 'text-mint-dark', label: 'Mint', status: '✓ AA' },
                ].map((c, i) => (
                  <div key={i} className={`${c.bg} p-4 rounded-xl text-center`}>
                    <p className={`${c.text} font-display font-bold text-lg`}>{c.label}</p>
                    <span className={`text-xs ${c.text} font-mono`}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
