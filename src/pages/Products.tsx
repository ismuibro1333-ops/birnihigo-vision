"use client";

import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Wheat, Egg, Drumstick, ArrowRight, Sprout
} from "lucide-react";

// Assets 
import scrollChick from "@/assets/scroll-chick.jpg";
import scrollChicken from "@/assets/scroll-chicken.jpg";
import chickensCloseup from "@/assets/chickens-closeup.jpg";
import scrollProduct from "@/assets/scroll-product.jpg";

const productCategories = [
  {
    icon: Wheat,
    title: "Animal Feed Solutions",
    tag: "Upstream Integration",
    desc: "Precision-formulated nutrition produced through internal industrial feed systems (6 T/Hr).",
    image: scrollChick,
    stats: ["6 T/Hour Mill", "Poultry & Cattle", "Internal Supply"],
  },
  {
    icon: Egg,
    title: "Day-Old Chicks (DOC)",
    tag: "Genetic Foundation",
    desc: "High-performance broiler chicks forming the genetic foundation of a scalable production system.",
    image: scrollProduct,
    stats: ["Cobb 500 Genetics", "Bio-Secure Hatchery", "Reliable Supply"],
  },
  {
    icon: Drumstick,
    title: "Fresh & Processed Poultry",
    tag: "Market Delivery",
    desc: "Industrial-scale poultry processing delivering safe, affordable protein.",
    image: chickensCloseup,
    stats: ["48T Daily Capacity", "Halal Certified", "HACCP Aligned"],
  },
  {
    icon: Sprout,
    title: "Organic Fertilizer",
    tag: "The Circular Loop",
    desc: "Closing the loop through waste-to-value conversion.",
    image: scrollChicken,
    stats: ["100% Organic", "Waste-to-Value", "Soil Enrichment"],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-black" />
        <AnimatedSection className="relative z-10 text-center px-6">
          <h1 className="font-display text-5xl md:text-8xl text-white font-black tracking-tighter mb-8 italic">
            Production & Processing
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed font-bold italic">
            Industrial execution for national-scale infrastructure.
          </p>
        </AnimatedSection>
      </section>

      {/* PRODUCT GRID */}
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
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </AnimatedSection>
                </div>

                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <AnimatedSection delay={0.2}>
                    <div className="flex items-center gap-6 mb-8">
                       <div className="w-20 h-20 rounded-[2rem] bg-[#4F3C1C] flex items-center justify-center text-[#FEA42A]">
                          <product.icon size={36} />
                       </div>
                    </div>
                    <h3 className="text-[#4F3C1C] text-4xl font-black italic mb-4 uppercase">{product.title}</h3>
                    <p className="text-2xl text-[#4F3C1C] font-bold italic mb-10 opacity-80">
                      {product.desc}
                    </p>
                  </AnimatedSection>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
