"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MenuTeaser() {
  return (
    <section className="section-padding bg-coffee-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-accent text-xs tracking-[0.4em] text-brass uppercase mb-4 block"
          >
            Taste the Narrative
          </motion.span>
          <h2 className="font-heading text-5xl md:text-7xl text-cream mb-8">
            Curated Flavors for <br />
            <span className="text-brass italic">Every Chapter</span>
          </h2>
          <p className="font-body text-cream/70 text-lg mb-10 leading-relaxed max-w-xl">
            From our signature filter coffee to artisanal mojitos and handcrafted snacks. 
            Each item is prepared with precision to ensure your story always has the perfect accompaniment.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="font-heading text-xl text-brass mb-2">Artisan Brews</h4>
              <p className="font-body text-sm text-cream/50">Traditional Filter Coffee, Allam Tea, and Premium Shakes.</p>
            </div>
            <div>
              <h4 className="font-heading text-xl text-brass mb-2">Signature Bites</h4>
              <p className="font-body text-sm text-cream/50">Grilled Sandwiches, Peri Peri Fries, and Authentic Samosas.</p>
            </div>
          </div>

          <Link href="/menu" className="btn-premium inline-flex group">
            Explore Full Menu
            <motion.span className="ml-3 group-hover:translate-x-2 transition-transform">
              →
            </motion.span>
          </Link>
        </div>

        {/* Right Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 relative"
        >
          <div className="absolute -inset-4 border border-brass/20 translate-x-8 translate-y-8 z-0" />
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/menu-preview.png" 
              alt="Menu Preview" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 z-20 hidden md:block">
            <p className="font-heading text-2xl text-cream italic">"The best stories start with a sip."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
