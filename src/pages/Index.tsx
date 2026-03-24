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
    <div className="font-parkinsans"> {/* Primary Brand Typeface */}
      <ScrollytellingHero />
      <ValueChain />
      
      {/* SECTION 1: THE NUMBERS (White Chocolate Background / Saffron Numbers) */}
      <section className="py-24 bg-[#EFE7DC] border-y border-[#CD8C24]/20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">Industrial Scale</p>
            <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter">The Numbers That Define Us</h2>
          </AnimatedSection>

          <div className="mb-20">
            <OperationalDashboard />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Livestock Capacity", value: "5,000+", detail: "Heads per cycle" },
              { label: "Community Impact", value: "1,500+", detail: "Local associations" },
              { label: "Market Reach", value: "100%", detail: "Regional coverage" },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center group">
                {/* HIGH CONTRAST NUMBERS: Deep Saffron */}
                <span className="block text-[#FEA42A] text-7xl font-black mb-2 tracking-tighter transition-transform duration-500 group-hover:scale-110 drop-shadow-sm">
                  {stat.value}
                </span>
                <div className="w-12 h-1.5 bg-[#4F3C1C] mx-auto mb-6 rounded-full opacity-20"></div>
                <h3 className="text-[#4F3C1C] text-sm uppercase tracking-[0.4em] font-black mb-2">
                  {stat.label}
                </h3>
                <p className="text-[#4F3C1C]/60 text-xs font-bold uppercase tracking-widest">
                  {stat.detail}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PHOTO GALLERY (Using Chinese Bronze Accents) */}
      <section className="py-24 bg-[#EFE7DC]/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-bold">On the Ground</p>
            <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tight italic">Our Operations in Action</h2>
            <div className="w-24 h-1.5 bg-[#FEA42A] mx-auto mt-6 rounded-full"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[pic1, pic2, pic3].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] border-4 border-[#4F3C1C]/5 shadow-2xl bg-[#4F3C1C]">
                  <img
                    src={img}
                    alt="Operation view"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#4F3C1C]/60 backdrop-blur-[2px]">
                     <p className="text-[#FEA42A] font-black text-xl tracking-widest uppercase">Birnihigo</p>
                     <p className="text-[#EFE7DC] text-xs font-bold uppercase mt-1">Industrial Excellence</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SUSTAINABILITY (Primary Dark Section - Café Noir) */}
      <section className="py-24 bg-[#4F3C1C] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FEA42A]/5 blur-[150px] rounded-full"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-24">
            <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-bold">The Circular Model</p>
            <h2 className="text-6xl text-[#EFE7DC] font-black tracking-tighter">Land to Table & Back</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Sprout, title: "Cultivate", desc: "Starting at our Breeding Farm with 2,000 hectares of maize and soybean production.", stat: "2,000ha" },
              { icon: Recycle, title: "Hatchery", desc: "Bio-secure operations producing 200,000+ premium DOCs weekly.", stat: "200k+" },
              { icon: Leaf, title: "Process", desc: "HACCP-certified processing of premium poultry meat for global markets.", stat: "Certified" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <article className="text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-[#FEA42A]/10 border border-[#FEA42A]/20 mx-auto mb-8 flex items-center justify-center transition-all duration-500 group-hover:bg-[#FEA42A] group-hover:rotate-6">
                    <item.icon size={32} className="text-[#FEA42A] group-hover:text-[#4F3C1C] transition-colors" />
                  </div>
                  <p className="text-[#FEA42A] font-black text-3xl mb-2 tracking-tight">{item.stat}</p>
                  <h3 className="text-xl text-[#EFE7DC] mb-4 font-bold uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[#EFE7DC]/60 leading-relaxed font-medium">{item.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INVESTOR PORTAL (Secondary Color Buttons) */}
      <section className="py-24 bg-[#EFE7DC]/30">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-[#CD8C24]/20 pb-12">
            <div>
              <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">Investment Opportunity</p>
              <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter">Closing the Import Gap</h2>
            </div>
            <Link to="/investors" className="group flex items-center gap-3 bg-[#FEA42A] text-[#4F3C1C] px-8 py-4 rounded-full font-bold hover:bg-[#FFD275] transition-all duration-300 shadow-xl">
              Investor Center <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-
