import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { whyYousha } from "@/data/content";
import { photos } from "@/data/images";

export function WhyYousha({ condensed = false }: { condensed?: boolean }) {
  const photo = photos["heritage-founding-bw"];
  return (
    <section className="bg-stone">
      <Container className="py-20 sm:py-24">
        <div className={condensed ? "" : "grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16"}>
          <div>
            <SectionHeading
              eyebrow="Why Yousha"
              title="Seven decades of hands. One modern workshop."
              description={
                condensed
                  ? undefined
                  : "Nine reasons customers, fleets and clinics keep coming back to the same family."
              }
            />
            <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {whyYousha.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={(i % 3) * 0.07}>
                    <div className="flex gap-5">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-ink text-copper">
                        <item.icon className="size-6 stroke-[1.5]" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-[1.25rem] leading-snug">{item.title}</h3>
                        {!condensed && <p className="mt-2 text-[0.97rem] text-muted">{item.body}</p>}
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
          {!condensed && (
            <Reveal delay={0.15} className="hidden lg:block">
              <figure className="panel-stitch overflow-hidden rounded-sm bg-ink p-3 [--stitch-color:rgb(177_90_43/0.35)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="35vw"
                  className="relative z-10 h-auto w-full rounded-[2px]"
                />
              </figure>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
