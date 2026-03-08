import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, Heart, Award, Users, ShieldCheck } from "lucide-react";

const timeline = [
  { year: "2018", title: "Foundation", desc: "Birnihigo Poultry PLC established with a vision for integrated agribusiness." },
  { year: "2019", title: "Land Acquisition", desc: "Secured 2,000+ hectares in the Afar and Amhara regions for feed cultivation." },
  { year: "2021", title: "Facility Construction", desc: "Built the 42-hectare bio-secure production facility at Awash Sebat." },
  { year: "2023", title: "Full Operations", desc: "Achieved 48-ton daily processing capacity with HACCP certification." },
  { year: "2025", title: "Community Impact", desc: "Onboarded 2,000 smallholder farmers through contract farming programs." },
];

const leadership = [
  { name: "Ato Tadesse Birru", role: "Chairman & Founder", desc: "30+ years in Ethiopian agribusiness development." },
  { name: "W/ro Meron Alem", role: "Chief Executive Officer", desc: "Former VP at East Africa Foods; Harvard MBA." },
  { name: "Ato Daniel Kebede", role: "Chief Operations Officer", desc: "Expert in poultry science and biosecurity protocols." },
  { name: "W/ro Sara Mengistu", role: "Head of Sustainability", desc: "Environmental scientist; champion of circular agriculture." },
];

const pillars = [
  { icon: Target, title: "Mission", desc: "To provide affordable, high-quality poultry products while empowering communities and preserving our environment." },
  { icon: Eye, title: "Vision", desc: "To become East Africa's most trusted integrated poultry enterprise, setting the standard for food security and sustainability." },
  { icon: Heart, title: "Values", desc: "Integrity, Stewardship, Innovation, Community — the four pillars that guide every decision we make." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.3em] mb-4 font-body">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">The Heritage & Mission</h1>
          <p className="text-primary-foreground/70 text-lg font-body leading-relaxed max-w-2xl mx-auto">
            Built on a foundation of integrity and stewardship, Birnihigo Poultry represents a new chapter in Ethiopian agriculture.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Timeline */}
    <section id="heritage" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Our Journey</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Undefeated Success</h2>
        </AnimatedSection>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.1}>
              <div className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="font-display text-sm text-accent-foreground">{item.year}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-12">
                  <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section id="leadership" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Integrity & Stewardship</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person, i) => (
            <AnimatedSection key={person.name} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                  <Users size={28} className="text-accent-foreground" />
                </div>
                <h3 className="font-display text-base text-foreground mb-1">{person.name}</h3>
                <p className="text-xs text-primary font-body font-medium mb-3">{person.role}</p>
                <p className="text-xs text-muted-foreground font-body">{person.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* 3 Pillars */}
    <section id="pillars" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <p.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
