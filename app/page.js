import Image from "next/image";
import Navbar from "./components/Navbar";
import bg from '../public/green-bh.jpg'
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Support from "./components/Support";
import Features from "./components/Features";
import Benefit from "./components/Benefit";
import Plan from "./components/Plan";
import People from "./components/People";
import Footer from "./components/Footer";

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
      <div className="bg-gradient-to-r from-white to-green-200">
        <Benefit />
        <Plan />
      </div>
      <div className="bg-[#161C28]">
        <People />
        <Footer />
      </div>
    </div>
  );
}
