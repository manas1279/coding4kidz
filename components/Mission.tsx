"use client";

import { useEffect, useRef } from "react";
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

const howItWorks = [
  { n: "01", title: "Identify need",       desc: "We research and identify communities with the greatest gap in computer education and the local infrastructure to support growth." },
  { n: "02", title: "Fundraise",           desc: "Through events, campaigns, and community outreach, we raise funds from donors who believe access to technology is a right, not a privilege." },
  { n: "03", title: "Vet partners",        desc: "We partner only with established, verified organizations on the ground who can deploy resources effectively and with full accountability." },
  { n: "04", title: "Measure impact",      desc: "We track every student enrolled, every skill learned, and report back with photos, data, and updates so you see exactly where your money went." },
];

const beliefs = [
  "Technology education is a fundamental right",
  "Students can lead change — not just follow it",
  "Every dollar should be traceable and impactful",
  "Sustainability matters more than one-time donations",
  "Local partners amplify impact exponentially",
  "Transparency builds trust that compounds over time",
];

export default function Mission() {
  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  return (
    <section id="mission" className="section bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={r1} className="max-w-2xl mb-16 reveal">
          <p className="label mb-3">Our Mission</p>
          <h2 className="headline mb-5">
            Why we built Coding4Kidz
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            Two high school students. One conviction: the zip code you're born into shouldn't determine whether you learn to code.
            We built this nonprofit to do something about that — while still in high school.
          </p>
        </div>

        {/* How it works */}
        <div ref={r2} className="mb-16 reveal">
          <p className="label mb-8">How it works</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="step-num">{step.n}</div>
                <div>
                  <h3 className="font-semibold text-[#0f172a] mb-2">{step.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beliefs + quote */}
        <div ref={r3} className="grid grid-cols-1 lg:grid-cols-2 gap-10 reveal">
          <div>
            <p className="label mb-6">What we believe</p>
            <ul className="space-y-3">
              {beliefs.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  <span className="text-[#0f172a] text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 flex flex-col justify-center">
            <blockquote className="text-xl font-semibold text-[#0f172a] leading-snug mb-6">
              &ldquo;We aren&apos;t waiting to graduate to make a difference. We&apos;re doing it now.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">M</div>
              <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">K</div>
              <div>
                <div className="text-sm font-semibold text-[#0f172a]">Manas Goel & Kush Shah</div>
                <div className="text-xs text-[#64748b]">Co-Presidents, Coding4Kidz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
