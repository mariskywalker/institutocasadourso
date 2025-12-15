import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Heart, Star, Calendar, MessageCircle, ArrowRight, Phone } from "lucide-react";

export function ComponentsSection() {
  return (
    <Section 
      id="components"
      title="Componentes" 
      description="Biblioteca de componentes reutilizáveis construídos com as diretrizes da marca."
    >
      {/* Buttons */}
      <div className="mb-16">
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Botões</h3>
        
        <div className="bg-card rounded-3xl p-8 shadow-card">
          <div className="space-y-8">
            {/* Brand Variants */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">Variantes da Marca</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="coral">
                  <Heart className="w-4 h-4" />
                  Coral
                </Button>
                <Button variant="sky">
                  <Star className="w-4 h-4" />
                  Sky
                </Button>
                <Button variant="sunshine">
                  <Calendar className="w-4 h-4" />
                  Sunshine
                </Button>
                <Button variant="navy">
                  <MessageCircle className="w-4 h-4" />
                  Navy
                </Button>
              </div>
            </div>

            {/* Outline Variants */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">Variantes Outline</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline-coral">Outline Coral</Button>
                <Button variant="outline-sky">Outline Sky</Button>
                <Button variant="outline">Outline Default</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">Tamanhos</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="coral" size="sm">Pequeno</Button>
                <Button variant="coral" size="default">Padrão</Button>
                <Button variant="coral" size="lg">Grande</Button>
                <Button variant="coral" size="xl">Extra Grande</Button>
              </div>
            </div>

            {/* Hero Button */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">Botão Hero</p>
              <Button variant="hero" size="xl">
                Agendar Consulta
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-16">
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Cards</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service Card */}
          <div className="bg-card rounded-3xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-coral-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-coral-dark" />
            </div>
            <h4 className="font-display font-bold text-xl mb-2">Psicologia</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Apoio emocional e desenvolvimento cognitivo para crianças e suas famílias.
            </p>
            <Button variant="ghost" className="p-0 h-auto text-coral hover:text-coral-dark">
              Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Service Card - Sky */}
          <div className="bg-card rounded-3xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-sky-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-sky-dark" />
            </div>
            <h4 className="font-display font-bold text-xl mb-2">Fonoaudiologia</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Desenvolvimento da comunicação e linguagem para todas as idades.
            </p>
            <Button variant="ghost" className="p-0 h-auto text-sky hover:text-sky-dark">
              Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Service Card - Sunshine */}
          <div className="bg-card rounded-3xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-sunshine-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Star className="w-7 h-7 text-sunshine-dark" />
            </div>
            <h4 className="font-display font-bold text-xl mb-2">Terapia ABA</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Análise do Comportamento Aplicada para desenvolvimento comportamental.
            </p>
            <Button variant="ghost" className="p-0 h-auto text-sunshine-dark hover:text-sunshine">
              Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="mb-16">
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Badges & Tags</h3>
        
        <div className="bg-card rounded-3xl p-8 shadow-card">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-coral-light text-coral-dark rounded-full text-sm font-semibold">
              Psicologia
            </span>
            <span className="px-4 py-2 bg-sky-light text-sky-dark rounded-full text-sm font-semibold">
              Fonoaudiologia
            </span>
            <span className="px-4 py-2 bg-sunshine-light text-sunshine-dark rounded-full text-sm font-semibold">
              Terapia ABA
            </span>
            <span className="px-4 py-2 bg-mint-light text-navy rounded-full text-sm font-semibold">
              Terapia Ocupacional
            </span>
            <span className="px-4 py-2 bg-navy text-primary-foreground rounded-full text-sm font-semibold">
              Novo
            </span>
          </div>
        </div>
      </div>

      {/* CTA Block */}
      <div>
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Bloco de CTA</h3>
        
        <div className="gradient-hero rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Agende uma consulta com nossa equipe
            </h3>
            <p className="text-navy-light text-lg mb-6">
              Estamos aqui para ajudar no desenvolvimento do seu filho. 
              Entre em contato e conheça nossos serviços.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="navy" size="lg">
                <Phone className="w-5 h-5" />
                Fale Conosco
              </Button>
              <Button variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
                Ver Especialidades
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
