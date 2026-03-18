import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { Wheat, Egg, Drumstick, ShieldCheck, Thermometer, Truck, ArrowRight } from "lucide-react";
import scrollChick from "@/assets/scroll-chick.jpg";
import scrollChicken from "@/assets/scroll-chicken.jpg";
import chickensCloseup from "@/assets/chickens-closeup.jpg";
import scrollProduct from "@/assets/scroll-product.jpg";
import logisticsCrates from "@/assets/logistics-crates.jpg";

const products = [
  {
    icon: Wheat,
    title: "Premium Animal Feed",
    desc: "Sustainable maize and soya-based high-quality feed produced on 2,000+ hectares of company-owned and partner farms. Our feed formulations are optimized for Cobb 500 genetics, ensuring maximum feed conversion ratio and bird health.",
    image: scrollChick,
    stats: ["2,000+ hectares cultivated", "Maize & soybean base", "Optimized FCR formulations"],
  },
  {
    icon: Egg,
    title: "Hatchery & Genetics",
    desc: "Bio-secure hatchery utilizing Cobb 500 genetics — the world's most efficient broiler breed. Our climate-controlled incubation facility ensures 85%+ hatch rates with strict biosecurity protocols at every stage.",
    image: scrollProduct,
    stats: ["Cobb 500 genetics", "85%+ hatch rate", "Bio-secure protocols"],
  },
  {
    icon: Drumstick,
    title: "Halal-Certified Poultry Meat",
    desc: "Industrial-scale, Halal-certified poultry processing with 48-ton daily capacity. HACCP-certified processing lines deliver whole birds, cuts, and value-added products to institutional and retail markets.",
    image: chickensCloseup,
    stats: ["48 tons/day capacity", "HACCP certified", "Halal compliant"],
  },
];

const standards = [
  { icon: ShieldCheck, title: "Zero-Contamination Protocols", desc: "Multi-layer biosecurity barriers, visitor decontamination, and automated sanitation systems prevent cross-contamination throughout the value chain." },
  { icon: Thermometer, title: "Climate-Controlled Environments", desc: "Precision temperature, humidity, and ventilation management across all production houses ensures optimal bird welfare and growth performance." },
  { icon: Truck, title: "Cold-Chain Logistics", desc: "Dedicated refrigerated transport fleet maintains product integrity from processing plant to customer, ensuring freshness and food safety compliance." },
];

const Products = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding bg-card border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Our Products</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">From Feed to Fork</h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
            A fully integrated product line — from sustainable feed production and world-class genetics to Halal-certified poultry meat delivered through climate-controlled supply chains.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Product Cards */}
    {products.map((product, i) => (
      <section key={product.title} className={`section-padding ${i % 2 === 1 ? "bg-card/50" : ""}`}>
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <AnimatedSection className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <product.icon size={28} className="text-primary" />
              </div>
              <h2 className="font-display text-3xl text-foreground mb-4">{product.title}</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">{product.desc}</p>
              <div className="flex flex-wrap gap-3">
                {product.stats.map((stat) => (
                  <span key={stat} className="px-4 py-2 bg-primary/10 text-primary text-sm font-body font-medium rounded-full border border-primary/20">
                    {stat}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    ))}

    {/* Logistics Image */}
    <section className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Delivery & Logistics</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Market-Ready Distribution</h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="rounded-2xl overflow-hidden border border-border aspect-[21/9]">
            <img src={logisticsCrates} alt="Poultry transport crates ready for distribution" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Standards */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-3 font-body font-semibold">Quality Assurance</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Uncompromising Standards</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <MotionCard className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Products;
