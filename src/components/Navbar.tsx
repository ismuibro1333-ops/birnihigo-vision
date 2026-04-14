import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.webp"; 

// Updated for "Nike-style" site architecture
const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Operations", // Renamed for professional clarity
    to: "/services",
    sub: [
      { label: "Integrated Operations", to: "/services" },
      { label: "Value Chain", to: "/products" },
      { label: "Our Heritage", to: "/about" },
    ],
  },
  { label: "Products", to: "/products" }, // Primary page
  { label: "Investors", to: "/investors" }, // Primary page
  { label: "Sustainability", to: "/sustainability" }, // Primary page
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EFE7DC]/95 border-b border-[#4F3C1C]/10 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        
        <Link to="/" className="flex items-center group transition-transform duration-300 active:scale-95">
          <img 
            src={logo} 
            alt="Birnihigo Integrated Farms" 
            className="h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105" 
          />
        </Link>

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
                    ? "text-[#CD8C24] bg-[#4F3C1C]/5" 
                    : "text-[#4F3C1C] hover:text-[#CD8C24] hover:bg-[#4F3C1C]/5" 
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
                    className="absolute top-full left-0 mt-3 w-64 bg-[#EFE7DC] border border-[#4F3C1C]/10 shadow-[0_20px_50px_rgba(79,60,28,0.15)] rounded-2xl overflow-hidden p-2 backdrop-blur-2xl"
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-5 py-3 text-sm text-[#4F3C1C] hover:text-[#EFE7DC] hover:bg-[#4F3C1C] rounded-xl transition-all font-bold tracking-wide"
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
            className="ml-6 px-8 py-3 text-xs uppercase tracking-[0.2em] font-black rounded-full bg-[#4F3C1C] text-[#FEA42A] hover:bg-[#CD8C24] hover:text-[#EFE7DC] transition-all active:scale-95 shadow-xl"
          >
            Get In Touch
          </Link>
        </div>

        <button 
          className="lg:hidden p-2 text-[#4F3C1C] bg-[#4F3C1C]/5 rounded-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#EFE7DC] border-t border-[#4F3C1C]/10 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  to={link.to} 
                  onClick={() => setOpen(false)}
                  className="text-2xl font-black text-[#4F3C1C] hover:text-[#CD8C24] uppercase tracking-tighter"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
