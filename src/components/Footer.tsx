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

const Footer = () => {
  const [email, setEmail] = useState("");

  // Updated Brand Colors based on guidelines and video
  const brandOrange = "#FEA42A"; // Deep Saffron (Action color)
  const brandBrown = "#4F3C1C";  // Café Noir (Primary brand color)
  const brandCream = "#EFE7DC";  // White Chocolate (Text/Accent)

  return (
    <footer className="border-t border-white/5" style={{ backgroundColor: brandBrown, color: brandCream }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo1.png" 
                alt="Birnihigo Logo" 
                className="w-12 h-12 object-contain brightness-0 invert" // Makes logo white/cream to pop against brown
              />
              <span className="font-display text-2xl font-bold tracking-tight" style={{ color: brandOrange }}>
                Birnihigo
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm opacity-80 font-body">
              Ethiopia's first fully integrated poultry ecosystem — from Breeding Farms to halal-certified processing. Pioneering food security and sustainable agriculture.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/10 hover:bg-[#FEA42A] text-white hover:text-[#4F3C1C]"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] mb-6 opacity-50 font-bold">Explore</h4>
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
                  className="text-sm hover:text-[#FEA42A] transition-colors font-body opacity-80 hover:opacity-100"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact - Updated with Correct Building Info */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] mb-6 opacity-50 font-bold">Get In Touch</h4>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: brandOrange }} className="shrink-0" />
                <span className="opacity-80 font-body">
                  Africa Avenue, Bedesta Building, 6th Floor, Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: brandOrange }} className="shrink-0" />
                <a href="tel:+251911209405" className="opacity-80 hover:text-white transition-colors font-body">+251 911 20 94 05</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: brandOrange }} className="shrink-0" />
                <a href="mailto:info@birnihigofarms.com" className="opacity-80 hover:text-white transition-colors font-body">info@birnihigofarms.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.2em] mb-6 opacity-50 font-bold">Stay Updated</h4>
            <p className="text-sm mb-5 font-body opacity-70">Join our mailing list for industry insights.</p>
            
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
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#FEA42A] transition-all font-body"
              />
              <button 
                type="submit" 
                style={{ backgroundColor: brandOrange, color: brandBrown }}
                className="w-full px-4 py-3 text-sm font-bold rounded-lg hover:brightness-110 active:scale-[0.98] transition-all font-body shadow-lg"
              >
                JOIN US
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-1.5 border border-[#FEA42A]/30 text-[#FEA42A] rounded-full text-[10px] font-bold tracking-widest uppercase">Halal Certified</span>
            <span className="px-4 py-1.5 border border-[#FEA42A]/30 text-[#FEA42A] rounded-full text-[10px] font-bold tracking-widest uppercase">ISO 22000</span>
          </div>
          <p className="text-[11px] opacity-40 font-body tracking-wide text-center">
            © 2026 BIRNIHIGO INTEGRATED FARMS PLC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
