import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Premium animated buttons — gradient navy→blue with gold inner border,
 * magnetic hover, arrow slide.
 */
export function PrimaryButton({
  children,
  onClick,
  testid,
  className = "",
  type = "button",
  disabled,
  href,
}) {
  const inner = (
    <motion.span
      whileHover={disabled ? {} : { scale: 1.03, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide text-white overflow-hidden ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      } ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #0b1d3a 0%, #14387f 60%, #2563eb 100%)",
        boxShadow:
          "0 18px 40px -12px rgba(11,29,58,0.45), inset 0 0 0 1px rgba(212,168,67,0.55)",
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(240,196,84,0.4) 0%, transparent 60%)",
        }}
      />
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} data-testid={testid} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      data-testid={testid}
      disabled={disabled}
      className="bg-transparent border-0 p-0 m-0"
    >
      {inner}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  testid,
  className = "",
  href,
}) {
  const inner = (
    <motion.span
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide text-white vp-glass border border-white/15 hover:border-[#d4a843] transition-colors ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} data-testid={testid} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testid}
      className="bg-transparent border-0 p-0 m-0"
    >
      {inner}
    </button>
  );
}
