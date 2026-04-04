import { useRef } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { Shield, Users, Recycle, Leaf, Sprout, Droplets, Zap, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { value: "42ha", label: "Industrial Site" },
  { value: "2,000ha", label: "Integrated Feed" },
  { value: "100%", label: "Waste Recovery" },
  { value: "1,500+", label: "Farmers Supported" },
];

const Sustainability = () => (
  <Layout>
    {/* 1. HERO SECTION - DARK INDUSTRIAL POWER */}
    <section className="pt-40 pb-32 bg-[#4F3C1C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <Recycle size={800} className="absolute -top-20 -right-20 text-[#FEA42A]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-[#FEA42A] text-xs uppercase tracking-[0.6em] mb-6 font-black italic">
            Strategic Sustainability
          </p>
          <h1 className="font-display text-6xl md:text-9xl text-[#EFE7DC] font-black tracking-tighter italic leading-[0.85] uppercase mb-10">
            Vertical <br /> <span className="text-[#FEA42A]">Integration.</span> <br /> Zero Waste.
          </h1>
          <p className="text-[#EFE7DC]/60 text-xl font-medium max-w-3xl leading-relaxed italic border-l-4 border-[#FEA42A] pl-8">
            "Sustainability is embedded in every stage. We transform 100% of organic waste into valuable assets, driving national food sovereignty."
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* 2. FLOATING METRICS BAR */}
    <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
      <div className="bg-[#EFE7DC] rounded-[3rem] p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white/20">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
            <span className="block font-black text-4xl md:text-6xl text-[#4F3C1C] tracking-tighter mb-2 italic">
              {m.value}
            </span>
            <span className="block text-[10px] text-[#4F3C1C]/40 uppercase tracking-[0.3em] font-black">
              {m.label}
            </span>
          </AnimatedSection>
        ))}
      </div>
    </div>

    {/* 3. CIRCULAR WASTE-TO-RESOURCE (BENTO STYLE) */}
    <section className="py-32 bg-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-6">
            Waste to <span className="text-[#CD8C24]">Resource.</span>
          </h2>
          <p className="text-[#4F3C1C]/60 max-w-2xl font-bold">
            We transform environmental challenges into industrial assets through a closed-loop system.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Sprout, title: "Organic Fertilizer", desc: "Used directly in our 2,000Ha cultivation for feed sovereignty." },
            { icon: Droplets, title: "Clean Water", desc: "Advanced treatment systems returning purified water to the cycle." },
            { icon: Zap, title: "Biogas Energy", desc: "Renewable energy generated from waste to power on-site operations." },
          ].map((item, i) => (
            <div key={item.title} className="p-12 bg-white rounded-[3rem] border border-[#CD8C24]/10 shadow-xl hover:shadow-2xl transition-all group">
              <item.icon className="mb-8 text-[#FEA42A] group-hover:scale-110 transition-transform" size={48} />
              <h4 className="text-2xl font-black text-[#4F3C1C] uppercase mb-4 tracking-tighter italic">{item.title}</h4>
              <p className="text-[#4F3C1C]/60 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. ESG PERFORMANCE GRID - HIGH IMPACT DARK MODE */}
    <section className="py-32 bg-[#4F3C1C] text-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <AnimatedSection>
              <p className="text-[#FEA42A] text-xs uppercase tracking-[0.4em] font-black mb-6 italic">Strategic Pillars</p>
              <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-none mb-8">
                ESG <br /> <span className="text-[#FEA42A]">Impact.</span>
              </h2>
              <p className="text-[#EFE7DC]/50 font-medium leading-relaxed">
                Measuring our success by the resilience of the ecosystem and the prosperity of our communities.
              </p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImpactCard category="Environmental" val="Zero Waste" desc="100% waste transformation into value." />
            <ImpactCard category="Social" val="Empowerment" desc="Training 1,500+ local associations." />
            <ImpactCard category="Governance" val="Certified" desc="HACCP & Halal International Standards." />
            <ImpactCard category="Capital" val="Talent" desc="Building industry experts via academic R&D." />
          </div>
        </div>
      </div>
    </section>

    {/* 5. CALL TO ACTION - THE FINAL "PUNCH" */}
    <section className="py-32 bg-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#FEA42A] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-grain opacity-10" />
          <AnimatedSection>
            <h2 className="text-5xl md:text-8xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-10">
              Feeding the Future, <br /> Naturally.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-full font-black uppercase tracking-widest text-sm hover:scale-110 transition-all shadow-2xl"
            >
              Partner with the Mission <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

const ImpactCard = ({ category, val, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-[#FEA42A]/50 transition-all"
  >
    <div className="flex justify-between items-start mb-10">
       <p className="text-[#FEA42A] text-[10px] font-black uppercase tracking-widest">{category}</p>
       <CheckCircle2 size={24} className="text-[#FEA42A] opacity-20 group-hover:opacity-100 transition-opacity" />
    </div>
    <h3 className="text-3xl font-black text-[#EFE7DC] uppercase italic tracking-tighter mb-4">{val}</h3>
    <p className="text-[#EFE7DC]/40 text-sm font-medium">{desc}</p>
  </motion.div>
);

export default Sustainability;
