import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { VehicleBadges } from "@/components/VehicleBadges";
import { CTASection } from "@/components/CTASection";
import { customProjects, vehicles, whatWeDo } from "@/data/content";
import { Button } from "@/components/Button";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Car Upholstery, Restoration & Interior Services in Mumbai",
  description:
    "Premium car upholstery, custom interiors, luxury and vintage restoration, seat repair, roof-liner repair, accessible seating and commercial interiors in Worli, Mumbai.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Hero image="classic-dash" eyebrow="Services" title={whatWeDo.heading} sub={whatWeDo.body} />

      <section className="bg-stone">
        <Container className="py-20 sm:py-24">
          <ServiceGrid />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20">
          <SectionHeading eyebrow="Vehicles we work with" title="Whatever you drive, we can look at the seat." />
          <div className="mt-10">
            <VehicleBadges items={vehicles} />
          </div>
        </Container>
      </section>

      <section className="bg-stone">
        <Container className="py-20">
          <div className="panel-stitch rounded-sm bg-paper p-10 sm:p-14 [--stitch-color:rgb(125_90_28/0.35)]">
            <h2 className="text-[clamp(1.8rem,3.6vw,2.75rem)]">{customProjects.heading}</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">{customProjects.body}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={whatsappLink("Hi Yousha, I have a custom upholstery project.")} variant="whatsapp" event="whatsapp_click" eventLabel="services-custom">
                Describe it on WhatsApp
              </Button>
              <Link href="/contact" className="inline-flex min-h-12 items-center px-2 font-semibold text-muted underline underline-offset-4">
                Or send us the details
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
