export const TypographySection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-sunshine-light rounded-full text-sm font-medium text-navy mb-4">
            Tipografia
          </span>
          <h2 className="text-4xl font-display font-bold text-navy mb-4">
            Fonte da Marca
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tipografia moderna e versátil que transmite confiança e acessibilidade em todos os pontos de contato.
          </p>
        </div>

        {/* Satoshi */}
        <div className="bg-white rounded-3xl p-8 shadow-card border border-border mb-12">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 bg-coral-light text-coral-dark rounded-full text-sm font-medium">
              Display & Body
            </span>
            <a 
              href="https://www.fontshare.com/fonts/satoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky hover:underline"
            >
              Fontshare →
            </a>
          </div>
          <h3 className="font-display text-6xl font-bold text-navy mb-2 tracking-tight">Satoshi</h3>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Fonte principal para toda a identidade visual. Geométrica, limpa e contemporânea — usada tanto em títulos quanto em textos corridos.
          </p>

          {/* Weights */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-8">
            <div className="space-y-6">
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Pesos</h4>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-normal text-navy">Regular</span>
                  <span className="text-sm text-muted-foreground font-mono">400</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-medium text-navy">Medium</span>
                  <span className="text-sm text-muted-foreground font-mono">500</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-bold text-navy">Bold</span>
                  <span className="text-sm text-muted-foreground font-mono">700</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-black text-navy">Black</span>
                  <span className="text-sm text-muted-foreground font-mono">900</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Tamanhos</h4>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl font-bold text-navy">Heading 1</span>
                  <span className="text-sm text-muted-foreground">Bold · 48px</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-bold text-navy">Heading 2</span>
                  <span className="text-sm text-muted-foreground">Bold · 36px</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl font-bold text-navy">Heading 3</span>
                  <span className="text-sm text-muted-foreground">Bold · 24px</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-lg font-medium text-navy">Body</span>
                  <span className="text-sm text-muted-foreground">Medium · 18px</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-base text-navy">Regular</span>
                  <span className="text-sm text-muted-foreground">Regular · 16px</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hierarquia de Texto */}
        <div className="bg-muted rounded-3xl p-8">
          <h3 className="font-display font-bold text-navy text-xl mb-6">Hierarquia de Texto</h3>
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div className="pb-4 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">H1 — Hero</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mt-1 tracking-tight">
                Inovação em terapia multidisciplinar
              </h1>
            </div>
            <div className="pb-4 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">H2 — Seção</span>
              <h2 className="font-display text-3xl font-bold text-navy mt-1 tracking-tight">
                Nossa visão
              </h2>
            </div>
            <div className="pb-4 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">H3 — Card</span>
              <h3 className="font-display text-xl font-bold text-navy mt-1">
                Terapia ABA com excelência
              </h3>
            </div>
            <div className="pb-4 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Parágrafo</span>
              <p className="font-body text-foreground mt-1">
                Oferecemos terapias ABA de ponta para o desenvolvimento infanto-juvenil, com foco no bem-estar das crianças e de suas famílias.
              </p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Caption</span>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Ambiente acolhedor e seguro para todas as famílias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
