import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { NoLockIn } from "@/components/landing/no-lock-in";
import { SafeByDefault } from "@/components/landing/safe-by-default";
import { CtaBand } from "@/components/landing/cta-band";
import { Footer } from "@/components/landing/footer";

// Full proposed redesign, matching design/landing/index.html — see that
// file's .design-note for what's real vs. still-proposed in this copy.
export default function LandingPage() {
  return (
    <>
      <div className="mkt-bg" aria-hidden="true">
        <div className="mkt-grain" />
      </div>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <NoLockIn />
        <SafeByDefault />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
