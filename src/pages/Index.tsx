import Head from "next/head"; // Added for SEO
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MotionCard from "@/components/MotionCard";
import ScrollytellingHero from "@/components/ScrollytellingHero";
import ValueChain from "@/components/ValueChain";
import OperationalDashboard from "@/components/OperationalDashboard";
import pic1 from "@/assets/pic1.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic3 from "@/assets/pic3.jpg";
import { Leaf, Recycle, Sprout, ArrowRight, Shield, TrendingUp, Globe, Factory, Droplets, Zap, Users, Package, FlameKindling } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => (
  <Layout>
    {/* DIGITAL STRATEGY: SEO & META TAGS */}
    <Head>
      <title>Birnihigo Integrated Farms | Leading Ethiopia's Protein Economy</title>
      <meta name="description" content="An industrial-scale integrated poultry system securing food sovereignty for Ethiopia's 135M+ population through science-based production and ESG-led sustainability." />
      <meta name="keywords" content="Ethiopia Agriculture, Poultry Farming, Food Security, Birnihigo Farms, Industrial Farming Ethiopia, 135M Population" />
      
      {/* Social Media Sharing (Open Graph) */}
      <meta property="og:title" content="Birnihigo Integrated Farms | National Impact" />
      <meta property="og:description" content="Transforming Ethiopia's protein economy through a 100% circular, vertically integrated poultry model." />
      <meta property="og:image" content="/og-image.jpg" /> {/* Fasil should ensure this file exists in /public */}
      <meta property="og:type" content="website" />
      
      {/* Google Analytics Placeholder - Fasil just needs to drop the ID here */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YOUR_ID_HERE');
        `,
      }} />
    </Head>

    <ScrollytellingHero />
    
    {/* VISION STRIPE: National Impact */}
    <section className="py-12 bg-[#4F3C1C] text-[#EFE7DC] overflow-hidden border-y border-[#FEA42A]/20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
             <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight italic">
               "Driving national food sovereignty for 135M+ citizens through integrated, science-based poultry systems."
             </h2>
          </div>
          <div className="h-px w-24 bg-[#FEA42A] hidden md:block" />
          <p className="text-[#FEA42A] font-bold uppercase tracking-[0.2em] text-sm text-center md:text-right">
            Transforming production into a reliable source of <br/> safe, affordable protein at scale.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* STRATEGIC STATEMENT */}
    <section className="py-24 bg-[#EFE7DC]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center">
          <p className="text-[#CD8C24] text-sm uppercase tracking-[0.4em] mb-8 font-black">Strategic Statement</p>
          <p className="text-2xl md:text-3xl text-[#4F3C1C] font-bold leading-relaxed mb-8 tracking-tight">
            Ethiopia's poultry challenge is not primarily a production issue—it is a{" "}
            <span className="text-[#FEA42A]">systems integration challenge.</span>
          </p>
          <div className="w-16 h-1 bg-[#CD8C24]/30 mx-auto my-8 rounded-full" />
          <p className="text-lg text-[#4F3C1C]/70 leading-relaxed font-medium mb-6">
            With a population of <span className="text-[#CD8C24] font-bold">135M+</span>, a massive market opportunity exists, yet fragmentation continues to constrain scale and affordability.
          </p>
          <p className="text-lg text-[#4F3C1C] font-black uppercase tracking-widest">
            Birnihigo is designed as an integrated, execution-driven model to close this gap.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <ValueChain />

    {/* NATIONAL IMPACT */}
    <section className="py-24 bg-[#4F3C1C] relative overflow-hidden" aria-labelledby="national-impact-heading">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#FEA42A]/5 blur-[120px] rounded-full" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#FEA42A] text-sm uppercase tracking-[0.4em] mb-4 font-bold">National Impact</p>
          <h2 id="national-impact-heading" className="text-5xl text-[#EFE7DC] font-black tracking-tighter">
            Transforming Ethiopia's Protein Economy
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Package, label: "Expanding access to affordable protein" },
            { icon: Globe, label: "Reducing import dependency" },
            { icon: Users, label: "Creating jobs for youth and women" },
            { icon: TrendingUp, label: "Enabling export-ready poultry production" },
            { icon: Shield, label: "Strengthening food security for 135M+ people" },
          ].map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-[#FEA42A]/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#FEA42A]/10 border border-[#FEA42A]/20 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-[#FEA42A]" />
                </div>
                <p className="text-[#EFE7DC] font-semibold text-base leading-snug mt-1">{item.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
    
    {/* REST OF YOUR CODE (Numbers, Gallery, Resilience, Sustainability, Investor sections...) stays exactly the same below here */}
    
    {/* ... (Keep your existing code for those sections) ... */}

  </Layout>
);

export default Index;
