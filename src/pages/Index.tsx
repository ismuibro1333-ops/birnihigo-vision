"use client";

import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollytellingHero from "@/components/ScrollytellingHero";
import ValueChain from "@/components/ValueChain";
import OperationalDashboard from "@/components/OperationalDashboard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Index = () => (
  <Layout>
    {/* HERO SECTION - Focused on Clarity */}
    <section className="absolute top-0 left-0 w-full z-20 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 pt-32 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Birnihigo Integrated Poultry System
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium">
            Advancing Ethiopia's food sovereignty through industrial-scale poultry infrastructure.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <ScrollytellingHero />

    {/* STRATEGIC VISION STRIPE */}
    <section className="py-8 bg-black text-white overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-lg md:text-xl font-black tracking-[0.3em] uppercase">
            Science-Driven Infrastructure
          </h2>
          <div className="h-px w-24 bg-[#FEA42A] hidden md:block" />
          <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.25em] font-bold">
            National Scale Impact
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* MISSION STATEMENT */}
    <section className="py-24 bg-[#EFE7DC]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-8 font-black">Our Mission</p>
          <p className="text-2xl md:text-3xl text-[#4F3C1C] font-bold leading-relaxed mb-8">
            Solving the systems integration challenge to provide 
            <span className="text-[#FEA42A]"> sustainable protein solutions </span> 
            at scale.
          </p>
          <div className="w-16 h-1 bg-[#CD8C24]/30 mx-auto my-8 rounded-full" />
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-[#4F3C1C] font-black uppercase tracking-widest hover:text-[#FEA42A] transition-colors"
          >
            Explore Our Value Chain <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <ValueChain />

    {/* OPERATIONAL METRICS */}
    <section className="py-24 bg-[#EFE7DC] border-y border-[#CD8C24]/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">Operational Excellence</p>
          <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter">Capacity Metrics</h2>
        </AnimatedSection>

        <OperationalDashboard />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          {[
            { label: "Daily Output", value: "32+ Tons" },
            { label: "Annual Capacity", value: "500k+" },
            { label: "Feed Systems", value: "6 T/Hr" },
            { label: "Market Reach", value: "135M+" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <span className="block text-[#FEA42A] text-5xl font-black mb-2">{stat.value}</span>
              <h3 className="text-[#4F3C1C] text-xs uppercase tracking-[0.3em] font-black">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
