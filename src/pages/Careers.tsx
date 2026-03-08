import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";

const jobs = [
  { title: "Poultry Production Manager", location: "Awash Sebat", type: "Full-time", dept: "Operations" },
  { title: "Feed Quality Analyst", location: "Awash Sebat", type: "Full-time", dept: "Quality Assurance" },
  { title: "Contract Farming Coordinator", location: "Amhara Region", type: "Full-time", dept: "Community Development" },
  { title: "Supply Chain Specialist", location: "Addis Ababa", type: "Full-time", dept: "Logistics" },
  { title: "Sustainability Analyst", location: "Awash Sebat", type: "Full-time", dept: "ESG" },
  { title: "Marketing & Communications Lead", location: "Addis Ababa", type: "Full-time", dept: "Marketing" },
];

const posts = [
  { title: "How Vertical Integration Is Transforming Ethiopian Poultry", date: "Feb 2026", author: "Birnihigo Team", excerpt: "A deep dive into how controlling every stage of the value chain delivers quality and affordability." },
  { title: "Empowering Women Through Contract Farming", date: "Jan 2026", author: "Sara Mengistu", excerpt: "60% of our contract farming partners are women. Here's how we're building inclusive agricultural systems." },
  { title: "The Circular Economy of Poultry: From Manure to Maize", date: "Dec 2025", author: "Daniel Kebede", excerpt: "Our zero-waste approach turns poultry byproducts into organic fertilizer for the next crop cycle." },
];

const Careers = () => {
  const [tab, setTab] = useState<"jobs" | "blog">("jobs");

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.3em] mb-4 font-body">Careers & Insights</p>
            <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">Join the Community</h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed max-w-2xl mx-auto">
              Build your career at the forefront of Ethiopia's agricultural transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 mb-12 justify-center">
            {(["jobs", "blog"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-lg text-sm font-body font-medium transition-colors ${
                  tab === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "jobs" ? "Open Positions" : "Insights Hub"}
              </button>
            ))}
          </div>

          {tab === "jobs" ? (
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 0.05}>
                  <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-colors">
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-body">
                        <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                        <span className="px-2 py-0.5 bg-accent rounded-full text-accent-foreground">{job.dept}</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-body font-medium rounded-lg hover:bg-primary/90 transition-colors shrink-0">
                      Apply Now <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimatedSection key={post.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-body mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                      <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-3 flex-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mb-4">{post.excerpt}</p>
                    <button className="text-sm text-primary font-body font-medium inline-flex items-center gap-1 hover:underline">
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
