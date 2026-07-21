"use client";

import { useEffect, useRef } from "react";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { CheckCircle2 } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

const founders = [
  {
    name: "Manas Goel",
    role: "Co-Founder & Co-President",
    bio: "Manas leads fundraising strategy, donor outreach, and international partnerships. From cold-emailing organizations to presenting to community groups, he's been the driving force behind Coding4Kidz's financial growth.",
    skills: ["Fundraising Strategy", "Partnership Development", "Community Outreach", "Project Management"],
    initial: "M",
  },
  {
    name: "Kush Shah",
    role: "Co-Founder & Co-President",
    bio: "Kush manages organizational structure, partner vetting, impact tracking, and ensures every dollar is deployed effectively. His commitment to transparency has built lasting trust with donors and partners.",
    skills: ["Operations Management", "Impact Assessment", "Partner Vetting", "Strategic Planning"],
    initial: "K",
  },
];

const achievements = [
  "Founded a nonprofit while maintaining full academic schedules",
  "Raised $3,500+ through community fundraising and outreach",
  "Built and maintained the Coding4Kidz digital presence",
  "Coordinated with international organizations across 3 countries",
  "Secured partnership with Rotary International District 5340",
  "Designed a self-sustaining model for long-term impact",
];

export default function Team() {
  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  return (
    <section id="team" className="section bg-white border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div ref={r1} className="max-w-xl mb-14 reveal">
          <p className="label mb-3">The founders</p>
          <h2 className="headline mb-4">Meet the co-presidents</h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            Two high school students who proved that age is not a prerequisite for making a global impact.
          </p>
        </div>

        {/* Founder cards */}
        <div ref={r2} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 reveal">
          {founders.map((p, i) => (
            <div key={i} className="card p-7">
              {/* Photo + name */}
              <div className="flex items-start gap-5 mb-6">
                <div className="relative flex-shrink-0">
                  <PhotoPlaceholder label={`${p.name} · headshot`} aspectRatio="" className="w-20 h-20 rounded-xl" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-[#0f172a]">{p.name}</h3>
                    <span className="badge badge-green text-xs py-0.5">Active</span>
                  </div>
                  <p className="text-[#64748b] text-sm">{p.role}</p>
                  <p className="text-xs text-[#94a3b8] mt-1">High School Student</p>
                </div>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed mb-5">{p.bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.skills.map((s, j) => (
                  <span key={j} className="badge text-xs">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Together photo */}
        <div ref={r3} className="mb-14 reveal">
          <PhotoPlaceholder label="Manas & Kush together — fundraising event, school, or team photo" aspectRatio="aspect-[3/1]" className="w-full" />
        </div>

        {/* Achievements */}
        <div>
          <p className="label mb-6">What we&apos;ve accomplished in our first year</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#f8fafc] rounded-xl p-4 border border-[#e2e8f0]">
                <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                <p className="text-[#0f172a] text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
