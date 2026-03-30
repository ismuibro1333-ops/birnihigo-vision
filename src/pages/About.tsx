import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { 
  Target, Eye, ShieldCheck, Microscope, Landmark, 
  Recycle, GraduationCap, Users, Award 
} from "lucide-react";

const timeline = [
  { 
    year: "2013", 
    title: "Foundation", 
    desc: "Birnihigo established as a day-old chick supplier. Contract farming introduced as a core pillar from inception." 
  },
  { 
    year: "2014", 
    title: "Transformation", 
    desc: "Transitioned to a vertically integrated system to meet rapid market demand for quality poultry." 
  },
  { 
    year: "2015–2018", 
    title: "Expansion & Trust", 
    desc: "Growth in broiler production and expansion of the contract farming network across local associations." 
  },
  { 
    year: "2019–2022", 
    title: "Infrastructure Integration", 
    desc: "Secured 42+ hectares in Awash (Gabi Resu Zone). Established 9ha broiler breeding farm and science-based biosecurity." 
  },
  { 
    year: "2023–2024", 
    title: "Processing & Standards", 
    desc: "Developed 24ha processing facility. Focused on HACCP-aligned systems and Halal-certified standards." 
  },
  { 
    year: "2025", 
    title: "National Food Sovereignty", 
    desc: "Acquisition of 2,000+ hectares for Maize and Soya plantation to secure 100% internal feed supply." 
  },
];

const pillars = [
  { 
    icon: ShieldCheck, 
    title: "Biosecurity Excellence", 
    desc: "Recognized not as an operational necessity, but as a strategic pillar ensuring long-term sustainability and trust." 
  },
  { 
    icon: Recycle, 
    title: "Circular Model", 
    desc: "A true circular waste-to-resource system transforming 100% of organic waste into fertilizer and renewable energy." 
  },
  { 
    icon: GraduationCap, 
    title: "Human Capital", 
    desc: "Building industry talent through dedicated poultry research and strategic academic partnerships." 
  },
];

const About = () => (
  <Layout>
    {/* Hero Section */}
    <section className="section-padding bg-card border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Corporate Identity</p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">Innovation. Integration. <br/> <span className="text-accent">Biosecurity.</span></h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-3xl mx-auto italic">
            "Driving national food sovereignty through integrated, science-based poultry systems that transform production into a reliable source of safe, affordable protein at scale."
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Narrative Section */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="prose prose-invert max-w-none">
            <h2 className="font-display text-3xl text-foreground mb-6">The Birnihigo Science</h2>
            <p className="text-muted-foreground text-md font-body leading-relaxed mb-8">
              Birnihigo Integrated Farms is a vertically integrated poultry company established in 2013. Located in Awash-Afar across 42+ hectares, we operate within a conceptually bio-secured environment. For us, biosecurity is not a protocol—it is a science-driven system embedded in every operation, built on scientific rigor and disciplined execution.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.15}>
              <MotionCard className="p-8 h-full bg-card/40 border-t-4 border-accent">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <p.icon size={26} className="text-accent" />
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
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Our Evolution</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">The Journey to Scale</h2>
        </AnimatedSection>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.1}>
              <div className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 ${item.year === '2025' ? 'bg-accent border-accent' : 'bg-primary/10 border-primary/30'}`}>
                    <span className={`font-display text-sm ${item.year === '2025' ? 'text-white font-bold' : 'text-primary'}`}>{item.year}</span>
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

    {/* Commitment & Vision Section */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <AnimatedSection>
          <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-2">
            <Award className="text-accent" /> Our Commitment
          </h3>
          <ul className="space-y-4 text-sm text-muted-foreground font-body">
            <li className="flex gap-2"><span>•</span> Delivering affordable, high-quality poultry protein.</li>
            <li className="flex gap-2"><span>•</span> Empowering farmers through structured contract farming.</li>
            <li className="flex gap-2"><span>•</span> Advancing toward Halal-certified, export-ready production.</li>
            <li className="flex gap-2"><span>•</span> Setting new standards through vertically integrated excellence.</li>
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="p-8 border border-border rounded-3xl bg-accent/5">
            <h3 className="font-display text-2xl text-foreground mb-4">Our Vision</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              To nourish nations through safe, affordable poultry protein by building a system defined by innovation, integration, and Biosecurity Excellence.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default About;
