import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import ScrollytellingHero from "@/components/ScrollytellingHero";
import ValueChain from "@/components/ValueChain";
import OperationalDashboard from "@/components/OperationalDashboard";
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Globe, 
  Users 
} from "lucide-react";
import Link from "next/link";

const Index = () => (
  <Layout>
    {/* Removed the <Head> SEO block from here to allow the Layout or SEO specialist to manage it */}

    {/* 🔥 HERO OVERLAY - Simplified for a clean start */}
    <section className="absolute top-0 left-0 w-full z-20 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 pt-32 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Birnihigo Integrated Farms
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-medium">
            Building Ethiopia’s fully integrated poultry system at industrial scale.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <ScrollytellingHero />

    {/* VISION STRIPE */}
    <section className="py-8 bg-black text-white overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-lg md:text-xl font-black tracking-[0.3em] uppercase text-center md:text-left">
            Science-Driven Infrastructure
          </h2>
          <div className="h-px w-24 bg-[#FEA42A] hidden md:block" />
          <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.25em] text-center md:text-right font-bold">
            National Scale Impact
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* STRATEGIC POSITIONING */}
    <section className="py-24 bg-[#EFE7DC]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-8 font-black">
            Strategic Positioning
          </p>
          <p className="text-2xl md:text-3xl text-[#4F3C1C] font-bold leading-relaxed mb-8 tracking-tight">
            Our mission is to solve Ethiopia's protein challenge through 
            <span className="text-[#FEA42A]"> integrated systems.</span>
          </p>
          <div className="w-16 h-1 bg-[#CD8C24]/30 mx-auto my-8 rounded-full" />
          <p className="text-lg text-[#4F3C1C]/70 leading-relaxed font-medium mb-6">
            Providing coordinated, industrial-scale infrastructure to meet national demand.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <ValueChain />

    {/* METRICS */}
    <section className="py-24 bg-[#EFE7DC] border-y border-[#CD8C24]/10">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-4 font-black">
            Institutional Scale
          </p>
          <h2 className="text-5xl text-[#4F3C1C] font-black tracking-tighter">
            Operational Metrics
          </h2>
        </AnimatedSection>

        <div className="mb-20">
          <OperationalDashboard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Processing", value: "32+ Tons" },
            { label: "Annual Capacity", value: "500k+" },
            { label: "Feed Production", value: "6 T/Hr" },
            { label: "National Reach", value: "135M+" },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <span className="block text-[#FEA42A] text-6xl font-black mb-2 tracking-tighter">
                {stat.value}
              </span>
              <h3 className="text-[#4F3C1C] text-sm uppercase tracking-[0.4em] font-black mb-2">
                {stat.label}
              </h3>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

  </Layout>
);

export default Index;
