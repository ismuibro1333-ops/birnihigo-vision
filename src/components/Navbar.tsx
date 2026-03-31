import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.webp"; 

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    sub: [
      { label: "Our Heritage", to: "/about#heritage" },
      { label: "Leadership", to: "/about#leadership" },
      { label: "Mission & Values", to: "/about#pillars" },
    ],
  },
  {
    label: "Journey",
    to: "/products",
    sub: [
      { label: "From Farm to Fork", to: "/products" },
      { label: "Operations", to: "/services" },
      { label: "Sustainability", to: "/sustainability" },
    ],
  },
  { label: "Investors", to: "/investors" },
  { label: "Journal", to: "/blog" }, // Moved to top level for visibility
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [activeMobileSub, setActiveMobileSub] = useState(null);
  const location = useLocation();

  const toggleMobileSub = (label) => {
    setActiveMobileSub(activeMobileSub === label ? null : label);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#4F3C1C]/95 border-b border-[#CD8C24]/20 backdrop-blur-xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        
        {/* LOGO */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center group transition-transform duration-300 active:scale-95">
          <img 
            src={logo} 
            alt="Birnihigo" 
            className="h-12 md:h-14 w-auto object-contain transition-all duration-500 group-hover:brightness-110" 
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.sub && setHoveredMenu(link.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                to={link.to}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-black transition-all flex items-center gap-1.5 rounded-full ${
                  location.pathname === link.to
                    ? "text-[#FEA42A] bg-[#CD8C24]/10" 
                    : "text-[#EFE7DC] hover:text-[#FEA42A] hover:bg-white/5" 
                }`}
              >
                {link.label}
                {link.sub && <ChevronDown size={10} className={`transition-transform ${hoveredMenu === link.label ? 'rotate-180' : ''}`} />}
              </Link>

              <AnimatePresence>
                {link.sub && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-3 w-60 bg-[#4F3C1C] border border-[#CD8C24]/30 shadow-2xl rounded-2xl p-2"
                  >
                    {link.sub.map((s) => (
                      <Link key={s.label} to={s.to} className="block px-5 py-3 text-xs text-[#EFE7DC] hover:text-[#4F3C1C] hover:bg-[#FEA42A] rounded-xl transition-all font-bold uppercase tracking-widest">
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden w-12 h-12 flex items-center justify-center text-[#FEA42A] bg-white/5 rounded-full border border-white/10"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-24 bg-[#4F3C1C] z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-8 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/5 pb-4">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={link.to} 
                      onClick={() => setOpen(false)}
                      className="text-3xl font-black text-[#EFE7DC] hover:text-[#FEA42A] uppercase tracking-tighter italic"
                    >
                      {link.label}
                    </Link>
                    {link.sub && (
                      <button 
                        onClick={() => toggleMobileSub(link.label)}
                        className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-[#FEA42A]"
                      >
                        <ChevronDown className={`transition-transform ${activeMobileSub === link.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* MOBILE SUB-MENU */}
                  <AnimatePresence>
                    {link.sub && activeMobileSub === link.label && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-4 space-y-4 overflow-hidden"
                      >
                        {link.sub.map((s) => (
                          <Link 
                            key={s.label} to={s.to} onClick={() => setOpen(false)}
                            className="flex items-center justify-between text-[#FEA42A] font-bold text-sm uppercase tracking-widest"
                          >
                            {s.label} <ArrowRight size={14} />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 block w-full py-6 text-center bg-[#FEA42A] text-[#4F3C1C] font-black uppercase tracking-widest rounded-2xl shadow-xl"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
