import { Link } from "react-router-dom";
import { PrimaryButton } from "@/components/PremiumButton";

export default function NotFoundPage() {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center pt-32 pb-24"
      data-testid="notfound-page"
    >
      <div className="container-x text-center">
        <div className="overline">404 · Not Found</div>
        <h1 className="font-display text-6xl md:text-8xl mt-4 text-white leading-none">
          Off the <span className="vp-gold-shimmer">grid.</span>
        </h1>
        <p className="mt-6 text-white/70 text-lg max-w-md mx-auto">
          The page you&apos;re looking for isn&apos;t here — but we&apos;ll get
          you back on track.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryButton href="/" testid="notfound-cta">
            Back to Home
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
