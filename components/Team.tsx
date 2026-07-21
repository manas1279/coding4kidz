"use client";

import { useEffect, useRef } from "react";
import { Code2, Heart, Trophy, Star, Users, Lightbulb } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

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

const achievements = [
  { icon: Trophy, text: "Founded nonprofit while maintaining high academic standing", color: "text-amber-500" },
  { icon: Heart, text: "Raised $3,500+ through community fundraising and outreach", color: "text-rose-500" },
  { icon: Code2, text: "Personally built and maintain Coding4Kidz digital presence", color: "text-blue-500" },
  { icon: Users, text: "Coordinated with international organizations across 3 countries", color: "text-purple-500" },
  { icon: Star, text: "Secured verified partnership with Rotary International", color: "text-teal-500" },
  { icon: Lightbulb, text: "Designed a self-sustaining model for long-term impact", color: "text-green-500" },
];

const founders = [
  {
    name: "Manas Goel",
    role: "Co-Founder & Co-President",
    bio: "A passionate advocate for technology education, Manas spearheads fundraising strategy, donor outreach, and international partnerships. From cold-emailing organizations to personally presenting to community groups, he has been the driving force behind Coding4Kidz's financial growth and global reach.",
    skills: ["Fundraising Strategy", "Partnership Development", "Community Outreach", "Project Management"],
    gradient: "from-blue-600 to-purple-600",
    bgGlow: "from-blue-500/20 to-purple-500/20",
    photoLabel: "Manas Goel · Co-President",
  },
  {
    name: "Kush Shah",
    role: "Co-Founder & Co-President",
    bio: "The operational engine behind Coding4Kidz, Kush manages organizational structure, vets partner organizations, tracks impact metrics, and ensures every dollar is deployed effectively. His attention to detail and commitment to transparency has built lasting trust with donors and partners alike.",
    skills: ["Operations Management", "Impact Assessment", "Partner Vetting", "Strategic Planning"],
    gradient: "from-purple-600 to-teal-600",
    bgGlow: "from-purple-500/20 to-teal-500/20",
    photoLabel: "Kush Shah · Co-President",
  },
];

export default function Team() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <section id="team" className="relative py-32 bg-[#0a0a14] overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-purple-600/8 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-blue-600/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={ref1} className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            The Founders
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Meet the <span className="gradient-text">Co-Presidents</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Two high school students who decided that youth is not a limitation — it&apos;s a superpower. We built Coding4Kidz from nothing and turned it into a global force for digital equity.
          </p>
        </div>

        {/* Co-president cards */}
        <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 opacity-0 translate-y-8 transition-all duration-700 max-w-4xl mx-auto">
          {founders.map((person, i) => (
            <div key={i} className="relative group">
              {/* Glow background */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${person.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative glass rounded-3xl p-8 border border-white/5 card-hover">
                {/* Photo placeholder */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <PhotoPlaceholder
                    label={person.photoLabel}
                    aspectRatio=""
                    className="w-32 h-32 rounded-2xl"
                    dark
                  />
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-black text-white mb-1">{person.name}</h3>
                  <p className="text-gray-400 text-sm font-medium">{person.role}</p>
                  <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/20 text-blue-300 text-xs font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    High School Student
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed text-center mb-6">
                  {person.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {person.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shared achievements */}
        <div ref={ref3} className="opacity-0 translate-y-8 transition-all duration-700">
          <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-10">
            What We&apos;ve <span className="gradient-text">Accomplished</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <div key={i} className="flex items-start gap-4 glass rounded-xl p-5 border border-white/5 card-hover">
                <div className={`flex-shrink-0 ${a.color}`}>
                  <a.icon className="w-5 h-5 mt-0.5" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote / philosophy */}
        <div className="mt-20 text-center">
          <div className="relative inline-block max-w-3xl">
            <div className="text-6xl text-blue-500/20 font-serif absolute -top-4 -left-4">&ldquo;</div>
            <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed px-8">
              We didn&apos;t have millions or years of experience. We had a computer, an internet connection, and an unwillingness to accept that geography should determine destiny.
            </p>
            <div className="text-6xl text-blue-500/20 font-serif absolute -bottom-8 -right-4">&rdquo;</div>
          </div>
          <p className="text-gray-500 mt-8 font-medium">Manas Goel & Kush Shah · Coding4Kidz Co-Presidents</p>
        </div>
      </div>
    </section>
  );
}
