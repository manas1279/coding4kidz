"use client";

import { useEffect, useRef } from "react";
import { Heart, DollarSign, Globe, Zap, CheckCircle2, ArrowRight, Mail } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) el.classList.add("visible"); },{threshold:0.1});
    obs.observe(el); return()=>obs.disconnect();
  },[]);
  return ref;
}

const tiers=[
  {amount:25, label:"Supporter",  desc:"Covers networking cables and accessories for the computer lab.",                                          icon:Heart,   color:"from-blue-500 to-blue-700"},
  {amount:100,label:"Champion",   desc:"Funds critical software installations and a month of internet access.",                                    icon:Zap,     color:"from-purple-500 to-purple-700",hot:true},
  {amount:300,label:"Pathfinder", desc:"Contributes toward one refurbished laptop — direct access to digital education for a student.",            icon:Globe,   color:"from-cyan-500 to-cyan-700"},
  {amount:1000,label:"Visionary", desc:"Funds a full computer station (laptop + desk + chair) and three months of electricity backup.",            icon:DollarSign,color:"from-amber-500 to-amber-700"},
];

const breakdown=[
  {a:"$20",  w:"Networking cables and accessories"},
  {a:"$50",  w:"One month of high-speed internet"},
  {a:"$100", w:"Software for the entire lab"},
  {a:"$150", w:"A student chair and desk setup"},
  {a:"$300", w:"One refurbished laptop"},
  {a:"$900", w:"Complete UPS electricity backup system"},
  {a:"$1,200",w:"Six months of rent for the center"},
  {a:"$4,500",w:"All 15 student laptops"},
  {a:"$9,000",w:"Fully funds the entire Computer Training Center"},
];

export default function Donate() {
  const r1=useReveal(); const r2=useReveal(); const r3=useReveal();
  return (
    <section id="donate" className="relative py-28 overflow-hidden" style={{background:"#030309"}}>
      <div className="absolute inset-0 grid-bg opacity-20"/>
      <div className="absolute top-0 left-0 right-0 h-px section-divider"/>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/6 blur-3xl"/>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/6 blur-3xl"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={r1} className="text-center mb-16 reveal">
          <div className="chip mb-6"><Heart className="w-3.5 h-3.5 text-rose-400"/><span className="text-rose-300">Make a Difference</span></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Help Us Reach <span className="gradient-text">$9,000</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We&apos;ve committed $3,500. We need $5,500 more to fully fund the Computer Training Center in Jalalabad. Every dollar goes directly to hardware, infrastructure, and education.
          </p>
        </div>

        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-400">Raised: <strong className="text-white">$3,500</strong></span>
            <span className="text-slate-400">Goal: <strong className="text-white">$9,000</strong></span>
          </div>
          <div className="h-3 bg-white/5 rounded-full overflow-hidden relative">
            <div className="h-full rounded-full relative overflow-hidden" style={{width:"39%",background:"linear-gradient(90deg,#3b82f6,#a855f7)",boxShadow:"0 0 20px rgba(59,130,246,0.5)"}}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{backgroundSize:"200%"}}/>
            </div>
          </div>
          <div className="text-center mt-2 text-slate-500 text-xs mono">39% funded · $5,500 remaining</div>
        </div>

        {/* Tiers */}
        <div ref={r2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 reveal">
          {tiers.map((t,i)=>(
            <div key={i} className={`relative group bg-[#0b0b1a] rounded-2xl border transition-all duration-300 hover:-translate-y-2 sheen ${t.hot?"border-purple-500/30 shadow-lg shadow-purple-500/10 scale-[1.02]":"border-white/5 hover:border-white/10"}`}>
              {t.hot&&<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold shadow-lg">Most Popular</div>}
              <div className="p-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <t.icon className="w-5 h-5 text-white"/>
                </div>
                <div className="text-3xl font-black text-white mb-0.5">${t.amount}</div>
                <div className="text-slate-300 font-semibold text-sm mb-3">{t.label}</div>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{t.desc}</p>
                <button className="w-full py-2.5 rounded-xl border border-white/8 text-slate-300 text-xs font-semibold hover:bg-white/5 hover:text-white hover:border-white/16 transition-all">
                  Donate ${t.amount}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* What it buys */}
        <div ref={r3} className="bg-[#0b0b1a] rounded-2xl border border-white/5 p-8 md:p-12 mb-16 reveal">
          <h3 className="text-xl font-black text-white text-center mb-8">
            What Your Donation <span className="gradient-text">Actually Buys</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {breakdown.map((item,i)=>(
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"/>
                <div className="text-sm">
                  <strong className="text-white mono">{item.a}</strong>
                  <span className="text-slate-400"> → {item.w}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 mb-6 text-sm">Want to make a custom contribution or discuss a larger partnership?</p>
          <a href="mailto:coding4kidz@gmail.com"
            className="btn-neon inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-base shadow-2xl">
            <span><Mail className="w-4 h-4 inline mr-1"/>Get in Touch</span>
            <ArrowRight className="w-4 h-4 relative z-10"/>
          </a>
          <p className="text-slate-600 text-xs mt-4 mono">coding4kidz@gmail.com · We respond within 24 hours</p>
        </div>
      </div>
    </section>
  );
}
