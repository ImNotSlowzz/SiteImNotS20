import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ManifestoProps {
  theme: 'dark' | 'light';
}

const manifestoPhrases = [
  "We don't follow trends.",
  "This is not art — it's rebellion.",
  'Nothing common. Everything imnots.',
  'We create what others fear to imagine.',
];

export default function Manifesto({ theme }: ManifestoProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phrasesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleActions: 'play none none reverse',
        },
      });

      phrasesRef.current.forEach((phrase, index) => {
        tl.from(
          phrase,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          index * 0.3
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {manifestoPhrases.map((phrase, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) phrasesRef.current[index] = el;
              }}
              className="text-center"
            >
              <h3
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
              >
                {phrase.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className={word.includes('imnots') || word.includes('rebellion') || word.includes('fear') ? 'text-[#FFB800]' : ''}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
