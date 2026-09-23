"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Signature moment: a running seam down the page edge that "sews" itself
 * as you scroll, with a needle riding the thread. Literal thread language,
 * matching the .stitch/.stitch-v motif used across the site.
 */
export function ScrollStitch() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const needleTop = useTransform(progress, (v) => `${v * 100}%`);

  if (reduce) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 right-4 z-40 hidden w-4 lg:block xl:right-6"
    >
      <div className="relative h-full w-px bg-ink/10">
        <motion.div
          style={{ scaleY: progress }}
          className="absolute inset-x-0 top-0 h-full origin-top stitch-v"
        />
        <motion.span
          style={{ top: needleTop }}
          className="absolute left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-copper shadow-[0_0_0_3px_var(--color-stone)]"
        />
      </div>
    </div>
  );
}
