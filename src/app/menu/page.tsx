import type { Metadata } from "next";
import MenuExperience from "@/components/menu/MenuExperience";
import FeelItCta from "@/components/FeelItCta";

export const metadata: Metadata = {
  title: "Artisan Burger Menu | ORAZEN Burgers",
};

export default function MenuPage() {
  return (
    <>
      <MenuExperience />
      <FeelItCta />
    </>
  );
}
