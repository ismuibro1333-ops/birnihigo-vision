"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/birnihigo", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/birnihigo", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/birnihigo", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@birnihigo", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/birnihigo", label: "LinkedIn" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const brandOrange = "#FEA42A";
  const brandBrown = "#4F3C1C";
  const brandCream = "#EFE7DC";

  return (
    <footer
      className="border-t border-white/5 relative overflow-hidden font-body"
      style={{ backgroundColor: brandBrown, color: brandCream }}
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FEA42A]/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* 1. Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-4 mb-10 group">
              <img
                src="/logo1.png"
                alt="Birnihigo Logo"
                className="w-14 h-14 object-contain brightness-0 invert transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110"
              />

              <div className="flex flex-col">
                <span
                  className="font-display text-3xl font-black tracking-tighter italic"
                  style={{ color: brandOrange }}
                >
                  BIRNIHIGO
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">
                  Integrated Farms
                </span>
              </div>
            </Link>

            <p className="text-lg italic opacity-70 border-l-2 border-[#FEA42A] pl-6">
              Ethiopia's first fully integrated poultry ecosystem. Eliminating food
              insecurity through a 42-hectare industrial loop.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#FEA42A] transition"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase mb-6 text-[#FEA42A]">
              The Ecosystem
            </h4>

            <nav className="flex flex-col gap-3">
              {[
                { label: "Our Story", to: "/about" },
                { label: "Insights & News", to: "/blog" },
                { label: "Products", to: "/products" },
                { label: "Services", to: "/services" },
                { label: "Sustainability", to: "/sustainability" },
                { label: "Investors", to: "/investors" },
              ].map((l) => (
                <Link key={l.to} href={l.to} className="hover:text-[#FEA42A]">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase mb-6 text-[#FEA42A]">
              Corporate Liaison
            </h4>

            <div className="space-y-6 text-sm">

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  Kazanchis, Addis Ababa <br />
                  Garad Building, Floor 10
                </span>
              </div>

              <a
                href="tel:+251222413101"
                className="flex gap-3 hover:text-[#FEA42A]"
              >
                <Phone size={18} />
                +251 22 241 3101
              </a>

              <a
                href="mailto:info@birnihigofarms.com"
                className="flex gap-3 hover:text-[#FEA42A]"
              >
                <Mail size={18} />
                info@birnihigofarms.com
              </a>
            </div>
          </div>

          {/* 4. Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase mb-6 text-[#FEA42A]">
              Newsletter
            </h4>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(email);
              }}
              className="flex"
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-xl outline-none"
              />

              <button className="px-4 bg-[#FEA42A] text-black rounded-r-xl">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-xs opacity-40">
          © 2026 Birnihigo Integrated Farms PLC
        </div>
      </div>
    </footer>
  );
};

export default Footer;