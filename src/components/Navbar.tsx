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
    // IMPROV: Added bg-opacity and a more defined brand border
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4F3C1C]/95 border-b border-[#CD8C24]/30 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        
        {/* LOGO: Added a slight glow on hover to match brand energy */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="Birnihigo Integrated Farms" 
            className="h-14 w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(254,164,42,0.4)]" 
          />
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
                className={`px-4 py-2 text-sm font-semibold transition-all flex items-center gap-1 rounded-lg ${
                  location.pathname === link.to
                    ? "text-[#FEA42A] bg-white/5" // Active state
                    : "text-[#EFE7DC] hover:text-[#FFD275] hover:bg-white/5" // Use Dandelion for hover
                }`}
              >
                {link.label}
                {link.sub && <ChevronDown size={14} className="opacity-40" />}
              </Link>

              {/* DROPDOWN IMPROV: Added Chinese Bronze accents to the dropdown */}
              <AnimatePresence>
                {link.sub && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#4F3C1C] border border-[#CD8C24]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden p-1"
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-3 text-sm text-[#EFE7DC]/90 hover:text-[#4F3C1C] hover:bg-[#FEA42A] transition-all font-medium"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CTA BUTTON: High-end animation and brand colors */}
          <Link
            to="/contact"
            className="ml-6 px-7 py-2.5 text-sm font-extrabold rounded-full bg-[#FEA42A] text-[#4F3C1C] hover:bg-[#FFD275] hover:shadow-[0_0_20px_rgba(254,164,42,0.3)] transition-all active:scale-95 shadow-lg"
          >
            Partner with Us
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button 
          className="lg:hidden text-[#EFE7DC]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 top-20 bg-[#4F3C1C] z-40 lg:hidden p-6 flex flex-col gap-6"
          >
             {/* Mobile links would go here with text-[#EFE7DC] */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
