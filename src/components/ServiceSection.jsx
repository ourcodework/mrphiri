import React from 'react'
import { GraduationCap, BookOpen, ShieldCheck, Award } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Accredited Learnerships",
    description: "Nationally recognised learnership programmes that combine theory and practical workplace experience.",
  },
  {
    icon: BookOpen,
    title: "Skills Development",
    description: "Targeted skills programmes designed to close competency gaps and improve workforce productivity.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Training",
    description: "Health & Safety, First Aid, and regulatory compliance training to ensure workplace standards.",
  },
  {
    icon: Award,
    title: "SETA-Aligned Qualifications",
    description: "Qualifications aligned with SAQA unit standards and accredited by leading Sector Education Authorities.",
  },
];

function ServiceSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection