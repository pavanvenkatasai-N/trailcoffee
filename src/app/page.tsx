import Hero from "@/components/Hero";
import CoffeeScroll from "@/components/CoffeeScroll";
import Features from "@/components/Features";
import MenuTeaser from "@/components/MenuTeaser";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-coffee-dark">
      <Navbar />
      <Hero />
      <Features />
      <div id="story">
        <CoffeeScroll />
      </div>
      <MenuTeaser />
      <Footer />
    </main>
  );
}
