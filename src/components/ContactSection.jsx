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
        <section id="contact" className="min-h-screen flex justify-center items-center section-padding bg-[#F0F5F0]/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="text-sm font-medium text-[#F0F5F0] uppercase tracking-widest">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#18251F] mt-3">
                        Contact Us
                    </h2>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
                    {/* Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#1E673F]/10 flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5 text-[#1E673F]" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#18251F]">Email</p>
                                <a href="mailto:info@tplrtraining.co.za" className="text-sm text-[#F0F5F0]-[#18251F] hover:text-[#1E673F] transition-colors">
                                    info@tplrtraining.co.za
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#1E673F]/10 flex items-center justify-center shrink-0">
                                <Phone className="w-5 h-5 text-[#1E673F]" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#18251F]">Phone</p>
                                <a href="tel:+27791095458" className="text-sm text-[#F0F5F0]-[#18251F] hover:text-[#1E673F] transition-colors">
                                    +27 79 109 5458
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[#1E673F]/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-[#1E673F]" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-[#18251F]">Address</p>
                                <p className="text-sm text-[#F0F5F0]-[#18251F]">5086 Block B2 Mabopane Skills Centre, South Africa</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="w-[600px] flex flex-col space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                placeholder="Your Name"
                                className='bg-[#FFFFFF] p-2'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                maxLength={100}
                            />
                            <input
                                type="email"
                                className='bg-[#FFFFFF] p-2'
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                maxLength={255}
                            />
                        </div>
                        <input
                            type="tel"
                            className='bg-[#FFFFFF] p-2'
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            maxLength={20}
                        />
                        <textarea
                            placeholder="Your Message"
                            className='bg-[#FFFFFF] p-2'
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            maxLength={1000}
                        />
                        <button type="submit" size="lg" className="h-[40px] bg-[#1E673F] flex items-center justify-center gap-2 sm:w-auto text-[#FFFFFF]">
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