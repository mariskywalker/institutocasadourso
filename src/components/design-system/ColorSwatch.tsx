import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  name: string;
  variable: string;
  hex?: string;
  className?: string;
  isLarge?: boolean;
}

export function ColorSwatch({ name, variable, hex, className, isLarge = false }: ColorSwatchProps) {
  return (
    <div className={cn("group", isLarge ? "col-span-2" : "")}>
      <div 
        className={cn(
          "rounded-2xl shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1",
          isLarge ? "h-32" : "h-24",
          className
        )}
        style={{ backgroundColor: `hsl(var(${variable}))` }}
      />
      <div className="mt-3 space-y-1">
        <p className="font-display font-bold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground font-mono">{variable}</p>
        {hex && <p className="text-xs text-muted-foreground/70 font-mono">{hex}</p>}
      </div>
    </div>
  );
}
