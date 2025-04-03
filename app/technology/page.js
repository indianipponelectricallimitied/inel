import BreadCrumb from "../components/Ui/bread-crumb";
import TechnologyPage from "../components/Technology/technology";
import HoverExpand from "../components/Technology/HoverExpand";
import Video from "../components/Technology/Video";
import Image from "next/image";

export default function Technology() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Technology"
                breadCrumbBg= "/images/about/vision-mission.webp"
            />

            <TechnologyPage />

            <HoverExpand />


            <section>
                <div className="container mx-auto px-5 md:px-0 flex flex-col md:flex-row gap-10 py-20">
                    <div className="md:w-1/2 w-full space-y-5">
                        <h5 >Research & Development</h5>
                        <h1 >State-of-the-Art<br/>   Research Center</h1>
                        <p>At INEL, Research and Development (R&D) is the cornerstone of our strategy for innovation, ensuring that we remain at the forefront of the automotive industry. Our dedicated R&D centers and advanced technology infrastructure allow us to continuously push boundaries, developing cutting-edge products and solutions for both internal combustion engine (ICE) and electric vehicle (EV) markets.</p>
                        <p>At INEL, we lead in developing powertrain systems that maximize vehicle efficiency, from ignition systems for ICE vehicles to electronic fuel injection (EFI) and integrated starter generators (ISG). Our technologies are designed to reduce emissions, improve fuel economy, and enhance the driving experience, while also integrating seamlessly into electric vehicle powertrains for higher performance and lower environmental impact.</p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <Image src="/images/technology/Development.jpeg" alt="Research Development"
                        className="rounded-[20px] h-full object-cover w-full"
                        width={900}
                        height={900}
                        />
                    </div>
                </div>
            </section>

            <Video />

        </>
    )
}
