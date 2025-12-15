export const TypographySection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-sunshine-light rounded-full text-sm font-medium text-navy mb-4">
            Tipografia
          </span>
          <h2 className="text-4xl font-display font-bold text-navy mb-4">
            Fontes da Marca
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tipografia amigável e acessível que transmite acolhimento e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Nunito */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 bg-coral-light text-coral-dark rounded-full text-sm font-medium">
                Display
              </span>
              <a 
                href="https://fonts.google.com/specimen/Nunito"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sky hover:underline"
              >
                Google Fonts →
              </a>
            </div>
            <h3 className="font-display text-5xl font-bold text-navy mb-4">Nunito</h3>
            <p className="text-muted-foreground mb-6">
              Fonte principal para títulos e destaques. Arredondada, amigável e moderna.
            </p>
            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl font-bold text-navy">Heading 1</span>
                <span className="text-sm text-muted-foreground">Bold • 48px</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-bold text-navy">Heading 2</span>
                <span className="text-sm text-muted-foreground">Bold • 36px</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl font-bold text-navy">Heading 3</span>
                <span className="text-sm text-muted-foreground">Bold • 24px</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xl font-semibold text-navy">Heading 4</span>
                <span className="text-sm text-muted-foreground">Semibold • 20px</span>
              </div>
            </div>
          </div>

          {/* Quicksand */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 bg-sky-light text-sky-dark rounded-full text-sm font-medium">
                Body
              </span>
              <a 
                href="https://fonts.google.com/specimen/Quicksand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sky hover:underline"
              >
                Google Fonts →
              </a>
            </div>
            <h3 className="font-body text-5xl font-bold text-navy mb-4">Quicksand</h3>
            <p className="text-muted-foreground mb-6">
              Fonte secundária para textos corridos. Legível, suave e acolhedora.
            </p>
            <div className="space-y-4 border-t border-border pt-6">
              <div>
                <span className="text-sm text-muted-foreground block mb-1">Regular • 16px</span>
                <p className="font-body text-navy">
                  A Casa do Urso oferece terapias multidisciplinares com foco em ABA para o desenvolvimento infanto-juvenil.
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground block mb-1">Medium • 14px</span>
                <p className="font-body text-sm font-medium text-navy">
                  Ambiente acolhedor e seguro para crianças e famílias.
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground block mb-1">Small • 12px</span>
                <p className="font-body text-xs text-muted-foreground">
                  Legenda ou texto de apoio com informações complementares.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hierarquia de Texto */}
        <div className="bg-muted rounded-3xl p-8">
          <h3 className="font-display font-bold text-navy text-xl mb-6">Hierarquia de Texto</h3>
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div className="pb-4 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">H1 - Hero</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mt-1">
                Inovação em terapia multidisciplinar
              </h1>
            </div>
            <div className="pb-4 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">H2 - Seção</span>
              <h2 className="font-display text-3xl font-bold text-navy mt-1">
                Nossa visão
              </h2>
            </div>
            <div className="pb-4 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">H3 - Card</span>
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
