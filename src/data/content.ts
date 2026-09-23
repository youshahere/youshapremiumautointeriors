import type { ImageKey } from "@/data/images";
import {
  Accessibility,
  Award,
  Building2,
  Car,
  Clock,
  Crown,
  Hammer,
  Handshake,
  Hotel,
  Layers,
  Map,
  MonitorSmartphone,
  Palette,
  Ruler,
  ShieldCheck,
  Sofa,
  Stethoscope,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const hero = {
  headline: "Three Generations of Craftsmanship. Reimagined for Modern Mobility.",
  sub: "From premium seat upholstery and luxury-car restoration to accessible swivel seating, Yousha brings seven decades of family workmanship to the interior of your vehicle.",
  trust: "Since the 1950s • Three Generations • Mumbai",
};

export const whatWeDo = {
  eyebrow: "What we do",
  heading: "Complete Automotive Interior Solutions",
  body: "One workshop for seating, upholstery, comfort and interiors. Whether your car needs a small repair, a full custom interior or a specialised accessibility solution, the work starts and finishes with the same family.",
};

export const heritage = {
  heading: "A Legacy Built Since the 1950s",
  intro:
    "Yousha Premium Auto Interiors is the third chapter of a family trade. Its methods come from the workbench. Its name comes from the next generation.",
  stops: [
    {
      when: "1950s",
      title: "National Uphostry Tailors",
      body: "Mr. Noor Bhai “Seatwale” (b. 1941) began as a self-taught upholstery craftsman, trading as National Uphostry Tailors. His skill was later recognised when he was honoured as a National Upholstery Tailor.",
      image: "heritage-national-uphostry" as const,
    },
    {
      when: "1980s",
      title: "Yousha Upholstery",
      body: "His son, Mr. Sajid Akhter, carried the trade forward as Yousha Upholstery through decades of automotive seating, interior repair and upholstery work, and kept the standard exactly where it was.",
      image: "heritage-generation-vintage" as const,
    },
    {
      when: "Today",
      title: "Yousha Premium Auto Interiors",
      body: "The business is reimagined as Yousha Premium Auto Interiors, named after the next generation. Mentored by Saqib Anjum, an engineer and cybersecurity consultant by profession, it adds modern process, digital presentation, accessibility focus and customer experience. Mr. Sajid Akhter continues to lead on craftsmanship.",
      image: "heritage-today" as const,
    },
  ],
  closing: "Heritage remains our foundation. Innovation defines our future.",
  purpose:
    "Our purpose: to preserve multi-generational craftsmanship while modernising how automotive upholstery and interior services are delivered.",
};

export const vision = {
  heading: "Our Vision",
  pillars: [
    "To be the most trusted name in premium automotive interiors in Mumbai.",
    "To keep hand-craft alive inside a modern, transparent customer experience.",
    "To make accessible seating a normal option, not a special request.",
    "To serve individuals, families, fleets and institutions with the same care.",
  ],
  closing:
    "We want every vehicle that leaves our workshop to carry three generations of care with it.",
};

export const familyMessage = {
  heading: "Message from the Family",
  quote:
    "My family has spent more than seventy years learning what a seat should feel like. Our aim now is simple: keep that craft exactly as it is, and make it easier for you to reach, understand and trust.",
  attribution: "Saqib Anjum",
  role: "Mentor, Yousha Premium Auto Interiors",
};

export const process = {
  eyebrow: "Our process",
  heading: "From Requirement to Finished Interior",
  steps: [
    { title: "Understand", body: "We listen to what you need, how you use the vehicle and what you expect from the finished interior." },
    { title: "Inspect", body: "We examine the vehicle, its seats and its materials, and tell you honestly what is possible." },
    { title: "Design & Select", body: "You choose materials, colours, stitching and finishes, with our guidance." },
    { title: "Execute", body: "Our craftsmen build, repair or restore the interior in the workshop." },
    { title: "Quality Check", body: "Every panel, seam and fitment is checked by hand before it leaves the bench." },
    { title: "Delivery", body: "You receive the finished vehicle, and we stay available if you need anything adjusted." },
  ],
};

export type WhyItem = { icon: LucideIcon; title: string; body: string };

export const whyYousha: WhyItem[] = [
  { icon: Clock, title: "Over Seven Decades of Family Experience", body: "Three generations of upholstery knowledge, passed hand to hand." },
  { icon: Award, title: "Premium Workmanship", body: "Clean seams, correct tension and finishing you can inspect closely." },
  { icon: Ruler, title: "Custom-Made Solutions", body: "Measured and made for your vehicle, not pulled from a shelf." },
  { icon: Crown, title: "Luxury Vehicle Experience", body: "Familiar with the standards premium interiors demand." },
  { icon: Accessibility, title: "Accessibility-Focused", body: "Seating solutions designed around the person who will use them." },
  { icon: Wrench, title: "Repair, Restore or Upgrade", body: "Honest advice on which one your interior actually needs." },
  { icon: Palette, title: "Multiple Material Choices", body: "Leather, leatherette and fabric in a wide range of finishes." },
  { icon: Handshake, title: "B2C & B2B", body: "Individual owners and multi-vehicle fleets are equally welcome." },
  { icon: MonitorSmartphone, title: "Modern Customer Experience", body: "Clear communication, quick WhatsApp replies and transparent quotes." },
];

export const vehicles = [
  "Hatchbacks",
  "Sedans",
  "SUVs",
  "Luxury Cars",
  "Vintage Cars",
  "Premium Vans",
  "Commercial Vehicles",
  "Travel Vehicles",
  "Special-Purpose Vehicles",
];

export type Audience = { icon: LucideIcon; label: string };

export const whoWeServe: Audience[] = [
  { icon: Car, label: "Private Car Owners" },
  { icon: Crown, label: "Luxury Car Owners" },
  { icon: Hammer, label: "Classic & Vintage Collectors" },
  { icon: Users, label: "Senior Citizens" },
  { icon: Accessibility, label: "Persons with Mobility Requirements" },
  { icon: Building2, label: "Corporate Fleets" },
  { icon: Truck, label: "Premium Travel Companies" },
  { icon: Hotel, label: "Hotels & Hospitality" },
  { icon: Map, label: "Tour Operators" },
  { icon: Sofa, label: "Car Dealers" },
  { icon: Layers, label: "Used-Car Businesses" },
  { icon: Stethoscope, label: "Healthcare Companies" },
  { icon: ShieldCheck, label: "Clinics & Rehabilitation Centres" },
];

export const accessibility = {
  eyebrow: "Accessible Mobility Solutions",
  tagline: "Crafting Comfort. Creating Accessibility.",
  headline: "Making Cars More Accessible",
  intro: [
    "Getting into a car should not cost anyone their dignity or comfort. For senior citizens, for people with limited mobility and for the families who travel with them, the seat is where independence begins.",
    "We evaluate every requirement individually. No two people, and no two vehicles, are the same, so no two solutions are either.",
  ],
  modules: [
    {
      title: "Swivel Seats",
      body: "Seats designed or modified to rotate towards the door, making entry and exit easier and gentler.",
    },
    {
      title: "Transfer-Friendly Seating",
      body: "Seating arrangements that reduce the difficulty of transferring between a wheelchair and the vehicle seat.",
    },
    {
      title: "Seat Extension & Positioning Solutions",
      body: "Custom fabrication based on the passenger's comfort and mobility needs.",
    },
    {
      title: "Comfort Modifications",
      body: "Additional cushioning and positioning support for longer, more comfortable journeys.",
    },
    {
      title: "Custom Mobility Projects",
      body: "A bespoke evaluation for the cases where no standard solution fits.",
    },
  ],
  philosophy:
    "Accessibility is not about making every vehicle identical. It is about understanding the individual and creating a solution around them.",
  disclaimerTitle: "Every modification is evaluated first",
  disclaimer:
    "All accessibility modifications are assessed for each vehicle, passenger requirement, feasibility and safety before any work is agreed. Vehicle structure, seat configuration and available space decide what can be done. We will tell you plainly if a solution is not suitable.",
  faqQuestions: [
    "Do you provide accessibility modifications?",
    "Can accessibility solutions be fitted in every vehicle?",
  ],
};

export const commercial = {
  eyebrow: "Commercial & Fleet Solutions",
  headline: "Upgrade the Passenger Experience.",
  intro: [
    "For premium travel companies, corporate transport, hotels, tour operators and chauffeur services, the interior is the product your passenger actually experiences.",
    "We refresh, refurbish and rebuild seating and upholstery for single vehicles and for whole fleets.",
  ],
  vehiclesHeading: "Vehicles we work on",
  vehicles: [
    "Luxury travel vehicles",
    "Premium taxis",
    "Corporate cars",
    "Chauffeur fleets",
    "Tourist vehicles",
    "Tempo travellers",
    "Premium vans",
    "VIP transport",
    "Hotel fleets",
  ],
  servicesHeading: "What we deliver",
  services: [
    "Premium seating",
    "Custom upholstery",
    "Cushioning",
    "Refurbishment",
    "Fleet restoration",
  ],
  ctaText:
    "We welcome single-vehicle customisation as well as multi-vehicle interior projects.",
  ctaLabel: "Discuss a Commercial Project",
  faqQuestions: ["Do you undertake fleet work?"],
};

export const medical = {
  eyebrow: "Medical & Special-Purpose Upholstery",
  headline: "Upholstery Beyond Automobiles.",
  intro: [
    "The same hands that upholster car seats can upholster the equipment your patients rest on. We work with healthcare and allied industries on selected medical and paramedical upholstery.",
    "Projects can be undertaken based on dimensions, material requirements and application.",
  ],
  itemsHeading: "What we upholster",
  items: [
    "Examination tables",
    "Medical couches",
    "Patient seating",
    "Rehabilitation equipment",
    "Paramedical equipment",
    "Therapy tables",
    "Clinic seating",
    "Custom foam and upholstered components",
  ],
  faqQuestions: ["Do you undertake non-automotive upholstery?"],
};

export const customProjects = {
  heading: "Have something unusual?",
  body: "If it involves seating, cushioning, upholstery or interior comfort, talk to us. Send the dimensions, a photo and what it has to do, and we will tell you if it is something we can build.",
};

export const finalCta = {
  heading: "Your Car Deserves More Than a Standard Interior.",
  body: "Tell us about your vehicle and what you want it to feel like. We will take it from there.",
  emphasis: "Let's Create Your Interior.",
};

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: "Can you customise a seat design based on my requirement?",
    a: "Yes. Materials, colours, stitching, quilting, perforation and cushioning can all be specified to your requirement.",
  },
  {
    q: "Do you work on luxury cars?",
    a: "Yes. We have experience working on premium and luxury vehicles, and we take particular care to preserve their original character. We are an independent workshop and are not affiliated with any vehicle manufacturer.",
  },
  {
    q: "Can you repair only one damaged section?",
    a: "Where it is technically practical, yes. We inspect the seat first and recommend whether a section repair, restoration or full replacement is the right choice.",
  },
  {
    q: "Do you restore vintage-car interiors?",
    a: "Yes. Vintage and classic interiors are evaluated individually, since materials, patterns and construction differ from car to car.",
  },
  {
    q: "Do you provide accessibility modifications?",
    a: "Yes. Accessible mobility seating, including swivel seats, transfer-friendly seating and custom solutions, is a core focus area for us.",
  },
  {
    q: "Can accessibility solutions be fitted in every vehicle?",
    a: "Not necessarily. Vehicle structure, seat configuration, available space, passenger requirement and safety must first be evaluated before we can say what is suitable.",
  },
  {
    q: "Do you undertake fleet work?",
    a: "Yes. We welcome single-vehicle customisation as well as multi-vehicle interior projects for travel companies, hotels, corporate fleets and dealers.",
  },
  {
    q: "Do you provide doorstep services?",
    a: "For selected services, yes, subject to availability. Contact us on WhatsApp with your location and the service you need, and we will confirm.",
  },
  {
    q: "Do you undertake non-automotive upholstery?",
    a: "Yes. We take on selected medical and paramedical upholstery, such as examination tables, therapy couches and clinic seating, based on dimensions, material and application.",
  },
];

