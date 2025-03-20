import Image from "next/image";
import AboutSection from "./components/about-section";
import VideoCTA from "./components/videoCTA";
import Newsletter from "./components/newsletter";
import Tab from "./components/vehicle-slide/slider";
import HeroVideoSection from "./components/home/hero-video-section";
import Sustainable from "./components/home/Sustainable";
import TechnologyInnovation from "./components/home/Technology-Innovation";

  export default function Home() {

    
  return (
    <div>
      <HeroVideoSection />
      <Tab />
      <Sustainable />
      <VideoCTA />
      <TechnologyInnovation />
      <AboutSection />
      <Newsletter />
    </div>
  );
}
