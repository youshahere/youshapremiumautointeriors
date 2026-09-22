import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { HeritageTimeline } from "@/components/HeritageTimeline";
import { WhyYousha } from "@/components/WhyYousha";
import { WhoWeServe } from "@/components/WhoWeServe";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { PhotoFigure } from "@/components/PhotoFigure";
import { Watermark } from "@/components/Watermark";
import { familyMessage, heritage, vision } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us | A Legacy of Craftsmanship Since the 1950s",
  description:
    "Three generations of automotive upholstery in Mumbai: Noor Bhai “Seatwale”, Sajid Akhter and the Yousha era. Heritage craftsmanship with a modern, accessibility-focused approach.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        image="vintage-sedan"
        eyebrow="About Yousha"
        title="A Legacy of Craftsmanship Since the 1950s."
        sub={heritage.intro}
      />

      <section className="bg-stone">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow="Our heritage" title={heritage.heading} />
          <div className="mt-16">
            <HeritageTimeline />
          </div>
          <Reveal className="mx-auto mt-16 max-w-3xl">
            <PhotoFigure
              image="upholsterer-1953"
              caption="An upholsterer at a sewing machine, 1953 (Archives New Zealand). A period photograph of the trade, not of Yousha's own workshop."
              sizes="(min-width:768px) 48rem, 100vw"
            />
          </Reveal>
          <p className="mx-auto mt-16 max-w-3xl text-center font-display text-3xl italic text-copper-deep">
            {heritage.closing}
          </p>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16">
          <div className="panel-stitch mx-auto max-w-4xl rounded-sm bg-ink p-10 text-center text-paper sm:p-14 [--stitch-color:rgb(177_90_43/0.4)]">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-copper">Brand purpose</p>
            <p className="mt-5 font-display text-2xl leading-snug sm:text-3xl">{heritage.purpose}</p>
          </div>
        </Container>
      </section>

      <section className="bg-stone">
        <Container className="grid gap-14 py-20 sm:py-24 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Where we are heading" title={vision.heading} />
            <ul className="mt-10 space-y-5">
              {vision.pillars.map((p) => (
                <li key={p} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 size-2.5 shrink-0 rotate-45 bg-copper-deep" />
                  <span className="text-[1.05rem]">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 border-l-2 border-copper pl-5 font-display text-2xl italic text-copper-deep">{vision.closing}</p>
          </div>

          <Reveal>
            <figure className="panel-stitch relative overflow-hidden rounded-sm bg-ink p-10 text-paper sm:p-12 [--stitch-color:rgb(177_90_43/0.4)]">
              <Watermark tone="copper" position="corner-br" className="size-56" />
              <Quote className="relative size-10 text-copper" aria-hidden="true" />
              <p className="mt-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-copper">{familyMessage.heading}</p>
              <blockquote className="mt-5 font-display text-2xl italic leading-snug sm:text-[1.75rem]">
                {familyMessage.quote}
              </blockquote>
              <figcaption className="mt-8">
                <span className="block font-semibold">{familyMessage.attribution}</span>
                <span className="text-[#c2b6a4]">{familyMessage.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <WhyYousha />
      <WhoWeServe />
      <CTASection />
    </>
  );
}
