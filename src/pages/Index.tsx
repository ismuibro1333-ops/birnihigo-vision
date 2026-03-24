import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="bg-[#4F3C1C] font-parkinsans overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION - RESTORED ANIMATION */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-9xl font-black text-[#FEA42A] tracking-tighter leading-[0.85]">
            FARM TO <br />
            <span className="text-[#EFE7DC]">FORK.</span>
          </h1>
          <p className="mt-8 text-[#EFE7DC]/50 uppercase tracking-[0.4em] text-sm">Feeding the Future, Naturally</p>
        </motion.div>
      </section>

      {/* STATS SECTION - RESTORED HOVER & SCROLL */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { n: "85k+", t: "Poultry Processed" },
            { n: "98%", t: "Customer Trust" },
            { n: "10+", t: "Local Partners" },
            { n: "5k+", t: "Daily Capacity" }
          ].map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white/5 border border-[#CD8C24]/20 rounded-[3rem] group hover:bg-[#FEA42A] transition-all duration-500"
            >
              <h2 className="text-[#FEA42A] group-hover:text-[#4F3C1C] text-6xl font-black transition-colors">{s.n}</h2>
              <p className="text-[#EFE7DC] group-hover:text-[#4F3C1C]/60 text-xs uppercase font-bold tracking-widest mt-4">{s.t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESTORED COMPLEX FOOTER */}
      <footer className="bg-[#4F3C1C] border-t border-[#CD8C24]/10 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <h3 className="text-[#FEA42A] text-3xl font-black uppercase mb-6">Birnihigo</h3>
              <p className="text-[#EFE7DC]/60 max-w-sm mb-8 leading-relaxed">
                Leading Ethiopia's poultry revolution with sustainable, 
                high-quality, and community-driven farming.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 border border-[#CD8C24]/30 rounded-full text-[#FEA42A] hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[#EFE7DC] font-bold uppercase text-xs tracking-widest mb-8">Navigation</h4>
              <ul className="space-y-4 text-[#EFE7DC]/40 text-sm font-medium">
                <li><a href="#" className="hover:text-[#FEA42A]">Heritage</a></li>
                <li><a href="#" className="hover:text-[#FEA42A]">Operations</a></li>
                <li><a href="#" className="hover:text-[#FEA42A]">Investors</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#EFE7DC] font-bold uppercase text-xs tracking-widest mb-8">Contact</h4>
              <ul className="space-y-4 text-[#EFE7DC]/40 text-sm font-medium">
                <li>Addis Ababa, Ethiopia</li>
                <li>info@birnihigofarms.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex justify-between text-[10px] uppercase tracking-widest text-[#EFE7DC]/20">
            <p>© 2026 Birnihigo Integrated Farms PLC</p>
            <p>IWebDesign Signature</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
