import nodemailer from "nodemailer";
import { site } from "@/data/site";

const LABELS: Record<string, string> = {
  name: "Name",
  phone: "Phone / WhatsApp",
  email: "Email",
  vehicle: "Vehicle",
  service: "Service",
  requirement: "Mobility requirement",
  challenge: "Current seating challenge",
  company: "Company",
  fleetSize: "Fleet size",
  vehicleTypes: "Vehicle types",
  application: "Application",
  dimensions: "Dimensions",
  material: "Material",
  quantity: "Quantity",
  message: "Message",
};

const SUBJECTS: Record<string, string> = {
  contact: "Contact enquiry",
  quote: "Quote request",
  accessibility: "Accessibility evaluation",
  commercial: "Commercial enquiry",
  medical: "Medical upholstery brief",
};

export function smtpConfigured() {
  return Boolean(process.env.ZOHO_SMTP_USER && process.env.ZOHO_SMTP_PASSWORD);
}

const oneLine = (s: unknown) => String(s ?? "").replace(/[\r\n]+/g, " ").trim();

function transport() {
  return nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST ?? "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: { user: process.env.ZOHO_SMTP_USER, pass: process.env.ZOHO_SMTP_PASSWORD },
  });
}

/** Sends the enquiry to the workshop inbox, plus a short confirmation to the customer if they gave an email. */
export async function sendEnquiryEmail(enquiry: Record<string, unknown> & { variant: string }) {
  const user = process.env.ZOHO_SMTP_USER as string;
  const inbox = process.env.ENQUIRY_TO ?? user;
  const mailer = transport();

  const customerEmail = oneLine(enquiry.email);
  const digits = oneLine(enquiry.phone).replace(/\D/g, "");
  const lines = Object.entries(LABELS)
    .filter(([key]) => oneLine(enquiry[key]))
    .map(([key, label]) => `${label}: ${String(enquiry[key]).trim()}`);
  if (digits) lines.push("", `Reply on WhatsApp: https://wa.me/${digits.length === 10 ? `91${digits}` : digits}`);

  const label = SUBJECTS[enquiry.variant] ?? "Enquiry";
  await mailer.sendMail({
    from: `"${site.shortName} website" <${user}>`,
    to: inbox,
    ...(customerEmail ? { replyTo: customerEmail } : {}),
    subject: `[Website] ${label} from ${oneLine(enquiry.name)}`,
    text: lines.join("\n"),
  });

  if (customerEmail) {
    try {
      await mailer.sendMail({
        from: `"${site.name}" <${user}>`,
        to: customerEmail,
        subject: "We have received your enquiry",
        text: [
          `Hello ${oneLine(enquiry.name)},`,
          "",
          "Thank you for contacting Yousha Premium Auto Interiors. We have your enquiry and will reply on the number you gave, usually within one working day.",
          "If you have photos of the seat, interior or equipment, send them on WhatsApp: https://wa.me/" + site.whatsappNumber,
          "",
          `${site.name}`,
          `${site.phone} | ${site.email}`,
          site.addressOneLine,
        ].join("\n"),
      });
    } catch (err) {
      // The workshop already has the enquiry; a failed confirmation must not fail the request.
      console.error("[enquiry] confirmation email failed", err);
    }
  }
}
