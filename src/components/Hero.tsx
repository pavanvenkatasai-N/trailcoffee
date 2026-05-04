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
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-accent text-xs sm:text-sm tracking-[0.3em] text-cream uppercase"
        >
          Artisan Experience Since 2024
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] text-cream leading-tight sm:leading-none tracking-tight mt-0"
        >
          ANAGANAGA
          <br className="hidden sm:block" />
          COFFEE KATHALU
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-0 max-w-2xl mx-auto font-heading text-sm sm:text-lg md:text-xl text-cream/90 tracking-wide leading-relaxed"
        >
          Where every cup tells a story and every moment is cinematic. Step into a world of curated flavors and experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto px-1 sm:px-0 max-w-sm sm:max-w-none mx-auto sm:mx-0"
        >
          <a href="#experience" className="btn-premium text-cream hover:bg-white/5 border-cream/30 hover:border-cream text-[11px] sm:text-xs py-3 sm:py-4 px-6 sm:px-8">
            EXPLORE EXPERIENCE
          </a>
          <a href="/menu" className="btn-premium text-cream hover:bg-white/5 border-cream/30 hover:border-cream text-[11px] sm:text-xs py-3 sm:py-4 px-6 sm:px-8">
            VIEW MENU
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 sm:h-20 bg-gradient-to-b from-brass to-transparent" />
      </motion.div>
    </section>
  );
}
