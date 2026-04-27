import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.webp";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/birnihigo", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/birnihigo", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/birnihigo", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/birnihigo", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/birnihigo", label: "LinkedIn" },
];

const navColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Investors", to: "/investors" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Operations",
    links: [
      { label: "Products", to: "/products" },
      { label: "Services", to: "/services" },
      { label: "Gallery", to: "/gallery" },
      { label: "Blog", to: "/blog" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#4F3C1C] text-[#EFE7DC] border-t border-[#FEA42A]/10">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Birnihigo" className="h-12 w-auto" />
            </Link>
            <p className="text-[#EFE7DC]/60 text-sm leading-relaxed font-medium max-w-md mb-8">
              Pioneering East Africa's food security through a fully integrated, science-based poultry ecosystem — from hatchery to halal-certified processing.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FEA42A] hover:text-[#4F3C1C] hover:border-transparent transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[10px] uppercase tracking-[0.3em] mb-5 text-[#FEA42A] font-black">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-[#EFE7DC]/60 hover:text-[#FEA42A] transition-colors font-semibold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] mb-5 text-[#FEA42A] font-black">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-[#EFE7DC]/60 font-medium">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#FEA42A]" />
                <span>
                  Africa Avenue, Bedesta Building<br />
                  6th Floor, Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-[#FEA42A]" />
                <a href="tel:+251911209405" className="hover:text-[#FEA42A] transition-colors">
                  +251 911 20 94 05
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-[#FEA42A]" />
                <a
                  href="mailto:info@birnihigofarms.com"
                  className="hover:text-[#FEA42A] transition-colors"
                >
                  info@birnihigofarms.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="mt-6 flex gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-[#EFE7DC] placeholder:text-[#EFE7DC]/30 focus:outline-none focus:border-[#FEA42A] font-semibold"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#FEA42A] text-[#4F3C1C] text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-white transition-all"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Badges & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {["HALAL CERTIFIED", "ISO 22000", "HACCP"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 border border-[#FEA42A]/30 text-[#FEA42A] rounded-full text-[10px] font-black tracking-[0.2em]"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[10px] text-[#EFE7DC]/40 font-bold uppercase tracking-widest">
            <span>© 2026 Birnihigo Farms PLC</span>
            <Link to="/privacy" className="hover:text-[#FEA42A] transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
