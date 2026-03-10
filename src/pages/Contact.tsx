import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";

type FormType = "general" | "partnership" | "media";

const contactTypes: { key: FormType; label: string }[] = [
  { key: "general", label: "General Inquiry" },
  { key: "partnership", label: "Partnership" },
  { key: "media", label: "Media Relations" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/birnihigo" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/birnihigo" },
  { icon: Twitter, label: "Twitter/X", href: "https://twitter.com/birnihigo" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@birnihigo" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/birnihigo" },
];

const CONTACT_EMAIL = "info@birnihigo.org";

const Contact = () => {
  const [activeForm, setActiveForm] = useState<FormType>("general");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[${activeForm.charAt(0).toUpperCase() + activeForm.slice(1)}] ${form.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.3em] mb-4 font-body">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">The Gateway</h1>
            <p className="text-primary-foreground/70 text-lg font-body leading-relaxed max-w-2xl mx-auto">
              Whether you're a potential partner, investor, or media representative — we'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Map & Info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl overflow-hidden mb-6">
                <iframe
                  title="Birnihigo Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0!2d39.96!3d9.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDknMDAuMCJOIDM5wrA1Nyc0NS42IkU!5e0!3m2!1sen!2set!4v1700000000000"
                  className="w-full h-56"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Headquarters</p>
                    <p className="text-sm text-muted-foreground font-body">
                      Birnihigo Integrated Farms PLC<br />
                      Awash Sebat, Afar, Ethiopia<br />
                      <span className="text-xs">(Off Route A1, near Melka Werer Research Station)</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:+251222241521" className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">+251 222 241 521</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-muted-foreground font-body hover:text-foreground transition-colors">{CONTACT_EMAIL}</a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-display text-sm uppercase tracking-wider mb-4 text-muted-foreground">Follow Us</h4>
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

          {/* Forms */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <div className="flex gap-2 mb-8">
                {contactTypes.map((ct) => (
                  <button
                    key={ct.key}
                    onClick={() => { setActiveForm(ct.key); setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors ${
                      activeForm === ct.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {ct.label}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="bg-accent rounded-2xl p-10 text-center">
                  <h3 className="font-display text-xl text-foreground mb-2">Message Sent</h3>
                  <p className="text-sm text-muted-foreground font-body">Your email client should have opened with your message to <strong>{CONTACT_EMAIL}</strong>. We'll respond within 2 business days.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-4 px-6 py-2 bg-primary text-primary-foreground text-sm font-body font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    <input type="email" required placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <input type="text" required placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  <textarea required placeholder="Your message..." rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                  <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                    Send Message <ArrowRight size={16} />
                  </button>
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
