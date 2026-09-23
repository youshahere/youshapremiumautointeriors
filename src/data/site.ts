export const site = {
  name: "Yousha Premium Auto Interiors",
  shortName: "Yousha",
  tagline: "Three Generations of Craftsmanship. Reimagined for Modern Mobility.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yousha.in",
  phone: "+91 98194 78648",
  phoneHref: "tel:+919819478648",
  whatsappNumber: "919819478648",
  email: "info@yousha.in",
  address: {
    line1: "Ground Floor, G/9, Plot CS-109/2, Parel Sahyadri CHS",
    line2: "Dainik Shivneri Marg, near Phoenix Palladium",
    line3: "Worli Naka, Acharya Atre Chowk",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400018",
    country: "IN",
  },
  addressOneLine:
    "Ground Floor, G/9, Plot CS-109/2, Parel Sahyadri CHS, Dainik Shivneri Marg, near Phoenix Palladium, Worli Naka, Mumbai, Maharashtra – 400018",
  mapQuery:
    "Parel Sahyadri CHS, Dainik Shivneri Marg, near Phoenix Palladium, Worli Naka, Mumbai 400018",
  footerLine: "Premium Auto Interiors • Custom Upholstery • Accessible Mobility • Restoration",
  footerHeritage: "Since the 1950s | Three Generations of Craftsmanship",
  gstin: "27ACOPF9204D1ZQ",
  legalConstitution: "Proprietorship",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const nav = {
  main: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", children: true },
    { label: "Accessible Seating", href: "/accessible-seating" },
    { label: "Luxury & Restoration", href: "/services/luxury-car-interiors" },
    { label: "Commercial", href: "/commercial-solutions" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  footerCompany: [
    { label: "Home", href: "/" },
    { label: "About & Heritage", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  footerSpecialist: [
    { label: "Accessible Seating", href: "/accessible-seating" },
    { label: "Commercial & Fleet", href: "/commercial-solutions" },
    { label: "Medical Upholstery", href: "/medical-upholstery" },
  ],
} as const;
