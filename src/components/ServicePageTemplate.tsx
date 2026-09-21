import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import type { Service } from "@/data/services";
import { faqsFor } from "@/data/content";
import { whatsappLink } from "@/data/site";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FaqJsonLd } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { ProcessSteps } from "@/components/ProcessSteps";

export function ServicePageTemplate({ service }: { service: Service }) {
  const faqs = faqsFor(service.faqQuestions);
  return (
    <>
      <Hero
        image={service.image}
        eyebrow={service.eyebrow}
        title={service.headline}
        sub={service.intro[0]}
        actions={
          <>
            <Button href="/contact#quote" variant="primary" size="lg">
              Get a quote
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
            <Button href={whatsappLink(service.waMessage)} variant="whatsapp" size="lg" event="whatsapp_click" eventLabel={service.slug}>
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp us
            </Button>
          </>
        }
      >
        {service.badge && (
          <p className="mt-8 inline-block rounded-full border border-thread/60 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-thread-soft">
            {service.badge}
          </p>
        )}
      </Hero>

      <section className="bg-stone">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading title={service.itemsHeading} />
              {service.intro.slice(1).map((p) => (
                <p key={p} className="mt-6 text-[1.05rem] text-muted">
                  {p}
                </p>
              ))}
              {service.closing && (
                <p className="mt-8 border-l-2 border-thread pl-5 font-display text-2xl italic text-saddle-deep">{service.closing}</p>
              )}
            </div>
            <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {service.items.map((item, i) => (
                <li key={item}>
                  <Reveal delay={(i % 2) * 0.05} y={10}>
                    <div className="flex items-start gap-3 border-b border-hide/12 py-4">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-hide text-thread">
                        <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[1.02rem] font-medium">{item}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {service.disclaimer && (
            <p className="mt-14 max-w-4xl rounded-sm border border-hide/20 bg-paper p-5 text-sm text-muted">
              <strong className="font-semibold text-ink">Please note: </strong>
              {service.disclaimer}
            </p>
          )}

          <p className="mt-12 text-[0.97rem] text-muted">
            See our work in the{" "}
            <Link href="/gallery" className="font-semibold text-saddle underline underline-offset-4">
              gallery
            </Link>{" "}
            or browse{" "}
            <Link href="/services" className="font-semibold text-saddle underline underline-offset-4">
              all services
            </Link>
            .
          </p>
        </Container>
      </section>

      <ProcessSteps />

      {faqs.length > 0 && (
        <section className="bg-paper">
          <Container className="py-20 sm:py-24">
            <SectionHeading eyebrow="Good to know" title="Questions we hear most" />
            <div className="mt-10 max-w-4xl">
              <FAQAccordion items={faqs} />
            </div>
            <FaqJsonLd faqs={faqs} />
          </Container>
        </section>
      )}

      <CTASection waMessage={service.waMessage} />
    </>
  );
}
