import React, { useState } from 'react'
import tplrLogo from '../assets/tplr-logo.png'
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
//   { label: "Programmes", href: "#programmes" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#FFFFFF]">
            <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-[#1E673F]/20 group-hover:bg-[#1E673F]/30 transition-all duration-500 group-hover:scale-110 blur-sm" />
                        <img src={tplrLogo} alt="TPLR Logo" className="relative h-12 md:h-14 w-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="hidden sm:block">
                        <span className="font-heading font-bold text-[#18251F] text-sm leading-tight block tracking-wide">TPLR and Training Services <span className="text-[#1E673F]">(PTY) LTD</span></span>
                        <span className="text-[10px] text-[#E3AC33] tracking-[0.2em] uppercase font-semibold">We Serve With Pride</span>
                    </div>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[#678073] hover:text-[#1E673F] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    {/* <a href="tel:+27791095458">
                        <button size="sm" className="gap-2">
                            <Phone className="w-3.5 h-3.5" />
                            Call Us
                        </button>
                    </a> */}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-[#18251F]"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-card border-b border-border animate-fade-in">
                    <div className="container mx-auto py-4 flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-[#678073] hover:text-[#1E673F] py-2 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        {/* <a href="tel:+27791095458">
                            <button size="sm" className="w-full gap-2 mt-2">
                                <Phone className="w-3.5 h-3.5" />
                                Call Us
                            </button>
                        </a> */}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar