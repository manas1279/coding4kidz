"use client";

import { useEffect, useRef } from "react";
import { MapPin, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.08 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

const timeline = [
  { n: "01", title: "Secure the space",         desc: "Identify and lease the training center in a location students can easily access in Jalalabad." },
  { n: "02", title: "Purchase & install",        desc: "Source 15 second-hand laptops, LCD screens, furniture, networking gear, and UPS backup systems from local markets." },
  { n: "03", title: "Enroll first students",     desc: "Leverage Sabawoon & Safiullah's existing AYC community relationships to fill seats within the first week." },
  { n: "04", title: "Launch classes & services", desc: "Start software, hardware, networking, and web design classes. Launch paid digital services to the wider community." },
];

const budgetItems = [
  { label: "Computers & hardware",   amount: 4500, note: "15 second-hand laptops" },
  { label: "Furniture & setup",      amount: 1000, note: "Desks, chairs, shelving" },
  { label: "Rent & deposits",        amount: 1200, note: "6 months advance rent" },
  { label: "Internet & software",    amount: 700,  note: "Networking & installation" },
  { label: "Electricity backup",     amount: 900,  note: "UPS/inverter system" },
  { label: "Marketing & signage",    amount: 200,  note: "Local promotion" },
  { label: "Miscellaneous",          amount: 500,  note: "Transport, contingency" },
];

export default function AfghanProject() {
  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal(); const r4 = useReveal();
  return (
    <section id="project" className="section bg-white border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div ref={r1} className="max-w-2xl mb-14 reveal">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge badge-green"><MapPin className="w-3 h-3" /> Jalalabad, Afghanistan</span>
          </div>
          <p className="label mb-3">Our Flagship Project</p>
          <h2 className="headline mb-5">
            The AYC Computer Training Center
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            In partnership with Afghan Youth Connect and Rotary International District 5340, we&apos;re helping fund a
            computer training and digital services center in Jalalabad — one that becomes self-sustaining within months.
          </p>
        </div>

        {/* Photo grid */}
        <div ref={r2} className="grid grid-cols-3 gap-3 mb-10 reveal">
          <PhotoPlaceholder label="Training center — exterior or classroom" aspectRatio="aspect-video" className="col-span-2" />
          <div className="flex flex-col gap-3">
            <PhotoPlaceholder label="Students at computers" aspectRatio="" className="flex-1 min-h-[130px]" />
            <PhotoPlaceholder label="Equipment / setup" aspectRatio="" className="flex-1 min-h-[130px]" />
          </div>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-3 gap-3 mb-14">
          {[
            { value: "15",     label: "Computers funded",           sub: "Second-hand laptops" },
            { value: "$3,500", label: "Coding4Kidz contribution",   sub: "Of the $9,000 total" },
            { value: "18 yrs", label: "Partner teaching experience", sub: "AYC in Jalalabad since 2008" },
          ].map((s, i) => (
            <div key={i} className="card-flat rounded-xl p-5 text-center">
              <div className="text-2xl font-black text-[#0f172a] tracking-tight mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-[#0f172a] mb-0.5">{s.label}</div>
              <div className="text-xs text-[#64748b]">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Partner letter */}
        <div ref={r3} className="mb-14 reveal">
          <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-8 md:p-10">
            <p className="label mb-4">Letter from our partners</p>
            <blockquote className="text-[#0f172a] text-base leading-relaxed mb-6 max-w-3xl">
              &ldquo;We are truly grateful and excited to hear about your commitment of approximately{" "}
              <strong>$3,500 toward the Computer Training and Digital Services Center.</strong>{" "}
              This is a major step toward making this project a reality and creating long-term opportunities for both education
              and livelihoods in our community. Your support means much more than financial assistance.{" "}
              <strong>It creates hope and opens a path for sustainability and future growth.</strong>&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0f172a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AYC</div>
                <div>
                  <div className="text-sm font-semibold text-[#0f172a]">Afghan Youth Connect Team</div>
                  <div className="text-xs text-[#64748b]">Sabawoon & Safiullah · Jalalabad, Nangarhar, Afghanistan</div>
                </div>
              </div>
              <div className="sm:ml-auto flex items-center gap-1.5 text-xs font-semibold text-green-700">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified Partner
              </div>
            </div>
          </div>
        </div>

        {/* Educators + Timeline side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          {/* Educators */}
          <div ref={r4} className="reveal">
            <p className="label mb-4">Meet the educators</p>
            <p className="text-[#64748b] text-sm leading-relaxed mb-5">
              <strong className="text-[#0f172a]">Sabawoon and Safiullah</strong> have been teaching computer science in Jalalabad
              through the Afghan Youth Connect program since 2008. With nearly two decades of experience in software, hardware,
              networking, and web design, they will operate the new center as an independent business — creating sustainable
              livelihoods for themselves and other skilled AYC educators.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <PhotoPlaceholder label="Sabawoon · Lead Trainer" aspectRatio="aspect-square" />
              <PhotoPlaceholder label="Safiullah · Lead Trainer" aspectRatio="aspect-square" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { k: "Teaching since", v: "2008" },
                { k: "Location",       v: "Jalalabad" },
                { k: "Specializations",v: "6+ fields" },
                { k: "Self-sustaining",v: "By month 6" },
              ].map((item, i) => (
                <div key={i} className="card-flat rounded-lg p-3">
                  <div className="text-xs text-[#94a3b8] mb-0.5">{item.k}</div>
                  <div className="text-sm font-semibold text-[#0f172a]">{item.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="label mb-6">Implementation timeline</p>
            <div className="space-y-6">
              {timeline.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="step-num text-sm flex-shrink-0 mt-0.5">{step.n}</div>
                  <div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">{step.title}</h4>
                    <p className="text-[#64748b] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Budget breakdown */}
        <div className="mb-10">
          <p className="label mb-5">Full budget breakdown — $9,000 total</p>
          <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden">
            {budgetItems.map((item, i) => (
              <div key={i} className={`flex items-center justify-between px-5 py-4 ${i < budgetItems.length - 1 ? "border-b border-[#f1f5f9]" : ""}`}>
                <div>
                  <div className="text-sm font-medium text-[#0f172a]">{item.label}</div>
                  <div className="text-xs text-[#94a3b8]">{item.note}</div>
                </div>
                <div className="text-sm font-semibold text-[#0f172a] ml-4">${item.amount.toLocaleString()}</div>
              </div>
            ))}
            <div className="flex items-center justify-between px-5 py-4 bg-[#f8fafc]">
              <div className="text-sm font-bold text-[#0f172a]">Total</div>
              <div className="text-sm font-bold text-[#0f172a]">$9,000</div>
            </div>
          </div>
        </div>

        {/* Rotary link */}
        <a href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#2563eb] font-medium hover:underline">
          Read the Rotary District 5340 story <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
