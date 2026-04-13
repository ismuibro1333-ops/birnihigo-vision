import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head"; // 1. We import the "Head" tool

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background font-sans antialiased text-foreground">
    {/* 2. This "Head" section is what Google reads */}
    <Head>
      <title>Birnihigo Integrated Farms | Leading Poultry Production in Ethiopia</title>
      <meta name="description" content="Ethiopia’s first fully integrated poultry system. High-quality, halal-certified chicken production through biosecure, scalable systems." />
      <meta name="keywords" content="Poultry farming Ethiopia, Halal chicken Addis Ababa, Birnihigo Farms, Integrated Value Chain Ethiopia" />
      
      {/* This makes the link look good when shared on WhatsApp or LinkedIn */}
      <meta property="og:title" content="Birnihigo Integrated Farms" />
      <meta property="og:description" content="Building Ethiopia’s First Fully Integrated Poultry System at Scale." />
      <meta property="og:type" content="website" />
    </Head>

    <Navbar />
    
    <AnimatePresence mode="wait">
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 pt-20 lg:pt-24"
      >
        {children}
      </motion.main>
    </AnimatePresence>

    <Footer />
  </div>
);

export default Layout;
