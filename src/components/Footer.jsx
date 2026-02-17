import React from 'react'

function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">T</span>
              </div>
              <span className="font-heading font-bold text-background text-sm">TPLR Training</span>
            </div>
            <p className="text-sm text-background/60 italic">"We Serve With Pride"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-background text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Programmes", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background text-sm mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <span>info@tplrtraining.co.za</span>
              <span>+27 79 109 5458</span>
              <span>5086 Block B2 Mabopane Skills Centre</span>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} TPLR and Training Services (PTY) LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer