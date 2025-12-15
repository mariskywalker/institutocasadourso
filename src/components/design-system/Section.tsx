import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
