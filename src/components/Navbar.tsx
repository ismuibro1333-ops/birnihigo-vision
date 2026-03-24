import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#4F3C1C] border-b border-[#CD8C24]/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        
        <Link to="/" className="flex items-center py-4">
          <img src={logo} alt="Birnihigo Logo" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div key={link.label} className="relative" onMouseEnter={() => setHoveredMenu(link.label)} onMouseLeave={() => setHoveredMenu(null)}>
              <Link to={link.to} className={`px-4 py-2 text-[13px] uppercase tracking-widest font-bold transition-all flex items-center gap-1.5 ${location.pathname === link.to ? "text-[#FEA42A]" : "text-[#EFE7DC] hover:text-[#FEA42A]"}`}>
                {link.label}
                {link.sub && <ChevronDown size={12} />}
              </Link>
            </div>
          ))}
          <Link to="/contact" className="ml-6 px-8 py-3 bg-[#FEA42A] text-[#4F3C1C] rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
            Get In Touch
          </Link>
        </div>

        {/* MOBILE TOGGLE - FIXED THE X VISIBILITY */}
        <button className="lg:hidden relative z-[110] p-2 text-[#FEA42A]" onClick={() => setOpen(!open)}>
          {open ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
        </button>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-[#4F3C1C] flex flex-col p-10 justify-center"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.to} onClick={() => setOpen(false)} className="text-4xl font-black text-[#EFE7DC] hover:text-[#FEA42A] uppercase tracking-tighter">
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
