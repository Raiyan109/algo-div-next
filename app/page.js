import Image from "next/image";
import Navbar from "./components/Navbar";
import bg from '../public/green-bh.jpg'
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Support from "./components/Support";
import Features from "./components/Features";

export default function Home() {
  return (
    <div>
      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url('${bg.src}')` }}>
        <Navbar />
        <Hero />
        <Companies />
      </div>
      <Support />
      <Features />
    </div>
  );
}
