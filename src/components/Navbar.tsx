import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";

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
    label: "What We Do",
    to: "/products",
    sub: [
      { label: "Products", to: "/products" },
      { label: "Services", to: "/services" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Birnihigo Poultry" className="h-10 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(30%) saturate(400%) hue-rotate(5deg) brightness(90%) contrast(85%)' }} />
        </Link>

        {/* Desktop */}
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
                className={`px-4 py-2 text-sm font-body font-medium rounded-md transition-colors flex items-center gap-1 ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {link.sub && <ChevronDown size={14} />}
              </Link>

              <AnimatePresence>
                {link.sub && hoveredMenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 glass rounded-lg p-2"
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-2 text-sm text-foreground/70 hover:text-accent hover:bg-muted rounded-md transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 bg-accent text-accent-foreground text-sm font-body font-semibold rounded-lg hover:brightness-110 transition-all gold-glow"
          >
            Partner with Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[2px] bg-foreground rounded-full origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[2px] bg-foreground rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-[2px] bg-foreground rounded-full origin-center"
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-80 bg-background border-l border-border z-50 p-6 pt-20 lg:hidden overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.label} className="mb-2">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-foreground font-medium hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
                {link.sub?.map((s) => (
                  <Link
                    key={s.label}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="block px-8 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-6 px-4 py-3 bg-accent text-accent-foreground text-center font-semibold rounded-lg"
            >
              Partner with Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
