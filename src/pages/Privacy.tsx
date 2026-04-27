import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const sections = [
  { title: "1. Information We Collect", content: "We collect information you provide directly, such as your name, email address, phone number, and company details when you fill out contact forms, request prospectuses, or apply for partnership programs. We also automatically collect technical information including IP addresses, browser type, and page visit data through standard web analytics." },
  { title: "2. How We Use Your Information", content: "Your personal information is used to respond to inquiries, process partnership applications, send relevant updates about our services, and improve our website experience. We do not sell, trade, or rent your personal data to third parties. Information may be shared with trusted service providers who assist in operating our website, subject to confidentiality agreements." },
  { title: "3. Data Security", content: "We implement industry-standard security measures including SSL encryption for data in transit, secure server infrastructure, and restricted access controls for personnel handling sensitive data." },
  { title: "4. Cookies & Tracking", content: "Our website uses cookies and similar tracking technologies to enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings." },
  { title: "5. Your Rights (GDPR Aligned)", content: "You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at info@birnihigofarms.com." },
  { title: "6. Halal Certification Compliance", content: "Birnihigo Integrated Farms maintains full Halal certification compliance across all processing operations. Our certification is independently audited and renewed annually." },
  { title: "7. Third-Party Links", content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites." },
  { title: "8. Changes to This Policy", content: "We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date." },
  { title: "9. Contact Us", content: "For questions: info@birnihigofarms.com | +251 911 20 94 05 | Africa Avenue, Bedesta Building, 6th Floor, Addis Ababa, Ethiopia." },
];

const Privacy = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-40 pb-20 bg-[#4F3C1C]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[#FEA42A] text-xs uppercase tracking-[0.6em] mb-6 font-black italic">
            Legal & Compliance
          </p>
          <h1 className="text-5xl md:text-8xl text-[#EFE7DC] font-black tracking-tighter italic uppercase leading-[0.85] mb-8">
            Privacy <br /> & <span className="text-[#FEA42A]">Policy.</span>
          </h1>
          <p className="text-[#EFE7DC]/60 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            GDPR-aligned data handling standards and official Halal certification compliance.
          </p>
          <p className="text-[10px] text-[#EFE7DC]/40 font-black uppercase tracking-widest mt-6">
            Last Updated: March 2026
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Content */}
    <section className="py-24 bg-[#EFE7DC]">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        {sections.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.05}>
            <div className="bg-white rounded-3xl p-8 border border-[#CD8C24]/10 shadow-sm">
              <h2 className="text-xl text-[#4F3C1C] font-black mb-4 italic tracking-tight">
                {s.title}
              </h2>
              <p className="text-sm text-[#4F3C1C]/70 leading-relaxed font-medium">
                {s.content}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </Layout>
);

export default Privacy;
