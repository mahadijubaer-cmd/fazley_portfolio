"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  as?: "div" | "li";
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: AnimatedRevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = direction === "up" ? { y: 24 } : direction === "left" ? { x: -24 } : { x: 24 };

  const sharedProps = {
    className,
    initial: reduceMotion ? false : { opacity: 0, ...offset },
    whileInView: reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.14 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (as === "li") return <motion.li {...sharedProps}>{children}</motion.li>;
  return <motion.div {...sharedProps}>{children}</motion.div>;
}
