import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Users, Recycle, Leaf, Sprout, Droplets, TreePine, Heart } from "lucide-react";

const metrics = [
  { value: "42ha", label: "Bio-secure Facility" },
  { value: "2,000ha", label: "Feed Cultivation" },
  { value: "60%", label: "Women & Youth Participants" },
  { value: "100%", label: "Manure Recycled" },
];

const esgCards = [
  {
    category: "Environmental",
    icon: TreePine,
    items: [
      { label: "Manure Recycled", value: "100%", desc: "All poultry waste converted to organic fertilizer" },
      { label: "Feed Self-Sufficiency Target", value: "80%+", desc: "Locally sourced grain from owned and partner farms" },
      { label: "Carbon Reduction Target", value: "-25%", desc: "Per kg footprint reduction by 2028" },
    ],
  },
  {
    category: "Social",
    icon: Heart,
    items: [
      { label: "Contract Farmers", value: "2,000+", desc: "Target within 2 years through CBF program" },
      { label: "Women & Youth-led", value: "50%+", desc: "Of supported farms are female/youth-led" },
      { label: "Jobs Created", value: "500+", desc: "Direct employment across operations" },
    ],
  },
  {
    category: "Governance",
    icon: Shield,
    items: [
      { label: "HACCP Certified", value: "✓", desc: "International food safety standards" },
      { label: "ISO 22000", value: "✓", desc: "Food safety management system" },
      { label: "Halal Compliant", value: "✓", desc: "Renewed certification for regional export" },
    ],
  },
];

const sustainabilityGoals = [
  { objective: "Farmers onboarded into CBF", target: "2,000+" },
  { objective: "Local feed self-sufficiency", target: "80%+" },
  { objective: "Carbon footprint per kg reduced", target: "-25%" },
  { objective: "Female/youth-led farms supported", target: "50%+" },
  { objective: "National poultry consumption increase", target: "+1.5% per 2 years" },
];

const circularSteps = [
  { icon: Sprout, title: "1. Cultivate", desc: "Maize & soybean grown on 2,000 hectares of company and partner farmland." },
  { icon: Droplets, title: "2. Process Feed", desc: "Grains processed into optimized poultry feed at on-site mills." },
  { icon: Shield, title: "3. Raise & Process", desc: "Bio-secure poultry raising and HACCP-certified processing." },
  { icon: Recycle, title: "4. Regenerate", desc: "Poultry manure converted to organic fertilizer, returning nutrients to the soil." },
];

