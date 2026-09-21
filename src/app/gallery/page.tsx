import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery & Before/After | Car Interior Restoration Mumbai",
  description:
    "See our work: premium interiors, luxury cars, seat restoration, custom upholstery, vintage cars, roof-liner work, accessible seating and before-and-after transformations.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        image="vintage-tufted"
        eyebrow="Gallery"
        title="Crafted with Attention to Every Detail."
        sub="Filter by category, or open Before & After and drag the slider to see the transformation."
      />
      <section className="bg-stone">
        <Container className="py-16 sm:py-20">
          <GalleryGrid />
        </Container>
      </section>
      <CTASection
        title="See the Transformation."
        body="Send us a photo of your seat or interior. We will tell you what can be done."
        emphasis=""
        waMessage="Hi Yousha, I'd like to send photos of my car interior."
      />
    </>
  );
}
