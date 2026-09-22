import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { photos } from "@/data/images";

export const metadata: Metadata = {
  title: "Image Credits",
  description: "Attribution for sample photographs used on the Yousha Premium Auto Interiors website.",
  alternates: { canonical: "/credits" },
  robots: { index: false, follow: true },
};

export default function CreditsPage() {
  return (
    <>
      <Hero
        eyebrow="Image credits"
        title="Photographs and where they come from."
        sub="These are sample photographs from Wikimedia Commons, shown until Yousha's own project photography is added. They are not Yousha work."
      />
      <section className="bg-stone">
        <Container className="py-16 sm:py-20">
          <ul className="max-w-4xl divide-y divide-ink/15 border-y border-ink/15">
            {Object.values(photos).map((p) => (
              <li key={p.src} className="py-5">
                <p className="font-display text-xl">{p.credit.title}</p>
                <p className="mt-1 text-muted">
                  {p.credit.author}. Licence: {p.credit.license}.{" "}
                  <a href={p.credit.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-muted underline underline-offset-4">
                    Source
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
