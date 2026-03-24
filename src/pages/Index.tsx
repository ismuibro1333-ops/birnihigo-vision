import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf, ShieldCheck, Users, Instagram, Facebook, Linkedin } from "lucide-react";
import Navbar from "../components/Navbar";

const Index = () => {
  const scrollRef = useRef(null);
  
  // Scrollytelling Progress
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={scrollRef} className="bg-[#4F3C1C] font-parkinsans selection:bg-[#FEA42A] selection:text-[#4F3C1C]">
      <Navbar />

      {/* HERO SECTION - Dynamic Fade */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black text-[#FEA42A] leading-none tracking-tighter">
            FARM TO <br />
            <span className="text-[#EFE7DC]">FORK.</span>
          </h1>
          <p className="mt-8 text-[#EFE7DC]/70 text-lg md:text-xl max-w-xl mx-auto uppercase tracking-[0.2em]">
            Feeding the Future, Naturally
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#FEA42A] to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* NUMBERS SECTION - Scrollytelling Interaction */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "85k+", label: "Poultry Processed" },
              { num: "98%", label: "Customer Trust" },
              { num: "10+", label: "Local Partners" },
              { num: "5k+", label: "Daily Capacity" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-12 bg-white/5 border border-[#CD8C24]/20 rounded-[2.5rem] hover:bg-[#FEA42A] transition-all duration-500"
              >
                <span className="text-[#FEA42A] group-hover:text-[#4F3C1C] text-6xl font-black block transition-colors">
                  {stat.num}
                </span>
                <p className="text-[#EFE7DC] group-hover:text-[#4F3C1C]/70 text-xs uppercase tracking-widest mt-4 font-bold transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTORED COMPLEX FOOTER */}
      <footer className="bg-[#4F3C1C] border-t border-[#CD8C24]/20 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-[#FEA42A] text-2xl font-black mb-6 uppercase">Birnihigo</h2>
              <p className="text-[#EFE7DC]/60 max-w-sm mb-8">
                Revolutionizing Ethiopia's poultry industry through sustainable, 
                integrated operations and community-driven growth.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full text-[#FEA42A] hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all"><Instagram size={20}/></a>
                <a href="#" className="p-3 bg-white/5 rounded-full text-[#FEA42A] hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all"><Facebook size={20}/></a>
                <a href="#" className="p-3 bg-white/5 rounded-full text-[#FEA42A] hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all"><Linkedin size={20}/></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[#EFE7DC] font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4 text-[#EFE7DC]/50 text-sm">
                <li><a href="#" className="hover:text-[#FEA42A] transition-colors">Our Heritage</a></li>
                <li><a href="#" className="hover:text-[#FEA42A] transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-[#FEA42A] transition-colors">Investors</a></li>
                <li><a href="#" className="hover:text-[#FEA42A] transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#EFE7DC] font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
              <ul className="space-y-4 text-[#EFE7DC]/50 text-sm">
                <li>Addis Ababa, Ethiopia</li>
                <li>info@birnihigofarms.com</li>
                <li>+251 911 000 000</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
            <p className="text-[#EFE7DC]/30 text-xs tracking-widest uppercase">
              © 2026 Birnihigo Integrated Farms PLC
            </p>
            <div className="flex gap-6 text-[#EFE7DC]/30 text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-[#EFE7DC] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#EFE7DC] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
