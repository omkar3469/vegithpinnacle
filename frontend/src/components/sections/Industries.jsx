import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { INDUSTRIES } from "@/data/content";

export default function Industries() {
  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="section-pad relative"
    >
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="overline" data-testid="industries-eyebrow">
              Industries We Serve
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-white leading-[1.05]">
              Across the industries that
              <span className="vp-gold-shimmer"> move India.</span>
            </h2>
          </div>
          <span className="text-white/50 text-sm uppercase tracking-[0.24em]">
            {INDUSTRIES.length} verticals
          </span>
        </div>

        {/* Bento-style image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {INDUSTRIES.map((ind, i) => {
            // Feature every 5th tile larger for editorial feel
            const wide = i === 0 || i === 5;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                whileHover={{ y: -6 }}
                className={wide ? "md:col-span-2 md:row-span-1" : ""}
                data-testid={`industry-${i}`}
              >
                <PlaceholderImage
                  src={ind.img}
                  alt={ind.name}
                  aspect={wide ? "aspect-[16/9]" : "aspect-[4/5]"}
                >
                  <div className="absolute left-4 right-4 bottom-4 text-white">
                    <h3 className="font-display text-xl md:text-2xl leading-tight">
                      {ind.name}
                    </h3>
                  </div>
                </PlaceholderImage>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
