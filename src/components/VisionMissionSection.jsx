import React from 'react'
import { Eye, Target } from "lucide-react";

function VisionMissionSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <div className="p-8 md:p-10 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To offer differentiated learning & development products and services that add value to our clients. To build long-term partnerships by delivering quality work in the most cost-effective manner.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 md:p-10 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Our Mission</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              We provide quality, cost-effective training designed to enhance individual and organisational productivity, while fostering development, diversity, and growth opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection