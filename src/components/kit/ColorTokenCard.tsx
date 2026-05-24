import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ColorTokenCardProps = {
  name: string;
  hex: string;
  cssVar: string;
  usage: string;
  bgClass?: string;
  textColorClass?: string;
};

export function ColorTokenCard({ name, hex, cssVar, usage, bgClass, textColorClass }: ColorTokenCardProps) {
  const [copied, setCopied] = useState(false);
  const textClass = textColorClass ?? "text-white";
  const swatchClass = bgClass ?? "bg-muted";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      <div className={cn("h-28 p-4 flex items-end", swatchClass)}>
        <p className={cn("font-display font-bold text-lg", textClass)}>{name}</p>
      </div>
      <div className="p-4 space-y-3">
        <button
          type="button"
          onClick={handleCopy}
          className="w-full inline-flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-sm hover:bg-muted/70 transition-colors"
        >
          <span className="font-mono">{hex}</span>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
        <p className="text-xs text-muted-foreground">Token: <code>{cssVar}</code></p>
        <p className="text-sm text-muted-foreground">{usage}</p>
      </div>
    </div>
  );
}
