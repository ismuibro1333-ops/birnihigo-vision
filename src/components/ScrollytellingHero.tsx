import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import scrollEgg from "@/assets/scroll-egg.jpg";
import scrollChick from "@/assets/scroll-chick.jpg";
import scrollChicken from "@/assets/scroll-chicken.jpg";
import scrollProduct from "@/assets/scroll-product.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stages = [
  { src: scrollEgg, alt: "Fresh egg on golden straw", label: "Hatchery", caption: "It starts with a single egg" },
  { src: scrollChick, alt: "Baby chick in modern facility", label: "Brooding", caption: "Nurtured with precision care" },
  { src: scrollChicken, alt: "Adult chicken in poultry house", label: "Growing", caption: "Raised to the highest standards" },
  { src: scrollProduct, alt: "Premium packaged poultry products", label: "Market Ready", caption: "Delivered fresh to your table" },
];

const ScrollytellingHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Each stage gets ~25% of scroll
  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  return (
    <section ref={containerRef} className="relative h-[400vh]" aria-label="Our journey from egg to table">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background images */}
        {stages.map((stage, i) => (
          <StageImage key={stage.label} stage={stage} index={i} activeIndex={activeIndex} />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-sm uppercase tracking-[0.3em] mb-4 font-body font-medium"
          >
            Birnihigo Integrated Farms
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
          >
            From Egg to Table,<br />With Integrity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            Ethiopia's first fully integrated poultry ecosystem — scroll to explore our journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-body font-medium rounded-lg hover:bg-primary-foreground/90 transition-colors"
              aria-label="Learn about our story"
            >
              Our Story <ArrowRight size={16} />
            </Link>
            <Link
              to="/investors"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-body font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors"
              aria-label="View investor relations"
            >
              Investor Relations
            </Link>
          </motion.div>

          {/* Stage indicators */}
          <StageIndicators activeIndex={activeIndex} />
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StageImage = ({
  stage,
  index,
  activeIndex,
}: {
  stage: (typeof stages)[0];
  index: number;
  activeIndex: ReturnType<typeof useTransform>;
}) => {
  const opacity = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 0.5 ? 1 : dist < 1 ? 1 - (dist - 0.5) * 2 : 0;
  });

  const scale = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 1 ? 1 + (1 - dist) * 0.05 : 1;
  });

  return (
    <motion.img
      src={stage.src}
      alt={stage.alt}
      style={{ opacity, scale }}
      className="absolute inset-0 w-full h-full object-cover"
      loading={index === 0 ? "eager" : "lazy"}
    />
  );
};

const StageIndicators = ({
  activeIndex,
}: {
  activeIndex: ReturnType<typeof useTransform>;
}) => {
  return (
    <motion.div className="flex items-center justify-center gap-3 mt-12">
      {stages.map((stage, i) => (
        <StageIndicator key={stage.label} index={i} label={stage.label} caption={stage.caption} activeIndex={activeIndex} />
      ))}
    </motion.div>
  );
};

const StageIndicator = ({
  index,
  label,
  caption,
  activeIndex,
}: {
  index: number;
  label: string;
  caption: string;
  activeIndex: ReturnType<typeof useTransform>;
}) => {
  const opacity = useTransform(activeIndex, (v: number) => (Math.abs(v - index) < 0.5 ? 1 : 0.4));
  const dotScale = useTransform(activeIndex, (v: number) => (Math.abs(v - index) < 0.5 ? 1.5 : 1));

  return (
    <motion.div style={{ opacity }} className="flex flex-col items-center gap-1">
      <motion.div
        style={{ scale: dotScale }}
        className="w-2 h-2 rounded-full bg-primary-foreground"
      />
      <span className="text-xs text-primary-foreground font-body hidden sm:block">{label}</span>
    </motion.div>
  );
};

export default ScrollytellingHero;
