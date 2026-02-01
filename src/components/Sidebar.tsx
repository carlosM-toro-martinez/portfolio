const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 space-y-8">
        <div className="sticky p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
          <p className="text-xs text-slate-500 mb-2 italic">// Status</p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Available for Remote Roles</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;