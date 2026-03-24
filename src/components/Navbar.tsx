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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4F3C1C] border-b border-[#CD8C24]/30 backdrop-blur-xl shadow-2xl font-parkinsans">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6 lg:px-12">
        
        {/* LOGO SECTION - Ensuring Requirement #1 (Clear Space & Min Size) */}
        <Link to="/" className="flex items-center py-4 transition-transform duration-300 active:scale-95">
          <img 
            src={logo} 
            alt="Birnihigo Integrated Farms" 
            className="h-10 md:h-14 w-auto object-contain min-h-[32px]" 
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
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
                className={`px-4 py-2 text-[13px] uppercase tracking-widest font-bold transition-all flex items-center gap-1.5 rounded-full ${
                  location.pathname === link.to
                    ? "text-[#FEA42A]" // Deep Saffron for Active
                    : "text-[#EFE7DC] hover:text-[#FEA42A]" // White Chocolate to Saffron
                }`}
              >
                {link.label}
                {link.sub && <ChevronDown size={12} className={`transition-transform duration-300 ${hoveredMenu === link.label ? 'rotate-180' : ''}`} />}
              </Link>

              {/* DROPDOWN MENU - Using Chinese Bronze Accents */}
              <AnimatePresence>
                {link.sub && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-[#4F3C1C] border border-[#CD8C24]/40 shadow-2xl rounded-xl overflow-hidden p-2 backdrop-blur-2xl"
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-5 py-3 text-sm text-[#EFE7DC] hover:text-[#4F3C1C] hover:bg-[#FEA42A] rounded-lg transition-all font-bold tracking-wide"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CTA BUTTON - Deep Saffron Background */}
          <Link
            to="/contact"
            className="ml-6 px-8 py-3 text-xs uppercase tracking-widest font-black rounded-full bg-[#FEA42A] text-[#4F3C1C] hover:bg-[#FFD275] hover:scale-105 transition-all shadow-[0_10px_20px_rgba(254,164,42,0.3)]"
          >
            Get In Touch
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden p-2 text-[#FEA42A]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#4F3C1C] border-t border-[#CD8C24]/20"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  to={link.to} 
                  onClick={() => setOpen(false)}
                  className="text-xl font-bold text-[#EFE7DC] hover:text-[#FEA42A] uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 w-full py-4 text-center bg-[#FEA42A] text-[#4F3C1C] font-bold uppercase tracking-widest rounded-xl"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

