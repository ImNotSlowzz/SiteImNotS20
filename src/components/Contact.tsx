import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function Contact({ theme }: ContactProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Vamos <span className="text-[#FFB800]">Conversar</span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Entre em contato
            </h3>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Tem um projeto em mente? Vamos criar algo extraordinário juntos.
            </p>

            <div className="space-y-4">
              <a
                href="https://www.instagram.com/imnots_studios"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 group transition-all duration-300 hover:text-[#FFB800] ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <Instagram className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]" />
                <span>@imnotsstudios</span>
              </a>

              <a
                href="https://www.linkedin.com/company/imnotsstudios/
"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 group transition-all duration-300 hover:text-[#FFB800] ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <Linkedin className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]" />
                <span>imnots studios</span>
              </a>

              <a
                href="mailto:hello@imnots.studio"
                className={`flex items-center space-x-3 group transition-all duration-300 hover:text-[#FFB800] ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <Mail className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]" />
                <span>studiosimnots@gmail.com</span>
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFB800] ${
                  theme === 'dark'
                    ? 'bg-zinc-900 text-white placeholder-gray-500'
                    : 'bg-white text-black placeholder-gray-400 border border-gray-200'
                }`}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFB800] ${
                  theme === 'dark'
                    ? 'bg-zinc-900 text-white placeholder-gray-500'
                    : 'bg-white text-black placeholder-gray-400 border border-gray-200'
                }`}
              />
            </div>

            <div>
              <textarea
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFB800] resize-none ${
                  theme === 'dark'
                    ? 'bg-zinc-900 text-white placeholder-gray-500'
                    : 'bg-white text-black placeholder-gray-400 border border-gray-200'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFB800] text-black font-bold py-3 rounded-lg transition-all duration-300 hover:bg-[#FFD700] hover:shadow-lg hover:shadow-[#FFB800]/50 hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
