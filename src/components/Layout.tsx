Import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head"; // If using Next.js, otherwise use standard <head>

const Layout = ({ children }: { children: ReactNode }) => {
  // Nike-Style "Sitelinks" Schema
  const sitelinkSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Birnihigo Integrated Farms",
    "url": "https://birnihigofarms.com/",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Products",
        "url": "https://birnihigofarms.com/products",
        "description": "Premium, halal-certified poultry and agricultural products."
      },
      {
        "@type": "WebPage",
        "name": "Investors",
        "url": "https://birnihigofarms.com/investors",
        "description": "Strategic investment and partnership opportunities."
      },
      {
        "@type": "WebPage",
        "name": "Sustainability",
        "url": "https://birnihigofarms.com/sustainability",
        "description": "Leading Ethiopia's path toward national food sovereignty."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased text-foreground">
      {/* Invisible SEO Meta-Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinkSchema) }}
      />

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
};

export default Layout;