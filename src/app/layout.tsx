import type { Metadata } from "next";
import { Modak, Mouse_Memoirs } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import VeggieTrail from "@/components/VeggieTrail";

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-modak",
  display: "swap",
});

const mouseMemoirs = Mouse_Memoirs({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mouse-memoirs",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORAZEN | Artisan Smashed Burgers",
  description:
    "Smashed hot on the flat top, topped with melted cheddar and our signature chili honey glaze. Built & redesigned by orazen.online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${modak.variable} ${mouseMemoirs.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-beige text-ink antialiased">
        <LoadingScreen />
        <VeggieTrail />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
