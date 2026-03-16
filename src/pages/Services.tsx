import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Truck, Building2, Plane, Hotel, UtensilsCrossed, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Truck,
    title: "Cold-Chain Supply Management",
    desc: "End-to-end refrigerated logistics ensuring product integrity from our HACCP-certified processing plant to your door. Our dedicated fleet maintains -18°C to 4°C across the entire distribution chain.",
    features: ["Temperature-monitored transport", "GPS fleet tracking", "Same-day delivery in Addis Ababa"],
  },
  {
    icon: Hotel,
    title: "Hotel & Hospitality Supply",
    desc: "Dedicated B2B supply partnerships with Ethiopia's leading hotels, resorts, and catering companies. Custom cuts, bulk pricing, and scheduled delivery to meet the demands of high-volume kitchens.",
    features: ["Custom portioning", "Scheduled weekly deliveries", "Dedicated account manager"],
  },
  {
    icon: Plane,
    title: "Airline Catering Supply",
    desc: "Aviation-grade poultry supply meeting international food safety standards for in-flight catering operations. Consistent quality and on-time delivery for tight airline schedules.",
    features: ["Aviation food safety compliant", "Vacuum-sealed packaging", "24-hour advance ordering"],
  },
  {
    icon: Building2,
    title: "Institutional & Retail",
    desc: "Scalable supply solutions for supermarkets, restaurants, and institutional buyers. From whole birds to value-added products — flexible volumes with consistent quality year-round.",
    features: ["Flexible volume contracts", "Branded & white-label options", "Quality guarantee"],
  },
];

const partnerships = [
  { icon: Handshake, title: "Contract Farming Partners", desc: "Join our growing network of contract broiler farmers (targeting 1,500–2,000). We provide day-old chicks, feed, veterinary support, and guaranteed buyback." },
  { icon: UtensilsCrossed, title: "Export Partnerships", desc: "Halal-certified, export-ready operations targeting Djibouti, Somalia, and GCC markets. Strategic proximity and compliant processing." },
];

const Services = () => (
  <Layout>
    <section className="section-padding bg-card border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Our Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">End-to-End Supply Solutions</h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
            From cold-chain logistics to dedicated B2B partnerships — we deliver premium poultry products to Ethiopia's hospitality, retail, and export markets.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Service Cards */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((svc, i) => (
          <AnimatedSection key={svc.title} delay={i * 0.1}>
            <article className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <svc.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body mb-5">{svc.desc}</p>
              <ul className="space-y-2">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Partnerships */}
    <section className="section-padding bg-card/50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Partnerships</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Grow With Us</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerships.map((p, i) => (
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
        <AnimatedSection className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:brightness-110 transition-all gold-glow"
          >
            Inquire About Services <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Services;
