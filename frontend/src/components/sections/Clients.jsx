import { motion } from "framer-motion";
import { CLIENT_TAGS } from "@/data/content";

/**
 * Animated logo wall — until real client logos are approved,
 * we use a continuously scrolling premium tag marquee.
 */
export default function Clients() {
  const doubled = [...CLIENT_TAGS, ...CLIENT_TAGS];
  return (
    <section
      id="clients"
      data-testid="clients-section"
      className="section-pad relative"
    >
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <div className="overline" data-testid="clients-eyebrow">
            Our Clients
          </div>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-white leading-[1.05]">
            Trusted by
            <span className="vp-gold-shimmer"> ambitious brands.</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{
            background: "linear-gradient(90deg, #060d1e 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{
            background: "linear-gradient(270deg, #060d1e 0%, transparent 100%)",
          }}
        />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 whitespace-nowrap"
          data-testid="clients-marquee"
        >
          {doubled.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="vp-glass vp-soft-shadow rounded-2xl px-6 py-4 border border-white/10 flex items-center gap-3 shrink-0"
              data-testid={`client-tag-${i}`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "linear-gradient(135deg,#d4a843,#f0c454)" }}
              />
              <span className="text-white font-semibold text-sm tracking-wide">
                {c}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-x mt-8">
        <p className="text-white/45 text-sm italic">
          Client references available on request under NDA.
        </p>
      </div>
    </section>
  );
}
