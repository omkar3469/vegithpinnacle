import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PROCESS_STEPS } from "@/data/content";

export default function ProcessFlow() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="section-pad relative"
    >
      <div className="container-x">
        <div className="max-w-3xl mb-10">
          <div className="overline" data-testid="process-eyebrow">
            How we deliver
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-white leading-[1.05]">
            From requirement to
            <span className="vp-gold-shimmer"> ongoing support.</span>
          </h2>
        </div>
      </div>

      {/* Horizontal scroll rail — hides on mobile via wrap */}
      <div className="relative">
        <div className="container-x overflow-x-auto no-scrollbar pb-4">
          <div className="flex gap-5 min-w-max py-2 pr-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="w-[280px] md:w-[320px] shrink-0"
                data-testid={`process-step-${i + 1}`}
              >
                <PlaceholderImage
                  src={step.img}
                  alt={step.title}
                  aspect="aspect-[4/5]"
                  label={`Step ${String(i + 1).padStart(2, "0")}`}
                >
                  <div className="absolute left-5 right-5 bottom-5 text-white">
                    <h3 className="font-display text-2xl leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-white/85 text-sm">{step.tagline}</p>
                  </div>
                </PlaceholderImage>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:flex items-center justify-center mt-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#d4a843]/60 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
