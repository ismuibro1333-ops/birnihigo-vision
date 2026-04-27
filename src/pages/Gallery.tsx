import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import scrollEgg from "@/assets/scroll-egg.jpg";
import scrollChick from "@/assets/scroll-chick.jpg";
import scrollChicken from "@/assets/scroll-chicken.jpg";
import scrollProduct from "@/assets/scroll-product.jpg";
import chickensCloseup from "@/assets/chickens-closeup.jpg";
import logisticsCrates from "@/assets/logistics-crates.jpg";
import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { useState } from "react";

type Category = "all" | "facilities" | "operations" | "community";

const images: { src: string; alt: string; category: Exclude<Category, "all"> }[] = [
  { src: scrollEgg, alt: "42-hectare facility construction site in Afar", category: "facilities" },
  { src: scrollChick, alt: "Automated feeding systems inside bio-secure poultry house", category: "facilities" },
  { src: heroBg, alt: "Full-scale broiler production house", category: "operations" },
  { src: scrollChicken, alt: "Chickens feeding at automated stations", category: "operations" },
  { src: chickensCloseup, alt: "Close-up of healthy broiler chickens", category: "operations" },
  { src: pic1, alt: "Birnihigo veterinary staff inside production facility", category: "community" },
  { src: pic2, alt: "Young chicks under heat lamps in brooding house", category: "operations" },
  { src: pic3, alt: "Chicks feeding at automated feeders in nursery", category: "operations" },
  { src: scrollProduct, alt: "Poultry transport crates at logistics facility", category: "operations" },
  { src: logisticsCrates, alt: "Stacked transport crates ready for distribution", category: "operations" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "facilities", label: "Bio-Secure Facilities" },
  { value: "operations", label: "Operational Excellence" },
  { value: "community", label: "Community Engagement" },
];

const Gallery = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-[#4F3C1C]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#FEA42A] text-xs uppercase tracking-[0.6em] mb-6 font-black italic">
              Visual Archive
            </p>
            <h1 className="text-5xl md:text-8xl text-[#EFE7DC] font-black tracking-tighter italic uppercase leading-[0.85] mb-8">
              Operations <br />
              <span className="text-[#FEA42A]">in Focus.</span>
            </h1>
            <p className="text-[#EFE7DC]/60 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              A visual journey through our 42-hectare integrated poultry facility — from construction to full-scale production.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-full transition-all ${
                  active === cat.value
                    ? "bg-[#4F3C1C] text-[#FEA42A] shadow-xl"
                    : "bg-white text-[#4F3C1C]/60 hover:text-[#4F3C1C] hover:bg-white/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {filtered.map((img, i) => (
              <AnimatedSection key={img.alt} delay={(i % 3) * 0.1} className="mb-6 break-inside-avoid">
                <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
