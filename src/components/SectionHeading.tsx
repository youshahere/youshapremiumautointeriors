import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-5 flex items-center gap-4 text-[0.78rem] font-semibold uppercase tracking-[0.2em]",
            align === "center" && "justify-center",
            dark ? "text-copper" : "text-copper-deep",
          )}
        >
          <span aria-hidden="true" className="stitch w-10" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "text-[clamp(2rem,4.6vw,3.6rem)]",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-6 text-lg", dark ? "text-[#cfc3b2]" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}
