import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/birnihigo", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/birnihigo", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/birnihigo", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@birnihigo", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/birnihigo", label: "LinkedIn" },
];

const departmentEmails = [
  { dept: "General Inquiries", email: "info@birnihigofarms.com" },
  { dept: "Investor Relations", email: "invest@birnihigo.com" },
  { dept: "Careers & CBF", email: "careers@birnihigo.com" },
  { dept: "Media & Partnerships", email: "media@birnihigo.com" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  // Brand Colors defined for consistency
  const brandYellow = "#FBBF24"; // The high-contrast yellow from your logo
  const darkNavy = "#1A1A1A";    // Professional dark background

  return (
    <footer className="border-t border-border" style={{ backgroundColor: darkNavy, color: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo1.png" 
                alt="Birnihigo Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-display text-2xl font-bold tracking-tight" style={{ color: brandYellow }}>
                Birnihigo
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Ethiopia's first fully integrated poultry ecosystem — from hatchery to halal-certified processing. Pioneering food security and sustainable agriculture.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/10 hover:bg-yellow-500 text-white hover:text-black"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] mb-6 text-gray-500 font-bold">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Our Story", to: "/about" },
                { label: "Poultry Products", to: "/products" },
                { label: "Integrated Services", to: "/services" },
                { label: "Sustainability", to: "/sustainability" },
                { label: "Investors", to: "/investors" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <Link 
                  key={l.to} 
                  to={l.to} 
                  className="text-sm text-gray-300 hover:text-yellow-400 transition-colors font-body"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] mb-6 text-gray-500 font-bold">Get In Touch</h4>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: brandYellow }} className="shrink-0" />
                <span className="text-gray-300">
                  Africa Avenue, Bedesta Building, 6th Floor, Addis Ababa
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: brandYellow }} className="shrink-0" />
                <a href="tel:+251911209405" className="text-gray-300 hover:text-white transition-colors">+251 911 20 94 05</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: brandYellow }} className="shrink-0" />
                <a href="mailto:info@birnihigofarms.com" className="text-gray-300 hover:text-white transition-colors">info@birnihigofarms.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter - FIXED LAYOUT & COLORS */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] mb-6 text-gray-500 font-bold">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-5 font-body">Join our mailing list for industry insights.</p>
            
            <form 
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }} 
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-yellow-500 transition-all font-body"
              />
              <button 
                type="submit" 
                style={{ backgroundColor: brandYellow }}
                className="w-full px-4 py-3 text-black text-sm font-bold rounded-lg hover:brightness-110 active:scale-[0.98] transition-all font-body shadow-lg"
              >
                JOIN US
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-1.5 border border-yellow-500/30 text-yellow-500 rounded-full text-[10px] font-bold tracking-widest uppercase">Halal Certified</span>
            <span className="px-4 py-1.5 border border-yellow-500/30 text-yellow-500 rounded-full text-[10px] font-bold tracking-widest uppercase">ISO 22000</span>
          </div>
          <p className="text-[11px] text-gray-500 font-body tracking-wide text-center">
            © 2026 BIRNIHIGO INTEGRATED FARMS PLC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
