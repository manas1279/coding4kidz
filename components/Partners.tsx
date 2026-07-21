"use client";

import { useEffect, useRef } from "react";
import { Globe, Shield, Heart, ExternalLink } from "lucide-react";

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

const partners = [
  {
    name: "Afghan Youth Connect (AYC)",
    short: "AYC",
    description: "Operating in Jalalabad since 2008, AYC has spent nearly two decades building computer education infrastructure for Afghan youth. Our partnership supports their next chapter: an independent, self-sustaining training center.",
    role: "Primary Recipient Partner",
    since: "2024",
    icon: "🇦🇫",
    gradient: "from-green-600 to-teal-600",
    tags: ["Ground Partner", "Education", "Afghanistan"],
  },
  {
    name: "Rotary International District 5340",
    short: "Rotary",
    description: "Led by Rotarian Fary Moini of the La Jolla Golden Triangle Rotary Club, District 5340 has been a champion for Afghan youth education. Their endorsement and involvement gives our project international credibility and additional funding momentum.",
    role: "International Endorsement Partner",
    since: "2024",
    icon: "⚙️",
    gradient: "from-blue-600 to-indigo-600",
    tags: ["Rotary", "International", "Verified"],
    link: "https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing",
  },
  {
    name: "La Jolla Golden Triangle Rotary Club",
    short: "LJGT",
    description: "A powerful local chapter championing global impact, the La Jolla Golden Triangle Rotary Club has backed multiple technology business startups in Jalalabad. Their track record validates the effectiveness of this model.",
    role: "Rotary Chapter Partner",
    since: "2024",
    icon: "🌟",
    gradient: "from-purple-600 to-pink-600",
    tags: ["Rotary", "La Jolla", "Startup Support"],
  },
  {
    name: "Del Mar Rotary Club",
    short: "DMR",
    description: "Partnering with the La Jolla chapter, the Del Mar Rotary Club has co-funded technology initiatives for Afghan youth, demonstrating broad community support for this mission beyond a single organization.",
    role: "Supporting Rotary Partner",
    since: "2024",
    icon: "🤝",
    gradient: "from-rose-600 to-orange-600",
    tags: ["Rotary", "Del Mar", "Co-Funder"],
  },
];

const trustSignals = [
  { icon: Shield, title: "Fully Transparent", desc: "Every dollar raised is publicly accounted for with detailed allocation breakdowns." },
  { icon: Globe, title: "Internationally Verified", desc: "Our Afghan partner has been vetted by Rotary International, one of the world's most respected service organizations." },
  { icon: Heart, title: "Human-Centered", desc: "We prioritize long-term sustainability over short-term metrics — every project is designed to outlast our involvement." },
];

export default function Partners() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <section id="partners" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref1} className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" />
            Our Network
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Built on <span className="gradient-text">Trust & Partnership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don&apos;t work alone. Our impact is amplified by partnerships with established, internationally recognized organizations committed to the same mission.
          </p>
        </div>

        {/* Partner cards */}
        <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 opacity-0 translate-y-8 transition-all duration-700">
          {partners.map((partner, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-gray-100 p-8 card-hover shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${partner.gradient} flex items-center justify-center text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {partner.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-black text-gray-900 text-lg leading-tight">{partner.name}</h3>
                    {partner.link && (
                      <a href={partner.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-gray-400 hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="text-blue-600 text-sm font-semibold mt-0.5">{partner.role}</div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">{partner.description}</p>

              <div className="flex flex-wrap gap-2">
                {partner.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                    {tag}
                  </span>
                ))}
                <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-100 ml-auto">
                  Partner since {partner.since}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div ref={ref3} className="opacity-0 translate-y-8 transition-all duration-700">
          <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-10">
              Why You Can <span className="gradient-text">Trust Us</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustSignals.map((signal, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <signal.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{signal.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{signal.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AYC Special Feature */}
        <div className="mt-12 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] to-blue-950" />
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="relative px-8 md:px-16 py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <div className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Featured Partner Story</div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Afghan Youth Connect: Teaching Tech Since 2008
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  For nearly two decades, the AYC team has been a beacon of technological education in Jalalabad. Through political upheaval, economic hardship, and the challenges of operating in conflict-affected regions, they have never stopped teaching. Our donation is not charity — it&apos;s investment in an already-proven team and model.
                </p>
                <a
                  href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
                >
                  Read the Full Story on Rotary District 5340
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                {[
                  { label: "Years Operating", value: "18+" },
                  { label: "Students Taught", value: "1,000s" },
                  { label: "Tech Fields", value: "6+" },
                  { label: "City", value: "Jalalabad" },
                ].map((stat, i) => (
                  <div key={i} className="glass rounded-xl p-4 text-center border border-white/5">
                    <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
