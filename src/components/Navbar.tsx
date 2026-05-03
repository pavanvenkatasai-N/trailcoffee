"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6 ${
        isScrolled ? "bg-coffee-dark/80 backdrop-blur-lg py-4 border-b border-brass/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <img src="/logo.png" alt="Anaganaga Logo" className="h-12 w-auto object-contain" />
          <span className="font-accent text-xl tracking-[0.2em] text-cream uppercase font-medium mt-1">Anaganaga</span>
        </Link>

        <div className="hidden md:flex gap-12 font-accent text-[11px] uppercase tracking-[0.3em] text-cream font-medium">
          <Link href="/menu" className="hover:text-brass transition-colors">Menu</Link>
          <Link href="/#experience" className="hover:text-brass transition-colors">Experience</Link>
          <Link href="/#story" className="hover:text-brass transition-colors">Our Story</Link>
          <Link href="https://wa.me/918886156822" target="_blank" className="hover:text-brass transition-colors">WhatsApp</Link>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://wa.me/918886156822" 
            className="hidden sm:flex border border-cream/30 hover:border-cream bg-transparent py-2 px-6 text-[10px] tracking-widest text-cream transition-all hover:bg-cream/10 uppercase"
          >
            ORDER NOW
          </a>
          
          <button className="text-cream md:hidden">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
