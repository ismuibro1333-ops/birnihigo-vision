import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import ScrollytellingHero from "@/components/ScrollytellingHero";
import ValueChain from "@/components/ValueChain";
import OperationalDashboard from "@/components/OperationalDashboard";
import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import { Leaf, Recycle, Sprout, ArrowRight, Shield, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => (
  <Layout>
    {/* Scrollytelling Hero */}
    <ScrollytellingHero />

    {/* Value Chain - IMPORTANT: Go to ValueChain.tsx to move Breeding to the first spot! */}
    <ValueChain />

    {/* Operational Dashboard */}
    <OperationalDashboard />

    {/* Photo Gallery */}
    <section className="section-padding" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">On the Ground</p>
          <h2 id="gallery-heading" className="font-display text-3xl md:text-4xl text-foreground">Our Operations in Action</h2>
        </AnimatedSection>

        {/* Added items-center for Milkias's alignment fix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {[
            { src: pic1, alt: "Birnihigo farm aerial view with poultry houses and landscape" },
            { src: pic2, alt: "Chicks feeding at automated feeder inside Birnihigo facility" },
            { src: pic3, alt: "Community empowerment training session at Birnihigo" },
          ].map((img, i) => (
            <AnimatedSection key={img.alt} delay={i * 0.15}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-border">
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

    {/* Sustainability Loop - Updated with Breeding Farm & Farm to Fork logic */}
    <section className="section-padding bg-card/50" aria-labelledby="sustainability-heading">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Sustainability</p>
          <h2 id="sustainability-heading" className="font-display text-3xl md:text-4xl text-foreground">
            From Land to Table — And Back
          </h2>
        </AnimatedSection>

        {/* Added items-center for perfect vertical balance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {[
            { 
              icon: Sprout, 
              title: "Breeding & Cultivate", 
              desc: "The journey begins at our Breeding Farm, supported by 2,000 hectares of maize and soybean cultivation." 
            },
            { 
              icon: Recycle, 
              title: "Day-Old Chicks & Feed", 
              desc: "Eco-feed production and bio-secure hatchery operations producing premium Day-Old Chicks (DOCs)." 
            },
            { 
              icon: Leaf, 
              title: "From Farm to Fork", 
              desc: "HACCP-certified processing and Halal-certified distribution of premium poultry meat." 
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <article className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center" aria-hidden="true">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block mt-6" aria-hidden="true">
                    <ArrowRight size={20} className="mx-auto text-accent/30" />
                  </div>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            to="/sustainability"
            className="inline-flex items-center gap-2 text-accent font-body font-medium hover:underline"
          >
            Learn about our ESG commitment <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    {/* Investor & Export Portal - Updated with 1,500+ associations stat */}
    <section className="section-padding" aria-labelledby="investor-portal-heading">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Investor & Export Portal</p>
          <h2 id="investor-portal-heading" className="font-display text-3xl md:text-4xl text-foreground">
            Unlocking Value Across the Chain
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {[
            {
              icon: TrendingUp,
              title: "Massive Market Gap",
              desc: "Ethiopia imports over $50M in poultry annually. Birnihigo is closing this gap through vertical integration from breeding to retail.",
            },
            {
              icon: Globe,
              title: "Export-Ready",
              desc: "Halal-certified production and strategic location provide a gateway to Djibouti, Somalia, and GCC countries.",
            },
            {
              icon: Shield,
              title: "ESG Aligned",
              desc: "Empowering 1,500+ local associations. 100% circular waste-to-fertilizer and 60% women & youth participation.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <MotionCard className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6" aria-hidden="true">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            to="/investors"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:brightness-110 transition-all gold-glow"
          >
            View Investor Relations <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;

