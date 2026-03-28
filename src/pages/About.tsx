import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { Target, Eye, ShieldCheck, Microscope, Landmark } from "lucide-react";

const timeline = [
  { 
    year: "2013", 
    title: "Foundation", 
    desc: "Established as a day-old chick supplier. Introduced the contract farming model as a core pillar from inception." 
  },
  { 
    year: "2014", 
    title: "Transformation", 
    desc: "Rapid market demand leads to transition into a fully vertically integrated poultry system." 
  },
  { 
    year: "2015", 
    title: "Expansion & Trust", 
    desc: "Strong farmer adoption driven by quality chicks and reliable supply systems. Growth in broiler production capacity." 
  },
  { 
    year: "2019", 
    title: "Infrastructure Integration", 
    desc: "Secured 42+ hectares in Awash (Gabi Resu Zone). Established broiler breeding farms and science-based biosecurity." 
  },
  { 
    year: "2023", 
    title: "Market Readiness", 
    desc: "Development of 24-hectare processing facility. Focus on HACCP-aligned systems and Halal-certified standards." 
  },
  { 
    year: "2025", 
    title: "Crop Expansion", 
    desc: "Land acquisition for large-scale Maize and Soya plantation to secure internal feed supply and food sovereignty." 
  },
];

const pillars = [
  { 
    icon: Microscope, 
    title: "Science-Driven", 
    desc: "Biosecurity is not just a protocol—it is a science-driven system embedded in every operation, ensuring uncompromised quality." 
  },
  { 
    icon: Target, 
    title: "Integrated Excellence", 
    desc: "A fully integrated value chain—from breeding and hatchery to broiler production, processing, and market delivery." 
  },
  { 
    icon: Landmark, 
    title: "Farmer Empowerment", 
    desc: "Empowering local farmers through structured, market-linked contract farming systems that build resilient communities." 
  },
];

const About = () => (
  <Layout>
    {/* Hero Section */}
    <section className="section-padding bg-card border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Our Journey</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">Rooted in Science. Driven by Integration.</h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-3xl mx-auto italic">
            "Committed to nourishing nations through a resilient, science-driven, and export-ready poultry system."
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* About Content */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground text-md font-body leading-relaxed mb-8">
              Birnihigo Integrated Farms is a vertically integrated poultry company established in 2013. What began as a day-old chick supply operation has evolved into a fully integrated, bio-secure poultry value chain located in Awash-Afar, Gabi Resu Zone, across 42+ hectares.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.15}>
              <MotionCard className="p-8 h-full bg-card/40">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <p.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{p.desc}</p>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section id="heritage" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Visual Timeline</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Evolution of Excellence</h2>
        </AnimatedSection>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.1}>
              <div className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 ${item.year === '2025' ? 'bg-accent/20 border-accent' : 'bg-primary/10 border-primary/30'}`}>
                    <span className={`font-display text-sm ${item.year === '2025' ? 'text-accent font-bold' : 'text-primary'}`}>{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-12">
                  <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body max-w-xl">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Final Vision Quote */}
    <section className="section-padding text-center">
      <AnimatedSection>
        <div className="max-w-2xl mx-auto p-8 border border-border rounded-2xl bg-gradient-to-b from-card to-background">
          <h3 className="font-display text-2xl mb-4">Future Vision</h3>
          <p className="text-muted-foreground font-body">
            Advancing food sovereignty through integrated, science-based systems to provide affordable protein for a 120M+ population.
          </p>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
);

export default About;

