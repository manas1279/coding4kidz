"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "#mission",  label: "Mission"    },
  { href: "#impact",   label: "Impact"     },
  { href: "#project",  label: "Afghanistan"},
  { href: "#team",     label: "Team"       },
  { href: "#gallery",  label: "Gallery"    },
  { href: "#partners", label: "Partners"   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>24);
    window.addEventListener("scroll",h); return()=>window.removeEventListener("scroll",h);
  },[]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled?"bg-[#030309]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50":""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-black text-lg tracking-tight">
              Coding<span className="gradient-text">4Kidz</span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l=>(
              <a key={l.href} href={l.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"/>
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#donate" className="btn-neon px-5 py-2 rounded-full text-white text-sm font-bold">
              <span>Support Us</span>
            </a>
          </div>

          <button onClick={()=>setOpen(!open)} className="md:hidden text-slate-400 hover:text-white transition-colors">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open?"max-h-96 opacity-100":"max-h-0 opacity-0"}`}>
        <div className="bg-[#030309]/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-3">
          {links.map(l=>(
            <a key={l.href} href={l.href} onClick={()=>setOpen(false)}
              className="block text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#donate" onClick={()=>setOpen(false)} className="block btn-neon px-5 py-2.5 rounded-full text-white text-sm font-bold text-center mt-4">
            <span>Support Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
