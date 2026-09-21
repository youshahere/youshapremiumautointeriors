# Yousha Premium Auto Interiors — website

Next.js (App Router, TypeScript) + Tailwind CSS v4. Built from `Yousha Premium Auto Interiors — Website Development Report.md`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID` and `ZOHO_SMTP_USER`, `ZOHO_SMTP_PASSWORD` (Zoho app password). Optional `ENQUIRY_TO`, `FORM_WEBHOOK_URL`.

## Where things live

- `src/data/*.ts` — all page copy, services, FAQs, gallery items, image credits. Edit text here.
- `src/components/` — UI. `EnquiryForm` covers the contact, quote, accessibility, commercial and medical forms.
- `src/app/api/{contact,quote}` — validated form endpoints; they POST to `FORM_WEBHOOK_URL` (Formspree, Make, Zapier…). Without it they only log.
- `public/images/` + `src/data/images.ts` — sample photos (Wikimedia Commons, credited on `/credits`). Replace with Yousha's own photography, then delete the credit entries and the "sample imagery" notes.

## Before launch

1. Real logo (current one is a placeholder wordmark) and real project photography.
2. Confirm copy that was written for this build: Vision pillars and the "Message from the Family" quote in `src/data/content.ts`.
3. Set `FORM_WEBHOOK_URL` so enquiries reach `info@yousha.in`.
4. Set GA4 ID; claim Google Business Profile.
