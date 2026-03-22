import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Brand Colors from guidelines
  const brandOrange = "#FEA42A";
  const brandBrown = "#4F3C1C";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Birnihigo Integrated Farms" 
            className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation */}
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
                className={`px-4 py-2 text-sm font-body font-semibold rounded-md transition-colors flex items-center gap-1 ${
                  location.pathname === link.to
                    ? "text-[#FEA42A]"
                    : "text-[#4F3C1C]/80 hover:text-[#4F3C1C]"
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
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2"
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-2.5 text-sm text-[#4F3C1C]/70 hover:text-[#FEA42A] hover:bg-orange-50 rounded-lg transition-all"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CTA Button */}
          <Link
            to="/contact"
            style={{ backgroundColor: brandOrange, color: brandBrown }}
            className="ml-6 px-6 py-2.5 text-sm font-body font-bold rounded-full hover:brightness-110 transition-all shadow-md active:scale-95"
          >
            Partner with Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} className="text-[#4F3C1C]" /> : <Menu size={24} className="text-[#4F3C1C]" />}
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-80 bg-white z-50 p-6 pt-24 lg:hidden overflow-y-auto shadow-2xl"
            >
              {navLinks.map((link) => (
                <div key={link.label} className="mb-4">
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-[#4F3C1C] font-bold text-lg hover:text-[#FEA42A] transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.sub?.map((s) => (
                    <Link
                      key={s.label}
                      to={s.to}
                      onClick={() => setOpen(false)}
                      className="block px-8 py-2 text-sm text-[#4F3C1C]/60 hover:text-[#FEA42A] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                style={{ backgroundColor: brandOrange, color: brandBrown }}
                className="block mt-8 px-4 py-4 text-center font-bold rounded-xl shadow-lg"
              >
                Partner with Us
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
