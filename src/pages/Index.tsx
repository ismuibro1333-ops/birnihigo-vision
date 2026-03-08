import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import { Egg, Wheat, Factory, Truck, ArrowRight, Leaf, Recycle, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { value: "48T", label: "Daily Output" },
  { value: "2,000+", label: "Hectares" },
  { value: "2,000", label: "Smallholder Partners" },
];

const operations = [
  { icon: Egg, title: "Hatchery", desc: "State-of-the-art incubation with 99.2% hatch rates across multiple facilities." },
  { icon: Wheat, title: "Feed Production", desc: "Vertically integrated feed mills processing locally grown maize and soybean." },
  { icon: Factory, title: "Processing", desc: "HACCP-certified processing plants with 48-ton daily capacity." },
  { icon: Truck, title: "Distribution", desc: "Cold-chain logistics ensuring farm-to-table freshness within 24 hours." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Birnihigo Poultry aerial farm view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-primary-foreground/70 text-sm uppercase tracking-[0.3em] mb-4 font-body font-medium">Birnihigo Poultry PLC</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
            Where Integrity<br />Is Farmed
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Ethiopia's first fully integrated poultry ecosystem, producing 48 tons daily with a focus on sustainability and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-body font-medium rounded-lg hover:bg-primary-foreground/90 transition-colors">
              Our Story <ArrowRight size={16} />
            </Link>
            <Link to="/investors" className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/30 text-primary-foreground font-body font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors">
              Investor Relations
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Scale Bar */}
    <div className="sticky top-16 z-40">
      <div className="max-w-4xl mx-auto px-6 -mt-10">
        <div className="glass rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-around gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="text-center"
            >
              <span className="font-display text-2xl md:text-3xl text-primary">{s.value}</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-1 font-body">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Operations Grid */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Core Operations</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Vertically Integrated Excellence</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operations.map((op, i) => (
            <AnimatedSection key={op.title} delay={i * 0.1}>
              <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <op.icon size={24} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{op.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{op.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Sustainability Loop */}
    <section className="section-padding bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Sustainability</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">From Land to Table — And Back</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Sprout, title: "Cultivate", desc: "2,000 hectares of maize and soybean cultivated on company-owned and partner farms." },
            { icon: Recycle, title: "Process & Produce", desc: "Feed production, hatchery, and HACCP-certified processing under one ecosystem." },
            { icon: Leaf, title: "Regenerate", desc: "Poultry manure converted to organic fertilizer, enriching the soil for the next cycle." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center">
                  <item.icon size={28} className="text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block mt-6">
                    <ArrowRight size={20} className="mx-auto text-primary/40" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link to="/sustainability" className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline">
            Learn about our ESG commitment <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
