"use client";

import { useEffect, useRef } from "react";
import { Globe, Shield, Heart, ExternalLink } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) el.classList.add("visible"); },{threshold:0.1});
    obs.observe(el); return()=>obs.disconnect();
  },[]);
  return ref;
}

const partners=[
  {name:"Afghan Youth Connect (AYC)",short:"AYC",icon:"🇦🇫",gradient:"from-emerald-600 to-teal-600",
   role:"Primary Recipient Partner",since:"2025",
   desc:"Operating in Jalalabad since 2008, AYC has spent nearly two decades building computer education infrastructure. Our partnership supports their next chapter — an independent, self-sustaining training center.",
   tags:["Ground Partner","Education","Afghanistan"],
  },
  {name:"Rotary International District 5340",short:"Rotary",icon:"⚙️",gradient:"from-blue-600 to-indigo-600",
   role:"International Endorsement Partner",since:"2025",
   desc:"Led by Rotarian Fary Moini of the La Jolla Golden Triangle Rotary Club, District 5340 champions Afghan youth education. Their endorsement gives our project international credibility.",
   tags:["Rotary","International","Verified"],
   link:"https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing",
  },
  {name:"La Jolla Golden Triangle Rotary Club",short:"LJGT",icon:"🌟",gradient:"from-purple-600 to-pink-600",
   role:"Rotary Chapter Partner",since:"2025",
   desc:"A powerful local chapter that has already backed multiple technology business startups in Jalalabad, proving the effectiveness of this community-centered model.",
   tags:["Rotary","La Jolla","Startup Support"],
  },
  {name:"Del Mar Rotary Club",short:"DMR",icon:"🤝",gradient:"from-rose-600 to-orange-600",
   role:"Supporting Rotary Partner",since:"2025",
   desc:"Co-funding technology initiatives for Afghan youth alongside the La Jolla chapter, demonstrating broad community support for our shared mission.",
   tags:["Rotary","Del Mar","Co-Funder"],
  },
];

const trust=[
  {icon:Shield,title:"Fully Transparent",desc:"Every dollar raised is publicly accounted for with detailed allocation breakdowns."},
  {icon:Globe, title:"Internationally Verified",desc:"Our Afghan partner is vetted by Rotary International, one of the world's most respected service organizations."},
  {icon:Heart, title:"Human-Centered",desc:"Every project is designed to outlast our involvement — sustainability first, always."},
];

export default function Partners() {
  const r1=useReveal(); const r2=useReveal(); const r3=useReveal();
  return (
    <section id="partners" className="relative py-28 overflow-hidden" style={{background:"#050510"}}>
      <div className="absolute inset-0 hex-bg opacity-30"/>
      <div className="absolute top-0 left-0 right-0 h-px section-divider"/>
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-blue-600/5 blur-3xl"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={r1} className="text-center mb-20 reveal">
          <div className="chip mb-6"><Globe className="w-3.5 h-3.5 text-blue-400"/><span className="text-blue-300">Our Network</span></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Built on <span className="gradient-text">Trust & Partnership</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our impact is amplified by partnerships with established, internationally recognized organizations committed to the same mission.
          </p>
        </div>

        <div ref={r2} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 reveal">
          {partners.map((p,i)=>(
            <div key={i} className="group bg-[#0b0b1a] rounded-2xl border border-white/5 hover:border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sheen">
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>{p.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-black text-white text-base leading-tight">{p.name}</h3>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors flex-shrink-0">
                        <ExternalLink className="w-4 h-4"/>
                      </a>
                    )}
                  </div>
                  <div className="text-blue-400 text-xs font-semibold mt-0.5">{p.role}</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t,j)=>(
                  <span key={j} className="px-2.5 py-1 rounded-lg bg-white/4 border border-white/6 text-slate-400 text-xs font-medium">{t}</span>
                ))}
                <span className="ml-auto px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">Since {p.since}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div ref={r3} className="reveal">
          <div className="bg-[#0b0b1a] rounded-2xl border border-white/5 p-8 md:p-12">
            <h3 className="text-2xl font-black text-white text-center mb-10">Why You Can <span className="gradient-text">Trust Us</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trust.map((s,i)=>(
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <s.icon className="w-6 h-6 text-white"/>
                  </div>
                  <h4 className="font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AYC feature */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/5 relative">
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#0c0c22,#080c1a)"}}/>
          <div className="absolute inset-0 grid-bg opacity-10"/>
          <div className="relative px-8 md:px-14 py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mono mb-3">Featured Partner Story</div>
              <h3 className="text-2xl font-black text-white mb-3">Afghan Youth Connect: Teaching Tech Since 2008</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                For nearly two decades, the AYC team has been a beacon of technological education in Jalalabad — through political upheaval, economic hardship, and the challenges of a conflict-affected region. Our donation isn&apos;t charity. It&apos;s investment in a proven team.
              </p>
              <a href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group">
                Read the Full Rotary Story <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"/>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {[{l:"Years Operating",v:"18+"},{l:"Students Taught",v:"1,000s"},{l:"Tech Fields",v:"6+"},{l:"City",v:"Jalalabad"}].map((s,i)=>(
                <div key={i} className="bg-white/4 rounded-xl p-4 text-center border border-white/5">
                  <div className="text-2xl font-black text-white mb-0.5">{s.v}</div>
                  <div className="text-slate-400 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
