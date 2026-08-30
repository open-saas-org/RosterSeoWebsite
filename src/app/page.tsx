import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustBadges } from "@/components/trust-badges";
import { Pillars } from "@/components/pillars";
import { FeatureGrid } from "@/components/feature-grid";
import { Steps } from "@/components/steps";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBadges />
      <Pillars />
      <FeatureGrid />
      <Steps />
      <CtaBand />
      <Footer />
    </>
  );
}
