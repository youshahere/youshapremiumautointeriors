"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/data/content";
import Image from "next/image";
import { SeatPanel } from "@/components/SeatPanel";
import { photos } from "@/data/images";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { cn } from "@/lib/utils";

function Visual({ item, sizes, label }: { item: GalleryItem; sizes: string; label?: boolean }) {
  if (item.image) {
    const photo = photos[item.image];
    return <Image src={photo.src} alt={label ? photo.alt : ""} fill sizes={sizes} className="object-cover" />;
  }
  return <SeatPanel pattern={item.pattern} tone={item.tone} label={label ? item.alt : undefined} />;
}

function Tile({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink text-left"
      aria-label={`Open ${item.title}, ${item.category}`}
    >
      <span className="relative block size-full transition-transform duration-500 ease-out-quart group-hover:scale-105">
        <Visual item={item} sizes="(min-width:1280px) 30vw, (min-width:640px) 45vw, 100vw" />
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-copper-light">{item.category}</span>
        <span className="mt-1 block font-display text-lg leading-tight text-paper">{item.title}</span>
      </span>
    </button>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = items[index];

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onIndex]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={`${item.title} — ${item.category}`}
      className="m-auto w-[min(92vw,64rem)] max-w-none rounded-2xl bg-ink p-0 text-paper backdrop:bg-black/85"
    >
      <div className="relative">
        <div className="relative aspect-[4/3] max-h-[75vh] w-full sm:aspect-[16/10]">
          {item.beforeAfter ? (
            <div className="mx-auto h-full max-w-[64vh]">
              <BeforeAfterSlider pattern={item.pattern} tone={item.tone} title="" alt={item.alt} />
            </div>
          ) : (
            <Visual item={item} sizes="(min-width:1024px) 64rem, 92vw" label />
          )}
        </div>
        <div className="flex items-center justify-between gap-4 p-5">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-copper">{item.category}</p>
            <p className="font-display text-xl">{item.title}</p>
          </div>
          <p className="shrink-0 text-sm text-[#a99d8c]" aria-live="polite">
            {index + 1} / {items.length}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full bg-ink/85 text-paper hover:bg-copper hover:text-ink"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => onIndex((index - 1 + items.length) % items.length)}
          aria-label="Previous image"
          className="absolute left-3 top-[38%] flex size-11 items-center justify-center rounded-full bg-ink/85 text-paper hover:bg-copper hover:text-ink"
        >
          <ChevronLeft className="size-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => onIndex((index + 1) % items.length)}
          aria-label="Next image"
          className="absolute right-3 top-[38%] flex size-11 items-center justify-center rounded-full bg-ink/85 text-paper hover:bg-copper hover:text-ink"
        >
          <ChevronRight className="size-6" aria-hidden="true" />
        </button>
      </div>
    </dialog>
  );
}

export function GalleryGrid() {
  const [category, setCategory] = useState<GalleryCategory | "All">("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(
    () => (category === "All" ? galleryItems : galleryItems.filter((i) => i.category === category)),
    [category],
  );
  const beforeAfter = category === "Before & After";

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2.5">
        {(["All", ...galleryCategories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-[0.9rem] font-medium transition-colors",
              category === c
                ? "border-ink bg-ink text-paper"
                : "border-ink/25 bg-paper text-ink hover:border-ink",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {items.length} {items.length === 1 ? "project" : "projects"}
        {category !== "All" && ` in ${category}`}.
      </p>

      {items.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-ink/30 p-10 text-center text-muted">
          No projects in this category yet. Message us on WhatsApp and we will share recent work.
        </p>
      ) : beforeAfter ? (
        <ul className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <BeforeAfterSlider pattern={item.pattern} tone={item.tone} title={item.title} alt={item.alt} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.id}>
              <Tile item={item} onOpen={() => setOpen(i)} />
            </li>
          ))}
        </ul>
      )}

      {open !== null && items[open] && (
        <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
      )}
    </div>
  );
}

/** Homepage teaser: swipeable Embla carousel of recent work. */
export function GalleryPreview() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: true, dragFree: true });
  const preview = galleryItems.filter((i) => !i.beforeAfter).slice(0, 8);
  return (
    <div>
      <div className="overflow-hidden" ref={ref} role="region" aria-roledescription="carousel" aria-label="Recent work">
        <ul className="-ml-5 flex">
          {preview.map((item) => (
            <li key={item.id} className="min-w-0 shrink-0 basis-[82%] pl-5 sm:basis-[46%] lg:basis-[32%]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink">
                <Visual item={item} sizes="(min-width:1024px) 32vw, (min-width:640px) 46vw, 82vw" label />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-copper-light">{item.category}</span>
                  <span className="mt-1 block font-display text-lg leading-tight text-paper">{item.title}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          aria-label="Previous"
          className="flex size-12 items-center justify-center rounded-full border border-copper text-copper hover:bg-copper hover:text-ink"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => api?.scrollNext()}
          aria-label="Next"
          className="flex size-12 items-center justify-center rounded-full border border-copper text-copper hover:bg-copper hover:text-ink"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
