import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  TrendingUp, ShieldCheck, BarChart3, Globe, 
  ArrowUpRight, Download, PieChart, Zap, 
  Layers, Target, CheckCircle2, ChevronRight,
  FileText, Briefcase, Users, Landmark
} from "lucide-react";
import { motion } from "framer-motion";

const keyFigures = [
  { label: "Market Size", value: "120M+", note: "Population" },
  { label: "Consumption Gap", value: "0.5kg", note: "Per Capita" },
  { label: "National Supply", value: "29%", note: "Current" },
  { label: "Import Growth", value: "12%", note: "Annual" },
];

const investorMetrics = [
  { label: "Market Deficit", value: "High", note: "Structural Gap" },
  { label: "Target Scale", value: "1,500+", note: "Contract Farmers" },
  { label: "Feed Mill", value: "6 T/H", note: "Capacity" },
  { label: "Processing", value: "48 T/D", note: "Output" },
];

const InvestorRelations = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
          <AnimatedSection>
            <p className="text-[#FEA42A] text-[10px] font-black uppercase tracking-[0.5em] mb-8">Institutional Investment Opportunity</p>
            <h1 className="font-display text-5xl md:text-8xl text-white font-black tracking-tighter italic leading-none mb-10">
              An Investment in <br /> <span className="text-[#FEA42A]">National Scale.</span>
            </h1>
            <p className="text-[#EFE7DC]/60 text-xl md:text-2xl font-bold italic max-w-2xl leading-relaxed">
              [span_0](start_span)[span_1](start_span)Building Ethiopia's premier integrated poultry system[span_0](end_span)[span_1](end_span). [span_2](start_span)Beyond production volumes, we are designing a national-scale agricultural platform[span_2](end_span).
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. THE TICKER (As seen in your video) */}
      <div className="bg-[#FEA42A] py-6 overflow-hidden border-y border-[#4F3C1C]/10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...keyFigures, ...keyFigures].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[#4F3C1C] font-black uppercase text-[10px] tracking-widest">{item.label}:</span>
              <span className="text-[#4F3C1C] font-black text-2xl italic">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. INVESTMENT CASE (Bento Grid) */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-20">
            <h2 className="text-5xl md:text-7xl text-[#4F3C1C] font-black italic tracking-tighter uppercase">
              The Investment <span className="text-[#CD8C24]">Case.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InvestmentCard 
              icon={Target}
              title="Structural Market Gap"
              [span_3](start_span)points={["Low protein consumption[span_3](end_span)[span_4](start_span)", "Fragmented production system[span_4](end_span)[span_5](start_span)", "Significant import dependency[span_5](end_span)"]}
            />
            <InvestmentCard 
              icon={Layers}
              title="Integrated Advantage"
              [span_6](start_span)points={["Lower cost structure[span_6](end_span)[span_7](start_span)[span_8](start_span)", "Full value chain control[span_7](end_span)[span_8](end_span)[span_9](start_span)", "Improved efficiency[span_9](end_span)"]}
            />
            <InvestmentCard 
              icon={Zap}
              title="Scalable Platform"
              [span_10](start_span)points={["1,500+ Target contract farmers[span_10](end_span)[span_11](start_span)", "Replicable industrial model[span_11](end_span)[span_12](start_span)", "Export-ready infrastructure[span_12](end_span)"]}
            />
          </div>
        </div>
      </section>

      {/* 4. REVENUE STREAMS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <h2 className="text-5xl font-black text-[#4F3C1C] italic tracking-tighter uppercase mb-12">Diversified <br /><span className="text-[#FEA42A]">Revenue.</span></h2>
            <div className="space-y-6">
              {[
                [span_13](start_span){ t: "DOC Sales", d: "High-quality day-old chicks[span_13](end_span)" },
                [span_14](start_span){ t: "Meat Production", d: "Fresh and processed poultry[span_14](end_span)" },
                [span_15](start_span)[span_16](start_span){ t: "Feed Production", d: "6 ton/hour optimized feed[span_15](end_span)[span_16](end_span)" },
                [span_17](start_span){ t: "Organic Fertilizer", d: "Sustainable circular output[span_17](end_span)" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[#FEA42A] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-[#4F3C1C]" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#4F3C1C] uppercase tracking-tighter italic text-xl">{item.t}</h4>
                    <p className="text-[#4F3C1C]/60 font-bold italic">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="/api/placeholder/800/1000" alt="Industrial Scale" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* 5. INVESTOR FORM */}
      <section className="py-32 bg-[#4F3C1C]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#EFE7DC] rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <AnimatedSection>
              <h3 className="text-4xl md:text-5xl font-black text-[#4F3C1C] uppercase italic mb-6">Request <br />Access.</h3>
              <p className="text-[#4F3C1C]/60 text-lg font-bold italic mb-12">
                [span_18](start_span)Access our detailed investment deck, financial projections, and biosecurity protocols[span_18](end_span).
              </p>

              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 size={64} className="text-[#CD8C24] mx-auto mb-6" />
                  <h3 className="text-2xl font-black text-[#4F3C1C] italic">Inquiry Received.</h3>
                  [span_19](start_span)<p className="text-[#4F3C1C]/60 font-bold italic">Our Corporate Liaison office will contact you[span_19](end_span).</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="w-full p-6 rounded-2xl bg-white outline-none border-none focus:ring-2 focus:ring-[#FEA42A]" required />
                    <input type="email" placeholder="Corporate Email" className="w-full p-6 rounded-2xl bg-white outline-none border-none focus:ring-2 focus:ring-[#FEA42A]" required />
                  </div>
                  <textarea rows={4} placeholder="Inquiry Details" className="w-full p-6 rounded-2xl bg-white outline-none border-none focus:ring-2 focus:ring-[#FEA42A] resize-none" required />
                  <button type="submit" className="w-full py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
                    Request Credentials <ArrowUpRight size={18} />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// SUB-COMPONENT: InvestmentCard
const InvestmentCard = ({ icon: Icon, title, points }: { icon: any, title: string, points: string[] }) => (
  <div className="bg-white p-12 rounded-[3.5rem] border border-[#CD8C24]/10 shadow-xl group hover:bg-[#4F3C1C] transition-all duration-500">
    <div className="w-16 h-16 bg-[#FEA42A] rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform">
      <Icon size={32} className="text-[#4F3C1C]" />
    </div>
    <h3 className="text-2xl font-black text-[#4F3C1C] group-hover:text-white transition-colors uppercase italic tracking-tighter mb-8 leading-tight">
      {title}
    </h3>
    <ul className="space-y-4">
      {points.map((p, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FEA42A] mt-2 shrink-0" />
          <span className="text-[13px] font-bold italic text-[#4F3C1C]/60 group-hover:text-white/60 transition-colors">{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default InvestorRelations;
