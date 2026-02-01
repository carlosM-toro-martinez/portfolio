import content from '../data/content.json';

const Overview = () => {
  return (
    <section className="space-y-4" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{content.overview.title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {content.overview.description}
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg font-bold text-sm transition-colors">
          <span className="material-symbols-outlined text-sm">download</span> {content.overview.cvButton}
        </button>
      </div>
    </section>
  );
};

export default Overview;