import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { AccessibilityDisclaimer, AccessibilityModules } from "@/components/AccessibilityModules";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { PhotoFigure } from "@/components/PhotoFigure";
import { accessibility, faqsFor } from "@/data/content";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Accessible Car Seats & Swivel Seats Mumbai | Yousha Premium Auto Interiors" },
  description:
    "Swivel car seats, transfer-friendly seating and custom accessible mobility solutions in Mumbai, evaluated individually for each vehicle, passenger and safety requirement.",
  alternates: { canonical: "/accessible-seating" },
};

export default function AccessibleSeatingPage() {
  const faqs = faqsFor(accessibility.faqQuestions);
  return (
    <>
      <Hero
        tone="racing"
        eyebrow={accessibility.eyebrow}
        title={accessibility.headline}
        sub={accessibility.intro[0]}
        actions={
          <>
            <Button href="#evaluation" variant="primary" size="lg">
              Request an evaluation
            </Button>
            <Button
              href={whatsappLink("Hi Yousha, I'm interested in Accessible Seating.")}
              variant="outline"
              size="lg"
              event="whatsapp_click"
              eventLabel="accessible-hero"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp us
            </Button>
          </>
        }
      >
        <p className="mt-10 font-display text-2xl italic text-thread-soft">{accessibility.tagline}</p>
      </Hero>

      <section className="bg-paper">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="text-[1.15rem] text-muted">{accessibility.intro[1]}</p>
            <PhotoFigure
              className="mt-10"
              image="accessible-taxi"
              caption="A wheelchair-accessible taxi with its lift platform lowered. Sample photograph, not a Yousha project."
              sizes="(min-width:1024px) 45vw, 100vw"
            />
          </div>
          <AccessibilityDisclaimer />
        </Container>
      </section>

      <AccessibilityModules />

      <section id="evaluation" className="scroll-mt-24 bg-stone">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Start here"
              title="Tell us about the passenger and the car."
              description="This is a consultative service. The more you tell us, the better we can say what is possible. We will reply personally."
            />
            <p className="mt-8 text-[0.97rem] text-muted">
              Prefer to talk? Call us or send a message on WhatsApp. We are glad to speak with family members as well as the passenger.
            </p>
          </div>
          <EnquiryForm variant="accessibility" />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="Good to know" title="Questions about accessible seating" />
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
          <FaqJsonLd faqs={faqs} />
        </Container>
      </section>

      <CTASection
        tone="racing"
        title="Comfort should never be a compromise."
        body="Talk to us about the person, the vehicle and what would make every journey easier."
        emphasis={accessibility.tagline}
        waMessage="Hi Yousha, I'm interested in Accessible Seating."
      />
    </>
  );
}
