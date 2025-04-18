"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const milestones= [
    {
        title: " Filed",
        numbers: "10",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/images/technology/Patents.png"
    },
    {
        title: "Engineers",
        numbers: "330",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/images/technology/Engineers.png"
    },
    {
        title: "Design Allocations",
        numbers: "45",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/images/technology/Allocations.png"
    }
]

const innovations = [
    {
        title: "Sustainable Mobility",
        description: "India Nippon Electricals Limited (INEL) is committed to accelerating the transition to green mobility solutions. With a focus on electric vehicle (EV) components, energy-efficient ignition systems, and battery management systems, INEL is leading the way towards a cleaner future. Our efforts include the development of DC-DC converters, motor controllers, and advanced powertrains for electric vehicles, all designed to reduce environmental impact and increase energy efficiency.",
        image: "/images/technology/Rectangle.png"
    },
    {
        title: "Safe Mobility",
        description: "Safety is paramount at INEL. We design and develop critical components such as speed sensors, temperature sensors, and tire pressure monitoring systems (TPMS) to enhance vehicle safety. Our research focuses on creating systems that work together to monitor vehicle health in real-time, ensuring reliability and preventing accidents. With our continuous innovation, we are contributing to safer roads for everyone.",
        image: "/images/technology/Rectangle-(4).png"
    },
    {
        title: "Smart Mobility",
        description: "INEL is advancing smart mobility by integrating intelligent systems into vehicles. While we're not yet focused on full-scale autonomous driving, our developments in sensor technologies, vehicle-to-vehicle communication, and energy optimization are laying the groundwork for the next generation of connected and autonomous vehicles. Our solutions help vehicles become more intelligent, responsive, and energy-efficient in real-world environments.",
        image: "/images/technology/Rectangle-(3).png"
    },
    {
        title: "Autonomous Mobility",
        description: "Inspired by the growing need for autonomous vehicles, INEL is exploring sensor-based technologies and real-time data processing to support autonomous driving in the future. While our focus is currently on improving sensor technology and vehicle control systems, our long-term vision includes contributing to the development of autonomous vehicles.",
        image: "/images/technology/Rectangle-(2).png"
    },
    {
        title: "Powertrain Innovations",
        description: "At INEL, we lead in developing powertrain systems that maximize vehicle efficiency, from ignition systems for ICE vehicles to electronic fuel injection (EFI) and integrated starter generators (ISG). Our technologies are designed to reduce emissions, improve fuel economy, and enhance the driving experience, while also integrating seamlessly into electric vehicle powertrains for higher performance and lower environmental impact.",
        image: "/images/technology/Rectangle-(1).png"
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
            <div className="container mx-auto py-20  scroll-smooth">
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
                                className="w-full md:w-1/2"
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
