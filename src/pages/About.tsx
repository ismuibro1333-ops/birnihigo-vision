import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { Target, Eye, Heart, Users } from "lucide-react";

const timeline = [
  { year: "2018", title: "Foundation", desc: "Birnihigo Integrated Farms PLC established with a vision for vertically integrated poultry agribusiness." },
  { year: "2019", title: "Land Acquisition", desc: "Secured 2,000+ hectares in the Afar and Amhara regions for maize and soybean feed cultivation." },
  { year: "2021", title: "Facility Construction", desc: "Built the 42-hectare bio-secure production facility at Awash Sebat with international biosecurity protocols." },
  { year: "2023", title: "Full Operations", desc: "Achieved 48-ton daily processing capacity with HACCP certification and Halal compliance." },
  { year: "2025", title: "Community Impact", desc: "Onboarded 1,000+ contract farmers (60% women and youth) through the Broiler Contract Farming program." },
];

const leadership = [
  { name: "Ato Tadesse Birru", role: "Chairman & Founder", desc: "30+ years in Ethiopian agribusiness development." },
  { name: "W/ro Meron Alem", role: "Chief Executive Officer", desc: "Former VP at East Africa Foods; Harvard MBA." },
  { name: "Ato Daniel Kebede", role: "Chief Operations Officer", desc: "Expert in poultry science and biosecurity protocols." },
  { name: "W/ro Sara Mengistu", role: "Head of Sustainability", desc: "Environmental scientist; champion of circular agriculture." },
];

const pillars = [
  { icon: Target, title: "Mission", desc: "To nourish humanity with safe, clean, and affordable poultry meat—while empowering farmers, conserving nature, and creating economic opportunity from the farm to your plate." },
  { icon: Eye, title: "Vision", desc: "To lead Ethiopia's poultry sector through value chain integration that increases national per capita poultry consumption, enhances export readiness, and establishes grandparent stock within 5–7 years." },
  { icon: Heart, title: "Values", desc: "Integrity and transparency in food production. Responsible feeding and land stewardship. Uplifting local communities. Delivering affordable, clean poultry meat." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-card border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">The Heritage & Mission</h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
            Inspired by the hoopoe (Birnihigo), a bird renowned for its grace, intelligence, resilience, and connection to nature — Birnihigo Integrated Farms is more than a poultry operation. It is a bold, eco-centric agribusiness built on the values of nourishment, sustainability, and community empowerment.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Timeline */}
    <section id="heritage" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Our Journey</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Building the Future of Poultry</h2>
        </AnimatedSection>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.1}>
              <div className="flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="font-display text-sm text-accent">{item.year}</span>
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
    <section id="leadership" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Integrity & Stewardship</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person, i) => (
            <AnimatedSection key={person.name} delay={i * 0.1}>
              <MotionCard className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Users size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-base text-foreground mb-1">{person.name}</h3>
                <p className="text-xs text-accent font-body font-medium mb-3">{person.role}</p>
                <p className="text-xs text-muted-foreground font-body">{person.desc}</p>
              </MotionCard>
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
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-colors">
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
