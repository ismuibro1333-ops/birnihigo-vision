import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Calendar, User, Tag, Search, ChevronRight } from "lucide-react";

const categories = ["All", "Industry Trends", "Sustainability", "Community", "Innovation"];

const blogPosts = [
  {
    id: 1,
    category: "Innovation",
    title: "100% Circular: Transforming Waste into Renewable Energy",
    excerpt: "How Birnihigo is converting 100% of organic solid and liquid waste into high-grade fertilizer and biogas to power our facilities.",
    author: "Daniel Kebede",
    date: "March 28, 2026",
    image: "/blog-waste.jpg",
    featured: true
  },
  {
    id: 2,
    category: "Community",
    title: "Empowering 1,000+ Smallholder Farmers through CBF",
    excerpt: "Our Contract Broiler Farming model is redefining rural economics in the Afar region, focusing on youth and women empowerment.",
    author: "Sara Mengistu",
    date: "March 15, 2026",
    image: "/blog-farmers.jpg",
    featured: false
  },
  {
    id: 3,
    category: "Industry Trends",
    title: "The Science of Biosecurity: More than just a Protocol",
    excerpt: "Why we treat biosecurity as a strategic pillar rather than an operational necessity to ensure national food sovereignty.",
    author: "Dr. Ismael T.",
    date: "Feb 10, 2026",
    image: "/blog-science.jpg",
    featured: false
  },
  {
    id: 4,
    category: "Sustainability",
    title: "Bridging the Protein Gap in East Africa",
    excerpt: "Analyzing the 120M+ population demand and how integrated poultry systems provide the most efficient solution.",
    author: "Birnihigo Team",
    date: "Jan 22, 2026",
    image: "/blog-protein.jpg",
    featured: false
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <Layout>
      {/* 1. EDITORIAL HERO */}
      <section className="pt-32 pb-20 bg-[#EFE7DC] border-b border-[#4F3C1C]/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#CD8C24] text-xs uppercase tracking-[0.5em] mb-6 font-black text-center">Birnihigo Journal</p>
            <h1 className="font-display text-6xl md:text-9xl text-[#4F3C1C] font-black tracking-tighter text-center italic mb-16 leading-none">
              Insights <span className="text-[#FEA42A]">&</span> Vision.
            </h1>
          </AnimatedSection>

          {/* FEATURED POST */}
          {featuredPost && (
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-[4rem] overflow-hidden bg-[#4F3C1C] group cursor-pointer shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                      alt="Featured" 
                    />
                  </div>
                  <div className="p-12 md:p-20 flex flex-col justify-center">
                    <span className="bg-[#FEA42A] text-[#4F3C1C] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest self-start mb-6">
                      Featured Insight
                    </span>
                    <h2 className="text-[#EFE7DC] text-4xl md:text-5xl font-black italic tracking-tighter mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#EFE7DC]/60 text-lg mb-10 font-medium line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-[#FEA42A] font-black uppercase tracking-widest text-xs">
                      Read Article <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="sticky top-20 z-30 bg-[#EFE7DC]/80 backdrop-blur-md py-6 border-b border-[#4F3C1C]/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? "bg-[#4F3C1C] text-[#FEA42A]" 
                  : "bg-white/50 text-[#4F3C1C] hover:bg-[#FEA42A]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4F3C1C]/30" size={16} />
            <input 
              type="text" 
              placeholder="Search insights..." 
              className="bg-white/50 border-none rounded-full pl-12 pr-6 py-3 text-sm focus:ring-2 focus:ring-[#FEA42A] w-64 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 3. BLOG GRID */}
      <section className="py-24 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.filter(p => !p.featured || activeCategory !== "All").map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-lg border-4 border-white/50">
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={post.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4F3C1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                       <button className="w-full py-4 bg-[#FEA42A] text-[#4F3C1C] font-black uppercase tracking-widest text-[10px] rounded-2xl">
                         Read Full Article
                       </button>
                    </div>
                  </div>
                  
                  <div className="px-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#CD8C24] font-black text-[10px] uppercase tracking-widest">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-[#4F3C1C]/20" />
                      <span className="text-[#4F3C1C]/40 font-bold text-[10px] uppercase tracking-widest">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#4F3C1C] italic tracking-tighter mb-4 leading-tight group-hover:text-[#CD8C24] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#4F3C1C]/60 font-medium line-clamp-2 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#4F3C1C]/10 flex items-center justify-center">
                        <User size={14} className="text-[#4F3C1C]" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#4F3C1C]">{post.author}</span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER - Industrial Gold */}
      <section className="py-32 bg-[#EFE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#4F3C1C] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/pattern-poultry.png')] bg-repeat" />
            
            <AnimatedSection className="relative z-10">
              <h2 className="text-[#FEA42A] text-5xl md:text-7xl font-black italic tracking-tighter mb-8 leading-none">
                Stay Informed.
              </h2>
              <p className="text-[#EFE7DC]/60 text-xl max-w-xl mx-auto font-medium mb-12">
                Receive monthly updates on poultry innovation, sustainability metrics, and regional market trends.
              </p>
              
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-[#EFE7DC] placeholder:text-[#EFE7DC]/30 focus:ring-2 focus:ring-[#FEA42A] outline-none"
                />
                <button className="px-10 py-4 bg-[#FEA42A] text-[#4F3C1C] font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
