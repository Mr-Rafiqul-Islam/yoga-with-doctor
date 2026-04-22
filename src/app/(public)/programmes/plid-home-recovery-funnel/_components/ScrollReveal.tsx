"use client";

import { motion, useReducedMotion } from "motion/react";

type ScrollRevealProps = {
  as?: "section" | "div" | "footer" | "header" | "aside";
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds (optional) */
  delay?: number;
  id?: string;
};

const viewport = {
  once: true,
  amount: 0.12 as const,
  margin: "0px 0px -10% 0px",
};

export function ScrollReveal({
  as = "section",
  children,
  className,
  delay = 0,
  id,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const };

  const initial = reduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 32, scale: 0.985 };
  const animateIn = { opacity: 1, y: 0, scale: 1 };

  const common = {
    className,
    id,
    initial,
    whileInView: animateIn,
    viewport,
    transition,
  };

  switch (as) {
    case "div":
      return <motion.div {...common}>{children}</motion.div>;
    case "footer":
      return <motion.footer {...common}>{children}</motion.footer>;
    case "header":
      return <motion.header {...common}>{children}</motion.header>;
    case "aside":
      return <motion.aside {...common}>{children}</motion.aside>;
    default:
      return <motion.section {...common}>{children}</motion.section>;
  }
}
