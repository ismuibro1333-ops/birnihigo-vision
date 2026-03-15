import { useState } from "react";
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

type Category = "all" | "facilities" | "operations" | "community";

const images: { src: string; alt: string; category: Exclude<Category, "all">; aspect: string }[] = [
  { src: scrollEgg, alt: "42-hectare facility construction site in Afar, Ethiopia", category: "facilities", aspect: "aspect-[4/3]" },
  { src: scrollChick, alt: "Automated feeding systems inside bio-secure poultry house", category: "facilities", aspect: "aspect-[4/3]" },
  { src: heroBg, alt: "Full-scale broiler production house with thousands of birds", category: "operations", aspect: "aspect-[16/9]" },
  { src: scrollChicken, alt: "Chickens feeding at automated stations inside facility", category: "operations", aspect: "aspect-[4/3]" },
  { src: chickensCloseup, alt: "Close-up of healthy broiler chickens in bio-secure environment", category: "operations", aspect: "aspect-[3/4]" },
  { src: pic1, alt: "Birnihigo veterinary staff inside production facility", category: "community", aspect: "aspect-[16/9]" },
  { src: pic2, alt: "Young chicks under heat lamps in brooding house", category: "operations", aspect: "aspect-[4/3]" },
  { src: pic3, alt: "Chicks feeding at automated feeders in nursery", category: "operations", aspect: "aspect-[4/3]" },
  { src: scrollProduct, alt: "Poultry transport crates at logistics facility", category: "operations", aspect: "aspect-[4/3]" },
  { src: logisticsCrates, alt: "Stacked transport crates ready for distribution", category: "operations", aspect: "aspect-[4/3]" },
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
      <section className="section-padding bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">Operations in Focus</h1>
            <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
              A visual journey through our 42-hectare integrated poultry facility — from construction to full-scale production.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-5 py-2 text-sm font-body font-medium rounded-full border transition-all ${
                  active === cat.value
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={img.alt} delay={(i % 3) * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-border break-inside-avoid">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
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
