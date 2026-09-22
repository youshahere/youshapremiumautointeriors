import Image from "next/image";
import type { ReactNode } from "react";
import { photos, type ImageKey } from "@/data/images";
import { Container } from "@/components/Container";
import { StampSeal } from "@/components/StampSeal";
import { Watermark } from "@/components/Watermark";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  actions?: ReactNode;
  trust?: string;
  size?: "home" | "page";
  image?: ImageKey;
  children?: ReactNode;
};

/** Reusable page-top banner: ink ground, copper watermark, headline set large. */
export function Hero({ eyebrow, title, sub, actions, trust, size = "page", image, children }: Props) {
  const home = size === "home";
  const photo = image ? photos[image] : null;
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ink text-paper",
        home ? "py-20 sm:py-28 lg:py-36" : "py-16 sm:py-20 lg:py-24",
      )}
    >
      <Watermark tone="copper" position="corner-tl" className="size-96" />
      {photo && (
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-full opacity-55 [mask-image:linear-gradient(to_right,transparent,black_55%)] lg:w-[68%] lg:opacity-100"
        >
          <Image src={photo.src} alt="" fill priority sizes="(min-width:1024px) 68vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/35" />
        </div>
      )}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <Container className="relative">
        <div className={cn("grid items-center gap-12", home && "lg:grid-cols-[1fr_auto]")}>
          <div className={cn(home ? "max-w-4xl" : "max-w-3xl")}>
            {eyebrow && (
              <Reveal>
                <p className="mb-6 flex items-center gap-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-copper">
                  <span aria-hidden="true" className="stitch w-12" />
                  {eyebrow}
                </p>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h1
                className={cn(
                  "text-paper",
                  home ? "text-[clamp(2.6rem,7.2vw,6rem)] leading-[1.02]" : "text-[clamp(2.2rem,5.5vw,4.25rem)]",
                )}
              >
                {title}
              </h1>
            </Reveal>
            {sub && (
              <Reveal delay={0.15}>
                <p className={cn("mt-7 max-w-2xl text-[#d8ccb9]", home ? "text-xl" : "text-lg")}>{sub}</p>
              </Reveal>
            )}
            {actions && (
              <Reveal delay={0.25}>
                <div className="mt-10 flex flex-wrap gap-4">{actions}</div>
              </Reveal>
            )}
            {trust && (
              <Reveal delay={0.35}>
                <p className="mt-10 flex items-center gap-4 text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-copper-light">
                  <span aria-hidden="true" className="stitch w-16" />
                  {trust}
                </p>
              </Reveal>
            )}
            {children}
          </div>
          {home && (
            <Reveal delay={0.3} className="hidden lg:block">
              <StampSeal />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
