"use client"; // Preserved as requested

import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import ScrollytellingHero from "@/components/ScrollytellingHero";
import ValueChain from "@/components/ValueChain";
import OperationalDashboard from "@/components/OperationalDashboard";
import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import { 
  Shield, 
  TrendingUp, 
  Globe, 
  Users, 
  Package,
  Award,
  BarChart3
} from "lucide-react";
import Link from "next/link";

const Index = () => (
  <Layout>
    <ScrollytellingHero />

    {/* VISION STRIPE - UPDATED FOR INDUSTRIAL AUTHORITY */}
    <section className="py-12 bg-[#4F3C1C] text-[#EFE7DC] overflow-hidden border-y border-[#FEA42A]/20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            {/* Powerful Hero Line from Screenshot */}
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-[0.9] italic uppercase">
              Building Ethiopia’s First <span className="text-[#FEA42A]">Fully Integrated</span> Poultry System at Scale.
            </h2>
          </div>
          <div className="h-px w-24 bg-[#FEA42A] hidden md:block" />
          <p className="text-[#FEA42A] font-bold uppercase tracking-[0.2em] text-[10px] text-center md:text-right leading-relaxed">
            Science-Driven Infrastructure <br /> for a 135M+ Citizen Protein Market.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* STRATEGIC STATEMENT - REFINED FOR PARTNERS */}
    <section className="py-24 bg-[#EFE7DC]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center">
          <p className="text-[#CD8C24] text-[10px] uppercase tracking-[0.6em] mb-8 font-black italic">The Strategic Gap</p>
          <p className="text-3xl md:text-4xl text-[#4F3C1C] font-black leading-[1.1] mb-8 tracking-tighter italic uppercase">
            Ethiopia's protein challenge is not a production issue—it is a{" "}
            <span className="text-[#FEA42A]">Systems Integration Challenge.</span>
          </p>
          <div className="w-16 h-1 bg-[#CD8C24]/30 mx-auto my-8 rounded-full" />
          <p className="text-xl text-[#4F3C1C]/70 leading-relaxed font-bold italic mb-6">
            Birnihigo closes this gap through a 42-hectare bio-secured industrial complex, 
            transforming fragmented production into a reliable, scalable value chain.
          </p>
          <Link 
            href="/about" 
            className="text-[#4F3C1C] font-black uppercase tracking-widest text-xs border-b-2 border-[#FEA42A] pb-1 hover:opacity-60 transition-opacity"
          >
            Explore Our Methodology
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <ValueChain />

    {/* NATIONAL IMPACT - DATA DRIVEN UPDATES */}
    <section className="py-24 bg-[#4F3C1C] relative overflow-hidden" aria-labelledby="national-impact-heading">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#FEA42A]/5 blur-[120px] rounded-full" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#FEA42A] text-[10px] uppercase tracking-[0.6em] mb-4 font-black italic">Economic Influence</p>
          <h2 id="national-impact-heading" className="text-5xl md:text-6xl text-[#EFE7DC] font-black tracking-tighter uppercase italic leading-none">
            Transforming the <br /> <span className="text-[#FEA42A]">Protein Economy</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Shield, label: "Hardening National Food Sovereignty", desc: "Building local resilience against global supply shocks." },
            { icon: Globe, label: "Import Substitution Strategy", desc: "Reducing foreign currency dependency for poultry products." },
            { icon: Users, label: "Youth & Women Inclusion", desc: "Direct industrial employment and outgrower training." },
            { icon: TrendingUp, label: "Export-Ready Operations", desc: "Meeting international Halal and safety standards for the GCC." },
            { icon: Award, label: "Biosecurity Leadership", desc: "Setting the benchmark for disease control in East Africa." },
            { icon: BarChart3, label: "Price Stability", desc: "Optimizing feed-to-meat ratios to ensure market affordability." },
          ].map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="group flex flex-col gap-5 bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-[#FEA42A] transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#FEA42A]/10 border border-[#FEA42A]/20 flex items-center justify-center group-hover:bg-[#4F3C1C]">
                  <item.icon size={22} className="text-[#FEA42A]" />
                </div>
                <div>
                  <p className="text-[#EFE7DC] font-black text-lg leading-tight uppercase tracking-tighter mb-2 group-hover:text-[#4F3C1C]">{item.label}</p>
                  <p className="text-[#EFE7DC]/40 text-xs font-bold italic group-hover:text-[#4F3C1C]/70">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* THE NUMBERS - UPDATED VISUALS */}
    <section className="py-24 bg-[#EFE7DC] border-y border-[#CD8C24]/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-[10px] uppercase tracking-[0.6em] mb-4 font-black italic">Infrastructure Metrics</p>
          <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter uppercase italic">Institutional Scale</h2>
        </AnimatedSection>

        <div className="mb-20">
          <OperationalDashboard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Throughput", value: "32 Ton", detail: "Daily Meat Capacity" },
            { label: "Incubation", value: "500k+", detail: "Annual Heads" },
            { label: "Milling", value: "6 T/Hr", detail: "Automated Production" },
            { label: "Market Base", value: "135M", detail: "Serving Ethiopia" },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center group">
              <span className="block text-[#4F3C1C] text-7xl font-black mb-2 tracking-tighter group-hover:text-[#FEA42A] transition-colors">
                {stat.value}
              </span>
              <div className="w-8 h-1 bg-[#FEA42A] mx-auto mb-6 rounded-full"></div>
              <h3 className="text-[#4F3C1C] text-[10px] uppercase tracking-[0.4em] font-black mb-2">
                {stat.label}
              </h3>
              <p className="text-[#4F3C1C]/40 text-[10px] font-bold uppercase tracking-widest italic">
                {stat.detail}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* PHOTO GALLERY - REFINED STYLING */}
    <section className="py-24 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { src: pic1, label: "Awash Operations", sub: "Strategic Industrial Hub" },
            { src: pic2, label: "Nutrition Science", sub: "Automated Feed Milling" },
            { src: pic3, label: "Bio-Security", sub: "Halal Processing Plant" },
          ].map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-[#4F3C1C]">
                <img
                  src={img.src.src || img.src}
                  alt={img.label}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-[#FEA42A] font-black text-2xl tracking-tighter uppercase italic">{img.label}</p>
                  <p className="text-[#EFE7DC] text-[10px] font-black uppercase tracking-[0.3em] mt-2">{img.sub}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CORPORATE PURPOSE - REFINED FOR CONVERSION */}
    <section className="py-32 bg-[#4F3C1C]" aria-labelledby="purpose-heading">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[#FEA42A] text-[10px] uppercase tracking-[0.6em] mb-10 font-black italic">The Birnihigo Mission</p>
          <h2 id="purpose-heading" className="text-4xl md:text-6xl text-[#EFE7DC] font-black tracking-tighter italic leading-[0.9] uppercase">
            "Nourishing lives through <span className="text-[#FEA42A]">safe, affordable,</span> and scalable protein production for Ethiopia."
          </h2>
          <div className="mt-16">
            <Link 
              href="/contact" 
              className="px-12 py-5 bg-[#FEA42A] text-[#4F3C1C] rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#EFE7DC] transition-all shadow-2xl"
            >
              Partner With Us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
