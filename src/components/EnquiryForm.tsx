"use client";

import { useState } from "react";
import { useForm, type FieldValues, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodType } from "zod";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import {
  accessibilitySchema,
  commercialSchema,
  contactSchema,
  medicalSchema,
  quoteSchema,
  serviceOptions,
  type EnquiryVariant,
} from "@/lib/validation";
import { site, whatsappLink } from "@/data/site";
import { cn, track } from "@/lib/utils";
import { Button } from "@/components/Button";

type Field = {
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "textarea" | "select";
  placeholder?: string;
  autoComplete?: string;
  full?: boolean;
  required?: boolean;
};

const common: Field[] = [
  { name: "name", label: "Your name", autoComplete: "name", required: true },
  { name: "phone", label: "Phone or WhatsApp number", type: "tel", autoComplete: "tel", placeholder: "+91", required: true },
  { name: "email", label: "Email (optional)", type: "email", autoComplete: "email", full: true },
];

const variants: Record<
  EnquiryVariant,
  {
    schema: ZodType;
    fields: Field[];
    messageLabel: string;
    messageRequired: boolean;
    submit: string;
    endpoint: string;
    waLabel: string;
  }
> = {
  contact: {
    schema: contactSchema,
    fields: [],
    messageLabel: "How can we help?",
    messageRequired: true,
    submit: "Send message",
    endpoint: "/api/contact",
    waLabel: "Contact form",
  },
  quote: {
    schema: quoteSchema,
    fields: [
      { name: "vehicle", label: "Vehicle make and model", placeholder: "e.g. BMW 5 Series", required: true },
      { name: "service", label: "Service you need", type: "select", required: true },
    ],
    messageLabel: "Tell us about the job (optional)",
    messageRequired: false,
    submit: "Get a custom quote",
    endpoint: "/api/quote",
    waLabel: "Quote request",
  },
  accessibility: {
    schema: accessibilitySchema,
    fields: [
      { name: "vehicle", label: "Vehicle make and model", required: true, full: true },
      { name: "requirement", label: "Mobility requirement", type: "textarea", placeholder: "e.g. Passenger uses a walker and finds it hard to turn while sitting", required: true, full: true },
      { name: "challenge", label: "Current seating challenge", type: "textarea", placeholder: "e.g. Seat is too low, hard to get out of the rear door", required: true, full: true },
    ],
    messageLabel: "Anything else we should know (optional)",
    messageRequired: false,
    submit: "Request an evaluation",
    endpoint: "/api/quote",
    waLabel: "Accessibility evaluation",
  },
  commercial: {
    schema: commercialSchema,
    fields: [
      { name: "company", label: "Company name", autoComplete: "organization", required: true, full: true },
      { name: "fleetSize", label: "Fleet size", placeholder: "e.g. 12 vehicles", required: true },
      { name: "vehicleTypes", label: "Vehicle types", placeholder: "e.g. Tempo travellers, sedans", required: true },
      { name: "service", label: "Service required", placeholder: "e.g. Seat refurbishment", required: true, full: true },
    ],
    messageLabel: "Project details (optional)",
    messageRequired: false,
    submit: "Discuss a commercial project",
    endpoint: "/api/quote",
    waLabel: "Commercial enquiry",
  },
  medical: {
    schema: medicalSchema,
    fields: [
      { name: "application", label: "Application", placeholder: "e.g. Examination table", required: true, full: true },
      { name: "dimensions", label: "Dimensions", placeholder: "e.g. 180 × 60 cm", required: true },
      { name: "material", label: "Material requirement", placeholder: "e.g. Antimicrobial vinyl", required: true },
      { name: "quantity", label: "Quantity", placeholder: "e.g. 4", required: true },
    ],
    messageLabel: "Project details (optional)",
    messageRequired: false,
    submit: "Send project brief",
    endpoint: "/api/quote",
    waLabel: "Medical upholstery brief",
  },
};

const inputClass =
  "w-full rounded-sm border border-ink/30 bg-white px-4 py-3 text-base text-ink placeholder:text-[#8a7d70] focus:border-muted focus:outline-none focus-visible:outline-3 focus-visible:outline-copper";

