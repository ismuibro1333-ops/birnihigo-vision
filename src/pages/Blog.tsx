import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Calendar, User, Search, BookOpen, TrendingUp, Sprout, Globe } from "lucide-react";

const insightCategories = [
  "All Insights", 
  "Sector Analysis", 
  "Food Security", 
  "Climate Resilience", 
  "Industry Transformation"
];

const insights = [
  {
    id: 1,
    category: "Industry Transformation",
    title: "Bridging Ethiopia’s Protein Gap: A Systems Integration Approach",
    excerpt: "Analyzing why fragmentation is the primary constraint to scale in Ethiopia's poultry value chain and how integrated models solve for efficiency.",
    author: "Milkias B.",
    date: "April 2026",
    image: "/insight-system.jpg",
    featured: true,
    readTime: "8 min read"
  },
  {
    id: 2,
    category: "Food Security",
    title: "National Food Sovereignty: The Role of Industrial Poultry",
    excerpt: "How localizing the entire value chain—from parent stock to processing—reduces import dependency and stabilizes market prices.",
    author: "Strategic Liaison Team",
    date: "March 2026",
    image: "/insight-security.jpg",
    featured: false,
    readTime: "6 min read"
  },
  {
    id: 3,
    category: "Climate Resilience",
    title: "100% Circular: Transforming Organic Waste into Bio-Fertilizer",
    excerpt: "Our technical roadmap for converting 100% of industrial poultry waste into high-grade fertilizer for 2,000Ha of sustainable cultivation.",
    author: "Operations Lead",
    date: "March 2026",
    image: "/insight-climate.jpg",
    featured: false,
    readTime: "5 min read"
  },
  {
    id: 4,
    category: "Sector Analysis",
    title: "The Economics of Outgrowing: Scaling via Contract Farming",
    excerpt: "Evaluating the impact of our 1,500+ target contract farmer model on rural youth employment and regional economic resilience.",
    author: "Economic Research Div.",
    date: "Feb 2026",
    image: "/insight-economics.jpg",
    featured: false,
    readTime: "7 min read"
  }
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredInsights = activeCategory === "All Insights" 
    ? insights 
    : insights.filter(item => item.category === activeCategory);

  const featured = insights.find(i => i.featured);

  return (
    <Layout>
      {/* 1. EDITORIAL HERO - THE JOURNAL VIBE */}
      <section className="pt-40 pb-20 bg-[#4F3C1C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-[#FEA42A] text-[10px] uppercase tracking-[0.6em] mb-8 font-black italic">Sector Intelligence & Policy</p>
            <h1 className="font-display text-6xl md:text-9xl text-[#EFE7DC] font-black tracking-tighter italic leading-[0.85] uppercase mb-12">
              Insights <br /> <span className="text-[#FEA42A]">& Strategy.</span>
            </h1>
          </AnimatedSection>

          {/* FEATURED INTELLIGENCE PIECE */}
          {featured && (
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-[3.5rem] overflow-hidden bg-[#EFE7DC] group cursor-pointer shadow-2xl mt-12 border border-white/10">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto overflow-hidden bg-[#2A2110]">
                    <img 
                      src={featured.image} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-70 grayscale hover:grayscale-0" 
                      alt="Featured Insight" 
                    />
                  </div>
                  <div className="p-10 md:p-20 flex flex-col justify-center bg-white">
                    <div className="flex items-center gap-4 mb-8">
                       <span className="bg-[#4F3C1C] text-[#FEA42A] px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
                        Featured Analysis
                       </span>
                       <span className="text-[#4F3C1C]/30 font-black text-[10px] uppercase tracking-widest italic">{featured.readTime}</span>
                    </div>
                    <h2 className="text-[#4F3C1C] text-3xl md:text-5xl font-black italic tracking-tighter mb-6 leading-tight uppercase">
                      {featured.title}
                    </h2>
                    <p className="text-[#4F3C1C]/60 text-lg mb-10 font-bold italic line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-[#4F3C1C] font-black uppercase tracking-widest text-[10px] border-b-2 border-[#FEA42A] self-start pb-1 group-hover:gap-6 transition-all">
                      Read Full Report <ArrowRight size={16} className="text-[#FEA42A]" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* 2. NAVIGATION & SEARCH */}
      <section className="sticky top-20 z-40 bg-white border-b border-[#4F3C1C]/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? "bg-[#4F3C1C] text-[#FEA42A] shadow-lg" 
                  : "bg-[#EFE7DC] text-[#4F3C1C]/60 hover:bg-[#4F3C1C]/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative group flex-grow md:flex-grow-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4F3C1C]/30 group-focus-within:text-[#FEA42A] transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search reports & data..." 
              className="bg-[#EFE7DC] border-none rounded-xl pl-12 pr-6 py-4 text-[10px] font-black uppercase tracking-widest focus:ring-2 focus:ring-[#FEA42A] w-full md:w-72 transition-all outline-none"
            />
          </div>
        </div>
      </section>

      {/* 3. INSIGHTS GRID */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {filteredInsights.filter(i => !i.featured || activeCategory !== "All Insights").map((item, idx) => (
              <AnimatedSection key={item.id} delay={idx * 0.1}>
                <article className="group bg-white rounded-[3rem] overflow-hidden border border-[#CD8C24]/10 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                      alt={item.title} 
                    />
                    <div className="absolute top-6 left-6">
                       <span className="bg-[#4F3C1C] text-[#FEA42A] px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-xl">
                          {item.category}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-6 text-[9px] font-black uppercase tracking-widest text-[#4F3C1C]/30 italic">
                      <span>{item.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[#FEA42A]" />
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#4F3C1C] uppercase italic tracking-tighter mb-6 leading-tight group-hover:text-[#CD8C24] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#4F3C1C]/60 font-bold italic text-sm line-clamp-3 mb-8">
                      {item.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-[#4F3C1C]/5">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#4F3C1C] flex items-center justify-center text-[#FEA42A] text-[10px] font-black italic">
                             {item.author[0]}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#4F3C1C] italic">{item.author}</span>
                       </div>
                       <button className="text-[#FEA42A] group-hover:translate-x-2 transition-transform">
                          <ArrowRight size={20} />
                       </button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTOR REPORT DOWNLOAD CTA */}
      <section className="py-24 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FEA42A] rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12">
               <TrendingUp size={300} />
            </div>
            
            <div className="max-w-2xl relative z-10 text-center lg:text-left">
              <p className="text-[#4F3C1C] font-black uppercase tracking-[0.4em] text-[10px] mb-8 italic">Annual Sector Outlook 2026</p>
              <h2 className="text-[#4F3C1C] text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-10 uppercase">
                The State of <br /> Ethiopian Poultry.
              </h2>
              <p className="text-xl font-bold italic text-[#4F3C1C]/80 leading-relaxed">
                Download our comprehensive whitepaper on protein supply chains, market deficit projections, and industrial scaling strategies for the East African region.
              </p>
            </div>

            <button className="relative z-10 px-12 py-6 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl flex items-center gap-4">
              Download Whitepaper <BookOpen size={20} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
