"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Cinematic Vibes",
    description: "Our high-definition projector brings stories to life while you sip. Live sports, classic films, or mesmerizing visuals.",
    icon: (
      <svg className="w-8 h-8 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Spacious Comfort",
    description: "Designed for the 'Squad'. Plenty of room to breathe, relax, and enjoy deep conversations without feeling crowded.",
    icon: (
      <svg className="w-8 h-8 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Fun & Games",
    description: "From board games to interactive fun, there's never a dull moment. Perfect for hanging out and making memories.",
    icon: (
      <svg className="w-8 h-8 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section id="experience" className="section-padding bg-coffee-medium relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brass/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-xl sm:text-4xl md:text-6xl text-cream mb-6 whitespace-nowrap">More Than Just a Cafe</h2>
          <p className="font-body text-brass uppercase tracking-[0.3em] text-sm">Elevating your daily ritual</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-10 flex flex-col items-center text-center group transition-all duration-500 hover:border-brass/30"
            >
              <div className="mb-8 p-4 rounded-full bg-white/5 group-hover:bg-brass/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-heading text-2xl text-cream mb-4">{feature.title}</h3>
              <p className="font-body text-cream/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
