import type { Metadata } from "next";
import MenuHero from "@/components/menu/MenuHero";
import BurgerGrid from "@/components/menu/BurgerGrid";

export const metadata: Metadata = {
  title: "Artisan Burger Menu | ORAZEN Burgers",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <BurgerGrid />
    </>
  );
}
