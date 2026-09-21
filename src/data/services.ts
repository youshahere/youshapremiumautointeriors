import type { ImageKey } from "@/data/images";
import {
  Accessibility,
  Armchair,
  Crown,
  Hammer,
  Layers,
  type LucideIcon,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  Wrench,
} from "lucide-react";

export type Service = {
  slug: string;
  image: ImageKey;
  navLabel: string;
  icon: LucideIcon;
  blurb: string;
  eyebrow: string;
  headline: string;
  intro: string[];
  itemsHeading: string;
  items: string[];
  closing?: string;
  badge?: string;
  disclaimer?: string;
  faqQuestions: string[];
  waMessage: string;
  seo: { title: string; description: string; keyword: string };
};

export const services: Service[] = [
  {
    slug: "car-upholstery",
    image: "leather-interior",
    navLabel: "Premium Car Upholstery",
    icon: Armchair,
    blurb: "Seats, door pads, armrests and steering wheels, cut and stitched around your vehicle.",
    eyebrow: "Premium Car Upholstery",
    headline: "Customised Around Your Vehicle.",
    intro: [
      "Every car has its own seat geometry, its own bolsters, its own wear. We do not fit a generic cover and call it done. Each panel is measured, patterned and stitched around the vehicle it goes into.",
      "Leather, leatherette or fabric, plain or quilted, single-tone or dual-tone: you choose the character, and our workshop builds it.",
    ],
    itemsHeading: "What we upholster",
    items: [
      "Premium seat upholstery",
      "Custom seat-cover manufacturing",
      "Leather and leatherette interiors",
      "Fabric upholstery",
      "Perforated and quilted patterns",
      "Dual-tone designs",
      "Seat cushioning and foam restoration",
      "Seat reshaping",
      "Door-pad upholstery",
      "Armrest upholstery",
      "Centre-console finishing",
      "Steering-wheel wrapping",
      "Gear-knob and trim finishing",
    ],
    closing: "Comfort you can feel. Finish you can see.",
    faqQuestions: [
      "Can you customise a seat design based on my requirement?",
      "Can you repair only one damaged section?",
    ],
    waMessage: "Hi Yousha, I'm interested in premium car upholstery.",
    seo: {
      title: "Premium Car Upholstery in Mumbai | Yousha Premium Auto Interiors",
      description:
        "Custom car upholstery in Mumbai: leather, leatherette and fabric seats, quilted and perforated patterns, door pads, armrests and steering-wheel wraps by a three-generation family workshop.",
      keyword: "Car upholstery Mumbai",
    },
  },
  {
    slug: "custom-interiors",
    image: "vintage-tufted",
    navLabel: "Custom Car Interiors",
    icon: Scissors,
    blurb: "Materials, stitching, quilting and colour, chosen by you and built to order.",
    eyebrow: "Custom Car Interiors",
    headline: "Designed Around You.",
    intro: [
      "A custom interior starts with a conversation, not a catalogue. We look at how you use the car, what you want to feel when you sit in it, and what the vehicle can carry off.",
      "From there, materials, textures, stitching and cushioning are specified for you alone.",
    ],
    itemsHeading: "What you can customise",
    items: [
      "Materials",
      "Custom stitching",
      "Diamond quilting",
      "Perforated finishes",
      "Contrast piping",
      "Embossed designs",
      "Comfort padding",
      "Colour combinations",
      "Factory-style restoration",
      "Personalised design concepts",
    ],
    closing: "Tell us the feeling you want. We will build the interior around it.",
    faqQuestions: ["Can you customise a seat design based on my requirement?"],
    waMessage: "Hi Yousha, I'd like a custom car interior. Can we talk?",
    seo: {
      title: "Custom Leather Car Seats & Interiors Mumbai | Yousha",
      description:
        "Custom car interiors in Mumbai: choose materials, diamond quilting, perforation, contrast piping and colour combinations. Custom leather car seats made to order.",
      keyword: "Custom leather car seats Mumbai",
    },
  },
  {
    slug: "luxury-car-interiors",
    image: "jaguar-etype",
    navLabel: "Luxury & Premium Vehicle Interiors",
    icon: Crown,
    blurb: "Specialised care for premium cars, from leather restoration to full upholstery replacement.",
    eyebrow: "Luxury & Premium Vehicle Interiors",
    headline: "Specialised Care for Premium Cars.",
    intro: [
      "Premium cars are unforgiving. Leather grades, stitch patterns and panel fitment are all judged by eye and by hand every time you get in.",
      "Our workshop has experience working on interiors across models from brands such as Mercedes-Benz, BMW, Audi, Jaguar, Land Rover, Volvo, Lexus, Toyota, Škoda and Volkswagen.",
    ],
    itemsHeading: "Luxury interior services",
    items: [
      "Seat leather restoration",
      "Upholstery replacement",
      "Roof-liner replacement",
      "Sagging roof repair",
      "Door-panel upholstery",
      "Interior leather repair",
      "Seat cushioning restoration",
      "Interior trim refurbishment",
      "Steering and console upholstery",
      "Custom comfort enhancement",
    ],
    closing: "We restore comfort without losing the character the car left the factory with.",
    badge: "Experience with premium marques",
    disclaimer:
      "Yousha Premium Auto Interiors is an independent workshop. It is not an authorised dealer, service centre or affiliate of any vehicle manufacturer. Brand names are used only to describe the vehicles we have worked on. All trademarks belong to their respective owners.",
    faqQuestions: ["Do you work on luxury cars?", "Can you repair only one damaged section?"],
    waMessage: "Hi Yousha, I have a premium car that needs interior work.",
    seo: {
      title: "Luxury Car Upholstery Mumbai | BMW, Mercedes Interior Repair | Yousha",
      description:
        "Luxury car upholstery and interior repair in Mumbai. Experience with Mercedes-Benz, BMW, Audi, Jaguar, Land Rover, Volvo and Lexus interiors: leather restoration, roof-liner and trim work.",
      keyword: "Luxury car upholstery Mumbai",
    },
  },
  {
    slug: "vintage-car-restoration",
    image: "vintage-sedan",
    navLabel: "Classic & Vintage Restoration",
    icon: Hammer,
    blurb: "Period-correct interiors rebuilt with respect for the original.",
    eyebrow: "Classic & Vintage Car Restoration",
    headline: "Respecting the Original Character.",
    intro: [
      "A vintage interior is not a problem to be modernised. It is a period document. The pattern of the pleats, the weight of the cloth, the shape of the seat all belong to the car.",
      "This is heritage work, not mass-production. It is the trade our family has practised since the 1950s, applied to cars that deserve it.",
    ],
    itemsHeading: "Restoration work",
    items: [
      "Vintage seat restoration",
      "Classic upholstery recreation",
      "Foam and cushioning rebuild",
      "Roof-liner restoration",
      "Door-panel restoration",
      "Carpet and trim work",
      "Custom material matching",
      "Interior refurbishment",
    ],
    closing: "Bespoke automotive interiors since the 1950s.",
    faqQuestions: ["Do you restore vintage-car interiors?"],
    waMessage: "Hi Yousha, I have a classic car that needs interior restoration.",
    seo: {
      title: "Vintage & Classic Car Interior Restoration Mumbai | Yousha",
      description:
        "Classic and vintage car upholstery restoration in Mumbai: seat restoration, period upholstery recreation, foam rebuild, roof-liner and trim work by a heritage family workshop.",
      keyword: "Classic car interior restoration Mumbai",
    },
  },
  {
    slug: "seat-repair",
    image: "vintage-tan-sunlit",
    navLabel: "Seat Repair & Restoration",
    icon: Wrench,
    blurb: "Repair before you replace. Honest advice on what your seat actually needs.",
    eyebrow: "Seat Repair & Restoration",
    headline: "Repair Before You Replace.",
    intro: [
      "Not every worn seat needs a new one. We inspect first, then tell you plainly whether repair, restoration or replacement makes sense.",
      "Where it is technically practical, we repair only the section that is damaged and leave the rest as it is.",
    ],
    itemsHeading: "Damage we repair",
    items: [
      "Torn upholstery",
      "Cracked leather",
      "Damaged stitching",
      "Worn surfaces",
      "Collapsed cushioning",
      "Uneven foam",
      "Damaged bolsters",
      "Seat base restoration",
      "Headrest upholstery",
      "Armrest repair",
      "Interior trim damage",
    ],
    closing: "Send us a photo on WhatsApp and we will tell you what we see.",
    faqQuestions: ["Can you repair only one damaged section?"],
    waMessage: "Hi Yousha, my car seat needs repair. Can I send photos?",
    seo: {
      title: "Car Seat Repair Mumbai | Leather & Foam Restoration | Yousha",
      description:
        "Car seat repair in Mumbai: torn upholstery, cracked leather, collapsed cushioning, damaged bolsters and stitching. Inspection first, repair before replace.",
      keyword: "Car seat repair Mumbai",
    },
  },
  {
    slug: "roof-liner-repair",
    image: "mercedes-dash",
    navLabel: "Roof Liner & Fabric Repair",
    icon: Layers,
    blurb: "Sagging roof liners, pillar fabric and door fabric brought back to factory-fresh.",
    eyebrow: "Roof Liner & Interior Fabric Repair",
    headline: "Bring Back the Factory-Fresh Interior.",
    intro: [
      "A sagging roof liner is one of the most common and most visible signs of an ageing interior. The adhesive fails, the foam backing perishes and the fabric drops.",
      "We replace the liner and the fabric around it properly, so it stays where it should.",
    ],
    itemsHeading: "Roof and fabric work",
    items: [
      "Sagging roof-liner replacement",
      "Roof-fabric replacement",
      "Pillar upholstery",
      "Sunroof surrounding fabric work",
      "Door-fabric replacement",
      "Interior fabric restoration",
    ],
    closing: "Look up again without wincing.",
    faqQuestions: ["Do you work on luxury cars?"],
    waMessage: "Hi Yousha, my car's roof liner is sagging. Can you help?",
    seo: {
      title: "Car Roof Liner Repair & Replacement Mumbai | Yousha",
      description:
        "Sagging car roof liner repair and replacement in Mumbai: roof fabric, pillar upholstery, sunroof surround and door-fabric replacement for all vehicles.",
      keyword: "Car roof liner repair Mumbai",
    },
  },
  {
    slug: "interior-cleaning",
    image: "daytime-dash",
    navLabel: "Car Interior Cleaning",
    icon: Sparkles,
    blurb: "Professional interior care, at our workshop or at your doorstep where available.",
    eyebrow: "Car Interior Cleaning",
    headline: "Professional Interior Care at Your Doorstep.",
    intro: [
      "Seats, carpets, roof, door pads and dashboard: cleaned properly, with the right method for each material.",
      "Doorstep service is available for selected services, subject to service availability in your area. Ask us on WhatsApp to confirm.",
    ],
    itemsHeading: "What we clean",
    items: [
      "Seat cleaning",
      "Vacuuming",
      "Carpet cleaning",
      "Roof cleaning",
      "Door-pad cleaning",
      "Dashboard cleaning",
      "Interior detailing",
      "Leather cleaning and conditioning",
    ],
    closing: "Convenient. Professional. Delivered to your doorstep.",
    badge: "Doorstep — subject to availability",
    faqQuestions: ["Do you provide doorstep services?"],
    waMessage: "Hi Yousha, I'd like to know about interior cleaning at my doorstep.",
    seo: {
      title: "Car Interior Cleaning Mumbai | Doorstep Service | Yousha",
      description:
        "Professional car interior cleaning in Mumbai: seat, carpet, roof, door-pad and dashboard cleaning, leather conditioning. Doorstep service for selected work, subject to availability.",
      keyword: "Car interior cleaning Mumbai",
    },
  },
  {
    slug: "detailing",
    image: "bmw-wheel",
    navLabel: "Vehicle Detailing & Protection",
    icon: ShieldCheck,
    blurb: "Planned complementary service: coatings, polishing and protection packages.",
    eyebrow: "Vehicle Detailing & Protection",
    headline: "Finishing Touches, Protected.",
    intro: [
      "Yousha also plans to provide selected detailing and protection services alongside interior work, so a finished interior can stay that way.",
      "Availability may vary by vehicle condition and location. Ask us before you plan around it.",
    ],
    itemsHeading: "Planned detailing services",
    items: [
      "Teflon coating",
      "Exterior polishing",
      "Interior detailing",
      "Leather conditioning",
      "Plastic and trim restoration",
      "Paint enhancement",
      "Basic protection packages",
    ],
    closing: "Ask us about availability for your vehicle.",
    badge: "Ask us about availability",
    faqQuestions: ["Do you provide doorstep services?"],
    waMessage: "Hi Yousha, I'd like to ask about detailing and protection availability.",
    seo: {
      title: "Car Detailing & Protection | Yousha Premium Auto Interiors Mumbai",
      description:
        "Planned complementary detailing and protection services from Yousha, Mumbai: Teflon coating, polishing, leather conditioning and trim restoration. Availability varies.",
      keyword: "Car detailing Mumbai",
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type SpecialistLink = {
  href: string;
  navLabel: string;
  blurb: string;
  icon: LucideIcon;
};

export const specialistLinks: SpecialistLink[] = [
  {
    href: "/accessible-seating",
    navLabel: "Accessible Mobility Solutions",
    blurb: "Swivel seats, transfer-friendly seating and custom mobility projects, evaluated per person.",
    icon: Accessibility,
  },
  {
    href: "/commercial-solutions",
    navLabel: "Commercial & Fleet Solutions",
    blurb: "Premium interiors for travel companies, hotels, chauffeur services and corporate fleets.",
    icon: Truck,
  },
  {
    href: "/medical-upholstery",
    navLabel: "Medical & Special-Purpose Upholstery",
    blurb: "Examination tables, therapy couches and patient seating, upholstered to your dimensions.",
    icon: Stethoscope,
  },
];
