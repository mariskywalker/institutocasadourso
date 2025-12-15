import { Button } from "@/components/ui/button";
import bearIcon from "@/assets/bear-icon.png";
import heroChild from "@/assets/hero-child.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-coral-light rounded-3xl rotate-12 animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-sky-light rounded-2xl -rotate-12 animate-float-delayed opacity-70" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-sunshine-light rounded-full animate-float opacity-50" />
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-mint-light rounded-xl rotate-45 animate-float-delayed opacity-60" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img 
                src={bearIcon} 
                alt="Casa do Urso" 
                className="w-14 h-14 animate-bounce-soft"
              />
              <span className="text-muted-foreground font-medium">
                Clínica Casa do Urso
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight">
              Brand{" "}
              <span className="text-gradient">Design</span>
              <br />
              System
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Guia completo de identidade visual da Casa do Urso. 
              Cores, tipografia, componentes e diretrizes para manter 
              a consistência da marca em todos os pontos de contato.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Explorar Sistema
              </Button>
              <Button variant="outline-coral" size="xl">
                Ver Guidelines
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-display font-bold text-coral">5</p>
                <p className="text-sm text-muted-foreground">Cores Primárias</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-sky">2</p>
                <p className="text-sm text-muted-foreground">Famílias Tipográficas</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-sunshine">12+</p>
                <p className="text-sm text-muted-foreground">Componentes</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative bg-coral-light rounded-3xl p-6 shadow-elevated">
                <img 
                  src={heroChild}
                  alt="Criança feliz"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-sky rounded-xl flex items-center justify-center shadow-sky animate-float">
                  <span className="text-2xl">💙</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sunshine rounded-2xl flex items-center justify-center shadow-card animate-float-delayed">
                  <img src={bearIcon} alt="" className="w-12 h-12" />
                </div>
              </div>
            </div>

            {/* Background Shapes */}
            <div className="absolute top-8 -right-8 w-full h-full bg-sky-light rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
