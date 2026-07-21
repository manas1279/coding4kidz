"use client";

import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

function Bar({ label, value, max }: { label: string; value: number; max: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setW((value / max) * 100), 200); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, max]);
  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="w-36 text-sm text-[#64748b] flex-shrink-0 text-right">{label}</div>
      <div className="flex-1 prog-track h-2">
        <div className="prog-fill h-2" style={{ width: `${w}%` }} />
      </div>
      <div className="w-16 text-sm font-semibold text-[#0f172a] flex-shrink-0">${value.toLocaleString()}</div>
    </div>
  );
}

const skills = [
  "Computer hardware & software", "Web design (HTML, CSS, JavaScript)",
  "Networking & IT infrastructure", "Digital services & CCTV",
  "Video editing & photography", "Domain registration & hosting",
];
const services = [
  "Professional web development", "Digital marketing services",
  "Photography & video production", "CCTV installation & monitoring",
  "Computer repair & maintenance", "Technical consulting",
];
const outcomes = [
  "Self-sustaining within 4–6 months", "Multiple instructors employed",
  "200+ students trained per year", "Revenue reinvested in community",
  "Digital economy seeded in Jalalabad", "Replicable model for other cities",
];

export default function Impact() {
  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  const budget = [
    { label: "Computers & hardware", value: 4500 },
    { label: "Furniture & setup",    value: 1000 },
    { label: "Rent & deposits",      value: 1200 },
    { label: "Internet & software",  value: 700  },
    { label: "Electricity backup",   value: 900  },
    { label: "Marketing",            value: 200  },
    { label: "Miscellaneous",        value: 500  },
  ];
  return (
    <section id="impact" className="section bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={r1} className="max-w-2xl mb-14 reveal">
          <p className="label mb-3">By the numbers</p>
          <h2 className="headline mb-4">The impact so far</h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            Every number below represents a real person, a real computer, or a real opportunity created by fundraising and partnership.
          </p>
        </div>

        {/* Two column: progress + budget */}
        <div ref={r2} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 reveal">

          {/* Fundraising */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
            <p className="label mb-2">Fundraising progress</p>
            <p className="text-xs text-[#94a3b8] mb-8">Toward the $9,000 Computer Training Center in Jalalabad</p>

            <div className="flex items-end gap-4 mb-6">
              <div>
                <div className="text-4xl font-black text-[#0f172a] tracking-tight">$3,500</div>
                <div className="text-sm text-[#64748b] mt-1">raised of <strong className="text-[#0f172a]">$9,000</strong> goal</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-2xl font-black text-[#0f172a]">39%</div>
                <div className="text-xs text-[#64748b]">funded</div>
              </div>
            </div>

            <div className="prog-track h-2.5 mb-6">
              <div className="prog-fill h-2.5" style={{ width: "39%", transition: "width 1.6s ease" }} />
            </div>

            <div className="space-y-3">
              {[
                { label: "Committed by Coding4Kidz", amount: "$3,500", color: "bg-[#2563eb]" },
                { label: "Remaining to raise",       amount: "$5,500", color: "bg-[#e2e8f0]" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  <span className="text-sm text-[#64748b] flex-1">{item.label}</span>
                  <span className="text-sm font-semibold text-[#0f172a]">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
            <p className="label mb-2">Budget breakdown</p>
            <p className="text-xs text-[#94a3b8] mb-8">Every dollar allocated with full transparency</p>
            <div className="space-y-4">
              {budget.map((b, i) => <Bar key={i} label={b.label} value={b.value} max={9000} />)}
            </div>
            <div className="mt-6 pt-5 border-t border-[#f1f5f9] flex justify-between">
              <span className="text-sm font-semibold text-[#0f172a]">Total</span>
              <span className="text-sm font-bold text-[#0f172a]">$9,000</span>
            </div>
          </div>
        </div>

        {/* Three columns */}
        <div ref={r3} className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {[
            { title: "Skills being taught", items: skills },
            { title: "Community services offered", items: services },
            { title: "Expected outcomes", items: outcomes },
          ].map((col, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <p className="font-semibold text-[#0f172a] mb-5 text-sm">{col.title}</p>
              <ul className="space-y-2.5">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#2563eb] mt-2 flex-shrink-0" />
                    <span className="text-[#64748b] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
