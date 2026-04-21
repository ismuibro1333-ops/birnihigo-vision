"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, Factory, Wheat, Egg, ArrowRight } from "lucide-react";

// Using a simple internal Layout component to avoid import errors
const LocalLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[#EFE7DC] font-sans pt-20">
    {children}
  </div>
);

const Products = () => {
  const productCategories = [
    {
      title: "Poultry Feed",
      icon: <Wheat className="w-6 h-6" />,
      description: "Premium nutritional formulations for all growth stages."
    },
    {
      title: "Commercial Eggs",
      icon: <Egg className="w-6 h-6" />,
      description: "High-quality table eggs for retail and wholesale distribution."
    },
    {
      title: "Technical Support",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Expert consulting for farm management and biosecurity."
    }
  ];

  return (
    <LocalLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6">Our Products</h1>
          <p className="text-xl text-gray-600">Leading the industry in quality and scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-[#FEA42A] mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <div className="flex items-center text-[#FEA42A] font-semibold cursor-pointer group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#2C2C2C] rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Industrial Excellence</h2>
            <p className="text-gray-400 text-lg mb-8">
              We leverage advanced automation and climate-controlled facilities to ensure the highest biosecurity standards in Ethiopia.
            </p>
            <button className="bg-[#FEA42A] text-black px-8 py-4 rounded-full font-bold">
              View All Specifications
            </button>
          </div>
          <div className="flex-1 w-full h-64 bg-gray-700 rounded-2xl flex items-center justify-center italic text-gray-500">
             [ Birnihigo Production Facility ]
          </div>
        </div>
      </div>
    </LocalLayout>
  );
};

export default Products;
