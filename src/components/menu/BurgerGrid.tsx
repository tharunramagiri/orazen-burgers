"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const burgers = [
  {
    id: 1,
    name: "Classic Burger",
    price: 16,
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    prepTime: "10–12 min",
    calories: 720,
    protein: 32,
    image: "/img-webp/burgerH.webp",
    description: "The original ORAZEN smash — perfectly seared patty, melted cheddar, crispy edges.",
  },
  {
    id: 2,
    name: "Spicy Jalapeño",
    price: 18,
    bun: "Brioche",
    patty: "Beef",
    spice: "Hot",
    prepTime: "12–14 min",
    calories: 810,
    protein: 34,
    image: "/img-webp/cheesyBurger.webp",
    description: "Fiery jalapeños, pepper jack cheese, chipotle mayo on a toasted brioche.",
  },
  {
    id: 3,
    name: "Bacon Cheese Burger",
    price: 21,
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    prepTime: "12–15 min",
    calories: 900,
    protein: 37,
    image: "/img-webp/burgerwithhands.webp",
    description: "Crispy smoked bacon, double cheddar, caramelized onions, smoky sauce.",
  },
  {
    id: 4,
    name: "Veggie Delight",
    price: 15,
    bun: "Sesame",
    patty: "Veggie",
    spice: "Mild",
    prepTime: "10–12 min",
    calories: 620,
    protein: 17,
    image: "/img-webp/burgerH.webp",
    description: "House-made veggie patty, roasted peppers, avocado cream, micro herbs.",
  },
  {
    id: 5,
    name: "BBQ Ranch",
    price: 19,
    bun: "Brioche",
    patty: "Beef",
    spice: "Medium",
    prepTime: "12–14 min",
    calories: 870,
    protein: 36,
    image: "/img-webp/cheesyBurger.webp",
    description: "Smoky BBQ glaze, house ranch, crispy onion strings, cheddar.",
  },
  {
    id: 6,
    name: "Mushroom Swiss",
    price: 20,
    bun: "Brioche",
    patty: "Beef",
    spice: "Mild",
    prepTime: "12–14 min",
    calories: 830,
    protein: 33,
    image: "/img-webp/burgerwithhands.webp",
    description: "Sautéed wild mushrooms, Swiss cheese, truffle aioli, fresh thyme.",
  },
];

const spiceColor: Record<string, string> = {
  Hot: "bg-red text-beige",
  Medium: "bg-mustard-dark text-white",
  Mild: "bg-green text-white",
};

export default function BurgerGrid() {
  return (
    <section className="relative bg-beige px-[3vw] pb-[6vw] pt-[3vw]">
      {/* Heading */}
      <div className="mb-[4vw] text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block -rotate-3 rounded-full bg-mustard px-[1.4vw] py-[.4vw] font-modak text-[2vw] uppercase leading-none text-red max-md:text-[5vw]"
        >
          The Best
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-[1vw] w-[80%] font-body text-[12vw] uppercase leading-[.78] text-red max-md:w-full max-md:text-[15vw]"
          style={{
            WebkitTextStroke: "1vw var(--color-white)",
            paintOrder: "stroke fill",
          }}
        >
          Our Finest Burger Picks
        </motion.h1>
      </div>

      {/* Cards grid */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-3 gap-[2vw] max-md:grid-cols-1">
        {burgers.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-[1.4vw] border-[.4vw] border-white bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] max-md:rounded-[4vw]"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={b.image}
                alt={b.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <span
                className={`absolute right-[1vw] top-[1vw] rounded-full px-[1.2vw] py-[.3vw] font-body text-[1vw] uppercase tracking-[.1em] ${spiceColor[b.spice]} max-md:text-[3vw]`}
              >
                {b.spice}
              </span>
            </div>

            {/* Info */}
            <div className="bg-beige p-[1.6vw] max-md:p-[5vw]">
              <div className="flex items-baseline justify-between">
                <h3 className="font-modak text-[2.2vw] uppercase leading-none text-red max-md:text-[7vw]">
                  {b.name}
                </h3>
                <span className="font-modak text-[2vw] text-ink max-md:text-[6vw]">
                  ${b.price}
                </span>
              </div>
              <p className="mt-[.6vw] font-body text-[1.05vw] leading-[1.15] text-ink/70 max-md:text-[3.5vw]">
                {b.description}
              </p>
              <div className="mt-[1vw] flex gap-[1.2vw] font-body text-[.95vw] uppercase text-ink/60 max-md:text-[3vw]">
                <span>
                  <strong className="text-ink">{b.calories}</strong> cal
                </span>
                <span>
                  <strong className="text-ink">{b.protein}g</strong> protein
                </span>
                <span>
                  <strong className="text-ink">{b.prepTime}</strong>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Burger boy decoration */}
      <div className="pointer-events-none absolute -right-6 bottom-0 hidden w-40 opacity-90 lg:block xl:-right-2 xl:w-52">
        <Image
          src="/img/burger-boy.png"
          alt=""
          width={400}
          height={412}
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
