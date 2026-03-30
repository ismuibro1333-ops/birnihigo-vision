import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

// We use more descriptive data for the "Journey" cards
const journeySteps = [
  { 
    year: "2013", 
    title: "The Foundation", 
    tag: "Day-Old Chicks",
    desc: "Birnihigo established its roots, introducing the contract farming model as a core pillar from day one." 
  },
  { 
    year: "2014", 
    title: "Vertical Integration", 
    tag: "The Shift",
    desc: "Transitioned into a fully integrated system to meet the rapid demand for industrial-grade poultry." 
  },
  { 
    year: "2019", 
    title: "Awash Infrastructure", 
    tag: "42+ Hectares",
    desc: "Secured our strategic site in Gabi Resu Zone, establishing 9ha of breeding farms under strict biosecurity." 
  },
  { 
    year: "2023", 
    title: "Industrial Processing", 
    tag: "HACCP Standards",
    desc: "Development of our 24ha processing facility, focused on Halal-certified and export-ready excellence." 
  },
  { 
    year: "2025", 
    title: "Food Sovereignty", 
    tag: "2,000+ Ha",
    desc: "Expanding into large-scale Maize and Soya cultivation to secure 100% internal feed supply." 
  },
];

const AboutJourney = () => {
  const targetRef = useRef(null);
  
  // This tracks the scroll of the entire section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // This moves the timeline horizontally based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <Layout>
      {/* 1. HERO REVEAL (Matches Home Page) */}
      <section className="pt-32 pb-20 bg-[#EFE7DC]">
        <AnimatedSection className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">Our Journey</p>
          <h2 className="text-6xl md:text-8xl text-[#4F3C1C] font-black tracking-tighter italic">
            Evolution <span className="text-[#FEA42A]">to Scale</span>
          </h2>
        </AnimatedSection>
      </section>

      {/* 2. THE SEXY STICKY HORIZONTAL SCROLL */}
      <section ref={targetRef} className="relative h-[300vh] bg-[#4F3C1C]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Animated Background Text */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0.02]) }}
            className="absolute inset-0 flex items-center justify-center text-[20vw] font-black text-white pointer-events-none"
          >
            HISTORY
          </motion.div>

          <motion.div style={{ x }} className="flex gap-12 px-24">
            {journeySteps.map((step, i) => (
              <div key={i} className="group relative w-[450px] shrink-0">
                {/* Year Label */}
                <div className="flex items-baseline gap-4 mb-8">
                   <span className="text-[#FEA42A] text-8xl font-black transition-transform duration-500 group-hover:scale-110 block">
                    {step.year}
                  </span>
                  <div className="h-px flex-1 bg-[#FEA42A]/30" />
                </div>

                {/* Content Card (Glassmorphism) */}
                <div className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:-translate-y-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#FEA42A] text-[#4F3C1C] text-[10px] font-black uppercase mb-6">
                    {step.tag}
                  </span>
                  <h3 className="text-3xl text-[#EFE7DC] font-bold mb-6 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#EFE7DC]/60 text-lg leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. TRANSITION TO THE NEXT CHAPTER */}
      <section className="py-32 bg-[#EFE7DC] border-t border-[#CD8C24]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#CD8C24] text-lg font-bold mb-8 italic">
              "We didn't just build a farm; we built a science-driven ecosystem that nourishes the nation."
            </p>
            <div className="w-24 h-1 bg-[#4F3C1C] mx-auto rounded-full" />
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default AboutJourney;
