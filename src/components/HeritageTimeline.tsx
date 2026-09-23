import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { heritage } from "@/data/content";
import { photos } from "@/data/images";

/** Chronology is the content here, so a timeline is honest structure. */
export function HeritageTimeline() {
  return (
    <ol className="relative mx-auto max-w-5xl">
      <span aria-hidden="true" className="stitch-v absolute bottom-0 left-[1.35rem] top-2 text-copper/60 md:left-1/2 md:-translate-x-1/2" />
      {heritage.stops.map((stop, i) => {
        const right = i % 2 === 1;
        const photo = photos[stop.image];
        return (
          <li key={stop.when} className="relative pb-16 pl-16 last:pb-0 md:grid md:grid-cols-2 md:items-center md:gap-16 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute left-[0.6rem] top-1.5 z-10 flex size-[1.6rem] rotate-45 items-center justify-center bg-copper md:left-1/2 md:-ml-[0.8rem]"
            >
              <span className="size-2 bg-ink" />
            </span>
            <Reveal className={`md:row-start-1 ${right ? "md:col-start-2" : "md:col-start-1"}`}>
              <figure className="panel-stitch overflow-hidden rounded-sm bg-ink p-2 [--stitch-color:rgb(177_90_43/0.35)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width:768px) 40vw, 100vw"
                  className="relative z-10 h-64 w-full rounded-[2px] object-cover sm:h-80"
                />
              </figure>
            </Reveal>
            <Reveal
              delay={0.1}
              className={`md:row-start-1 ${right ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}
            >
              <p className="font-display text-5xl italic text-copper-deep md:text-6xl">{stop.when}</p>
              <h3 className="mt-2 text-2xl">{stop.title}</h3>
              <p className="mt-3 text-[1.02rem] text-muted">{stop.body}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
