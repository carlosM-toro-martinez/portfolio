import { useState } from 'react';
import content from '../data/content.json';
import ContactForm from './ContactForm';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer id="contact" className="mt-20 p-8 rounded-xl bg-slate-900 text-slate-300 font-mono text-sm border-l-4 border-primary">
        <p className="text-slate-500 mb-2">// Contact Information</p>
        <div className="space-y-1">
          <p><span className="text-primary">const</span> <span className="text-amber-400">developer</span> = {'{'}</p>
          <p className="pl-4">name: <span className="text-green-400">'{content.footer.code.name}'</span>,</p>
          <p className="pl-4">email: <span className="text-green-400">'{content.footer.code.email}'</span>,</p>
          <p className="pl-4">location: <span className="text-green-400">'{content.footer.code.location}'</span>,</p>
          <p className="pl-4">github: <span className="text-green-400">'{content.footer.code.github}'</span></p>
          <p>{'};'}</p>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={openModal}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            Send Message
          </button>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>{content.footer.copyright}</p>
          <div className="flex gap-6">
            {content.footer.links.map((link, index) => (
              <a key={index} className="hover:text-primary transition-colors" target="_blank" href="https://github.com/carlosM-toro-martinez">{link}</a>
            ))}
          </div>
        </div>
      </footer>

        {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
            onClick={closeModal}
            />
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background-light dark:bg-background-dark rounded-2xl shadow-2xl animate-[slideUp_0.4s_ease-out] border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between p-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Contact Me</h3>
                </div>
                <button
                onClick={closeModal}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                    <span className="material-symbols-outlined text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">close</span>
                </button>
            </div>
            <div className="p-6">
                <ContactForm onClose={closeModal} />
            </div>
            </div>
        </div>
        )}
    </>
  );
};

export default Footer;