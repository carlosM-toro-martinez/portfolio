import { useState } from 'react';
import axios from 'axios';

interface ContactFormProps {
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        if (onClose) {
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="space-y-8">

      <div className="max-w-2xl">
        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
          <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-primary text-sm mr-2">info</span>
              This form uses n8n automation for email processing. Your message will be sent securely through our automated workflow system.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-vertical"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm animate-spin">refresh</span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">send</span>
                    Send Message
                  </span>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span className="text-sm font-medium">Message sent successfully!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <span className="material-symbols-outlined text-sm">error</span>
                  <span className="text-sm font-medium">Failed to send message. Please try again.</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;