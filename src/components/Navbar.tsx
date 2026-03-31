import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Fixed import name
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
    label: "Our Journey",
    to: "/products",
    sub: [
      { label: "From Farm to Fork", to: "/products" },
      { label: "Integrated Operations", to: "/services" },
      { label: "Sustainability", to: "/sustainability" },
    ],
  },
  { label: "Investors", to: "/investors" },
  {
    label: "Community",
    to: "/careers",
    sub: [
      { label: "Careers", to: "/careers" },
      { label: "Blog & News", to: "/blog" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const location = useLocation();

  // Helper to close everything
  const closeMenu = () => {
    setOpen(false);
    setMobileSubOpen(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#4F3C1C] border-b border-[#CD8C24]/20 backdrop-blur-xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        
        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center active:scale-95 transition-transform">
          <img src={logo} alt="Birnihigo" className="h-12 md:h-14 w-auto object-contain" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.sub && setHoveredMenu(link.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                to={link.to}
                className={`px-4 py-2 text-[12px] uppercase tracking-widest font-black transition-all flex items-center gap-1.5 rounded-full ${
                  location.pathname === link.to ? "text-[#FEA42A] bg-white/5" : "text-[#EFE7DC]"
                }`}
              >
                {link.label}
                {link.sub && <ChevronDown size={12} className={`transition-transform ${hoveredMenu === link.label ? 'rotate-180' : ''}`} />}
              </Link>

              <AnimatePresence>
                {link.sub && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-60 bg-[#4F3C1C] border border-[#CD8C24]/30 shadow-2xl rounded-2xl p-2 overflow-hidden"
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.label} to={s.to}
                        className="block px-5 py-3 text-xs text-[#EFE7DC] hover:bg-[#FEA42A] hover:text-[#4F3C1C] rounded-xl font-bold transition-all"
                      >
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
          className="lg:hidden p-3 text-[#FEA42A] bg-white/5 rounded-xl border border-white/10"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU - FULL SCREEN OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-24 bg-[#4F3C1C] z-[90] lg:hidden overflow-y-auto"
          >
            <div className="p-6 pb-24 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/5 last:border-none py-2">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={link.to} 
                      onClick={closeMenu}
                      className="flex-1 py-3 text-2xl font-black text-[#EFE7DC] hover:text-[#FEA42A] uppercase tracking-tighter italic"
                    >
                      {link.label}
                    </Link>
                    
                    {link.sub && (
                      <button 
                        onClick={() => setMobileSubOpen(mobileSubOpen === link.label ? null : link.label)}
                        className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-[#FEA42A]"
                      >
                        {mobileSubOpen === link.label ? <Minus size={20} /> : <Plus size={20} />}
                      </button>
                    )}
                  </div>

                  {/* THIS IS THE SECTION SHOWING BLOG/NEWS/ETC */}
                  <AnimatePresence>
                    {link.sub && mobileSubOpen === link.label && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-black/20 rounded-2xl mt-2 mb-4"
                      >
                        <div className="p-4 flex flex-col gap-4">
                          {link.sub.map((s) => (
                            <Link 
                              key={s.label} to={s.to} onClick={closeMenu}
                              className="text-lg font-bold text-[#FEA42A] flex items-center justify-between"
                            >
                              {s.label} <ChevronDown size={14} className="-rotate-90 opacity-50" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <Link
                to="/contact" onClick={closeMenu}
                className="mt-6 w-full py-5 text-center bg-[#FEA42A] text-[#4F3C1C] font-black uppercase tracking-widest rounded-2xl shadow-xl active:scale-[0.98] transition-transform"
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
