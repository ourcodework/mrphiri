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
        <div className="absolute inset-0 bg-[#1E673F]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#FFFFFF]/30 bg-[#FFFFFF]/10 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-[#FFFFFF]/90 text-sm font-medium tracking-wide">
              Accredited by Leading SETAs
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-6">
            Accredited Skills Development & Learnership Programmes
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 max-w-2xl mx-auto mb-10" >
            Providing industry-aligned training solutions accredited by leading SETAs — empowering individuals and organisations across South Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a href="#programmes">
              <button size="lg" className="w-[240px] h-[50px] flex justify-center items-center gap-4 text-base px-8 gap-2 bg-[#E3AC33] text-black hover:bg-accent/90">
                View Programmes
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
            <a href="#contact">
              <button size="lg" variant="outline" className="w-[180px] h-[50px] text-base px-8 border-[#FFFFFF]/40 text-[#FFFFFF] hover:bg-[#FFFFFF]/10">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F9FBF9] to-transparent" />
    </section>
  )
}

export default HeroSection