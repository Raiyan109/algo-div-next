import Image from "next/image";
import Navbar from "./components/Navbar";
import bg from '../public/green-bh.jpg'
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <div className="bg-no-repeat bg-cover h-screen" style={{ backgroundImage: `url('${bg.src}')` }}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
