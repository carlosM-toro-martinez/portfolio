import content from '../data/content.json';

const AboutMe = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <section id="about" className="space-y-6 text-center py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
          {content.about.greeting} <span className="text-primary">{content.about.name}</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          {content.about.description}
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => scrollToSection('contact')} className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all">
            {content.about.buttons.contact}
          </button>
          <button onClick={() => scrollToSection('projects')} className="border border-slate-200 dark:border-slate-800 px-8 py-3 rounded-lg font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            {content.about.buttons.work}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;