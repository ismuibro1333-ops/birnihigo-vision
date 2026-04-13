import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }: { children: ReactNode }) => (
  // "antialiased" makes the font look high-end; "text-foreground" uses Café Noir by default
  <div className="min-h-screen flex flex-col bg-background font-sans antialiased text-foreground">
    <Navbar />
    
    {/* Added a simple fade-in transition for the main content 
      to match the premium feel of the rest of the site.
    */}
    <AnimatePresence mode="wait">
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 pt-20 lg:pt-24" // Adjusted padding for the fixed navbar height
      >
        {children}
      </motion.main>
    </AnimatePresence>

    <Footer />
  </div>
);

export default Layout;   
