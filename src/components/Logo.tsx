import { cn } from "@/lib/utils";

/** Placeholder wordmark. Swap for the client's logo once supplied. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("size-10", className)} aria-hidden="true">
      <path d="M24 3 45 24 24 45 3 24Z" fill="none" stroke="#c9a25b" strokeWidth="1.6" strokeDasharray="4 3" />
      <path d="M24 9 39 24 24 39 9 24Z" fill="#c9a25b" />
      <path
        d="M17 16.5 24 26l7-9.5M24 26v8"
        fill="none"
        stroke="#1a1411"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className, dark = true }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.65rem] font-semibold tracking-[0.14em]", dark ? "text-paper" : "text-hide")}>
          YOUSHA
        </span>
        <span className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-thread">
          Premium Auto Interiors
        </span>
      </span>
    </span>
  );
}
