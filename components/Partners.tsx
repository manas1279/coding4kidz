"use client";

import { useEffect, useRef } from "react";
import { Globe, Shield, Heart, ExternalLink } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

const partners = [
  {
    name: "Afghan Youth Connect (AYC)",
    short: "AYC",
    role: "Primary Recipient Partner",
    since: "Partner since 2025",
    desc: "Operating in Jalalabad since 2008, AYC has spent nearly two decades building computer education infrastructure. Our partnership supports their next chapter — an independent, self-sustaining training center.",
    tags: ["Ground Partner", "Education", "Afghanistan"],
  },
  {
    name: "Rotary International District 5340",
    short: "Rotary",
    role: "International Endorsement Partner",
    since: "Partner since 2025",
    desc: "Led by Rotarian Fary Moini of the La Jolla Golden Triangle Rotary Club, District 5340 champions Afghan youth education. Their endorsement gives our project international credibility.",
    tags: ["Rotary", "International", "Verified"],
    link: "https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing",
  },
  {
    name: "La Jolla Golden Triangle Rotary Club",
    short: "LJGT",
    role: "Rotary Chapter Partner",
    since: "Partner since 2025",
    desc: "A powerful local chapter that has already backed multiple technology business startups in Jalalabad, proving the effectiveness of this community-centered model.",
    tags: ["Rotary", "La Jolla", "Startup Support"],
  },
  {
    name: "Del Mar Rotary Club",
    short: "DMR",
    role: "Supporting Rotary Partner",
    since: "Partner since 2025",
    desc: "Co-funding technology initiatives for Afghan youth alongside the La Jolla chapter, demonstrating broad community support for our shared mission.",
    tags: ["Rotary", "Del Mar", "Co-Funder"],
  },
];

const trust = [
  { icon: Shield, title: "Fully Transparent",       desc: "Every dollar raised is publicly accounted for with detailed allocation breakdowns." },
  { icon: Globe,  title: "Internationally Verified", desc: "Our Afghan partner is vetted by Rotary International, one of the world's most respected service organizations." },
  { icon: Heart,  title: "Human-Centered",           desc: "Every project is designed to outlast our involvement — sustainability first, always." },
];

const aycStats = [
  { l: "Years Operating", v: "18+" },
  { l: "Students Taught",  v: "1,000s" },
  { l: "Tech Fields",      v: "6+" },
  { l: "City",             v: "Jalalabad" },
];

export default function Partners() {
  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  return (
    <section id="partners" className="section bg-white border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div ref={r1} className="max-w-xl mb-14 reveal">
          <p className="label mb-3">Our network</p>
          <h2 className="headline mb-4">Built on trust & partnership</h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            Our impact is amplified by established, internationally recognized organizations committed to the same mission.
          </p>
        </div>

        {/* Partner cards */}
        <div ref={r2} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 reveal">
          {partners.map((p, i) => (
            <div key={i} className="card p-7">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0f172a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {p.short}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-[#0f172a] text-sm leading-snug">{p.name}</h3>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer"
                        className="text-[#94a3b8] hover:text-[#2563eb] transition-colors flex-shrink-0">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-[#2563eb] text-xs font-semibold mt-0.5">{p.role}</p>
                </div>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 items-center">
                {p.tags.map((t, j) => (
                  <span key={j} className="badge text-xs">{t}</span>
                ))}
                <span className="ml-auto badge badge-green text-xs">{p.since}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div ref={r3} className="mb-10 reveal">
          <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-8 md:p-10">
            <p className="font-semibold text-[#0f172a] text-center mb-8">Why you can trust us</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trust.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#0f172a] flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#0f172a] mb-2 text-sm">{s.title}</h4>
                  <p className="text-[#64748b] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AYC feature */}
        <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-8 md:p-10">
          <p className="label mb-4">Featured partner story</p>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <h3 className="font-bold text-[#0f172a] text-lg mb-3">Afghan Youth Connect: Teaching Tech Since 2008</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-5">
                For nearly two decades, the AYC team has been a beacon of technological education in Jalalabad —
                through political upheaval, economic hardship, and the challenges of a conflict-affected region.
                Our donation isn&apos;t charity. It&apos;s investment in a proven team.
              </p>
              <a href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#2563eb] text-sm font-medium hover:underline">
                Read the full Rotary story <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {aycStats.map((s, i) => (
                <div key={i} className="card-flat rounded-xl p-4 text-center min-w-[110px]">
                  <div className="text-xl font-black text-[#0f172a] mb-0.5">{s.v}</div>
                  <div className="text-xs text-[#64748b]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
