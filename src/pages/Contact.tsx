import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  MapPin, Phone, Mail, ArrowRight, MessageCircle, 
  Calendar, Clock, Globe, ChevronRight, Factory 
} from "lucide-react";

const departmentEmails = [
  { dept: "General Inquiries", email: "info@birnihigofarms.com" },
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
            <p className="text-[#CD8C24] text-xs uppercase tracking-[0.5em] mb-6 font-black">Global Operations</p>
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
              <div className="bg-[#4F3C1C] rounded-[3rem] p-10 text-[#EFE7DC] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Globe size={120} />
                </div>
                
                <h3 className="text-2xl font-black mb-10 italic border-b border-white/10 pb-6 uppercase tracking-widest">Our Locations</h3>
                
                <div className="space-y-12 relative z-10">
                  {/* CORPORATE HQ */}
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FEA42A]/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-[#FEA42A]" size={24} />
                    </div>
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest text-[#FEA42A] mb-2">Corporate Headquarters</p>
                      <p className="text-lg opacity-90 leading-relaxed font-bold">
                        Africa Avenue, Bedesta Building<br />6th Floor — Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  {/* INDUSTRIAL COMPLEX */}
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FEA42A]/10 flex items-center justify-center shrink-0">
                      <Factory className="text-[#FEA42A]" size={24} />
                    </div>
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest text-[#FEA42A] mb-2">Industrial Complex</p>
                      <p className="text-lg opacity-90 leading-relaxed font-bold">
                        Birnihigo Integrated Farm Site<br />42ha Bio-Secure Zone — Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                    <a href="tel:+251911509505" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FEA42A] group-hover:text-[#4F3C1C] transition-all">
                        <Phone size={18} />
                      </div>
                      <span className="text-xs font-black tracking-widest uppercase">Direct Line</span>
                    </a>
                    <a href="https://wa.me/251911509505" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] transition-all">
                        <MessageCircle size={18} />
                      </div>
                      <span className="text-xs font-black tracking-widest uppercase">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Department Links */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-[#CD8C24]/10 shadow-sm">
                <h4 className="text-[#4F3C1C] font-black uppercase tracking-[0.2em] text-xs mb-6">Vertical Departments</h4>
                <div className="space-y-3">
                  {departmentEmails.map((d) => (
                    <a key={d.dept} href={`mailto:${d.email}`} className="flex justify-between items-center p-4 rounded-2xl hover:bg-[#4F3C1C] hover:text-[#EFE7DC] transition-all group font-black">
                      <span className="text-sm uppercase tracking-tighter">{d.dept}</span>
                      <ChevronRight size={16} className="text-[#FEA42A] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: THE FORM */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-[3.5rem] p-12 shadow-sm border border-[#CD8C24]/10">
                <div className="flex gap-4 mb-12 flex-wrap">
                  {["general", "partnership", "investor"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveForm(type)}
                      className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeForm === type 
                        ? "bg-[#4F3C1C] text-[#FEA42A] shadow-xl" 
                        : "bg-[#EFE7DC] text-[#4F3C1C] hover:bg-[#CD8C24]/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative">
                      <input type="text" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="fname" />
                      <label htmlFor="fname" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">First Name</label>
                    </div>
                    <div className="relative">
                      <input type="text" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="lname" />
                      <label htmlFor="lname" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Last Name</label>
                    </div>
                  </div>

                  <div className="relative">
                    <input type="email" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="email" />
                    <label htmlFor="email" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Corporate Email</label>
                  </div>

                  <div className="relative">
                    <textarea rows={4} className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent resize-none" id="msg" />
                    <label htmlFor="msg" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Subject of Inquiry</label>
                  </div>

                  <button className="group w-full py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all flex items-center justify-center gap-4">
                    Send Official Inquiry <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Visit CTA */}
              <div className="mt-8 p-10 bg-[#FEA42A] rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#4F3C1C] flex items-center justify-center text-[#FEA42A]">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <h4 className="text-[#4F3C1C] text-xl font-black italic">Site Inspections</h4>
                    <p className="text-[#4F3C1C]/70 font-bold text-sm">Review our bio-secure systems and scale first-hand.</p>
                  </div>
                </div>
                <a href="mailto:visit@birnihigo.com" className="px-8 py-4 bg-[#4F3C1C] text-[#FEA42A] rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl">
                  Book Technical Tour
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
