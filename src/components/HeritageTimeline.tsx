import { Reveal } from "@/components/Reveal";
import { heritage } from "@/data/content";

/** Chronology is the content here, so a timeline is honest structure. */
export function HeritageTimeline() {
  return (
    <ol className="relative mx-auto max-w-4xl">
      <span aria-hidden="true" className="stitch-v absolute bottom-0 left-[1.35rem] top-2 text-thread/60 md:left-1/2 md:-translate-x-1/2" />
      {heritage.stops.map((stop, i) => {
        const right = i % 2 === 1;
        return (
          <li key={stop.when} className="relative pb-14 pl-16 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
            <span
              aria-hidden="true"
              className="absolute left-[0.6rem] top-1.5 z-10 flex size-[1.6rem] rotate-45 items-center justify-center bg-thread md:left-1/2 md:-ml-[0.8rem]"
            >
              <span className="size-2 bg-hide" />
            </span>
            <Reveal className={right ? "md:col-start-2" : "md:col-start-1 md:text-right"}>
              <p className="font-display text-5xl italic text-thread-deep md:text-6xl">{stop.when}</p>
              <h3 className="mt-2 text-2xl">{stop.title}</h3>
              <p className="mt-3 text-[1.02rem] text-muted">{stop.body}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
