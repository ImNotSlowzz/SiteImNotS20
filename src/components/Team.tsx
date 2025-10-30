import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TeamProps {
  theme: 'dark' | 'light';
}

const teamMembers = [
  {
    name: 'Victor Gabriel',
    role: 'CTO (Chief Technology Officer)',
    image: 'photos/VictorGabriel.jpg',
    bio: 'Estratégia e Inovação Tecnológica: Lidera a visão tecnológica da ImNot’S Studios, dirigindo a arquitetura de software e a transformação digital. Garante que todas as plataformas web e digitais sejam escaláveis, eficientes e de alta performance, impulsionando a inovação e a excelência no desenvolvimento de produtos.',
  },
  {
    name: 'Matheus Luis',
    role: 'Brand & Social Strategist',
    image: 'photos/MatheusLuis.jpg',
    bio: 'Estratégia de Marca e Engajamento Digital: Desenvolve e executa estratégias criativas de branding e marketing que definem a voz da ImNot’S Studios. Amplifica a presença online, otimiza o reconhecimento da marca e impulsiona o engajamento orgânico e viral nas redes sociais, convertendo seguidores em defensores da marca.',
  },
  {
    name: 'João Lopes',
    role: 'CFO (Chief Financial Officer)',
    image: 'photos/JoaoLopes.jpg',
    bio: 'Gestão Financeira e Crescimento Sustentável: Responsável pela saúde financeira e planejamento estratégico da empresa. Otimiza o controle de custos, gerencia investimentos de alto impacto e assegura a lucratividade e a sustentabilidade do crescimento, fornecendo a base para decisões financeiras precisas e estratégicas.',
  },
  {
    name: 'Gustavo Pereira',
    role: 'Head de Cibersegurança',
    image: 'photos/GustavoPereira.jpg',
    bio: 'Defesa e Operações de Cibersegurança: Executa a proteção proativa da infraestrutura digital. Implementa protocolos de segurança avançados, conduz auditorias e realiza monitoramento contínuo (24/7), neutralizando ameaças internas e externas para manter a resiliência e a operacionalidade dos sistemas.',
  },
  {
    name: 'Artur Augusto',
    role: 'CISO (Chief Information Security Officer)',
    image: 'photos/ArturAugusto.jpg',
    bio: 'Governança e Estratégia de Segurança da Informação: Define o framework estratégico de segurança da ImNot’S Studios. É o principal responsável pelo compliance, mitigação de riscos e pela criação de políticas robustas que protegem ativos e dados sensíveis, garantindo a confiança e a integridade de todas as operações.',
  },
];

export default function Team({ theme }: TeamProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="equipe"
      ref={sectionRef}
      className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Nossa <span className="text-[#FFB800]">Equipe</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              onClick={() =>
                setSelectedMember(selectedMember === index ? null : index)
              }
              className={`group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-105 cursor-pointer ${
                theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-100'
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay com nome/cargo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-[#FFB800] text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              {/* Texto "sobre mim" que aparece ao clicar */}
              {selectedMember === index && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col justify-center items-center text-center p-8 transition-all duration-700">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(null);
                    }}
                    className="absolute top-4 right-4 text-white text-xl hover:text-[#FFB800] transition"
                  >
                    ✕
                  </button>
                  <h3 className="text-white text-3xl font-bold mb-3">
                    {member.name}
                  </h3>
                  <p className="text-[#FFB800] text-sm uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 max-w-md">{member.bio}</p>
                </div>
              )}

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-[#FFB800] text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
