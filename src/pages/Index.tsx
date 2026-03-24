import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Users } from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#4F3C1C] font-parkinsans selection:bg-[#FEA42A] selection:text-[#4F3C1C]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-[#FEA42A] leading-tight"
          >
            Feeding the Future, <br />
            <span className="text-[#EFE7DC]">Naturally.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#EFE7DC]/80 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Empowering communities through high-quality, efficient, and eco-conscious poultry solutions in Ethiopia.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-[#FEA42A] text-[#4F3C1C] rounded-full font-black uppercase tracking-widest hover:bg-[#FFD275] transition-all shadow-xl">
              Explore Our Farms
            </button>
            <button className="px-8 py-4 border border-[#CD8C24] text-[#EFE7DC] rounded-full font-black uppercase tracking-widest hover:bg-[#CD8C24]/10 transition-all">
              Our Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* THE NUMBERS THAT DEFINE US - HIGH CONTRAST FIX */}
      <section className="py-24 bg-[#4F3C1C] relative border-y border-[#CD8C24]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] font-black mb-4">
              Our Impact
            </h2>
            <p className="text-[#EFE7DC] text-4xl md:text-5xl font-black">
              The numbers that define us
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {/* Stat 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center p-10 bg-white/5 rounded-[2rem] border border-[#CD8C24]/20 backdrop-blur-sm"
            >
              <span className="text-[#FEA42A] text-5xl md:text-7xl font-black mb-3">85k+</span>
              <p className="text-[#EFE7DC] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-center opacity-80">
                Poultry Processed
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center p-10 bg-white/5 rounded-[2rem] border border-[#CD8C24]/20 backdrop-blur-sm"
            >
              <span className="text-[#FEA42A] text-5xl md:text-7xl font-black mb-3">98%</span>
              <p className="text-[#EFE7DC] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-center opacity-80">
                Customer Trust
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center p-10 bg-white/5 rounded-[2rem] border border-[#CD8C24]/20 backdrop-blur-sm"
            >
              <span className="text-[#FEA42A] text-5xl md:text-7xl font-black mb-3">10+</span>
              <p className="text-[#EFE7DC] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-center opacity-80">
                Local Partners
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="flex flex-col items-center p-10 bg-white/5 rounded-[2rem] border border-[#CD8C24]/20 backdrop-blur-sm"
            >
              <span className="text-[#FEA42A] text-5xl md:text-7xl font-black mb-3">5k+</span>
              <p className="text-[#EFE7DC] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-center opacity-80">
                Daily Capacity
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-24 px-6 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#4F3C1C] rounded-xl flex items-center justify-center text-[#FEA42A]">
                <Leaf size={24} />
              </div>
              <h3 className="text-2xl font-black text-[#4F3C1C]">Eco-Conscious</h3>
              <p className="text-[#4F3C1C]/70">Leading the way in sustainable poultry farming with zero-waste initiatives.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#4F3C1C] rounded-xl flex items-center justify-center text-[#FEA42A]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-black text-[#4F3C1C]">Verified Quality</h3>
              <p className="text-[#4F3C1C]/70">Strict adherence to international food safety and hygiene standards.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#4F3C1C] rounded-xl flex items-center justify-center text-[#FEA42A]">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-black text-[#4F3C1C]">Community First</h3>
              <p className="text-[#4F3C1C]/70">Empowering local farmers through our integrated partnership model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#4F3C1C] border-t border-[#CD8C24]/20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[#EFE7DC]/60 text-sm">
            © 2026 Birnihigo Integrated Farms PLC. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[#EFE7DC]/60 text-sm uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-[#FEA42A] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FEA42A] transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
