import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { TrendingUp, Shield, Layers, BarChart3, ArrowRight, Globe, Users, Briefcase } from "lucide-react";
import { useState } from "react";

const advantages = [
  { icon: Layers, title: "Full Vertical Integration", desc: "We manage the full poultry value chain—from hatchery, feed, and broiler rearing to meat processing and distribution. This ensures quality control, scalability, and cost-efficiency." },
  { icon: Shield, title: "Bio-secure Infrastructure", desc: "42-hectare HACCP-certified facility with international biosecurity protocols ensures product integrity." },
  { icon: TrendingUp, title: "Growing Demand", desc: "Ethiopia and the region are witnessing rapid population growth and urbanization. Demand for clean, affordable protein is outpacing supply." },
  { icon: Globe, title: "Export-Ready", desc: "Halal-certified production and proximity to Djibouti, Somalia, and GCC countries provide a strategic export advantage." },
  { icon: Users, title: "Social Impact", desc: "Our Broiler Contract Farming (CBF) model engages women and youth, ensuring inclusive development while expanding capacity at scale." },
  { icon: BarChart3, title: "Proven Unit Economics", desc: "48 tons daily capacity with controlled input costs delivers strong, predictable margins." },
];

const keyFigures = [
  { label: "Population", value: "120M+", note: "Second largest in Africa" },
  { label: "Per Capita Consumption", value: "0.5 kg", note: "vs. 15 kg global average" },
  { label: "Annual Import Bill", value: "$50M+", note: "Growing 12% year-over-year" },
  { label: "Birnihigo Capacity", value: "17,500 MT/yr", note: "~29% of national production" },
];

const businessHighlights = [
  "42 hectares of secured, bio-secure sites",
  "48 tons/day poultry meat processing capacity",
  "Targeting 1,500–2,000 contract farmers within 2 years",
  "2,000+ hectares secured for maize & soybean cultivation",
  "Active plans to establish grandparent stock (GP) unit",
  "Focused on raising per capita poultry meat consumption nationally",
];

const investmentFocus = [
  { icon: Briefcase, label: "Equity or growth capital" },
  { icon: Layers, label: "Infrastructure and equipment financing" },
  { icon: TrendingUp, label: "Feed mill and GP unit investment" },
  { icon: Globe, label: "Export partnerships and international distribution" },
];

const Investors = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Investment Inquiry] From ${form.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\n\n${form.message}`
    );
    window.location.href = `mailto:invest@birnihigo.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-card border-b border-border" aria-labelledby="investors-hero">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Investor Relations</p>
            <h1 id="investors-hero" className="font-display text-4xl md:text-5xl text-foreground mb-6">Unlocking Value Across the Poultry Chain</h1>
            <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
              We are building Ethiopia's first fully vertically integrated poultry ecosystem—from hatchery to processing and market distribution—while empowering communities and ensuring food security.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section-padding" aria-labelledby="rationale-heading">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Why Birnihigo</p>
            <h2 id="rationale-heading" className="font-display text-3xl md:text-4xl text-foreground">The Investment Advantage</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <article className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6" aria-hidden="true">
                    <a.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-3">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{a.desc}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Highlights */}
      <section className="section-padding bg-card/50" aria-labelledby="highlights-heading">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <AnimatedSection>
              <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Business Highlights</p>
              <h2 id="highlights-heading" className="font-display text-3xl md:text-4xl text-foreground mb-8">Operational Scale</h2>
              <ul className="space-y-4">
                {businessHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-muted-foreground font-body">{h}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection delay={0.2}>
              <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Strategic Focus</p>
              <h3 className="font-display text-2xl text-foreground mb-8">We Welcome Partners In</h3>
              <div className="space-y-4">
                {investmentFocus.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <span className="text-foreground font-body">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="section-padding" aria-labelledby="market-heading">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Market Positioning</p>
            <h2 id="market-heading" className="font-display text-3xl md:text-4xl text-foreground">Ethiopia's Poultry Demand</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFigures.map((fig, i) => (
              <AnimatedSection key={fig.label} delay={i * 0.1}>
                <article className="bg-card border border-border rounded-2xl p-6 text-center h-full hover:border-primary/30 transition-colors">
                  <span className="font-display text-3xl text-accent block mb-2">{fig.value}</span>
                  <p className="text-sm font-body font-medium text-foreground mb-1">{fig.label}</p>
                  <p className="text-xs text-muted-foreground font-body">{fig.note}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-body text-muted-foreground">National Production</span>
                <span className="text-sm font-body text-foreground font-medium">~60,000 MT/yr</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100}>
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: "29%" }} />
              </div>
              <p className="text-xs text-muted-foreground font-body mt-3">Birnihigo represents ~29% of current national production capacity.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Prospectus Form */}
      <section className="section-padding bg-card/50" aria-labelledby="prospectus-heading">
        <div className="max-w-xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 id="prospectus-heading" className="font-display text-3xl text-foreground mb-3">Request Investment Prospectus</h2>
            <p className="text-sm text-muted-foreground font-body">Confidential information for qualified investors. Contact: invest@birnihigo.com</p>
          </AnimatedSection>

          <AnimatedSection>
            {submitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center">
                <h3 className="font-display text-xl text-foreground mb-2">Thank You</h3>
                <p className="text-sm text-muted-foreground font-body">Your email client should have opened. Our investor relations team will contact you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="email" required placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="text" placeholder="Organization" value={form.org} onChange={e => setForm({...form, org: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <textarea placeholder="Message (optional)" rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                <button type="submit" className="w-full py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 gold-glow">
                  Request Prospectus <ArrowRight size={16} />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
