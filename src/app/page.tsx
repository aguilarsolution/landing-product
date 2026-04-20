import CTASection from "@/components/app/sections/cta";
import Features from "@/components/app/sections/features";
import Hero from "@/components/app/sections/hero";
import HowItWorks from "@/components/app/sections/howItWorks";
import LogosBar from "@/components/app/sections/logosBar";
import Pricing from "@/components/app/sections/pricing";
export default function Home() {
  return (
    <main className="dark:bg-dark max-w-300 mx-auto">
      <Hero></Hero>
      <LogosBar></LogosBar>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Pricing></Pricing>
      <CTASection></CTASection>
    </main>
  );
}
