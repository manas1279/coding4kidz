"use client";

import { useEffect, useRef } from "react";
import { Camera } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{ if(e.isIntersecting) el.classList.add("visible"); },{threshold:0.05});
    obs.observe(el); return()=>obs.disconnect();
  },[]);
  return ref;
}

const categories=[
  {
    title:"Fundraising Events",
    accent:"text-blue-400",
    badge:"border-blue-500/20 bg-blue-500/5",
    photos:[
      {label:"Event — full crowd",    wide:true},
      {label:"Manas & Kush at event", wide:false},
      {label:"Donation collection",   wide:false},
      {label:"Event setup",           wide:false},
      {label:"Community donating",    wide:false},
      {label:"Team celebration",      wide:false},
    ],
  },
  {
    title:"Our Work in Action",
    accent:"text-purple-400",
    badge:"border-purple-500/20 bg-purple-500/5",
    photos:[
      {label:"Partner meeting / call",         wide:false},
      {label:"Outreach materials",             wide:false},
      {label:"Presenting to community",        wide:true},
      {label:"Manas & Kush planning session",  wide:false},
      {label:"Donation confirmation screenshot",wide:false},
    ],
  },
  {
    title:"Afghanistan Project Updates",
    accent:"text-emerald-400",
    badge:"border-emerald-500/20 bg-emerald-500/5",
    photos:[
      {label:"Center location / space",   wide:true},
      {label:"Equipment delivery",        wide:false},
      {label:"Laptops being set up",      wide:false},
      {label:"First students enrolled",   wide:false},
      {label:"Coding4Kidz signage",       wide:false},
    ],
  },
];

export default function Gallery() {
  const r1=useReveal();
  return (
    <section id="gallery" className="relative py-28 overflow-hidden" style={{background:"#030309"}}>
      <div className="absolute inset-0 dots-bg opacity-20"/>
      <div className="absolute top-0 left-0 right-0 h-px section-divider"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={r1} className="text-center mb-20 reveal">
          <div className="chip mb-6"><Camera className="w-3.5 h-3.5 text-blue-400"/><span className="text-blue-300">Our Work in Photos</span></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Documenting Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every photo tells the story of students, communities, and two high schoolers who refused to wait. Drop your photos in to bring this to life.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat,ci)=>{
            const ref=useRef<HTMLDivElement>(null); // eslint-disable-line
            return (
              <div key={ci}>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className={`text-xl font-black text-white`}>{cat.title}</h3>
                  <span className={`chip border ${cat.badge} ${cat.accent}`}>{cat.photos.length} slots</span>
                  <div className="flex-1 h-px bg-white/5"/>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {cat.photos.map((p,pi)=>(
                    <PhotoPlaceholder key={pi} label={p.label}
                      aspectRatio={p.wide?"aspect-video":"aspect-square"}
                      className={p.wide?"col-span-2":""}
                      dark/>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-white/5 bg-[#0b0b1a] p-8 md:p-12 text-center">
          <Camera className="w-10 h-10 text-blue-500 mx-auto mb-4 opacity-60"/>
          <h3 className="text-xl font-black text-white mb-3">Replace These With Your Real Photos</h3>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            Each placeholder is a frame ready for real images — fundraising events, partner meetings, Afghanistan updates, and moments that prove what Coding4Kidz is building.
          </p>
        </div>
      </div>
    </section>
  );
}
