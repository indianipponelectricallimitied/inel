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
        title: "Sustainable Mobility",
        description: "India Nippon Electricals Limited (INEL) is committed to sustainable mobility with a dual focus on both internal combustion engine (ICE) and electric vehicle (EV) technologies. For ICE vehicles, INEL develops advanced solutions like Integrated Starter Generator (ISG) systems, improving power output, efficiency, and fuel economy. In the EV sector, the company offers cutting-edge products like DC-DC Converters, Traction Motors, and Motor Controllers. INEL also prioritizes environmental sustainability, reducing energy consumption, emissions, and promoting waste recycling, water conservation, and solar energy initiatives to lower Greenhouse Gas emissions.",
        image: "/images/Technology/Rectangle.png"
    },
    {
        title: "Safe Mobility",
        description: "India Nippon Electricals Limited (INEL) is committed to safe mobility through innovative products and strong operational practices. The company develops advanced mechatronic solutions like Tire Pressure Monitoring Systems (TPMS), Steering Angle Sensors (SAS), and Reverse Parking Assist Systems (RPAS), contributing to driver safety and optimal vehicle performance. INEL also produces critical components such as Speed Sensors and Throttle Position Sensors (TPS) that enhance engine control and safety. The company upholds high Environment, Health, and Safety (EHS) standards, achieving ISO 45001:2018 certification and implementing stringent safety protocols, training, and emergency drills, resulting in significant reductions in workplace injuries.",
        image: "/images/Technology/Rectangle-(4).png"
    },
    {
        title: "Smart Mobility",
        description: "India Nippon Electricals Limited (INEL) is advancing smart mobility through innovative electronic and mechatronic solutions that enhance vehicle intelligence, efficiency, and safety. Their product portfolio includes Tire Pressure Monitoring Systems (TPMS), Steering Angle Sensors (SAS), and Engine Control Sensors, improving safety and performance. INEL also contributes to electric vehicle (EV) adoption with DC-DC Converters, Traction Motors, and Motor Controllers, while their Integrated Starter Generator (ISG) systems boost efficiency in internal combustion engine (ICE) vehicles. Additionally, INEL's Instrument Clusters with Bluetooth connectivity and navigation enhance driver awareness. Backed by strong R&D and strategic partnerships, INEL leads the way in intelligent, eco-friendly automotive solutions.",
        image: "/images/Technology/Rectangle-(3).png"
    },
    {
        title: "Autonomous Mobility",
        description: "India Nippon Electricals Limited (INEL) is driving the evolution of autonomous mobility by developing advanced electronic and mechatronic solutions for intelligent vehicle operation. Their portfolio includes critical sensors like Steering Angle Sensors (SAS) for Electronic Stability Control (ESC) systems, essential for Advanced Driver Assistance Systems (ADAS) and self-driving functionalities. INEL also offers Reverse Parking Assist Systems (RPAS), Speed Sensors, and Engine Control Units (ECUs), all vital for autonomous decision-making. Additionally, their Motor Controllers for electric vehicles (EVs) support sophisticated autonomous functions, positioning INEL at the forefront of connected and autonomous vehicle technologies.",
        image: "/images/Technology/Rectangle-(2).png"
    },
    {
        title: "Powertrain Innovations",
        description: "India Nippon Electricals Limited (INEL) leads in powertrain innovation with advanced solutions for both Internal Combustion Engine (ICE) and Electric Vehicle (EV) systems. For ICE vehicles, INEL develops Electronic Fuel Injection (EFI) Engine Control Units (ECUs) and Integrated Starter Generator (ISG) systems, enhancing power output, fuel efficiency, and emissions control. In the EV sector, INEL offers crucial components like DC-DC Converters, Traction Motors, and Motor Controllers, with ongoing development in advanced control systems. Supported by a dedicated R&D center, INEL continues to drive innovation and secure patents in powertrain technology.",
        image: "/images/Technology/Rectangle-(1).png"
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
                    <div key={index} className="flex flex-col gap-1 p-4 rounded-[10px] text-white justify-center bg-gradient-to-t from-[#160959] to-[#578EFF] lg:w-1/4">
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
                                    <p>{innovation.description}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}
