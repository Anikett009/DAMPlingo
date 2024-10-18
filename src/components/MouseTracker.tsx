"use client"
import React, { useState, useEffect, useRef } from 'react';

const MouseTracker: React.FC = () => {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateMousePosition = (ev: MouseEvent) => {
      if (cursorRef.current) {
        animationFrameId = requestAnimationFrame(() => {
          cursorRef.current!.style.transform = `translate(${ev.clientX}px, ${ev.clientY}px) ${isHoveringLink ? 'scale(1.5)' : 'scale(1)'}`;
          setPosition({ x: ev.clientX, y: ev.clientY });
        });
      }
    };

    const handleLinkHover = (ev: MouseEvent) => {
      setIsHoveringLink((ev.target as HTMLElement).tagName === 'A');
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleLinkHover);
    document.addEventListener('mouseout', handleLinkHover);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleLinkHover);
      document.removeEventListener('mouseout', handleLinkHover);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHoveringLink]);

  return (
    <>
      <style jsx global>{`
        body, a {
          cursor: none;
        }
      `}</style>
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-50 transition-all duration-150"
        style={{
          width: isHoveringLink ? '48px' : '42px',
          height: isHoveringLink ? '48px' : '42px',
          backgroundImage: 'url("/duolingo.svg")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          filter: isHoveringLink ? 'hue-rotate(40deg)' : 'none',
          willChange: 'transform',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          background: `radial-gradient(circle 100px at ${position.x}px ${position.y}px, rgba(0, 255, 0, 0.15), transparent 50%)`
        }}
      />
    </>
  );
};

export default MouseTracker;