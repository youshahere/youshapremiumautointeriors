"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Photo } from "@/data/images";

/** Hero background image with a slow parallax drift as the page loads/scrolls past it. */
export function HeroPhoto({ photo, priority }: { photo: Photo; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={reduce ? undefined : { y }} className="absolute inset-0 -top-[10%] h-[120%]">
        <Image
          src={photo.src}
          alt=""
          fill
          priority={priority}
          sizes="(min-width:1024px) 68vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/35" />
    </div>
  );
}
