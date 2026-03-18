import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const MotionCard = ({ children, className = "" }: Props) => (
  <motion.article
    whileHover={{
      scale: 1.02,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    }}
    className={`bg-card border border-border rounded-2xl hover:border-primary/30 hover:card-hover-shadow transition-colors ${className}`}
  >
    {children}
  </motion.article>
);

export default MotionCard;
