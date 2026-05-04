"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 py-6 ${
        isScrolled ? "bg-coffee-dark/80 backdrop-blur-lg py-4 border-b border-brass/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-4">
          <img src="/logo.png" alt="Anaganaga Logo" className="h-10 sm:h-12 w-auto object-contain" />
          <span className="font-accent text-base sm:text-xl tracking-[0.2em] text-cream uppercase font-medium mt-1">Anaganaga</span>
        </Link>

        <div className="hidden md:flex gap-12 font-accent text-[11px] uppercase tracking-[0.3em] text-cream font-medium">
          <Link href="/menu" className="hover:text-brass transition-colors">Menu</Link>
          <Link href="/#experience" className="hover:text-brass transition-colors">Experience</Link>
          <Link href="/#story" className="hover:text-brass transition-colors">Our Story</Link>
          <Link href="https://wa.me/918886156822" target="_blank" className="hover:text-brass transition-colors">WhatsApp</Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <a 
            href="https://wa.me/918886156822" 
            className="hidden sm:flex border border-cream/30 hover:border-cream bg-transparent py-2 px-4 sm:px-6 text-[10px] tracking-widest text-cream transition-all hover:bg-cream/10 uppercase whitespace-nowrap"
          >
            ORDER NOW
          </a>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-cream md:hidden p-2"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-coffee-dark border-l border-brass/20 z-[70] md:hidden p-8 flex flex-col"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cream p-2"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col w-full">
                <Link 
                  href="/menu" 
                  className="py-6 border-b border-brass/10 font-accent text-sm uppercase tracking-[0.4em] text-cream hover:text-brass transition-colors flex justify-between items-center group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menu
                  <span className="text-brass/40 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="/#experience" 
                  className="py-6 border-b border-brass/10 font-accent text-sm uppercase tracking-[0.4em] text-cream hover:text-brass transition-colors flex justify-between items-center group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                  <span className="text-brass/40 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="/#story" 
                  className="py-6 border-b border-brass/10 font-accent text-sm uppercase tracking-[0.4em] text-cream hover:text-brass transition-colors flex justify-between items-center group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Story
                  <span className="text-brass/40 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <a 
                  href="https://wa.me/918886156822" 
                  target="_blank"
                  className="py-6 border-b border-brass/10 font-accent text-sm uppercase tracking-[0.4em] text-cream hover:text-brass transition-colors flex justify-between items-center group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  WhatsApp
                  <span className="text-brass/40 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                <div className="pt-12 w-full">
                  <a 
                    href="https://wa.me/918886156822" 
                    className="block border border-brass/50 bg-transparent py-4 px-6 text-xs tracking-[0.3em] text-cream transition-all hover:bg-brass/10 uppercase text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ORDER NOW
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
