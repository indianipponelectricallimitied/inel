import BreadCrumb from "../components/Ui/bread-crumb";
import TechnologyPage from "../components/Technology/technology";
import HoverExpand from "../components/Technology/HoverExpand";
import Video from "../components/Technology/fullscreenVideo";
import Image from "next/image";

export default function Technology() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Technology"
                breadCrumbBg= "/images/Technology/tech-breadcrumb.jpg"
            />

            <TechnologyPage />

            <HoverExpand />


            <section>
                <div className="container mx-auto  flex flex-col lg:flex-row gap-10 py-20" id="research-development">
                    <div className="lg:w-1/2 w-full space-y-5">
                        <h5 >Research & Development</h5>
                        <h1 >State-of-the-Art<br/>   Research Center</h1>
                        <p>The R&D Centre in Hosur, Tamil Nadu, drives advancements in automotive technologies, specializing in Embedded Hardware and Software Design, as well as Electro-Mechanical Design. Innovations include EFI controllers, ISG systems with sensorless commutation, and key EV components like DC-DC Converters and EV Motor Controllers with FOC. The center also develops advanced sensors such as Steering Angle Sensors (SAS) and TPMS, along with Instrument Clusters featuring CAN, Bluetooth, and Google Map Navigation.</p>
                        <p>
                        With a strong focus on R&D, the center has secured multiple patents and invested ₹2,045 lakhs for FY 2023-24. This commitment strengthens INEL's competitive edge by continuously developing cutting-edge technologies in the automotive sector.
                        </p>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <Image src="/images/Technology/Group.png" alt="Research Development"
                        className="rounded-[20px] h-full object-cover w-full"
                        width={900}
                        height={900}
                        />
                    </div>
                </div>
            </section>

            <Video videoUrl="/videos/home-main.mp4" />

        </>
    )
}
