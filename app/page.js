import Image from "next/image";
import VideoCTA from "./components/videoCTA";
import Newsletter from "./components/newsletter";
export default function Home() {
  return (
    <div>
      <h1 className="">Crafting</h1>
      <VideoCTA />
      <Newsletter />
    </div>
    
  );
}
