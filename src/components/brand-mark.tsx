import { Sparkles } from "lucide-react";
export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <div className="flex items-center gap-3" aria-label="Sithara Grand Family Restaurant"><span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/60 bg-brand-deep shadow-gold"><Sparkles className="size-5 text-primary" aria-hidden="true" /></span>{!compact && <span className="leading-none"><strong className="block font-display text-lg text-foreground">SITHARA GRAND</strong><small className="mt-1 block text-[0.55rem] uppercase tracking-[0.22em] text-primary">Family Restaurant</small></span>}</div>;
}
