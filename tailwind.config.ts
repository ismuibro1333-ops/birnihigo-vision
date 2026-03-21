import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import ScrollytellingHero from "@/components/ScrollytellingHero";
import ValueChain from "@/components/ValueChain";
import OperationalDashboard from "@/components/OperationalDashboard";
import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import { Leaf, Recycle, Sprout, ArrowRight, Shield, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => (
  // Apply the "White Chocolate" base to the whole page instead of white
  <div className="bg-[#EFE7DC] min-h-screen text-[#4F3C1C]">
    <Layout>
      {/* 1. Scrollytelling Hero - Should be Dark/Primary Focused */}
      <ScrollytellingHero />

      {/* 2. Value Chain - Dark Section to hit that 70% Primary mark */}
      <section className="bg-[#4F3C1C] text-[#EFE7DC]">
        <ValueChain />
      </section>

      {/* 3. Operational Dashboard */}
      <OperationalDashboard />

      {/* 4. Photo Gallery - Using the Cream background */}
      <section className="section-padding" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#FEA42A] text-sm uppercase tracking-[0.3em] mb-3 font-semibold">On the Ground</p>
            <h2 id="gallery-heading" className="font-display text-3xl md:text-4xl">Our Operations in Action</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {[
              { src: pic1, alt: "Birnihigo farm aerial view" },
              { src: pic2, alt: "Chicks feeding" },
              { src: pic3, alt: "Community empowerment" },
            ].map((img, i) => (
              <AnimatedSection key={img.alt} delay={i * 0.15}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#4F3C1C]/10">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sustainability Loop - Alternating to White Chocolate */}
      <section className="section-padding bg-[#F9F5F0]/50" aria-labelledby="sustainability-heading">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#FEA42A] text-sm uppercase tracking-[0.3em] mb-3 font-semibold">Sustainability</p>
            <h2 id="sustainability-heading" className="font-display text-3xl md:text-4xl">
              From Land to Table — And Back
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {[
              { icon: Sprout, title: "Breeding & Cultivate", desc: "The journey begins at our Breeding Farm, supported by 2,000 hectares of maize and soybean." },
              { icon: Recycle, title: "Day-Old Chicks & Feed", desc: "Eco-feed production and bio-secure hatchery operations producing premium DOCs." },
              { icon: Leaf, title: "From Farm to Fork", desc: "HACCP-certified processing and Halal-certified distribution." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <article className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#4F3C1C]/5 mx-auto mb-6 flex items-center justify-center">
                    <item.icon size={28} className="text-[#4F3C1C]" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{item.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Investor Portal - Full Dark (Café Noir) Section */}
      <section className="section-padding bg-[#4F3C1C] text-[#EFE7DC]" aria-labelledby="investor-portal-heading">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#FEA42A] text-sm uppercase tracking-[0.3em] mb-3 font-semibold">Investor & Export Portal</p>
            <h2 id="investor-portal-heading" className="font-display text-3xl md:text-4xl">
              Unlocking Value Across the Chain
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              { icon: TrendingUp, title: "Market Gap", desc: "Ethiopia imports $50M+ in poultry. We are closing the gap." },
              { icon: Globe, title: "Export-Ready", desc: "Halal-certified and strategic proximity to GCC countries." },
              { icon: Shield, title: "ESG Aligned", desc: "Empowering 1,500+ local associations." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="p-8 h-full bg-white/5 border border-white/10 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-[#FEA42A]/20 flex items-center justify-center mb-6">
                    <item.icon size={24} className="text-[#FEA42A]" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{item.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/investors"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FEA42A] text-[#4F3C1C] font-bold rounded-lg hover:brightness-110 transition-all"
            >
              View Investor Relations <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  </div>
);

export default Index;
