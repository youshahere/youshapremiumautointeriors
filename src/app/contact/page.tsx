import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Visit Our Workshop | Worli, Mumbai",
  description:
    "Call, WhatsApp or visit Yousha Premium Auto Interiors near Phoenix Palladium, Worli Naka, Mumbai 400018. Request a custom quote for your vehicle.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Your Interior. Your Comfort. Your Style."
        sub="Call us, message us on WhatsApp, or send the details below and we will get back to you."
        actions={
          <>
            <Button href={site.phoneHref} variant="primary" size="lg" event="call_click" eventLabel="contact-hero">
              <Phone className="size-5" aria-hidden="true" />
              Call Us
            </Button>
            <Button href={whatsappLink("Hi Yousha, I'd like a quote.")} variant="whatsapp" size="lg" event="whatsapp_click" eventLabel="contact-hero">
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp Us
            </Button>
            <Button href="#quote" variant="outline" size="lg">
              Get a Quote
            </Button>
            <Button href="#visit" variant="outline" size="lg">
              Visit Our Workshop
            </Button>
          </>
        }
      />

      <section id="quote" className="scroll-mt-24 bg-stone">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Request a quote" title="Tell us about your vehicle." description="The more we know about the car and the job, the closer our first answer will be." />
            <address className="mt-10 space-y-5 not-italic">
              <p className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-muted" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted">Phone / WhatsApp</span>
                  <a href={site.phoneHref} className="text-lg font-medium hover:text-muted">
                    {site.phone}
                  </a>
                </span>
              </p>
              <p className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-muted" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted">Email</span>
                  <a href={`mailto:${site.email}`} className="text-lg font-medium hover:text-muted">
                    {site.email}
                  </a>
                </span>
              </p>
              <p className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-muted" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted">Workshop</span>
                  <span className="text-lg font-medium">{site.addressOneLine}</span>
                </span>
              </p>
              <p className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-muted" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-muted">Visiting</span>
                  <span className="text-lg font-medium">Please call or WhatsApp before you visit so we can be ready for you.</span>
                </span>
              </p>
            </address>
            <p className="mt-8 text-sm text-muted">
              GSTIN: {site.gstin} · {site.legalConstitution}
            </p>
          </div>
          <EnquiryForm variant="quote" />
        </Container>
      </section>

      <section id="visit" className="scroll-mt-24 bg-paper">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="Visit our workshop" title="Find us in Upper Worli." />
          <div className="panel-stitch mt-10 overflow-hidden rounded-2xl bg-ink p-3">
            <iframe
              title={`Map showing ${site.name} at ${site.addressOneLine}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 block h-[26rem] w-full border-0 grayscale-[35%]"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-sm text-muted">{site.addressOneLine}</p>
        </Container>
      </section>
    </>
  );
}
