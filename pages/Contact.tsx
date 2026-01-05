
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

interface FormErrors {
  email?: string;
  phone?: string;
}

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: 'website', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!re.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePhone = (phone: string) => {
    // Simple validation for Indian numbers (10 digits, optional +91)
    const re = /^(\+91[\-\s]?)?[6789]\d{9}$/;
    if (!phone) return 'Phone number is required';
    if (!re.test(phone.replace(/\s/g, ''))) return 'Please enter a valid 10-digit phone number';
    return '';
  };

  useEffect(() => {
    const newErrors: FormErrors = {};
    if (touched.email) {
      const emailError = validateEmail(formState.email);
      if (emailError) newErrors.email = emailError;
    }
    if (touched.phone) {
      const phoneError = validatePhone(formState.phone);
      if (phoneError) newErrors.phone = phoneError;
    }
    setErrors(newErrors);
  }, [formState.email, formState.phone, touched]);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark everything as touched to trigger validation
    setTouched({ email: true, phone: true });
    
    const emailErr = validateEmail(formState.email);
    const phoneErr = validatePhone(formState.phone);

    if (emailErr || phoneErr) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mblnnzdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        alert("Thank you! We will contact you shortly.");
        setFormState({ name: '', email: '', phone: '', service: 'website', message: '' });
        setTouched({});
        setErrors({});
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;
  const whatsappMessage = encodeURIComponent("Hello Myyapp team! I'm interested in your services. How can you help me grow my business?");

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 transition-colors">
      <SEO 
        title="Contact Myyapp - Get a Free Digital Growth Consultation"
        description="Ready to scale your business? Contact Myyapp in Bangalore for expert advice on web development, mobile apps, and viral marketing strategies for Indian businesses."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Let's Grow Your Business</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">Get a free quote or book a demo of the Wiral Platform.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Phone</p>
                    <p className="text-lg text-slate-900 dark:text-white font-medium">+91 90924 18710</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Mon-Sat 9am to 7pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-lg text-slate-900 dark:text-white font-medium">support@myyapp.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Office</p>
                    <p className="text-lg text-slate-900 dark:text-white font-medium">BHIVE Workspace, 148,<br/>HSR Layout, Bangalore - 560102</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/30 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Chat on WhatsApp</h3>
                <p className="text-green-700 dark:text-green-500/80 text-sm">Fastest way to get a response.</p>
              </div>
              <a 
                href={`https://wa.me/919092418710?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-400`}
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onBlur={() => handleBlur('phone')}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                    {errors.phone && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-500 animate-fadeIn">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email"
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 dark:border-slate-700'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-400`}
                      placeholder="john@company.com"
                      value={formState.email}
                      onBlur={() => handleBlur('email')}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                    {errors.email && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-500 animate-fadeIn">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Interested Service</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  value={formState.service}
                  onChange={(e) => setFormState({...formState, service: e.target.value})}
                >
                  <option value="website">Website Development</option>
                  <option value="app">Mobile App Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="wiral">Wiral Promotion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message (Optional)</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
                  placeholder="Tell us about your business goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || hasErrors}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                {!isSubmitting && <Send className="h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
