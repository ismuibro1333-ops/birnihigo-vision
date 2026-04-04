import { useRef } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, useInView } from "framer-motion";
import { Truck, Building2, Plane, Hotel, UtensilsCrossed, Handshake, ArrowRight, ChevronRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Truck,
    title: "Cold-Chain Logistics",
    desc: "End-to-end refrigerated systems ensuring product integrity from our HACCP-certified plant to your door. Maintaining -18°C across the distribution chain.",
    features: ["GPS Fleet Tracking", "Same-Day Delivery"],
    size: "lg" 
  },
  {
    icon: Hotel,
    title: "Hospitality Supply",
    desc: "B2B supply partnerships with Ethiopia's leading hotels and resorts. Custom cuts and scheduled high-volume delivery.",
    features: ["Custom Portioning", "Dedicated Accounts"],
    size: "sm"
  },
  {
    icon: Plane,
    title: "Aviation Catering",
    desc: "Aviation-grade poultry meeting international safety standards for in-flight operations. Consistent, vacuum-sealed quality.",
    features: ["HACCP Compliant", "24-Hour Lead Time"],
    size: "sm"
  },
  {
    icon: Building2,
    title: "Retail Solutions",
    desc: "Scalable supply for supermarkets and institutions. Flexible volumes with consistent year-round availability.",
    features: ["Branded Options", "Quality Guarantee"],
    size: "lg"
  },
];

const Services = () => (
  <Layout>
    {/* 1. HERO SECTION - DARK INDUSTRIAL IMPACT */}
    <section className="pt-40 pb-24 bg-[#4F3C1C] border-b border-[#CD8C24]/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Globe size={600} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-[#FEA42A] text-xs uppercase tracking-[0.6em] mb-6 font-black italic">
            Strategic Distribution
          </p>
          <h1 className="font-display text-6xl md:text-9xl text-[#EFE7DC] font-black tracking-tighter italic leading-[0.85] uppercase mb-8">
            End-to-End <br /> <span className="text-[#FEA42A]">Solutions.</span>
          </h1>
          <p className="text-[#EFE7DC]/60 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            From bio-secure cultivation to climate-controlled logistics, we deliver premium poultry products to Africa's hospitality, retail, and aviation sectors.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* 2. BENTO SERVICE GRID */}
    <section className="py-32 bg-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* 3. PARTNERSHIP CALL-TO-ACTION - THE "SEXY" CARD */}
    <section className="py-32 bg-[#4F3C1C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#FEA42A] rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          {/* Abstract background element */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4F3C1C]/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-[#4F3C1C] italic tracking-tighter uppercase leading-none mb-6">
              Grow with <br /> the Leader.
            </h2>
            <p className="text-[#4F3C1C]/80 font-bold text-lg leading-relaxed">
              Join 1,500+ contract farmers in our integrated ecosystem. We provide the genetics, the feed, and the guaranteed market.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              to="/contact"
              className="group flex items-center justify-center w-48 h-48 rounded-full bg-[#4F3C1C] text-[#FEA42A] font-black uppercase tracking-widest text-xs hover:scale-110 transition-all duration-500 shadow-2xl"
            >
              <div className="flex flex-col items-center gap-2">
                <span>Inquire</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

const ServiceCard = ({ svc, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLarge = svc.size === "lg";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group bg-white border border-[#CD8C24]/10 rounded-[3rem] p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isLarge ? "md:col-span-7" : "md:col-span-5"
      }`}
    >
      <div>
        <div className="w-16 h-16 rounded-2xl bg-[#4F3C1C] flex items-center justify-center text-[#FEA42A] mb-8 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
          <svc.icon size={30} strokeWidth={2} />
        </div>
        <h3 className="text-3xl font-black text-[#4F3C1C] uppercase tracking-tighter mb-4 italic">
          {svc.title}
        </h3>
        <p className="text-[#4F3C1C]/60 text-base font-medium leading-relaxed mb-8">
          {svc.desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {svc.features.map((f) => (
          <span key={f} className="px-4 py-2 bg-[#EFE7DC] text-[#4F3C1C] rounded-full text-[10px] font-black uppercase tracking-widest">
            {f}
          </span>
        ))}
      </div>
      
      <div className="absolute top-10 right-10 text-[#FEA42A] opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight size={32} />
      </div>
    </motion.div>
  );
};

export default Services;
