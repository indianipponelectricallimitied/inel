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

export default function AboutUs() {

    return (
        <>
            <BreadCrumb 
                pageTitle= "About Us"
                breadCrumbBg= "/images/about/breadcrumb.png"
            />
            <About />
            <VissionMission />
            <Innovation />
            <Journey />
            <OurLeadership />
            <ManufacturingFacilities />

            <div className="grid-background bg-cover bg-center bg-no-repeat">
                <Achievements />
                <Team />
            </div>
            <Map />
        </>
    )
}
