import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  theme: 'dark' | 'light';
}

const projects = [
  {
    title: 'Site ImNotS Studio Vendas de Sites',
    category: 'Vendas de Sites',
    image: 'photos/capaprojetos1.jpg',
    link: 'https://imnotslowzz.github.io/SiteImNotSStudios/',
  },
  {
    title: 'Barbearia Samuel',
    category: 'Landing Page Design',
    image: 'photos/capaprojetos2.jpg',
    link: 'https://imnotslowzz.github.io/SamuelCabeleireiro/',
  },
  {
    title: 'Linktree - Exclusiva',
    category: 'Linktree Customizado',
    image: 'photos/capasprojetos3.jpg',
    link: 'https://imnotslowzz.github.io/Links',
  },
  {
    title: 'To-Do List App - Exclusivo',
    category: 'To-do List Exclusivo',
    image: 'photos/capaprojetos4.jpg',
    link: 'https://imnotslowzz.github.io/To-Do-List',
  },
  {
    title: 'Prompt Manager - Exclusivo',
    category: 'Gerenciador de Prompts - Exclusivo',
    image: 'photos/capaprojetos5.jpg',
    link: 'https://imnotslowzz.github.io/Prompt-Manager',
  },
];

export default function Projects({ theme }: ProjectsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Nossos <span className="text-[#FFB800]">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:box-glow ${
                theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
              }`}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-white text-3xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-[#FFB800] text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.category}
                  </p>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#FFB800] text-sm uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
