import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { nav, site, whatsappLink } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Watermark } from "@/components/Watermark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-[#cfc3b2]">
      <Watermark tone="copper" position="corner-br" />
      <div aria-hidden="true" className="stitch relative mx-auto max-w-7xl" />
      <Container className="relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs font-display text-xl leading-snug text-paper">
            Three generations of craftsmanship, reimagined for modern mobility.
          </p>
          <p className="mt-5 text-sm text-copper">{site.footerHeritage}</p>
          <p className="mt-2 text-xs text-[#a99d8c]">GSTIN: {site.gstin}</p>
        </div>

        <div>
          <h2 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-copper">Services</h2>
          <ul className="mt-5 space-y-2.5 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-copper-light">
                  {s.navLabel}
                </Link>
              </li>
            ))}
            {nav.footerSpecialist.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-copper-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-copper">Company</h2>
          <ul className="mt-5 space-y-2.5 text-[0.95rem]">
            {nav.footerCompany.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-copper-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-copper">Visit or call</h2>
          <address className="mt-5 space-y-4 text-[0.95rem] not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-copper" aria-hidden="true" />
              <span>{site.addressOneLine}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-copper" aria-hidden="true" />
              <a href={site.phoneHref} className="hover:text-copper-light">
                {site.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <MessageCircle className="mt-1 size-4 shrink-0 text-copper" aria-hidden="true" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-copper-light">
                Message on WhatsApp
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-copper" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-copper-light">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-[0.82rem] text-[#a99d8c] md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
