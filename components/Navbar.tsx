"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#mission",  label: "Mission"     },
  { href: "#impact",   label: "Impact"      },
  { href: "#project",  label: "Our Project" },
  { href: "#team",     label: "Team"        },
  { href: "#gallery",  label: "Gallery"     },
  { href: "#partners", label: "Partners"    },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm" : "bg-white"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-[#0f172a] flex items-center justify-center">
              <span className="text-white text-xs font-black">C4</span>
            </div>
            <span className="text-[#0f172a] font-bold text-base tracking-tight">Coding4Kidz</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="text-[#64748b] hover:text-[#0f172a] text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#donate" className="btn-primary text-sm py-2 px-4">
              Support Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)}
            className="md:hidden text-[#64748b] hover:text-[#0f172a] transition-colors p-1">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e2e8f0] px-4 py-4">
          <div className="flex flex-col gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-[#64748b] hover:text-[#0f172a] py-2.5 text-sm font-medium border-b border-[#f1f5f9] last:border-0">
                {l.label}
              </a>
            ))}
            <a href="#donate" onClick={() => setOpen(false)}
              className="btn-primary mt-3 justify-center">
              Support Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
