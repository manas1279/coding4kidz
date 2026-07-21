"use client";

import { ImageIcon } from "lucide-react";

interface PhotoPlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  dark?: boolean;
}

export default function PhotoPlaceholder({
  label,
  aspectRatio = "aspect-square",
  className = "",
  dark = false,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`
        ${aspectRatio} ${className} relative group
        rounded-2xl overflow-hidden
        flex flex-col items-center justify-center gap-3
        border-2 border-dashed transition-all duration-300
        ${dark
          ? "border-white/20 bg-white/5 hover:border-blue-400/50 hover:bg-white/8"
          : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50"
        }
      `}
    >
      <div className={`
        w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
        ${dark
          ? "bg-white/10 group-hover:bg-blue-500/20"
          : "bg-gray-200 group-hover:bg-blue-100"
        }
      `}>
        <ImageIcon className={`w-7 h-7 transition-colors duration-300 ${dark ? "text-white/30 group-hover:text-blue-400" : "text-gray-400 group-hover:text-blue-500"}`} />
      </div>
      <div className="text-center px-4">
        <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${dark ? "text-white/40 group-hover:text-blue-400" : "text-gray-400 group-hover:text-blue-500"}`}>
          Add Photo
        </p>
        <p className={`text-xs ${dark ? "text-white/25" : "text-gray-400"}`}>{label}</p>
      </div>
    </div>
  );
}
