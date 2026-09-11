import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { primary: "bg-primary text-primary-foreground shadow-gold hover:-translate-y-0.5 hover:bg-primary/90", outline: "border border-primary/50 bg-background/20 text-foreground backdrop-blur-md hover:border-primary hover:bg-primary/10", ghost: "text-foreground hover:bg-foreground/10" }, size: { default: "h-12", sm: "h-10 px-4 text-[0.68rem]", icon: "size-11 p-0" } }, defaultVariants: { variant: "primary", size: "default" } });

export function Button({ className, variant, size, asChild, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
