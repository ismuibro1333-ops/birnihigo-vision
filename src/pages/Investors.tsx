import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  TrendingUp, Shield, Layers, BarChart3, ArrowRight, 
  Globe, Users, Briefcase, FileText, CheckCircle2, 
  Target, Zap, Scale, PieChart
} from "lucide-react";

const investorMetrics = [
  { label: "Market Deficit", value: "High", note: "Fragmented Production" },
  { label: "Target Scale", value: "1,500+", note: "Contract Farmers" },
  { label: "Feed Mill", value: "6 T/H", note: "Cost Control Moat" },
  { label: "Processing", value: "48 T/D", note: "Industrial Output" },
];

const Investors = () => {
  const [submitted, setSubmitted] = useState(false);
  const scrollRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* 1. INVESTOR HERO: THE SYSTEM TRANSFORMATION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-32">
          <AnimatedSection>
            <p className="text-[#FEA42A] text-[10px] uppercase tracking-[0.6em] mb-8 font-black italic">
              Institutional Investment Opportunity
            </p>
            
            <h1 className="font-display text-4xl sm:text-6xl md:text-[7rem] text-[#EFE7DC] font-black tracking-tighter italic leading-[0.9] uppercase mb-12">
              An Investment in <br /> 
              <span className="text-[#FEA42A]">System Transformation.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
                <p className="text-[#EFE7DC]/80 text-xl md:text-2xl font-bold leading-relaxed border-l-4 border-[#FEA42A] pl-10 max-w-2xl italic">
                    Beyond production volumes, Birnihigo is designed to deliver real impact—improving affordability, strengthening efficiency, and ensuring consistent market supply.
                </p>
                <div className="hidden md:flex flex-col items-end text-right">
                   <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
                      <p className="text-[#FEA42A] text-[10px] font-black uppercase tracking-widest mb-4">Strategic Mandate</p>
                      <p className="text-[#EFE7DC] text-lg font-black italic">National Food System Platform</p>
                   </div>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. THE INVESTMENT CASE (Bento Grid) */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-20">
             <h2 className="text-5xl md:text-7xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-6">
               The Investment <span className="text-[#CD8C24]">Case.</span>
             </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InvestmentCard 
              icon={Target} 
              title="Structural Market Gap" 
              points={["Low protein consumption", "Fragmented production system"]} 
            />
            <InvestmentCard 
              icon={Layers} 
              title="Integrated Advantage" 
              points={["Lower cost structure", "Full value chain control", "Improved efficiency"]} 
            />
            <InvestmentCard 
              icon={Scale} 
              title="Scalable Platform" 
              points={["1,500+ Contract farmers", "Replicable industrial model"]} 
            />
          </div>
        </div>
      </section>

      {/* 3. REVENUE STREAMS (Visual List) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
           <AnimatedSection>
              <h2 className="text-5xl font-black text-[#4F3C1C] italic tracking-tighter uppercase mb-10">Diversified <br/><span className="text-[#FEA42A]">Revenue Streams.</span></h2>
              <div className="space-y-6">
                 {[
                   { t: "DOC Sales", d: "High-quality Day-Old Chicks for regional markets." },
                   { t: "Meat Production", d: "HACCP-certified whole birds and premium cuts." },
                   { t: "Feed Production", d: "6 T/H internal supply and commercial sales." },
                   { t: "Organic Fertilizer", d: "Value-added byproduct for sustainable agriculture." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-center p-6 bg-[#EFE7DC]/50 rounded-[2rem] border border-[#4F3C1C]/5">
                      <div className="w-12 h-12 bg-[#4F3C1C] rounded-xl flex items-center justify-center text-[#FEA42A] shrink-0 font-black italic">{i+1}</div>
                      <div>
                         <h4 className="font-black italic text-[#4F3C1C] uppercase text-sm tracking-tight">{item.t}</h4>
                         <p className="text-[#4F3C1C]/60 text-xs font-bold italic">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </AnimatedSection>
           <AnimatedSection delay={0.3}>
              <div className="relative aspect-square rounded-[4rem] overflow-hidden border-[16px] border-[#EFE7DC] shadow-2xl">
                 <img src="/investor-stats-visual.jpg" alt="Growth" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#4F3C1C]/60 to-transparent" />
              </div>
           </AnimatedSection>
        </div>
      </section>

      {/* 4. STRATEGIC ALIGNMENT (Ticker Style) */}
      <section className="py-24 bg-[#4F3C1C] overflow-hidden border-y-4 border-[#FEA42A]">
        <div className="flex whitespace-nowrap">
           <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center"
           >
              {["Food Security", "Import Substitution", "Export Development", "Job Creation", "Economic Resilience"].map((text, i) => (
                <div key={i} className="flex items-center gap-8">
                   <div className="w-3 h-3 bg-[#FEA42A] rotate-45" />
                   <span className="text-[#EFE7DC] text-4xl md:text-6xl font-black italic tracking-tighter uppercase">{text}</span>
                </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* 5. INVESTOR RELATIONS FORM */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#4F3C1C] rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
             <div className="relative z-10 grid lg:grid-cols-2 gap-16">
                <div>
                   <h3 className="text-4xl md:text-6xl font-black text-[#EFE7DC] italic uppercase tracking-tighter leading-none mb-8">
                     Request <br/><span className="text-[#FEA42A]">Prospectus.</span>
                   </h3>
                   <p className="text-[#EFE7DC]/50 text-lg font-bold italic mb-12">
                     Access our detailed investment deck, unit economics, and 5-year scalability roadmap.
                   </p>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[#FEA42A]">
                         <CheckCircle2 size={20} />
                         <span className="text-[10px] uppercase font-black tracking-[0.2em]">HACCP & Halal Certified</span>
                      </div>
                      <div className="flex items-center gap-4 text-[#FEA42A]">
                         <CheckCircle2 size={20} />
                         <span className="text-[10px] uppercase font-black tracking-[0.2em]">2,000Ha Integrated Feed</span>
                      </div>
                   </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
                   <AnimatePresence mode="wait">
                     {submitted ? (
                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                          <CheckCircle2 size={60} className="text-[#FEA42A] mx-auto mb-6" />
                          <p className="text-[#EFE7DC] font-black uppercase italic">Request Transmitted</p>
                       </motion.div>
                     ) : (
                       <form onSubmit={handleSubmit} className="space-y-4">
                          <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#EFE7DC] focus:border-[#FEA42A] outline-none" required />
                          <input type="email" placeholder="Institutional Email" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#EFE7DC] focus:border-[#FEA42A] outline-none" required />
                          <textarea placeholder="Investment Mandate" rows={3} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-[#EFE7DC] focus:border-[#FEA42A] outline-none" />
                          <button className="w-full py-5 bg-[#FEA42A] text-[#4F3C1C] font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] transition-all">Download Investment Deck</button>
                       </form>
                     )}
                   </AnimatePresence>
                </div>
             </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const InvestmentCard = ({ icon: Icon, title, points }) => (
  <AnimatedSection>
    <div className="p-12 bg-white rounded-[3rem] border border-[#CD8C24]/10 shadow-xl h-full flex flex-col group hover:bg-[#4F3C1C] transition-all duration-500">
      <div className="w-16 h-16 bg-[#FEA42A] rounded-2xl flex items-center justify-center mb-8 text-[#4F3C1C] group-hover:rotate-6 transition-transform">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-black text-[#4F3C1C] group-hover:text-[#FEA42A] uppercase italic tracking-tighter mb-6 transition-colors">{title}</h3>
      <div className="space-y-3 mt-auto">
        {points.map((p, i) => (
          <div key={i} className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 bg-[#FEA42A] rounded-full" />
             <span className="text-[#4F3C1C]/60 group-hover:text-[#EFE7DC]/60 text-sm font-bold italic transition-colors">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Investors;
