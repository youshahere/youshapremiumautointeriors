import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { whoWeServe } from "@/data/content";

export function WhoWeServe() {
  return (
    <section className="bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Who we serve"
          title="One family workshop, many kinds of customer."
          description="From a single car to a whole fleet, from a collector's classic to a rehabilitation clinic."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-hide/15 bg-hide/15 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeServe.map((a, i) => (
            <li key={a.label} className="bg-paper">
              <Reveal delay={(i % 4) * 0.05} y={12} className="flex h-full items-center gap-4 p-6">
                <a.icon className="size-7 shrink-0 stroke-[1.4] text-saddle" aria-hidden="true" />
                <span className="font-medium leading-snug">{a.label}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
