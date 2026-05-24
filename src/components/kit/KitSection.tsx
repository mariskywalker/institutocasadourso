import { ReactNode } from "react";

type KitSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function KitSection({ title, description, children }: KitSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-navy">{title}</h2>
        {description ? <p className="text-muted-foreground max-w-3xl">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
