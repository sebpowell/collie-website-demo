"use client";
import { useInView, motion, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

export const FadeInView = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "1200px 0px 0px 0px",
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={variants}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
};