const Sustainability = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-card border-b border-border" aria-labelledby="sustainability-hero">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Sustainability & ESG</p>
          <h1 id="sustainability-hero" className="font-display text-4xl md:text-5xl text-foreground mb-6">Rooted in Responsibility</h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
            At Birnihigo, sustainability is more than a commitment—it is our operating principle. Just like the hoopoe that symbolizes our brand, we thrive in harmony with the land and community.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Metrics Bar */}
    <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
      <div className="glass rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 gold-glow">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
            <span className="font-display text-2xl text-accent">{m.value}</span>
            <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-1 font-body">{m.label}</span>
          </AnimatedSection>
        ))}
      </div>
    </div>

    {/* ESG Cards */}
    <section className="section-padding" aria-labelledby="esg-heading">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">ESG Performance</p>
          <h2 id="esg-heading" className="font-display text-3xl md:text-4xl text-foreground">Measured Impact</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {esgCards.map((card, i) => (
            <AnimatedSection key={card.category} delay={i * 0.15}>
              <article className="bg-card border border-border rounded-2xl overflow-hidden h-full hover:border-primary/30 transition-colors">
                <div className="bg-primary px-6 py-4 flex items-center gap-3">
                  <card.icon size={20} className="text-primary-foreground" aria-hidden="true" />
                  <h3 className="font-display text-lg text-primary-foreground">{card.category}</h3>
                </div>
                <div className="p-6 space-y-5">
                  {card.items.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="font-display text-lg text-accent bg-accent/10 rounded-lg px-3 py-1 shrink-0">
                        {item.value}
                      </span>
                      <div>
                        <p className="text-sm font-body font-medium text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground font-body">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Land Stewardship */}
    <section id="land" className="section-padding bg-card/50" aria-labelledby="land-heading">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Land Stewardship</p>
          <h2 id="land-heading" className="font-display text-3xl md:text-4xl text-foreground mb-6">Bio-secure. Sustainable. Scalable.</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Our 42-hectare bio-secure production facility at Awash Sebat represents the gold standard in Ethiopian poultry infrastructure. Designed with international biosecurity protocols, it houses hatcheries, broiler houses, processing plants, and quality labs.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            An additional 2,000 hectares of farmland in the Afar and Amhara regions are dedicated to cultivating maize and soybean — the primary ingredients in our feed production. Energy-efficient systems, water reuse strategies, and future plans for solar integration form part of our sustainable growth roadmap.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center">
            <Shield size={48} className="text-primary mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-display text-xl text-foreground mb-2">International Standards</h3>
            <p className="text-sm text-muted-foreground font-body">HACCP Certified · ISO 22000 · Halal Compliant</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Community Empowerment */}
    <section id="empowerment" className="section-padding" aria-labelledby="empowerment-heading">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Community Empowerment</p>
          <h2 id="empowerment-heading" className="font-display text-3xl md:text-4xl text-foreground">Broiler Contract Farming Program</h2>
          <p className="text-muted-foreground text-base font-body mt-4 max-w-2xl mx-auto">
            Our CBF program targets 1,500–2,000 farmers with priority for women and youth, promoting income generation, skills development, and reducing rural-to-urban migration.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "2,000 Partners", desc: "Smallholder farmers integrated into our supply chain with guaranteed offtake agreements, fair pricing, and comprehensive vet support." },
            { icon: Leaf, title: "Women & Youth", desc: "60% of contract farming participants are women and youth — building inclusive growth and creating meaningful rural employment." },
            { icon: Shield, title: "Training & Support", desc: "Day-old chicks, quality feed, veterinary extension support, ongoing training, and income-generating independence." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <article className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6" aria-hidden="true">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* 3-Year Goals */}
    <section className="section-padding bg-card/50" aria-labelledby="goals-heading">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Roadmap</p>
          <h2 id="goals-heading" className="font-display text-3xl md:text-4xl text-foreground">3-Year Sustainability Goals (2025–2028)</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 bg-primary px-6 py-3">
              <span className="text-sm font-body font-semibold text-primary-foreground">Objective</span>
              <span className="text-sm font-body font-semibold text-primary-foreground text-right">Target</span>
            </div>
            {sustainabilityGoals.map((goal, i) => (
              <div key={goal.objective} className={`grid grid-cols-2 px-6 py-4 ${i < sustainabilityGoals.length - 1 ? 'border-b border-border' : ''}`}>
                <span className="text-sm text-foreground font-body">{goal.objective}</span>
                <span className="text-sm text-accent font-body font-semibold text-right">{goal.target}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Circular Economy */}
    <section id="circular" className="section-padding" aria-labelledby="circular-heading">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Circular Economy</p>
          <h2 id="circular-heading" className="font-display text-3xl md:text-4xl text-foreground">Nothing Goes to Waste</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {circularSteps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <article className="flex items-start gap-6 bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                  <step.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-muted-foreground text-sm font-body">
            Aligned with UN SDGs 2, 8, 12, 13. Open to ESG partnerships, green financing, and climate-smart agriculture collaborations.
          </p>
          <a href="mailto:sustainability@birnihigo.com" className="inline-flex items-center gap-2 text-accent font-body font-medium mt-4 hover:underline">
            sustainability@birnihigo.com
          </a>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Sustainability;
