"use client";

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

    {/* 🔥 NEW STRATEGIC HERO OVERLAY (keeps your ScrollytellingHero) */}
    <section className="absolute top-0 left-0 w-full z-20 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 pt-32 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Building Ethiopia’s First Fully Integrated Poultry System at Scale.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium">
            Ethiopia's protein challenge is not a production issue—it is a systems integration challenge.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <ScrollytellingHero />

    {/* ✅ EDITED VISION STRIPE */}
    <section className="py-8 bg-black text-white overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <h2 className="text-lg md:text-xl font-black tracking-[0.3em] uppercase text-center md:text-left">
            Science-Driven Infrastructure
          </h2>

          <div className="h-px w-24 bg-[#FEA42A] hidden md:block" />

          <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.25em] text-center md:text-right font-bold">
            Industrializing poultry production for national scale impact
          </p>

        </AnimatedSection>
      </div>
    </section>

    {/* STRATEGIC STATEMENT (minor tightening only) */}
    <section className="py-24 bg-[#EFE7DC]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-8 font-black">Strategic Positioning</p>

          <p className="text-2xl md:text-3xl text-[#4F3C1C] font-bold leading-relaxed mb-8 tracking-tight">
            Ethiopia's poultry challenge is not primarily a production issue—it is a{" "}
            <span className="text-[#FEA42A]">systems integration challenge.</span>
          </p>

          <div className="w-16 h-1 bg-[#CD8C24]/30 mx-auto my-8 rounded-full" />

          <p className="text-lg text-[#4F3C1C]/70 leading-relaxed font-medium mb-6">
            The constraint is not supply potential, but the absence of coordinated, industrial-scale infrastructure.
          </p>

          <p className="text-lg text-[#4F3C1C] font-black uppercase tracking-widest">
            Birnihigo is engineered as a fully integrated poultry system to solve this at scale.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <ValueChain />

    {/* NATIONAL IMPACT unchanged */}

    {/* 🔥 EDITED NUMBERS SECTION */}
    <section className="py-24 bg-[#EFE7DC] border-y border-[#CD8C24]/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">
            Institutional Scale
          </p>
          <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter">
            Infrastructure-Level Output Metrics
          </h2>
        </AnimatedSection>

        <div className="mb-20">
          <OperationalDashboard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Processing Throughput", value: "32+ Tons", detail: "Daily industrial poultry output" },
            { label: "Annualized Capacity", value: "500k+", detail: "Integrated production volume" },
            { label: "Feed Infrastructure", value: "6 T/Hr", detail: "Automated feed systems" },
            { label: "National Coverage", value: "135M+", detail: "Addressable population scale" },
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

    {/* everything else unchanged */}

  </Layout>
);

export default Index;