import Image from "next/image";
import { Armchair } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Icon-only mark: a copper ring (the logo's swirl, simplified) around a seat
 * glyph. Used for the favicon, compact nav states, and the Watermark
 * component — anywhere the full wordmark doesn't fit.
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
 * Full lockup. On light backgrounds this renders the client-supplied raster
 * logo directly. On dark backgrounds (where the raster's white background
 * would show as a box) it renders a redrawn SVG-safe recreation in the same
 * ink/copper palette — a close match, not a vector trace of the source file.
 * Swap in a transparent PNG/vector of the real logo here once supplied and
 * both branches can use the same asset.
 */
export function Logo({ className, dark = true }: { className?: string; dark?: boolean }) {
  if (!dark) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src="/images/brand/yousha-logo.jpg"
          alt="Yousha Premium Auto Interiors — Custom Upholstery and Accessible Seating"
          width={480}
          height={175}
          className="h-auto w-full max-w-[220px]"
          priority
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.65rem] font-semibold tracking-[0.14em] text-paper">YOUSHA</span>
        <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-copper-light">
          Premium Auto Interiors
        </span>
      </span>
    </span>
  );
}
