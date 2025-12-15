import { Section } from "./Section";
import { ColorSwatch } from "./ColorSwatch";

const brandColors = [
  { name: "Coral", variable: "--coral", hex: "#E5A5A5", description: "Acolhimento e carinho" },
  { name: "Coral Light", variable: "--coral-light", hex: "#FADEDE" },
  { name: "Coral Dark", variable: "--coral-dark", hex: "#CC7A7A" },
  { name: "Sky", variable: "--sky", hex: "#6DB8E3", description: "Confiança e serenidade" },
  { name: "Sky Light", variable: "--sky-light", hex: "#B3D9F2" },
  { name: "Sky Dark", variable: "--sky-dark", hex: "#4A9FD4" },
  { name: "Sunshine", variable: "--sunshine", hex: "#F5D76E", description: "Alegria e energia" },
  { name: "Sunshine Light", variable: "--sunshine-light", hex: "#FBEDB3" },
  { name: "Sunshine Dark", variable: "--sunshine-dark", hex: "#E6C44A" },
  { name: "Navy", variable: "--navy", hex: "#1A3A5C", description: "Profissionalismo e confiança" },
  { name: "Navy Light", variable: "--navy-light", hex: "#3D5A7A" },
  { name: "Navy Dark", variable: "--navy-dark", hex: "#0D2236" },
  { name: "Mint", variable: "--mint", hex: "#8FD4B8", description: "Frescor e bem-estar" },
  { name: "Mint Light", variable: "--mint-light", hex: "#C7EBD9" },
];

const semanticColors = [
  { name: "Background", variable: "--background" },
  { name: "Foreground", variable: "--foreground" },
  { name: "Primary", variable: "--primary" },
  { name: "Secondary", variable: "--secondary" },
  { name: "Accent", variable: "--accent" },
  { name: "Muted", variable: "--muted" },
];

export function ColorsSection() {
  return (
    <Section 
      id="colors"
      title="Paleta de Cores" 
      description="As cores da Casa do Urso transmitem acolhimento, alegria e profissionalismo. Uma combinação equilibrada que comunica cuidado e confiança."
    >
      {/* Main Brand Colors */}
      <div className="mb-16">
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Cores da Marca</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {brandColors.slice(0, 4).map((color) => (
            <div key={color.variable} className="col-span-1">
              <div 
                className="h-32 rounded-2xl shadow-card mb-3"
                style={{ backgroundColor: `hsl(var(${color.variable}))` }}
              />
              <p className="font-display font-bold text-foreground">{color.name}</p>
              <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
              {color.description && (
                <p className="text-xs text-muted-foreground mt-1">{color.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Color Variations */}
      <div className="mb-16">
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Variações</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {/* Coral Group */}
          <div className="space-y-2">
            <div className="h-20 rounded-xl bg-coral-light" />
            <p className="text-xs font-mono text-muted-foreground">coral-light</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-xl bg-coral" />
            <p className="text-xs font-mono text-muted-foreground">coral</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-xl bg-coral-dark" />
            <p className="text-xs font-mono text-muted-foreground">coral-dark</p>
          </div>
          {/* Sky Group */}
          <div className="space-y-2">
            <div className="h-20 rounded-xl bg-sky-light" />
            <p className="text-xs font-mono text-muted-foreground">sky-light</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-xl bg-sky" />
            <p className="text-xs font-mono text-muted-foreground">sky</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 rounded-xl bg-sky-dark" />
            <p className="text-xs font-mono text-muted-foreground">sky-dark</p>
          </div>
        </div>
      </div>

      {/* Gradient Examples */}
      <div>
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Gradientes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="h-32 rounded-2xl gradient-coral shadow-card" />
            <p className="font-display font-semibold">Gradient Coral</p>
            <p className="text-sm text-muted-foreground">Ideal para CTAs e destaques</p>
          </div>
          <div className="space-y-3">
            <div className="h-32 rounded-2xl gradient-sky shadow-card" />
            <p className="font-display font-semibold">Gradient Sky</p>
            <p className="text-sm text-muted-foreground">Para elementos de navegação</p>
          </div>
          <div className="space-y-3">
            <div className="h-32 rounded-2xl gradient-hero shadow-card" />
            <p className="font-display font-semibold">Gradient Hero</p>
            <p className="text-sm text-muted-foreground">Backgrounds de destaque</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
