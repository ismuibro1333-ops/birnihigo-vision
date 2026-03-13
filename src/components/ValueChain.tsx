import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wheat, Shield, Cpu, Factory, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Wheat,
    step: "01",
    title: "Sustainable Agriculture",
    desc: "2,000+ hectares of maize and soybean cultivated on company-owned and partner farms, ensuring feed self-sufficiency and responsible land stewardship.",
  },
  {
    icon: Shield,
    step: "02",
    title: "Bio-Secure Genetics",
    desc: "Cobb 500 hatchery with 99.2% hatch rates, bio-secure facilities, and plans to establish grandparent stock within 5–7 years.",
  },
  {
    icon: Cpu,
    step: "03",
    title: "Precision Growth",
    desc: "IoT-monitored climate controls, automated feeding systems, and precision veterinary protocols ensure optimal bird health and growth rates.",
  },
  {
    icon: Factory,
    step: "04",
    title: "Industrial Processing",
    desc: "48-ton daily Halal-certified processing capacity with HACCP certification, cold-chain logistics, and export-ready packaging.",
  },
];

const ValueChain = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding overflow-hidden" aria-labelledby="value-chain-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">The Value Chain</p>
          <h2 id="value-chain-heading" className="font-display text-3xl md:text-4xl text-foreground">
            Vertically Integrated Excellence
          </h2>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {steps.map((step, i) => (
            <ValueChainCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueChainCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="min-w-[280px] snap-center lg:min-w-0 group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
          <step.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <span className="font-display text-3xl text-border group-hover:text-accent/30 transition-colors">{step.step}</span>
      </div>
      <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed font-body flex-1">{step.desc}</p>
      {index < 3 && (
        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
          <ArrowRight size={16} className="text-accent/40" />
        </div>
      )}
    </motion.article>
  );
};

export default ValueChain;
