"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Wheat, Egg, Drumstick, ShieldCheck, 
  Thermometer, Truck, ArrowRight, Sprout, Factory
} from "lucide-react";

// Asset imports 
import scrollChick from "@/assets/scroll-chick.jpg";
import scrollChicken from "@/assets/scroll-chicken.jpg";
import chickensCloseup from "@/assets/chickens-closeup.jpg";
import scrollProduct from "@/assets/scroll-product.jpg";
import logisticsCrates from "@/assets/logistics-crates.jpg";

const productCategories = [
  {
    icon: Wheat,
    title: "Animal Feed Solutions",
    tag: "Upstream Integration",
    desc: "Precision-formulated nutrition produced through internal industrial feed systems (6 T/Hr), forming the upstream backbone of a fully integrated poultry infrastructure.",
    image: scrollChick,
    stats: ["6 T/Hour Mill", "Poultry & Cattle", "Internal Supply"],
  },
  {
    icon: Egg,
    title: "Day-Old Chicks (DOC)",
    tag: "Genetic Foundation",
    desc: "High-performance broiler chicks forming the genetic foundation of a scalable national production system.",
    image: scrollProduct,
    stats: ["Cobb 500 Genetics", "Bio-Secure Hatchery", "Reliable Supply"],
  },
  {
    icon: Drumstick,
    title: "Fresh & Processed Poultry",
    tag: "Market Delivery",
    desc: "Industrial-scale poultry processing delivering safe, affordable protein aligned with national food security and export standards.",
    image: chickensCloseup,
    stats: ["48T Daily Capacity", "Halal Certified", "HACCP Aligned"],
  },
  {
    icon: Sprout,
    title: "Organic Fertilizer",
    tag: "The Circular Loop",
    desc: "Closing the loop through waste-to-value conversion, reinforcing a circular, resource-efficient agricultural system.",
    image: scrollChicken,
    stats: ["100% Organic", "Waste-to-Value", "Soil Enrichment"],
  },
];

const Products = () => {
  return (
    <Layout>

      {/* 1. STRATEGIC HERO */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/industrial-poultry-dark.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EFE7DC]" />
        
        <AnimatedSection className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-[#FEA42A] text-[10px] uppercase mb-6 font-black italic"
          >
            National Infrastructure. Industrial Execution.
          </motion.p>

          <h1 className="font-display text-5xl md:text-8xl text-[#4F3C1C] font-black tracking-tighter mb-8 italic">
            Import Substitution. <span className="text-[#FEA42A]">Food Sovereignty.</span>
          </h1>

          <p className="text-[#4F3C1C]/70 text-lg max-w-2xl mx-auto leading-relaxed font-bold italic border-l-2 border-[#FEA42A] pl-6">
            A fully integrated poultry system engineered to replace imports, stabilize supply, and deliver scalable protein infrastructure across Ethiopia.
          </p>
        </AnimatedSection>
      </section>

      {/* 🔥 VERTICAL INTEGRATION FLOW */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          <AnimatedSection className="text-center mb-20">
            <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-bold">
              Integrated Value Chain
            </p>
            <h2 className="text-5xl font-black tracking-tighter mb-6">
              From Laboratory to Market
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              A synchronized, industrial pipeline transforming poultry production into a national-scale system.
            </p>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row items-center gap-6 overflow-x-auto">

            {[
              { title: "Breeder Farm", desc: "Elite genetic stock" },
              { title: "Hatchery", desc: "Bio-secured incubation" },
              { title: "Feed Mill", desc: "Automated nutrition (6 T/Hr)" },
              { title: "Broiler Farms", desc: "42-hectare industrial site" },
              { title: "Processing", desc: "Halal-certified facility" },
              { title: "Distribution", desc: "Cold-chain logistics" },
              { title: "Export", desc: "GCC & global standards" },
            ].map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="flex items-center gap-6">

                  <div className="min-w-[200px] bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-[#FEA42A]/10 transition-all">
                    <p className="text-[#FEA42A] text-xs uppercase tracking-[0.3em] mb-2 font-bold">
                      Step {i + 1}
                    </p>
                    <h3 className="font-black text-lg mb-1">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.desc}</p>
                  </div>

                  {i !== 6 && <ArrowRight className="text-[#FEA42A] hidden md:block" />}

                </div>
              </AnimatedSection>
            ))}

          </div>

          <AnimatedSection delay={0.6} className="mt-20 text-center max-w-4xl mx-auto">
            <div className="w-16 h-1 bg-[#FEA42A]/40 mx-auto mb-8 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-black mb-6">
              Not a Product. A National System.
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              This integrated structure enables large-scale import substitution, reduces systemic inefficiencies, and builds the foundation for Ethiopia’s long-term food sovereignty.
            </p>
          </AnimatedSection>

        </div>
      </section>

      {/* 2. PRODUCT GRID (unchanged layout, upgraded text already applied) */}
      <section className="bg-[#EFE7DC] py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {productCategories.map((product, i) => (
            <div key={product.title} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <AnimatedSection>
                    <div className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white/40">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2 }}
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4F3C1C]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-10 left-10 right-10">
                         <p className="text-[#FEA42A] font-black text-[10px] uppercase tracking-[0.3em] mb-3">{product.tag}</p>
                         <h3 className="text-[#EFE7DC] text-4xl font-black italic leading-tight uppercase tracking-tighter">{product.title}</h3>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <AnimatedSection delay={0.2}>
                    <div className="flex items-center gap-6 mb-8">
                       <div className="w-20 h-20 rounded-[2rem] bg-[#4F3C1C] flex items-center justify-center text-[#FEA42A] shadow-2xl group-hover:-rotate-6 transition-transform">
                          <product.icon size={36} />
                       </div>
                       <div className="h-[2px] w-20 bg-[#FEA42A]/20" />
                    </div>
                    <p className="text-2xl text-[#4F3C1C] font-bold italic leading-relaxed mb-10 opacity-80">
                      {product.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {product.stats.map((stat) => (
                        <div key={stat} className="px-6 py-3 bg-white border border-[#CD8C24]/10 text-[#4F3C1C] text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-sm">
                          {stat}
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-12 group flex items-center gap-4 text-[#4F3C1C] font-black uppercase tracking-widest text-[10px] hover:text-[#FEA42A] transition-colors">
                      Request Technical Specifications <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </AnimatedSection>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* rest unchanged (cold chain section stays same) */}

    </Layout>
  );
};

export default Products;