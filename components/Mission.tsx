"use client";

import { useEffect, useRef } from "react";
import { Target, Lightbulb, Users, TrendingUp, Award, BookOpen, ArrowRight } from "lucide-react";

function useReveal(cls="reveal") {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const obs = new IntersectionObserver(([e])=>{
      if(e.isIntersecting) el.classList.add("visible");
    },{threshold:0.1});
    obs.observe(el); return ()=>obs.disconnect();
  },[cls]);
  return ref;
}

const values = [
  { icon:Target,    title:"Clear Mission",        desc:"We identify communities with limited tech access and deploy fundraising to create lasting impact through education.",             color:"from-blue-500 to-blue-700",   glow:"hover:shadow-blue-500/20"  },
  { icon:Lightbulb, title:"Student-Driven",        desc:"As high schoolers ourselves, we understand technology's transformative power. We fundraise, organize, and execute — all while managing school.", color:"from-purple-500 to-purple-700",glow:"hover:shadow-purple-500/20"},
  { icon:Users,     title:"Community First",       desc:"Every dollar we raise goes directly to infrastructure that empowers communities to grow their own tech ecosystems sustainably.", color:"from-cyan-500 to-cyan-700",   glow:"hover:shadow-cyan-500/20"  },
  { icon:TrendingUp,title:"Measurable Impact",     desc:"We track every donation, every student enrolled, every skill learned. Transparency isn't optional — it's our standard.",       color:"from-indigo-500 to-indigo-700",glow:"hover:shadow-indigo-500/20"},
  { icon:Award,     title:"Verified Partnerships", desc:"We partner with Afghan Youth Connect and Rotary International to ensure funds reach their intended recipients every time.",      color:"from-rose-500 to-rose-700",   glow:"hover:shadow-rose-500/20"  },
  { icon:BookOpen,  title:"Tech as Liberation",    desc:"Computer literacy is a fundamental right. In a digital world, those without tech skills are left behind — we're changing that.", color:"from-amber-500 to-amber-700", glow:"hover:shadow-amber-500/20" },
];

const steps = [
  { n:"01", title:"Identify Need",   desc:"Research communities with the greatest gap in computer education and the infrastructure to support growth." },
  { n:"02", title:"Fundraise",       desc:"Through events, campaigns, and community outreach, we raise funds from donors who share our vision." },
  { n:"03", title:"Vet Partners",    desc:"We work only with established, vetted organizations on the ground who can deploy resources transparently." },
  { n:"04", title:"Measure Impact",  desc:"Track enrollment, report to donors, and document every student whose life is changed by digital access." },
];

export default function Mission() {
  const h = useReveal(); const g = useReveal(); const s = useReveal();
  return (
    <section id="mission" className="relative py-28 overflow-hidden" style={{background:"#030309"}}>
      <div className="absolute inset-0 hex-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={h} className="text-center mb-20 reveal">
          <div className="chip mb-6">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-300">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Why We Built{" "}
            <span className="gradient-text">Coding4Kidz</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Two high school students with one powerful belief:{" "}
            <span className="text-white font-semibold">technology education changes the trajectory of a life.</span>{" "}
            We built this nonprofit because we've seen what access to coding and computers can unlock.
          </p>
        </div>

        {/* Big quote bento */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-white/5">
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#0c0c22 0%,#0f0a1e 50%,#080c1a 100%)"}} />
          <div className="absolute inset-0 grid-bg opacity-20" />
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl" />
          <div className="relative px-8 md:px-16 py-16 text-center">
            <div className="text-7xl text-blue-500/15 font-serif leading-none mb-2">&ldquo;</div>
            <blockquote className="text-2xl md:text-4xl font-black text-white leading-tight max-w-4xl mx-auto">
              We aren&apos;t waiting to graduate to make a difference.{" "}
              <span className="gradient-text">We&apos;re doing it now.</span>
            </blockquote>
            <p className="text-slate-500 mt-6 text-sm font-medium mono">— Manas Goel & Kush Shah · Coding4Kidz Co-Presidents</p>
          </div>
        </div>

        {/* Values grid */}
        <div ref={g} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 reveal">
          {values.map((v,i)=>(
            <div
              key={i}
              className={`group relative bg-[#0b0b1a] rounded-2xl p-7 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl ${v.glow} sheen`}
              style={{transitionDelay:`${i*40}ms`}}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <v.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div ref={s} className="reveal">
          <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-14">
            How <span className="gradient-text">We Work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30" />
            {steps.map((step,i)=>(
              <div key={i} className="relative flex flex-col items-center text-center px-6 mb-8 md:mb-0">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-lg mb-5 shadow-xl glow-blue">
                  {step.n}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length-1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 w-5 h-5 text-slate-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
