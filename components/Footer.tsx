import { Code2, Heart, Globe, Mail, ExternalLink } from "lucide-react";

const scrollingTags = [
  "Coding4Kidz","Afghan Youth Connect","Rotary District 5340","Jalalabad Computer Center",
  "Manas Goel","Kush Shah","15 Laptops Funded","$3,500 Raised","Digital Equity","Tech for All",
  "High School Founders","Student Nonprofit","Computer Education","La Jolla Rotary","Del Mar Rotary",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden" style={{background:"#020208"}}>
      <div className="absolute inset-0 dots-bg opacity-8"/>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"/>

      {/* Scrolling tag strip */}
      <div className="py-4 border-b border-white/5 overflow-hidden">
        <div className="flex gap-8 scroll-strip">
          {[...scrollingTags,...scrollingTags].map((t,i)=>(
            <span key={i} className="text-slate-600 text-xs font-medium whitespace-nowrap mono">· {t}</span>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <Code2 className="w-4 h-4 text-white"/>
              </div>
              <span className="text-white font-black text-xl">Coding<span className="gradient-text">4Kidz</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              A student-led nonprofit bridging the digital divide through technology education and community-driven computer labs worldwide.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Mail className="w-4 h-4 text-blue-500"/>
              <a href="mailto:coding4kidz@gmail.com" className="hover:text-blue-400 transition-colors">coding4kidz@gmail.com</a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-2.5">
              {[["#mission","Our Mission"],["#impact","Impact & Numbers"],["#project","Afghanistan Project"],["#team","Meet the Team"],["#gallery","Gallery"],["#partners","Our Partners"],["#donate","Support Us"]].map(([h,l])=>(
                <li key={h}><a href={h} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Partners</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing"
                  target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors flex items-center gap-1.5 group">
                  Rotary District 5340 <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"/>
                </a>
              </li>
              {["Afghan Youth Connect","La Jolla GT Rotary","Del Mar Rotary"].map(n=>(
                <li key={n}><span className="text-slate-600 text-sm">{n}</span></li>
              ))}
            </ul>
            <div className="mt-7">
              <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-widest">Location</h4>
              <div className="flex items-start gap-2 text-slate-500 text-sm">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500"/>
                <div><div>United States</div><div className="text-slate-600">→ Jalalabad, Afghanistan</div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8"/>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-xs mono">© 2025 Coding4Kidz. All rights reserved. Student-led nonprofit.</div>
          <div className="flex items-center gap-1.5 text-slate-600 text-xs">
            Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500"/> by Manas & Kush — two high schoolers who refused to wait.
          </div>
        </div>
      </div>
    </footer>
  );
}
