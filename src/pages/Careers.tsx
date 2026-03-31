import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  MapPin, Clock, ArrowRight, Calendar, User, 
  Briefcase, GraduationCap, Heart, Globe, Lightbulb, ChevronRight 
} from "lucide-react";

const jobs = [
  { title: "Farm Supervisor", location: "Awash Sebat", type: "Full-time", dept: "Operations" },
  { title: "Poultry Veterinarian", location: "Awash Sebat", type: "Full-time", dept: "Veterinary" },
  { title: "Feed Mill Technician", location: "Awash Sebat", type: "Full-time", dept: "Feed Production" },
  { title: "Community Liaison (CBF Lead)", location: "Regional Zones", type: "Full-time", dept: "Development" },
];

const Careers = () => {
  const [tab, setTab] = useState("jobs");

  return (
    <Layout>
      {/* 1. EDITORIAL HERO */}
      <section className="relative pt-32 pb-20 bg-[#4F3C1C] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/team-working.jpg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-[#FEA42A] text-xs uppercase tracking-[0.5em] mb-8 font-black">Careers & Insights</p>
            <h1 className="font-display text-6xl md:text-8xl text-[#EFE7DC] font-black tracking-tighter italic leading-none mb-8">
              Cultivating <br/> <span className="text-[#FEA42A]">Future Leaders.</span>
            </h1>
            <p className="text-[#EFE7DC]/60 text-xl max-w-2xl font-medium leading-relaxed border-l-2 border-[#FEA42A] pl-8">
              Building Industry Talent through Poultry Research & Academic Partnerships. Join a mission-driven team redefining food sovereignty.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. CORE VALUES - Glassmorphism Bar */}
      <section className="py-12 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Globe, label: "Social Impact" },
              { icon: Heart, label: "Values Driven" },
              { icon: GraduationCap, label: "Mentorship" },
              { icon: Briefcase, label: "Field Growth" },
              { icon: Lightbulb, label: "Innovation" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center p-6 bg-white/40 backdrop-blur-md rounded-3xl border border-[#CD8C24]/10 hover:bg-[#4F3C1C] hover:text-[#FEA42A] transition-all group">
                  <item.icon size={24} className="mb-3 text-[#CD8C24] group-hover:text-[#FEA42A]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-center">{item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE INTERACTIVE HUB */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-5xl mx-auto px-6">
          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4 mb-20">
            {["jobs", "news", "articles"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  tab === t ? "bg-[#4F3C1C] text-[#FEA42A] shadow-2xl" : "bg-white/50 text-[#4F3C1C] hover:bg-[#4F3C1C]/5"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* TAB: JOBS - Industrial List Style */}
          {tab === "jobs" && (
            <div className="space-y-6">
              {jobs.map((job, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group bg-white rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#CD8C24]/10 hover:border-[#FEA42A] transition-all">
                    <div>
                      <span className="text-[#FEA42A] text-[10px] font-black uppercase tracking-[0.2em]">{job.dept}</span>
                      <h3 className="text-2xl font-black text-[#4F3C1C] mt-2 mb-4">{job.title}</h3>
                      <div className="flex gap-6 text-[#4F3C1C]/50 font-bold text-xs uppercase tracking-widest">
                        <span className="flex items-center gap-2"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <a href="mailto:careers@birnihigofarms.com" className="w-full md:w-auto px-10 py-5 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#FEA42A] hover:text-[#4F3C1C] transition-all flex items-center justify-center gap-3">
                      Apply Now <ChevronRight size={16} />
                    </a>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* TAB: NEWS - Magazine Grid */}
          {tab === "news" && (
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "CBF Program Expands to 1,000 Farmers", date: "MAY 2025", desc: "Our Broiler Contract Farming initiative has reached 1,000 active farmers, prioritizing women and youth." },
                { title: "Halal Certification Renewed", date: "MAR 2025", desc: "Birnihigo’s facility re-certified for Halal compliance, securing regional export paths." }
              ].map((item, i) => (
                <AnimatedSection key={i}>
                  <div className="p-10 bg-[#4F3C1C] rounded-[3rem] text-[#EFE7DC] h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[#FEA42A] font-black text-[10px] tracking-widest mb-6 block">{item.date}</span>
                      <h3 className="text-3xl font-black italic tracking-tighter mb-6">{item.title}</h3>
                      <p className="opacity-60 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                    <button className="mt-10 text-[#FEA42A] font-black text-xs uppercase tracking-widest flex items-center gap-2">
                      Read Report <ArrowRight size={16} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* TAB: ARTICLES - Clean Editorial List */}
          {tab === "articles" && (
            <div className="space-y-4">
              {[
                "Raising Poultry with Purpose",
                "Meet the Farmers: CBF Impact",
                "Sustainability: Our Circular System"
              ].map((title, i) => (
                <AnimatedSection key={i}>
                  <div className="py-8 border-b border-[#4F3C1C]/10 flex items-center justify-between group cursor-pointer">
                    <h3 className="text-xl font-black text-[#4F3C1C] group-hover:text-[#CD8C24] transition-colors uppercase italic">{title}</h3>
                    <div className="w-12 h-12 rounded-full border border-[#4F3C1C]/10 flex items-center justify-center group-hover:bg-[#4F3C1C] group-hover:text-[#FEA42A] transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. CBF ACTION - High Impact Gold Card */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FEA42A] rounded-[4rem] p-12 md:p-24 text-[#4F3C1C] relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
               <Briefcase size={300} />
            </div>
            
            <div className="max-w-3xl relative z-10">
              <p className="font-black uppercase tracking-[0.4em] text-xs mb-8">Outgrower Opportunity</p>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-10 leading-none">
                Become a Contract <br/> Broiler Farmer.
              </h2>
              <p className="text-xl font-bold mb-12 opacity-80 leading-relaxed">
                We provide the chicks, the feed, and the veterinary science. You provide the growth. Join Ethiopia's most structured poultry network.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="mailto:cbf@birnihigo.com" className="px-12 py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl text-center">
                  Apply for CBF Program
                </a>
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest border-l-2 border-[#4F3C1C]/20 pl-6">
                  Priority: Afar, Amhara, Oromia
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
