"use client";

import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Globe } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Poultry Facility"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FEA42A]/20 text-[#FEA42A] text-sm font-bold tracking-widest uppercase mb-6">
              Establishment of Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              Revolutionizing <span className="text-[#FEA42A]">Poultry</span> Systems in Ethiopia
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Birnihigo is an integrated industrial poultry ecosystem, delivering infrastructure-scale production and processing for the horn of Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FEA42A] text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#e89322] transition-all transform hover:scale-105">
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
                Investor Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Production Capacity", value: "5M+", detail: "Annual Units" },
              { label: "Standardization", value: "100%", detail: "Industrial Grade" },
              { label: "Market Reach", value: "Regional", detail: "East Africa" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-black text-[#2C2C2C] mb-2">{stat.value}</div>
                <div className="text-[#FEA42A] font-bold uppercase tracking-wider text-sm mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
