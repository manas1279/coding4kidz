"use client";

import { useEffect, useRef } from "react";
import { Heart, DollarSign, Globe, Zap, CheckCircle2, ArrowRight } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const tiers = [
  {
    amount: 25,
    label: "Supporter",
    desc: "Covers networking cables and accessories for the new computer lab.",
    icon: Heart,
    color: "from-blue-500 to-blue-700",
    border: "border-blue-200",
    bg: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    amount: 100,
    label: "Champion",
    desc: "Funds critical software installations and a month of internet access.",
    icon: Zap,
    color: "from-purple-500 to-purple-700",
    border: "border-purple-200",
    bg: "bg-purple-50",
    textColor: "text-purple-700",
    featured: true,
  },
  {
    amount: 300,
    label: "Pathfinder",
    desc: "Contributes toward one refurbished laptop — giving a student direct access to digital education.",
    icon: Globe,
    color: "from-teal-500 to-teal-700",
    border: "border-teal-200",
    bg: "bg-teal-50",
    textColor: "text-teal-700",
  },
  {
    amount: 1000,
    label: "Visionary",
    desc: "Funds a full computer station (laptop + desk + chair) and three months of electricity backup.",
    icon: DollarSign,
    color: "from-amber-500 to-amber-700",
    border: "border-amber-200",
    bg: "bg-amber-50",
    textColor: "text-amber-700",
  },
];

export default function Donate() {
  const ref1 = useReveal();
  const ref2 = useReveal();

  return (
    <section id="donate" className="relative py-32 bg-[#0a0a14] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref1} className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            Make a Difference
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Help Us Reach{" "}
            <span className="gradient-text">$9,000</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We&apos;ve committed $3,500. We need $5,500 more to fully fund the Computer Training Center in Jalalabad. Every dollar goes directly to hardware, infrastructure, and education.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex justify-between text-sm text-gray-400 mb-3">
            <span>Raised: <strong className="text-white">$3,500</strong></span>
            <span>Goal: <strong className="text-white">$9,000</strong></span>
          </div>
          <div className="h-4 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "39%",
                background: "linear-gradient(90deg, #1a56db, #7e3af2)",
                boxShadow: "0 0 20px rgba(26,86,219,0.5)",
              }}
            />
          </div>
          <div className="text-center mt-3 text-gray-500 text-sm">39% funded — $5,500 remaining</div>
        </div>

        {/* Donation tiers */}
        <div ref={ref2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 opacity-0 translate-y-8 transition-all duration-700">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative group glass rounded-2xl p-6 border transition-all duration-300 card-hover ${
                tier.featured
                  ? "border-purple-500/40 shadow-lg shadow-purple-500/20 scale-105"
                  : "border-white/5"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <tier.icon className="w-6 h-6 text-white" />
              </div>

              <div className="text-3xl font-black text-white mb-1">${tier.amount}</div>
              <div className="text-gray-300 font-semibold mb-3">{tier.label}</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{tier.desc}</p>

              <button className="w-full py-2.5 rounded-xl border border-white/10 text-gray-300 text-sm font-semibold hover:bg-white/5 hover:text-white transition-all duration-200">
                Donate ${tier.amount}
              </button>
            </div>
          ))}
        </div>

        {/* What your donation does */}
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 mb-16">
          <h3 className="text-2xl font-black text-white text-center mb-8">
            What Your Donation <span className="gradient-text">Actually Buys</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { amount: "$20", what: "Pays for networking cables and accessories" },
              { amount: "$50", what: "Covers one month of high-speed internet" },
              { amount: "$100", what: "Funds software installations for the entire lab" },
              { amount: "$150", what: "Buys a student chair and desk setup" },
              { amount: "$300", what: "Purchases one refurbished laptop for a student" },
              { amount: "$900", what: "Provides complete electricity backup system (UPS)" },
              { amount: "$1,200", what: "Covers 6 months of rent for the training center" },
              { amount: "$4,500", what: "Equips the center with all 15 student laptops" },
              { amount: "$9,000", what: "Fully funds the entire Computer Training Center" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-white">{item.amount}</strong>
                  <span className="text-gray-400"> → {item.what}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Want to make a custom contribution or discuss a larger partnership?
          </p>
          <a
            href="mailto:coding4kidz@gmail.com"
            className="inline-flex items-center gap-2 btn-primary px-10 py-4 rounded-full text-white font-bold text-lg shadow-2xl shadow-blue-500/25"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </a>
          <p className="text-gray-600 text-sm mt-4">
            coding4kidz@gmail.com · We respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
