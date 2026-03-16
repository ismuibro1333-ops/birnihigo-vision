import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

type FormType = "general" | "partnership" | "media" | "investor";

const contactTypes: { key: FormType; label: string; email: string }[] = [
  { key: "general", label: "General Inquiry", email: "info@birnihigofarms.com" },
  { key: "partnership", label: "Partnership", email: "media@birnihigo.com" },
  { key: "investor", label: "Investor Relations", email: "invest@birnihigofarms.com" },
  { key: "media", label: "Media", email: "media@birnihigo.com" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/birnihigo" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/birnihigo" },
  { icon: Twitter, label: "Twitter/X", href: "https://twitter.com/birnihigo" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/birnihigo" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/birnihigo" },
];

const departmentEmails = [
  { dept: "General Inquiries", email: "info@birnihigofarms.com" },
  { dept: "Investor Relations", email: "invest@birnihigofarms.com" },
  { dept: "Careers & CBF Program", email: "careers@birnihigofarms.com" },
  { dept: "Media & Partnerships", email: "media@birnihigo.com" },
  { dept: "Technical Support", email: "support@birnihigo.com" },
  { dept: "Schedule a Visit", email: "visit@birnihigo.com" },
];

const Contact = () => {
  const [activeForm, setActiveForm] = useState<FormType>("general");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });

  const activeType = contactTypes.find(ct => ct.key === activeForm)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[${activeType.label}] ${form.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\n${form.message}`
    );
    window.location.href = `mailto:${activeType.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4 font-body font-semibold">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">We'd love to hear from you.</h1>
            <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
              Whether you're a partner, investor, farmer, job seeker, or supporter, we welcome your questions, collaboration, and feedback.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Column */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl overflow-hidden mb-6">
                <iframe
                  title="Birnihigo Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0!2d39.96!3d9.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDknMDAuMCJOIDM5wrA1Nyc0NS42IkU!5e0!3m2!1sen!2set!4v1700000000000"
                  className="w-full h-48"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">📍 Headquarters</p>
                    <p className="text-sm text-muted-foreground font-body">
                      Birnihigo Integrated Farms PLC<br />
                      Africa Avenue, Bedesta Building, 6th Floor<br />
                      Addis Ababa, Ethiopia
                    </p>
                    <p className="font-body text-sm font-medium text-foreground mt-3">🏭 Production Facility</p>
                    <p className="text-sm text-muted-foreground font-body">
                      Awash Sebat, Afar, Ethiopia<br />
                      <span className="text-xs">(Off Route A1, near Melka Werer Research Station)</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Email Address</p>
                    <a href="mailto:info@birnihigofarms.com" className="text-sm text-muted-foreground font-body hover:text-accent transition-colors block">info@birnihigofarms.com</a>
                    <a href="mailto:invest@birnihigofarms.com" className="text-sm text-muted-foreground font-body hover:text-accent transition-colors block">invest@birnihigofarms.com</a>
                    <a href="mailto:careers@birnihigofarms.com" className="text-sm text-muted-foreground font-body hover:text-accent transition-colors block">careers@birnihigofarms.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">📞 Phone</p>
                    <a href="tel:+251911209405" className="text-sm text-muted-foreground font-body hover:text-accent transition-colors block">+251 911 20 94 05</a>
                    <a href="tel:+251911509505" className="text-sm text-muted-foreground font-body hover:text-accent transition-colors block">+251 911 50 95 05</a>
                    <a href="tel:+251222241521" className="text-sm text-muted-foreground font-body hover:text-accent transition-colors block">+251 22 224 1521</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">📱 Instant Messaging</p>
                    <a href="https://web.whatsapp.com/send?phone=251911509505&text=" target="_blank" rel="noopener noreferrer" className="text-sm text-accent font-body hover:underline">💬 WhatsApp Chat: Click to Chat</a>
                    <p className="text-xs text-muted-foreground font-body mt-1">Connect directly with our support or CBF liaison team</p>
                    <p className="text-xs text-muted-foreground font-body">📲 Available Monday–Saturday, 8:00AM–6:00PM EAT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">🤝 Schedule a Visit</p>
                    <p className="text-xs text-muted-foreground font-body">Interested in visiting our farm or processing facility?</p>
                    <a href="mailto:visit@birnihigo.com" className="text-sm text-accent font-body hover:underline">📅 Email visit@birnihigo.com to book a guided tour</a>
                  </div>
                </div>
              </div>

              {/* Department Emails */}
              <div className="mt-8">
                <h4 className="font-display text-sm uppercase tracking-wider mb-3 text-muted-foreground">📬 Department Emails</h4>
                <div className="space-y-2">
                  {departmentEmails.map((d) => (
                    <div key={d.email} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground font-body">{d.dept}</span>
                      <a href={`mailto:${d.email}`} className="text-accent font-body text-xs hover:underline">{d.email}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-muted-foreground">🌐 Connect with Us</h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <h2 className="font-display text-2xl text-foreground mb-6">Have Questions? Get In Touch!</h2>

              <div className="flex gap-2 mb-8 flex-wrap">
                {contactTypes.map((ct) => (
                  <button
                    key={ct.key}
                    onClick={() => { setActiveForm(ct.key); setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" }); }}
                    className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors ${
                      activeForm === ct.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {ct.label}
                  </button>
                ))}
              </div>

              <p className="text-sm text-muted-foreground font-body mb-6">
                Sending to: <span className="text-accent">{activeType.email}</span>
              </p>

              {submitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-10 text-center">
                  <h3 className="font-display text-xl text-foreground mb-2">Message Sent</h3>
                  <p className="text-sm text-muted-foreground font-body">Your email client should have opened with your message to <strong className="text-accent">{activeType.email}</strong>.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="mt-4 px-6 py-2 bg-accent text-accent-foreground text-sm font-body font-semibold rounded-lg hover:brightness-110 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-body text-muted-foreground mb-1 block">First Name *</label>
                      <input type="text" required placeholder="First Name" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-xs font-body text-muted-foreground mb-1 block">Last Name *</label>
                      <input type="text" required placeholder="Last Name" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-body text-muted-foreground mb-1 block">Email *</label>
                    <input type="email" required placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-body text-muted-foreground mb-1 block">Subject</label>
                      <input type="text" placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label className="text-xs font-body text-muted-foreground mb-1 block">Phone (optional)</label>
                      <input type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-body text-muted-foreground mb-1 block">Message *</label>
                    <textarea required placeholder="Your message..." rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 gold-glow">
                    Submit <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-muted-foreground font-body text-center">🛡️ We respect your privacy. Your data will not be shared.</p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
