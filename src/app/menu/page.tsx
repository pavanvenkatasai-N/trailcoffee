"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuData = [
  {
    category: "Hot Beverages",
    items: [
      { name: "Tea", price: "20" },
      { name: "Coffee", price: "20" },
      { name: "Filter Coffee", price: "20" },
      { name: "Milk", price: "20" },
      { name: "Lemon Tea", price: "25" },
      { name: "Green Tea", price: "25" },
      { name: "Allam Tea", price: "25" },
      { name: "Black Coffee", price: "25" },
      { name: "Boost / Horlicks", price: "25" },
      { name: "Badam / Pista Milk", price: "25" },
    ],
  },
  {
    category: "Mojitos & Lassies",
    items: [
      { name: "Mojitos (All Flavors)", price: "49", description: "Blue, Watermelon, Lime Mint, Mango, Strawberry" },
      { name: "Lassies (All Flavors)", price: "49", description: "Sweet, Strawberry, Chocolate, Banana, Mango" },
    ],
  },
  {
    category: "Milk Shakes",
    items: [
      { name: "Premium Shakes", price: "69", description: "Oreo, Kitkat, Chocolate, Vanilla, Butter Scotch, Strawberry, Mango" },
    ],
  },
  {
    category: "Samosas & Snacks",
    items: [
      { name: "Onion / Corn Samosa", price: "20" },
      { name: "Chicken Samosa", price: "30" },
      { name: "Veg Nuggets", price: "49" },
      { name: "Chicken Nuggets", price: "59" },
      { name: "Potato Bites", price: "49" },
    ],
  },
  {
    category: "Sandwiches & Fries",
    items: [
      { name: "Veg Sandwich", price: "49" },
      { name: "Cheese / Corn Sandwich", price: "59" },
      { name: "Salt French Fries", price: "59" },
      { name: "Peri Peri / Cheese Fries", price: "69" },
    ],
  },
  {
    category: "Maggi Specials",
    items: [
      { name: "Veg / Egg Maggi", price: "40" },
      { name: "Cheese / Corn Maggi", price: "50" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#120d0c] text-[#fdfbf7]">
      <Navbar />

      <main className="section-padding pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-accent text-xs tracking-[0.5em] text-[#c5a059] uppercase mb-4 block"
            >
              The Full Narrative
            </motion.span>
            <h1 className="font-heading text-6xl md:text-8xl text-cream tracking-widest uppercase">Our Menu</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {menuData.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <h2 className="font-heading text-2xl tracking-widest text-[#c5a059] mb-8 uppercase border-b border-[#c5a059]/10 pb-4">
                  {section.category}
                </h2>
                <div className="space-y-8">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group cursor-default">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-body text-lg tracking-wide group-hover:text-[#c5a059] transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-white/5 mx-4 border-dotted" />
                        <span className="font-accent text-[#c5a059] font-bold">₹{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="font-body text-[10px] text-cream/40 mt-2 tracking-[0.2em] uppercase leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-12 glass-card text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brass/5 rounded-full blur-3xl -mr-16 -mt-16" />
            <p className="font-accent text-xs tracking-[0.3em] text-[#c5a059] mb-6 uppercase">Ready for a story?</p>
            <h3 className="font-heading text-4xl text-cream mb-10">Visit us or order for pickup</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://wa.me/918886156822"
                className="btn-premium bg-[#c5a059] text-[#120d0c] border-[#c5a059] hover:bg-transparent hover:text-[#c5a059]"
              >
                WHATSAPP ORDER
              </a>
              <a
                href="tel:+918886156822"
                className="btn-premium"
              >
                CALL US
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
