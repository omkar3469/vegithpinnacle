import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { WHY_US } from "@/data/content";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="section-pad relative"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <div className="overline" data-testid="why-us-eyebrow">
            Why Vegith Pinnacle
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-white leading-[1.05]">
            Six reasons enterprises
            <span className="vp-gold-shimmer"> stay with us.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative"
              data-testid={`why-us-card-${i}`}
            >
              <PlaceholderImage
                src={f.img}
                alt={f.title}
                aspect="aspect-[4/5]"
                label={`0${i + 1}`}
                overlay="gradient"
              >
                <div className="absolute left-5 right-5 bottom-5 text-white">
                  <h3 className="font-display text-2xl leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-white/85 text-sm">{f.tagline}</p>
                </div>
              </PlaceholderImage>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
