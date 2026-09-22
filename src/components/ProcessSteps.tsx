import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { process } from "@/data/content";

/** A real sequence, so numbering is meaningful here. */
export function ProcessSteps({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-ink-2 text-paper" : "bg-paper"}>
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow={process.eyebrow} title={process.heading} tone={dark ? "dark" : "light"} />
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-6 lg:gap-6">
          <span
            aria-hidden="true"
            className={`stitch absolute left-0 right-0 top-[1.35rem] hidden lg:block ${dark ? "text-copper/60" : "text-copper-deep/50"}`}
          />
          {process.steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 lg:block">
              <Reveal delay={i * 0.07} className="flex gap-5 lg:block">
                <span
                  className={`relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-copper font-display text-lg font-semibold ${
                    dark ? "bg-ink-2 text-copper" : "bg-paper text-copper-deep"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="lg:mt-6">
                  <h3 className="text-xl">{step.title}</h3>
                  <p className={`mt-2 text-[0.95rem] ${dark ? "text-[#c2b6a4]" : "text-muted"}`}>{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
