import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bird, Shield, Sprout, Home, Factory, Recycle, Settings, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Bird,
    step: "01",
    title: "Parent Stock",
    desc: "Genetic foundation ensuring productivity and quality across the entire production system.",
  },
  {
    icon: Shield,
    step: "02",
    title: "Hatchery",
    desc: "Controlled incubation delivering high-quality day-old chicks with industry-leading hatch rates.",
  },
  {
    icon: Sprout,
    step: "03",
    title: "Feed Mill",
    desc: "6 ton/hour capacity producing optimized, high-nutrient feed from 2,000+ hectares of integrated cultivation.",
  },
  {
    icon: Home,
    step: "04",
    title: "Broiler Production",
    desc: "Company-owned farms and a contract farming network delivering industrial-scale rearing at consistent quality.",
  },
  {
    icon: Factory,
    step: "05",
    title: "Processing",
    desc: "Halal-certified processing facility operating at 48 tons/day under HACCP-aligned safety standards.",
  },
  {
    icon: Recycle,
    step: "06",
    title: "Cold Chain & Distribution",
    desc: "Ensuring product integrity from processing to market through advanced cold-chain logistics.",
  },
  {
    icon: Settings,
    step: "07",
    title: "Waste Management",
    desc: "A true circular model, transforming 100% of organic waste into high-grade fertilizer for our cultivation.",
  },
];

const results = [
  "Cost control",
  "Quality consistency",
  "Scalable production",
  "Market reliability",
];

const ValueChain = () => {
  return (
    <section className="bg-[#4F3C1C] overflow-hidden" aria-labelledby="value-chain-heading">

      {/* PAGE TITLE & INTRO */}
      <div className="pt-24 pb-0 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-black italic">
            Our Ecosystem
          </p>
          <h2
            id="value-chain-heading"
            className="text-5xl lg:text-7xl text-[#EFE7DC] font-black tracking-tighter italic uppercase leading-none mb-6"
          >
            From Farm to Fork:<br />
            <span className="text-[#FEA42A]">A Fully Integrated System</span>
          </h2>
          <p className="text-[#EFE7DC]/60 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Birnihigo integrates every stage of poultry production into one coordinated system.
          </p>
        </motion.div>
      </div>

      {/* CHAIN CARDS */}
      <div className="py-24 max-w-7xl mx-auto px-6">
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
              Birnihigo Circular<br />Economic Model
            </p>
          </motion.div>
        </div>
      </div>

      {/* RESULT */}
      <div className="pb-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-16"
        >
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-10 font-black text-center">
            The Result
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-[#FEA42A]/10 transition-all duration-300"
              >
                <CheckCircle2 size={22} className="text-[#FEA42A]" />
                <p className="text-[#EFE7DC] font-bold text-sm uppercase tracking-widest">{r}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

      <h3 className="text-xl text-[#EFE7DC] font-black mb-3 tracking-tight group-hover:text-[#FEA42A] transition-colors uppercase">
        {step.title}
      </h3>

      <p className="text-sm text-[#EFE7DC]/70 leading-relaxed font-medium">
        {step.desc}
      </p>
    </motion.article>
  );
};

export default ValueChain;
