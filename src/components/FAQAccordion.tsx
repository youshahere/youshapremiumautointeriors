"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/data/content";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items, tone = "light" }: { items: FAQ[]; tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  const dark = tone === "dark";
  return (
    <div className={cn("divide-y border-y", dark ? "divide-thread/25 border-thread/25" : "divide-hide/15 border-hide/15")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3 className="text-base">
              <button
                type="button"
                id={`${uid}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[1.3rem] font-medium leading-snug"
              >
                <span className={dark ? "text-paper" : "text-hide"}>{item.q}</span>
                <Plus
                  aria-hidden="true"
                  className={cn("size-6 shrink-0 text-thread-deep transition-transform duration-300", dark && "text-thread", isOpen && "rotate-45")}
                />
              </button>
            </h3>
            <div
              id={`${uid}-a${i}`}
              role="region"
              aria-labelledby={`${uid}-q${i}`}
              className={cn("grid transition-[grid-template-rows] duration-300 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className={cn("max-w-3xl pb-6 text-[1.02rem]", dark ? "text-[#cfc3b2]" : "text-muted")}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
