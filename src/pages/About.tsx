import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { 
  ShieldCheck, Recycle, GraduationCap, Award, 
  ChevronRight, ArrowDown 
} from "lucide-react";

const timeline = [
  { year: "2013", title: "Inception", desc: "Established as a specialized day-old chick supplier, laying the groundwork for integrated contract farming." },
  { year: "2014-18", title: "Integration", desc: "Transitioned into a vertically integrated system to bridge the gap between quality supply and market demand." },
  { year: "2019-22", title: "Industrial Infrastructure", desc: "Secured 42+ hectares in Awash and established a 9ha breeding farm with science-based biosecurity protocols." },
  { year: "2023-24", title: "Processing & Standards", desc: "Operationalized a 24ha processing facility focused on HACCP-aligned safety and global Halal standards." },
  { year: "2025", title: "Feed Sovereignty", desc: "Acquired 2,000+ hectares for Maize and Soya plantations to secure 100% internal feed supply chain." },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <Layout>
      {/* 1. HIGH-IMPACT HERO - Dark Industrial Theme */}
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

      {/* 2. STRATEGIC PILLARS - Glassmorphism cards */}
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

      {/* 3. THE JOURNEY - Sticky Scroll */}
      <section ref={containerRef} className="relative bg-[#4F3C1C] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Scrolling Content */}
          <div className="py-20">
            <h2 className="text-[#FEA42A] text-5xl font-black italic mb-32 tracking-tighter sticky top-20">The Evolution</h2>
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

          {/* Right Side: Sticky Visuals */}
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
