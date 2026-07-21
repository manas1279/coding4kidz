"use client";

import { useEffect, useRef } from "react";
import { Code2, Heart, Trophy, Star, Users, Lightbulb, ArrowUpRight } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) el.classList.add("visible"); },{threshold:0.1});
    obs.observe(el); return()=>obs.disconnect();
  },[]);
  return ref;
}

const achievements=[
  {icon:Trophy,  text:"Founded nonprofit while maintaining high academic standing",color:"text-amber-400"},
  {icon:Heart,   text:"Raised $3,500+ through community fundraising and outreach", color:"text-rose-400"},
  {icon:Code2,   text:"Personally built and maintain Coding4Kidz digital presence", color:"text-blue-400"},
  {icon:Users,   text:"Coordinated with international organizations across 3 countries",color:"text-purple-400"},
  {icon:Star,    text:"Secured verified partnership with Rotary International",      color:"text-cyan-400"},
  {icon:Lightbulb,text:"Designed a self-sustaining model for long-term impact",      color:"text-emerald-400"},
];

const founders=[
  {
    name:"Manas Goel",
    role:"Co-Founder & Co-President",
    bio:"Manas spearheads fundraising strategy, donor outreach, and international partnerships. From cold-emailing organizations to personally presenting to community groups, he's been the driving force behind Coding4Kidz's financial growth.",
    skills:["Fundraising Strategy","Partnership Development","Community Outreach","Project Management"],
    gradient:"from-blue-600 to-indigo-600",
    accent:"border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10",
    tag:"Founder",
    photoLabel:"Manas Goel · Co-President",
  },
  {
    name:"Kush Shah",
    role:"Co-Founder & Co-President",
    bio:"Kush manages organizational structure, vets partner organizations, tracks impact metrics, and ensures every dollar is deployed effectively. His commitment to transparency has built lasting trust with donors and partners worldwide.",
    skills:["Operations Management","Impact Assessment","Partner Vetting","Strategic Planning"],
    gradient:"from-purple-600 to-cyan-600",
    accent:"border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/10",
    tag:"Founder",
    photoLabel:"Kush Shah · Co-President",
  },
];

export default function Team() {
  const r1=useReveal(); const r2=useReveal(); const r3=useReveal();
  return (
    <section id="team" className="relative py-28 overflow-hidden" style={{background:"#050510"}}>
      <div className="absolute inset-0 dots-bg opacity-20"/>
      <div className="absolute top-0 left-0 right-0 h-px section-divider"/>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-purple-600/6 blur-3xl"/>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-blue-600/6 blur-3xl"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={r1} className="text-center mb-20 reveal">
          <div className="chip mb-6"><Users className="w-3.5 h-3.5 text-purple-400"/><span className="text-purple-300">The Founders</span></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Meet the <span className="gradient-text">Co-Presidents</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Two high school students who decided youth is not a limitation — it&apos;s a superpower. Built Coding4Kidz from nothing into a global force for digital equity.
          </p>
        </div>

        {/* Founder cards */}
        <div ref={r2} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto reveal">
          {founders.map((p,i)=>(
            <div key={i} className={`group relative bg-[#0b0b1a] rounded-2xl border transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl sheen ${p.accent}`}>
              {/* Top gradient bar */}
              <div className={`h-0.5 w-full rounded-t-2xl bg-gradient-to-r ${p.gradient}`}/>

              <div className="p-8">
                {/* Photo + badge */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative flex-shrink-0">
                    <PhotoPlaceholder label={p.photoLabel} aspectRatio="" className="w-24 h-24 rounded-2xl" dark/>
                    <div className={`absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-md bg-gradient-to-r ${p.gradient} text-white text-xs font-bold shadow-lg`}>
                      {p.tag}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-xl font-black text-white mb-0.5">{p.name}</h3>
                    <p className="text-slate-400 text-xs font-medium mb-2">{p.role}</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                      <span className="text-emerald-400 text-xs font-semibold">High School Student</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0"/>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.bio}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.skills.map((s,j)=>(
                    <span key={j} className="px-2.5 py-1 rounded-lg bg-white/4 border border-white/8 text-slate-300 text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div ref={r3} className="reveal">
          <h3 className="text-2xl font-black text-white text-center mb-10">
            What We&apos;ve <span className="gradient-text">Accomplished</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {achievements.map((a,i)=>(
              <div key={i} className="flex items-start gap-4 bg-[#0b0b1a] rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 sheen">
                <div className={`flex-shrink-0 mt-0.5 ${a.color}`}><a.icon className="w-4 h-4"/></div>
                <p className="text-slate-300 text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 border border-white/5"/>
          <div className="relative p-10 md:p-16 text-center">
            <div className="text-5xl text-blue-500/15 font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-xl md:text-2xl font-bold text-white italic leading-relaxed max-w-3xl mx-auto">
              We didn&apos;t have millions or years of experience. We had a computer, an internet connection, and an unwillingness to accept that geography should determine destiny.
            </p>
            <div className="text-5xl text-blue-500/15 font-serif leading-none mt-4">&rdquo;</div>
            <p className="text-slate-500 mt-6 text-sm font-medium mono">Manas Goel & Kush Shah · Coding4Kidz · Class of 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
