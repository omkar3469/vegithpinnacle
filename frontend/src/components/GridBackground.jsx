import React from "react";

/**
 * Dark premium background: fixed grid + animated navy/gold/blue glow blobs
 * + subtle aurora sweep. Sits behind all content, non-interactive.
 */
export default function GridBackground() {
  return (
    <>
      <div className="vp-grid-bg" aria-hidden="true" />
      <div className="vp-aurora" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="vp-glow-blob"
          style={{
            width: 620,
            height: 620,
            top: "-160px",
            left: "-160px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(20,56,127,0) 70%)",
          }}
        />
        <div
          className="vp-glow-blob"
          style={{
            width: 560,
            height: 560,
            bottom: "-180px",
            right: "-120px",
            background:
              "radial-gradient(circle, rgba(212,168,67,0.45) 0%, rgba(212,168,67,0) 70%)",
            animationDelay: "3s",
          }}
        />
        <div
          className="vp-glow-blob"
          style={{
            width: 420,
            height: 420,
            top: "38%",
            left: "55%",
            background:
              "radial-gradient(circle, rgba(20,56,127,0.55) 0%, rgba(20,56,127,0) 70%)",
            animationDelay: "6s",
          }}
        />
        <div
          className="vp-glow-blob"
          style={{
            width: 320,
            height: 320,
            top: "72%",
            left: "8%",
            background:
              "radial-gradient(circle, rgba(240,196,84,0.28) 0%, rgba(240,196,84,0) 70%)",
            animationDelay: "9s",
          }}
        />
      </div>
    </>
  );
}
