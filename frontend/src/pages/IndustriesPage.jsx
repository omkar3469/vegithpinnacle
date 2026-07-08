import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { INDUSTRIES, IMAGES } from "@/data/content";

// Add a few extra industries to feel like the Unify "10-industry" grid
const EXTRA = [
  {
    name: "Data Centres",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BFSI",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pharmaceutical",
    img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Real Estate",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];
const ALL = [...INDUSTRIES, ...EXTRA];

export default function IndustriesPage() {
  return (
    <div data-testid="industries-page">
      <PageHero
        eyebrow="Industries We Serve"
        title="Integrated workplace solutions"
        titleGold="across every vertical."
        tagline="From data centres to hospitality — the same operating standard, every time."
        breadcrumbs={[{ label: "Industries" }]}
        image={IMAGES.facility}
        testid="industries-hero"
      />

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {ALL.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                whileHover={{ y: -6 }}
                data-testid={`industry-${i}`}
              >
                <PlaceholderImage
                  src={ind.img}
                  alt={ind.name}
                  aspect="aspect-[4/5]"
                >
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white">
                    <h3 className="font-display text-xl md:text-2xl leading-tight">
                      {ind.name}
                    </h3>
                  </div>
                </PlaceholderImage>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
