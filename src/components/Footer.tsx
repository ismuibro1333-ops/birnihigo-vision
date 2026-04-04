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
    <footer className="border-t border-white/5 relative overflow-hidden font-body" style={{ backgroundColor: brandBrown, color: brandCream }}>
      {/* Visual Depth Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FEA42A]/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* 1. Brand Identity & Mission */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-4 mb-10 group">
              <div className="relative">
                <img 
                  src="/logo1.png" 
                  alt="Birnihigo Logo" 
                  className="w-14 h-14 object-contain brightness-0 invert transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-black tracking-tighter italic leading-none" style={{ color: brandOrange }}>
                  BIRNIHIGO
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-40 mt-1">Integrated Farms</span>
              </div>
            </Link>
            
            {/* THE REFINED TWO-PHRASE MISSION */}
            <p className="text-lg leading-relaxed mb-10 opacity-70 font-medium max-w-sm italic border-l-2 border-[#FEA42A] pl-6 py-1">
              Ethiopia's first fully integrated poultry ecosystem. Eliminating food insecurity through a 42-hectare industrial loop, 100% internal feed, and science-led Halal sovereignty.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-white/5 border border-white/10 hover:border-[#FEA42A] hover:bg-[#FEA42A] group"
                >
                  <s.icon size={18} className="text-white transition-transform group-hover:scale-110 group-hover:text-[#4F3C1C]" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation */}
          <div className="lg:col-span-2 lg:ml-8">
            <h4 className="text-[11px] uppercase tracking-[0.4em] mb-10 font-black text-[#FEA42A] italic">The Ecosystem</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Our Story", to: "/about" },
                { label: "Insights & News", to: "/blog" },
                { label: "Poultry Products", to: "/products" },
                { label: "Integrated Services", to: "/services" },
                { label: "Sustainability", to: "/sustainability" },
                { label: "Investors", to: "/investors" },
              ].map((l) => (
                <Link 
                  key={l.to} 
                  to={l.to} 
                  className="text-sm font-bold opacity-40 hover:opacity-100 hover:text-[#FEA42A] transition-all flex items-center gap-0 hover:gap-3 group"
                >
                  <span className="w-0 group-hover:w-4 h-[2px] bg-[#FEA42A] transition-all duration-300 rounded-full" />
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. UPDATED LOCATION: Corporate Liaison Office */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.4em] mb-10 font-black text-[#FEA42A] italic">Corporate Liaison</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FEA42A]/10 transition-colors">
                   <MapPin size={18} style={{ color: brandOrange }} />
                </div>
                <span className="text-sm opacity-60 font-bold leading-relaxed pt-1">
                  Kazanchis, In front of ECA,<br/> 
                  Garad Building, 10th Floor, <br/>
                  Room 10/02, Addis Ababa, Ethiopia
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FEA42A]/10 transition-colors">
                   <Phone size={18} style={{ color: brandOrange }} />
                </div>
                <a href="tel:+251222413101" className="text-sm opacity-60 hover:opacity-100 hover:text-[#FEA42A] font-black tracking-widest transition-all">
                  +251 22 241 3101
                </a>
              </div>
            </div>
          </div>

          {/* 4. Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.4em] mb-10 font-black text-[#FEA42A] italic">Journal Subscription</h4>
            <p className="text-sm mb-8 opacity-60 font-medium italic leading-relaxed">
              Join our exclusive mailing list for industrial-scale insights and national project updates.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-[#FEA42A] focus:bg-white/10 transition-all backdrop-blur-md placeholder:opacity-30"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 px-5 bg-[#FEA42A] text-[#4F3C1C] rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                <ArrowRight size={20} strokeWidth={3} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 px-6 py-2.5 bg-white/5 rounded-full border border-white/10 group">
               <div className="w-2 h-2 rounded-full bg-[#FEA42A] animate-pulse" />
               <span className="text-[10px] font-black tracking-[0.2em] uppercase opacity-60">Halal Certified</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-2.5 bg-white/5 rounded-full border border-white/10 group">
               <div className="w-2 h-2 rounded-full bg-[#FEA42A]" />
               <span className="text-[10px] font-black tracking-[0.2em] uppercase opacity-60">ISO 22000 compliant</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-black opacity-20 tracking-[0.4em] uppercase text-center md:text-right leading-none">
              © 2026 BIRNIHIGO INTEGRATED FARMS PLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
