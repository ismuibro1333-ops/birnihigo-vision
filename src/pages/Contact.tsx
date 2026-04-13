import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MapPin, Phone, Mail, ArrowRight, Building,
  Factory, ChevronRight, ShieldCheck, Globe2,
  Users2, Landmark, Briefcase
} from "lucide-react";

const Contact = () => {
  const [activeTrack, setActiveTrack] = useState("Investor inquiries");

  const contactTracks = [
    { id: "Investor inquiries", icon: Landmark, desc: "Capital allocation & ROI projections.", email: "investors@birnihigofarms.com" },
    { id: "Partnership requests", icon: Globe2, desc: "Institutional & supply chain collaboration.", email: "partners@birnihigofarms.com" },
    { id: "Contract farming", icon: Briefcase, desc: "Outgrower inclusion & training programs.", email: "info@birnihigofarms.com" },
  ];

  return (
    <Layout>
      {/* 1. STRATEGIC HERO */}
      <section className="pt-40 pb-20 bg-[#4F3C1C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ethiopia-map-pattern.png')] bg-fixed opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-[#FEA42A] text-[10px] uppercase tracking-[0.6em] mb-8 font-black italic">
              Partnership & Liaison
            </p>
            <h1 className="font-display text-5xl md:text-[7rem] text-[#EFE7DC] font-black tracking-tighter italic leading-[0.9] uppercase mb-12">
              Building a <br /> Sustainable <br />{" "}
              <span className="text-[#FEA42A]">Protein Future.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. DUAL-NODE INFRASTRUCTURE */}
      <section className="py-24 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ADDIS CORPORATE OFFICE */}
          <AnimatedSection>
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-[#CD8C24]/10 h-full flex flex-col group">
              <div className="w-16 h-16 bg-[#4F3C1C] rounded-2xl flex items-center justify-center text-[#FEA42A] mb-10 group-hover:rotate-6 transition-transform">
                <Building size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#4F3C1C] uppercase italic tracking-tighter mb-4">
                Corporate Liaison Office
              </h3>
              <p className="text-[#4F3C1C]/40 text-xs font-black uppercase tracking-widest mb-8 italic">
                Addis Ababa, Ethiopia
              </p>
              <div className="space-y-6 flex-grow">
                <div className="border-l-2 border-[#FEA42A] pl-6 py-2">
                  <p className="text-[#4F3C1C] text-lg font-bold leading-relaxed italic">
                    Kazanchis Garad Building<br />
                    In front of ECA, 10th Floor<br />
                    Room no 10/02
                  </p>
                </div>
                <p className="text-[#4F3C1C]/60 text-sm font-medium italic">
                  (Administrative Coordination, Stakeholder Engagement & Strategic Partnerships)
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-[#4F3C1C]/10 flex flex-col gap-4">
                {/* PRIMARY CORPORATE EMAIL */}
                <a
                  href="mailto:info@birnihigofarms.com"
                  className="flex items-center gap-4 text-[#4F3C1C] font-black uppercase text-[10px] hover:text-[#FEA42A] transition-colors"
                >
                  <Mail size={16} /> info@birnihigofarms.com
                </a>
                {/* INVESTOR SPECIFIC EMAIL */}
                <a
                  href="mailto:investors@birnihigofarms.com"
                  className="flex items-center gap-4 text-[#4F3C1C] font-black uppercase text-[10px] hover:text-[#FEA42A] transition-colors"
                >
                  <Landmark size={16} /> investors@birnihigofarms.com
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* AWASH OPERATIONS SITE */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#4F3C1C] rounded-[3rem] p-10 md:p-16 shadow-2xl text-[#EFE7DC] h-full flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Factory size={200} />
              </div>
              <div className="w-16 h-16 bg-[#FEA42A] rounded-2xl flex items-center justify-center text-[#4F3C1C] mb-10 group-hover:-rotate-6 transition-transform">
                <Factory size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
                Operations Site
              </h3>
              <p className="text-[#FEA42A] text-[10px] font-black uppercase tracking-widest mb-8 italic">
                Afar Region, Ethiopia
              </p>
              <div className="space-y-6 flex-grow">
                <div className="border-l-2 border-[#FEA42A] pl-6 py-2">
                  <p className="text-[#EFE7DC] text-lg font-bold leading-relaxed italic">
                    Awash Sebat Hub<br />
                    42-Hectare Bio-Secured<br />
                    Industrial Complex
                  </p>
                </div>
                <p className="text-[#EFE7DC]/40 text-sm font-medium italic">
                  (Hatchery, Feed Mill, Broiler Farms & Processing Plant)
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4">
                 <a
                  href="mailto:partners@birnihigofarms.com"
                  className="flex items-center gap-4 text-[#FEA42A] font-black uppercase text-[10px] hover:text-white transition-colors"
                >
                  <Globe2 size={16} /> partners@birnihigofarms.com
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. PARTNERSHIP TRACK SELECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <AnimatedSection>
                <h2 className="text-5xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-8">
                  Initiate <br />
                  <span className="text-[#FEA42A]">Dialogue.</span>
                </h2>
                <div className="space-y-4">
                  {contactTracks.map((track) => (
                    <button
                      key={track.id}
                      onClick={() => setActiveTrack(track.id)}
                      className={`w-full p-8 rounded-[2rem] flex items-center gap-6 transition-all border ${
                        activeTrack === track.id
                          ? "bg-[#4F3C1C] text-[#FEA42A] border-[#4F3C1C] shadow-2xl scale-[1.02]"
                          : "bg-[#EFE7DC]/30 text-[#4F3C1C]/50 border-transparent hover:border-[#4F3C1C]/20"
                      }`}
                    >
                      <track.icon size={24} />
                      <div className="text-left">
                        <p className="text-sm font-black uppercase tracking-tighter">{track.id}</p>
                        <p className={`text-[10px] italic font-bold ${activeTrack === track.id ? "text-[#FEA42A]/60" : "text-[#4F3C1C]/40"}`}>
                          {track.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-7">
              <AnimatedSection delay={0.3}>
                <div className="bg-[#EFE7DC] rounded-[3.5rem] p-10 md:p-16 border border-[#4F3C1C]/5">
                  <form className="space-y-8">
                    {/* FORM FIELDS REMAIN SAME - FUNCTIONALITY UNCHANGED */}
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 ml-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white rounded-2xl p-5 outline-none border border-transparent focus:border-[#FEA42A] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 ml-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white rounded-2xl p-5 outline-none border border-transparent focus:border-[#FEA42A] transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 ml-2">
                        Official Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-white rounded-2xl p-5 outline-none border border-transparent focus:border-[#FEA42A] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#4F3C1C]/40 ml-2">
                        {activeTrack} Details
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-white rounded-2xl p-5 outline-none border border-transparent focus:border-[#FEA42A] transition-all resize-none"
                        placeholder={`Please describe your ${activeTrack.toLowerCase()} here...`}
                      />
                    </div>
                    <button 
                      type="button"
                      className="w-full py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-4"
                    >
                      Submit Official Request <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BIO-SECURITY WARNING / SITE VISIT */}
      <section className="py-24 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FEA42A] rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck size={200} />
            </div>
            <div className="shrink-0">
              <div className="w-24 h-24 bg-[#4F3C1C] rounded-3xl flex items-center justify-center text-[#FEA42A] shadow-xl">
                <ShieldCheck size={48} />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-[#4F3C1C] uppercase italic tracking-tighter mb-4">
                Technical Inspection
              </h3>
              <p className="text-[#4F3C1C]/70 text-lg font-bold italic leading-relaxed max-w-2xl">
                Site visits to our Awash Operations are strictly regulated due to international
                bio-security protocols. Technical inspections for partners and investors must be
                scheduled 14 days in advance.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:partners@birnihigofarms.com"
                  className="inline-flex items-center gap-3 font-black uppercase text-[10px] text-[#4F3C1C] border-b-2 border-[#4F3C1C] pb-1 hover:opacity-60 transition-opacity"
                >
                  Schedule Technical Tour <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
