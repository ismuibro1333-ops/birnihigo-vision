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

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display text-sm">B</span>
              </div>
              <span className="font-display text-lg text-foreground">Birnihigo</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-sm">
              Ethiopia's first fully integrated poultry ecosystem — from hatchery to halal-certified processing. Pioneering food security and sustainable agriculture.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-muted-foreground">Navigation</h4>
            {[
              { label: "About Us", to: "/about" },
              { label: "Products", to: "/products" },
              { label: "Services", to: "/services" },
              { label: "Sustainability", to: "/sustainability" },
              { label: "Investor Relations", to: "/investors" },
              { label: "Careers", to: "/careers" },
              { label: "Blog", to: "/blog" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", to: "/contact" },
              { label: "Privacy Policy", to: "/privacy" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-foreground/60 hover:text-accent py-1 transition-colors font-body">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact & Department Emails */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-muted-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-foreground/60">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />
                <span>Africa Avenue, Bedesta Building, 6th Floor, Addis Ababa, Ethiopia<br /><span className="text-xs">Facility: Awash Sebat, Afar (Off Route A1)</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-primary" />
                <a href="tel:+251911209405" className="hover:text-accent transition-colors">+251 911 20 94 05</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-primary" />
                <a href="mailto:info@birnihigofarms.com" className="hover:text-accent transition-colors">info@birnihigofarms.com</a>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              {departmentEmails.map((d) => (
                <div key={d.email} className="text-xs text-foreground/40 font-body">
                  <span className="text-foreground/50">{d.dept}:</span>{" "}
                  <a href={`mailto:${d.email}`} className="hover:text-accent transition-colors">{d.email}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-muted-foreground">Newsletter</h4>
            <p className="text-sm text-foreground/60 mb-4 font-body">Stay updated with our latest news and insights.</p>
            <form onSubmit={(e) => { e.preventDefault(); setEmail(""); }} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-muted border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary font-body"
              />
              <button type="submit" className="px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:brightness-110 transition-all font-body">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Badges & Copyright */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 border border-primary/30 text-primary rounded-full text-xs font-medium tracking-wider font-body">HALAL CERTIFIED</span>
            <span className="px-3 py-1 border border-primary/30 text-primary rounded-full text-xs font-medium tracking-wider font-body">ISO 22000</span>
            <span className="px-3 py-1 border border-primary/30 text-primary rounded-full text-xs font-medium tracking-wider font-body">HACCP</span>
          </div>
          <p className="text-xs text-muted-foreground font-body">© 2026 Birnihigo Integrated Farms PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
