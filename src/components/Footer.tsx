import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Birnihigo Poultry" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Ethiopia's first fully integrated poultry ecosystem — from farm to fork.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Quick Links</h4>
            {[
              { label: "About Us", to: "/about" },
              { label: "Sustainability", to: "/sustainability" },
              { label: "Investor Relations", to: "/investors" },
              { label: "Careers", to: "/careers" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-primary-foreground/70 hover:text-primary-foreground py-1 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Awash Sebat, Afar Region, Ethiopia</div>
              <div className="flex items-center gap-2"><Phone size={16} /> +251 11 123 4567</div>
              <div className="flex items-center gap-2"><Mail size={16} /> info@birnihigo.com</div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">Stay updated with our latest news and insights.</p>
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30"
              />
              <button type="submit" className="px-4 py-2 bg-primary-foreground text-primary text-sm font-medium rounded-md hover:bg-primary-foreground/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Badges & Copyright */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 border border-primary-foreground/20 rounded-full text-xs font-medium tracking-wider">HALAL CERTIFIED</span>
            <span className="px-3 py-1 border border-primary-foreground/20 rounded-full text-xs font-medium tracking-wider">ISO 22000</span>
          </div>
          <p className="text-xs text-primary-foreground/50">© 2026 Birnihigo Poultry PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
