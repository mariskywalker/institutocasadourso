import bearIcon from "@/assets/bear-icon.png";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={bearIcon} alt="Casa do Urso" className="w-10 h-10" />
            <div>
              <p className="font-display font-bold text-foreground">Casa do Urso</p>
              <p className="text-sm text-muted-foreground">Brand Design System</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-coral fill-coral" /> para o desenvolvimento infantil
          </p>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Clínica Casa do Urso. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
