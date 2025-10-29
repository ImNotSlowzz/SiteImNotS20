import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  theme: 'dark' | 'light';
}

const projects = [
  {
    title: 'Rebel Campaign',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Future Vision',
    category: 'Motion Design',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Dark Matter',
    category: 'Digital Experience',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Golden Hour',
    category: 'Creative Direction',
    image: 'https://images.pexels.com/photos/1619845/pexels-photo-1619845.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Urban Poetry',
    category: 'Photography',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Neon Dreams',
    category: 'Visual Identity',
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600',
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
                <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {project.title}
                </h3>
                <p className="text-[#FFB800] text-sm uppercase tracking-wider">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
