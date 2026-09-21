"use client";

import { useId, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { SeatPanel, type Tone } from "@/components/SeatPanel";
import type { GalleryPattern } from "@/data/content";

/**
 * Draggable before/after comparison. A native range input sits on top, so mouse,
 * touch and keyboard (arrow keys, Home/End) all work with no extra handlers.
 */
export function BeforeAfterSlider({
  pattern,
  tone,
  title,
  alt,
}: {
  pattern: GalleryPattern;
  tone: Tone;
  title: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <figure>
      <div className="ba-frame relative aspect-[4/3] w-full select-none overflow-hidden rounded-sm bg-hide">
        <div className="absolute inset-0">
          <SeatPanel pattern={pattern} tone={tone} />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <SeatPanel pattern={pattern} tone={tone} worn />
        </div>
        <span className="absolute left-3 top-3 rounded-sm bg-hide/80 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-paper">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-sm bg-thread px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-hide">
          After
        </span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-thread-soft shadow-[0_0_0_1px_rgb(0_0_0/0.4)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-thread text-hide shadow-lg">
            <ChevronsLeftRight className="size-5" />
          </span>
        </div>
        <label htmlFor={id} className="sr-only">
          {`Compare before and after: ${alt}`}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="ba-range absolute inset-0 size-full opacity-0"
          aria-valuetext={`${pos}% before, ${100 - pos}% after`}
        />
      </div>
      <figcaption className="mt-3 text-[0.95rem] font-medium">{title}</figcaption>
    </figure>
  );
}
