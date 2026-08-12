import type { Metadata } from "next";
import MenuHero from "@/components/menu/MenuHero";
import BurgerGrid from "@/components/menu/BurgerGrid";

export const metadata: Metadata = {
  title: "Artisan Burger Menu | Crazy Smash",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <BurgerGrid />
    </>
  );
}
