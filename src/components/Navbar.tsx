import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react"; // Added Plus/Minus for mobile
import { motion, AnimatePresence } from " f_motion";
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
  const [mobileSubOpen, setMobileSubOpen] = useState(null); // Track which mobile menu is open
  const location = useLocation();

  const toggleMobileSub = (label) => {
    setMobileSubOpen(mobileSubOpen === label ? null : label);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4F3C1C]/95 border-b border-[#CD8C24]/20 backdrop-blur-xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        
        {/* LOGO SECTION */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center group transition-transform duration-300 active:scale-95">
          <img 
            src={logo} 
            alt="Birnihigo Integrated Farms" 
            className="h-14 w-auto object-contain transition-all duration-500 group-hover:brightness-110" 
          />
        </Link>

        {/* DESKTOP NAVIGATION (Stays the same) */}
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
                className={`px-4 py-2 text-[13px] uppercase tracking-widest font-black transition-all flex items-center gap-1.5 rounded-full ${
                  location.pathname === link.to
                    ? "text-[#FEA42A] bg-[#CD8C24]/10" 
                    : "text-[#EFE7DC] hover:text-[#FEA42A] hover:bg-white/5" 
                }`}
              >
                {link.label}
                {link.sub && <ChevronDown size={12} className={`transition-transform duration-300 ${hoveredMenu === link.label ? 'rotate-180' : ''}`} />}
              </Link>

              <AnimatePresence>
                {link.sub && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-[#4F3C1C] border border-[#CD8C24]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-2xl overflow-hidden p-2 backdrop-blur-2xl"
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-5 py-3 text-sm text-[#EFE7DC] hover:text-[#4F3C1C] hover:bg-[#FEA42A] rounded-xl transition-all font-bold tracking-wide"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link
            to="/contact"
            className="ml-6 px-8 py-3 text-xs uppercase tracking-[0.2em] font-black rounded-full bg-[#FEA42A] text-[#4F3C1C] hover:bg-[#FFD275] hover:-translate-y-0.5 transition-all active:scale-95 shadow-[0_10px_20px_rgba(254,164,42,0.2)]"
          >
            Get In Touch
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden p-2 text-[#FEA42A] bg-white/5 rounded-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY - THE FIX IS HERE */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-24 bg-[#4F3C1C] z-40 overflow-y-auto"
          >
            <div className="p-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-[#CD8C24]/10 pb-4">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={link.to} 
                      onClick={() => !link.sub && setOpen(false)}
                      className="text-2xl font-black text-[#EFE7DC] hover:text-[#FEA42A] uppercase tracking-tighter italic"
                    >
                      {link.label}
                    </Link>
                    
                    {/* If it has a sub-menu, show a toggle button */}
                    {link.sub && (
                      <button 
                        onClick={() => toggleMobileSub(link.label)}
                        className="p-2 text-[#FEA42A] bg-white/5 rounded-full"
                      >
                        {mobileSubOpen === link.label ? <Minus size={20} /> : <Plus size={20} />}
                      </button>
                    )}
                  </div>

                  {/* MOBILE SUB-MENU (Shows Blog, News, etc.) */}
                  <AnimatePresence>
                    {link.sub && mobileSubOpen === link.label && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-3 mt-4 ml-4 border-l-2 border-[#FEA42A]/20 pl-6"
                      >
                        {link.sub.map((s) => (
                          <Link 
                            key={s.label}
                            to={s.to}
                            onClick={() => setOpen(false)}
                            className="text-lg font-bold text-[#EFE7DC]/70 hover:text-[#FEA42A] py-1"
                          >
                            {s.label}
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
                className="mt-6 w-full py-5 text-center bg-[#FEA42A] text-[#4F3C1C] font-black uppercase tracking-widest rounded-2xl shadow-xl"
              >
                Partner with Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
