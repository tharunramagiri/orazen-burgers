"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import RevealWords from "@/components/RevealWords";
import WaveDivider from "@/components/WaveDivider";

const FLIGHT_PATH =
  "M 6 3 Q 96 7 84 16 Q 58 27 40 28 Q 82 36 70 45 Q 38 56 21 66 Q 6 76 78 86 Q 102 92 50 99";

const cities = [
  { name: "Berlin", src: "/img-webp/berlin.webp", left: "80%", top: "10vw", rot: 7, labelSide: "right" as const },
  { name: "London", src: "/img-webp/london.webp", left: "34%", top: "24vw", rot: -7, labelSide: "left" as const },
  { name: "New York", src: "/img-webp/newyork.webp", left: "65%", top: "40vw", rot: 12, labelSide: "right" as const },
  { name: "Sydney", src: "/img-webp/sydney.webp", left: "14%", top: "65vw", rot: -12, labelSide: "left" as const },
  { name: "Tokyo", src: "/img-webp/tokyo.webp", left: "71%", top: "90vw", rot: 6, labelSide: "right" as const },
];

export default function TakeawaySection() {
  const zoneRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: zoneRef, offset: ["start end", "end start"] });

  const place = (p: number) => {
    const path = pathRef.current;
    const plane = planeRef.current;
    const svg = svgRef.current;
    if (!path || !plane || !svg) return;
    const rect = svg.getBoundingClientRect();
    if (!rect.width) return;
    const len = path.getTotalLength();
    const t = Math.min(1, Math.max(0, (p - 0.12) / 0.72));
    const cur = path.getPointAtLength(t * len);
    const nxt = path.getPointAtLength(Math.min(len, t * len + 0.5));
    const sx = rect.width / 100;
    const sy = rect.height / 100;
    const x = cur.x * sx;
    const y = cur.y * sy;
    const angle = (Math.atan2((nxt.y - cur.y) * sy, (nxt.x - cur.x) * sx) * 180) / Math.PI;
    plane.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${angle}deg)`;
  };

  useMotionValueEvent(scrollYProgress, "change", place);
  useEffect(() => {
    const id = requestAnimationFrame(() => place(scrollYProgress.get()));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <WaveDivider from="#f5e3cd" to="#ffd750" height="8vw" className="-mb-[1px]" />

      <section id="takeaway" className="relative overflow-hidden bg-mustard px-[3vw] pb-[2vw] pt-[1vw]">
        <motion.p
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-white px-[1.4vw] py-[.4vw] font-modak text-[2vw] uppercase leading-none text-mustard-dark max-md:text-[5vw]"
        >
          Take Away
        </motion.p>

        <RevealWords
          as="h2"
          text="Quality That Travels With You"
          className="w-[80vw] font-body text-[15vw] uppercase leading-[.85] text-white [-webkit-text-stroke:1vw_rgba(244,168,4,0.3)] max-md:w-full max-md:text-[14vw]"
          stagger={0.06}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="ml-[1vw] mt-[1vw] w-[30vw] font-body leading-[1.1] text-black text-[1.8vw] max-md:w-[90%] max-md:text-[4.2vw]"
        >
          Freshly packed smash burgers, ready to go wherever you crave. From our flat top to
          your hands, in every city we land.
        </motion.p>

        <div ref={zoneRef} className="relative mt-[4vw] h-[112vw] max-md:h-auto max-md:space-y-[6vw]">
          <svg
            ref={svgRef}
            className="absolute inset-0 h-full w-full max-md:hidden"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              ref={pathRef}
              d={FLIGHT_PATH}
              stroke="#f4a804"
              strokeWidth="2"
              strokeDasharray="9 9"
              vectorEffect="non-scaling-stroke"
              opacity="0.85"
            />
          </svg>

          <div
            ref={planeRef}
            className="absolute left-0 top-0 z-20 w-[6vw] text-red drop-shadow will-change-transform max-md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-auto w-full rotate-90">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
            </svg>
          </div>

          {cities.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0, rotate: c.rot }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
              className="absolute z-10 w-[16vw] max-md:relative max-md:left-auto max-md:top-auto max-md:mx-auto max-md:w-[55vw]"
              style={{ left: c.left, top: c.top, rotate: `${c.rot}deg` }}
            >
              <p
                className={`absolute -top-[2.4vw] z-20 font-modak text-[2vw] uppercase leading-none text-red [-webkit-text-stroke:0.34vw_var(--color-white)] max-md:text-[5vw] ${c.labelSide === "right" ? "right-0" : "left-0"}`}
                style={{ paintOrder: "stroke fill" }}
              >
                {c.name}˝
              </p>
              <div className="relative h-[19vw] w-full overflow-hidden rounded-[1vw] border-[.5vw] border-white bg-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] max-md:h-[68vw]">
                <Image src={c.src} alt={c.name} fill className="object-cover" sizes="16vw" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveDivider from="#ffd750" to="#f5e3cd" height="8vw" className="-mt-[1px]" />
    </>
  );
}
