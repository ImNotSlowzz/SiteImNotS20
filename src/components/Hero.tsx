import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  theme: 'dark' | 'light';
}

export default function Hero({ theme }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFB800] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1
          ref={titleRef}
          className={`text-6xl md:text-8xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          Not ordinary.
          <br />
          <span className="text-[#FFB800] text-glow">Just imnots.</span>
        </h1>
        <p
          ref={subtitleRef}
          className={`text-xl md:text-2xl font-light max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Um estúdio criativo que desafia convenções e transforma ideias em experiências disruptivas e memoráveis.
        </p>
      </div>
    </section>
  );
}
