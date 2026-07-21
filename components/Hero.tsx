"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";

/* ── Particle canvas ── */
function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#3b82f6","#a855f7","#06b6d4","#ec4899"];
    const pts = Array.from({length:90}, () => ({
      x: Math.random()*c.width, y: Math.random()*c.height,
      vx:(Math.random()-.5)*.35, vy:(Math.random()-.5)*.35,
      r:Math.random()*1.5+.5,
      col:colors[Math.floor(Math.random()*colors.length)],
      a:Math.random()*.5+.1,
    }));

    let id:number;
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height);
      pts.forEach((p,i) => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=c.width; if(p.x>c.width)p.x=0;
        if(p.y<0)p.y=c.height; if(p.y>c.height)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=p.col; ctx.globalAlpha=p.a; ctx.fill();
        for(let j=i+1;j<pts.length;j++){
          const d=Math.hypot(p.x-pts[j].x,p.y-pts[j].y);
          if(d<110){ ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(pts[j].x,pts[j].y);
            ctx.strokeStyle=p.col; ctx.globalAlpha=(1-d/110)*.12; ctx.lineWidth=.6; ctx.stroke(); }
        }
        ctx.globalAlpha=1;
      });
      id=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{ cancelAnimationFrame(id); window.removeEventListener("resize",resize); };
  },[]);
  return <canvas ref={ref} className="absolute inset-0 pointer-events-none" />;
}

/* ── Typewriter ── */
function Typewriter({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(word.slice(0, displayed.length+1));
        if (displayed.length+1 === word.length) setTimeout(()=>setDeleting(true), 1800);
      } else {
        setDisplayed(word.slice(0, displayed.length-1));
        if (displayed.length-1 === 0) { setDeleting(false); setIdx((idx+1)%words.length); }
      }
    }, speed);
    return ()=>clearTimeout(timer);
  },[displayed, deleting, idx, words]);
  return (
    <span className="gradient-text-cyber">
      {displayed}<span className="animate-blink">|</span>
    </span>
  );
}

/* ── Stat counter ── */
function Stat({ prefix="", end, suffix="", label }: {prefix?:string;end:number;suffix?:string;label:string}) {
  const [n, setN] = useState(0);
  const [go, setGo] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting) setGo(true); },{threshold:.5});
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  },[]);
  useEffect(()=>{
    if(!go) return;
    const dur=1600; const start=performance.now();
    const tick=(now:number)=>{
      const p=Math.min((now-start)/dur,1);
      setN(Math.floor((1-Math.pow(1-p,4))*end));
      if(p<1) requestAnimationFrame(tick); else setN(end);
    };
    requestAnimationFrame(tick);
  },[go,end]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
        {prefix}{n.toLocaleString()}{suffix}
      </div>
      <div className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{background:"#030309"}}>
      <ParticleField />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-[140px] pointer-events-none" />

      {/* Perspective grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] perspective-grid overflow-hidden pointer-events-none">
        <div className="perspective-plane w-full h-[200%]" />
      </div>

      {/* Scanline sweep */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-scan pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 w-full">
        <div className="text-center">

          {/* Status chip */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold mb-10 mono uppercase tracking-widest animate-fadeInUp">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            STUDENT-LED NONPROFIT · FOUNDED 2025 · ACTIVE
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tight mb-6 animate-fadeInUp" style={{animationDelay:"0.1s",opacity:0}}>
            <span className="block">Bridging the</span>
            <span className="block gradient-text text-glow-blue">Digital Divide</span>
            <span className="block text-slate-300 text-4xl md:text-5xl lg:text-6xl font-bold mt-2">One Child at a Time</span>
          </h1>

          {/* Typewriter sub */}
          <p className="text-xl md:text-2xl text-slate-400 mb-4 animate-fadeInUp" style={{animationDelay:"0.2s",opacity:0}}>
            We are two high schoolers building a world where{" "}
          </p>
          <div className="text-2xl md:text-3xl font-bold mb-12 animate-fadeInUp" style={{animationDelay:"0.25s",opacity:0}}>
            <Typewriter words={[
              "every kid can code.",
              "ZIP codes don't limit destinies.",
              "Afghanistan gets its computer labs.",
              "students change the world.",
              "technology education is universal.",
            ]} />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fadeInUp" style={{animationDelay:"0.35s",opacity:0}}>
            <a href="#project" className="btn-neon px-8 py-4 rounded-full text-white font-bold text-base flex items-center justify-center gap-2 shadow-2xl">
              <span>See Our Impact</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </a>
            <a href="#donate" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-base flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Support the Mission
            </a>
          </div>

          {/* Stats strip */}
          <div className="animate-fadeInUp" style={{animationDelay:"0.45s",opacity:0}}>
            <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
              {[
                {prefix:"$",end:3500,suffix:"+",label:"Raised & Donated"},
                {prefix:"",end:15,suffix:"",label:"Computers Funded"},
                {prefix:"",end:200,suffix:"+",label:"Students Impacted"},
                {prefix:"$",end:9000,suffix:"",label:"Total Project Value"},
              ].map((s,i)=>(
                <div key={i} className="px-8 py-6 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                  <Stat {...s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030309] to-transparent pointer-events-none" />
    </section>
  );
}
