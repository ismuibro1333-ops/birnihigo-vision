import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  MapPin, Clock, ArrowRight, Briefcase, GraduationCap, 
  Globe, Lightbulb, ChevronRight, HardHat, Stethoscope, 
  Settings, Users2, ShieldCheck
} from "lucide-react";

const jobOpenings = [
  { title: "Industrial Operations Manager", location: "Awash Sebat", type: "Full-time", dept: "Operations" },
  { title: "Senior Poultry Veterinarian", location: "Awash Sebat", type: "Full-time", dept: "Veterinary" },
  { title: "Electromechanical Engineer", location: "Awash Sebat", type: "Full-time", dept: "Engineering" },
  { title: "Supply Chain Coordinator", location: "Addis Ababa", type: "Full-time", dept: "Administration" },
];

const careerAreas = [
  { icon: HardHat, label: "Production", desc: "Industrial-scale broiler & hatchery management." },
  { icon: Stethoscope, label: "Veterinary", desc: "Biosecurity excellence & clinical health standards." },
  { icon: Settings, label: "Engineering", desc: "Maintaining our 6 T/H mill & automated systems." },
  { icon: Users2, label: "Operations", desc: "Integrated value chain & logistics coordination." },
  { icon: ShieldCheck, label: "Administration", desc: "Strategic liaison & institutional partnerships." },
];

const Careers = () => {
  return (
    <Layout>
      {/* 1. STRATEGIC HERO */}
      <section className="relative pt-40 pb-24 bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/staff-1.jpg')] bg-cover bg-center opacity-10 grayscale" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-[#FEA42A] text-[10px] uppercase tracking-[0.6em] mb-8 font-black italic">Human Capital & Systems</p>
            <h1 className="font-display text-6xl md:text-9xl text-[#EFE7DC] font-black tracking-tighter italic leading-[0.85] uppercase mb-10">
              Let’s Work <br/> <span className="text-[#FEA42A]">With Purpose.</span>
            </h1>
            <div className="max-w-3xl border-l-4 border-[#FEA42A] pl-10">
              <p className="text-[#EFE7DC] text-xl md:text-2xl font-bold leading-relaxed italic opacity-80 mb-8">
                Join a company committed to transforming agriculture, building national capacity, and developing the next generation of industry leaders.
              </p>
              <div className="flex flex-wrap gap-6 text-[#FEA42A] text-[10px] font-black uppercase tracking-widest">
                <span>#NationalImpact</span>
                <span>#FoodSovereignty</span>
                <span>#IndustrialExcellence</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. FUNCTIONAL AREAS - THE SYSTEM PILLARS */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#4F3C1C] uppercase tracking-tighter italic mb-4">Areas of <span className="text-[#CD8C24]">Expertise.</span></h2>
            <p className="text-[#4F3C1C]/60 font-bold italic">Building a multi-disciplinary team to power a national system platform.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {careerAreas.map((area, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-full p-8 bg-white rounded-[2.5rem] border border-[#CD8C24]/10 hover:bg-[#4F3C1C] hover:text-[#EFE7DC] transition-all group shadow-xl">
                  <area.icon size={32} className="mb-6 text-[#CD8C24] group-hover:text-[#FEA42A] transition-colors" />
                  <h4 className="text-lg font-black uppercase tracking-tight mb-3 italic">{area.label}</h4>
                  <p className="text-xs font-bold opacity-50 leading-relaxed italic">{area.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN OPPORTUNITIES */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-5xl font-black text-[#4F3C1C] uppercase tracking-tighter italic">Current <span className="text-[#FEA42A]">Openings</span></h2>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job, i) => (
              <AnimatedSection key={i}>
                <div className="group bg-[#EFE7DC]/30 hover:bg-[#4F3C1C] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#4F3C1C]/5 transition-all duration-500">
                  <div className="text-center md:text-left">
                    <span className="text-[#CD8C24] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block group-hover:text-[#FEA42A]">{job.dept}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-[#4F3C1C] group-hover:text-[#EFE7DC] transition-colors italic tracking-tight">{job.title}</h3>
                    <div className="flex gap-6 justify-center md:justify-start mt-4 text-[#4F3C1C]/40 group-hover:text-[#EFE7DC]/40 font-black text-[10px] uppercase tracking-widest">
                      <span className="flex items-center gap-2"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-2"><Clock size={14} /> {job.type}</span>
                    </div>
                  </div>
                  <button className="w-full md:w-auto px-12 py-5 bg-[#4F3C1C] group-hover:bg-[#FEA42A] text-[#FEA42A] group-hover:text-[#4F3C1C] rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 shadow-xl">
                    Submit Credentials <ChevronRight size={16} />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-[#4F3C1C]/40 font-bold italic text-sm">Don't see your role? Send your CV to <span className="text-[#4F3C1C] border-b border-[#FEA42A]">careers@birnihigo.com</span></p>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC & CAPACITY BUILDING */}
      <section className="py-32 bg-[#4F3C1C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#EFE7DC] rounded-[4rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                  <GraduationCap size={60} className="text-[#CD8C24] mb-8" />
                  <h2 className="text-5xl md:text-7xl font-black text-[#4F3C1C] uppercase tracking-tighter italic leading-none mb-8">
                    Building <br/> National <span className="text-[#CD8C24]">Capacity.</span>
                  </h2>
                  <p className="text-[#4F3C1C]/70 text-lg font-bold italic leading-relaxed mb-10">
                    Through our academic R&D partnerships, we provide specialized training and research opportunities to develop Ethiopia's next generation of poultry scientists and industrial engineers.
                  </p>
                  <div className="flex items-center gap-6">
                     <div className="h-[2px] w-12 bg-[#CD8C24]" />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4F3C1C]">R&D Collaboration</span>
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-video bg-[#4F3C1C] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-2">
                     <img src="/src/assets/people.jpg" alt="National Capacity" className="w-full h-full object-cover opacity-60" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
