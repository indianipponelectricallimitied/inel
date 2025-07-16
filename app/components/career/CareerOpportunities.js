"use client"
import Image from "next/image";
import QuickLinks from "../Ui/QuickLinks";
import Button from "../Ui/button";
import { useState } from "react";

export default function CareerOpportunities({quickLinks}) {
    const [activeTab, setActiveTab] = useState(0);

    // Content for each tab
    const tabContent = [
     
        {
            title: "Recent Graduates",
            image: "/images/career/Career-Graduate.png",
            description: "An ideal opportunity for those with up to two years of experience to learn, gain practical experience, and develop skills alongside our dynamic teams.",
            buttonText: "Fuel Your Ambitions",
            buttonLink: "#apply-now"
        },
        {
            title: "Experienced Professionals",
            image: "/images/career/india-nippon-career-experienced-1.png",
            description: "Professionals with over three years of experience, eager to play a pivotal role in driving success, fostering collaboration, and influencing change.",
            buttonText: "Unlock New Horizons",
            buttonLink: "#apply-now"
        }, 
        {
            title: "Interns",
            image: "/images/career/career-Intern-2.png",
            description: "A window into the corporate world, where you can gain invaluable experience and guidance to build a strong foundation for your professional journey!",
            buttonText: "Dicover What Awaits",
            buttonLink: "#apply-now"
        },
        {
            title: "Explore more",
            image: "/images/career/career-more-oppertunities.png",
            description: "Interested in exploring opportunities with INEL at a later time? Or didn’t find what you were looking for? Join our Talent Community by sharing your contact details, and our hiring team will reach out to you when relevant openings become available.",
            buttonText: "Be a part of tomorrow",
            buttonLink: "#apply-now"
        }
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 justify-between">
            <div className="w-full lg:w-5/12 space-y-5">
                <ul className="space-y-5  pt-10">
                    {quickLinks.map((link, index) => (
                        <li key={index}>
                            <button 
                                onClick={() => handleTabClick(index)}
                                className={`border-black font-thin flex justify-between border-b pb-2 w-full text-left transition-all duration-300 ${
                                    activeTab === index 
                                        ? 'text-blue-600' 
                                        : ''
                                }`}
                            >
                                {link.title}
                                <span className={`text-[20px] transition-all duration-300
                                ${activeTab === index ? 'rotate-0' : '-rotate-45'}
                                `}>→</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full lg:w-5/12 space-y-8">
                <Image 
                    src={tabContent[activeTab].image} 
                    alt={tabContent[activeTab].title} 
                    className="rounded-[20px] h-[280px] object-cover" 
                    width={800} 
                    height={800} 
                />
                <p>{tabContent[activeTab].description}</p>
                <div className="flex flex-col md:flex-row lg:items-center gap-5">
                    <Button variant="blue" href={tabContent[activeTab].buttonLink}>
                        {tabContent[activeTab].buttonText}
                    </Button>
                </div>
            </div>    
        </div>
    )
}   
