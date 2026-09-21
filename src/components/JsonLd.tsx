import { site } from "@/data/site";
import type { FAQ } from "@/data/content";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": ["AutoRepair", "LocalBusiness"],
        "@id": `${site.url}/#business`,
        name: site.name,
        url: site.url,
        description:
          "Three-generation family workshop in Worli, Mumbai for premium car upholstery, luxury and vintage interior restoration, roof-liner repair and accessible swivel seating.",
        telephone: site.phone,
        email: site.email,
        foundingDate: "1950",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.line2}`,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        areaServed: { "@type": "City", name: "Mumbai" },
        priceRange: "₹₹",
        sameAs: [],
      }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: FAQ[] }) {
  if (!faqs.length) return null;
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}
