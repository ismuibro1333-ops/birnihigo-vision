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
  <Layout>
    <ScrollytellingHero />
    <ValueChain />
    <OperationalDashboard />

    {/* Photo Gallery - Light Section */}
    <section className="py-20 bg-[#EFE7DC]" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.3em] mb-3 font-semibold">On the Ground</p>
          <h2 id="gallery-heading" className="text-4xl text-[#4F3C1C] font-bold">Our Operations in Action</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {[
            { src: pic1, alt: "Birnihigo farm aerial view" },
            { src: pic2, alt: "Chicks feeding" },
            { src: pic3, alt: "Community training" },
          ].map((img, i) => (
            <AnimatedSection key={img.alt} delay={i * 0.15}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#CD8C24]/20 shadow-lg">
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

    {/* Sustainability Loop - Dark Section */}
    <section className="py-20 bg-[#4F3C1C]" aria-labelledby="sustainability-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.3em] mb-3 font-semibold">Sustainability</p>
          <h2 id="sustainability-heading" className="text-4xl text-[#EFE7DC] font-bold">From Land to Table — And Back</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {[
            { icon: Sprout, title: "Breeding & Cultivate", desc: "Starting at our Breeding Farm with 2,000 hectares of maize." },
            { icon: Recycle, title: "Day-Old Chicks & Feed", desc: "Bio-secure hatchery operations producing premium DOCs." },
            { icon: Leaf, title: "From Farm to Fork", desc: "HACCP-certified processing of premium poultry meat." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <article className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#CD8C24]/20 mx-auto mb-6 flex items-center justify-center">
                  <item.icon size={28} className="text-[#FEA42A]" />
                </div>
                <h3 className="text-xl text-[#FEA42A] mb-3 font-bold">{item.title}</h3>
                <p className="text-sm text-[#EFE7DC]/80 leading-relaxed">{item.desc}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Investor Portal - Modern Card Section */}
    <section className="py-20 bg-white" aria-labelledby="investor-portal-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.3em] mb-3 font-semibold">Investor & Export Portal</p>
          <h2 id="investor-portal-heading" className="text-4xl text-[#4F3C1C] font-bold">Unlocking Value Across the Chain</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: TrendingUp, title: "Massive Market Gap", desc: "Closing the $50M poultry import gap in Ethiopia." },
            { icon: Globe, title: "Export-Ready", desc: "Gateway to Djibouti, Somalia, and GCC countries." },
            { icon: Shield, title: "ESG Aligned", desc: "Empowering 1,500+ local associations." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <MotionCard className="p-8 h-full bg-[#EFE7DC]/30 border border-[#CD8C24]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4F3C1C] flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-[#FEA42A]" />
                </div>
                <h3 className="text-xl text-[#4F3C1C] font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-[#4F3C1C]/70 leading-relaxed">{item.desc}</p>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
