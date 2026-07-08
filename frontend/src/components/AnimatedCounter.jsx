import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * AnimatedCounter — counts up from 0 to `value` when scrolled into view.
 * Supports plain numbers (e.g. 500, 1200) and formatted strings via `suffix` / `prefix`.
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
  className = "",
  testid,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const from = 0;
    const to = Number(value) || 0;
    let raf = 0;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const v = Math.round(from + (to - from) * eased);
      setDisplay(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      data-testid={testid}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
