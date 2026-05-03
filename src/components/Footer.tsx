"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0706] pt-20 pb-10 px-6 border-t border-brass/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <Link href="/" className="font-heading text-3xl tracking-[0.2em] text-cream">
            ANAGANAGA
          </Link>
          <p className="mt-6 font-body text-cream/40 text-sm leading-relaxed max-w-xs">
            A boutique coffee experience in the heart of Kuchivaripalli.
            Blending tradition with cinematic modernity.
          </p>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h4 className="font-accent text-xs tracking-widest text-brass uppercase mb-6">Quick Links</h4>
          <ul className="space-y-4 font-body text-sm text-cream/70">
            <li><Link href="/#experience" className="hover:text-brass transition-colors">Experience</Link></li>
            <li><Link href="/menu" className="hover:text-brass transition-colors">Menu</Link></li>
            <li><Link href="https://wa.me/918886156822" className="hover:text-brass transition-colors">WhatsApp Order</Link></li>
            <li><Link href="/#story" className="hover:text-brass transition-colors">Our Story</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h4 className="font-accent text-xs tracking-widest text-brass uppercase mb-6">Connect</h4>
          <ul className="space-y-4 font-body text-sm text-cream/70">
            <li><a href="tel:+918886156822" className="hover:text-brass transition-colors">+91 88861 56822</a></li>
            <li><p>kuchivaripalli, India</p></li>
            <li><a href="#" className="hover:text-brass transition-colors">Instagram</a></li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div className="text-center md:text-left">
          <h4 className="font-accent text-xs tracking-widest text-brass uppercase mb-6">Join the Story</h4>
          <p className="font-body text-sm text-cream/70 mb-6">Get updates on special screenings and new flavors.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brass/50 w-full"
            />
            <button className="bg-brass text-coffee-dark px-6 py-3 text-xs font-accent font-bold uppercase tracking-widest">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
        <p className="font-body text-[10px] tracking-widest text-cream/30 uppercase text-center md:text-left">
          © 2024 ANAGANAGA COFFEE KATHALU. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 font-body text-[10px] tracking-widest text-cream/30 uppercase">
          <a href="#" className="hover:text-brass">Privacy Policy</a>
          <a href="#" className="hover:text-brass">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
