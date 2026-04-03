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
    /* Forced Café Noir Background (#4F3C1C) */
    <section className="py-24 bg-[#4F3C1C] overflow-hidden" aria-labelledby="value-chain-heading">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Saffron Primary for the Subtitle */}
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-black italic">
            Our Ecosystem
          </p>
          {/* White Chocolate for the Heading */}
          <h2 id="value-chain-heading" className="text-5xl lg:text-7xl text-[#EFE7DC] font-black tracking-tighter italic uppercase leading-none">
            Vertically Integrated <span className="text-[#FEA42A]">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, i) => (
            <ValueChainCard key={step.step} step={step} index={i} />
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden lg:flex items-center justify-center p-8 rounded-[2rem] border-2 border-dashed border-[#FEA42A]/20"
          >
             <p className="text-[#FEA42A] font-black uppercase tracking-widest text-[10px] text-center opacity-50">
               Birnihigo Circular<br/>Economic Model
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ValueChainCard = ({ step, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      /* Darker Tint for the card to separate from background */
      className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-10 hover:border-[#FEA42A]/50 hover:bg-white/10 transition-all duration-500 flex flex-col shadow-2xl"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-14 h-14 rounded-2xl bg-[#FEA42A] flex items-center justify-center text-[#4F3C1C] shadow-lg group-hover:scale-110 transition-transform duration-500">
          <step.icon size={28} strokeWidth={2.5} />
        </div>
        <span className="font-black text-4xl text-white/5 group-hover:text-[#FEA42A]/10 transition-colors tracking-tighter">
          {step.step}
        </span>
      </div>
      
      {/* Title in White Chocolate */}
      <h3 className="text-xl text-[#EFE7DC] font-black mb-3 tracking-tight group-hover:text-[#FEA42A] transition-colors uppercase">
        {step.title}
      </h3>
      
      {/* Description with high-readability White Chocolate at 70% opacity */}
      <p className="text-sm text-[#EFE7DC]/70 leading-relaxed font-medium">
        {step.desc}
      </p>
    </motion.article>
  );
};

export default ValueChain;
