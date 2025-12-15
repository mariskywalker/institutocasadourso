import { Button } from "@/components/ui/button";
import bearIcon from "@/assets/bear-icon.png";

const navItems = [
  { label: "Cores", href: "#colors" },
  { label: "Tipografia", href: "#typography" },
  { label: "Componentes", href: "#components" },
  { label: "Iconografia", href: "#icons" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <img 
            src={bearIcon} 
            alt="Casa do Urso" 
            className="h-10 w-10 transition-transform group-hover:scale-110"
          />
          <span className="font-display font-bold text-lg text-foreground">
            Casa do Urso
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="navy" size="sm">
          Download Assets
        </Button>
      </div>
    </header>
  );
}
