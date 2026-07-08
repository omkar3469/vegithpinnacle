import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #d4a843 0%, #f0c454 50%, #14387f 100%)",
        boxShadow: "0 0 12px rgba(212,168,67,0.45)",
      }}
      data-testid="scroll-progress"
    />
  );
}
