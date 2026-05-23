"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || reducedMotion) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [reducedMotion]);

  if (reducedMotion || !visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border md:block"
        style={{
          borderColor: "rgba(var(--theme-accent-rgb), 0.5)",
          boxShadow: "0 0 20px var(--theme-glow)",
        }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
        style={{
          background: "var(--theme-accent)",
          boxShadow: "0 0 16px var(--theme-glow), 0 0 32px var(--theme-shadow)",
        }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.2 }}
      />
    </>
  );
}
