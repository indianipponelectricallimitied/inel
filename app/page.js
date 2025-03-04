import Image from "next/image";
import AboutSection from "./components/about-section";
import VideoCTA from "./components/videoCTA";
import Newsletter from "./components/newsletter";
import Tab from "./components/vehicle-slide/slider";
  export default function Home() {

    
  return (
    <div>
      <h1 className="">Crafting</h1>
      <Tab />
      <AboutSection />
      <VideoCTA />
      <Newsletter />
    </div>
  );
}