export function faqsFor(questions: string[]) {
  return faqs.filter((f) => questions.includes(f.q));
}

export const galleryCategories = [
  "Premium Interiors",
  "Luxury Cars",
  "Seat Restoration",
  "Custom Upholstery",
  "Vintage Cars",
  "Roof-Liner Work",
  "Accessible Seating",
  "Before & After",
  "Commercial & Travel Vehicles",
  "Special Projects",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryPattern =
  | "diamond"
  | "perforated"
  | "channel"
  | "plain"
  | "piping"
  | "weave"
  | "swivel"
  | "fleet"
  | "medical";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  alt: string;
  pattern: GalleryPattern;
  tone: "tan" | "black" | "oxblood" | "green" | "grey";
  beforeAfter?: boolean;
  /** Sample photo; when absent the tile falls back to an illustrated seat panel. */
  image?: ImageKey;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", image: "vintage-tufted", category: "Premium Interiors", title: "Deep-buttoned leather", alt: "Diamond-quilted tan leather seat panel with contrast stitching", pattern: "diamond", tone: "tan" },
  { id: "g2", image: "jaguar-etype", category: "Luxury Cars", title: "Classic coupe, red leather", alt: "Black and tan two-tone leather seat in a premium sedan", pattern: "channel", tone: "black" },
  { id: "g3", image: "vintage-tan-sunlit", category: "Seat Restoration", title: "Tan leather seats", alt: "Restored seat bolster with new leather and foam", pattern: "plain", tone: "oxblood" },
  { id: "g4", image: "leather-interior", category: "Custom Upholstery", title: "Classic leather cockpit", alt: "Seat with contrast piping around each panel", pattern: "piping", tone: "grey" },
  { id: "g5", image: "vintage-sedan", category: "Vintage Cars", title: "Classic sedan interior", alt: "Restored pleated bench seat for a vintage car", pattern: "channel", tone: "oxblood" },
  { id: "g6", category: "Roof-Liner Work", title: "Roof liner replacement", alt: "New fabric roof liner installed in a car", pattern: "weave", tone: "grey" },
  { id: "g7", image: "accessible-taxi", category: "Accessible Seating", title: "Accessible taxi lift", alt: "Illustration of a swivel car seat rotated toward the door", pattern: "swivel", tone: "green" },
  { id: "g8", category: "Before & After", title: "Cracked leather restored", alt: "Cracked leather seat shown before and after restoration", pattern: "plain", tone: "tan", beforeAfter: true },
  { id: "g9", category: "Before & After", title: "Faded seat rebuilt", alt: "Faded and sagging seat shown before and after rebuild", pattern: "diamond", tone: "black", beforeAfter: true },
  { id: "g10", category: "Before & After", title: "Worn bolster renewed", alt: "Worn seat bolster shown before and after renewal", pattern: "perforated", tone: "oxblood", beforeAfter: true },
  { id: "g11", category: "Commercial & Travel Vehicles", title: "Fleet seat refurbishment", alt: "Rows of refurbished seats in a premium travel van", pattern: "fleet", tone: "grey" },
  { id: "g12", category: "Special Projects", title: "Therapy table upholstery", alt: "Upholstered therapy table for a rehabilitation clinic", pattern: "medical", tone: "green" },
  { id: "g13", image: "daytime-dash", category: "Premium Interiors", title: "Sports-car cockpit", alt: "Perforated leather seat inserts with fine stitching", pattern: "perforated", tone: "black" },
  { id: "g14", image: "mercedes-dash", category: "Luxury Cars", title: "Modern luxury dashboard", alt: "Leather door-panel upholstery in a luxury SUV", pattern: "diamond", tone: "oxblood" },
  { id: "g15", image: "bmw-wheel", category: "Custom Upholstery", title: "Leather steering wheel", alt: "Hand-stitched leather steering-wheel wrap", pattern: "piping", tone: "black" },
  { id: "g16", image: "classic-convertible", category: "Vintage Cars", title: "Convertible interior", alt: "Recreated classic car seat in period material", pattern: "weave", tone: "tan" },
];
