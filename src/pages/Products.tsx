"use client";

import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { ShieldCheck, Zap, BarChart3, Factory } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Commercial Broilers",
      description: "High-yield broiler breeds optimized for the Ethiopian climate and industrial processing standards.",
      icon: <Zap className="w-6 h-6 text-[#FEA42A]" />,
    },
    {
      title: "Premium Poultry Feed",
      description: "Scientifically formulated nutrition to maximize growth rates and flock health.",
      icon: <ShieldCheck className="w-6 h-6 text-[#FEA42A]" />,
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance on facility design, biosecurity, and operational efficiency.",
      icon: <BarChart3 className="w-6 h-6 text-[#FEA42A]" />,
    },
    {
      title: "Processing Solutions",
      description: "End-to-end processing support ensuring food safety and market-ready quality.",
      icon: <Factory className="w-6 h-6 text-[#FEA42A]" />,
    },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence across the entire poultry value chain with precision and scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#2C2C2C] rounded-2xl overflow-hidden text-white"
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Industrial Standards</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Our production facilities utilize state-of-the-art climate control and automated feeding systems to ensure 100% consistency in our output.
                </p>
                <button className="bg-[#FEA42A] text-black px-8 py-3 rounded-full font-bold hover:bg-[#e89322] transition-colors">
                  Download Specifications
                </button>
              </div>
              <div className="h-64 md:h-full min-h-[300px] relative">
                <img
                  src="/industrial-poultry.jpg"
                  alt="Industrial Facility"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
