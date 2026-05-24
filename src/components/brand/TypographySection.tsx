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
            A Poppins é a fonte principal da marca para títulos, textos corridos e materiais digitais. A Dolpino fica restrita ao logotipo.
          </p>
        </div>

        {/* Poppins principal */}
        <div className="bg-white rounded-3xl p-8 shadow-card border border-border mb-12">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 bg-coral-light text-coral-dark rounded-full text-sm font-medium">
              Fonte Principal
            </span>
            <a
              href="https://fonts.google.com/specimen/Poppins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky hover:underline"
            >
              Google Fonts →
            </a>
          </div>
          <h3 className="font-poppins text-6xl font-bold text-navy mb-2 tracking-tight">Poppins</h3>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Fonte principal para toda a comunicação da marca, com alta legibilidade e consistência em interfaces e materiais institucionais.
          </p>

          {/* Weights */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-8">
            <div className="space-y-6">
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Pesos</h4>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-3xl font-light text-navy">Light</span>
                  <span className="text-sm text-muted-foreground font-mono">300</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-3xl font-normal text-navy">Regular</span>
                  <span className="text-sm text-muted-foreground font-mono">400</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-3xl font-medium text-navy">Medium</span>
                  <span className="text-sm text-muted-foreground font-mono">500</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-3xl font-semibold text-navy">SemiBold</span>
                  <span className="text-sm text-muted-foreground font-mono">600</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-3xl font-bold text-navy">Bold</span>
                  <span className="text-sm text-muted-foreground font-mono">700</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Tamanhos</h4>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-5xl font-bold text-navy">Display</span>
                  <span className="text-sm text-muted-foreground">Bold · 48px</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-4xl font-bold text-navy">Heading 1</span>
                  <span className="text-sm text-muted-foreground">Bold · 36px</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-3xl font-semibold text-navy">Heading 2</span>
                  <span className="text-sm text-muted-foreground">SemiBold · 30px</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-2xl font-semibold text-navy">Heading 3</span>
                  <span className="text-sm text-muted-foreground">SemiBold · 24px</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-poppins text-lg font-medium text-navy">Body</span>
                  <span className="text-sm text-muted-foreground">Regular · 16px</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dolpino restrita ao logo */}
        <div className="bg-white rounded-3xl p-8 shadow-card border border-border mb-12">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 bg-sky-light text-sky-dark rounded-full text-sm font-medium">
              Uso exclusivo no logotipo
            </span>
            <span className="text-sm text-sky">Fonte proprietária (manual)</span>
          </div>
          <h3
            className="text-6xl font-bold text-navy mb-2 tracking-tight"
            style={{ fontFamily: "'Dolpino', 'Poppins', sans-serif" }}
          >
            Dolpino
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl">
            A Dolpino acompanha o desenho do logotipo Casa do Urso e nao deve ser usada em titulos, textos corridos ou componentes da interface.
          </p>

          <div className="bg-muted rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">
              Uso correto: somente no arquivo oficial do logotipo. Para qualquer texto da aplicacao, usar sempre Poppins.
            </p>
          </div>
        </div>

        {/* Hierarquia de Texto */}
        <div className="bg-muted rounded-3xl p-8">
          <h3 className="font-display font-bold text-navy text-xl mb-6">Hierarquia de Texto</h3>
          <p className="text-sm text-muted-foreground mb-5">
            Para reforcar mensagens, destaque palavras-chave com peso de fonte (Medium, SemiBold ou Bold).
            Use esse recurso com moderacao para manter clareza e ritmo de leitura.
          </p>
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div className="pb-4 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">H1 — Hero</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mt-1 tracking-tight">
                <span className="font-light">Inovacao em </span>
                <span className="font-extrabold">terapia multidisciplinar</span>
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
                Oferecemos terapias ABA de ponta para o desenvolvimento infanto-juvenil, com foco no
                <span className="font-semibold"> bem-estar das criancas </span>
                e de suas familias.
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
