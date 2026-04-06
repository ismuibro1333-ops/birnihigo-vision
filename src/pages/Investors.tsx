import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  TrendingUp, Shield, Layers, BarChart3, ArrowRight, 
  Globe, Users, Briefcase, ChevronRight, FileText, CheckCircle2 
} from "lucide-react";

const keyFigures = [
  { label: "Market Size", value: "120M+", note: "Second largest in Africa" },
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
                <p className="text-[#EFE7DC]/80 text-lg md:text-2xl font-medium leading-relaxed border-l-4 border-[#FEA42A] pl-6 md:pl-10 max-w-xl">
                    Building Ethiopia's premier vertically integrated poultry ecosystem to bridge the 120M+ protein deficit.
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

      {/* 3. STRATEGIC ADVANTAGE */}
      <section className="py-24 md:py-40 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16 md:mb-24">
             <h2 className="text-5xl md:text-8xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-6">
               The Strategic <br /> <span className="text-[#CD8C24]">Moat.</span>
             </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              { icon: Layers, title: "Vertical Integration", desc: "Full genetic control to final processing.", span: "md:col-span-8" },
              { icon: Shield, title: "Bio-Security", desc: "HACCP-certified 42ha industrial site.", span: "md:col-span-4" },
              { icon: Globe, title: "Export Ready", desc: "Access to GCC and regional corridors.", span: "md:col-span-4" },
              { icon: BarChart3, title: "Yield Optimization", desc: "Internal feed control lowers COGS by 30%.", span: "md:col-span-8" },
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

      {/* 4. CAPACITY */}
      <section ref={scrollRef} className="py-24 md:py-40 bg-[#4F3C1C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <AnimatedSection>
                <div className="w-24 md:w-40 h-1 bg-[#FEA42A] mx-auto mb-10 md:mb-12" />
                <h2 className="text-[#EFE7DC] text-5xl md:text-9xl font-black italic tracking-tighter uppercase leading-none mb-10 md:mb-12">
                   Industrial <br /> <span className="text-[#FEA42A]">Dominance.</span>
                </h2>
            </AnimatedSection>
        </div>
      </section>

      {/* 6. INVESTMENT CASE (ADDED) */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <AnimatedSection className="mb-16 md:mb-24">
            <h2 className="text-5xl md:text-8xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-6">
              Investment <br /> <span className="text-[#FEA42A]">Case.</span>
            </h2>
            <p className="text-[#4F3C1C]/70 text-lg md:text-2xl font-medium max-w-3xl leading-relaxed">
              An Investment in System Transformation: Beyond production volumes, Birnihigo is designed to deliver real impact—improving affordability, strengthening system efficiency, and ensuring consistent market supply.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <AnimatedSection>
              <div className="p-8 rounded-3xl border">
                <h3 className="font-black mb-4">Structural Market Gap</h3>
                <ul>
                  <li>• Low protein consumption</li>
                  <li>• Fragmented production system</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="p-8 rounded-3xl border">
                <h3 className="font-black mb-4">Integrated Advantage</h3>
                <ul>
                  <li>• Lower cost structure</li>
                  <li>• Full value chain control</li>
                  <li>• Improved efficiency</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="p-8 rounded-3xl border">
                <h3 className="font-black mb-4">Scalable Platform</h3>
                <ul>
                  <li>• Contract farming (1,500+ target)</li>
                  <li>• Replicable model</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="p-8 rounded-3xl border">
                <h3 className="font-black mb-4">Revenue Streams</h3>
                <ul>
                  <li>• DOC sales</li>
                  <li>• Meat production</li>
                  <li>• Feed production</li>
                  <li>• Fertilizer</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-black mb-6">Strategic Alignment</h3>
            <p>Food security • Import substitution • Export development • Job creation</p>
          </div>

          <div className="mt-10 flex gap-6 justify-center">
            <button className="px-8 py-4 bg-[#FEA42A] font-black">Download Investment Deck</button>
            <button className="px-8 py-4 border font-black">Contact Investor Relations</button>
          </div>

        </div>
      </section>

      {/* 5. FORM (UNCHANGED) */}
      {/* ... your existing form stays exactly the same ... */}

    </Layout>
  );
};

export default Investors;