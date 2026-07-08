import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { OFFICES } from "@/data/content";

/**
 * Interactive stylised India map (SVG) — 3 animated markers pointing to
 * Mumbai, Bhiwandi and Kolkata. Hovering a marker highlights the office card
 * on the right (and vice versa). This is a stylised silhouette — swap with a
 * more detailed SVG later if desired.
 */
export default function Presence() {
  const [active, setActive] = useState(OFFICES[0].city);

  return (
    <section
      id="presence"
      data-testid="presence-section"
      className="section-pad relative"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-10">
          <div className="overline" data-testid="presence-eyebrow">
            PAN India Presence
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-white leading-[1.05]">
            Three offices.
            <span className="vp-gold-shimmer"> One nation covered.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* MAP — 60% */}
          <div className="lg:col-span-7">
            <div
              className="relative aspect-[4/5] md:aspect-[5/6] rounded-[28px] overflow-hidden vp-soft-shadow"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.28) 0%, transparent 55%), radial-gradient(circle at 70% 80%, rgba(212,168,67,0.22) 0%, transparent 55%), linear-gradient(160deg, #0b1d3a 0%, #06132a 60%, #060d1e 100%)",
                boxShadow:
                  "0 30px 80px -20px rgba(11,29,58,0.2), inset 0 0 0 1px rgba(255,255,255,0.7)",
              }}
              data-testid="india-map"
            >
              <svg
                viewBox="0 0 400 480"
                className="absolute inset-0 w-full h-full p-6 md:p-12"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="mapFill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#14387f" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0b1d3a" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="mapStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d4a843" />
                    <stop offset="100%" stopColor="#f0c454" />
                  </linearGradient>
                </defs>

                {/* Stylised India silhouette (simplified path) */}
                <path
                  d="M 170 40
                     C 205 50, 235 60, 260 78
                     C 285 95, 295 118, 300 140
                     C 310 175, 330 200, 340 225
                     C 348 250, 335 275, 310 285
                     C 305 300, 300 320, 285 340
                     C 275 360, 250 372, 235 385
                     C 220 405, 200 430, 190 445
                     C 178 455, 168 445, 172 425
                     C 176 405, 160 385, 145 370
                     C 130 355, 115 340, 105 320
                     C 95 305, 90 290, 92 275
                     C 96 260, 102 250, 100 235
                     C 92 210, 78 190, 75 165
                     C 72 140, 88 118, 105 100
                     C 122 78, 145 55, 170 40 Z"
                  fill="url(#mapFill)"
                  stroke="url(#mapStroke)"
                  strokeWidth="1.5"
                  opacity="0.95"
                />

                {/* Sri Lanka */}
                <ellipse
                  cx="215"
                  cy="470"
                  rx="12"
                  ry="8"
                  fill="url(#mapFill)"
                  opacity="0.6"
                />

                {/* Grid dots overlay */}
                <g opacity="0.15">
                  {Array.from({ length: 18 }).map((_, r) =>
                    Array.from({ length: 12 }).map((__, c) => (
                      <circle
                        key={`${r}-${c}`}
                        cx={70 + c * 22}
                        cy={60 + r * 22}
                        r="0.8"
                        fill="#f0c454"
                      />
                    ))
                  )}
                </g>

                {/* Leader lines for offset markers */}
                {OFFICES.filter((o) => o.anchorX !== undefined).map((o) => (
                  <line
                    key={`leader-${o.city}`}
                    x1={o.anchorX}
                    y1={o.anchorY}
                    x2={o.x}
                    y2={o.y}
                    stroke="#f0c454"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    opacity="0.7"
                  />
                ))}

                {/* Markers */}
                {OFFICES.map((o) => (
                  <g
                    key={o.city}
                    onMouseEnter={() => setActive(o.city)}
                    onClick={() => setActive(o.city)}
                    className="cursor-pointer"
                    data-testid={`map-marker-${o.city.toLowerCase()}`}
                  >
                    {/* Anchor dot for offset markers (small, visual only) */}
                    {o.anchorX !== undefined && (
                      <circle
                        cx={o.anchorX}
                        cy={o.anchorY}
                        r="3"
                        fill="#f0c454"
                        opacity="0.65"
                        style={{ pointerEvents: "none" }}
                      />
                    )}

                    <circle
                      cx={o.x}
                      cy={o.y}
                      r={active === o.city ? 22 : 16}
                      fill="#f0c454"
                      opacity="0.2"
                      className="transition-all"
                      style={{ pointerEvents: "none" }}
                    >
                      <animate
                        attributeName="r"
                        values={`${active === o.city ? 22 : 16};${
                          active === o.city ? 30 : 22
                        };${active === o.city ? 22 : 16}`}
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.35;0.05;0.35"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={o.x}
                      cy={o.y}
                      r={active === o.city ? 8 : 6}
                      fill="#f0c454"
                      stroke="#0b1d3a"
                      strokeWidth="1.5"
                    />
                    <text
                      x={o.x + 14}
                      y={o.y + 4}
                      fill="#f0c454"
                      fontSize="13"
                      fontWeight="700"
                      letterSpacing="1"
                      style={{ pointerEvents: "none" }}
                    >
                      {o.city.toUpperCase()}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="absolute top-5 left-5 vp-glass-strong rounded-full px-3 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f0c454] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-white font-bold">
                  Live Offices
                </span>
              </div>
            </div>
          </div>

          {/* OFFICE DETAILS — 40% */}
          <div className="lg:col-span-5 space-y-4">
            {OFFICES.map((o, i) => {
              const isActive = active === o.city;
              return (
                <motion.button
                  key={o.city}
                  type="button"
                  onMouseEnter={() => setActive(o.city)}
                  onFocus={() => setActive(o.city)}
                  onClick={() => setActive(o.city)}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`w-full text-left rounded-2xl p-5 md:p-6 border transition-all ${
                    isActive
                      ? "text-white shadow-xl"
                      : "vp-glass border-white/10 hover:border-[#d4a843]"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, #0b1d3a 0%, #14387f 60%, #1e3a8a 100%)",
                          boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.55)",
                        }
                      : {}
                  }
                  data-testid={`office-card-${o.city.toLowerCase()}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? "bg-[#f0c454] text-white" : "text-white"
                      }`}
                      style={
                        !isActive
                          ? {
                              background:
                                "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
                            }
                          : {}
                      }
                    >
                      <MapPin size={18} />
                    </span>
                    <div className="flex-1">
                      <div
                        className={`text-[10px] uppercase tracking-[0.24em] font-bold ${
                          isActive ? "text-[#f0c454]" : "text-[#d4a843]"
                        }`}
                      >
                        {o.role}
                      </div>
                      <div
                        className={`font-display text-2xl md:text-3xl mt-1 ${
                          isActive ? "text-white" : "text-white"
                        }`}
                      >
                        {o.city}
                      </div>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          isActive ? "text-white/80" : "text-white/65"
                        }`}
                      >
                        {o.address}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
