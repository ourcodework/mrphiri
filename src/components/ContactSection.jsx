import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "Message sent!",
            description: "We'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <section id="contact" className="section-padding bg-muted/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="text-sm font-medium text-accent uppercase tracking-widest">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
                        Contact Us
                    </h2>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
                    {/* Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">Email</p>
                                <a href="mailto:info@tplrtraining.co.za" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    info@tplrtraining.co.za
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">Phone</p>
                                <a href="tel:+27791095458" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    +27 79 109 5458
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">Address</p>
                                <p className="text-sm text-muted-foreground">5086 Block B2 Mabopane Skills Centre, South Africa</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                maxLength={100}
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                maxLength={255}
                            />
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            maxLength={20}
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            maxLength={1000}
                        />
                        <button type="submit" size="lg" className="gap-2 w-full sm:w-auto">
                            <Send className="w-4 h-4" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection