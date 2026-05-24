import { TokenScaleItem } from "@/design-tokens/tokens";

type TokenScaleTableProps = {
  title: string;
  items: TokenScaleItem[];
};

export function TokenScaleTable({ title, items }: TokenScaleTableProps) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-muted/60">
        <h3 className="font-display font-semibold text-navy">{title}</h3>
      </div>
      <div className="divide-y divide-border">
        {items.map((item) => (
          <div key={item.name} className="px-4 py-3 grid grid-cols-12 gap-3 items-center">
            <div className="col-span-4 font-medium text-foreground">{item.name}</div>
            <div className="col-span-3 font-mono text-sm text-navy">{item.value}</div>
            <div className="col-span-5 text-sm text-muted-foreground">{item.description ?? "—"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
