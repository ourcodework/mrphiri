import React from 'react'
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-training.jpg";

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="South African learners in a computer classroom"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              Accredited by Leading SETAs
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Accredited Skills Development & Learnership Programmes
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            Providing industry-aligned training solutions accredited by leading SETAs — empowering individuals and organisations across South Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <a href="#programmes">
              <button size="lg" className="text-base px-8 gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                View Programmes
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <a href="#contact">
              <button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export default HeroSection