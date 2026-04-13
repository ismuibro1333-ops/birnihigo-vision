"use client"; // This tells Next.js: "I have animations, don't put SEO here"

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
  Leaf, 
  Sprout, 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Globe, 
  Droplets, 
  Zap, 
  Users, 
  Package 
} from "lucide-react";
import Link from "next/link";

const Index = () => (
  <Layout>
    <ScrollytellingHero />

    {/* VISION STRIPE */}
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
            Transforming production into a reliable source of <br /> safe, affordable protein for 135M+ citizens.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* STRATEGIC STATEMENT */}
    <section className="py-24 bg-[#EFE7DC]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-8 font-black">Strategic Statement</p>
          <p className="text-2xl md:text-3xl text-[#4F3C1C] font-bold leading-relaxed mb-8 tracking-tight">
            Ethiopia's poultry challenge is not primarily a production issue—it is a{" "}
            <span className="text-[#FEA42A]">systems integration challenge.</span>
          </p>
          <div className="w-16 h-1 bg-[#CD8C24]/30 mx-auto my-8 rounded-full" />
          <p className="text-lg text-[#4F3C1C]/70 leading-relaxed font-medium mb-6">
            A significant market opportunity exists across the 135M+ national market, yet fragmentation continues to constrain scale and affordability.
          </p>
          <p className="text-lg text-[#4F3C1C] font-black uppercase tracking-widest">
            Birnihigo is designed as an integrated, execution-driven model to close this gap.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <ValueChain />

    {/* NATIONAL IMPACT */}
    <section className="py-24 bg-[#4F3C1C] relative overflow-hidden" aria-labelledby="national-impact-heading">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#FEA42A]/5 blur-[120px] rounded-full" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-bold">National Impact</p>
          <h2 id="national-impact-heading" className="text-5xl text-[#EFE7DC] font-black tracking-tighter">
            Transforming Ethiopia's Protein Economy
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Package, label: "Expanding access to affordable protein for 135M+" },
            { icon: Globe, label: "Reducing national import dependency" },
            { icon: Users, label: "Creating sustainable jobs for youth and women" },
            { icon: TrendingUp, label: "Enabling export-ready poultry production" },
            { icon: Shield, label: "Strengthening national food sovereignty" },
          ].map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-[#FEA42A]/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#FEA42A]/10 border border-[#FEA42A]/20 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-[#FEA42A]" />
                </div>
                <p className="text-[#EFE7DC] font-semibold text-base leading-snug mt-1">{item.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* THE NUMBERS */}
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
            { label: "Market Reach", value: "135M+", detail: "Total Population served" },
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

    {/* PHOTO GALLERY */}
    <section className="py-24 bg-[#EFE7DC]/50" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-bold">On the Ground</p>
          <h2 id="gallery-heading" className="text-5xl text-[#4F3C1C] font-black tracking-tight italic">Our Operations in Action</h2>
          <div className="w-24 h-1.5 bg-[#FEA42A] mx-auto mt-6 rounded-full"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {[
            { src: pic1, alt: "Aerial view of Birnihigo poultry farm in Afar, Ethiopia" },
            { src: pic2, alt: "Industrial Feed Mill for automated poultry nutrition" },
            { src: pic3, alt: "Bio-secure chicken processing facility" },
          ].map((img, i) => (
            <AnimatedSection key={img.alt} delay={i * 0.15}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] border-4 border-[#4F3C1C]/5 shadow-2xl bg-[#4F3C1C]">
                <img
                  src={img.src.src || img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#4F3C1C]/40 backdrop-blur-[4px]">
                  <p className="text-[#FEA42A] font-black text-xl tracking-widest uppercase">Science-Driven</p>
                  <p className="text-[#EFE7DC] text-xs font-bold uppercase mt-1 tracking-[0.3em]">Industrial Excellence</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* PURPOSE */}
    <section className="py-20 bg-[#4F3C1C]" aria-labelledby="purpose-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-6 font-bold">Purpose</p>
          <h2 id="purpose-heading" className="text-4xl md:text-5xl text-[#EFE7DC] font-black tracking-tighter leading-tight italic">
            "Nourishing lives through safe, affordable, and scalable protein production for Ethiopia."
          </h2>
          <div className="w-16 h-1 bg-[#FEA42A]/40 mx-auto mt-10 rounded-full" />
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
