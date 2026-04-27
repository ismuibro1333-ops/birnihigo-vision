import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 48000, suffix: " KG", label: "Daily Throughput" },
  { value: 1500, suffix: "+", label: "Contract Farmers" },
  { value: 100, suffix: "%", label: "Circular Waste-to-Fertilizer" },
  { value: 2000, suffix: "+", label: "Hectares Under Cultivation" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="block font-black text-4xl md:text-6xl text-[#FEA42A] tracking-tighter italic tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const OperationalDashboard = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat, i) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        className="text-center p-8 bg-white border border-[#CD8C24]/10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow"
      >
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        <p className="text-[10px] text-[#4F3C1C]/60 uppercase tracking-[0.3em] mt-3 font-black">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
);

export default OperationalDashboard;
