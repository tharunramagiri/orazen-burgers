import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-beige">
      {/* Floating ingredient images behind text */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_30%_20%,rgba(249,24,20,.8),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(255,215,80,.9),transparent_45%)]" />
        <img
          src="/img-webp/lettuce.webp"
          alt=""
          className="absolute bottom-0 select-none will-change-transform animate-float"
          style={{ left: "18%", width: "10vw" }}
        />
        <img
          src="/img-webp/tomato.webp"
          alt=""
          className="absolute bottom-0 select-none will-change-transform animate-float"
          style={{ left: "38%", width: "8vw" }}
        />
        <img
          src="/img-webp/cheese-logo.webp"
          alt=""
          className="absolute bottom-0 select-none will-change-transform animate-float"
          style={{ left: "62%", width: "11vw" }}
        />
        <img
          src="/img-webp/meat.webp"
          alt=""
          className="absolute bottom-0 select-none will-change-transform animate-float"
          style={{ left: "84%", width: "12vw" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center gap-[2vw] max-md:gap-[6vw] px-[4vw]">
        <div className="flex flex-col items-center text-center gap-[.9vw] max-md:gap-[3vw] max-w-[62vw] max-md:max-w-[92vw]">
          {/* "uh-oh" eyebrow */}
          <p className="text-mustard-dark -rotate-7 uppercase font-modak leading-[.9] text-[2.6vw] max-md:text-[6vw]"
            style={{ WebkitTextStroke: "0.34vw var(--color-white)", paintOrder: "stroke fill" }}
          >
            uh-oh
          </p>

          {/* 404 giant number */}
          <h1 className="text-red uppercase leading-[.85] max-md:leading-[.9] max-md:text-[18vw] font-body text-[15vw] mx-auto"
            style={{ WebkitTextStroke: "1vw var(--color-white)", paintOrder: "stroke fill" }}
          >
            <span className="sr-only">404</span>
            <span aria-hidden="true">
              <span className="inline-block will-change-transform">4</span>
              <span className="inline-block will-change-transform">0</span>
              <span className="inline-block will-change-transform">4</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-[1.8vw] leading-[1.1] max-md:text-[4.2vw] w-[30vw] max-md:w-full uppercase font-body text-ink/80">
            Looks like you found a secret item.<br />
            Not much here :) Slide back to the main course and feast on some real burgers!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-[.8vw] max-md:gap-[3vw] w-full max-w-[62vw] max-md:max-w-[92vw]">
          <Link
            href="/"
            className="font-body uppercase tracking-wide text-[1.05vw] max-md:text-[4vw] bg-mustard text-ink px-[1.6vw] py-[.75vw] max-md:px-[6vw] max-md:py-[2.6vw] rounded-full hover:bg-ink hover:text-beige transition-all duration-300 ease-out"
          >
            Back home
          </Link>
          <Link
            href="/menu"
            className="font-body uppercase tracking-wide text-[1.05vw] max-md:text-[4vw] border border-black/20 text-ink px-[1.6vw] py-[.75vw] max-md:px-[6vw] max-md:py-[2.6vw] rounded-full hover:bg-ink hover:text-beige hover:border-ink transition-all duration-300 ease-out"
          >
            Open menu
          </Link>
          <Link
            href="/contact"
            className="font-body uppercase tracking-wide text-[1.05vw] max-md:text-[4vw] border border-black/20 text-ink px-[1.6vw] py-[.75vw] max-md:px-[6vw] max-md:py-[2.6vw] rounded-full hover:bg-ink hover:text-beige hover:border-ink transition-all duration-300 ease-out"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
