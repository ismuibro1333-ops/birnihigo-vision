import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  MapPin, Phone, Mail, ArrowRight, MessageCircle, 
  Calendar, Clock, Globe, ChevronRight, Factory, Building, ShieldCheck
} from "lucide-react";

const departmentEmails = [
  { dept: "Corporate Liaison", email: "info@birnihigofarms.com" },
  { dept: "Investor Relations", email: "invest@birnihigofarms.com" },
  { dept: "Export & Logistics", email: "logistics@birnihigofarms.com" },
  { dept: "Technical Visits", email: "visit@birnihigo.com" },
];

const Contact = () => {
  const [activeForm, setActiveForm] = useState("general");

  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 bg-[#EFE7DC] border-b border-[#CD8C24]/10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#CD8C24] text-xs uppercase tracking-[0.5em] mb-6 font-black italic">Diplomatic & Corporate Hub</p>
            <h1 className="font-display text-6xl md:text-8xl text-[#4F3C1C] font-black tracking-tighter italic leading-none">
              Strategic <span className="text-[#FEA42A]">Access.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. THE SPLIT CONCIERGE LAYOUT */}
      <section className="bg-[#EFE7DC] pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: THE INFO HUB */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatedSection>
              <div className="bg-[#4F3C1C] rounded-[3rem] p-10 text-[#EFE7DC] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                  <Globe size={160} />
                </div>
                
                <h3 className="text-xl font-black mb-10 italic border-b border-white/10 pb-6 uppercase tracking-[0.3em] text-[#FEA42A]">Operational Nodes</h3>
                
                <div className="space-y-12 relative z-10">
                  {/* CORPORATE LIAISON OFFICE */}
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Building className="text-[#FEA42A]" size={28} />
                    </div>
                    <div>
                      <p className="font-black text-[10px] uppercase tracking-[0.3em] text-[#FEA42A] mb-2">Corporate Liaison Office</p>
                      <p className="text-lg opacity-90 leading-relaxed font-bold italic">
                        Kazanchis, In front of ECA<br />
                        Garad Building, 10th Floor<br />
                        Room 10/02, Addis Ababa
                      </p>
                    </div>
                  </div>

                  {/* INDUSTRIAL HUB */}
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Factory className="text-[#FEA42A]" size={28} />
                    </div>
                    <div>
                      <p className="font-black text-[10px] uppercase tracking-[0.3em] text-[#FEA42A] mb-2">Industrial Hub</p>
                      <p className="text-lg opacity-90 leading-relaxed font-bold italic">
                        Awash Sebat, Afar Region<br />
                        42ha Bio-Secure Complex
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                    <a href="tel:+251222413101" className="flex flex-col gap-2 group">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#FEA42A] group-hover:text-[#4F3C1C] transition-all">
                        <Phone size={18} />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase opacity-40">Direct Line</span>
                    </a>
                    <a href="https://wa.me/251911509505" className="flex flex-col gap-2 group">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all">
                        <MessageCircle size={18} />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase opacity-40">WhatsApp Business</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Department Links Card */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-[#CD8C24]/10 shadow-sm">
                <h4 className="text-[#4F3C1C] font-black uppercase tracking-[0.4em] text-[10px] mb-8 italic">Strategic Mandates</h4>
                <div className="space-y-2">
                  {departmentEmails.map((d) => (
                    <a key={d.dept} href={`mailto:${d.email}`} className="flex justify-between items-center p-4 rounded-2xl hover:bg-[#4F3C1C] hover:text-[#EFE7DC] transition-all group">
                      <span className="text-xs uppercase font-black tracking-tighter">{d.dept}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] opacity-0 group-hover:opacity-40 transition-opacity uppercase font-black">Direct Email</span>
                        <ChevronRight size={14} className="text-[#FEA42A] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: THE FORM & MAP */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-sm border border-[#CD8C24]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEA42A]/5 rounded-full -mr-16 -mt-16" />
                
                <div className="flex gap-3 mb-14 flex-wrap">
                  {["general", "partnership", "investor"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveForm(type)}
                      className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeForm === type 
                        ? "bg-[#4F3C1C] text-[#FEA42A] shadow-xl scale-105" 
                        : "bg-[#EFE7DC] text-[#4F3C1C]/60 hover:bg-[#CD8C24]/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative">
                      <input type="text" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="fname" required />
                      <label htmlFor="fname" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">First Name</label>
                    </div>
                    <div className="relative">
                      <input type="text" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="lname" required />
                      <label htmlFor="lname" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Last Name</label>
                    </div>
                  </div>

                  <div className="relative">
                    <input type="email" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="email" required />
                    <label htmlFor="email" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Corporate Email</label>
                  </div>

                  <div className="relative">
                    <textarea rows={4} className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent resize-none" id="msg" required />
                    <label htmlFor="msg" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Project Mandate / Inquiry Details</label>
                  </div>

                  <button className="group w-full py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] italic hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all flex items-center justify-center gap-4 shadow-2xl">
                    Submit Credentials <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* MAP SECTION */}
            <AnimatedSection delay={0.4}>
              <div className="rounded-[3.5rem] overflow-hidden h-96 border-8 border-white shadow-xl grayscale hover:grayscale-0 transition-all duration-1000 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.547141541334!2d38.7618!3d9.0234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859669555555%3A0x5555555555555555!2sKazanchis%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1710000000000!5m2!1sen!2set" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:scale-105 transition-transform duration-[2000ms]"
                ></iframe>
              </div>
            </AnimatedSection>

            {/* Visit CTA */}
            <div className="p-10 bg-[#4F3C1C] rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FEA42A]/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <div className="flex items-center gap-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#FEA42A] flex items-center justify-center text-[#4F3C1C] shadow-lg">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h4 className="text-[#FEA42A] text-2xl font-black italic uppercase tracking-tighter">Site Inspection</h4>
                  <p className="text-[#EFE7DC]/50 font-bold text-sm">Schedule a technical tour of our 42ha industrial hub.</p>
                </div>
              </div>
              <a href="mailto:visit@birnihigo.com" className="relative z-10 px-10 py-5 bg-[#FEA42A] text-[#4F3C1C] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl active:scale-95">
                Book Technical Tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
