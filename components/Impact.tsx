"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Users, DollarSign, Globe, BookOpen, Wifi, Zap, Clock } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) el.classList.add("visible"); },{threshold:0.1});
    obs.observe(el); return()=>obs.disconnect();
  },[]);
  return ref;
}

function Num({prefix="",end,suffix="",dur=1800}:{prefix?:string;end:number;suffix?:string;dur?:number}) {
  const [n,setN]=useState(0); const [go,setGo]=useState(false); const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) setGo(true); },{threshold:.4});
    if(ref.current) obs.observe(ref.current); return()=>obs.disconnect();
  },[]);
  useEffect(()=>{
    if(!go) return;
    const s=performance.now();
    const t=(now:number)=>{ const p=Math.min((now-s)/dur,1); setN(Math.floor((1-Math.pow(1-p,4))*end)); if(p<1) requestAnimationFrame(t); else setN(end); };
    requestAnimationFrame(t);
  },[go,end,dur]);
  return <div ref={ref} className="text-4xl md:text-5xl font-black text-white">{prefix}{n.toLocaleString()}{suffix}</div>;
}

function Bar({label,value,max,color}:{label:string;value:number;max:number;color:string}) {
  const [w,setW]=useState(0); const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) setTimeout(()=>setW((value/max)*100),300); },{threshold:.4});
    if(ref.current) obs.observe(ref.current); return()=>obs.disconnect();
  },[value,max]);
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-xs font-medium">{label}</span>
        <span className="text-white font-bold text-xs mono">${value.toLocaleString()}</span>
      </div>
      <div className="progress-track h-1.5">
        <div className="progress-fill" style={{width:`${w}%`,background:color}} />
      </div>
    </div>
  );
}

