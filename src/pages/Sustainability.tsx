import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { Shield, Users, Recycle, Leaf, Sprout, Droplets, Zap, Heart, GraduationCap, Factory } from "lucide-react";

const metrics = [
  { value: "42ha", label: "Bio-secure Site" },
  { value: "2,000ha", label: "Maize & Soya Land" },
  { value: "32 Ton", label: "Daily Throughput" },
  { value: "100%", label: "Waste-to-Resource" },
];

const esgCards = [
  {
    category: "Environmental",
    icon: Leaf,
    items: [
      { label: "Circular Model", value: "100%", desc: "All organic solid & liquid waste transformed into value" },
      { label: "Renewable Energy", value: "Biogas", desc: "Energy generated from organic waste conversion" },
      { label: "Water Recovery", value: "Treated", desc: "Clean water returned to the production cycle" },
    ],
  },
  {
    category: "Social",
    icon: Users,
    items: [
      { label: "Human Capital", value: "Talent", desc: "Building industry talent through academic partnerships" },
      { label: "Empowerment", value: "Women", desc: "Focused training for women and youth in poultry" },
      { label: "Community", value: "Inclusive", desc: "1,500+ local associations supported via contract farming" },
    ],
  },
  {
    category: "Governance",
    icon: Shield,
    items: [
      { label: "HACCP Certified", value: "✓", desc: "International food safety & processing standards" },
      { label: "Biosecurity", value: "Excellence", desc: "Conceptually bio-secured environment as a strategic pillar" },
      { label: "Halal Certified", value: "✓", desc: "Ensuring standards for regional and export markets" },
    ],
  },
];

const circularSteps = [
  { icon: Sprout, title: "1. Soil & Feed", desc: "Cultivating maize and soybean on 2,000+ hectares to ensure internalized nutrition control." },
  { icon: Factory, title: "2. Precision Milling", desc: "Processing 6 tons per hour of high-nutrient feed in our integrated industrial mill." },
  { icon: Shield, title: "3. Science-Led Raising", desc: "Production within a conceptually bio-secured 42-hectare industrial ecosystem." },
  { icon: Recycle, title: "4. Resource Recovery", desc: "100% waste conversion into organic fertilizer, clean water, and biogas energy." },
];

const Sustainability = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-card border-b border-border" aria-labelledby="sustainability-hero">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Strategic Sustainability</p>
          <h1 id="sustainability-hero" className="font-display text-4xl md:text-5xl text-foreground mb-6">Vertical Integration. <br/> <span className="text-accent">Zero Waste.</span></h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-3xl mx-auto italic">
            "Sustainability is embedded in every stage. We transform 100% of organic waste into valuable outputs, driving national food sovereignty."
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Metrics Bar */}
    <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
      <div className="glass rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 gold-glow shadow-2xl">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
            <span className="font-display text-2xl text-accent font-black">{m.value}</span>
            <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mt-1 font-body font-bold">{m.label}</span>
          </AnimatedSection>
        ))}
      </div>
    </div>

    {/* The Circular Model Section */}
    <section className="section-padding bg-slate-950 text-white rounded-[3rem] mx-4 my-16 py-20">
       <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <Recycle size={48} className="text-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl mb-6 tracking-tighter">Circular <span className="text-accent">Waste-to-Resource</span> System</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our waste management system is built on a true circular model where no resource is wasted. We transform environmental challenges into industrial assets.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Sprout, title: "Organic Fertilizer", desc: "High-grade organic fertilizer used directly in our crop cultivation for feed sovereignty." },
            { icon: Droplets, title: "Clean Water", desc: "Advanced liquid waste treatment systems returning purified water to the cycle." },
            { icon: Zap, title: "Biogas Energy", desc: "Renewable energy generated from organic waste to power on-site operations." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.2} className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center hover:bg-accent/10 transition-colors">
              <item.icon className="mx-auto mb-4 text-accent" size={32} />
              <h4 className="font-display text-xl mb-2 text-white uppercase tracking-wider">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
       </div>
    </section>

    {/* ESG Performance Grid */}
    <section className="section-padding" aria-labelledby="esg-heading">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Impact Assessment</p>
          <h2 id="esg-heading" className="font-display text-3xl md:text-4xl text-foreground">Strategic ESG Pillars</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {esgCards.map((card, i) => (
            <AnimatedSection key={card.category} delay={i * 0.15}>
              <MotionCard className="overflow-hidden h-full border-t-4 border-accent">
                <div className="bg-card px-6 py-4 flex items-center gap-3 border-b border-border">
                  <card.icon size={20} className="text-accent" aria-hidden="true" />
                  <h3 className="font-display text-lg text-foreground uppercase tracking-widest">{card.category}</h3>
                </div>
                <div className="p-6 space-y-6">
                  {card.items.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="font-display text-sm text-accent bg-accent/10 rounded-lg px-2 py-1 shrink-0 font-bold">
                        {item.value}
                      </span>
                      <div>
                        <p className="text-sm font-body font-bold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground font-body leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Human Capital & Training */}
    <section className="section-padding bg-accent/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
            <GraduationCap size={32} className="text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-foreground tracking-tighter">Building Industry Talent</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 font-body">
            We are committed to human capital development through specialized poultry research and academic partnerships. By bridging the gap between theory and industrial practice, we empower the next generation of poultry experts in Ethiopia.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-bold text-foreground">
              <Shield size={18} className="text-accent" /> Empowering Women through focused contract training.
            </li>
            <li className="flex items-center gap-3 text-sm font-bold text-foreground">
              <Shield size={18} className="text-accent" /> Strategic academic research collaborations.
            </li>
          </ul>
        </AnimatedSection>
        <div className="relative">
          <div className="aspect-video bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl">
             <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-slate-500 font-bold uppercase tracking-widest text-xs">
                [Academic Partnership Visual]
             </div>
          </div>
        </div>
      </div>
    </section>

    {/* Circular Economy Flow */}
    <section id="circular" className="section-padding" aria-labelledby="circular-heading">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">The Value Chain</p>
          <h2 id="circular-heading" className="font-display text-3xl md:text-4xl text-foreground">Vertically Integrated Sustainability</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {circularSteps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <MotionCard className="flex items-start gap-6 p-8 h-full bg-card hover:border-accent transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0" aria-hidden="true">
                  <step.icon size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-2 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                </div>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Sustainability;
