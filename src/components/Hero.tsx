"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="/hero.png" 
          alt="Premium Coffee" 
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-accent text-xs tracking-[0.4em] text-cream uppercase mb-6"
        >
          Artisan Experience Since 2024
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 5 }}
          className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-cream leading-none tracking-tight"
        >
          ANAGANAGA COFFEE KATHALU
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6.0, duration: 1 }}
          className="mt-10 max-w-2xl font-body text-lg text-cream/90 font-medium tracking-wide"
        >
          Where every cup tells a story and every moment is cinematic. 
          Step into a world of curated flavors and curated experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6.3, duration: 1 }}
          className="mt-14 flex flex-col sm:flex-row gap-6"
        >
          <a href="#experience" className="btn-premium text-cream hover:bg-white/5 border-cream/30 hover:border-cream">
            EXPLORE EXPERIENCE
          </a>
          <a href="/menu" className="btn-premium text-cream hover:bg-white/5 border-cream/30 hover:border-cream">
            VIEW MENU
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-brass to-transparent" />
      </motion.div>
    </section>
  );
}
