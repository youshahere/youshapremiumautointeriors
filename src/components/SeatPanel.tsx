import { useId } from "react";
import type { GalleryPattern } from "@/data/content";

export type Tone = "tan" | "black" | "oxblood" | "green" | "grey";

const tones: Record<Tone, { base: string; light: string; dark: string; thread: string }> = {
  tan: { base: "#a8703d", light: "#c48d57", dark: "#6e4423", thread: "#efd9a6" },
  black: { base: "#2a221d", light: "#42362e", dark: "#100c0a", thread: "#c9a25b" },
  oxblood: { base: "#6a2a2a", light: "#8a3d3a", dark: "#3d1414", thread: "#e2c78f" },
  green: { base: "#2a4f43", light: "#3d6a5b", dark: "#16302a", thread: "#e2c78f" },
  grey: { base: "#6d665e", light: "#8c847a", dark: "#433e38", thread: "#e8dcc2" },
};

/**
 * Illustrated placeholder for project photography: a stitched seat panel.
 * `worn` draws cracks, fading and a lifting seam for the "before" state.
 */
export function SeatPanel({
  pattern = "diamond",
  tone = "tan",
  worn = false,
  label,
}: {
  pattern?: GalleryPattern;
  tone?: Tone;
  worn?: boolean;
  label?: string;
}) {
  const c = tones[tone];
  const id = `sp${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="size-full"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.light} />
          <stop offset="0.55" stopColor={c.base} />
          <stop offset="1" stopColor={c.dark} />
        </linearGradient>
        <radialGradient id={`${id}-p`}>
          <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-d`} width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M0 30 30 0 60 30 30 60Z" fill="none" stroke={c.thread} strokeOpacity={worn ? 0.35 : 0.85} strokeWidth="1.5" strokeDasharray="5 4" />
          <circle cx="30" cy="30" r="24" fill={`url(#${id}-p)`} />
          <circle cx="0" cy="30" r="2.4" fill={c.thread} fillOpacity={worn ? 0.4 : 0.9} />
          <circle cx="60" cy="30" r="2.4" fill={c.thread} fillOpacity={worn ? 0.4 : 0.9} />
          <circle cx="30" cy="0" r="2.4" fill={c.thread} fillOpacity={worn ? 0.4 : 0.9} />
          <circle cx="30" cy="60" r="2.4" fill={c.thread} fillOpacity={worn ? 0.4 : 0.9} />
        </pattern>
        <pattern id={`${id}-c`} width="50" height="300" patternUnits="userSpaceOnUse">
          <rect width="50" height="300" fill={`url(#${id}-p)`} opacity=".7" />
          <path d="M0 0V300" stroke={c.thread} strokeOpacity={worn ? 0.35 : 0.9} strokeWidth="1.5" strokeDasharray="6 4" />
        </pattern>
        <pattern id={`${id}-h`} width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="13" cy="13" r="3.4" fill="#000" fillOpacity=".45" />
          <circle cx="13" cy="12" r="3.4" fill="none" stroke={c.light} strokeOpacity=".5" />
        </pattern>
        <pattern id={`${id}-w`} width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 0H8M0 4H8" stroke="#fff" strokeOpacity=".12" strokeWidth="1" />
          <path d="M0 0V8M4 0V8" stroke="#000" strokeOpacity=".12" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="400" height="300" fill={`url(#${id}-g)`} />

      {(pattern === "diamond" || pattern === "swivel") && <rect width="400" height="300" fill={`url(#${id}-d)`} />}
      {pattern === "channel" && <rect width="400" height="300" fill={`url(#${id}-c)`} />}
      {pattern === "perforated" && (
        <>
          <rect x="70" y="0" width="260" height="300" fill={`url(#${id}-h)`} />
          <path d="M70 0V300M330 0V300" stroke={c.thread} strokeOpacity=".9" strokeWidth="1.6" strokeDasharray="6 4" />
        </>
      )}
      {pattern === "piping" && (
        <>
          <rect x="24" y="24" width="352" height="252" rx="18" fill="none" stroke={c.thread} strokeWidth="5" strokeOpacity=".95" />
          <rect x="38" y="38" width="324" height="224" rx="12" fill="none" stroke={c.thread} strokeOpacity=".7" strokeWidth="1.4" strokeDasharray="6 4" />
        </>
      )}
      {pattern === "weave" && <rect width="400" height="300" fill={`url(#${id}-w)`} />}
      {pattern === "plain" && (
        <>
          <path d="M40 60H360M40 240H360" stroke={c.thread} strokeOpacity=".9" strokeWidth="1.6" strokeDasharray="6 4" />
          <path d="M200 60V240" stroke={c.thread} strokeOpacity=".9" strokeWidth="1.6" strokeDasharray="6 4" />
        </>
      )}
      {pattern === "fleet" && (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${28 + i * 122} 40)`}>
              <rect width="106" height="130" rx="14" fill={c.dark} fillOpacity=".55" stroke={c.thread} strokeOpacity=".8" strokeDasharray="5 4" />
              <rect x="10" y="138" width="86" height="54" rx="10" fill={c.dark} fillOpacity=".55" stroke={c.thread} strokeOpacity=".8" strokeDasharray="5 4" />
            </g>
          ))}
        </>
      )}
      {pattern === "medical" && (
        <>
          <rect x="40" y="90" width="320" height="70" rx="26" fill={c.dark} fillOpacity=".5" stroke={c.thread} strokeOpacity=".85" strokeDasharray="6 4" strokeWidth="1.6" />
          <path d="M70 160V230M330 160V230" stroke={c.thread} strokeOpacity=".7" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {pattern === "swivel" && (
        <>
          <ellipse cx="200" cy="150" rx="120" ry="52" fill="none" stroke="#fff" strokeOpacity=".8" strokeWidth="2" strokeDasharray="3 7" />
          <path d="M292 116 320 138 288 152" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      {worn && (
        <>
          <rect width="400" height="300" fill="#e8dcc2" opacity=".2" />
          <path d="M40 90 90 118 130 104 170 150 148 190 190 224" fill="none" stroke="#000" strokeOpacity=".7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M90 118 78 156M170 150 214 146 250 176M250 176 240 214" fill="none" stroke="#000" strokeOpacity=".55" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M260 60 300 96 330 84 354 128" fill="none" stroke="#000" strokeOpacity=".6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="120" cy="240" rx="70" ry="30" fill="#e8dcc2" opacity=".28" />
          <ellipse cx="320" cy="210" rx="52" ry="24" fill="#e8dcc2" opacity=".22" />
          <path d="M200 60V150" stroke="#1a1411" strokeWidth="5" strokeDasharray="14 22" strokeOpacity=".65" />
        </>
      )}
      <rect width="400" height="300" fill="none" stroke="#000" strokeOpacity=".25" strokeWidth="6" />
    </svg>
  );
}
