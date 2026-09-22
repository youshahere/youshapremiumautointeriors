import Image from "next/image";
import { Armchair } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Icon-only mark: a copper ring around a seat glyph, used only where the
 * full lockup won't fit (e.g. a future compact nav state).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex size-10 items-center justify-center rounded-full border-[1.6px] border-dashed border-copper",
        className,
      )}
      aria-hidden="true"
    >
      <Armchair className="size-[55%] text-copper" strokeWidth={1.75} />
    </span>
  );
}

/**
 * Full lockup, always the real client-supplied logo — never a redrawn
 * approximation. `yousha-logo.png` (background removed) renders on light
 * surfaces; `yousha-logo-dark.png` (same art, ink lines swapped for paper so
 * they don't disappear against a dark ground) renders on dark surfaces.
 * Both are generated once from the source JPG — see
 * docs/superpowers/specs/2026-09-22-premium-rebrand-design.md.
 */
export function Logo({ className, dark = true }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={dark ? "/images/brand/yousha-logo-dark.png" : "/images/brand/yousha-logo.png"}
        alt="Yousha Premium Auto Interiors — Custom Upholstery and Accessible Seating"
        width={480}
        height={175}
        className="h-auto w-full max-w-[220px]"
        priority
      />
    </span>
  );
}
