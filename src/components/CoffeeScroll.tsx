"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const FRAME_COUNT = 192;

const currentFrame = (index: number) =>
  `/frames/coffee-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

export default function CoffeeScrollLoader() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  if (loadedCount < FRAME_COUNT) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-coffee-dark text-cream">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brass border-t-transparent"></div>
        <p className="mt-4 font-body text-sm tracking-widest text-brass/80">
          PREPARING THE PERFECT POUR... {Math.round((loadedCount / FRAME_COUNT) * 100)}%
        </p>
      </div>
    );
  }

  return <CoffeeScrollContent images={images} />;
}

function CoffeeScrollContent({ images }: { images: HTMLImageElement[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use global page scroll instead of a conditional element ref to avoid hydration errors
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Frame math
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    let animationFrameId: number;
    let lastRenderedFrame = -1;

    const render = () => {
      const current = Math.round(frameIndex.get());
      if (current !== lastRenderedFrame) {
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            const img = images[current];
            if (!img) return;
            const canvasWidth = window.innerWidth;
            const canvasHeight = window.innerHeight;

            // Set actual size in memory
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;

            // object-fit: cover math
            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
              drawWidth = canvasWidth;
              drawHeight = canvasWidth / imgRatio;
              offsetX = 0;
              offsetY = (canvasHeight - drawHeight) / 2;
            } else {
              drawHeight = canvasHeight;
              drawWidth = canvasHeight * imgRatio;
              offsetY = 0;
              offsetX = (canvasWidth - drawWidth) / 2;
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            lastRenderedFrame = current;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [images, frameIndex]);

  return (
    <div className="relative h-[500vh] bg-coffee-dark" ref={containerRef}>
      {/* Sticky Canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Scrollytelling Content Overlays */}
      <div className="absolute inset-0 z-10 w-full">
        {/* 0% Scroll — Hero */}
        <Section 
          progress={scrollYProgress} 
          inputRange={[0, 0.15, 0.2, 1]} 
          opacityRange={[1, 1, 0, 0]} 
          yRange={[0, 0, -50, -50]}
        > 
          <div className="flex h-screen items-center justify-center text-center">
            <div className="px-6">
              <h1 className="font-heading text-5xl font-light tracking-[0.2em] text-cream md:text-7xl lg:text-8xl">
                ANAGANAGA COFFEE KATHALU
              </h1>
              <p className="mt-6 font-body text-sm uppercase tracking-[0.3em] text-brass">
                kuchivaripalli
              </p>
            </div>
          </div>
        </Section>

        {/* 40% Scroll — Atmosphere & Features */}
        <Section 
          progress={scrollYProgress} 
          inputRange={[0, 0.25, 0.3, 0.5, 0.55, 1]} 
          opacityRange={[0, 0, 1, 1, 0, 0]} 
          yRange={[50, 50, 0, 0, -50, -50]}
        >
          <div className="mx-auto flex h-screen w-full max-w-7xl items-center justify-start px-8 md:px-24 text-left">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-light tracking-widest text-cream md:text-6xl">
                BEYOND THE BREW
              </h2>
              <div className="mt-8 flex flex-col items-start space-y-4 font-body text-lg font-light tracking-wider text-cream/90">
                <p>Cinematic Experience with Live Projector</p>
                <div className="h-[1px] w-12 bg-brass/50" />
                <p>Spacious Seating for Your Squad</p>
                <div className="h-[1px] w-12 bg-brass/50" />
                <p>Fun, Games & Unforgettable Vibes</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 75% Scroll — Menu Highlights */}
        <Section 
          progress={scrollYProgress} 
          inputRange={[0, 0.6, 0.65, 0.85, 0.9, 1]} 
          opacityRange={[0, 0, 1, 1, 0, 0]} 
          yRange={[50, 50, 0, 0, -50, -50]}
        >
          <div className="mx-auto flex h-screen w-full max-w-7xl items-center justify-end px-8 text-right md:px-24">
            <div className="max-w-xl flex flex-col items-end">
              <h2 className="font-heading text-4xl font-light tracking-widest text-cream md:text-6xl">
                FLAVORS THAT TELL A STORY
              </h2>
              <div className="mt-8 flex flex-col items-end space-y-4 font-body text-lg font-light tracking-wider text-cream/90">
                <p>Sizzling Snacks & Samosas</p>
                <div className="h-[1px] w-12 bg-brass/50" />
                <p>Premium Milkshakes & Mojitos</p>
                <div className="h-[1px] w-12 bg-brass/50" />
                <p>Perfectly Grilled Sandwiches</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 90% Scroll — Final Impact */}
        <Section 
          progress={scrollYProgress} 
          inputRange={[0, 0.85, 0.9, 1]} 
          opacityRange={[0, 0, 1, 1]} 
          yRange={[50, 50, 0, 0]}
        >
          <div className="relative z-20 flex h-screen w-full flex-col items-center justify-end pb-32 text-center">
            <div className="flex flex-col items-center px-6">
              <h2 className="font-heading text-4xl font-light tracking-widest text-cream md:text-6xl uppercase">
                Join us at the café
              </h2>
              <p className="mt-4 font-body text-brass tracking-[0.2em]">KUCHIVARIPALLI | +91 88861 56822</p>
              <div className="mt-12 flex flex-col gap-6 sm:flex-row">
                <a 
                  href="https://wa.me/918886156822" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-brass bg-brass px-8 py-4 font-body text-sm tracking-widest text-coffee-dark transition-all hover:bg-brass/90 pointer-events-auto"
                >
                  WHATSAPP US
                </a>
                <a 
                  href="/menu"
                  className="border border-cream/50 bg-transparent px-8 py-4 font-body text-sm tracking-widest text-cream transition-all hover:border-cream hover:bg-cream/10 pointer-events-auto"
                >
                  VIEW FULL MENU
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  children,
  progress,
  inputRange,
  opacityRange,
  yRange,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  inputRange: number[];
  opacityRange: number[];
  yRange: number[];
}) {
  const opacity = useTransform(progress, inputRange, opacityRange);
  const y = useTransform(progress, inputRange, yRange);

  return (
    <motion.div
      style={{ opacity, y }}
      className="sticky top-0 flex h-screen w-full items-center justify-center pointer-events-none [&_button]:pointer-events-auto"
    >
      <div className="w-full h-full">{children}</div>
    </motion.div>
  );
}
