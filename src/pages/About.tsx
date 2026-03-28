import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { ShieldCheck, Microscope, Globe, Factory, Sprout, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Land Area", value: "42+ Hectares", icon: Globe },
  { label: "Established", value: "2013", icon: Landmark },
  { label: "Bio-Secure Zone", value: "Conceptually Controlled", icon: ShieldCheck },
  { label: "Market Target", value: "120M+ Population", icon: TrendingUp },
];

const About = () => (
  <Layout>
    {/* 1. HERO: The Vision Statement */}
    <section className="relative py-24 overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('/poultry-pattern.png')] bg-cover" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/30">
            Our Identity
          </span>
          <h1 className="font-display text-5xl md:text-7xl mb-8 leading-tight">
            Rooted in <span className="text-primary">Science.</span> <br />
            Driven by <span className="text-primary">Integration.</span>
          </h1>
          <p className="text-xl text-slate-300 font-body max-w-2xl mx-auto leading-relaxed">
            Building a resilient, science-driven, and export-ready poultry system to nourish nations.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* 2. THE STATS BAR: Immediate Professional Impact */}
    <section className="-mt-12 relative z-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <MotionCard key={stat.label} delay={i * 0.1} className="p-6 bg-card border-border shadow-xl text-center">
            <stat.icon className="mx-auto mb-3 text-primary" size={24} />
            <p className="text-2xl font-display text-foreground">{stat.value}</p>
            <p className="text-xs uppercase tracking-tighter text-muted-foreground">{stat.label}</p>
          </MotionCard>
        ))}
      </div>
    </section>

    {/* 3. THE PHILOSOPHY: Biosecurity as Science */}
    <section className="section-padding grid md:grid-cols-2 gap-16 items-center">
      <AnimatedSection className="relative">
        <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
           {/* Placeholder for a high-quality photo of the Afar facility */}
           <img src="/facility-view.jpg" alt="Afar Facility" className="object-cover h-full w-full" />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
           <Microscope size={40} className="text-white" />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-4xl mb-6">Biosecurity is not a protocol—it is a <span className="text-primary">Science.</span></h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Located in Awash-Afar, across 42+ hectares, Birnihigo operates within a conceptually bio-secured environment. 
          Our commitment reflects a belief that sustainable poultry production must be built on scientific rigor, 
          controlled systems, and disciplined execution.
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3 items-start text-sm">
            <ShieldCheck className="text-primary shrink-0" size={20} />
            <span>HACCP-aligned processing systems & Halal-certified standards.</span>
          </li>
          <li className="flex gap-3 items-start text-sm">
            <Factory className="text-primary shrink-0" size={20} />
            <span>Fully integrated value chain from hatchery to market delivery.</span>
          </li>
          <li className="flex gap-3 items-start text-sm">
            <Sprout className="text-primary shrink-0" size={20} />
            <span>2025 Expansion: Large-scale Maize and Soya plantation for feed sovereignty.</span>
          </li>
        </ul>
      </AnimatedSection>
    </section>

    {/* 4. THE CORE PILLARS: Corporate Focus */}
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border-l-4 border-primary bg-card shadow-sm">
            <h3 className="font-display text-xl mb-4 text-foreground uppercase tracking-wider">Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering affordable, high-quality protein through a farmer-inclusive model that empowers local communities.
            </p>
          </div>
          <div className="p-8 border-l-4 border-primary bg-card shadow-sm">
            <h3 className="font-display text-xl mb-4 text-foreground uppercase tracking-wider">Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transitioning from a day-old chick supplier to a fully vertically integrated system across the entire value chain.
            </p>
          </div>
          <div className="p-8 border-l-4 border-primary bg-card shadow-sm">
            <h3 className="font-display text-xl mb-4 text-foreground uppercase tracking-wider">Export-Ready</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing toward regional markets with uncompromised standards in poultry health and nutrition.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* 5. CALL TO ACTION */}
    <section className="section-padding text-center">
      <AnimatedSection>
        <h2 className="font-display text-3xl mb-8">Committed to Nourishing Nations.</h2>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all">
          Explore Our Value Chain
        </button>
      </AnimatedSection>
    </section>
  </Layout>
);

export default About;
