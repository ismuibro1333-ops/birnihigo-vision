import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  TrendingUp, Shield, Layers, BarChart3, ArrowRight, 
  Globe, Users, Briefcase, ChevronRight, FileText 
} from "lucide-react";

const keyFigures = [
  { label: "Market Size", value: "120M+", note: "Second largest in Africa" },
  { label: "Consumption Gap", value: "0.5kg", note: "vs 15kg global average" },
  { label: "National Supply", value: "29%", note: "Birnihigo Total Capacity" },
  { label: "Import Growth", value: "12%", note: "Year-over-Year increase" },
];

const Investors = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
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
      {/* 1. INVESTOR HERO - Dark & Authoritative */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/charts-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EFE7DC]/10" />
        
        <AnimatedSection className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FEA42A] text-xs uppercase tracking-[0.5em] mb-6 font-black"
          >
            Institutional Growth
          </motion.p>
          <h1 className="font-display text-5xl md:text-8xl text-[#EFE7DC] font-black tracking-tighter italic mb-8">
            Capitalizing <span className="text-[#FEA42A]">Scale.</span>
          </h1>
          <p className="text-[#EFE7DC]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed border-l border-[#FEA42A]/50 pl-8">
            Building Ethiopia's first fully vertically integrated poultry ecosystem to bridge the 120M+ protein deficit.
          </p>
        </AnimatedSection>
      </section>

      {/* 2. THE TICKER - Real-time Market Logic */}
      <div className="bg-[#FEA42A] py-6 overflow-hidden flex whitespace-nowrap border-y border-[#4F3C1C]/10">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {keyFigures.map((fig, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[#4F3C1C] font-black uppercase text-xs tracking-widest">{fig.label}</span>
              <span className="text-[#4F3C1C] text-2xl font-black italic">{fig.value}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {keyFigures.map((fig, i) => (
            <div key={i+"copy"} className="flex items-center gap-4">
              <span className="text-[#4F3C1C] font-black uppercase text-xs tracking-widest">{fig.label}</span>
              <span className="text-[#4F3C1C] text-2xl font-black italic">{fig.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. STRATEGIC ADVANTAGE - Interactive Grid */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Vertical Integration", desc: "Full control from hatchery and internal feed to processing." },
              { icon: Shield, title: "Bio-Security", desc: "HACCP-certified 42ha site ensures export-level integrity." },
              { icon: Globe, title: "Export Proximity", desc: "Strategic access to Djibouti, Somalia, and the GCC markets." },
              { icon: Users, title: "Social Model", desc: "Inclusive growth involving 2,000+ local contract farmers." },
              { icon: BarChart3, title: "Proven Economics", desc: "48-ton daily throughput with controlled, internal input costs." },
              { icon: TrendingUp, title: "Grandparent Unit", desc: "Active expansion into GP units to secure the primary genetics chain." }
            ].map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="group p-10 h-full bg-white/40 backdrop-blur-md border border-[#4F3C1C]/5 rounded-[2.5rem] hover:bg-[#4F3C1C] transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-[#FEA42A] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <a.icon size={26} className="text-[#4F3C1C]" />
                  </div>
                  <h3 className="text-xl font-black text-[#4F3C1C] group-hover:text-[#FEA42A] mb-4 transition-colors uppercase">{a.title}</h3>
                  <p className="text-[#4F3C1C]/60 group-hover:text-[#EFE7DC]/60 leading-relaxed font-medium">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPACITY REVEAL - Progressive Scroll */}
      <section ref={scrollRef} className="py-32 bg-[#4F3C1C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <h2 className="text-[#FEA42A] text-5xl font-black italic tracking-tighter mb-8 leading-none">
              Dominating the <br/> National Capacity.
            </h2>
            <div className="space-y-8">
               <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-[#FEA42A]">National Market Share</span>
                    <span className="text-2xl font-black text-[#EFE7DC]">29%</span>
                  </div>
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-white/5">
                    <motion.div 
                      style={{ width: useTransform(scrollYProgress, [0, 0.5], ["0%", "29%"]) }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FEA42A]" 
                    />
                  </div>
                  <p className="text-[#EFE7DC]/40 text-sm italic leading-relaxed">
                    Birnihigo is on track to produce ~17,500 MT/yr, securing nearly a third of total national production.
                  </p>
               </div>
            </div>
          </AnimatedSection>
          
          <div className="relative flex justify-center">
             <div className="w-80 h-80 border-[20px] border-white/5 rounded-full flex items-center justify-center p-10">
                <div className="text-center">
                   <p className="text-[#FEA42A] text-6xl font-black">48T</p>
                   <p className="text-[#EFE7DC] font-bold uppercase tracking-widest text-[10px]">Daily Throughput</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. PROSPECTUS FORM - Exclusive Lounge Feel */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="bg-[#4F3C1C] p-12 rounded-[3.5rem] shadow-2xl">
              <FileText className="text-[#FEA42A] mb-6" size={40} />
              <h3 className="text-[#EFE7DC] text-4xl font-black italic mb-6">Request Prospectus</h3>
              <p className="text-[#EFE7DC]/60 mb-8 font-medium leading-relaxed">
                Access detailed unit economics, 5-year growth projections, and infrastructure expansion plans. Confidential information for qualified institutional partners.
              </p>
              <div className="text-[#FEA42A] font-black uppercase tracking-widest text-xs border-t border-white/10 pt-6">
                Direct Inquiry: invest@birnihigo.com
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {submitted ? (
              <div className="bg-white p-12 rounded-[3rem] text-center shadow-xl border border-[#FEA42A]/20">
                <h3 className="text-2xl font-black text-[#4F3C1C] mb-4 uppercase">Inquiry Received</h3>
                <p className="text-[#4F3C1C]/60 font-medium">Our investor relations lead will reach out to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="bg-white border-none rounded-2xl p-4 text-[#4F3C1C] focus:ring-2 focus:ring-[#FEA42A] shadow-sm" required />
                  <input type="text" placeholder="Organization" className="bg-white border-none rounded-2xl p-4 text-[#4F3C1C] focus:ring-2 focus:ring-[#FEA42A] shadow-sm" />
                </div>
                <input type="email" placeholder="Institutional Email" className="w-full bg-white border-none rounded-2xl p-4 text-[#4F3C1C] focus:ring-2 focus:ring-[#FEA42A] shadow-sm" required />
                <textarea rows={4} placeholder="Investment Scope" className="w-full bg-white border-none rounded-2xl p-4 text-[#4F3C1C] focus:ring-2 focus:ring-[#FEA42A] shadow-sm" />
                <button type="submit" className="w-full py-5 bg-[#4F3C1C] text-[#FEA42A] font-black uppercase tracking-widest rounded-2xl hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all shadow-lg flex items-center justify-center gap-3">
                  Send Request <ChevronRight size={20} />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
