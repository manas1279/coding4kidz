"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Users, DollarSign, Globe, BookOpen, Wifi, Zap, Clock } from "lucide-react";

function AnimatedNumber({ end, prefix = "", suffix = "", duration = 2000 }: {
  end: number; prefix?: string; suffix?: string; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, started]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-white">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

function ProgressBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth((value / max) * 100), 200);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, max]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{label}</span>
        <span className="text-white font-bold text-sm">${value.toLocaleString()}</span>
      </div>
      <div className="progress-track h-2">
        <div
          className="progress-bar h-2"
          style={{
            width: `${width}%`,
            background: color,
            transition: "width 1.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

export default function Impact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child, i) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add("opacity-100", "translate-y-0");
              (child as HTMLElement).classList.remove("opacity-0", "translate-y-8");
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const budgetItems = [
    { label: "Computers & Hardware (15 Laptops)", value: 4500, color: "linear-gradient(90deg,#1a56db,#5145cd)" },
    { label: "Furniture & Setup", value: 1000, color: "linear-gradient(90deg,#7e3af2,#9061f9)" },
    { label: "Rent & Utility Deposits (6 months)", value: 1200, color: "linear-gradient(90deg,#0694a2,#06afd4)" },
    { label: "Internet, Software & Networking", value: 700, color: "linear-gradient(90deg,#057a55,#0e9f6e)" },
    { label: "Electricity Backup System", value: 900, color: "linear-gradient(90deg,#e3a008,#f59e0b)" },
    { label: "Marketing & Promotion", value: 200, color: "linear-gradient(90deg,#e02424,#f05252)" },
    { label: "Miscellaneous & Contingency", value: 500, color: "linear-gradient(90deg,#6b7280,#9ca3af)" },
  ];

  return (
    <section id="impact" className="relative py-32 bg-[#0a0a14] overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-30" />

      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-blue-600/8 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-purple-600/8 blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 reveal opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            Real Impact, Real Numbers
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            The Numbers That{" "}
            <span className="gradient-text">Tell Our Story</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every number below represents a real person, a real computer, or a real opportunity created by your generosity and our hard work.
          </p>
        </div>

        {/* Big stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: DollarSign, prefix: "$", end: 3500, suffix: "+", label: "Raised & Committed", color: "from-blue-500 to-blue-700", desc: "Toward the $9,000 goal" },
            { icon: Monitor, prefix: "", end: 15, suffix: "", label: "Laptops Funded", color: "from-purple-500 to-purple-700", desc: "For students in Jalalabad" },
            { icon: Users, prefix: "", end: 200, suffix: "+", label: "Students to Benefit", color: "from-teal-500 to-teal-700", desc: "First year enrollment target" },
            { icon: Clock, prefix: "", end: 18, suffix: " yrs", label: "Teaching Experience", color: "from-amber-500 to-amber-700", desc: "Our local partners since 2008" },
          ].map((stat, i) => (
            <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 glass rounded-2xl p-6 text-center card-hover border border-white/5">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <AnimatedNumber end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-gray-200 font-semibold mt-2 mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Two-column: fundraising progress + budget breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Fundraising progress */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 glass rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-2">Fundraising Progress</h3>
            <p className="text-gray-400 text-sm mb-8">Toward the $9,000 Computer Training Center in Jalalabad, Afghanistan</p>

            {/* Big progress ring */}
            <div className="flex items-center gap-8 mb-8">
              <div className="relative flex-shrink-0">
                <svg viewBox="0 0 120 120" className="w-32 h-32 -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                  <circle
                    cx="60" cy="60" r="50" fill="none"
                    stroke="url(#progressGrad)" strokeWidth="10"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - 3500 / 9000)}`}
                    strokeLinecap="round"
                    className="transition-all duration-2000"
                  />
                  <defs>
                    <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1a56db" />
                      <stop offset="100%" stopColor="#7e3af2" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white">39%</span>
                  <span className="text-gray-400 text-xs">Funded</span>
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-1">$3,500</div>
                <div className="text-gray-400 mb-4">of $9,000 goal</div>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Actively Fundraising
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Committed by Coding4Kidz", amount: 3500, pct: 39, color: "#1a56db" },
                { label: "Remaining to Raise", amount: 5500, pct: 61, color: "#374151" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <span className="text-gray-300 text-sm flex-1">{item.label}</span>
                  <span className="text-white font-bold text-sm">${item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budget breakdown */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 glass rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-2">Project Budget Breakdown</h3>
            <p className="text-gray-400 text-sm mb-8">Every dollar allocated with purpose and transparency</p>
            {budgetItems.map((item, i) => (
              <ProgressBar key={i} label={item.label} value={item.value} max={9000} color={item.color} />
            ))}
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between">
              <span className="text-gray-300 font-semibold">Total Project Cost</span>
              <span className="text-white font-black text-lg">$9,000</span>
            </div>
          </div>
        </div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              color: "from-blue-500 to-blue-700",
              title: "Skills Being Taught",
              items: ["Computer Hardware & Software", "Web Design (HTML, CSS, JavaScript)", "Networking & IT Infrastructure", "Digital Services & CCTV", "Video Editing & Photography", "Domain Registration & Hosting"],
            },
            {
              icon: Wifi,
              color: "from-purple-500 to-purple-700",
              title: "Services Offered to Community",
              items: ["Professional web development", "Digital marketing services", "Photography & video production", "CCTV installation & monitoring", "Computer repair & maintenance", "Technical consulting"],
            },
            {
              icon: Zap,
              color: "from-teal-500 to-teal-700",
              title: "Expected Outcomes",
              items: ["Self-sustaining within 4–6 months", "Multiple instructors employed", "200+ students trained annually", "Revenue reinvested in community", "Digital economy seed in Jalalabad", "Model replicable across Afghanistan"],
            },
          ].map((card, i) => (
            <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 glass rounded-2xl p-6 border border-white/5 card-hover">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-4">{card.title}</h4>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    {item}
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
