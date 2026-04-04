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

  // Parallax for the Hero text
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* 1. INVESTOR HERO - MASSIVE IMPACT */}
      <section className="relative min-h-screen flex items-center bg-[#4F3C1C] overflow-hidden">
        {/* Animated Background Grain/Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
          <motion.div style={{ y: yHero }}>
            <p className="text-[#FEA42A] text-xs uppercase tracking-[0.8em] mb-8 font-black italic">
              Institutional Growth & Yield
            </p>
            <h1 className="font-display text-7xl md:text-[12rem] text-[#EFE7DC] font-black tracking-tighter italic leading-[0.8] uppercase mb-12">
              Capitalizing <br /> <span className="text-[#FEA42A]">Scale.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <p className="text-[#EFE7DC]/60 text-xl md:text-2xl font-medium leading-relaxed border-l-4 border-[#FEA42A] pl-10 max-w-xl">
                    Building Ethiopia's premier vertically integrated poultry ecosystem to bridge the 120M+ protein deficit.
                </p>
                <div className="flex flex-col items-end gap-2 text-right hidden md:flex">
                   <span className="text-[#FEA42A] text-8xl font-black italic leading-none">29%</span>
                   <span className="text-[#EFE7DC]/40 uppercase tracking-widest text-[10px] font-black">Projected Market Share</span>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE TICKER - HIGH VELOCITY */}
      <div className="bg-[#FEA42A] py-8 overflow-hidden flex whitespace-nowrap border-y-4 border-[#4F3C1C]">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center"
        >
          {[...keyFigures, ...keyFigures].map((fig, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-[#4F3C1C]/40 font-black uppercase text-[10px] tracking-[0.3em]">{fig.label}</span>
              <span className="text-[#4F3C1C] text-5xl font-black italic tracking-tighter">{fig.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. STRATEGIC ADVANTAGE - BENTO GRID DESIGN */}
      <section className="py-40 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-24">
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
                <div className="group p-12 h-full bg-white rounded-[3.5rem] border border-[#CD8C24]/10 hover:bg-[#4F3C1C] transition-all duration-700 shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-[#FEA42A] flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
                    <a.icon size={28} className="text-[#4F3C1C]" />
                  </div>
                  <h3 className="text-3xl font-black text-[#4F3C1C] group-hover:text-[#FEA42A] mb-4 transition-colors uppercase italic tracking-tighter">{a.title}</h3>
                  <p className="text-[#4F3C1C]/60 group-hover:text-[#EFE7DC]/60 text-lg font-medium transition-colors">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPACITY REVEAL - PROGRESSIVE INTERACTION */}
      <section ref={scrollRef} className="py-40 bg-[#4F3C1C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <AnimatedSection>
                <div className="w-40 h-1 bg-[#FEA42A] mx-auto mb-12" />
                <h2 className="text-[#EFE7DC] text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none mb-12">
                   Industrial <br /> <span className="text-[#FEA42A]">Dominance.</span>
                </h2>
            </AnimatedSection>
            
            <div className="w-full max-w-4xl space-y-16">
               <div className="relative pt-1">
                  <div className="flex mb-6 items-end justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.5em] text-[#FEA42A]">National Capacity Target</span>
                    <span className="text-7xl font-black text-[#EFE7DC] italic leading-none">29%</span>
                  </div>
                  <div className="overflow-hidden h-6 mb-8 rounded-full bg-white/5 border border-white/10 p-1">
                    <motion.div 
                      style={{ width: useTransform(scrollYProgress, [0, 0.8], ["0%", "29%"]) }}
                      className="h-full rounded-full bg-[#FEA42A] shadow-[0_0_30px_rgba(254,164,42,0.4)]" 
                    />
                  </div>
                  <p className="text-[#EFE7DC]/30 text-xl italic font-medium">
                    Scaling to ~17,500 MT/yr of premium, bio-secured poultry production.
                  </p>
               </div>
            </div>
        </div>
      </section>

      {/* 5. PROSPECTUS FORM - THE INVESTOR LOUNGE */}
      <section className="py-40 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#4F3C1C] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)] grid lg:grid-cols-2">
            
            {/* Form Left - Context */}
            <div className="p-16 md:p-24 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] border-r border-white/5">
                <FileText className="text-[#FEA42A] mb-10" size={60} />
                <h3 className="text-[#EFE7DC] text-5xl md:text-6xl font-black italic mb-8 uppercase tracking-tighter leading-none">
                    Access <br /> <span className="text-[#FEA42A]">Prospectus.</span>
                </h3>
                <p className="text-[#EFE7DC]/60 text-lg font-medium leading-relaxed mb-12">
                    Request detailed unit economics, CAPEX allocations, and 5-year ROI projections. Available for institutional partners.
                </p>
                <div className="flex items-center gap-4 text-[#FEA42A] font-black uppercase tracking-widest text-xs">
                   <div className="w-12 h-[2px] bg-[#FEA42A]" />
                   <span>Direct: invest@birnihigo.com</span>
                </div>
            </div>

            {/* Form Right - Input */}
            <div className="p-16 md:p-24 bg-[#EFE7DC]/5 backdrop-blur-3xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <CheckCircle2 size={80} className="text-[#FEA42A] mb-8" />
                    <h3 className="text-3xl font-black text-[#EFE7DC] uppercase italic mb-4">Request Logged</h3>
                    <p className="text-[#EFE7DC]/50 font-medium">Investor Relations will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <label className="text-[#EFE7DC]/40 uppercase text-[10px] font-black tracking-widest ml-4">Credentials</label>
                        <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-[#EFE7DC] focus:border-[#FEA42A] transition-all outline-none" required />
                        <input type="email" placeholder="Institutional Email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-[#EFE7DC] focus:border-[#FEA42A] transition-all outline-none" required />
                        <textarea rows={4} placeholder="Investment Mandate / Scope" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-[#EFE7DC] focus:border-[#FEA42A] transition-all outline-none" />
                    </div>
                    <button type="submit" className="group w-full py-6 bg-[#FEA42A] text-[#4F3C1C] font-black uppercase tracking-widest rounded-2xl hover:bg-[#FFD275] transition-all shadow-2xl flex items-center justify-center gap-4">
                      Request Access <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
