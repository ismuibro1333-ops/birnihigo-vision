/* ... (Keep your imports and constants the same) ... */

const Footer = () => {
  const [email, setEmail] = useState("");

  const brandYellow = "#FBBF24"; 
  const darkNavy = "#1A1A1A";    

  return (
    <footer className="border-t border-border" style={{ backgroundColor: darkNavy, color: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              {/* Main Branding Logo */}
              <img 
                src="/logo1.png" 
                alt="Birnihigo Main Logo" 
                className="h-14 w-auto object-contain"
              />
              {/* Vertical Divider */}
              <div className="w-[1px] h-10 bg-white/20 hidden sm:block"></div>
              {/* The Tab Logo as a secondary brand mark */}
              <img 
                src="/tablogo.png" 
                alt="B Icon" 
                className="h-8 w-8 object-contain opacity-90"
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

          {/* ... (Keep Navigation and Contact sections exactly as you had them) ... */}

          {/* Newsletter - ALREADY FIXED WITH FLEX-COL */}
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
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-4">
             {/* Adding a small TabLogo here next to certifications for extra polish */}
            <img src="/tablogo.png" alt="" className="h-5 w-5 grayscale opacity-50" />
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
