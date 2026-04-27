import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import { Wheat, Egg, Drumstick, ShieldCheck, Thermometer, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import scrollChick from "@/assets/scroll-chick.jpg";
import scrollChicken from "@/assets/scroll-chicken.jpg";
import chickensCloseup from "@/assets/chickens-closeup.jpg";
import scrollProduct from "@/assets/scroll-product.jpg";
import logisticsCrates from "@/assets/logistics-crates.jpg";

const products = [
  {
    icon: Wheat,
    title: "Premium Animal Feed",
    desc: "Sustainable maize and soya-based high-quality feed produced on 2,000+ hectares of company-owned and partner farms. Optimized for Cobb 500 genetics, ensuring maximum feed conversion and bird health.",
    image: scrollChick,
    stats: ["2,000+ Hectares", "Maize & Soybean", "FCR Optimized"],
  },
  {
    icon: Egg,
    title: "Hatchery & Genetics",
    desc: "Bio-secure hatchery utilizing Cobb 500 genetics — the world's most efficient broiler breed. Our climate-controlled incubation facility ensures industry-leading hatch rates with strict biosecurity at every stage.",
    image: scrollChicken,
    stats: ["Cobb 500", "85%+ Hatch Rate", "Bio-secure"],
  },
  {
    icon: Drumstick,
    title: "Halal-Certified Poultry Meat",
    desc: "Industrial-scale, Halal-certified poultry processing with 48-ton daily capacity. HACCP-certified processing lines deliver whole birds, cuts, and value-added products to institutional and retail markets.",
    image: chickensCloseup,
    stats: ["48 Tons/Day", "HACCP", "Halal Compliant"],
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
    <section className="pt-40 pb-24 bg-[#4F3C1C] border-b border-[#CD8C24]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-[#FEA42A] text-xs uppercase tracking-[0.6em] mb-6 font-black italic">
            Integrated Product Line
          </p>
          <h1 className="text-5xl md:text-9xl text-[#EFE7DC] font-black tracking-tighter italic leading-[0.85] uppercase mb-8">
            From Feed <br /> to <span className="text-[#FEA42A]">Fork.</span>
          </h1>
          <p className="text-[#EFE7DC]/60 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            A fully integrated product portfolio — from sustainable feed to world-class genetics and Halal-certified poultry meat.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Product Sections */}
    {products.map((product, i) => (
      <section key={product.title} className={`py-24 ${i % 2 === 1 ? "bg-[#EFE7DC]/30" : "bg-[#EFE7DC]"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-[4/3]">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="w-16 h-16 rounded-2xl bg-[#4F3C1C] flex items-center justify-center mb-8 shadow-xl">
                <product.icon size={30} className="text-[#FEA42A]" />
              </div>
              <h2 className="text-4xl md:text-5xl text-[#4F3C1C] font-black mb-6 italic tracking-tighter leading-tight">
                {product.title}
              </h2>
              <p className="text-[#4F3C1C]/70 font-medium leading-relaxed mb-8 text-lg">
                {product.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {product.stats.map((stat) => (
                  <span
                    key={stat}
                    className="px-5 py-2 bg-[#4F3C1C] text-[#FEA42A] text-[10px] font-black uppercase tracking-widest rounded-full"
                  >
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
    <section className="py-20 bg-[#4F3C1C]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="text-[#FEA42A] text-xs uppercase tracking-[0.4em] mb-3 font-bold italic">
            Delivery & Logistics
          </p>
          <h2 className="text-3xl md:text-5xl text-[#EFE7DC] font-black tracking-tighter italic">
            Market-Ready Distribution
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="rounded-3xl overflow-hidden border-4 border-white/10 aspect-[21/9]">
            <img src={logisticsCrates} alt="Poultry transport crates" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Standards */}
    <section className="py-24 bg-[#EFE7DC]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#CD8C24] text-xs uppercase tracking-[0.4em] mb-3 font-black italic">
            Quality Assurance
          </p>
          <h2 className="text-4xl md:text-5xl text-[#4F3C1C] font-black tracking-tighter italic">
            Uncompromising Standards
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <MotionCard className="p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#FEA42A] flex items-center justify-center mb-8 shadow-lg">
                  <item.icon size={26} className="text-[#4F3C1C]" />
                </div>
                <h3 className="text-2xl text-[#4F3C1C] font-black mb-4 italic tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4F3C1C]/70 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </MotionCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="bg-[#FEA42A] rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl text-[#4F3C1C] font-black uppercase tracking-tighter italic mb-8 leading-tight">
              Ready to source <br /> from a fully integrated farm?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#4F3C1C] text-[#FEA42A] rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl"
            >
              Talk to Sales <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Products;
