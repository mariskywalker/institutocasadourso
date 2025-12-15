import { Section } from "./Section";

export function TypographySection() {
  return (
    <Section 
      id="typography"
      title="Tipografia" 
      description="A tipografia da Casa do Urso combina a personalidade amigável da Nunito com a legibilidade elegante da Quicksand."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Display Font */}
        <div className="bg-card rounded-3xl p-8 shadow-card">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-coral-light text-coral-dark rounded-full text-sm font-medium mb-4">
              Títulos & Headlines
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Nunito</h3>
            <p className="text-muted-foreground">
              Uma fonte amigável e arredondada, perfeita para transmitir acolhimento e acessibilidade.
            </p>
          </div>
          
          <div className="space-y-4 border-t border-border pt-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">font-display / 900</p>
              <p className="font-display text-5xl font-black text-foreground">Casa do Urso</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">font-display / 700</p>
              <p className="font-display text-4xl font-bold text-foreground">Terapia ABA</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">font-display / 600</p>
              <p className="font-display text-2xl font-semibold text-foreground">Desenvolvimento Infantil</p>
            </div>
          </div>
        </div>

        {/* Body Font */}
        <div className="bg-card rounded-3xl p-8 shadow-card">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-sky-light text-sky-dark rounded-full text-sm font-medium mb-4">
              Corpo de Texto
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Quicksand</h3>
            <p className="text-muted-foreground">
              Uma fonte moderna e limpa que garante excelente legibilidade em textos longos.
            </p>
          </div>
          
          <div className="space-y-4 border-t border-border pt-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">font-body / 700</p>
              <p className="font-body text-xl font-bold text-foreground">
                Acolhimento e cuidado especializado
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">font-body / 500</p>
              <p className="font-body text-lg font-medium text-foreground">
                Nossa equipe multidisciplinar oferece suporte completo
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-mono">font-body / 400</p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                A Clínica Casa do Urso é especializada em terapia ABA para 
                o desenvolvimento infanto-juvenil, oferecendo um ambiente 
                acolhedor e seguro para crianças e suas famílias.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Font Scale */}
      <div className="mt-12 bg-muted/50 rounded-3xl p-8">
        <h3 className="font-display text-xl font-bold mb-6">Escala Tipográfica</h3>
        <div className="space-y-4">
          <div className="flex items-baseline gap-4 pb-4 border-b border-border/50">
            <span className="text-xs font-mono text-muted-foreground w-20">6xl</span>
            <p className="font-display text-6xl font-black">Aa</p>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-border/50">
            <span className="text-xs font-mono text-muted-foreground w-20">5xl</span>
            <p className="font-display text-5xl font-bold">Aa</p>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-border/50">
            <span className="text-xs font-mono text-muted-foreground w-20">4xl</span>
            <p className="font-display text-4xl font-bold">Aa</p>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-border/50">
            <span className="text-xs font-mono text-muted-foreground w-20">3xl</span>
            <p className="font-display text-3xl font-semibold">Aa</p>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-border/50">
            <span className="text-xs font-mono text-muted-foreground w-20">2xl</span>
            <p className="font-display text-2xl font-semibold">Aa</p>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-border/50">
            <span className="text-xs font-mono text-muted-foreground w-20">xl</span>
            <p className="font-body text-xl font-medium">Aa</p>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs font-mono text-muted-foreground w-20">base</span>
            <p className="font-body text-base">Aa</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
