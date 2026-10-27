import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Linkedin, Github, Send, MapPin, CheckCircle2, Copy, Check, MessageSquare, Phone, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);

    // Form submits natively to the hidden iframe to bypass CORS
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contactEmail);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-dots-glow">
      {/* Hidden iframe to receive form response without page reload or redirect */}
      <iframe
        name="contact_hidden_iframe"
        id="contact_hidden_iframe"
        title="Form Submission Target"
        className="hidden"
        style={{ display: 'none' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Reliable Software"
          subtitle="I'm open to opportunities involving full-stack development, backend engineering, QA engineering, enterprise integration, and DevOps."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">

          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Direct Contact Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Reach out directly via email, phone, or LinkedIn to discuss full-stack engineering, QA leadership, or DevOps opportunities.
                </p>
              </div>

              {/* Contact item: Email */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.contactEmail}`}
                    className="text-sm font-mono text-cyan-600 dark:text-cyan-400 font-semibold truncate hover:underline"
                    title="Click to send email"
                  >
                    {PERSONAL_INFO.contactEmail}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Contact item: Phone */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-500" /> Phone Numbers
                </span>
                <div className="space-y-1">
                  {PERSONAL_INFO.phoneNumbers.map((phone, pIdx) => (
                    <a
                      key={pIdx}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="block text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact item: Location */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" /> Location
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium block">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 hover:bg-cyan-500/20 text-slate-800 dark:text-slate-200 hover:text-cyan-400 border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
                >
                  <Linkedin className="w-4 h-4 text-cyan-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 hover:bg-cyan-500/20 text-slate-800 dark:text-slate-200 hover:text-cyan-400 border border-slate-300 dark:border-slate-700 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
                >
                  <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl"
          >
            <form
              action={`https://formsubmit.co/${PERSONAL_INFO.contactEmail}`}
              method="POST"
              target="contact_hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* FormSubmit Configuration Fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value={formData.subject || `New Portfolio Message from ${formData.name || 'Visitor'}`} />
              <input type="hidden" name="_cc" value="mohammedasmaresafaricom@gmail.com" />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-cyan-500" />
                Send a Message
              </h3>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. Mohammed will get back to you soon.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Hiring Manager / Engineering Lead"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Full Stack / QA / DevOps Engineering Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Describe your project, team requirements, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full shadow-lg shadow-cyan-500/20"
                  icon={<Send className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
