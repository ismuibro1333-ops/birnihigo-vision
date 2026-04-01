import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

// Existing Assets
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

// New Assets - UPDATED TO .PNG based on your folder screenshot
import img1 from "@/assets/1image.png";
import img2 from "@/assets/2image.png";
import img3 from "@/assets/3image.png";
import img4 from "@/assets/4image.png";
import img5 from "@/assets/5image.png";
import img6 from "@/assets/6image.png";
import img7 from "@/assets/7image.png";
import img8 from "@/assets/8image.png";
import img9 from "@/assets/9image.png";
import img10 from "@/assets/10image.png";

type Category = "all" | "facilities" | "operations" | "community";

const images = [
  { src: img1, alt: "Automated production line", category: "operations", aspect: "aspect-video" },
  { src: img2, alt: "Nursery phase management", category: "operations", aspect: "aspect-square" },
  { src: img3, alt: "Large scale broiler house", category: "operations", aspect: "aspect-video" },
  { src: img4, alt: "Precision feeding systems", category: "operations", aspect: "aspect-video" },
  { src: img5, alt: "Industrial processing plant", category: "facilities", aspect: "aspect-video" },
  { src: img6, alt: "Farmer training workshop", category: "community", aspect: "aspect-video" },
  { src: img7, alt: "Technical seminar session", category: "community", aspect: "aspect-video" },
  { src: img8, alt: "Outreach program group", category: "community", aspect: "aspect-video" },
  { src: img9, alt: "Day-old chick distribution", category: "community", aspect: "aspect-video" },
  { src: img10, alt: "Logistics and partnership", category: "community", aspect: "aspect-video" },
  { src: scrollEgg, alt: "Facility site", category: "facilities", aspect: "aspect-square" },
  { src: scrollChick, alt: "Bio-secure housing", category: "facilities", aspect: "aspect-square" },
  { src: pic1, alt: "Veterinary staff", category: "community", aspect: "aspect-video" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "facilities", label: "Facilities" },
  { value: "operations", label: "Operations" },
  { value: "community", label: "Community" },
];

const Gallery = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? images : images.filter((img) => img.category === active);

  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl font-black text-[#4F3C1C] mb-4 italic">Operations in Focus</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActive(cat.value)}
                  className={`px-8 py-2 rounded-full font-bold transition-all ${
                    active === cat.value ? "bg-[#FEA42A] text-[#4F3C1C]" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((img, i) => (
              <AnimatedSection key={i}>
                <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm group">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
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
