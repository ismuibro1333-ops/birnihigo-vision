import { useRef } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { 
  Recycle, Sprout, Droplets, Zap, ArrowRight, 
  CheckCircle2, Sun, ThermometerSnowflake, Users2, GraduationCap, HeartHandshake 
} from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { value: "42ha", label: "Industrial Site" },
  { value: "2,000ha", label: "Integrated Feed" },
  { value: "100%", label: "Waste Recovery" },
  { value: "1,500+", label: "Farmers Supported" },
];

const Sustainability = () => (
  <Layout>
    {/* 1. HERO SECTION */}
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
            Sustainability <br /> Through <br /> <span className="text-[#FEA42A]">System Design.</span>
          </h1>
          <p className="text-[#EFE7DC]/60 text-xl font-medium max-w-3xl leading-relaxed italic border-l-4 border-[#FEA42A] pl-8">
            "We aren't just farming; we are engineering a circular economy. From waste-to-fertilizer to climate-adaptive housing, sustainability is our core industrial mandate."
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

    {/* 3. CIRCULAR ECONOMY (WASTE-TO-RESOURCE) */}
    <section className="py-32 bg-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-6">
            The Circular <span className="text-[#CD8C24]">Loop.</span>
          </h2>
          <p className="text-[#4F3C1C]/60 max-w-2xl font-bold italic">
            Closing the cycle by converting 100% of organic by-products into high-grade industrial assets.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Sprout, title: "Waste → Fertilizer", desc: "Converting 100% of poultry waste into nutrient-rich organic fertilizer for national soil health." },
            { icon: Droplets, title: "Water Reuse", desc: "Advanced closed-loop treatment systems ensuring zero water wastage across our 42ha hub." },
            { icon: Zap, title: "Biogas Production", desc: "Transforming organic matter into renewable energy to power climate-controlled housing." },
          ].map((item, i) => (
            <div key={item.title} className="p-12 bg-white rounded-[3rem] border border-[#CD8C24]/10 shadow-xl hover:shadow-2xl transition-all group">
              <item.icon className="mb-8 text-[#FEA42A] group-hover:rotate-12 transition-transform" size={48} />
              <h4 className="text-2xl font-black text-[#4F3C1C] uppercase mb-4 tracking-tighter italic">{item.title}</h4>
              <p className="text-[#4F3C1C]/60 font-medium leading-relaxed italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. NEW: CLIMATE RESILIENCE SECTION */}
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <AnimatedSection>
          <p className="text-[#CD8C24] text-[10px] uppercase tracking-[0.4em] font-black mb-6 italic">Engineering Adaptation</p>
          <h2 className="text-5xl md:text-7xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-10">
            Climate <br/> <span className="text-[#FEA42A]">Resilience.</span>
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 bg-[#EFE7DC] rounded-xl flex items-center justify-center shrink-0 text-[#4F3C1C]"><Sun size={24} /></div>
               <div>
                  <h4 className="font-black italic text-lg uppercase tracking-tight mb-2">Moringa Feed Integration</h4>
                  <p className="text-[#4F3C1C]/60 text-sm font-medium">Utilizing drought-resistant Moringa as a nutritional supplement to ensure feed security during climate shifts.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 bg-[#EFE7DC] rounded-xl flex items-center justify-center shrink-0 text-[#4F3C1C]"><ThermometerSnowflake size={24} /></div>
               <div>
                  <h4 className="font-black italic text-lg uppercase tracking-tight mb-2">Heat-Adaptive Design</h4>
                  <p className="text-[#4F3C1C]/60 text-sm font-medium">Infrastructure engineered for the Afar region, featuring advanced ventilation and automated thermal management.</p>
               </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3} className="relative">
          <div className="rounded-[4rem] overflow-hidden aspect-square border-[12px] border-[#EFE7DC] shadow-2xl">
            <img src="/climate-resilience.jpg" alt="Integrated Model" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-[#4F3C1C] p-10 rounded-[3rem] text-[#FEA42A] shadow-2xl">
             <p className="text-4xl font-black italic tracking-tighter leading-none mb-2">99%</p>
             <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Water Conservation</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* 5. SOCIAL IMPACT - FRANCHISE & INCLUSION */}
    <section className="py-32 bg-[#4F3C1C] text-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <AnimatedSection>
              <p className="text-[#FEA42A] text-xs uppercase tracking-[0.4em] font-black mb-6 italic">National Empowerment</p>
              <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-none mb-8">
                Social <br /> <span className="text-[#FEA42A]">Impact.</span>
              </h2>
              <p className="text-[#EFE7DC]/50 font-medium leading-relaxed italic">
                Our model isn't just integrated—it's inclusive. We build future industry leaders through youth franchises and contract farming inclusion.
              </p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImpactCard category="Inclusion" val="Women Empowerment" desc="Dedicated programs for women-led poultry cooperatives and resource access." icon={HeartHandshake} />
            <ImpactCard category="Youth" val="Franchise Model" desc="Enabling young entrepreneurs through managed poultry franchise opportunities." icon={GraduationCap} />
            <ImpactCard category="Employment" val="Contract Farming" desc="Integrating 1,500+ farmers into a secure, science-led supply chain." icon={Users2} />
            <ImpactCard category="Development" val="National Capacity" desc="Training future industry experts via academic R&D partnerships." icon={CheckCircle2} />
          </div>
        </div>
      </div>
    </section>

    {/* 6. CALL TO ACTION */}
    <section className="py-32 bg-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#FEA42A] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden group">
          <AnimatedSection>
            <h2 className="text-5xl md:text-8xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-10">
              Transforming <br/> Ethiopia's Future.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-110 transition-all shadow-2xl"
            >
              Partner with the Mission <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

const ImpactCard = ({ category, val, desc, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-[#FEA42A]/50 transition-all"
  >
    <div className="flex justify-between items-start mb-10">
       <p className="text-[#FEA42A] text-[10px] font-black uppercase tracking-widest">{category}</p>
       <Icon size={24} className="text-[#FEA42A] opacity-20 group-hover:opacity-100 transition-opacity" />
    </div>
    <h3 className="text-2xl font-black text-[#EFE7DC] uppercase italic tracking-tighter mb-4">{val}</h3>
    <p className="text-[#EFE7DC]/40 text-sm font-medium leading-relaxed italic">{desc}</p>
  </motion.div>
);

export default Sustainability;
