import { useRef, useEffect, useState } from "react";
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

  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.6, 0]);
  const cardY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.35, 0.15, 0.05]);

  return (
    <section ref={containerRef} className="relative h-[400vh]" aria-label="Our journey from egg to table">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background images */}
        {stages.map((stage, i) => (
          <StageImage key={stage.label} stage={stage} index={i} activeIndex={activeIndex} />
        ))}

        {/* Dynamic overlay - fades as you scroll to reveal images */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-10"
          style={{ opacity: overlayOpacity }}
        />

        {/* Glassmorphism Content Card - fades out on scroll */}
        <motion.div
          className="relative z-20 max-w-4xl mx-auto px-6"
          style={{ opacity: cardOpacity, y: cardY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass rounded-2xl p-8 md:p-12 text-center gold-glow"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold"
            >
              Birnihigo Integrated Farms
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4"
            >
              Pioneering East Africa's<br />Food Security
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 font-body leading-relaxed"
            >
              42-Hectares of Vertically Integrated Poultry Excellence — from hatchery to halal-certified processing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:brightness-110 transition-all gold-glow"
              >
                Our Story <ArrowRight size={16} />
              </Link>
              <Link
                to="/investors"
                className="inline-flex items-center gap-2 px-8 py-3 border border-accent/30 text-foreground font-body font-medium rounded-lg hover:border-accent/60 hover:bg-accent/5 transition-all"
              >
                Investor Relations
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stage indicators - always visible */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
          <StageIndicators activeIndex={activeIndex} />
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          style={{ opacity: cardOpacity }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent/60 rounded-full" />
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
    <motion.div className="flex items-center justify-center gap-3 mt-8">
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
  const opacity = useTransform(activeIndex, (v: number) => (Math.abs(v - index) < 0.5 ? 1 : 0.3));
  const dotScale = useTransform(activeIndex, (v: number) => (Math.abs(v - index) < 0.5 ? 1.5 : 1));

  return (
    <motion.div style={{ opacity }} className="flex flex-col items-center gap-1">
      <motion.div
        style={{ scale: dotScale }}
        className="w-2 h-2 rounded-full bg-accent"
      />
      <span className="text-xs text-foreground/80 font-body hidden sm:block">{label}</span>
    </motion.div>
  );
};

export default ScrollytellingHero;
