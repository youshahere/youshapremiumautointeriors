"use client";

import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn, track } from "@/lib/utils";

const button = cva(
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out-quart hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 active:translate-y-0 active:shadow-none focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        primary: "bg-copper text-ink hover:bg-copper-light",
        dark: "bg-ink text-paper hover:bg-ink-3",
        outline:
          "border border-copper text-copper-light hover:bg-copper hover:text-ink",
        outlineDark:
          "border border-ink text-ink hover:bg-ink hover:text-paper",
        whatsapp: "bg-[#1f7a4d] text-white hover:bg-[#25915c]",
        ghost: "text-current underline decoration-copper decoration-2 underline-offset-8 hover:decoration-4",
      },
      size: {
        md: "min-h-12 px-6 py-3 text-[0.95rem]",
        lg: "min-h-14 px-8 py-4 text-base",
        sm: "min-h-10 px-4 py-2 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = VariantProps<typeof button> & {
  href: string;
  children: ReactNode;
  className?: string;
  /** GA4 event name fired on click, e.g. "call_click". */
  event?: string;
  eventLabel?: string;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function Button({ href, variant, size, className, children, event, eventLabel, onClick, ...rest }: Props) {
  const classes = cn(button({ variant, size }), className);
  const handle: ComponentProps<"a">["onClick"] = (e) => {
    if (event) track(event, { label: eventLabel ?? href });
    onClick?.(e);
  };
  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    const isWeb = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        onClick={handle}
        {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={handle} {...rest}>
      {children}
    </Link>
  );
}
