"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const milestones= [
    {
        title: "Patents Filed",
        numbers: "10",
        description: " Driving innovation with filed patents.",
        image: "/images/Technology/Patents.png"
    },
    {
        title: "Engineers",
        numbers: "330",
        description: "A skilled team of engineers.",
        image: "/images/Technology/Engineers.png"
    },
    {
        title: "Design Allocations",
        numbers: "45",
        description: " Precision in every design allocation",
        image: "/images/Technology/Allocations.png"
    }
]

const innovations = [
    {
        title: "Sustainable Engineering",
        description:"India Nippon Electricals Limited (INEL) is committed to sustainability with a dual focus on both internal combustion engine (ICE) and electric vehicle (EV) technologies. For ICE vehicles, INEL develops advanced solutions like Integrated Starter Generator (ISG) systems, improving power output, efficiency, and fuel economy. In the EV sector, the company offers cutting-edge products like DC-DC Converters, Traction Motors, and Motor Controllers.",
        description2:"INEL also prioritizes environmental sustainability, reducing energy consumption, emissions, and promoting waste recycling, water conservation, and solar energy initiatives to lower Greenhouse Gas emissions.",
        image: "/images/Technology/sustainable.webp"
    },
    {
        title: "Safety-First Engineering",
        description:"At INEL, safety isn't an add-on — it's engineered from the start. Through innovative mechatronic solutions like Tire Pressure Monitoring Systems (TPMS), Steering Angle Sensors (SAS), and Reverse Parking Assist Systems (RPAS), the company enhances driver awareness and vehicle control. INEL also delivers key components such as Speed Sensors and Throttle Position Sensors (TPS), improving engine response and operational safety.",
        description2:"Backed by ISO 45001:2018 certification, INEL maintains top-tier Environment, Health, and Safety (EHS) standards, with rigorous protocols, employee training, and emergency preparedness that significantly reduce workplace injuries.",
        image: "/images/Technology/saftey.webp"
    },
    {
        title: "Smart Automotive Solutions",
        description:"INEL is advancing next-gen automotive systems through intelligent electronic and mechatronic solutions that boost vehicle efficiency, safety, and control. Its portfolio includes TPMS, SAS, and Engine Control Sensors—enhancing performance and driver response.",
        description2:"The company supports EV adoption with DC-DC Converters, Traction Motors, and Motor Controllers, while ISG systems improve ICE vehicle efficiency. INEL’s smart Instrument Clusters with Bluetooth and navigation elevate driving experiences. Strong R&D and strategic partnerships position INEL as a leader in clean, connected automotive innovation.",
        image: "/images/Technology/smart.webp"
    },
   
    {
        title: "Powertrain Innovations",
        description:"India Nippon Electricals Limited (INEL) leads in powertrain innovation with advanced solutions for both Internal Combustion Engine (ICE) and Electric Vehicle (EV) systems. For ICE platforms, INEL develops Electronic Fuel Injection (EFI) Engine Control Units (ECUs) and Integrated Starter Generator (ISG) systems, enhancing output, efficiency, and emissions control.",
        description2:"In the EV space, the company provides DC-DC Converters, Traction Motors, and Motor Controllers, along with ongoing advancements in control systems. Backed by a dedicated R&D center, INEL continues to drive innovation and secure patents in powertrain technology.",
        image: "/images/Technology/powertrain.webp"
    },
]

export default function TechnologyPage() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Create an Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // Adjust these values as needed
                threshold: 0.5, // 50% of the element must be visible
                rootMargin: "-100px 0px" // Accounts for sticky header
            }
        );

        // Observe all innovation sections
        document.querySelectorAll('[id]').forEach((section) => {
            observer.observe(section);
        });

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="container mx-auto py-20  scroll-smooth" id="patents">
              <div className="flex flex-col md:flex-row gap-4 justify-center pb-20">
                {milestones.map((milestone, index) => (
                    <div key={index} className="card-top-left-bottom-right flex flex-col gap-1 p-4 rounded-[10px] text-white justify-center bg-gradient-to-t from-[#160959] to-[#578EFF] lg:w-1/4">
                         <Image src={milestone.image} alt={milestone.title} width={130} height={130} 
                         className="ms-auto -mb-10"
                         />
                         <h1>{milestone.numbers}</h1>
                        <h2>{milestone.title}</h2>
                        <p>{milestone.description}</p>
                       
                    </div>
                ))}
              </div>

              <h5 className="text-center">Innovation</h5>
              <h1 className="text-center">Shaping the Future of  Mobility</h1>

                <div className="md:flex flex-col md:flex-row gap-10 justify-center sticky top-0 py-3 my-10 bg-white  w-fit mx-auto px-10 rounded-[20px] hidden
                ">
                    {innovations.map((innovation, index) => (
                        <div key={index}>
                            <a
                                href={`#${innovation.title}`}
                                className={`transition-all duration-300 pb-1 font-medium ${
                                    activeSection === innovation.title 
                                    ? 'border-b border-primary' 
                                    : ''
                                }`}
                            >
                                {innovation.title}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    {innovations.map((innovation, index) => (
                        <div key={index} className={`flex gap-5 justify-center py-12 border-b border-[#D9D9D9] flex-col md:flex-row
                        ${index === innovations.length - 1 ? 'border-b-0' : ''}
                        ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`
                         } id={innovation.title}>
                            <Image src={innovation.image} alt={innovation.title} width={530} height={530}
                                className="w-full md:w-1/2 object-cover"
                            />
                            <div className="w-full md:w-1/2">
                                    <h1 className="pb-5">{innovation.title}</h1>
                                    <p>{innovation.description}</p><br/>
                                    <p className="pt-2">{innovation.description2}</p>

                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}
