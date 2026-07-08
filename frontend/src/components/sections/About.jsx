import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ABOUT_STATS, IMAGES } from "@/data/content";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="section-pad relative"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image dominates (70%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <PlaceholderImage
              src={IMAGES.about}
              alt="Vegith Pinnacle operations"
              aspect="aspect-[4/3]"
              label="About Vegith"
              testid="about-image"
            >
              <div className="absolute left-6 bottom-6 right-6 vp-glass-strong rounded-2xl p-5">
                <p className="text-white/85 text-sm leading-relaxed font-display italic">
                  “Focus on people, and you build an empire.”
                </p>
              </div>
            </PlaceholderImage>
          </motion.div>

          {/* Copy — minimal (30%) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="overline" data-testid="about-eyebrow">
              About Vegith Pinnacle
            </div>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-white leading-[1.05]">
              Built for the <span className="vp-gold-shimmer">long haul.</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              A Vegith Group company delivering integrated manpower and facility
              solutions since 2018.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {ABOUT_STATS.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="vp-glass vp-soft-shadow rounded-2xl p-4"
                  data-testid={`about-stat-${i}`}
                >
                  <div className="font-display text-2xl md:text-3xl text-white leading-none">
                    {s.k}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/55 font-semibold">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
