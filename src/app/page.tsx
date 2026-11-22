import { Hero } from "@/components/hero";
import { TrustBadges } from "@/components/trust-badges";
import { Pillars } from "@/components/pillars";
import { FeatureGrid } from "@/components/feature-grid";
import { ProductTour } from "@/components/product-tour";
import { Steps } from "@/components/steps";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Pillars />
      <FeatureGrid />
      <ProductTour />
      <Steps />
      <CtaBand />
    </>
  );
}
