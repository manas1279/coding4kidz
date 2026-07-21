import { Heart, Globe, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-[#0f172a] font-black text-sm">C4</span>
              </div>
              <span className="text-white font-black text-xl">Coding4Kidz</span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 max-w-xs">
              A student-led nonprofit bridging the digital divide through technology education and community-driven computer labs worldwide.
            </p>
            <a href="mailto:coding4kidz@gmail.com"
              className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors">
              <Mail className="w-4 h-4" /> coding4kidz@gmail.com
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                ["#mission",  "Our Mission"],
                ["#impact",   "Impact & Numbers"],
                ["#project",  "Afghanistan Project"],
                ["#team",     "Meet the Team"],
                ["#gallery",  "Gallery"],
                ["#partners", "Our Partners"],
                ["#donate",   "Support Us"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[#94a3b8] hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners & Location */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Partners</h4>
            <ul className="space-y-2.5 mb-7">
              <li>
                <a href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#94a3b8] hover:text-white text-sm transition-colors group">
                  Rotary District 5340 <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              {["Afghan Youth Connect", "La Jolla GT Rotary", "Del Mar Rotary"].map(n => (
                <li key={n}><span className="text-[#64748b] text-sm">{n}</span></li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-widest">Location</h4>
            <div className="flex items-start gap-2 text-[#94a3b8] text-sm">
              <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <div>United States</div>
                <div className="text-[#64748b]">→ Jalalabad, Afghanistan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748b] text-xs">© 2025 Coding4Kidz. All rights reserved. Student-led nonprofit.</p>
          <div className="flex items-center gap-1.5 text-[#64748b] text-xs">
            Built with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> by Manas & Kush — two high schoolers who refused to wait.
          </div>
        </div>
      </div>
    </footer>
  );
}
