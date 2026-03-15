import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We collect information you provide directly, such as your name, email address, phone number, and company details when you fill out contact forms, request prospectuses, or apply for partnership programs. We also automatically collect certain technical information including IP addresses, browser type, and page visit data through standard web analytics.",
  },
  {
    title: "2. How We Use Your Information",
    content: "Your personal information is used to respond to inquiries, process partnership applications, send relevant updates about our services, and improve our website experience. We do not sell, trade, or rent your personal data to third parties. Information may be shared with trusted service providers who assist in operating our website and conducting business, subject to confidentiality agreements.",
  },
  {
    title: "3. Data Security",
    content: "We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption for data in transit, secure server infrastructure, and restricted access controls for personnel handling sensitive data.",
  },
  {
    title: "4. Cookies & Tracking",
    content: "Our website uses cookies and similar tracking technologies to enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings. Essential cookies required for site functionality cannot be disabled.",
  },
  {
    title: "5. Your Rights (GDPR Aligned)",
    content: "In accordance with GDPR principles, you have the right to access, correct, or delete your personal data. You may request a copy of the data we hold about you, ask for corrections, or request deletion. To exercise these rights, contact us at info@birnihigofarms.com.",
  },
  {
    title: "6. Halal Certification Compliance",
    content: "Birnihigo Integrated Farms maintains full Halal certification compliance across all processing operations. Our certification is independently audited and renewed annually. Documentation and certification details are available upon request for business partners and institutional buyers.",
  },
  {
    title: "7. Third-Party Links",
    content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
  },
  {
    title: "8. Changes to This Policy",
    content: "We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the revised policy.",
  },
  {
    title: "9. Contact Us",
    content: "For questions about this privacy policy or our data practices, contact us at: info@birnihigofarms.com | +251 911 20 94 05 | Africa Avenue, Bedesta Building, 6th Floor, Addis Ababa, Ethiopia.",
  },
];

const Privacy = () => (
  <Layout>
    <section className="section-padding bg-card border-b border-border">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">Privacy & Policy</h1>
          <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
            GDPR-aligned data handling standards and official Halal certification compliance.
          </p>
          <p className="text-xs text-muted-foreground font-body mt-4">Last updated: March 2025</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-3xl mx-auto space-y-10">
        {sections.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.05}>
            <div>
              <h2 className="font-display text-xl text-foreground mb-3">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{s.content}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </Layout>
);

export default Privacy;
