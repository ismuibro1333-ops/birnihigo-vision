import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bird, Shield, Sprout, Home, Factory, Recycle, Settings } from "lucide-react";

const steps = [
  {
    icon: Bird,
    step: "01",
    title: "Breeding Farm",
    desc: "The genesis of our quality. Managing elite parent stock to ensure superior genetics and bird health from day one.",
  },
  {
    icon: Shield,
    step: "02",
    title: "Hatchery",
    desc: "Bio-secure incubation and hatching of premium Day-Old Chicks (DOCs) with industry-leading hatch rates.",
  },
  {
    icon: Home,
    step: "03",
    title: "Broiler",
    desc: "Industrial-scale rearing in climate-controlled environments, focused on bird welfare and growth efficiency.",
  },
  {
    icon: Sprout,
    step: "04",
    title: "Feed Mill",
    desc: "2,000+ hectares of maize/soybean cultivation integrated with our feed mill for high-nutrient nutrition.",
  },
  {
    icon: Factory,
    step: "05",
    title: "Processing",
    desc: "HACCP-certified processing delivering premium, Halal-certified meat through advanced cold-chain logistics.",
  },
  {
    icon: Recycle,
    step: "06",
    title: "Waste Management",
    desc: "A true circular model, transforming 100% of organic waste into high-grade fertilizer for our cultivation.",
  },
  {
    icon: Settings,
    step: "07",
    title: "Auxiliary",
    desc: "Supporting infrastructure and technical services ensuring seamless operations across the regional corridor.",
  },
];

const ValueChain = () => {
  return (
    <section className="py-24 bg-background overflow-hidden" aria-labelledby="value-chain-heading">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm uppercase tracking-[0.4em] mb-4 font-black">Our Ecosystem</p>
          <h2 id="value-chain-heading" className="text-5xl lg:text-7xl text-foreground font-black tracking-tighter italic">
            Vertically Integrated Excellence
          </h2>
        </motion.div>

        {/* 7-Step Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, i) => (
            <ValueChainCard key={step.step} step={step} index={i} />
          ))}
          
          {/* Final "Circular Loop" Visual Card to fill the 8th slot in the grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:flex items-center justify-center p-8 rounded-[2rem] border-2 border-dashed border-primary/20"
          >
             <p className="text-primary font-black uppercase tracking-widest text-[10px] text-center">
               Birnihigo Circular<br/>Economic Model
             </p>
          </motion.div>
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
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative bg-card border border-border/40 rounded-[2rem] p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-500">
          <step.icon size={28} strokeWidth={2.5} />
        </div>
        <span className="font-black text-4xl text-foreground/10 group-hover:text-primary/20 transition-colors tracking-tighter">
          {step.step}
        </span>
      </div>
      
      <h3 className="text-xl text-foreground font-black mb-3 tracking-tight group-hover:text-primary transition-colors">
        {step.title}
      </h3>
      
      <p className="text-sm text-foreground/60 leading-relaxed font-medium">
        {step.desc}
      </p>
    </motion.article>
  );
};

export default ValueChain;
