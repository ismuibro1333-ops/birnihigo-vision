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
    className={`bg-[#EFE7DC] border border-[#CD8C24]/10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow ${className}`}
  >
    {children}
  </motion.article>
);

export default MotionCard;
