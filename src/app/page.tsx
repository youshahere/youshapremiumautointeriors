import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhyYousha } from "@/components/WhyYousha";
import { WhoWeServe } from "@/components/WhoWeServe";
import { VehicleBadges } from "@/components/VehicleBadges";
import { GalleryPreview } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { Reveal, StitchDraw } from "@/components/Reveal";
import { accessibility, heritage, hero, vehicles, whatWeDo } from "@/data/content";
import { whatsappLink } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero
        size="home"
        image="vintage-tan-sunlit"
        title={hero.headline}
        sub={hero.sub}
        trust={hero.trust}
        actions={
          <>
            <Button href="/services" variant="primary" size="lg">
              Explore Our Services
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
            <Button href="/contact#quote" variant="outline" size="lg">
              Get a Custom Quote
            </Button>
          </>
        }
      />

      <section className="bg-hide-2 text-paper">
        <Container className="grid gap-8 py-14 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12">
          <p className="font-display text-6xl italic text-thread md:text-7xl">3</p>
          <div>
            <p className="font-display text-2xl leading-snug sm:text-3xl">
              From Noor Bhai “Seatwale” in the 1950s, to Sajid Akhter in the 1980s, to Yousha today.
            </p>
            <p className="mt-3 text-[#c2b6a4]">{heritage.closing}</p>
          </div>
          <Button href="/about" variant="outline">
            Read our story
          </Button>
        </Container>
      </section>

      <section className="bg-stone">
        <Container className="py-20 sm:py-28">
          <SectionHeading eyebrow={whatWeDo.eyebrow} title={whatWeDo.heading} description={whatWeDo.body} />
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      <section className="quilt-green text-paper">
        <Container className="grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={accessibility.eyebrow}
              title={accessibility.headline}
              description="Swivel seats, transfer-friendly seating and custom mobility projects, each evaluated for the person and the vehicle. Very few workshops offer this. It is one of the reasons we exist."
            />
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/accessible-seating" variant="primary" size="lg">
                Explore accessible seating
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              <Button
                href={whatsappLink("Hi Yousha, I'd like to ask about accessible seating for a family member.")}
                variant="outline"
                size="lg"
                event="whatsapp_click"
                eventLabel="home-accessibility"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Ask us about it
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="border-l-2 border-thread pl-6 font-display text-2xl italic leading-snug text-thread-soft sm:text-3xl">
              {accessibility.tagline}
            </p>
            <p className="mt-6 pl-6 text-[#cfd9d3]">{accessibility.philosophy}</p>
          </Reveal>
        </Container>
      </section>

      <WhyYousha condensed />

      <ProcessSteps />

      <section className="bg-stone">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Our work" title="Crafted with Attention to Every Detail" />
            <Button href="/gallery" variant="outlineDark">
              View Our Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-12">
            <GalleryPreview />
          </div>
          <p className="mt-6 text-sm text-muted">Sample imagery until project photography is added.</p>
        </Container>
      </section>

      <WhoWeServe />

      <section className="bg-stone">
        <Container className="py-20">
          <SectionHeading eyebrow="Vehicles we work with" title="From everyday hatchbacks to heritage classics." />
          <StitchDraw className="my-10 w-full max-w-md" tone="text-thread-deep/60" />
          <VehicleBadges items={vehicles} />
          <p className="mt-8 text-[0.97rem] text-muted">
            Not sure yours is on the list? <Link href="/contact" className="font-semibold text-saddle underline underline-offset-4">Ask us</Link>. If it has a seat, we can look at it.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
