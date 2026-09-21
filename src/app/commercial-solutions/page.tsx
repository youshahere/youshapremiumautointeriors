import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { VehicleBadges } from "@/components/VehicleBadges";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { commercial, faqsFor } from "@/data/content";

export const metadata: Metadata = {
  title: "Fleet & Commercial Vehicle Interiors | Travel, Hotel & Chauffeur Fleets Mumbai",
  description:
    "Premium seating, custom upholstery and fleet restoration for travel companies, hotels, chauffeur services, tour operators and corporate transport in Mumbai.",
  alternates: { canonical: "/commercial-solutions" },
};

export default function CommercialPage() {
  const faqs = faqsFor(commercial.faqQuestions);
  return (
    <>
      <Hero
        eyebrow={commercial.eyebrow}
        title={commercial.headline}
        sub={commercial.intro[0]}
        actions={
          <Button href="#commercial-enquiry" variant="primary" size="lg">
            {commercial.ctaLabel}
          </Button>
        }
      />

      <section className="bg-stone">
        <Container className="grid gap-14 py-20 sm:py-24 lg:grid-cols-2">
          <div>
            <SectionHeading title={commercial.vehiclesHeading} description={commercial.intro[1]} />
            <div className="mt-8">
              <VehicleBadges items={commercial.vehicles} />
            </div>
          </div>
          <div>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)]">{commercial.servicesHeading}</h2>
            <ul className="mt-8 divide-y divide-hide/12 border-y border-hide/12">
              {commercial.services.map((s) => (
                <li key={s} className="flex items-center gap-4 py-4 text-[1.1rem] font-medium">
                  <Check className="size-5 text-thread-deep" strokeWidth={3} aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-thread pl-5 font-display text-2xl italic text-saddle-deep">{commercial.ctaText}</p>
          </div>
        </Container>
      </section>

      <ProcessSteps />

      <section id="commercial-enquiry" className="scroll-mt-24 bg-stone">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Commercial enquiry"
            title={commercial.ctaLabel}
            description="Tell us about your fleet: how many vehicles, what type and what needs doing. We will come back with a scope and a plan."
          />
          <EnquiryForm variant="commercial" />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20">
          <SectionHeading eyebrow="Good to know" title="Fleet work, answered" />
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
          <FaqJsonLd faqs={faqs} />
        </Container>
      </section>

      <CTASection
        title="A better ride begins with a better seat."
        body="Single vehicle or full fleet, we would like to hear about it."
        emphasis=""
        waMessage="Hi Yousha, I'd like to discuss a commercial interior project."
      />
    </>
  );
}
