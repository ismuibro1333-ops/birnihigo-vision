import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

type BlogCategory = "all" | "farmer-stories" | "ag-tech" | "market-trends";

const posts = [
  {
    title: "How Contract Farming is Changing Lives in Amhara",
    excerpt: "Meet Almaz, a single mother of three who joined our CBF program and now earns a sustainable income raising broilers with full company support.",
    category: "farmer-stories" as const,
    date: "Feb 28, 2025",
    author: "Sara Mengistu",
    readTime: "5 min read",
  },
  {
    title: "Cobb 500 Genetics: Why We Chose the World's Best Broiler",
    excerpt: "Our Chief Operations Officer explains the science behind selecting Cobb 500 genetics and how it delivers superior feed conversion and growth rates in Ethiopian conditions.",
    category: "ag-tech" as const,
    date: "Jan 15, 2025",
    author: "Daniel Kebede",
    readTime: "7 min read",
  },
  {
    title: "Ethiopia's $50M Poultry Import Gap: An Opportunity",
    excerpt: "With per capita consumption at just 0.5 kg versus the 15 kg global average, Ethiopia's protein deficit represents one of Africa's largest market opportunities.",
    category: "market-trends" as const,
    date: "Dec 10, 2024",
    author: "Meron Alem",
    readTime: "6 min read",
  },
  {
    title: "From Waste to Wealth: Our Circular Agriculture Model",
    excerpt: "How we convert 100% of poultry waste into premium organic fertilizer, enriching the soil that grows the feed that nourishes our birds.",
    category: "ag-tech" as const,
    date: "Nov 20, 2024",
    author: "Sara Mengistu",
    readTime: "4 min read",
  },
  {
    title: "Youth in Agriculture: Breaking the Urban Migration Cycle",
    excerpt: "Our partnership programs are proving that modern agriculture can offer competitive careers, keeping young talent in rural communities.",
    category: "farmer-stories" as const,
    date: "Oct 5, 2024",
    author: "Tadesse Birru",
    readTime: "5 min read",
  },
  {
    title: "Halal Export Markets: Positioning Ethiopia for GCC Demand",
    excerpt: "Strategic proximity to Djibouti and established Halal certification make Birnihigo uniquely positioned for Middle Eastern export markets.",
    category: "market-trends" as const,
    date: "Sep 18, 2024",
    author: "Meron Alem",
    readTime: "8 min read",
  },
];

const categories: { value: BlogCategory; label: string }[] = [
  { value: "all", label: "All Posts" },
  { value: "farmer-stories", label: "Farmer Stories" },
  { value: "ag-tech", label: "Ag-Tech Innovation" },
  { value: "market-trends", label: "Market Trends" },
];

const categoryColors: Record<string, string> = {
  "farmer-stories": "bg-primary/10 text-primary",
  "ag-tech": "bg-accent/10 text-accent",
  "market-trends": "bg-secondary/10 text-secondary",
};

const Blog = () => {
  const [active, setActive] = useState<BlogCategory>("all");
  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="section-padding bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">News & Insights</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">From the Field</h1>
            <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
              Stories from our farmers, insights on agricultural technology, and analysis of East Africa's poultry market.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-5 py-2 text-sm font-body font-medium rounded-full border transition-all ${
                  active === cat.value
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.title} delay={(i % 3) * 0.1}>
                <article className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-colors flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 text-xs font-body font-medium rounded-full ${categoryColors[post.category]}`}>
                      {categories.find((c) => c.value === post.category)?.label}
                    </span>
                    <span className="text-xs text-muted-foreground font-body">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-body pt-4 border-t border-border">
                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
