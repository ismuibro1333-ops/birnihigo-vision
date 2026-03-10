import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollytellingHero from "@/components/ScrollytellingHero";
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
    {/* Scrollytelling Hero */}
    <ScrollytellingHero />

    {/* Scale Bar */}
    <section aria-label="Key statistics" className="relative z-40">
      <div className="max-w-4xl mx-auto px-6 -mt-10">
        <div className="glass rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-around gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="text-center"
              role="figure"
              aria-label={`${s.value} ${s.label}`}
            >
              <span className="font-display text-2xl md:text-3xl text-primary">{s.value}</span>
              <span className="block text-xs text-muted-foreground uppercase tracking-wider mt-1 font-body">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Operations Grid */}
    <section className="section-padding" aria-labelledby="operations-heading">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Core Operations</p>
          <h2 id="operations-heading" className="font-display text-3xl md:text-4xl text-foreground">
            Vertically Integrated Excellence
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {operations.map((op, i) => (
            <AnimatedSection key={op.title} delay={i * 0.1}>
              <article className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true">
                  <op.icon size={24} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{op.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{op.desc}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Photo Gallery */}
    <section className="section-padding bg-muted/50" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Our Operations</p>
          <h2 id="gallery-heading" className="font-display text-3xl md:text-4xl text-foreground">On the Ground</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: pic1, alt: "Close-up of Birnihigo poultry operations" },
            { src: pic2, alt: "Community engagement and facility visit at Birnihigo" },
            { src: pic3, alt: "Modern poultry house interior with equipment" },
          ].map((img, i) => (
            <AnimatedSection key={img.alt} delay={i * 0.15}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Sustainability Loop */}
    <section className="section-padding bg-primary/5" aria-labelledby="sustainability-heading">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Sustainability</p>
          <h2 id="sustainability-heading" className="font-display text-3xl md:text-4xl text-foreground">
            From Land to Table — And Back
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Sprout, title: "Cultivate", desc: "2,000 hectares of maize and soybean cultivated on company-owned and partner farms." },
            { icon: Recycle, title: "Process & Produce", desc: "Feed production, hatchery, and HACCP-certified processing under one ecosystem." },
            { icon: Leaf, title: "Regenerate", desc: "Poultry manure converted to organic fertilizer, enriching the soil for the next cycle." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <article className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center" aria-hidden="true">
                  <item.icon size={28} className="text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block mt-6" aria-hidden="true">
                    <ArrowRight size={20} className="mx-auto text-primary/40" />
                  </div>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            to="/sustainability"
            className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline"
            aria-label="Learn about our ESG commitment"
          >
            Learn about our ESG commitment <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
