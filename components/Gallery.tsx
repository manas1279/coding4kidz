"use client";

import { useEffect, useRef } from "react";
import { Camera } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.05 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

const categories = [
  {
    title: "Fundraising Events",
    count: "6 slots",
    photos: [
      { label: "Event — full crowd",    wide: true  },
      { label: "Manas & Kush at event", wide: false },
      { label: "Donation collection",   wide: false },
      { label: "Event setup",           wide: false },
      { label: "Community donating",    wide: false },
      { label: "Team celebration",      wide: false },
    ],
  },
  {
    title: "Our Work in Action",
    count: "5 slots",
    photos: [
      { label: "Partner meeting / call",          wide: false },
      { label: "Outreach materials",              wide: false },
      { label: "Presenting to community",         wide: true  },
      { label: "Manas & Kush planning session",   wide: false },
      { label: "Donation confirmation screenshot", wide: false },
    ],
  },
  {
    title: "Afghanistan Project Updates",
    count: "5 slots",
    photos: [
      { label: "Center location / space",  wide: true  },
      { label: "Equipment delivery",       wide: false },
      { label: "Laptops being set up",     wide: false },
      { label: "First students enrolled",  wide: false },
      { label: "Coding4Kidz signage",      wide: false },
    ],
  },
];

function CategorySection({ cat }: { cat: typeof categories[number] }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      <div className="flex items-center gap-3 mb-5">
        <h3 className="font-bold text-[#0f172a]">{cat.title}</h3>
        <span className="badge text-xs">{cat.count}</span>
        <div className="flex-1 h-px bg-[#e2e8f0]" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {cat.photos.map((p, pi) => (
          <PhotoPlaceholder
            key={pi}
            label={p.label}
            aspectRatio={p.wide ? "aspect-video" : "aspect-square"}
            className={p.wide ? "col-span-2" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const r1 = useReveal();
  return (
    <section id="gallery" className="section bg-[#f8fafc] border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div ref={r1} className="max-w-xl mb-14 reveal">
          <p className="label mb-3">Our work in photos</p>
          <h2 className="headline mb-4">Documenting our journey</h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            Every photo tells the story of students, communities, and two high schoolers who refused to wait.
            Drop in real photos to bring this to life.
          </p>
        </div>

        <div className="space-y-14">
          {categories.map((cat, ci) => (
            <CategorySection key={ci} cat={cat} />
          ))}
        </div>

        {/* CTA card */}
        <div className="mt-14 bg-white rounded-2xl border border-[#e2e8f0] p-8 md:p-10 text-center">
          <Camera className="w-8 h-8 text-[#2563eb] mx-auto mb-4 opacity-60" />
          <h3 className="font-bold text-[#0f172a] mb-2">Replace these with your real photos</h3>
          <p className="text-[#64748b] text-sm max-w-md mx-auto leading-relaxed">
            Each placeholder is a frame ready for real images — fundraising events, partner meetings,
            Afghanistan updates, and moments that prove what Coding4Kidz is building.
          </p>
        </div>
      </div>
    </section>
  );
}
