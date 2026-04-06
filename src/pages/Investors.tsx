import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  TrendingUp, ShieldCheck, BarChart3, Globe2, 
  ArrowUpRight, Download, PieChart, Zap, 
  Layers, Target, CheckCircle2, ChevronRight 
} from "lucide-react";

const investorMetrics = [
  { label: "Market Opportunity", value: "120M+", sub: "Population Demand" },
  { label: "Production Target", value: "48 Tons", sub: "Daily Processing" },
  { label: "Infrastructure", value: "42ha", sub: "Bio-Secure Complex" },
  { label: "Feed Efficiency", value: "6 T/H", sub: "Automated Mill" },
];

const InvestorRelations = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pitchPoints = [
    {
      title: "The Market Gap",
      points: ["Low protein consumption per capita", "Fragmented, high-cost production", "Significant import dependency"],
      icon: Target
    },
    {
      title: "Integrated Advantage",
      points: ["Full value chain control", "Lower cost structure vs market", "Biosecurity excellence"],
      icon: Layers
    },
    {
      title: "Scalable Platform",
      points: ["1,500+ Target contract farmers", "Replicable industrial model", "Export-ready infrastructure"],
      icon: Zap
    }
  ];

  return (
    <Layout>
      {/* 1. THE PITCH HERO */}
      <section className="pt-40 pb-24 bg-[#4F3C1C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/charts-bg.png')] opacity-10 grayscale" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FEA42A]/10 border border-[#FEA42A]/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FEA42A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FEA42A]"></span>
              </span>
              <span className="text-[#FEA42A] text-[10px] font-black uppercase tracking-[0.3em]">Investment Grade Opportunity</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-8xl text-[#EFE7DC] font-black tracking-tighter italic leading-[0.9] uppercase mb-10">
              Scaling <br /> <span className="text-[#FEA42A]">National Solutions.</span>
            </h1>
            
            <p className="text-[#EFE7DC]/70 text-xl md:text-2xl font-bold italic max-w-3xl leading-relaxed border-l-4 border-[#FEA42A] pl-8">
              Birnihigo is not just a farm; it is an execution-driven system platform designed to solve Ethiopia’s protein deficit through vertical integration and industrial scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. THE HARD NUMBERS - IMPACT DASHBOARD */}
      <section className="py-20 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {investorMetrics.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[3rem] border border-[#CD8C24]/10 shadow-xl group hover:bg-[#4F3C1C] transition-all duration-500">
                  <p className="text-[#CD8C24] text-[10px] font-black uppercase tracking-widest mb-4">{m.label}</p>
                  <h3 className="text-4xl md:text-5xl font-black text-[#4F3C1C] group-hover:text-[#FEA42A] transition-colors tracking-tighter">{m.value}</h3>
                  <p className="text-[#4F3C1C]/40 group-hover:text-[#EFE7DC]/40 text-xs font-bold italic mt-2">{m.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE STRATEGIC PITCH - INTERACTIVE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <AnimatedSection>
                <h2 className="text-5xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-12">
                  The <span className="text-[#CD8C24]">Strategic</span> <br /> Alignment.
                </h2>
                <div className="space-y-4">
                  {pitchPoints.map((point, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full p-8 rounded-[2rem] flex items-center gap-6 transition-all border ${
                        activeTab === idx 
                        ? "bg-[#4F3C1C] text-[#FEA42A] border-[#4F3C1C] shadow-2xl scale-[1.05]" 
                        : "bg-[#EFE7DC]/30 text-[#4F3C1C]/40 border-transparent hover:border-[#4F3C1C]/10"
                      }`}
                    >
                      <point.icon size={28} />
                      <span className="text-sm font-black uppercase tracking-tight italic">{point.title}</span>
                    </button>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <div className="bg-[#EFE7DC] rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
                   <div className="relative z-10">
                      <h3 className="text-4xl font-black text-[#4F3C1C] uppercase italic mb-10 border-b border-[#4F3C1C]/10 pb-8">
                        {pitchPoints[activeTab].title}
                      </h3>
                      <ul className="space-y-6">
                        {pitchPoints[activeTab].points.map((p, i) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <CheckCircle2 className="text-[#CD8C24] mt-1 shrink-0" size={20} />
                            <span className="text-xl font-bold text-[#4F3C1C]/80 italic leading-snug">{p}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="absolute -bottom-10 -right-10 opacity-5">
                      {<pitchPoints[activeTab].icon size={300} />}
                   </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INVESTOR RESOURCES CTA */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#4F3C1C] rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl text-center">
            <div className="absolute inset-0 bg-[url('/grain-pattern.png')] opacity-10 pointer-events-none" />
            
            <AnimatedSection>
              <PieChart className="text-[#FEA42A] mx-auto mb-10" size={60} />
              <h2 className="text-5xl md:text-7xl font-black text-[#EFE7DC] uppercase italic tracking-tighter mb-8">
                Access the <span className="text-[#FEA42A]">Data.</span>
              </h2>
              <p className="text-[#EFE7DC]/60 text-xl max-w-2xl mx-auto font-bold italic mb-16">
                Request access to our detailed investment deck, financial projections, and sector impact reports.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-6 bg-[#FEA42A] text-[#4F3C1C] rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl">
                  Download Investment Deck <Download size={18} />
                </button>
                <button className="px-12 py-6 bg-white/5 border border-white/10 text-[#EFE7DC] rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                  Contact Investor Relations <ArrowUpRight size={18} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorRelations;
