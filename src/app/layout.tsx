import type { Metadata } from "next";
import { Modak, Mouse_Memoirs } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ToastProvider from "@/components/Toast";
import Footer from "@/components/Footer";

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
  title: "ORAZEN — Smashed Fresh. Bold Flavor.",
  description:
    "Smashed patties · toasted buns. 100% Organic. Zero Guilt. Built & redesigned by orazen.online.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ORAZEN",
  },
  openGraph: {
    title: "ORAZEN — Smashed Fresh. Bold Flavor.",
    description: "Smashed for the bold, built for the hungry.",
    images: ["/img-webp/burgerH.webp"],
  },
  themeColor: "#f91814",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${modak.variable} ${mouseMemoirs.variable}`}>
      <body>
        <LoadingScreen />
        <ToastProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </ToastProvider>
      </body>
    </html>
  );
}
