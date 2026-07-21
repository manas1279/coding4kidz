"use client";

import { useEffect, useRef } from "react";
import { Heart, DollarSign, Globe, Zap, CheckCircle2, ArrowRight, Mail } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

const tiers = [
  { amount: 25,   label: "Supporter",  desc: "Covers networking cables and accessories for the computer lab.",                                   icon: Heart,      hot: false },
  { amount: 100,  label: "Champion",   desc: "Funds critical software installations and a month of internet access.",                             icon: Zap,        hot: true  },
  { amount: 300,  label: "Pathfinder", desc: "Contributes toward one refurbished laptop — direct access to digital education for a student.",    icon: Globe,      hot: false },
  { amount: 1000, label: "Visionary",  desc: "Funds a full computer station (laptop + desk + chair) and three months of electricity backup.",    icon: DollarSign, hot: false },
];

const breakdown = [
  { a: "$20",    w: "Networking cables and accessories" },
  { a: "$50",    w: "One month of high-speed internet" },
  { a: "$100",   w: "Software for the entire lab" },
  { a: "$150",   w: "A student chair and desk setup" },
  { a: "$300",   w: "One refurbished laptop" },
  { a: "$900",   w: "Complete UPS electricity backup system" },
  { a: "$1,200", w: "Six months of rent for the center" },
  { a: "$4,500", w: "All 15 student laptops" },
  { a: "$9,000", w: "Fully funds the entire Computer Training Center" },
];

export default function Donate() {
  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  return (
    <section id="donate" className="section bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={r1} className="max-w-xl mb-12 reveal">
          <p className="label mb-3">Make a difference</p>
          <h2 className="headline mb-4">Help us reach <span className="gradient-text">$9,000</span></h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            We&apos;ve committed $3,500. We need $5,500 more to fully fund the Computer Training Center in Jalalabad.
            Every dollar goes directly to hardware, infrastructure, and education.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mb-12">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-[#64748b]">Raised: <strong className="text-[#0f172a]">$3,500</strong></span>
            <span className="text-[#64748b]">Goal: <strong className="text-[#0f172a]">$9,000</strong></span>
          </div>
          <div className="prog-track h-2.5 mb-2">
            <div className="prog-fill h-2.5" style={{ width: "39%", transition: "width 1.6s ease" }} />
          </div>
          <p className="text-xs text-[#94a3b8]">39% funded · $5,500 remaining</p>
        </div>

        {/* Donation tiers */}
        <div ref={r2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 reveal">
          {tiers.map((t, i) => (
            <div key={i} className={`relative card p-6 ${t.hot ? "ring-2 ring-[#2563eb]" : ""}`}>
              {t.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#2563eb] text-white text-xs font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="w-9 h-9 rounded-lg bg-[#0f172a] flex items-center justify-center mb-4">
                <t.icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-black text-[#0f172a] mb-0.5">${t.amount}</div>
              <div className="text-sm font-semibold text-[#0f172a] mb-2">{t.label}</div>
              <p className="text-[#64748b] text-xs leading-relaxed mb-5">{t.desc}</p>
              <a href="mailto:coding4kidz@gmail.com"
                className="block w-full py-2 rounded-lg border border-[#e2e8f0] text-center text-xs font-semibold text-[#0f172a] hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-all">
                Donate ${t.amount}
              </a>
            </div>
          ))}
        </div>

        {/* What it buys */}
        <div ref={r3} className="bg-white rounded-2xl border border-[#e2e8f0] p-8 md:p-10 mb-12 reveal">
          <p className="font-semibold text-[#0f172a] mb-6">What your donation actually buys</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {breakdown.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-[#0f172a]">{item.a}</strong>
                  <span className="text-[#64748b]"> — {item.w}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#64748b] mb-5 text-sm">Want to make a custom contribution or discuss a larger partnership?</p>
          <a href="mailto:coding4kidz@gmail.com"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base">
            <Mail className="w-4 h-4" /> Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[#94a3b8] text-xs mt-4">coding4kidz@gmail.com · We respond within 24 hours</p>
        </div>
      </div>
    </section>
  );
}
