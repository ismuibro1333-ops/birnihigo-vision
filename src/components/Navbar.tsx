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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4F3C1C] border-b border-[#CD8C24]/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Birnihigo Integrated Farms" 
            className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" 
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
                className={`px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-1 ${
                  location.pathname === link.to
                    ? "text-[#FEA42A]"
                    : "text-[#EFE7DC] hover:text-[#FEA42A]"
                }`}
              >
                {link.label}
                {link.sub && <ChevronDown size={14} className="opacity-50" />}
              </Link>

              <AnimatePresence>
                {link.sub && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-[#4F3C1C] border border-[#CD8C24]/20 shadow-xl rounded-xl p-2"
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-2.5 text-sm text-[#EFE7DC]/80 hover:text-[#FEA42A] hover:bg-white/5 rounded-lg transition-all"
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
            className="ml-6 px-6 py-2.5 text-sm font-bold rounded-full bg-[#FEA42A] text-[#4F3C1C] hover:bg-[#FFD275] transition-all shadow-md active:scale-95"
          >
            Partner with Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
