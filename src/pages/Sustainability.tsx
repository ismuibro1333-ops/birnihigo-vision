import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Users, Recycle, Leaf, ArrowDown, Sprout, Droplets } from "lucide-react";

const metrics = [
  { value: "42ha", label: "Bio-secure Facility" },
  { value: "2,000ha", label: "Feed Cultivation" },
  { value: "60%", label: "Women Participants" },
  { value: "100%", label: "Manure Recycled" },
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
    <section className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.3em] mb-4 font-body">Sustainability & ESG</p>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">The Impact We Make</h1>
          <p className="text-primary-foreground/70 text-lg font-body leading-relaxed max-w-2xl mx-auto">
            Environmental stewardship, social empowerment, and governance excellence are at the core of everything we do.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Metrics */}
    <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
      <div className="glass rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
            <span className="font-display text-2xl text-primary">{m.value}</span>
            <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-1 font-body">{m.label}</span>
          </AnimatedSection>
        ))}
      </div>
    </div>

    {/* Land Stewardship */}
    <section id="land" className="section-padding">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Land Stewardship</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Bio-secure. Sustainable. Scalable.</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Our 42-hectare bio-secure production facility at Awash Sebat represents the gold standard in Ethiopian poultry infrastructure. Designed with international biosecurity protocols, it houses hatcheries, broiler houses, processing plants, and quality labs.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            An additional 2,000 hectares of farmland in the Afar and Amhara regions are dedicated to cultivating maize and soybean — the primary ingredients in our feed production, ensuring full supply chain control.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="bg-accent rounded-2xl p-10 text-center">
            <Shield size={48} className="text-accent-foreground mx-auto mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">International Standards</h3>
            <p className="text-sm text-muted-foreground font-body">HACCP Certified · ISO 22000 · Halal Compliant</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Empowerment */}
    <section id="empowerment" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Community Empowerment</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Contract Farming Program</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "2,000 Partners", desc: "Smallholder farmers integrated into our supply chain with guaranteed offtake agreements." },
            { icon: Leaf, title: "Women & Youth", desc: "60% of contract farming participants are women and youth, building inclusive growth." },
            { icon: Shield, title: "Training & Support", desc: "Comprehensive agricultural training, veterinary support, and access to quality inputs." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Circular Economy */}
    <section id="circular" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Circular Economy</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Nothing Goes to Waste</h2>
        </AnimatedSection>

        <div className="space-y-6">
          {circularSteps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="flex items-start gap-6 bg-card border border-border rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <step.icon size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                </div>
              </div>
              {i < circularSteps.length - 1 && (
                <div className="flex justify-center">
                  <ArrowDown size={20} className="text-primary/30" />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Sustainability;
