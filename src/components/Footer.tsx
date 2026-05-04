"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0706] pt-12 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 border-t border-brass/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">
        {/* Brand */}
        <div className="col-span-1">
          <Link href="/" className="font-heading text-2xl sm:text-3xl tracking-[0.2em] text-cream">
            ANAGANAGA
          </Link>
          <p className="mt-4 sm:mt-6 font-body text-cream/40 text-xs sm:text-sm leading-relaxed">
            A boutique coffee experience in the heart of Kuchivaripalli. Blending tradition with cinematic modernity.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-accent text-xs tracking-widest text-brass uppercase mb-4 sm:mb-6">Quick Links</h4>
          <ul className="space-y-3 sm:space-y-4 font-body text-xs sm:text-sm text-cream/70">
            <li><Link href="/#experience" className="hover:text-brass transition-colors">Experience</Link></li>
            <li><Link href="/menu" className="hover:text-brass transition-colors">Menu</Link></li>
            <li><Link href="https://wa.me/918886156822" className="hover:text-brass transition-colors">WhatsApp Order</Link></li>
            <li><Link href="/#story" className="hover:text-brass transition-colors">Our Story</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-accent text-xs tracking-widest text-brass uppercase mb-4 sm:mb-6">Connect</h4>
          <ul className="space-y-3 sm:space-y-4 font-body text-xs sm:text-sm text-cream/70">
            <li><a href="tel:+918886156822" className="hover:text-brass transition-colors">+91 88861 56822</a></li>
            <li>Kuchivaripalli, India</li>
            <li><a href="https://www.instagram.com/anaganaga_coffee_kathalu?igsh=ZDBxeHM1ZmlncHBq" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">Instagram</a></li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h4 className="font-accent text-xs tracking-widest text-brass uppercase mb-4 sm:mb-6">Join the Story</h4>
          <p className="font-body text-xs sm:text-sm text-cream/70 mb-4 sm:mb-6 leading-relaxed">Get updates on special screenings and new flavors.</p>
          <div className="flex flex-col sm:flex-row gap-0">
            <input
              type="email"
              placeholder="Email"
              className="bg-white/5 border border-white/10 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-brass/50 w-full sm:flex-1"
            />
            <button className="bg-brass text-coffee-dark px-4 sm:px-6 py-2 sm:py-3 text-xs font-accent font-bold uppercase tracking-widest mt-2 sm:mt-0 hover:bg-brass/80 transition-colors">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 sm:pt-10 border-t border-white/5 flex flex-col gap-4 sm:gap-6">
        <p className="font-body text-[8px] sm:text-[10px] tracking-widest text-cream/30 uppercase text-center sm:text-left">
          © 2024 ANAGANAGA COFFEE KATHALU. ALL RIGHTS RESERVED.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-8 justify-center sm:justify-start font-body text-[8px] sm:text-[10px] tracking-widest text-cream/30 uppercase">
          <a href="#" className="hover:text-brass transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brass transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
