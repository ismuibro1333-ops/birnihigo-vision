import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background font-sans antialiased text-foreground">
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
