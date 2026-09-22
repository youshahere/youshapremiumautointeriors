import Link from "next/link";
import { ArrowUpRight, PencilRuler } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services, specialistLinks } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  href,
  title,
  blurb,
  icon: Icon,
  featured,
}: {
  href: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "panel-stitch group relative flex h-full flex-col rounded-sm p-8 transition-[transform,background-color,box-shadow] duration-300 ease-out-quart hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10",
        featured
          ? "bg-ink text-paper [--stitch-color:rgb(217_138_87/0.4)] hover:bg-ink-2"
          : "bg-paper text-ink [--stitch-color:rgb(143_70_32/0.32)]",
      )}
    >
      <Icon className={cn("size-9 stroke-[1.4]", featured ? "text-copper-light" : "text-muted")} aria-hidden="true" />
      <h3 className="mt-6 text-[1.4rem] leading-tight">{title}</h3>
      <p className={cn("mt-3 flex-1 text-[0.97rem]", featured ? "text-[#cfd9d3]" : "text-muted")}>{blurb}</p>
      <span
        className={cn(
          "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
          featured ? "text-copper-light" : "text-muted",
        )}
      >
        Learn more
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function ServiceGrid({ includeSpecialist = true }: { includeSpecialist?: boolean }) {
  const items = [
    ...services.map((s) => ({ href: `/services/${s.slug}`, title: s.navLabel, blurb: s.blurb, icon: s.icon, featured: false })),
    ...(includeSpecialist
      ? specialistLinks.map((s) => ({
          href: s.href,
          title: s.navLabel,
          blurb: s.blurb,
          icon: s.icon,
          featured: s.href === "/accessible-seating",
        }))
      : []),
    ...(includeSpecialist
      ? [
          {
            href: "/contact",
            title: "Other Custom Projects",
            blurb: "Something unusual? If it involves seating, cushioning or upholstery, talk to us.",
            icon: PencilRuler,
            featured: false,
          },
        ]
      : []),
  ];
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, i) => (
        <li key={item.href + item.title}>
          <Reveal delay={(i % 4) * 0.06} className="h-full">
            <ServiceCard {...item} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
