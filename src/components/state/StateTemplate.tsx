import { State } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import VideoBlock from '../sections/videoblock/VideoBlock';

interface StateTemplateProps {
  stateData: State;
}

export default function StateTemplate({ stateData }: StateTemplateProps) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.animate-hero', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen">
      <section className="hero-section">
        <h1 className="animate-hero text-4xl font-bold">
          {stateData.content.hero.title}
        </h1>
        <p className="animate-hero text-xl">
          {stateData.content.hero.description}
        </p>
      </section>
      {/* Add more sections as needed */}
      <VideoBlock />
    </div>
  );
}