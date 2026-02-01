import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import content from '../data/content.json';

import mainClinic from '../assets/screens-clinic/main.png';
import clinic1 from '../assets/screens-clinic/1.png';
import clinic2 from '../assets/screens-clinic/2.png';
import clinic3 from '../assets/screens-clinic/3.png';
import clinic4 from '../assets/screens-clinic/4.png';
import clinic5 from '../assets/screens-clinic/5.png';
import clinic6 from '../assets/screens-clinic/6.png';
import clinic7 from '../assets/screens-clinic/7.png';
import clinic8 from '../assets/screens-clinic/8.png';
import clinic9 from '../assets/screens-clinic/9.png';
import clinic10 from '../assets/screens-clinic/10.png';
import clinic11 from '../assets/screens-clinic/11.png';
import clinic12 from '../assets/screens-clinic/12.png';
import clinic13 from '../assets/screens-clinic/13.png';

import mainInventory from '../assets/screens-inventory/main.png';
import inventory1 from '../assets/screens-inventory/1.png';
import inventory2 from '../assets/screens-inventory/2.png';
import inventory3 from '../assets/screens-inventory/3.png';
import inventory4 from '../assets/screens-inventory/4.png';
import inventory5 from '../assets/screens-inventory/5.png';
import inventory6 from '../assets/screens-inventory/6.png';

import mainRevista from '../assets/screens-revista/main.png';
import revista1 from '../assets/screens-revista/1.png';
import revista2 from '../assets/screens-revista/2.png';
import revista3 from '../assets/screens-revista/3.png';
import revista4 from '../assets/screens-revista/4.png';
import revista5 from '../assets/screens-revista/5.png';
import revista6 from '../assets/screens-revista/6.png';
import revista7 from '../assets/screens-revista/7.png';
import revista8 from '../assets/screens-revista/8.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectImages = [
    {
      main: mainClinic,
      screenshots: [clinic1, clinic2, clinic3, clinic4, clinic5, clinic6, clinic7, clinic8, clinic9, clinic10, clinic11, clinic12, clinic13]
    },
    {
      main: mainInventory,
      screenshots: [inventory1, inventory2, inventory3, inventory4, inventory5, inventory6]
    },
    // {
    //   main: null,
    //   screenshots: []
    // },
    {
      main: mainRevista,
      screenshots: [revista1, revista2, revista3, revista4, revista5, revista6, revista7, revista8]
    }
  ];

  const openGallery = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="space-y-8" id="projects">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">folder_open</span>
          <h2 className="text-2xl font-bold">{content.projects.title}</h2>
        </div>
        
        <div className="space-y-6">
          {content.projects.items.map((project, index) => {
            const images = projectImages[index];
            const mainImage = images?.main;
            const screenshots = images?.screenshots || [];
            
            return (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/20 overflow-hidden hover:shadow-xl transition-all group hover:border-primary/30 dark:hover:border-primary/30"
              >
                <div className="lg:w-2/5 relative overflow-hidden">
                  <div className="relative h-64 lg:h-full group-hover:scale-[1.02] transition-transform duration-500">
                    {mainImage ? (
                      <img 
                        src={mainImage} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-slate-400">image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <button 
                      onClick={() => openGallery(index)}
                      className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      title="Ver galería"
                    >
                      <span className="material-symbols-outlined text-primary text-xl">collections</span>
                    </button>
                  </div>
                </div>

                <div className="p-6 lg:p-8 flex-1 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.badges.map((badge, i) => (
                        <span key={i} className={`px-2 py-1 ${badge === 'Enterprise' || badge === 'Internal Tool' || badge === 'B2C' ? 'bg-primary/10 text-primary' : badge === 'Live' ? 'bg-green-500/10 text-green-500' : badge === 'v2.4' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'} text-[10px] font-bold uppercase rounded`}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider">The Challenge</h4>
                      <p>{project.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    {project.buttons.map((btn, i) => (
                      <button 
                        key={i} 
                        onClick={() => i === 0 ? openGallery(index) : null}
                        className={`flex items-center gap-2 px-4 py-2 ${i === 0 ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg' : 'border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'} rounded-lg font-bold text-sm transition-all active:scale-95`}
                      >
                        <span className="material-symbols-outlined text-sm">
                          {i === 0 ? 'collections' : 'code'}
                        </span> 
                        {btn}
                      </button>
                    ))}
                    
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <span className="material-symbols-outlined text-sm">photo_library</span>
                      <span>{screenshots.length} capturas</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {isModalOpen && selectedProject !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeGallery}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeGallery}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all hover:scale-110"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="absolute top-4 left-4 z-20">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                {content.projects.items[selectedProject].title}
              </h3>
            </div>
            
            <div className="h-full">
              <Carousel
                showArrows={true}
                showThumbs={true}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={false}
                className="rounded-xl"
                renderArrowPrev={(clickHandler, hasPrev) => (
                  <button
                    onClick={clickHandler}
                    disabled={!hasPrev}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full transition-all disabled:opacity-30"
                  >
                    <span className="material-symbols-outlined text-white text-2xl md:text-3xl">chevron_left</span>
                  </button>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                  <button
                    onClick={clickHandler}
                    disabled={!hasNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full transition-all disabled:opacity-30"
                  >
                    <span className="material-symbols-outlined text-white text-2xl md:text-3xl">chevron_right</span>
                  </button>
                )}
                renderThumbs={() => {
                  const images = projectImages[selectedProject]?.screenshots || [];
                  return images.map((img, index) => (
                    <div key={index} className="h-16 md:h-20 overflow-hidden rounded">
                      <img 
                        src={img} 
                        alt={`Thumb ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ));
                }}
              >
                {(projectImages[selectedProject]?.screenshots || []).map((image, index) => (
                  <div key={index} className="flex items-center justify-center bg-slate-900">
                    <div className="relative w-full h-[60vh] md:h-[70vh]">
                      <img 
                        src={image} 
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {index + 1} / {(projectImages[selectedProject]?.screenshots || []).length}
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button 
                onClick={() => window.open(projectImages[selectedProject]?.screenshots[0], '_blank')}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                Abrir imagen
              </button>
              <button 
                onClick={() => {}}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Descargar
              </button>
              <button 
                onClick={() => {}}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-sm">share</span>
                Compartir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;