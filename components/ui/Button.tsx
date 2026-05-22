"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const base = "relative h-11";

  const variants = {
    primary: "btn-cyber-primary btn-shine",
    secondary: "btn-cyber-secondary",
    ghost: "btn-cyber-ghost",
  };

  const classes = cn(base, variants[variant], disabled && "opacity-50 pointer-events-none", className);

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
