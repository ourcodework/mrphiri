import React from 'react'
import { Award, Users, Building2, BookOpen } from "lucide-react";

const stats = [
  { icon: Building2, value: "50+", label: "Companies Capacitated" },
  { icon: Award, value: "20+", label: "Years Experience" },
  { icon: Users, value: "Multiple", label: "SETA Accreditations" },
  { icon: BookOpen, value: "100+", label: "Programmes Delivered" },
];

function AboutSection() {
  return (
    <section id="about" className="h-full sm:h-screen sm:p-0 flex justify-center items-center py-16 px-4 bg-[#F9FBF9]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-[#E3AC33] uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#18251F] mt-3 mb-6">
            Building Skills, Transforming Lives
          </h2>
          <p className="text-[#678073] leading-relaxed">
            TPLR and Training Services cc was established in 2002 and converted to TPLR and Training Services (PTY) LTD in 2009. We provide accredited training courses aligned with SAQA unit standards across multiple Sector Education and Training Authorities (SETAs).
          </p>
          <p className="text-[#678073] leading-relaxed mt-4">
            We serve employed and unemployed individuals, emerging farmers, youth, women, and people with disabilities. Our management team brings extensive experience across horticulture, agriculture, Human Resources Management, Energy and Water, Local Government, Clothing Manufacturing, Construction, and Manufacturing.
          </p>
          <p className="text-[#678073] leading-relaxed mt-4">
            TPLR Training has capacitated approximately 50 companies and is accredited with multiple SETAs. We utilise experienced facilitators, assessors, and moderators registered and recognised by SETAs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-[#E4F0E9]/50 border border-[#DCE7E0] hover:border-[#1E673F]/30 transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-[#1E673F] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-heading font-bold text-[#18251F]">{stat.value}</div>
              <div className="text-sm text-[#678073] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection