"use client";

import { useEffect, useRef } from "react";
import { MapPin, CheckCircle2, ArrowRight, Quote, Building2, Laptop, GraduationCap } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const timeline = [
  { phase: "Week 1–2", title: "Secure the Space", desc: "Identify and sign a lease for the training center location in Jalalabad, accessible to students.", icon: Building2, color: "bg-blue-600" },
  { phase: "Week 2–5", title: "Purchase & Install Equipment", desc: "Source 15 second-hand laptops, LCD screens, furniture, networking equipment, and UPS backup systems from local markets.", icon: Laptop, color: "bg-purple-600" },
  { phase: "Week 4", title: "Enroll First Students", desc: "Leverage existing relationships with the AYC community to begin enrollment for the inaugural cohort.", icon: GraduationCap, color: "bg-teal-600" },
  { phase: "Week 4–6", title: "Begin Classes & Services", desc: "Launch computer software, hardware, networking, and web design classes. Offer paid digital services to the broader community.", icon: CheckCircle2, color: "bg-green-600" },
];

export default function AfghanProject() {
  const headerRef = useReveal();
  const quoteRef = useReveal();

  return (
    <section id="project" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Decorative gradient top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            Jalalabad, Nangarhar, Afghanistan
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Our Flagship Project:<br />
            <span className="gradient-text">The AYC Computer Training Center</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In partnership with Afghan Youth Connect and Rotary International District 5340, Coding4Kidz is helping fund a revolutionary computer training and digital services center that will serve hundreds of students in Jalalabad — and become self-sustaining within months.
          </p>
        </div>

        {/* Photo grid + stats */}
        <div className="mb-20">
          {/* Photo placeholders row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <PhotoPlaceholder label="Training center exterior" aspectRatio="aspect-video" className="col-span-2" />
            <div className="flex flex-col gap-4">
              <PhotoPlaceholder label="Classroom & computers" aspectRatio="aspect-square" />
              <PhotoPlaceholder label="Students learning" aspectRatio="aspect-square" />
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] to-blue-950" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute top-6 left-8 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-sm font-medium">Active Project</span>
            </div>
            <div className="absolute top-6 right-8 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <MapPin className="w-3 h-3 text-blue-400" />
              <span className="text-white text-sm font-medium">Jalalabad, Afghanistan</span>
            </div>
            <div className="relative px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
              {[
                { label: "Center Capacity", value: "15", unit: "Computers", color: "text-blue-400" },
                { label: "Coding4Kidz Contribution", value: "$3,500", unit: "of $9,000", color: "text-purple-400" },
                { label: "Years of Teaching Expertise", value: "18+", unit: "Years (since 2008)", color: "text-teal-400" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-white font-semibold text-lg">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Letter / Quote section */}
        <div ref={quoteRef} className="mb-20 opacity-0 translate-y-8 transition-all duration-700">
          <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="absolute top-6 left-8">
              <Quote className="w-10 h-10 text-blue-200" />
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic mb-8 pt-6">
                &ldquo;We are truly grateful and excited to hear about your commitment of approximately{" "}
                <strong className="text-blue-700 not-italic">$3,500 toward the Computer Training and Digital Services Center</strong>.
                This is a major step toward making this project a reality and creating long-term opportunities for both education and livelihoods in our community.
                Your support means much more than financial assistance.{" "}
                <strong className="text-gray-900 not-italic">It creates hope and opens a path for sustainability and future growth.</strong>&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-blue-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  AYC
                </div>
                <div>
                  <div className="font-bold text-gray-900">Afghan Youth Connect Team</div>
                  <div className="text-gray-500 text-sm">Sabawoon & Safiullah · Jalalabad, Nangarhar, Afghanistan</div>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Partner
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About the trainers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Meet the <span className="gradient-text">Educators</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Sabawoon and Safiullah</strong> are two dedicated computer science educators from Jalalabad who have been teaching through the Afghan Youth Connect (AYC) program since 2008. With nearly two decades of experience teaching computer software, hardware, networking, web design, and digital skills, they are the ideal candidates to lead this new center.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As the AYC program prepares to transition funding in May 2026, this computer training center will allow Sabawoon and Safiullah to continue their life-changing work — now as independent business owners serving their community directly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The center is designed to be more than just a classroom. It will offer <strong>paid digital services</strong> to the community — including web development, domain registration, video editing, photography, and CCTV solutions — generating revenue to sustain operations and create additional employment for other skilled AYC team members.
            </p>

            {/* Educator photo placeholders */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <PhotoPlaceholder label="Sabawoon · Lead Trainer" aspectRatio="aspect-square" />
              <PhotoPlaceholder label="Safiullah · Lead Trainer" aspectRatio="aspect-square" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Teaching Since", value: "2008" },
                { label: "Location", value: "Jalalabad, NAN" },
                { label: "Specializations", value: "6+ Fields" },
                { label: "Self-Sustaining By", value: "Month 6" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-gray-900 font-bold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Implementation <span className="gradient-text">Timeline</span>
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 timeline-line rounded-full" />

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-6 group">
                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.phase}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What recognition we get */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0a0a14] via-blue-950 to-[#0a0a14] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Our Partnership Commitment
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              The Afghan Youth Connect team has committed to recognizing Coding4Kidz in all project materials, signage, and reports — while providing weekly and monthly updates including photographs, implementation progress, and activity reports.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "📸", label: "Weekly photo updates" },
                { icon: "📊", label: "Monthly activity reports" },
                { icon: "🏷️", label: "Signage recognition" },
                { icon: "📝", label: "Implementation tracking" },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-gray-300 text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://rotary5340.org/Stories/afgan-youth-connect-for-boys-is-in-jeopardy-of-closing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Read the Rotary District 5340 Story
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
