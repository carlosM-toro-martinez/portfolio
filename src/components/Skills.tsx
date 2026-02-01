import content from '../data/content.json';

const Skills = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">terminal</span>
        <h2 className="text-2xl font-bold">{content.skills.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.skills.cards.map((card, index) => (
          <div key={index} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-primary/50 transition-all">
            <span className="material-symbols-outlined text-primary mb-3">{card.icon}</span>
            <h3 className="text-lg font-bold mb-1">{card.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;