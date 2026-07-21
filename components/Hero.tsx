"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin, TrendingUp, Users } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

function Counter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const [go, setGo] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!go) return;
    const s = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - s) / 1400, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(tick); else setN(end);
    };
    requestAnimationFrame(tick);
  }, [go, end]);
  return <span ref={ref}>{prefix}{n.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top badge */}
        <div className="flex justify-center mb-8">
          <span className="badge badge-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            Student-Led Nonprofit · Founded 2025
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h1 className="display mb-5">
            We fundraise to bring{" "}
            <span className="gradient-text">computer education</span>{" "}
            to those who need it most.
          </h1>
          <p className="text-[#64748b] text-lg leading-relaxed max-w-xl mx-auto">
            Coding4Kidz is a student-led nonprofit run by two high schoolers — Manas Goel and Kush Shah.
            We raise money and donate it directly to build computer labs and digital skills programs for underserved communities.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <a href="#project" className="btn-primary px-6 py-3 text-base">
            See Our Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#donate" className="btn-secondary px-6 py-3 text-base">
            Support the Mission
          </a>
        </div>

        {/* Hero photo placeholder */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-[#e2e8f0] shadow-sm">
          <PhotoPlaceholder
            label="Hero photo — team at work, fundraising event, or Afghanistan project"
            aspectRatio="aspect-[16/7]"
            className="w-full"
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e2e8f0] rounded-2xl overflow-hidden border border-[#e2e8f0]">
          {[
            { icon: TrendingUp, prefix: "$", end: 3500, suffix: "+", label: "Raised & Donated" },
            { icon: Users,      prefix: "",  end: 15,   suffix: "",  label: "Computers Funded" },
            { icon: MapPin,     prefix: "",  end: 200,  suffix: "+", label: "Students to Benefit" },
            { icon: TrendingUp, prefix: "$", end: 9000, suffix: "",  label: "Total Project Value" },
          ].map((s, i) => (
            <div key={i} className="bg-white px-6 py-6 text-center">
              <div className="text-2xl font-black text-[#0f172a] tracking-tight mb-1">
                <Counter prefix={s.prefix} end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-[#64748b] text-xs font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
