import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { customProjects, faqsFor, medical } from "@/data/content";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Medical & Special-Purpose Upholstery Mumbai | Examination Tables, Therapy Couches",
  description:
    "Custom upholstery for examination tables, medical couches, patient seating, therapy tables and rehabilitation equipment in Mumbai, made to your dimensions and material requirements.",
  alternates: { canonical: "/medical-upholstery" },
};

export default function MedicalPage() {
  const faqs = faqsFor(medical.faqQuestions);
  return (
    <>
      <Hero
        eyebrow={medical.eyebrow}
        title={medical.headline}
        sub={medical.intro[0]}
        actions={
          <Button href="#medical-brief" variant="primary" size="lg">
            Send a project brief
          </Button>
        }
      />

      <section className="bg-stone">
        <Container className="grid gap-14 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading title={medical.itemsHeading} description={medical.intro[1]} />
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {medical.items.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-ink/12 py-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-copper">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[1.02rem] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="medical-brief" className="scroll-mt-24 bg-paper">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Project brief"
            title="Tell us what it has to do."
            description="Share the application, dimensions, material and quantity. A photo or sketch on WhatsApp helps a lot."
          />
          <EnquiryForm variant="medical" />
        </Container>
      </section>

      <section className="bg-stone">
        <Container className="py-20">
          <div className="panel-stitch rounded-sm bg-paper p-10 sm:p-14 [--stitch-color:rgb(125_90_28/0.35)]">
            <h2 className="text-[clamp(1.8rem,3.6vw,2.75rem)]">{customProjects.heading}</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">{customProjects.body}</p>
            <div className="mt-8">
              <Button href={whatsappLink("Hi Yousha, I have a custom upholstery project.")} variant="whatsapp" event="whatsapp_click" eventLabel="medical-custom">
                Describe it on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20">
          <SectionHeading eyebrow="Good to know" title="Upholstery beyond automobiles, answered" />
          <div className="mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>
          <FaqJsonLd faqs={faqs} />
        </Container>
      </section>

      <CTASection
        title="Comfort matters wherever people sit or lie."
        body="Send us the dimensions and the application. We will tell you what we can build."
        emphasis=""
        waMessage="Hi Yousha, I need medical or special-purpose upholstery."
      />
    </>
  );
}
