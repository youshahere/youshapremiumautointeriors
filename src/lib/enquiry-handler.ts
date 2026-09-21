import { NextResponse } from "next/server";
import { enquirySchema, type EnquiryVariant } from "@/lib/validation";
import { sendEnquiryEmail, smtpConfigured } from "@/lib/mailer";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function handleEnquiry(request: Request, allowed: EnquiryVariant[]) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a minute or message us on WhatsApp." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success || !allowed.includes(parsed.data.variant)) {
    return NextResponse.json(
      { ok: false, error: "Some details are missing or invalid. Please check the form." },
      { status: 400 },
    );
  }

  // Bots fill the hidden field; pretend success and drop the message.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const { website: _honeypot, ...enquiry } = parsed.data;
  void _honeypot;
  const payload = { ...enquiry, receivedAt: new Date().toISOString(), to: "info@yousha.in" };

  const webhook = process.env.FORM_WEBHOOK_URL;
  const useSmtp = smtpConfigured();

  try {
    if (useSmtp) await sendEnquiryEmail(enquiry);
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    }
  } catch (err) {
    console.error("[enquiry] delivery failed", err);
    return NextResponse.json(
      { ok: false, error: "We could not send your enquiry. Please call or message us on WhatsApp." },
      { status: 502 },
    );
  }

  if (!useSmtp && !webhook) {
    console.info("[enquiry] no delivery configured (ZOHO_SMTP_* or FORM_WEBHOOK_URL), logging only:", JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true });
}
