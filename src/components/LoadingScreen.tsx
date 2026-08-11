"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let val = 0;
    const interval = setInterval(() => {
      val += 4;
      if (val >= 100) {
        val = 100;
        clearInterval(interval);
        setTimeout(() => setVisible(false), 400);
      }
      setProgress(val);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#4c0016] select-none overflow-hidden"
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Layered color slides */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: progress > 60 ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#EF6F2E] z-10"
        />
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: progress > 85 ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#f91814] z-20"
        />

        {/* Spinning burger boy */}
        <div className="relative z-30 flex flex-col items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="w-[180px] h-[180px] max-md:w-[140px] max-md:h-[140px]"
          >
            <img
              src="/img/burger-boy.png"
              alt="Spinning ORAZEN logo"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </motion.div>
          <div className="mt-8 font-body text-2xl tracking-widest text-[#f5e3cd] text-center px-4">
            PREPARING ARTISAN KITCHEN...
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-white/10 z-30">
          <div
            className="h-full bg-[#f4a804] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
