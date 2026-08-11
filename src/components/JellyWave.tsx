"export default function JellyWave({ color = "#f91814", opacity = 0.15 }: { color?: string; opacity?: number }) {
  return (
    <div className="z-10 w-full absolute left-0 right-0 top-0 overflow-x-clip pointer-events-none">
      <svg
        className="block w-full max-w-[100vw] h-[120px] sm:h-[180px]"
        width="100%"
        viewBox="0 0 1536 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M1536,0 H-1 V135 S184.32,65 460.8,155 S860.16,105 1121.28,137 S1413.12,105 1536,105 V0"
          fill={color}
          opacity={opacity}
        />
        <path
          d="M1536,105 C1413.12,105 1121.28,137 860.16,105 C614.4,77 384,140 153.6,100 L-1,135 V300 H1536 Z"
          fill={color}
          opacity={opacity * 0.5}
        />
      </svg>
    </div>
  );
}
