"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuSection {
  category: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
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
      { name: "Boost", price: "25" },
      { name: "Horlicks", price: "25" },
      { name: "Badam Milk", price: "25" },
      { name: "Pista Milk", price: "25" },
    ],
  },
  {
    category: "Mojitos",
    items: [
      { name: "Blue Mojito", price: "49" },
      { name: "Water Melon Mojito", price: "49" },
      { name: "Lime Mint Mojito", price: "49" },
      { name: "Mango Mojito", price: "49" },
      { name: "Strawberry Mojito", price: "49" },
    ],
  },
  {
    category: "Lassies",
    items: [
      { name: "Sweet Lassi", price: "49" },
      { name: "Strawberry Lassi", price: "49" },
      { name: "Chocolate Lassi", price: "49" },
      { name: "Banana Lassi", price: "49" },
      { name: "Mango Lassi", price: "49" },
    ],
  },
  {
    category: "Milk Shakes",
    items: [
      { name: "Oreo Shake", price: "69" },
      { name: "Kitkat Shake", price: "69" },
      { name: "Chocolate Shake", price: "69" },
      { name: "Vanilla Shake", price: "69" },
      { name: "Butter Scotch Shake", price: "69" },
      { name: "Strawberry Shake", price: "69" },
      { name: "Mango Shake", price: "69" },
    ],
  },
  {
    category: "Samosa",
    items: [
      { name: "Onion Samosa", price: "20" },
      { name: "Corn Samosa", price: "20" },
      { name: "Chicken Samosa", price: "30" },
    ],
  },
  {
    category: "Sandwich",
    items: [
      { name: "Veg Sandwich", price: "49" },
      { name: "Cheese Sandwich", price: "59" },
      { name: "Corn Sandwich", price: "59" },
    ],
  },
  {
    category: "French Fries",
    items: [
      { name: "Salt French Fries", price: "59" },
      { name: "Peri Peri French Fries", price: "69" },
      { name: "Cheese French Fries", price: "69" },
    ],
  },
  {
    category: "Maggi",
    items: [
      { name: "Plain Maggi", price: "39" },
      { name: "Veg Maggi", price: "49" },
      { name: "Egg Maggi", price: "59" },
      { name: "Cheese Maggi", price: "59" },
      { name: "Corn Maggi", price: "59" },
    ],
  },
  {
    category: "Hot Snacks",
    items: [
      { name: "Veg Nuggets", price: "49" },
      { name: "Chicken Nuggets", price: "59" },
      { name: "Chilli Cheese Nuggets", price: "59" },
      { name: "Potato Bites", price: "49" },
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
