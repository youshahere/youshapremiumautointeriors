import { Armchair } from "lucide-react";
import { cn } from "@/lib/utils";

const toneClasses = {
  copper: "text-copper opacity-[0.06]",
  ink: "text-ink opacity-[0.05]",
  paper: "text-paper opacity-[0.07]",
} as const;

const positionClasses = {
  "corner-br": "-bottom-10 -right-10 rotate-[8deg]",
  "corner-tl": "-top-10 -left-10 -rotate-[8deg]",
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
} as const;

/**
 * Faint, oversized seat-mark used as a section background signature in place
 * of the old leather quilt/grain textures. Purely decorative: always
 * `aria-hidden`. The parent section needs `position: relative` (or
 * `overflow-hidden`) for the absolute positioning to land correctly.
 */
export function Watermark({
  tone = "copper",
  position = "corner-br",
  className,
}: {
  tone?: keyof typeof toneClasses;
  position?: keyof typeof positionClasses;
  className?: string;
}) {
  return (
    <Armchair
      aria-hidden="true"
      strokeWidth={0.6}
      className={cn("pointer-events-none absolute size-72 select-none", toneClasses[tone], positionClasses[position], className)}
    />
  );
}
