import BreadCrumb from "../components/Ui/bread-crumb";
import About from "../components/About-Us/about";
import VissionMission from "../components/About-Us/vission-mission";
import Journey from "../components/About-Us/Journey";
import OurLeadership from "../components/About-Us/OurLeadership";
import ManufacturingFacilities from "../components/About-Us/ManufacturingFacilities";
import Innovation from "../components/About-Us/Innovation";
import Achievements from "../components/About-Us/Achievements";
import Team from "../components/About-Us/Team";
import Map from "../components/About-Us/map";
import MarqueeSection from "../components/About-Us/marquee-setion";
import Newsletter from "../components/Common/newsletter";

export default function AboutUs() {

    return (
        <>
            <BreadCrumb 
                pageTitle= "About Us"
                breadCrumbBg= "/images/about/breadcrumb.jpeg"
            />
            <About />
            <VissionMission />
            <Innovation />
            {/* <Journey /> */}
            <OurLeadership />
            <ManufacturingFacilities />


            <div className="grid-with-gradients">
            <div className="gradient-sphere  w-[1000px] h-[1000px] bottom-[300px] -left-[300px]"></div>
                <Achievements />
                <Team />
            </div>
            <Map />
            <Newsletter />
            {/* <MarqueeSection /> */}
        </>
    )
}