export function EnquiryForm({
  variant = "quote",
  defaultService,
  className,
}: {
  variant?: EnquiryVariant;
  defaultService?: string;
  className?: string;
}) {
  const cfg = variants[variant];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(cfg.schema as never) as unknown as Resolver<FieldValues>,
    defaultValues: { variant, email: "", message: "", website: "", service: defaultService ?? "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong.");
      track("generate_lead", { form: variant });
      setStatus("sent");
      reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  });

  if (status === "sent") {
    return (
      <div role="status" className={cn("panel-stitch rounded-sm bg-paper p-8 [--stitch-color:rgb(143_70_32/0.35)]", className)}>
        <CheckCircle2 className="size-10 text-[#1f7a4d]" aria-hidden="true" />
        <h3 className="mt-4 text-2xl">Thank you. We have your enquiry.</h3>
        <p className="mt-3 text-muted">
          We will reply on the number you gave, usually within one working day. If you have photos of the seat, interior or equipment, send them on WhatsApp and we can give a firmer answer.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={whatsappLink(`Hi Yousha, I just sent an enquiry (${cfg.waLabel}). Sharing photos here.`)} variant="whatsapp" event="whatsapp_click" eventLabel="form-success">
            <MessageCircle className="size-5" aria-hidden="true" />
            Send photos on WhatsApp
          </Button>
          <button type="button" onClick={() => setStatus("idle")} className="px-4 py-3 font-semibold text-muted underline underline-offset-4">
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const fields = [...common, ...cfg.fields];
  const err = (name: string) => errors[name]?.message as string | undefined;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("panel-stitch rounded-sm bg-paper p-6 sm:p-8 [--stitch-color:rgb(143_70_32/0.35)]", className)}
    >
      <input type="hidden" {...register("variant")} />
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          const id = `${variant}-${f.name}`;
          const message = err(f.name);
          return (
            <div key={f.name} className={cn(f.full && "sm:col-span-2")}>
              <label htmlFor={id} className="mb-2 block text-[0.92rem] font-semibold">
                {f.label}
                {f.required && (
                  <span aria-hidden="true" className="text-muted">
                    {" "}
                    *
                  </span>
                )}
              </label>
              {f.type === "textarea" ? (
                <textarea id={id} rows={3} placeholder={f.placeholder} aria-invalid={!!message} aria-describedby={message ? `${id}-err` : undefined} className={inputClass} {...register(f.name)} />
              ) : f.type === "select" ? (
                <select id={id} aria-invalid={!!message} aria-describedby={message ? `${id}-err` : undefined} className={inputClass} {...register(f.name)}>
                  <option value="">Choose a service</option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  type={f.type ?? "text"}
                  inputMode={f.type === "tel" ? "tel" : undefined}
                  autoComplete={f.autoComplete}
                  placeholder={f.placeholder}
                  aria-invalid={!!message}
                  aria-describedby={message ? `${id}-err` : undefined}
                  className={inputClass}
                  {...register(f.name)}
                />
              )}
              {message && (
                <p id={`${id}-err`} className="mt-1.5 text-sm font-medium text-[#a12b2b]">
                  {message}
                </p>
              )}
            </div>
          );
        })}

        <div className="sm:col-span-2">
          <label htmlFor={`${variant}-message`} className="mb-2 block text-[0.92rem] font-semibold">
            {cfg.messageLabel}
            {cfg.messageRequired && (
              <span aria-hidden="true" className="text-muted">
                {" "}
                *
              </span>
            )}
          </label>
          <textarea
            id={`${variant}-message`}
            rows={4}
            aria-invalid={!!err("message")}
            aria-describedby={err("message") ? `${variant}-message-err` : undefined}
            className={inputClass}
            {...register("message")}
          />
          {err("message") && (
            <p id={`${variant}-message-err`} className="mt-1.5 text-sm font-medium text-[#a12b2b]">
              {err("message")}
            </p>
          )}
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-sm border border-[#a12b2b]/40 bg-[#a12b2b]/5 p-4 text-[0.95rem] text-[#7d1f1f]">
          {serverError} You can also call{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>{" "}
          or message us on{" "}
          <a href={whatsappLink()} className="font-semibold underline">
            WhatsApp
          </a>
          .
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 font-semibold text-paper transition-colors hover:bg-ink-3 disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="size-5" aria-hidden="true" />
              {cfg.submit}
            </>
          )}
        </button>
        <p className="max-w-xs text-sm text-muted">Have photos? Send them on WhatsApp after you submit.</p>
      </div>
    </form>
  );
}
