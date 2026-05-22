"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  words: string[];
}

export function TypingAnimation({ words }: TypingAnimationProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (display.length < word.length) {
            setDisplay(word.slice(0, display.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          if (display.length > 0) {
            setDisplay(display.slice(0, -1));
          } else {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [display, deleting, index, words]);

  return (
    <span className="gradient-text font-semibold">
      {display}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-[1em] w-0.5 align-middle bg-lime-400 shadow-[0_0_6px_#57ff1a]"
      />
    </span>
  );
}
