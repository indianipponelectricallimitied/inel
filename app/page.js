import AboutSection from "./components/cta";
import VideoCTA from "./components/videoCTA";
import Newsletter from "./components/newsletter";
import Tab from "./components/vehicle-slide/slider";
import HeroVideoSection from "./components/home/hero-video-section";
import Sustainable from "./components/home/Sustainable";
import TechnologyInnovation from "./components/home/Technology-Innovation";
import InvestorRelations from "./components/home/Investor-Relations";
import MarqueeSection from "./components/home/marquee-setion";
import Newsroom from "./components/Newsroom/newsroom";

import newsletterBg from "@/public/Subtract-dummy.png";

export default function Home() {

    
  return (
    <div>
      <HeroVideoSection />
      <Tab />
      <Sustainable />
      <VideoCTA />
      <TechnologyInnovation />
      <InvestorRelations />
      <MarqueeSection />
      <AboutSection />
      <Newsroom />
      <Newsletter newsletterBg={newsletterBg} />
    </div>
  );
}
