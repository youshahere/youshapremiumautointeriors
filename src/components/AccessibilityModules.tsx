import { ArrowLeftRight, Armchair, Move, RotateCw, ShieldAlert, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Watermark } from "@/components/Watermark";
import { Reveal } from "@/components/Reveal";
import { accessibility } from "@/data/content";

const icons: LucideIcon[] = [RotateCw, ArrowLeftRight, Move, Armchair, Wrench];

export function AccessibilityModules() {
  return (
    <>
      <section className="bg-stone">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            eyebrow="Five kinds of solution"
            title="Built around the person, then the vehicle."
            description="Start with what the passenger needs. We work out what the car can carry."
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {accessibility.modules.map((m, i) => {
              const Icon = icons[i];
              return (
                <li key={m.title} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                  <Reveal delay={(i % 3) * 0.07} className="h-full">
                    <div className="panel-stitch h-full rounded-2xl bg-ink p-8 text-paper [--stitch-color:rgb(217_138_87/0.4)]">
                      <span className="flex size-14 items-center justify-center rounded-full border border-copper-light/60 text-copper-light">
                        <Icon className="size-7 stroke-[1.4]" aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 text-[1.55rem]">{m.title}</h3>
                      <p className="mt-3 text-[#cfd9d3]">{m.body}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Watermark tone="copper" position="center" className="size-[26rem]" />
        <Container className="relative py-20 text-center sm:py-24">
          <Reveal>
            <blockquote className="mx-auto max-w-4xl">
              <p className="font-display text-[clamp(1.6rem,3.6vw,2.75rem)] italic leading-tight text-paper">
                “{accessibility.philosophy}”
              </p>
              <footer className="mt-8 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-copper-light">
                Our accessibility philosophy
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

/** Visible, not buried: a safety and feasibility notice. */
export function AccessibilityDisclaimer() {
  return (
    <aside
      aria-labelledby="a11y-disclaimer"
      className="flex gap-5 rounded-2xl border-2 border-copper-deep bg-paper p-6 sm:p-8"
    >
      <ShieldAlert className="mt-1 size-8 shrink-0 text-copper-deep" aria-hidden="true" />
      <div>
        <h2 id="a11y-disclaimer" className="text-2xl">
          {accessibility.disclaimerTitle}
        </h2>
        <p className="mt-3 text-[1.02rem] text-muted">{accessibility.disclaimer}</p>
      </div>
    </aside>
  );
}
