import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
    >
      {children}
    </motion.div>
  );
}
