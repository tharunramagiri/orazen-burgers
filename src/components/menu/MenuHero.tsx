"use client";
import Image from "next/image";

export default function MenuHero() {
  return (
    <>
      {/* Hero image section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black">
        <Image
          src="/img-webp/cheesyBurger.webp"
          alt="ORAZEN signature burger"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
      </section>
    </>
  );
}
