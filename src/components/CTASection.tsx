import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal, StitchDraw } from "@/components/Reveal";
import { finalCta } from "@/data/content";
import { site, whatsappLink } from "@/data/site";

export function CTASection({
  title = finalCta.heading,
  body = finalCta.body,
  emphasis = finalCta.emphasis,
  waMessage = "Hi Yousha, I'd like to discuss my vehicle's interior.",
  tone = "hide",
}: {
  title?: string;
  body?: string;
  emphasis?: string;
  waMessage?: string;
  tone?: "hide" | "racing";
}) {
  return (
    <section className={tone === "racing" ? "quilt-green" : "quilt"}>
      <Container className="py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <StitchDraw className="mx-auto mb-10 w-24" />
            <h2 className="text-[clamp(2rem,4.6vw,3.5rem)] text-paper">{title}</h2>
            <p className="mt-6 text-lg text-[#d8ccb9]">{body}</p>
            {emphasis && <p className="mt-4 font-display text-2xl italic text-copper-light">{emphasis}</p>}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href={site.phoneHref} variant="primary" size="lg" event="call_click" eventLabel="cta-band">
                <Phone className="size-5" aria-hidden="true" />
                Call {site.phone}
              </Button>
              <Button href={whatsappLink(waMessage)} variant="whatsapp" size="lg" event="whatsapp_click" eventLabel="cta-band">
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp us
              </Button>
              <Button href={`mailto:${site.email}`} variant="outline" size="lg" event="email_click" eventLabel="cta-band">
                <Mail className="size-5" aria-hidden="true" />
                Email us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
