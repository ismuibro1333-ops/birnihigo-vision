import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Wheat, Egg, Drumstick, ShieldCheck, 
  Thermometer, Truck, ArrowRight, ChevronRight 
} from "lucide-react";

// Asset imports remain the same
import scrollChick from "@/assets/scroll-chick.jpg";
import scrollChicken from "@/assets/scroll-chicken.jpg";
import chickensCloseup from "@/assets/chickens-closeup.jpg";
import scrollProduct from "@/assets/scroll-product.jpg";
import logisticsCrates from "@/assets/logistics-crates.jpg";

const products = [
  {
    icon: Wheat,
    title: "Premium Feed",
    tag: "Phase 01: Inputs",
    desc: "Sustainable maize and soya-based high-quality feed produced on 2,000+ hectares. Optimized for Cobb 500 genetics to ensure maximum bird health.",
    image: scrollChick,
    stats: ["2,000+ Ha", "Maize & Soya", "FCR Optimized"],
  },
  {
    icon: Egg,
    title: "Hatchery & Genetics",
    tag: "Phase 02: Life",
    desc: "Climate-controlled incubation utilizing world-class Cobb 500 genetics. Our facility ensures 85%+ hatch rates with clinical biosecurity.",
    image: scrollProduct,
    stats: ["Cobb 500", "85%+ Hatch Rate", "Bio-Secure"],
  },
  {
    icon: Drumstick,
    title: "Halal Poultry",
    tag: "Phase 03: Market",
    desc: "HACCP-certified industrial processing with 48-ton daily capacity. Delivering whole birds and premium cuts to international standards.",
    image: chickensCloseup,
    stats: ["48T Daily", "Halal Certified", "HACCP Level"],
  },
];

const Products = () => {
  const containerRef = useRef(null);

  return (
    <Layout>
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/industrial-poultry-dark.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EFE7DC]" />
        
        <AnimatedSection className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="text-[#FEA42A] text-xs uppercase mb-6 font-black"
          >
            Integrated Value Chain
          </motion.p>
          <h1 className="font-display text-6xl md:text-9xl text-[#4F3C1C] font-black tracking-tighter mb-8 italic">
            Feed <span className="text-[#FEA42A]">to</span> Fork.
          </h1>
          <p className="text-[#4F3C1C]/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium italic border-l-2 border-[#FEA42A] pl-6">
            Scientific precision at every stage of the poultry lifecycle.
          </p>
        </AnimatedSection>
      </section>

      {/* 2. THE PRODUCT SHOWCASE */}
      <section className="bg-[#EFE7DC] py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-40">
          {products.map((product, i) => (
            <div key={product.title} className="group">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
                
                {/* Image Section with Parallax Effect */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <AnimatedSection>
                    <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4F3C1C]/60 to-transparent" />
                      <div className="absolute bottom-10 left-10">
                         <p className="text-[#FEA42A] font-black text-xs uppercase tracking-widest mb-2">{product.tag}</p>
                         <h3 className="text-[#EFE7DC] text-4xl font-black italic">{product.title}</h3>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Content Section */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1 text-right" : ""}`}>
                  <AnimatedSection delay={0.2}>
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-[#4F3C1C] items-center justify-center mb-8 text-[#FEA42A] shadow-xl group-hover:rotate-12 transition-transform`}>
                      <product.icon size={32} />
                    </div>
                    <p className="text-[#4F3C1C]/80 text-xl leading-relaxed mb-10 font-medium">
                      {product.desc}
                    </p>
                    <div className={`flex flex-wrap gap-3 ${i % 2 === 1 ? "justify-end" : ""}`}>
                      {product.stats.map((stat) => (
                        <span key={stat} className="px-6 py-2 bg-white/50 backdrop-blur-sm border border-[#CD8C24]/20 text-[#4F3C1C] text-[10px] font-black uppercase tracking-widest rounded-full">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LOGISTICS: THE COLD CHAIN (Sticky Visual) */}
      <section className="py-32 bg-[#4F3C1C] text-[#EFE7DC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <div className="w-20 h-[2px] bg-[#FEA42A] mb-8" />
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-none">
              Cold-Chain <br/><span className="text-[#FEA42A]">Logistics.</span>
            </h2>
            <p className="text-xl opacity-60 leading-relaxed mb-12 max-w-lg">
              Freshness is non-negotiable. Our dedicated refrigerated fleet maintains a constant thermal environment from the processing plant to the shelf.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div>
                  <p className="text-4xl font-black text-[#FEA42A] mb-2">0%</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Freshness Loss</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-[#FEA42A] mb-2">24/7</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Monitoring</p>
               </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl rotate-2">
                <img src={logisticsCrates} alt="Logistics" className="w-full h-full object-cover" />
              </div>
              {/* Overlay Badge */}
              <div className="absolute -bottom-10 -left-10 bg-[#FEA42A] p-10 rounded-[3rem] text-[#4F3C1C] shadow-2xl -rotate-3 hidden md:block">
                <Truck size={40} className="mb-4" />
                <p className="font-black uppercase tracking-tighter leading-tight text-xl">
                  Market Ready <br/> Distribution
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. STANDARDS: THE SCIENCE */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-[#4F3C1C] italic tracking-tighter">Bio-Secure Standards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Zero Contamination", desc: "Automated sanitation and multi-layer barriers prevent cross-contamination." },
              { icon: Thermometer, title: "Climate Control", desc: "Precision temperature and humidity management for optimal bird welfare." },
              { icon: ArrowRight, title: "Traceability", desc: "Total transparency from the farm origin to the final consumer market." }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.2}>
                <div className="p-12 bg-white/40 backdrop-blur-md rounded-[3rem] border border-[#CD8C24]/10 hover:bg-[#4F3C1C] group transition-all duration-500 shadow-xl">
                  <div className="w-14 h-14 bg-[#FEA42A] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <item.icon size={28} className="text-[#4F3C1C]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#4F3C1C] group-hover:text-[#FEA42A] mb-4 transition-colors uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[#4F3C1C]/70 group-hover:text-[#EFE7DC]/70 leading-relaxed font-medium transition-colors">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
