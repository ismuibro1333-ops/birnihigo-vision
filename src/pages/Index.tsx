import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import ScrollytellingHero from "@/components/ScrollytellingHero";
import ValueChain from "@/components/ValueChain";
import OperationalDashboard from "@/components/OperationalDashboard";
import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import { Leaf, Recycle, Sprout, ArrowRight, Shield, TrendingUp, Globe, Factory, Droplets, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => (
  <Layout>
    <ScrollytellingHero />
    
    {/* VISION STRIPE: National Impact */}
    <section className="py-12 bg-[#4F3C1C] text-[#EFE7DC] overflow-hidden border-y border-[#FEA42A]/20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
             <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight italic">
               "Driving national food sovereignty through integrated, science-based poultry systems."
             </h2>
          </div>
          <div className="h-px w-24 bg-[#FEA42A] hidden md:block" />
          <p className="text-[#FEA42A] font-bold uppercase tracking-[0.2em] text-sm text-center md:text-right">
            Transforming production into a reliable source of <br/> safe, affordable protein at scale.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <ValueChain />
    
    {/* SECTION 1: THE NUMBERS (Industrial Scale) */}
    <section className="py-24 bg-[#EFE7DC] border-y border-[#CD8C24]/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">Industrial Scale</p>
          <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter">The Numbers That Define Us</h2>
        </AnimatedSection>

        <div className="mb-20">
          <OperationalDashboard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Daily Throughput", value: "32 Ton", detail: "Finished poultry meat" },
            { label: "Annual Capacity", value: "500k+", detail: "Heads per annum" },
            { label: "Feed Production", value: "6 T/Hr", detail: "Automated milling" },
            { label: "Total Footprint", value: "2,042 Ha", icon: Globe, detail: "Integrated Production + Feed" },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center group">
              <span className="block text-[#FEA42A] text-6xl font-black mb-2 tracking-tighter transition-transform duration-500 group-hover:scale-110">
                {stat.value}
              </span>
              <div className="w-12 h-1.5 bg-[#4F3C1C] mx-auto mb-6 rounded-full opacity-20"></div>
              <h3 className="text-[#4F3C1C] text-sm uppercase tracking-[0.4em] font-black mb-2">
                {stat.label}
              </h3>
              <p className="text-[#4F3C1C]/50 text-xs font-bold uppercase tracking-widest">
                {stat.detail}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 2: PHOTO GALLERY */}
    <section className="py-24 bg-[#EFE7DC]/50" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-bold">On the Ground</p>
          <h2 id="gallery-heading" className="text-5xl text-[#4F3C1C] font-black tracking-tight italic">Our Operations in Action</h2>
          <div className="w-24 h-1.5 bg-[#FEA42A] mx-auto mt-6 rounded-full"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {[
            { src: pic1, alt: "Birnihigo farm aerial view" },
            { src: pic2, alt: "Industrial Feed Mill" },
            { src: pic3, alt: "Bio-secure processing" },
          ].map((img, i) => (
            <AnimatedSection key={img.alt} delay={i * 0.15}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] border-4 border-[#4F3C1C]/5 shadow-2xl bg-[#4F3C1C]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#4F3C1C]/40 backdrop-blur-[4px]">
                   <p className="text-[#FEA42A] font-black text-xl tracking-widest uppercase font-display">Science-Driven</p>
                   <p className="text-[#EFE7DC] text-xs font-bold uppercase mt-1 tracking-[0.3em]">Industrial Excellence</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 3: SUSTAINABILITY (100% Circular Waste-to-Resource) */}
    <section className="py-24 bg-[#4F3C1C] relative overflow-hidden" aria-labelledby="sustainability-heading">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FEA42A]/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-bold">Sustainability</p>
          <h2 id="sustainability-heading" className="text-6xl text-[#EFE7DC] font-black tracking-tighter mb-6">100% Circular Waste-to-Resource</h2>
          <p className="text-[#EFE7DC]/60 max-w-2xl mx-auto font-medium">
            At Birnihigo Farms, no resource is wasted. We transform organic waste into high-grade outputs, fueling our entire ecosystem.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {[
            { icon: Sprout, title: "Fertilizer", desc: "Organic solid waste transformed into high-grade fertilizer for our crop cultivation.", stat: "Soil Health" },
            { icon: Droplets, title: "Clean Water", desc: "Advanced treatment systems returning purified water to the production cycle.", stat: "Zero Liquid Waste" },
            { icon: Zap, title: "Renewable Energy", desc: "Converting organic liquid waste into biogas energy for on-site operations.", stat: "Clean Power" },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <article className="text-center group bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-[#FEA42A]/10 transition-all duration-500">
                <div className="w-20 h-20 rounded-[1.5rem] bg-[#FEA42A]/10 border border-[#FEA42A]/20 mx-auto mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FEA42A] shadow-inner">
                  <item.icon size={32} className="text-[#FEA42A] group-hover:text-[#4F3C1C] transition-colors duration-500" />
                </div>
                <p className="text-[#FEA42A] font-black text-xs uppercase tracking-widest mb-2">{item.stat}</p>
                <h3 className="text-xl text-[#EFE7DC] mb-4 font-bold uppercase tracking-widest">{item.title}</h3>
                <p className="text-sm text-[#EFE7DC]/60 leading-relaxed font-medium">{item.desc}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* SECTION 4: INVESTOR & BIOSECURITY PORTAL */}
    <section className="py-24 bg-[#EFE7DC]/30" aria-labelledby="investor-portal-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-[#CD8C24]/20 pb-12">
          <div className="text-left">
            <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">Strategic Growth</p>
            <h2 id="investor-portal-heading" className="text-5xl text-[#4F3C1C] font-black tracking-tighter">Biosecurity Excellence</h2>
          </div>
          <Link to="/investors" className="group flex items-center gap-3 bg-[#4F3C1C] text-[#EFE7DC] px-8 py-4 rounded-full font-bold hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all duration-300 shadow-xl">
            Investor Center <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Shield, title: "Risk Mitigation", desc: "Science-based biosecurity protocols ensure a zero-risk production environment and export-ready standards." },
            { icon: Globe, title: "Market Leadership", desc: "Advancing toward Halal-certified production for regional trade corridors and national supply." },
            { icon: TrendingUp, title: "Vertical Integration", desc: "100% internal supply chain control via 6 T/Hr feed milling and 2,000+ Ha dedicated cultivation." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <MotionCard className="p-12 h-full bg-[#EFE7DC] border-b-8 border-[#CD8C24] hover:border-[#FEA42A] transition-all rounded-3xl shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-[#4F3C1C] flex items-center justify-center mb-10 transform -rotate-3 shadow-2xl">
                  <item.icon size={30} className="text-[#FEA42A]" />
                </div>
                <h3 className="text-2xl text-[#4F3C1C] font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-base text-[#4F3C1C]/70 leading-relaxed font-semibold">{item.desc}</p>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
