/** A maker's stamp: circular lettering around a stitched diamond. */
export function StampSeal({ size = 300 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }} role="img" aria-label="Since the 1950s. Three generations of craftsmanship. Mumbai.">
      <svg viewBox="0 0 300 300" width={size} height={size} className="absolute inset-0 animate-[spin_60s_linear_infinite]" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M150,150 m-112,0 a112,112 0 1,1 224,0 a112,112 0 1,1 -224,0" />
        </defs>
        <circle cx="150" cy="150" r="146" fill="none" stroke="#b15a2b" strokeOpacity=".55" strokeWidth="1.5" strokeDasharray="7 6" />
        <circle cx="150" cy="150" r="90" fill="none" stroke="#b15a2b" strokeOpacity=".35" strokeWidth="1" />
        <text fill="#d98a57" fontSize="15" fontWeight="600" style={{ textTransform: "uppercase" }}>
          <textPath href="#seal-circle" startOffset="0" textLength="696" lengthAdjust="spacing">
            Since the 1950s · Three Generations · Mumbai ·
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 300 300" width={size} height={size} className="absolute inset-0" aria-hidden="true">
        <path d="M150 76 224 150 150 224 76 150Z" fill="#b15a2b" />
        <path d="M150 88 212 150 150 212 88 150Z" fill="none" stroke="#17130f" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="150" y="148" textAnchor="middle" fill="#17130f" fontSize="34" fontWeight="600" fontFamily="var(--font-fraunces), serif">
          3
        </text>
        <text x="150" y="170" textAnchor="middle" fill="#17130f" fontSize="9.5" fontWeight="700" letterSpacing="1.6">
          GENERATIONS
        </text>
      </svg>
    </div>
  );
}
