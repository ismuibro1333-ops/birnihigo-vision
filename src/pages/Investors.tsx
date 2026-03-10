import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { TrendingUp, Shield, Layers, BarChart3, ArrowRight } from "lucide-react";
import { useState } from "react";

const advantages = [
  { icon: Layers, title: "Full Vertical Integration", desc: "From seed to shelf — feed production, hatchery, processing, and distribution under one roof eliminates margin leakage." },
  { icon: Shield, title: "Bio-secure Infrastructure", desc: "42-hectare HACCP-certified facility with international biosecurity protocols ensures product integrity." },
  { icon: TrendingUp, title: "Massive Market Gap", desc: "Ethiopia imports over $50M in poultry annually. Birnihigo is positioned to capture domestic demand." },
  { icon: BarChart3, title: "Proven Unit Economics", desc: "48 tons daily capacity with controlled input costs delivers strong, predictable margins." },
];

const keyFigures = [
  { label: "Population", value: "120M+", note: "Second largest in Africa" },
  { label: "Per Capita Consumption", value: "0.5 kg", note: "vs. 15 kg global average" },
  { label: "Annual Import Bill", value: "$50M+", note: "Growing 12% year-over-year" },
  { label: "Birnihigo Capacity", value: "17,500 MT/yr", note: "~29% of national production" },
];

const Investors = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary" aria-labelledby="investors-hero">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.3em] mb-4 font-body">Investor Relations</p>
            <h1 id="investors-hero" className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">The Growth Opportunity</h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed max-w-2xl mx-auto">
              A vertically integrated poultry enterprise positioned at the intersection of food security and profitable growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment Rationale - Card Layout */}
      <section className="section-padding" aria-labelledby="rationale-heading">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Why Birnihigo</p>
            <h2 id="rationale-heading" className="font-display text-3xl md:text-4xl text-foreground">The Vertical Integration Advantage</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <article className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0" aria-hidden="true">
                      <a.icon size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-3">{a.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-body">{a.desc}</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Cards */}
      <section className="section-padding bg-muted/50" aria-labelledby="market-heading">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Market Positioning</p>
            <h2 id="market-heading" className="font-display text-3xl md:text-4xl text-foreground">Ethiopia's Poultry Demand</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFigures.map((fig, i) => (
              <AnimatedSection key={fig.label} delay={i * 0.1}>
                <article className="bg-card border border-border rounded-2xl p-6 text-center h-full">
                  <span className="font-display text-3xl text-primary block mb-2">{fig.value}</span>
                  <p className="text-sm font-body font-medium text-foreground mb-1">{fig.label}</p>
                  <p className="text-xs text-muted-foreground font-body">{fig.note}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Market share bar */}
          <AnimatedSection className="mt-10">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-body text-muted-foreground">National Production</span>
                <span className="text-sm font-body text-foreground font-medium">~60,000 MT/yr</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} aria-label="Birnihigo market share">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: "29%" }} />
              </div>
              <p className="text-xs text-muted-foreground font-body mt-3">Birnihigo represents ~29% of current national production capacity.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Prospectus Form */}
      <section className="section-padding" aria-labelledby="prospectus-heading">
        <div className="max-w-xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 id="prospectus-heading" className="font-display text-3xl text-foreground mb-3">Request Investment Prospectus</h2>
            <p className="text-sm text-muted-foreground font-body">Confidential information for qualified investors.</p>
          </AnimatedSection>

          <AnimatedSection>
            {submitted ? (
              <div className="bg-accent rounded-2xl p-10 text-center" role="alert">
                <h3 className="font-display text-xl text-foreground mb-2">Thank You</h3>
                <p className="text-sm text-muted-foreground font-body">Our investor relations team will contact you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Investment prospectus request form">
                <div>
                  <label htmlFor="inv-name" className="sr-only">Full Name</label>
                  <input id="inv-name" type="text" required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="inv-email" className="sr-only">Email Address</label>
                  <input id="inv-email" type="email" required placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="inv-org" className="sr-only">Organization</label>
                  <input id="inv-org" type="text" placeholder="Organization" value={form.org} onChange={e => setForm({...form, org: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="inv-msg" className="sr-only">Message</label>
                  <textarea id="inv-msg" placeholder="Message (optional)" rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
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
