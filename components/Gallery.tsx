"use client";

import { useEffect, useRef } from "react";
import { Camera } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

function useReveal() {
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const categories = [
  {
    title: "Fundraising Events",
    desc: "Photos from our community fundraisers, bake sales, donation drives, and events.",
    photos: [
      { label: "Fundraising event — full crowd", wide: true },
      { label: "Manas & Kush at event" },
      { label: "Donation collection booth" },
      { label: "Event setup & decorations" },
      { label: "Community members donating" },
      { label: "Team celebration photo" },
    ],
  },
  {
    title: "Our Work in Action",
    desc: "Behind the scenes: reaching out to partners, organizing campaigns, and doing the work.",
    photos: [
      { label: "Partner meeting / video call" },
      { label: "Working on outreach materials" },
      { label: "Presenting to the community" },
      { label: "Manas & Kush planning session", wide: true },
      { label: "Email / donation confirmation" },
    ],
  },
  {
    title: "Afghanistan Project Updates",
    desc: "Progress photos and updates sent by our partners at Afghan Youth Connect.",
    photos: [
      { label: "Center location / space", wide: true },
      { label: "Equipment delivery" },
      { label: "Laptops being set up" },
      { label: "First students enrolled" },
      { label: "Coding4Kidz signage at center" },
    ],
  },
];

export default function Gallery() {
  const ref1 = useReveal();

  return (
    <section id="gallery" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref1} className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
            <Camera className="w-4 h-4" />
            Our Work in Photos
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Documenting Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every photo tells the story of students, communities, and two high schoolers who refused to wait. Photos coming soon — add yours below.
          </p>
        </div>

        {/* Category blocks */}
        <div className="space-y-20">
          {categories.map((cat, ci) => (
            <div key={ci}>
              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">{cat.title}</h3>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </div>
                <span className="flex-shrink-0 text-xs font-bold text-gray-400 border border-gray-200 rounded-full px-3 py-1 mt-1">
                  {cat.photos.length} photos
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cat.photos.map((photo, pi) => (
                  <PhotoPlaceholder
                    key={pi}
                    label={photo.label}
                    aspectRatio={photo.wide ? "aspect-video" : "aspect-square"}
                    className={photo.wide ? "col-span-2" : ""}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 p-8 md:p-12 text-center">
          <Camera className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-black text-gray-900 mb-3">
            Replace These With Your Real Photos
          </h3>
          <p className="text-gray-600 max-w-lg mx-auto text-sm leading-relaxed">
            Every placeholder above is a frame ready for your real images — fundraising events, partner meetings, project updates from Afghanistan, and moments that show the world what Coding4Kidz is doing. Just swap the images in and these placeholders disappear.
          </p>
        </div>
      </div>
    </section>
  );
}
