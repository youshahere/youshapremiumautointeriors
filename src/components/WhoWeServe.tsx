import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { whoWeServe } from "@/data/content";
import { photos } from "@/data/images";

export function WhoWeServe() {
  const photo = photos["classic-convertible"];
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Image src={photo.src} alt="" fill sizes="100vw" className="object-cover opacity-25" aria-hidden="true" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      <Container className="relative py-20 sm:py-24">
        <SectionHeading
          tone="dark"
          eyebrow="Who we serve"
          title="One family workshop, many kinds of customer."
          description="From a single car to a whole fleet, from a collector's classic to a rehabilitation clinic."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeServe.map((a, i) => (
            <li key={a.label} className="bg-ink-2">
              <Reveal delay={(i % 4) * 0.05} y={12} className="flex h-full items-center gap-4 p-6">
                <a.icon className="size-7 shrink-0 stroke-[1.4] text-copper-light" aria-hidden="true" />
                <span className="font-medium leading-snug">{a.label}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
