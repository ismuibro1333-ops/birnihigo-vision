import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
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

  const brandOrange = "#FEA42A"; 
  const brandBrown = "#4F3C1C";  
  const brandCream = "#EFE7DC";  

  return (
    <footer className="border-t border-white/5 relative overflow-hidden" style={{ backgroundColor: brandBrown, color: brandCream }}>
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEA42A]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
          
          {/* 1. Brand Identity */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <img 
                src="/logo1.png" 
                alt="Birnihigo Logo" 
                className="w-14 h-14 object-contain brightness-0 invert transition-transform duration-500 group-hover:rotate-[10deg]" 
              />
              <div className="flex flex-col">
                <span className="font-display text-3xl font-black tracking-tighter italic" style={{ color: brandOrange }}>
                  BIRNIHIGO
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40">Integrated Farms</span>
              </div>
            </Link>
            <p className="text-base leading-relaxed mb-10 opacity-60 font-medium max-w-sm italic border-l-2 border-[#FEA42A]/30 pl-6">
              Ethiopia's first fully integrated poultry ecosystem. Pioneering food security through Cobb 500 genetics and Halal-certified precision.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all bg-white/5 border border-white/10 hover:border-[#FEA42A] hover:bg-[#FEA42A] text-white hover:text-[#4F3C1C] group"
                >
                  <s.icon size={20} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Explore - ALIGNED STORY & BLOG */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.3em] mb-10 font-black text-[#FEA42A]">The Ecosystem</h4>
            <div className="flex flex-col gap-5">
              {[
                { label: "Our Story", to: "/about" },
                { label: "Insights & News", to: "/blog" }, // Directly paired with Story
                { label: "Poultry Products", to: "/products" },
                { label: "Integrated Services", to: "/services" },
                { label: "Sustainability", to: "/sustainability" },
                { label: "Investors", to: "/investors" },
              ].map((l) => (
                <Link 
                  key={l.to} 
                  to={l.to} 
                  className="text-sm font-bold opacity-50 hover:opacity-100 hover:text-[#FEA42A] transition-all flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-4 h-[1px] bg-[#FEA42A] transition-all duration-300" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Contact & HQ */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] mb-10 font-black text-[#FEA42A]">Headquarters</h4>
            <div className="space-y-8 text-sm">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FEA42A]/10 transition-colors">
                   <MapPin size={18} style={{ color: brandOrange }} />
                </div>
                <span className="opacity-60 font-semibold leading-relaxed">
                  Africa Avenue, Bedesta Building,<br/> 6th Floor, Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FEA42A]/10 transition-colors">
                   <Phone size={18} style={{ color: brandOrange }} />
                </div>
                <a href="tel:+251911209405" className="opacity-60 hover:opacity-100 hover:text-white font-bold tracking-widest">+251 911 20 94 05</a>
              </div>
            </div>
          </div>

          {/* 4. Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] mb-10 font-black text-[#FEA42A]">Journal Subscription</h4>
            <p className="text-sm mb-8 opacity-60 font-medium italic">Join our mailing list for industry-leading poultry insights.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-[#FEA42A] transition-all backdrop-blur-md"
                />
                <button type="submit" className="absolute right-2 top-2 bottom-2 px-4 bg-[#FEA42A] text-[#4F3C1C] rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom - Accreditation */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-5 py-2 bg-white/5 rounded-full border border-white/5">
               <div className="w-2 h-2 rounded-full bg-[#FEA42A] animate-pulse" />
               <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-80">Halal Certified</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2 bg-white/5 rounded-full border border-white/5">
               <div className="w-2 h-2 rounded-full bg-[#FEA42A]" />
               <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-80">ISO 22000 compliant</span>
            </div>
          </div>
          <p className="text-[10px] font-black opacity-20 tracking-[0.3em] text-center uppercase">
            © 2026 BIRNIHIGO INTEGRATED FARMS PLC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
