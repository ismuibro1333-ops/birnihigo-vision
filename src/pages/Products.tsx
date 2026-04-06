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
    desc: "Precision-formulated mash, crumble, and pellet feed for poultry and cattle. Produced via our 6-ton/hour internal mill using maize and soya from our 2,000+ hectare plantations.",
    image: scrollChick,
    stats: ["6 T/Hour Mill", "Poultry & Cattle", "Internal Supply"],
  },
  {
    icon: Egg,
    title: "Day-Old Chicks (DOC)",
    tag: "Genetic Foundation",
    desc: "Supply of high-vitality broiler chicks utilizing world-class Cobb 500 genetics. Our climate-controlled hatchery ensures reliable supply for independent and contract farmers.",
    image: scrollProduct,
    stats: ["Cobb 500 Genetics", "Bio-Secure Hatchery", "Reliable Supply"],
  },
  {
    icon: Drumstick,
    title: "Fresh & Processed Poultry",
    tag: "Market Delivery",
    desc: "Safe, affordable whole birds and prime cuts processed in our 48-ton daily capacity facility. Fully HACCP-aligned and Halal-certified for national and export markets.",
    image: chickensCloseup,
    stats: ["48T Daily Capacity", "Halal Certified", "HACCP Aligned"],
  },
  {
    icon: Sprout,
    title: "Organic Fertilizer",
    tag: "The Circular Loop",
    desc: "Closing the industrial loop by converting 100% of organic poultry waste into high-grade fertilizer. Supporting sustainable soil health for national agriculture.",
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
            Industrial Scale. National Impact.
          </motion.p>
          <h1 className="font-display text-5xl md:text-8xl text-[#4F3C1C] font-black tracking-tighter mb-8 italic">
            Safe. Affordable. <span className="text-[#FEA42A]">Scalable.</span>
          </h1>
          <p className="text-[#4F3C1C]/70 text-lg max-w-2xl mx-auto leading-relaxed font-bold italic border-l-2 border-[#FEA42A] pl-6">
            A vertically integrated agribusiness platform delivering quality across the entire value chain.
          </p>
        </AnimatedSection>
      </section>

      {/* 2. THE PRODUCT GRID */}
      <section className="bg-[#EFE7DC] py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {productCategories.map((product, i) => (
            <div key={product.title} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* Image Section */}
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

                {/* Content Section */}
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

      {/* 3. COLD CHAIN & STANDARDS (Condensed) */}
      <section className="py-32 bg-[#4F3C1C] text-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <AnimatedSection>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-none">
                Industrial-Grade <br/><span className="text-[#FEA42A]">Reliability.</span>
              </h2>
              <p className="text-xl opacity-60 leading-relaxed font-medium italic border-l-2 border-[#FEA42A] pl-6 mb-12">
                Our operations are built on clinical biosecurity and a continuous cold-chain logistics network, ensuring freshness from our Afar hub to your market.
              </p>
              <div className="flex gap-12">
                 <div>
                    <p className="text-5xl font-black text-[#FEA42A] mb-2 tracking-tighter italic">24/7</p>
                    <p className="text-[10px] uppercase tracking-widest font-black opacity-30 italic">Thermal Monitoring</p>
                 </div>
                 <div>
                    <p className="text-5xl font-black text-[#FEA42A] mb-2 tracking-tighter italic">Zero</p>
                    <p className="text-[10px] uppercase tracking-widest font-black opacity-30 italic">Biosecurity Breaches</p>
                 </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                <img src={logisticsCrates} alt="Logistics Hub" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#FEA42A]/10 mix-blend-overlay" />
              </div>
            </AnimatedSection>
          </div>

          {/* Standards Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Biosecurity Excellence", desc: "Rigorous laboratory monitoring and strict environmental controls ensuring zero-risk production." },
              { icon: Factory, title: "HACCP Aligned", desc: "World-class processing standards focused on food safety and international hygiene protocols." },
              { icon: Thermometer, title: "Precision Control", desc: "Automated climate-controlled housing and advanced data-driven feeding systems for poultry health." }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all">
                  <item.icon size={32} className="text-[#FEA42A] mb-6" />
                  <h4 className="text-lg font-black uppercase tracking-widest mb-4 italic">{item.title}</h4>
                  <p className="text-sm opacity-50 leading-relaxed font-bold">{item.desc}</p>
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
