"use client";

import { useEffect, useRef } from "react";
import { MapPin, CheckCircle2, ArrowRight, Quote, Building2, Laptop, GraduationCap } from "lucide-react";
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

const timeline=[
  {phase:"Week 1–2", title:"Secure the Space",          desc:"Identify and lease the training center in Jalalabad, accessible to students.",                                                             icon:Building2,  c:"bg-blue-600"},
  {phase:"Week 2–5", title:"Purchase & Install",          desc:"Source 15 laptops, LCD screens, furniture, networking gear, and UPS systems from local markets.",                                        icon:Laptop,     c:"bg-purple-600"},
  {phase:"Week 4",   title:"Enroll First Students",       desc:"Leverage AYC community relationships to begin enrollment for the inaugural cohort.",                                                      icon:GraduationCap,c:"bg-cyan-600"},
  {phase:"Week 4–6", title:"Launch Classes & Services",   desc:"Start software, hardware, networking, and web design classes. Offer paid digital services to the broader community.",                    icon:CheckCircle2,c:"bg-emerald-600"},
];

export default function AfghanProject() {
  const h=useReveal(); const q=useReveal(); const t=useReveal();
  return (
    <section id="project" className="relative py-28 overflow-hidden" style={{background:"#030309"}}>
      <div className="absolute inset-0 grid-bg opacity-20"/>
      <div className="absolute top-0 left-0 right-0 h-px section-divider"/>
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-blue-600/6 blur-3xl"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={h} className="text-center mb-16 reveal">
          <div className="chip mb-6">
            <MapPin className="w-3.5 h-3.5 text-emerald-400"/>
            <span className="text-emerald-300">Jalalabad, Nangarhar, Afghanistan</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Our Flagship Project:<br/>
            <span className="gradient-text">The AYC Computer Training Center</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            In partnership with Afghan Youth Connect and Rotary International District 5340, Coding4Kidz is helping fund a computer training and digital services center that will serve hundreds in Jalalabad — and become self-sustaining within months.
          </p>
        </div>

        {/* Photo grid */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          <PhotoPlaceholder label="Training center exterior" aspectRatio="aspect-video" className="col-span-2" dark/>
          <div className="flex flex-col gap-3">
            <PhotoPlaceholder label="Classroom & computers" aspectRatio="" className="flex-1 min-h-[140px]" dark/>
            <PhotoPlaceholder label="Students learning" aspectRatio="" className="flex-1 min-h-[140px]" dark/>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative rounded-2xl overflow-hidden mb-16 border border-white/5">
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#0c0c22,#080c1a)"}}/>
          <div className="absolute inset-0 grid-bg opacity-10"/>
          <div className="absolute top-5 left-6 flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
            <span className="text-white text-xs font-medium">Active Project</span>
          </div>
          <div className="absolute top-5 right-6 flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
            <MapPin className="w-3 h-3 text-blue-400"/>
            <span className="text-white text-xs font-medium">Jalalabad, Afghanistan</span>
          </div>
          <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {[
              {label:"Center Capacity",value:"15",unit:"Computers",c:"text-blue-400"},
              {label:"Coding4Kidz Contribution",value:"$3,500",unit:"of $9,000 goal",c:"text-purple-400"},
              {label:"Partner Teaching Experience",value:"18+",unit:"Years since 2008",c:"text-cyan-400"},
            ].map((s,i)=>(
              <div key={i} className="text-center">
                <div className={`text-5xl md:text-6xl font-black ${s.c} mb-1`}>{s.value}</div>
                <div className="text-white font-semibold">{s.label}</div>
                <div className="text-slate-400 text-sm">{s.unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner letter */}
        <div ref={q} className="mb-16 reveal">
          <div className="relative bg-[#0b0b1a] rounded-2xl p-8 md:p-12 border border-white/5">
            <div className="absolute top-6 left-8"><Quote className="w-10 h-10 text-blue-500/20"/></div>
            <div className="max-w-4xl mx-auto pt-4">
              <p className="text-slate-300 text-lg leading-relaxed italic mb-8">
                &ldquo;We are truly grateful and excited about your commitment of approximately{" "}
                <strong className="text-blue-400 not-italic">$3,500 toward the Computer Training and Digital Services Center</strong>.
                This is a major step toward making this project a reality and creating long-term opportunities for both education and livelihoods in our community.
                Your support means much more than financial assistance.{" "}
                <strong className="text-white not-italic">It creates hope and opens a path for sustainability and future growth.</strong>&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">AYC</div>
                <div>
                  <div className="font-bold text-white">Afghan Youth Connect</div>
                  <div className="text-slate-400 text-sm">Sabawoon & Safiullah · Jalalabad, Nangarhar, Afghanistan</div>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-1.5 text-emerald-400 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4"/><span>Verified Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educators + timeline */}
        <div ref={t} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 reveal">
          <div>
            <h3 className="text-2xl font-black text-white mb-6">Meet the <span className="gradient-text">Educators</span></h3>
            <p className="text-slate-400 leading-relaxed mb-4 text-sm">
              <strong className="text-white">Sabawoon and Safiullah</strong> are dedicated CS educators from Jalalabad who have taught through the Afghan Youth Connect program since 2008. With nearly two decades of experience in software, hardware, networking, and web design, they are the ideal candidates to lead this new center as independent business owners.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm">
              The center will offer <strong className="text-white">paid digital services</strong> — web dev, photography, video editing, CCTV — generating revenue to sustain operations and employ other skilled AYC members.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <PhotoPlaceholder label="Sabawoon · Lead Trainer" aspectRatio="aspect-square" dark/>
              <PhotoPlaceholder label="Safiullah · Lead Trainer" aspectRatio="aspect-square" dark/>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{label:"Teaching Since",value:"2008"},{label:"Location",value:"Jalalabad"},{label:"Specializations",value:"6+ Fields"},{label:"Self-Sustaining By",value:"Month 6"}].map((item,i)=>(
                <div key={i} className="bg-[#0b0b1a] rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-white font-bold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white mb-6">Implementation <span className="gradient-text">Timeline</span></h3>
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-0.5 timeline-line rounded-full"/>
              <div className="space-y-6">
                {timeline.map((item,i)=>(
                  <div key={i} className="relative flex gap-5 group">
                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full ${item.c} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5 text-white"/>
                    </div>
                    <div className="flex-1 pb-1">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mono">{item.phase}</span>
                      <h4 className="font-bold text-white mt-0.5 mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Commitment block */}
        <div className="rounded-2xl bg-[#0b0b1a] border border-white/5 p-8 md:p-12 text-center">
          <h3 className="text-xl font-black text-white mb-3">Our Partnership Commitment</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm">
            AYC will recognize Coding4Kidz in all project materials and signage while providing weekly photo updates, monthly activity reports, and full implementation tracking.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[{e:"📸",l:"Weekly photo updates"},{e:"📊",l:"Monthly reports"},{e:"🏷️",l:"Signage recognition"},{e:"📝",l:"Implementation tracking"}].map((item,i)=>(
              <div key={i} className="bg-white/3 rounded-xl p-4 border border-white/5">
                <div className="text-2xl mb-1.5">{item.e}</div>
                <div className="text-slate-300 text-xs font-medium">{item.l}</div>
              </div>
            ))}
          </div>
          <a href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
            Read the Rotary District 5340 Story <ArrowRight className="w-4 h-4"/>
          </a>
        </div>
      </div>
    </section>
  );
}
