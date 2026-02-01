import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-16">
            <div className="sticky">
              <Sidebar />
            </div>
            <AboutMe />
            <Overview />
            <Skills />
            <Projects />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
