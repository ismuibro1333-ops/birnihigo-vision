import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 48000, suffix: " KG", label: "Daily Throughput" },
  { value: 1500, suffix: "+", label: "Contract Farmer Partnerships" },
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
    <span ref={ref} className="font-display text-4xl md:text-5xl text-accent tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const OperationalDashboard = () => {
  return (
    <section className="section-padding bg-card/50" aria-labelledby="dashboard-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Operational Scale</p>
          <h2 id="dashboard-heading" className="font-display text-3xl md:text-4xl text-foreground">
            The Numbers That Define Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground uppercase tracking-wider mt-3 font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalDashboard;
