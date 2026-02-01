import { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
            <h2 className="text-xl font-bold tracking-tight">DevPortfolio<span className="text-primary">.io</span></h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button className="cursor-pointer text-sm font-medium hover:text-primary transition-colors" onClick={() => scrollToSection('about')}>About me</button>
            <button className="cursor-pointer text-sm font-medium hover:text-primary transition-colors" onClick={() => scrollToSection('skills')}>Skills</button>
            <button className="cursor-pointer text-sm font-medium hover:text-primary transition-colors" onClick={() => scrollToSection('projects')}>Projects</button>
            <button className="cursor-pointer text-sm font-medium hover:text-primary transition-colors" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;