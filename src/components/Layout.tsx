import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased text-foreground">
      <Head>
        {/* This is the standard Meta-Data. It tells Google what the site is without the extra "Schema" complexity */}
        <title>Birnihigo Integrated Poultry Farm</title>
        <meta name="description" content="Leading integrated poultry farming and agricultural solutions in Ethiopia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* IMPORTANT: Make sure this next line does NOT say 'noindex' in your other files or Vercel settings */}
        <meta name="robots" content="index, follow" />
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
};

export default Layout;
