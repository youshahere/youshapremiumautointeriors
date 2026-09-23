import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQ | Car Upholstery, Restoration & Accessible Seating",
  description:
    "Answers about custom seat design, luxury and vintage interiors, partial seat repair, accessibility modifications, fleet work, doorstep service and medical upholstery.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Hero
        image="daytime-dash"
        eyebrow="FAQ"
        title="Questions, answered plainly."
        sub="Can't find yours? Message us on WhatsApp and we will reply."
      />
      <section className="bg-stone">
        <Container className="py-16 sm:py-24">
          <div className="max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
          <FaqJsonLd faqs={faqs} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
