import type { Metadata } from "next";
import SpicesHero from "@/components/spices/SpicesHero";
import IngredientsSection from "@/components/spices/IngredientsSection";
import PhilosophySection from "@/components/spices/PhilosophySection";

export const metadata: Metadata = {
  title: "Our Spices & Ingredients | ORAZEN Burgers",
};

export default function SpicesPage() {
  return (
    <>
      <SpicesHero />
      <IngredientsSection />
      <PhilosophySection />
    </>
  );
}
