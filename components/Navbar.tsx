"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#impact", label: "Impact" },
  { href: "#project", label: "Afghanistan Project" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#partners", label: "Partners" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a14]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(26,86,219,0.6)] transition-all duration-300">
                <Code2 className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Coding<span className="gradient-text">4Kidz</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#donate"
              className="btn-primary px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
            >
              <span>Support Us</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a14]/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white py-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setIsOpen(false)}
            className="block btn-primary px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center mt-4"
          >
            <span>Support Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
