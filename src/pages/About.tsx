import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { 
  ShieldCheck, Recycle, GraduationCap, Award, 
  ChevronRight, ArrowDown, CheckCircle2
} from "lucide-react";

const timeline = [
  { year: "2013", title: "Establishment", desc: "Fertile egg import & DOC supply — laying the groundwork for an integrated poultry system." },
  { year: "2014–18", title: "Integration Phase", desc: "Hatchery, feed mill, and broiler operations established to bridge quality supply and market demand." },
  { year: "2019–Present", title: "Industrial Scale Development", desc: "Processing plant, biosecure farms, and contract farming expansion at industrial scale." },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <Layout>
      {/* 1. HIGH-IMPACT HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('/poultry-bg.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#EFE7DC]" />
        
        <AnimatedSection className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            className="text-[#FEA42A] text-xs uppercase mb-6 font-black"
          >
            Corporate Identity
          </motion.p>
          <h1 className="font-display text-5xl md:text-8xl text-[#EFE7DC] font-black tracking-tighter mb-8 italic leading-none">
            Industrial <span className="text-[#FEA42A]">Precision.</span>
          </h1>
          <p className="text-[#EFE7DC]/80 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed border-l-2 border-[#FEA42A] pl-6 py-2 italic">
            "Eliminating food insecurity through science-led, large-scale integrated poultry ecosystems."
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 flex justify-center"
          >
            <ArrowDown className="text-[#FEA42A]" />
          </motion.div>
        </AnimatedSection>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-[#EFE7DC]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">Who We Are</p>
            <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter mb-8 leading-tight">
              Built to Solve a<br />Systems Problem
            </h2>
            <p className="text-[#4F3C1C]/70 text-lg leading-relaxed font-medium mb-6">
              Birnihigo Integrated Farms is a vertically integrated poultry company established in 2013 with a clear mission: to make high-quality, affordable protein accessible while building a resilient, export-ready poultry system.
            </p>
            <p className="text-[#4F3C1C] text-lg font-semibold leading-relaxed">
              What began as a day-old chick supply operation has evolved into a fully integrated value chain — from breeding and hatchery to processing and market delivery.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. STRATEGIC PILLARS */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Biosecurity", desc: "Rigorous laboratory monitoring and strict environmental controls ensuring zero-risk production." },
              { icon: Recycle, title: "Waste Synergy", desc: "Closing the loop by converting 100% of organic by-products into high-grade organic fertilizer." },
              { icon: GraduationCap, title: "Tech Adoption", desc: "Scaling through automated climate-controlled housing and advanced data-driven feeding systems." },
            ].map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.2}>
                <div className="group relative p-10 h-full bg-white/40 backdrop-blur-md border border-[#CD8C24]/10 rounded-[2.5rem] hover:bg-[#4F3C1C] transition-all duration-500 shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-[#FEA42A] flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-lg">
                    <p.icon size={30} className="text-[#4F3C1C]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#4F3C1C] group-hover:text-[#FEA42A] mb-4 transition-colors uppercase tracking-widest">{p.title}</h3>
                  <p className="text-[#4F3C1C]/70 group-hover:text-[#EFE7DC]/70 leading-relaxed font-medium transition-colors">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE JOURNEY */}
      <section ref={containerRef} className="relative bg-[#4F3C1C] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="py-20">
            <h2 className="text-[#FEA42A] text-5xl font-black italic mb-32 tracking-tighter sticky top-20">Our Journey</h2>
            {timeline.map((item, i) => (
              <div key={i} className="mb-40 last:mb-0">
                <span className="text-[#FEA42A] text-8xl font-black opacity-10 block mb-4">{item.year}</span>
                <h3 className="text-3xl font-bold text-[#EFE7DC] mb-6 flex items-center gap-4 uppercase tracking-wider">
                  <ChevronRight className="text-[#FEA42A]" /> {item.title}
                </h3>
                <p className="text-[#EFE7DC]/60 text-xl leading-relaxed max-w-md font-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden lg:block sticky top-0 h-screen flex items-center">
            <div className="relative w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <motion.div 
                style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.15]) }}
                className="w-full h-full bg-[url('/industrial-poultry.jpg')] bg-cover bg-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4F3C1C] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 right-12">
                <p className="text-[#FEA42A] font-black uppercase tracking-widest text-xs mb-2">Industrial Scale</p>
                <p className="text-[#EFE7DC] text-2xl font-bold leading-tight">Securing National Sovereignty through 2,000+ Hectares of Feed Self-Sufficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="py-24 bg-[#EFE7DC] border-y border-[#CD8C24]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">Our Philosophy</p>
            <h2 className="text-5xl md:text-6xl text-[#4F3C1C] font-black tracking-tighter mb-8 leading-tight">
              Integration.<br />
              <span className="text-[#FEA42A]">Execution.</span><br />
              Impact.
            </h2>
            <div className="w-16 h-1 bg-[#CD8C24]/30 mx-auto my-8 rounded-full" />
            <p className="text-[#4F3C1C]/70 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              We believe transformation in agriculture requires systems — not isolated interventions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY BIRNIHIGO */}
      <section className="py-24 bg-[#4F3C1C]" aria-labelledby="why-birnihigo-heading">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-bold">Why Birnihigo</p>
            <h2 id="why-birnihigo-heading" className="text-5xl text-[#EFE7DC] font-black tracking-tighter">
              What Sets Us Apart
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "First fully integrated poultry model in Ethiopia",
              "Built under real operational conditions",
              "Designed for scalability and replication",
            ].map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-[#FEA42A]/10 transition-all duration-300">
                  <CheckCircle2 size={28} className="text-[#FEA42A] shrink-0" />
                  <p className="text-[#EFE7DC] font-semibold text-base leading-snug">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION & COMMITMENT FOOTER */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex p-4 bg-[#FEA42A]/10 rounded-full mb-8">
              <Award className="text-[#FEA42A]" size={40} />
            </div>
            <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter mb-12">Strategic Mandate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Science-based food sovereignty",
                "Industrial-scale biosecurity",
                "Export-grade Halal processing",
                "Internalized feed supply chain"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-white/60 rounded-3xl border border-[#CD8C24]/10 shadow-sm">
                  <div className="w-3 h-3 bg-[#FEA42A] rounded-full shrink-0" />
                  <span className="font-bold text-[#4F3C1C]/80 uppercase text-xs tracking-widest">{text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
