import { z } from "zod";
import { services } from "@/data/services";

const phone = z
  .string()
  .trim()
  .min(1, "Enter your phone number")
  .refine((v) => v.replace(/\D/g, "").length >= 10, "Enter a phone number with at least 10 digits");

const base = {
  name: z.string().trim().min(2, "Enter your name"),
  phone,
  email: z.union([z.literal(""), z.email("Enter a valid email address")]),
  message: z.string().trim().max(2000, "Keep the message under 2000 characters"),
  // Honeypot: real people never fill this in.
  website: z.string().max(0).optional(),
};

export const serviceOptions = [
  ...services.map((s) => s.navLabel),
  "Accessible Mobility Solutions",
  "Commercial & Fleet Solutions",
  "Medical & Special-Purpose Upholstery",
  "Something else",
] as const;

export const contactSchema = z.object({
  variant: z.literal("contact"),
  ...base,
  message: z.string().trim().min(10, "Tell us a little about what you need"),
});

export const quoteSchema = z.object({
  variant: z.literal("quote"),
  ...base,
  vehicle: z.string().trim().min(2, "Enter your vehicle make and model"),
  service: z.string().min(1, "Choose a service"),
});

export const accessibilitySchema = z.object({
  variant: z.literal("accessibility"),
  ...base,
  vehicle: z.string().trim().min(2, "Enter your vehicle make and model"),
  requirement: z.string().trim().min(5, "Describe the mobility requirement"),
  challenge: z.string().trim().min(5, "Describe the current seating challenge"),
});

export const commercialSchema = z.object({
  variant: z.literal("commercial"),
  ...base,
  company: z.string().trim().min(2, "Enter your company name"),
  fleetSize: z.string().trim().min(1, "Enter your fleet size"),
  vehicleTypes: z.string().trim().min(2, "List the vehicle types"),
  service: z.string().trim().min(2, "Tell us the service you need"),
});

export const medicalSchema = z.object({
  variant: z.literal("medical"),
  ...base,
  application: z.string().trim().min(2, "Describe the application"),
  dimensions: z.string().trim().min(2, "Enter the dimensions"),
  material: z.string().trim().min(2, "Enter the material requirement"),
  quantity: z.string().trim().min(1, "Enter the quantity"),
});

export const enquirySchema = z.discriminatedUnion("variant", [
  contactSchema,
  quoteSchema,
  accessibilitySchema,
  commercialSchema,
  medicalSchema,
]);

export type EnquiryValues = z.infer<typeof enquirySchema>;
export type EnquiryVariant = EnquiryValues["variant"];
