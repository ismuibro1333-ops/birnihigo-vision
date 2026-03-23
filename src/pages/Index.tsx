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
    <section className="py-24 bg-[#EFE7DC]" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-bold">On the Ground</p>
          <h2 id="gallery-heading" className="text-5xl text-[#4F3C1C] font-black tracking-tight">Our Operations in Action</h2>
          <div className="w-24 h-1 bg-[#FEA42A] mx-auto mt-6 rounded-full"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {[
            { src: pic1, alt: "Birnihigo farm aerial view" },
            { src: pic2, alt: "Chicks feeding" },
            { src: pic3, alt: "Community training" },
          ].map((img, i) => (
            <AnimatedSection key={img.alt} delay={i * 0.15}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#CD8C24]/30 shadow-2xl bg-[#4F3C1C]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-70 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#4F3C1C]/20 backdrop-blur-[2px]">
                   <p className="text-[#EFE7DC] font-bold text-lg tracking-wide uppercase">View Project</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Sustainability Loop - Dark Section */}
    <section className="py-24 bg-[#4F3C1C] relative overflow-hidden" aria-labelledby="sustainability-heading">
      {/* Subtle brand glow in the background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FEA42A]/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-bold">Sustainability</p>
          <h2 id="sustainability-heading" className="text-5xl text-[#EFE7DC] font-black tracking-tight">From Land to Table — And Back</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {[
            { icon: Sprout, title: "Breeding & Cultivate", desc: "Starting at our Breeding Farm with 2,000 hectares of maize and soybean production." },
            { icon: Recycle, title: "Day-Old Chicks & Feed", desc: "Bio-secure hatchery operations producing 200,000+ premium DOCs weekly." },
            { icon: Leaf, title: "From Farm to Fork", desc: "HACCP-certified processing of premium poultry meat for global markets." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <article className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-[#CD8C24]/10 border border-[#CD8C24]/20 mx-auto mb-8 flex items-center justify-center transition-all duration-500 group-hover:bg-[#FEA42A] group-hover:rotate-6">
                  <item.icon size={32} className="text-[#FEA42A] group-hover:text-[#4F3C1C] transition-colors duration-500" />
                </div>
                <h3 className="text-2xl text-[#FEA42A] mb-4 font-extrabold">{item.title}</h3>
                <p className="text-base text-[#EFE7DC]/70 leading-relaxed font-medium">{item.desc}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Investor Portal - Modern Card Section */}
    <section className="py-24 bg-white" aria-labelledby="investor-portal-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-bold">Strategic Growth</p>
            <h2 id="investor-portal-heading" className="text-5xl text-[#4F3C1C] font-black tracking-tight">Unlocking Global Value</h2>
          </div>
          <Link to="/investors" className="flex items-center gap-2 text-[#4F3C1C] font-bold border-b-2 border-[#FEA42A] pb-1 hover:gap-4 transition-all">
            Investor Relations <ArrowRight size={20} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: TrendingUp, title: "Massive Market Gap", desc: "Closing the $50M poultry import gap in Ethiopia through local industrialization." },
            { icon: Globe, title: "Export-Ready", desc: "Strategically positioned for the Djibouti, Somalia, and GCC regional corridors." },
            { icon: Shield, title: "ESG Aligned", desc: "Empowering 1,500+ local associations through a circular economic model." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <MotionCard className="p-10 h-full bg-[#EFE7DC]/40 border border-[#CD8C24]/20 hover:border-[#FEA42A] transition-colors rounded-3xl shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-[#4F3C1C] flex items-center justify-center mb-8 shadow-xl">
                  <item.icon size={26} className="text-[#FEA42A]" />
                </div>
                <h3 className="text-2xl text-[#4F3C1C] font-black mb-4">{item.title}</h3>
                <p className="text-base text-[#4F3C1C]/80 leading-relaxed font-medium">{item.desc}</p>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
