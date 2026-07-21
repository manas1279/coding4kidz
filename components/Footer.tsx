import { Code2, Heart, Globe, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#06060f] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                Coding<span className="gradient-text">4Kidz</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              A student-led nonprofit bridging the digital divide through technology education and community-driven computer labs worldwide.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:coding4kidz@gmail.com" className="hover:text-blue-400 transition-colors">
                coding4kidz@gmail.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: "#mission", label: "Our Mission" },
                { href: "#impact", label: "Impact & Numbers" },
                { href: "#project", label: "Afghanistan Project" },
                { href: "#team", label: "Meet the Team" },
                { href: "#partners", label: "Our Partners" },
                { href: "#donate", label: "Support Us" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Partners</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors flex items-center gap-1.5 group"
                >
                  Rotary District 5340
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="text-gray-500 text-sm">Afghan Youth Connect</li>
              <li className="text-gray-500 text-sm">La Jolla GT Rotary Club</li>
              <li className="text-gray-500 text-sm">Del Mar Rotary Club</li>
            </ul>

            <div className="mt-8">
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-widest">Location</h4>
              <div className="flex items-start gap-2 text-gray-500 text-sm">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
                <div>
                  <div>United States</div>
                  <div>→ Jalalabad, Afghanistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-sm">
            © 2024 Coding4Kidz. All rights reserved. Student-led nonprofit.
          </div>
          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            Built with
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            by two high schoolers who refused to wait.
          </div>
        </div>
      </div>
    </footer>
  );
}
