import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX - 15,
        y: mouseY - 15,
        duration: 0.3,
        ease: 'power2.out',
      });

      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          setTimeout(() => {
            gsap.to(trail, {
              x: mouseX - 6,
              y: mouseY - 6,
              duration: 0.3 + index * 0.05,
              ease: 'power2.out',
            });
          }, index * 20);
        }
      });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      gsap.to(cursor, {
        scale: 2.5,
        rotate: 45,
        backgroundColor: '#FFD700',
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(cursor, {
        scale: 1,
        rotate: 0,
        backgroundColor: '#f8f405ff',
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-[30px] h-[30px] pointer-events-none z-[9999] rounded-full"
        style={{
          background: 'radial-gradient(circle, #FFB800 0%, rgba(255, 184, 0, 0.3) 70%, transparent 100%)',
          boxShadow: '0 0 25px rgba(255, 184, 0, 0.8), 0 0 50px rgba(255, 184, 0, 0.4)',
          filter: 'blur(2px)',
        }}
      />
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) trailRefs.current[index] = el;
          }}
          className="fixed w-3 h-3 pointer-events-none z-[9998] rounded-full"
          style={{
            background: `rgba(255, 184, 0, ${0.6 - index * 0.1})`,
            boxShadow: `0 0 ${15 - index * 2}px rgba(255, 215, 0, ${0.5 - index * 0.08})`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </>
  );
}
