import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  MapPin, Phone, Mail, ArrowRight, MessageCircle, 
  Calendar, Clock, Globe, ChevronRight 
} from "lucide-react";

const departmentEmails = [
  { dept: "General", email: "info@birnihigofarms.com" },
  { dept: "Investors", email: "invest@birnihigofarms.com" },
  { dept: "Careers", email: "careers@birnihigofarms.com" },
  { dept: "Visits", email: "visit@birnihigo.com" },
];

const Contact = () => {
  const [activeForm, setActiveForm] = useState("general");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });

  return (
    <Layout>
      {/* 1. MINIMAL HERO */}
      <section className="pt-32 pb-20 bg-[#EFE7DC] border-b border-[#CD8C24]/10">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#CD8C24] text-xs uppercase tracking-[0.5em] mb-6 font-black">Get in Touch</p>
            <h1 className="font-display text-6xl md:text-8xl text-[#4F3C1C] font-black tracking-tighter italic leading-none">
              Let's <span className="text-[#FEA42A]">Connect.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. THE SPLIT CONCIERGE LAYOUT */}
      <section className="bg-[#EFE7DC] pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: THE INFO HUB (Sticky) */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatedSection>
              <div className="bg-[#4F3C1C] rounded-[3rem] p-10 text-[#EFE7DC] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Globe size={120} />
                </div>
                
                <h3 className="text-2xl font-black mb-10 italic border-b border-white/10 pb-6 uppercase tracking-widest">Headquarters</h3>
                
                <div className="space-y-10 relative z-10">
                  <div className="flex gap-6">
                    <MapPin className="text-[#FEA42A] shrink-0" size={24} />
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest text-[#FEA42A] mb-2">Addis Ababa</p>
                      <p className="text-lg opacity-80 leading-relaxed font-medium">
                        Africa Avenue, Bedesta Building<br />6th Floor, Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <Clock className="text-[#FEA42A] shrink-0" size={24} />
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest text-[#FEA42A] mb-2">Availability</p>
                      <p className="text-lg opacity-80 font-medium">Mon — Sat: 8:00AM – 6:00PM EAT</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                    <a href="tel:+251911509505" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FEA42A] group-hover:text-[#4F3C1C] transition-all">
                        <Phone size={18} />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase">Call Us</span>
                    </a>
                    <a href="https://wa.me/251911509505" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] transition-all">
                        <MessageCircle size={18} />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Department Links */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-[#CD8C24]/10">
                <h4 className="text-[#4F3C1C] font-black uppercase tracking-[0.2em] text-xs mb-6">Direct Channels</h4>
                <div className="space-y-4">
                  {departmentEmails.map((d) => (
                    <a key={d.dept} href={`mailto:${d.email}`} className="flex justify-between items-center p-4 rounded-2xl hover:bg-[#4F3C1C] hover:text-[#EFE7DC] transition-all group font-bold">
                      <span className="text-sm">{d.dept}</span>
                      <ChevronRight size={16} className="text-[#CD8C24] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: THE FORM (Industrial Clean) */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-[3.5rem] p-12 shadow-sm border border-[#CD8C24]/10">
                <div className="flex gap-4 mb-12 flex-wrap">
                  {["general", "partnership", "investor"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveForm(type)}
                      className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
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
                      <input type="text" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="fname" placeholder="First Name" />
                      <label htmlFor="fname" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">First Name</label>
                    </div>
                    <div className="relative">
                      <input type="text" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="lname" placeholder="Last Name" />
                      <label htmlFor="lname" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Last Name</label>
                    </div>
                  </div>

                  <div className="relative">
                    <input type="email" className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent" id="email" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Email Address</label>
                  </div>

                  <div className="relative">
                    <textarea rows={4} className="w-full bg-transparent border-b-2 border-[#4F3C1C]/10 py-4 focus:border-[#FEA42A] outline-none transition-colors peer placeholder-transparent resize-none" id="msg" placeholder="Message" />
                    <label htmlFor="msg" className="absolute left-0 top-0 text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#FEA42A]">Your Message</label>
                  </div>

                  <button className="group w-full py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all flex items-center justify-center gap-4">
                    Send Inquiry <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Visit CTA */}
              <div className="mt-8 p-10 bg-[#FEA42A] rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#4F3C1C] flex items-center justify-center text-white">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <h4 className="text-[#4F3C1C] text-xl font-black italic">Schedule a Visit</h4>
                    <p className="text-[#4F3C1C]/70 font-bold text-sm">Experience our bio-secure facility in person.</p>
                  </div>
                </div>
                <a href="mailto:visit@birnihigo.com" className="px-8 py-4 bg-[#4F3C1C] text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Book Guided Tour
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
