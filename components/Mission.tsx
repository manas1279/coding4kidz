"use client";

import { useEffect, useRef } from "react";
import { Target, Lightbulb, Users, TrendingUp, Award, BookOpen } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const values = [
  {
    icon: Target,
    title: "Clear Mission",
    desc: "We identify communities with limited access to technology and direct our fundraising efforts to create lasting impact through education.",
    color: "from-blue-500 to-blue-700",
    glow: "group-hover:shadow-blue-500/30",
  },
  {
    icon: Lightbulb,
    title: "Student-Driven Innovation",
    desc: "As high schoolers ourselves, we understand the transformative power of technology education. We fundraise, organize, and execute — all while managing school.",
    color: "from-purple-500 to-purple-700",
    glow: "group-hover:shadow-purple-500/30",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Every dollar we raise goes directly to building infrastructure that empowers communities to grow their own technology ecosystems sustainably.",
    color: "from-teal-500 to-teal-700",
    glow: "group-hover:shadow-teal-500/30",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    desc: "We track every donation, every student enrolled, and every skill learned. Transparency isn't optional — it's our standard.",
    color: "from-indigo-500 to-indigo-700",
    glow: "group-hover:shadow-indigo-500/30",
  },
  {
    icon: Award,
    title: "Verified Partnerships",
    desc: "We partner with established organizations like Afghan Youth Connect and Rotary International to ensure funds reach their intended recipients.",
    color: "from-rose-500 to-rose-700",
    glow: "group-hover:shadow-rose-500/30",
  },
  {
    icon: BookOpen,
    title: "Education as Liberation",
    desc: "We believe computer literacy is a fundamental right. In a digital world, those without tech skills are left behind — we're changing that.",
    color: "from-amber-500 to-amber-700",
    glow: "group-hover:shadow-amber-500/30",
  },
];

export default function Mission() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="mission" className="relative py-32 bg-white overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#0a0a14]" style={{ clipPath: "ellipse(60% 100% at 50% 0%)" }} />

      <div className="absolute inset-0 dots-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            Our Mission
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Why We Built{" "}
            <span className="gradient-text">Coding4Kidz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Two high school students. One powerful belief: <strong>technology education can change the trajectory of a life.</strong> We built this nonprofit because we've seen firsthand how access to coding and computer skills opens doors that stay firmly shut otherwise.
          </p>
        </div>

        {/* Large statement */}
        <div className="relative mb-20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-blue-950 to-[#0a0a14]" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative px-8 md:px-16 py-16 text-center">
            <blockquote className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
              &ldquo;We aren&apos;t waiting to graduate to make a difference.
              <span className="gradient-text"> We&apos;re doing it now.</span>&rdquo;
            </blockquote>
            <p className="text-gray-400 mt-6 text-lg">— Coding4Kidz Co-Presidents</p>
          </div>
        </div>

        {/* Values grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          {values.map((v, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl p-8 border border-gray-100 card-hover shadow-sm hover:shadow-xl ${v.glow} transition-all duration-300`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <v.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-24">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-16">
            How <span className="gradient-text">We Work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: "01", title: "Identify Need", desc: "We research and identify communities with the greatest need for computer education and the infrastructure to support it." },
              { step: "02", title: "Fundraise", desc: "Through events, online campaigns, and community outreach, we raise funds from generous donors who share our vision." },
              { step: "03", title: "Vet Partners", desc: "We work only with established, vetted organizations on the ground who can deploy resources effectively and transparently." },
              { step: "04", title: "Measure Impact", desc: "We track enrollment numbers, report back to donors, and document every student whose life is changed by access to technology." },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center px-6">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-xl mb-5 shadow-xl">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
