export default function FloatingVeggies() {
  const veggies = [
    { src: "/img-webp/lettuce-sticker.png", className: "juggle-lettuce" },
    { src: "/img-webp/tomato-sticker.png", className: "juggle-tomato" },
    { src: "/img-webp/cheese-sticker.png", className: "juggle-cheese" },
    { src: "/img-webp/patty.png", className: "juggle-meat" },
  ];

  return (
    <div className="absolute inset-x-0 bottom-[6vw] sm:bottom-[8vw] h-0 z-20 flex justify-around pointer-events-none px-[8vw] sm:px-[10vw]">
      {veggies.map((veg, i) => (
        <img
          key={veg.className}
          src={veg.src}
          alt=""
          className="w-[10vw] sm:w-[11vw] h-auto object-contain"
          style={{
            animation: `${veg.className} 4s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
          draggable={false}
        />
      ))}
    </div>
  );
}
