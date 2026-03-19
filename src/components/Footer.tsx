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
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Updated to use your actual logo asset */}
              <img 
                src="/tablogo.png" 
                alt="Birnihigo Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-display text-xl font-bold text-foreground">Birnihigo</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Ethiopia's first fully integrated poultry ecosystem — from hatchery to halal-certified processing. Pioneering food security and sustainable agriculture.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={s.label} 
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-muted-foreground font-semibold">Navigation</h4>
            <div className="flex flex-col gap-2">
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
                <Link 
                  key={l.to} 
                  to={l.to} 
                  className="text-sm text-foreground/60 hover:text-primary transition-colors font-body"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-muted-foreground font-semibold">Contact</h4>
            <div className="space-y-4 text-sm text-foreground/60">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  Africa Avenue, Bedesta Building, 6th Floor, Addis Ababa, Ethiopia
                  <br />
                  <span className="text-xs text-muted-foreground">Facility: Awash Sebat, Afar (Off Route A1)</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href="tel:+251911209405" className="hover:text-primary transition-colors">+251 911 20 94 05</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary" />
                <a href="mailto:info@birnihigofarms.com" className="hover:text-primary transition-colors">info@birnihigofarms.com</a>
              </div>
            </div>
            
            {/* Department-specific Emails */}
            <div className="mt-6 space-y-2 border-t border-border pt-4">
              {departmentEmails.map((d) => (
                <div key={d.email} className="text-xs font-body">
                  <span className="text-foreground/50 block mb-0.5">{d.dept}:</span>
                  <a href={`mailto:${d.email}`} className="text-foreground/70 hover:text-primary transition-colors">{d.email}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section - FIXED LAYOUT */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-muted-foreground font-semibold">Newsletter</h4>
            <p className="text-sm text-foreground/60 mb-4 font-body">Stay updated with our latest news and insights.</p>
            
            <form 
              onSubmit={(e) => { e.preventDefault(); setEmail(""); alert("Thank you for subscribing!"); }} 
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2.5 bg-muted border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-md hover:opacity-90 active:scale-[0.98] transition-all font-body shadow-sm"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </div>

        {/* Badges & Copyright Section */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-3 py-1 bg-primary/5 border border-primary/20 text-primary rounded-full text-[10px] font-bold tracking-widest font-body uppercase">Halal Certified</span>
            <span className="px-3 py-1 bg-primary/5 border border-primary/20 text-primary rounded-full text-[10px] font-bold tracking-widest font-body uppercase">ISO 22000</span>
            <span className="px-3 py-1 bg-primary/5 border border-primary/20 text-primary rounded-full text-[10px] font-bold tracking-widest font-body uppercase">HACCP</span>
          </div>
          <p className="text-[11px] text-muted-foreground font-body text-center md:text-right">
            © 2026 Birnihigo Integrated Farms PLC. <br className="md:hidden" /> All rights reserved. Built by SiteSphere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