export default function Impact() {
  const r1=useReveal(); const r2=useReveal(); const r3=useReveal();
  const budget=[
    {label:"Computers & Hardware — 15 Laptops",value:4500,color:"linear-gradient(90deg,#3b82f6,#6366f1)"},
    {label:"Furniture & Setup",value:1000,color:"linear-gradient(90deg,#a855f7,#ec4899)"},
    {label:"Rent & Deposits — 6 Months",value:1200,color:"linear-gradient(90deg,#06b6d4,#3b82f6)"},
    {label:"Internet, Software & Networking",value:700,color:"linear-gradient(90deg,#10b981,#06b6d4)"},
    {label:"Electricity Backup System (UPS)",value:900,color:"linear-gradient(90deg,#f59e0b,#ef4444)"},
    {label:"Marketing & Signage",value:200,color:"linear-gradient(90deg,#ef4444,#ec4899)"},
    {label:"Miscellaneous & Contingency",value:500,color:"linear-gradient(90deg,#64748b,#94a3b8)"},
  ];
  const cards=[
    {icon:BookOpen,color:"from-blue-500 to-blue-700",title:"Skills Being Taught",
     items:["Computer Hardware & Software","Web Design (HTML/CSS/JS)","Networking & IT Infrastructure","Digital Services & CCTV","Video Editing & Photography","Domain Registration & Hosting"]},
    {icon:Wifi,color:"from-purple-500 to-purple-700",title:"Community Services",
     items:["Professional web development","Digital marketing & design","Photography & video production","CCTV installation & support","Computer repair & maintenance","Technical consulting"]},
    {icon:Zap,color:"from-cyan-500 to-cyan-700",title:"Expected Outcomes",
     items:["Self-sustaining within 4–6 months","Multiple instructors employed","200+ students trained annually","Revenue reinvested in community","Digital economy seed in Jalalabad","Replicable model across Afghanistan"]},
  ];
  return (
    <section id="impact" className="relative py-28 overflow-hidden" style={{background:"#050510"}}>
      <div className="absolute inset-0 dots-bg opacity-25" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-blue-600/6 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-purple-600/6 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={r1} className="text-center mb-20 reveal">
          <div className="chip mb-6"><Globe className="w-3.5 h-3.5 text-cyan-400"/><span className="text-cyan-300">Real Impact, Real Numbers</span></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            The Numbers That <span className="gradient-text">Tell Our Story</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Every number represents a real person, a real computer, or a real opportunity created.</p>
        </div>

        {/* Big stat bento */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {[
            {icon:DollarSign,prefix:"$",end:3500,suffix:"+",label:"Raised & Committed",sub:"Toward the $9,000 goal",color:"from-blue-600 to-blue-800",glow:"glow-blue"},
            {icon:Monitor,prefix:"",end:15,suffix:"",label:"Laptops Funded",sub:"For students in Jalalabad",color:"from-purple-600 to-purple-800",glow:"glow-purple"},
            {icon:Users,prefix:"",end:200,suffix:"+",label:"Students to Benefit",sub:"First year enrollment",color:"from-cyan-600 to-cyan-800",glow:"glow-cyan"},
            {icon:Clock,prefix:"",end:18,suffix:"yrs",label:"Partner Experience",sub:"AYC teaching since 2008",color:"from-amber-600 to-amber-800",glow:""},
          ].map((s,i)=>(
            <div key={i} className={`group relative bg-[#0b0b1a] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sheen`}>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <Num prefix={s.prefix} end={s.end} suffix={s.suffix} />
              <div className="text-slate-200 font-semibold text-sm mt-1 mb-0.5">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Two-col: progress + budget */}
        <div ref={r2} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 reveal">
          {/* Fundraising ring */}
          <div className="bg-[#0b0b1a] rounded-2xl p-8 border border-white/5">
            <h3 className="text-lg font-bold text-white mb-1">Fundraising Progress</h3>
            <p className="text-slate-400 text-xs mb-8">Toward the $9,000 Computer Training Center in Jalalabad</p>
            <div className="flex items-center gap-8 mb-8">
              <div className="relative flex-shrink-0 animate-glow-pulse" style={{borderRadius:"50%"}}>
                <svg viewBox="0 0 120 120" className="w-28 h-28 -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="9"/>
                  <circle cx="60" cy="60" r="50" fill="none" stroke="url(#pg)" strokeWidth="9"
                    strokeDasharray={`${2*Math.PI*50}`} strokeDashoffset={`${2*Math.PI*50*(1-3500/9000)}`}
                    strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6"/>
                      <stop offset="100%" stopColor="#a855f7"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white">39%</span>
                  <span className="text-slate-400 text-xs">Funded</span>
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-0.5">$3,500</div>
                <div className="text-slate-400 text-sm mb-3">of $9,000 goal</div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                  Actively Fundraising
                </div>
              </div>
            </div>
            {[{label:"Committed by Coding4Kidz",amt:3500,c:"#3b82f6"},{label:"Remaining to Raise",amt:5500,c:"#1f2937"}].map((item,i)=>(
              <div key={i} className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{background:item.c}}/>
                <span className="text-slate-300 text-sm flex-1">{item.label}</span>
                <span className="text-white font-bold text-sm mono">${item.amt.toLocaleString()}</span>
              </div>
            ))}
          </div>

          {/* Budget breakdown */}
          <div className="bg-[#0b0b1a] rounded-2xl p-8 border border-white/5">
            <h3 className="text-lg font-bold text-white mb-1">Budget Breakdown</h3>
            <p className="text-slate-400 text-xs mb-8">Every dollar allocated with full transparency</p>
            {budget.map((b,i)=><Bar key={i} {...b} max={9000}/>)}
            <div className="mt-5 pt-5 border-t border-white/5 flex justify-between">
              <span className="text-slate-300 font-medium text-sm">Total</span>
              <span className="text-white font-black mono">$9,000</span>
            </div>
          </div>
        </div>

        {/* Impact cards */}
        <div ref={r3} className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {cards.map((c,i)=>(
            <div key={i} className="bg-[#0b0b1a] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 sheen group">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <c.icon className="w-5 h-5 text-white"/>
              </div>
              <h4 className="font-bold text-white mb-4 text-sm">{c.title}</h4>
              <ul className="space-y-2">
                {c.items.map((item,j)=>(
                  <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                    <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"/>
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
