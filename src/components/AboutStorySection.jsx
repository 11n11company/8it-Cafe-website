import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/coffeeData';
import { useCafe } from '../context/CafeContext';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

export default function AboutStorySection() {
  const { showToast } = useCafe();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      err.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      err.phone = 'Phone number is required';
    }
    if (!formData.city.trim()) {
      err.city = 'City or location is required';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast(`Thank you, ${formData.name}! Your inquiry has been sent.`);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="franchise"
      className="snap-section relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#F8EBD8] text-[#003B29] flex flex-col justify-between px-4 sm:px-8 lg:px-16 xl:px-20 py-10 lg:py-5 overflow-y-auto lg:overflow-hidden"
    >
      {/* Invisible anchor points for navigation */}
      <span id="about" className="absolute top-0 pointer-events-none" />
      <span id="contact" className="absolute top-0 pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Company Logo, Brand Identity & Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '150px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            {/* Company Logo & Wordmark */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#003B29] text-[#FFF5E6] flex flex-col items-center justify-center shadow-md flex-shrink-0 p-2">
                <span className="font-heading font-black text-2xl sm:text-3xl leading-none tracking-tight">8it</span>
                <span className="text-[5px] sm:text-[6px] font-extrabold opacity-80 tracking-wide mt-1 text-center leading-tight">
                  Ate It. Loved It.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-3xl sm:text-4xl text-[#003B29] tracking-tight leading-none">
                  8itcafe
                </span>
                <span className="text-xs sm:text-sm font-semibold italic text-[#004B32] tracking-wide mt-1">
                  Ate It. Loved It. That's It.
                </span>
              </div>
            </div>

            {/* Headline & Description */}
            <div className="space-y-2">
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-[34px] text-[#003B29] tracking-tight leading-tight">
                Franchise & Partnerships
              </h2>
              <p className="text-sm sm:text-[14.5px] text-[#566E61] leading-relaxed">
                Bring India's premier specialty coffee experience to your city. We partner with visionary entrepreneurs to deliver turnkey cafe design, fresh roastery supply, and complete operational support.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-[#566E61]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#004B32] flex-shrink-0" />
                <span className="font-semibold text-[#003B29]">franchise@8itcafe.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#004B32] flex-shrink-0" />
                <span>+91 98450 88219</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#004B32] flex-shrink-0" />
                <span>124 Roaster Street, Arts District, Bengaluru</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean & Minimal Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '150px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#FFF5E6] rounded-3xl p-6 sm:p-8 border border-[#003B29]/15 shadow-xl">
              <div className="mb-5">
                <h3 className="font-heading font-black text-xl text-[#003B29] tracking-tight">
                  Inquiry Form
                </h3>
                <p className="text-xs text-[#566E61] mt-1">
                  Share your details below and our expansion team will get in touch with you within 24 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#004B32]/10 text-[#004B32] flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-[#004B32]" />
                    </div>

                    <h4 className="font-heading font-black text-xl text-[#003B29]">
                      Message Received!
                    </h4>

                    <p className="text-xs sm:text-sm text-[#566E61] max-w-sm leading-relaxed">
                      Thank you, <strong className="text-[#003B29]">{formData.name}</strong>. We have received your inquiry for <strong className="text-[#003B29]">{formData.city}</strong> and will reach out to you within 24 hours.
                    </p>

                    <button
                      onClick={handleReset}
                      className="mt-3 px-5 py-2 bg-[#003B29] hover:bg-[#004B32] text-white text-xs font-bold rounded-full transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#003B29] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className={`w-full bg-white px-3.5 py-2.5 rounded-xl border text-sm text-[#003B29] outline-none transition-all placeholder:text-[#566E61]/50 ${
                            errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#003B29]/20 focus:border-[#004B32] focus:ring-1 focus:ring-[#004B32]'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#003B29] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className={`w-full bg-white px-3.5 py-2.5 rounded-xl border text-sm text-[#003B29] outline-none transition-all placeholder:text-[#566E61]/50 ${
                            errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#003B29]/20 focus:border-[#004B32] focus:ring-1 focus:ring-[#004B32]'
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2: Phone & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#003B29] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={`w-full bg-white px-3.5 py-2.5 rounded-xl border text-sm text-[#003B29] outline-none transition-all placeholder:text-[#566E61]/50 ${
                            errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#003B29]/20 focus:border-[#004B32] focus:ring-1 focus:ring-[#004B32]'
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#003B29] mb-1.5">
                          Target City / Location *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Mumbai, Bengaluru, Delhi"
                          className={`w-full bg-white px-3.5 py-2.5 rounded-xl border text-sm text-[#003B29] outline-none transition-all placeholder:text-[#566E61]/50 ${
                            errors.city ? 'border-red-500 ring-1 ring-red-500' : 'border-[#003B29]/20 focus:border-[#004B32] focus:ring-1 focus:ring-[#004B32]'
                          }`}
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>
                    </div>

                    {/* Row 3: Message / Notes */}
                    <div>
                      <label className="block text-xs font-bold text-[#003B29] mb-1.5">
                        Message or Inquiry Details <span className="text-[#566E61] font-normal">(optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your background, property details, or questions..."
                        className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-[#003B29]/20 text-sm text-[#003B29] outline-none transition-all placeholder:text-[#566E61]/50 focus:border-[#004B32] focus:ring-1 focus:ring-[#004B32] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-6 rounded-xl bg-[#003B29] hover:bg-[#004B32] text-[#FFF5E6] font-heading font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-md disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Integrated Section Bottom Footer */}
      <footer className="w-full max-w-6xl mx-auto pt-3 border-t border-[#003B29]/15 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#566E61] z-10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#003B29] text-white flex items-center justify-center font-black text-[9px]">
            8it
          </div>
          <span className="font-semibold text-[11px] sm:text-xs">
            © 2026 8itcafe (Ate it Cafe). All rights reserved.
          </span>
        </div>

        <span className="text-[11px] font-bold italic text-[#004B32] hidden md:inline">
          "{BRAND_INFO.tagline}"
        </span>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-[#003B29]">
            <a href={BRAND_INFO.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#004B32]">
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a href={BRAND_INFO.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#004B32]">
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a href={BRAND_INFO.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-[#004B32]">
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-full bg-[#FFF5E6] hover:bg-[#F2E7D8] text-[#003B29] border border-[#003B29]/15 transition-colors cursor-pointer"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </section>
  );
}
