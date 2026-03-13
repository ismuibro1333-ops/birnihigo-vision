import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, ArrowRight, Calendar, User, Briefcase, GraduationCap, Heart, Globe, Lightbulb } from "lucide-react";
import { useState } from "react";

const jobs = [
  { title: "Farm Supervisor", location: "Awash Sebat", type: "Full-time", dept: "Operations", deadline: "Open" },
  { title: "Poultry Veterinarian", location: "Awash Sebat", type: "Full-time", dept: "Veterinary", deadline: "Open" },
  { title: "Feed Mill Technician", location: "Awash Sebat", type: "Full-time", dept: "Feed Production", deadline: "Open" },
  { title: "Finance & Admin Officer", location: "Addis Ababa", type: "Full-time", dept: "Administration", deadline: "Open" },
  { title: "Community Liaison (CBF Lead)", location: "Regional Zones", type: "Full-time", dept: "Community Development", deadline: "Rolling" },
  { title: "Sustainability Analyst", location: "Awash Sebat", type: "Full-time", dept: "ESG", deadline: "Open" },
];

const whyWork = [
  { icon: Globe, text: "Make a social and environmental impact" },
  { icon: Heart, text: "Values-driven and transparent culture" },
  { icon: GraduationCap, text: "Career growth and mentorship" },
  { icon: Briefcase, text: "Field-based roles with direct farmer engagement" },
  { icon: Lightbulb, text: "Innovation-friendly and mission-aligned team" },
];

const newsItems = [
  { title: "CBF Program Expands to 1,000 Farmers", date: "May 2025", excerpt: "Our Broiler Contract Farming initiative has reached 1,000 active farmers, 60% of whom are women and youth. A major step in creating jobs and reducing rural-to-urban migration." },
  { title: "2,000 Hectares Secured for Maize & Soya", date: "April 2025", excerpt: "To boost feed self-sufficiency, we've secured farmland in Afar and Amhara for maize and soybean production, supporting our responsible feeding strategy." },
  { title: "Halal Certification Renewed", date: "March 2025", excerpt: "Birnihigo's poultry processing facility has been re-certified for Halal compliance, opening doors for expanded regional export to Djibouti and Somalia." },
];

const articles = [
  { title: "Raising Poultry with Purpose: What Makes Birnihigo Different", author: "Birnihigo Team", date: "Feb 2026" },
  { title: "Meet the Farmers: How CBF is Changing Lives in Rural Ethiopia", author: "Sara Mengistu", date: "Jan 2026" },
  { title: "Sustainability in Action: Birnihigo's Circular Farming System", author: "Daniel Kebede", date: "Dec 2025" },
  { title: "The Future of Poultry in East Africa: Trends & Opportunities", author: "Birnihigo Team", date: "Nov 2025" },
  { title: "Women in Agribusiness: Voices from the Field", author: "Sara Mengistu", date: "Oct 2025" },
];

const Careers = () => {
  const [tab, setTab] = useState<"jobs" | "news" | "articles">("jobs");

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Careers & Insights</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">Join Our Mission</h1>
            <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
              At Birnihigo, work is more than a job. It's a purpose. We are on a mission to nourish communities, protect the planet, and empower a new generation of agricultural leaders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-card/50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">Why Work with Us</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyWork.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors">
                  <item.icon size={24} className="text-primary mx-auto mb-3" />
                  <p className="text-xs text-muted-foreground font-body">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 mb-12 justify-center flex-wrap">
            {([
              { key: "jobs" as const, label: "Open Positions" },
              { key: "news" as const, label: "Latest News" },
              { key: "articles" as const, label: "Featured Articles" },
            ]).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-6 py-2.5 rounded-lg text-sm font-body font-medium transition-colors ${
                  tab === t.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "jobs" && (
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 0.05}>
                  <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-colors">
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground font-body">
                        <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full">{job.dept}</span>
                      </div>
                    </div>
                    <a
                      href="mailto:hr@birnihigo.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-body font-semibold rounded-lg hover:brightness-110 transition-all shrink-0"
                    >
                      Apply Now <ArrowRight size={14} />
                    </a>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection>
                <p className="text-center text-sm text-muted-foreground font-body mt-6">
                  To apply, email your CV and cover letter to: <a href="mailto:hr@birnihigo.com" className="text-accent hover:underline">hr@birnihigo.com</a>
                </p>
              </AnimatedSection>
            </div>
          )}

          {tab === "news" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-colors">
                    <span className="text-xs text-accent font-body font-semibold mb-3">{item.date}</span>
                    <h3 className="font-display text-lg text-foreground mb-3 flex-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{item.excerpt}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {tab === "articles" && (
            <div className="space-y-4">
              {articles.map((post, i) => (
                <AnimatedSection key={post.title} delay={i * 0.05}>
                  <div className="bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-colors">
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">{post.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
                        <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                        <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                      </div>
                    </div>
                    <button className="text-sm text-accent font-body font-medium inline-flex items-center gap-1 hover:underline shrink-0">
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CBF Section */}
      <section className="section-padding bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Contract Farming</p>
            <h2 className="font-display text-3xl text-foreground mb-4">Become a Contract Broiler Farmer</h2>
            <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              Our CBF program provides day-old chicks, quality feed, offtake guarantee with fair pricing, vet support, and ongoing training. Priority given to applicants in Afar, Amhara, Oromia, and surrounding zones.
            </p>
            <a
              href="mailto:cbf@birnihigo.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:brightness-110 transition-all gold-glow"
            >
              Apply for CBF Program <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
