import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/content";

/**
 * Testimonials — 3-column staggered grid of dark cards
 * (CSS multi-column layout balances heights naturally).
 * Small quote → avatar row with name + @handle.
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="section-pad relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(37,99,235,0.55), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,168,67,0.55), transparent 70%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div
            className="text-[13px] font-semibold text-[#7aa2ff] tracking-wide"
            data-testid="testimonials-eyebrow"
          >
            Testimonials
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
            We have worked with
            <br />
            <span className="vp-gold-shimmer">thousands of amazing people</span>
          </h2>
        </div>

        {/* Multi-column staggered grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
          data-testid="testimonials-grid"
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.handle} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="break-inside-avoid rounded-2xl p-6 mb-5 md:mb-6 border border-white/10 transition-all hover:border-[#d4a843]/40"
      style={{
        background:
          "linear-gradient(160deg, rgba(20,29,52,0.85) 0%, rgba(11,20,42,0.85) 100%)",
        boxShadow:
          "0 20px 40px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
      data-testid={`testimonial-card-${i}`}
    >
      <p className="text-white/80 text-[15px] leading-relaxed">
        “{t.quote}”
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative shrink-0">
          <img
            src={t.avatar}
            alt=""
            loading="lazy"
            className="w-11 h-11 rounded-full object-cover border border-white/10"
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.35)" }}
          />
        </div>
        <div className="min-w-0">
          <div
            className="text-white font-semibold text-[15px] truncate"
            data-testid={`testimonial-name-${i}`}
          >
            {t.author}
          </div>
          <div className="text-[#7aa2ff] text-sm truncate">
            @{t.handle}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
