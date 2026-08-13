'use client';

import { useState } from 'react';
import { CLINIC } from '@/lib/config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Appointment Request from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AService: ${formData.service}%0D%0AMessage: ${formData.message}`;
    window.location.href = `${CLINIC.contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-forest-600 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-premium text-center">
          <span className="section-label text-champagne-400 justify-center mb-4 block">Get In Touch</span>
          <h1 className="heading-display text-white mb-4">Contact Us</h1>
          <p className="text-ivory-100 font-sans max-w-2xl mx-auto text-lg">
            We&apos;re here to help you achieve your best smile. Reach out to schedule an appointment or ask any questions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-ivory-100">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="heading-lg text-forest-600 mb-6">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-600 focus:border-forest-600 transition-colors font-sans"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-600 focus:border-forest-600 transition-colors font-sans"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-600 focus:border-forest-600 transition-colors font-sans"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-600 focus:border-forest-600 transition-colors font-sans bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Root Canal">Root Canal Treatment</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Braces">Braces / Orthodontics</option>
                    <option value="Wisdom Tooth">Wisdom Tooth Removal</option>
                    <option value="Gum Treatment">Gum Treatment</option>
                    <option value="Crowns & Bridges">Crowns & Bridges</option>
                    <option value="Pediatric">Pediatric Dentistry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-600 focus:border-forest-600 transition-colors font-sans resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" id="contact-submit" className="w-full btn-primary py-4 text-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between space-y-8">
              <div>
                <h2 className="heading-lg text-forest-600 mb-8">Contact Information</h2>
                <div className="space-y-6 font-sans text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-champagne-400/20 rounded-full flex items-center justify-center shrink-0 text-xl">📍</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Clinic Address</h3>
                      <p className="leading-relaxed text-sm">
                        {CLINIC.address.line1},<br />
                        {CLINIC.address.line2},<br />
                        {CLINIC.address.line3},<br />
                        {CLINIC.address.city}, {CLINIC.address.state} — {CLINIC.address.pincode}
                      </p>
                      <p className="text-xs text-sage-500 mt-1">{CLINIC.address.landmark}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-champagne-400/20 rounded-full flex items-center justify-center shrink-0 text-xl">📞</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <p><a href={CLINIC.contact.phoneHref} className="hover:text-forest-600 transition-colors">{CLINIC.contact.phoneDisplay}</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-champagne-400/20 rounded-full flex items-center justify-center shrink-0 text-xl">✉️</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p><a href={CLINIC.contact.emailHref} className="hover:text-forest-600 transition-colors text-sm break-all">{CLINIC.contact.email}</a></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-forest-600 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl mb-6">Clinic Hours</h3>
                <div className="space-y-3 font-sans">
                  {CLINIC.hours.schedule.map((item) => (
                    <div key={item.day} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{item.day}</span>
                        <div className="text-right text-sm text-ivory-100">
                          <div>{item.morning}</div>
                          {item.evening !== 'Closed' && <div>{item.evening}</div>}
                          {item.evening === 'Closed' && <div className="text-mint-400">Morning only</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={CLINIC.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="get-directions-btn"
                  className="btn-secondary flex-1 text-center"
                >
                  Get Directions
                </a>
                <a
                  href={CLINIC.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-contact-btn"
                  className="btn-whatsapp flex-1 text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[450px] w-full bg-gray-200 relative">
        <iframe
          src={CLINIC.address.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Natural Dental Clinic Location Map"
          className="absolute inset-0"
        ></iframe>
      </section>
    </>
  );
}
