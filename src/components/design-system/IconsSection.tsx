import { Section } from "./Section";
import { 
  Heart, Star, Calendar, MessageCircle, Phone, Mail, 
  MapPin, Clock, Users, Award, Sparkles, Shield,
  Brain, HandHeart, Lightbulb, Smile, Home, BookOpen
} from "lucide-react";
import bearIcon from "@/assets/bear-icon.png";

const icons = [
  { icon: Heart, label: "Coração", color: "coral" },
  { icon: Star, label: "Estrela", color: "sunshine" },
  { icon: Calendar, label: "Calendário", color: "sky" },
  { icon: MessageCircle, label: "Mensagem", color: "coral" },
  { icon: Phone, label: "Telefone", color: "navy" },
  { icon: Mail, label: "Email", color: "sky" },
  { icon: MapPin, label: "Localização", color: "coral" },
  { icon: Clock, label: "Relógio", color: "sunshine" },
  { icon: Users, label: "Pessoas", color: "navy" },
  { icon: Award, label: "Prêmio", color: "sunshine" },
  { icon: Sparkles, label: "Brilho", color: "coral" },
  { icon: Shield, label: "Escudo", color: "sky" },
  { icon: Brain, label: "Cérebro", color: "navy" },
  { icon: HandHeart, label: "Cuidado", color: "coral" },
  { icon: Lightbulb, label: "Ideia", color: "sunshine" },
  { icon: Smile, label: "Sorriso", color: "sky" },
  { icon: Home, label: "Casa", color: "coral" },
  { icon: BookOpen, label: "Livro", color: "navy" },
];

const getIconColors = (color: string) => {
  switch (color) {
    case "coral": return "bg-coral-light text-coral-dark";
    case "sky": return "bg-sky-light text-sky-dark";
    case "sunshine": return "bg-sunshine-light text-sunshine-dark";
    case "navy": return "bg-muted text-navy";
    default: return "bg-muted text-foreground";
  }
};

export function IconsSection() {
  return (
    <Section 
      id="icons"
      title="Iconografia" 
      description="Ícones utilizados na comunicação visual da Casa do Urso. Baseados na biblioteca Lucide com estilo consistente."
    >
      {/* Brand Icon */}
      <div className="mb-12">
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Ícone da Marca</h3>
        <div className="bg-card rounded-3xl p-8 shadow-card">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-muted rounded-2xl flex items-center justify-center">
                <img src={bearIcon} alt="Urso" className="w-20 h-20" />
              </div>
              <span className="text-sm text-muted-foreground">Original</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-coral-light rounded-2xl flex items-center justify-center">
                <img src={bearIcon} alt="Urso" className="w-20 h-20" />
              </div>
              <span className="text-sm text-muted-foreground">Coral BG</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-sky-light rounded-2xl flex items-center justify-center">
                <img src={bearIcon} alt="Urso" className="w-20 h-20" />
              </div>
              <span className="text-sm text-muted-foreground">Sky BG</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-navy rounded-2xl flex items-center justify-center">
                <img src={bearIcon} alt="Urso" className="w-20 h-20" />
              </div>
              <span className="text-sm text-muted-foreground">Navy BG</span>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Library */}
      <div className="mb-12">
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Biblioteca de Ícones</h3>
        <div className="bg-card rounded-3xl p-8 shadow-card">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {icons.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-2 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${getIconColors(color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Icon Usage */}
      <div>
        <h3 className="text-xl font-display font-bold mb-6 text-foreground">Uso de Ícones</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-3xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center">
                <Heart className="w-5 h-5 text-coral-dark" />
              </div>
              <span className="font-display font-semibold">Com Background</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Use ícones com fundo colorido para destacar informações importantes ou em cards de serviços.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-sky" />
              <span className="font-display font-semibold">Inline</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Use ícones inline para complementar texto ou em botões de ação.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-sunshine flex items-center justify-center">
                <Star className="w-5 h-5 text-sunshine" />
              </div>
              <span className="font-display font-semibold">Com Borda</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Use ícones com borda para variações mais sutis ou estados hover.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
