"use client";

import Image from "next/image";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

type ImageType = {
  url: string;
  alt: string;
};

type Props = {
  foregroundImage: ImageType;
  backgroundImage: ImageType;
  extraImage?: ImageType;
  className?: string;
};

export function ParallaxImage({
  foregroundImage,
  backgroundImage,
  extraImage,
  className,
}: Props) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const extraImageRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const frameId = requestAnimationFrame(animationFrame);
    window.addEventListener("mousemove", onMouseMove);

    function onMouseMove(event: MouseEvent) {
      const { innerWidth, innerHeight } = window;

      const xPercent = (event.clientX / innerWidth - 0.5) * 2; // Range between -1 and 1
      const yPercent = (event.clientY / innerHeight - 0.5) * 2; // Range between -1 and 1

      targetPosition.current = {
        x: xPercent * -20,
        y: yPercent * -20,
      };
    }

    function animationFrame() {
      const { x: targetX, y: targetY } = targetPosition.current;
      const { x: currentX, y: currentY } = currentPosition.current;

      const newX = currentX + (targetX - currentX) * 0.1;
      const newY = currentY + (targetY - currentY) * 0.1;

      currentPosition.current = { x: newX, y: newY };

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }
      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
      }
      if (extraImageRef.current) {
        extraImageRef.current.style.transform = `translate(${newX * 4.5}px, ${newY * 4.5}px)`;
      }

      requestAnimationFrame(animationFrame);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
      <div
        ref={backgroundRef}
        className="col-start-1 row-start-1 transition-transform"
      >
        <Image 
          src={backgroundImage.url}
          alt={backgroundImage.alt}
          width={500}
          height={500}
          className="w-11/12"
        />
      </div>

      <div
        ref={foregroundRef}
        className="col-start-1 row-start-1 transition-transform h-full w-full place-items-center"
      >
        <Image
          src={foregroundImage.url}
          alt={foregroundImage.alt}
          width={600}
          height={600}
          className="h-full max-h-[500px] w-auto"
        />
      </div>
      {extraImage && (
        <div
          ref={extraImageRef}
          className="col-start-1 row-start-1 transition-transform"
        >
          <Image 
            src={extraImage.url}
            alt={extraImage.alt}
            width={500}
            height={500}
            className="w-11/12"
          />
        </div>
      )}
    </div>
  );
}
