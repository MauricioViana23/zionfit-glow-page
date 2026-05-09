import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar } from "@/components/zionfit/TopBar";
import { HeroSection } from "@/components/zionfit/HeroSection";
import { ProblemSection } from "@/components/zionfit/ProblemSection";
import { BenefitsSection } from "@/components/zionfit/BenefitsSection";
import { HowItWorksPhases } from "@/components/zionfit/HowItWorksPhases";
import { HowToUse } from "@/components/zionfit/HowToUse";
import { IngredientsSection } from "@/components/zionfit/IngredientsSection";

import { SocialProofNumbers } from "@/components/zionfit/SocialProofNumbers";
import { TestimonialsSection } from "@/components/zionfit/TestimonialsSection";
import { ComparisonTable } from "@/components/zionfit/ComparisonTable";
import { FAQSection } from "@/components/zionfit/FAQSection";
import { FinalCTA } from "@/components/zionfit/FinalCTA";
import { Footer } from "@/components/zionfit/Footer";
import { StickyBar } from "@/components/zionfit/StickyBar";

export const Route = createFileRoute("/")({
  component: ZionFitPage,
});

function ZionFitPage() {
  const [selectedBundle, setSelectedBundle] = useState(2);

  return (
    <>
      <TopBar />
      <HeroSection selectedBundle={selectedBundle} onBundleChange={setSelectedBundle} />
      <ProblemSection />
      <BenefitsSection />
      <HowItWorksPhases />
      <HowToUse />
      <IngredientsSection />
      
      <SocialProofNumbers />
      <TestimonialsSection />
      <ComparisonTable />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyBar selectedBundle={selectedBundle} />
    </>
  );
}
