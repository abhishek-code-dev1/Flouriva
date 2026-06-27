"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const text = `Hello Flouriva,\n\nI would like to get in touch.\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/916307050806?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-6 bg-bakery-brown/10 relative">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="font-heading text-xl md:text-2xl text-bakery-light font-bold mb-3 text-center">
          Get in <span className="text-bakery-gold">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-bakery-dark p-4 rounded-xl border border-bakery-gold/20 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-bakery-gold shrink-0 mt-0.5" size={16} />
              <div>
                <h4 className="text-sm font-bold text-bakery-light mb-1">Visit Us</h4>
                <p className="text-xs text-bakery-cream/70">123 Bakery Street, Food District, City</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-bakery-gold shrink-0 mt-0.5" size={16} />
              <div>
                <h4 className="text-sm font-bold text-bakery-light mb-1">Call Us</h4>
                <a href="tel:6307050806" className="text-xs text-bakery-cream/70 hover:text-bakery-gold transition-colors block">
                  6307050806
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-bakery-gold shrink-0 mt-0.5" size={16} />
              <div>
                <h4 className="text-sm font-bold text-bakery-light mb-1">Opening Hours</h4>
                <p className="text-xs text-bakery-cream/70">Mon-Sun: 8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-bakery-dark p-4 rounded-xl border border-bakery-gold/20 flex flex-col gap-3">
            <input 
              type="text" 
              placeholder="Name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-bakery-brown/20 border border-bakery-gold/20 rounded-lg px-3 py-2 text-xs text-bakery-light focus:outline-none focus:border-bakery-gold"
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-bakery-brown/20 border border-bakery-gold/20 rounded-lg px-3 py-2 text-xs text-bakery-light focus:outline-none focus:border-bakery-gold"
            />
            <textarea 
              placeholder="Your Message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-bakery-brown/20 border border-bakery-gold/20 rounded-lg px-3 py-2 text-xs text-bakery-light focus:outline-none focus:border-bakery-gold resize-none"
            />
            <button 
              type="submit" 
              className="w-full py-2 bg-bakery-gold text-bakery-dark font-bold text-xs rounded-lg mt-1 hover:bg-bakery-light transition-colors"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
