import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.from(logoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
      .to(logoRef.current, {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.inOut',
      })
      .to(logoRef.current, {
        scale: 1,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.in',
      })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div ref={logoRef} className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold">
          <span className="text-white">imnots</span>
          <span className="text-[#FFB800] text-glow"> studios</span>
        </h1>
      </div>
    </div>
  );
}
