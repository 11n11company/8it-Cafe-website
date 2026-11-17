import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useCafe } from '../context/CafeContext';

export default function ContactSection() {
  const { showToast } = useCafe();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Catering & Events',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) err.email = 'Valid email address is required';
    if (!formData.message.trim() || formData.message.length < 10) err.message = 'Please provide at least 10 characters';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      showToast('Thank you! Your message has been dispatched to our team.');
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', topic: 'Catering & Events', message: '' });
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="bg-[#FCF8F2] rounded-[32px] p-8 sm:p-12 border border-[#003B29]/10 shadow-lg">
        <div className="text-center max-w-lg mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#004B32] bg-[#004B32]/10 px-3.5 py-1 rounded-full">
            CONNECT WITH US
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#003B29] tracking-tight mt-3">
            Get in Touch with 8itcafe
          </h2>
          <p className="mt-2 text-[#566E61] text-sm">
            Have questions about whole bean wholesale, corporate gifting, or private events? Drop us a note.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-12 flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-[#004B32] mb-4 animate-bounce" />
            <h3 className="font-heading font-extrabold text-2xl text-[#003B29]">Message Received!</h3>
            <p className="text-sm text-[#566E61] mt-2 max-w-md">
              We appreciate you reaching out. Our cafe team will get back to your email within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#003B29] uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Aarav Sharma"
                  className={`w-full bg-white px-4 py-3 rounded-xl border text-sm text-[#003B29] outline-none transition-all ${
                    errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#003B29]/20 focus:border-[#004B32]'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003B29] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="aarav@example.com"
                  className={`w-full bg-white px-4 py-3 rounded-xl border text-sm text-[#003B29] outline-none transition-all ${
                    errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#003B29]/20 focus:border-[#004B32]'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#003B29] uppercase tracking-wider mb-1.5">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98000 00000"
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[#003B29]/20 focus:border-[#004B32] text-sm text-[#003B29] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003B29] uppercase tracking-wider mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[#003B29]/20 focus:border-[#004B32] text-sm text-[#003B29] outline-none transition-all cursor-pointer"
                >
                  <option value="Catering & Events">Catering & Private Events</option>
                  <option value="Whole Bean Wholesale">Whole Bean Wholesale</option>
                  <option value="Feedback & Press">Feedback & Press</option>
                  <option value="Barista Careers">Barista Careers</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#003B29] uppercase tracking-wider mb-1.5">
                Your Message *
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you have in mind..."
                className={`w-full bg-white p-4 rounded-xl border text-sm text-[#003B29] outline-none transition-all resize-none ${
                  errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-[#003B29]/20 focus:border-[#004B32]'
                }`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004B32] hover:bg-[#003B29] text-white font-heading font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

