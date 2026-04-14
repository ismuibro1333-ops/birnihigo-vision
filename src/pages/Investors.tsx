import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  TrendingUp, Shield, Layers, BarChart3, ArrowRight, 
  Globe, Users, Briefcase, ChevronRight, FileText, CheckCircle2,
  PieChart, Activity, Zap, TrendingDown
} from "lucide-react";

const keyFigures = [
  { label: "Market Size", value: "135M+", note: "Second largest in Africa" },
  { label: "Consumption Gap", value: "0.5kg", note: "vs 15kg global average" },
  { label: "National Supply", value: "29%", note: "Birnihigo Total Capacity" },
  { label: "Import Growth", value: "12%", note: "Year-over-Year increase" },
];

const Investors = () => {
  const [submitted, setSubmitted] = useState(false);
  const scrollRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* 1. INVESTOR HERO */}
      <section className="relative min-h-screen flex items-center bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
          <motion.div style={{ y: yHero }}>
            <p className="text-[#FEA42A] text-xs uppercase tracking-[0.6em] mb-6 md:mb-8 font-black italic">
              Institutional Growth & Yield
            </p>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] text-[#EFE7DC] font-black tracking-tighter italic leading-[0.9] md:leading-[0.8] uppercase mb-12 break-words">
              Capitalizing <br /> 
              <span className="text-[#FEA42A] drop-shadow-[0_10px_30px_rgba(254,164,42,0.3)]">
                Scale.
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <p className="text-[#EFE7DC]/80 text-lg md:text-2xl font-medium leading-relaxed border-l-4 border-[#FEA42A] pl-6 md:pl-10 max-w-xl italic uppercase">
                    Building Ethiopia's premier vertically integrated poultry ecosystem to bridge the 135M+ protein deficit.
                </p>
                <div className="flex flex-col items-end gap-2 text-right hidden md:flex">
                   <span className="text-[#FEA42A] text-7xl lg:text-8xl font-black italic leading-none">29%</span>
                   <span className="text-[#EFE7DC]/40 uppercase tracking-widest text-[10px] font-black">Projected Market Share</span>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TICKER */}
      <div className="bg-[#FEA42A] py-6 md:py-8 overflow-hidden flex whitespace-nowrap border-y-4 border-[#4F3C1C]">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 md:gap-24 items-center"
        >
          {[...keyFigures, ...keyFigures].map((fig, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6">
              <span className="text-[#4F3C1C]/40 font-black uppercase text-[10px] tracking-[0.3em]">{fig.label}</span>
              <span className="text-[#4F3C1C] text-3xl md:text-5xl font-black italic tracking-tighter">{fig.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. MARKET OPPORTUNITY (Milkias' Data) */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <p className="text-[#CD8C24] text-[10px] uppercase tracking-[0.6em] mb-6 font-black italic">Market Opportunity</p>
              <h2 className="text-4xl md:text-6xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-[0.9] mb-8">
                A Structurally <br /> <span className="text-[#CD8C24]">Underserved</span> Market.
              </h2>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-[#4F3C1C]/80 font-bold leading-relaxed italic border-l-8 border-[#FEA42A] pl-8">
                  "With a population exceeding 135 million and among the lowest per capita poultry consumption globally, Ethiopia presents a structurally underserved protein market with significant growth potential."
                </p>
                <p className="text-lg text-[#4F3C1C]/60 font-medium">
                  Birnihigo is designed to bridge this gap by transforming fragmented production into a reliable, integrated industrial system.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Consumption Per Capita", value: "0.5kg", sub: "National Avg", icon: TrendingDown },
                  { label: "Global Benchmark", value: "15.0kg", sub: "Global Avg", icon: Globe },
                  { label: "Protein Deficit", value: "96%", note: "Unmet Demand", icon: Activity },
                  { label: "Market Growth", value: "CAGR 12%", sub: "Projected", icon: Zap },
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-[#EFE7DC]/50 rounded-3xl border border-[#4F3C1C]/5 group hover:bg-[#4F3C1C] transition-all duration-500">
                    <stat.icon className="text-[#CD8C24] mb-4 group-hover:text-[#FEA42A]" size={24} />
                    <p className="text-[#4F3C1C] text-4xl font-black tracking-tighter group-hover:text-white transition-colors">{stat.value}</p>
                    <p className="text-[#CD8C24] text-[10px] font-black uppercase tracking-widest mt-1">{stat.label}</p>
                    <p className="text-[#4F3C1C]/40 text-[10px] font-bold group-hover:text-white/40">{stat.sub || stat.note}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC ADVANTAGE */}
      <section className="py-24 md:py-40 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16 md:mb-24 text-center">
             <h2 className="text-5xl md:text-8xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-6">
               The Strategic <br /> <span className="text-[#CD8C24]">Moat.</span>
             </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              { icon: Layers, title: "Vertical Integration", desc: "Full genetic control from Breeder stock to final processing.", span: "md:col-span-8" },
              { icon: Shield, title: "Bio-Security", desc: "HACCP-ready industrial site with strictly controlled bio-protocols.", span: "md:col-span-4" },
              { icon: Globe, title: "Export Potential", desc: "Positioned for GCC markets and regional trade corridors.", span: "md:col-span-4" },
              { icon: BarChart3, title: "Yield Optimization", desc: "Internal feed milling lowers production COGS by 30%.", span: "md:col-span-8" },
            ].map((a, i) => (
              <AnimatedSection key={i} className={a.span}>
                <div className="group p-8 md:p-12 h-full bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-[#CD8C24]/10 hover:bg-[#4F3C1C] transition-all duration-700 shadow-xl">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#FEA42A] flex items-center justify-center mb-8 md:mb-10 group-hover:rotate-12 transition-transform">
                    <a.icon size={28} className="text-[#4F3C1C]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#4F3C1C] group-hover:text-[#FEA42A] mb-4 transition-colors uppercase italic tracking-tighter">{a.title}</h3>
                  <p className="text-[#4F3C1C]/60 group-hover:text-[#EFE7DC]/60 text-base md:text-lg font-medium transition-colors">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INVESTMENT CASE (Redesigned) */}
      <section className="py-24 md:py-40 bg-[#4F3C1C]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16 md:mb-24 text-center">
            <p className="text-[#FEA42A] text-[10px] uppercase tracking-[0.6em] mb-4 font-black italic">Strategic Value</p>
            <h2 className="text-5xl md:text-8xl font-black text-[#EFE7DC] uppercase tracking-tighter italic leading-none mb-6">
              Investment <br /> <span className="text-[#FEA42A]">Case.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Structural Gap", points: ["Low national consumption", "Fragmented production", "Supply volatility"], icon: Activity },
              { title: "Integrated Advantage", points: ["Lowest cost structure", "Total value chain control", "Bio-secure reliability"], icon: Shield },
              { title: "Scalable Platform", points: ["Outgrower expansion", "Replicable regional model", "1,500+ job target"], icon: TrendingUp },
              { title: "Revenue Verticals", points: ["DOC & Feed sales", "Meat production", "Organic Fertilizer"], icon: PieChart },
            ].map((box, i) => (
              <AnimatedSection key={i}>
                <div className="p-10 h-full bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors">
                  <box.icon className="text-[#FEA42A] mb-6" size={32} />
                  <h3 className="text-[#EFE7DC] font-black text-xl uppercase italic tracking-tighter mb-6">{box.title}</h3>
                  <ul className="space-y-4">
                    {box.points.map((p, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/50 text-sm font-bold uppercase tracking-tight">
                        <CheckCircle2 size={14} className="text-[#FEA42A] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-24 pt-24 border-t border-white/10 grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h3 className="text-[#EFE7DC] text-2xl font-black uppercase italic tracking-tighter mb-4">Strategic Alignment</h3>
              <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] leading-loose">
                Food security • Import substitution • Export development • Job creation • Economic Resilience
              </p>
            </AnimatedSection>
            <AnimatedSection className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <button className="px-10 py-5 bg-[#FEA42A] text-[#4F3C1C] font-black uppercase tracking-widest text-xs hover:bg-[#EFE7DC] transition-all">
                Download Investor Deck
              </button>
              <button className="px-10 py-5 border border-white/20 text-[#EFE7DC] font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                Speak with IR
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 6. FORM SECTION */}
      <section className="py-24 md:py-40 bg-[#EFE7DC]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-[#4F3C1C]/5">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-[#4F3C1C] uppercase italic tracking-tighter mb-4">Inquire.</h2>
              <p className="text-[#4F3C1C]/60 font-medium italic">Enter your details to receive our institutional investor package.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="FULL NAME" required className="w-full bg-[#EFE7DC]/50 border-none p-5 rounded-2xl font-black text-xs uppercase tracking-widest focus:ring-2 focus:ring-[#FEA42A]" />
                <input type="email" placeholder="WORK EMAIL" required className="w-full bg-[#EFE7DC]/50 border-none p-5 rounded-2xl font-black text-xs uppercase tracking-widest focus:ring-2 focus:ring-[#FEA42A]" />
              </div>
              <input type="text" placeholder="INSTITUTION / FIRM" className="w-full bg-[#EFE7DC]/50 border-none p-5 rounded-2xl font-black text-xs uppercase tracking-widest focus:ring-2 focus:ring-[#FEA42A]" />
              <textarea placeholder="MESSAGE" rows={4} className="w-full bg-[#EFE7DC]/50 border-none p-5 rounded-2xl font-black text-xs uppercase tracking-widest focus:ring-2 focus:ring-[#FEA42A]" />
              <button type="submit" className="w-full bg-[#4F3C1C] text-[#FEA42A] py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm hover:bg-[#CD8C24] hover:text-[#4F3C1C] transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
