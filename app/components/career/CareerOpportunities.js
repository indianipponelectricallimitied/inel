"use client"
import Image from "next/image";
import Button from "../Ui/button";
import { useState } from "react";

export default function CareerOpportunities({ quickLinks }) {
    // Always start with Experienced Professionals as the first tab
    const [activeTab, setActiveTab] = useState(0);
    const [showInternDetails, setShowInternDetails] = useState(false);

    // Define the tab content in the desired order
    const tabContent = [
        {
            title: "Experienced Professionals",
            image: "/images/career/india-nippon-career-experienced-1.png",
            description: "Professionals with over three years of experience, eager to play a pivotal role in driving success, fostering collaboration, and influencing change.",
            buttonText: "Unlock New Horizons",
            buttonLink: "https://career.indianippon.com/indianippon/joblistdept/Experienced Professionals"
        },
        {
            title: "Recent Graduates",
            image: "/images/career/Career-Graduate.png",
            description: "An ideal opportunity for those with up to two years of experience to learn, gain practical experience, and develop skills alongside our dynamic teams.",
            buttonText: "Fuel Your Ambitions",
            buttonLink: "https://career.indianippon.com/indianippon/joblistdept/Recent%20Graduates"
        },
        {
            title: "Interns",
            image: "/images/career/career-Intern-2.png",
            description: (
                <div className="space-y-4">
                    <p>
                        A window into the corporate world, where you can gain invaluable experience and guidance to build a strong foundation for your professional journey!
                    </p>
                    {!showInternDetails && (
                        <button
                            className="text-blue-600 underline text-sm mt-2"
                            onClick={() => setShowInternDetails(true)}
                            type="button"
                        >
                            Read more
                        </button>
                    )}
                    {showInternDetails && (
                        <div className="bg-[#F6F6F6] p-4 rounded-lg border border-gray-200 animate-fade-in">
                            <p className="font-semibold mb-2">Prerequisites:</p>
                            <ul className="list-disc list-inside mb-4">
                                <li>
                                    Candidates must be pursuing an undergraduate or postgraduate degree from Tier II or III institutions.
                                </li>
                            </ul>
                            <p className="font-semibold mb-2">Internship Selection Criteria:</p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm border border-gray-300 mb-4">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Criteria</th>
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Minimum Requirement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-3 py-2 text-left">10<sup>th</sup> Score</td>
                                            <td className="border border-gray-300 px-3 py-2 text-left">80% or 8.5 CGPA</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-3 py-2 text-left">12<sup>th</sup> Score</td>
                                            <td className="border border-gray-300 px-3 py-2 text-left">70% or 7.5 CGPA</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-3 py-2 text-left">Undergraduate / Postgraduate</td>
                                            <td className="border border-gray-300 px-3 py-2 text-left">6.5 CGPA with no history of arrears</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-3 py-2 text-left">Aptitude Test</td>
                                            <td className="border border-gray-300 px-3 py-2 text-left">60%</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-3 py-2 text-left">Interview</td>
                                            <td className="border border-gray-300 px-3 py-2 text-left">Subject to clearance</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-3 py-2 text-left">Duration</td>
                                            <td className="border border-gray-300 px-3 py-2 text-left">6 months / 12 months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-700">
                                <b className="font-bold">NOTE:</b> Internship opportunities are limited to Technical and Management roles. We regret that we will not be able to contact all applicants. Only shortlisted eligible candidates will be reached out to. We appreciate your understanding.
                            </p>
                            <button
                                className="text-blue-600 underline text-sm mt-2"
                                onClick={() => setShowInternDetails(false)}
                                type="button"
                            >
                                Show less
                            </button>
                        </div>
                    )}
                </div>
            ),
            buttonText: "Discover What Awaits",
            buttonLink: "https://career.indianippon.com/indianippon/joblistdept/Interns"
        },
        {
            title: "Explore more",
            image: "/images/career/career-more-oppertunities.png",
            description: "Interested in exploring opportunities with INEL at a later time? Or didn’t find what you were looking for? Join our Talent Community by sharing your contact details, and our hiring team will reach out to you when relevant openings become available.",
            buttonText: "Be a part of tomorrow",
            buttonLink: "https://career.indianippon.com/indianippon/submit-your-resume"
        }
    ];

    // Reorder quickLinks so "Experienced Professionals" is always first
    const orderedQuickLinks = (() => {
        if (!quickLinks || !Array.isArray(quickLinks)) return [];
        const experiencedIndex = quickLinks.findIndex(
            (link) =>
                link.title &&
                link.title.toLowerCase().includes("experienced professional")
        );
        if (experiencedIndex === -1) return quickLinks;
        // Move Experienced Professionals to the front
        const reordered = [quickLinks[experiencedIndex], ...quickLinks.slice(0, experiencedIndex), ...quickLinks.slice(experiencedIndex + 1)];
        return reordered;
    })();

    const handleTabClick = (index) => {
        setActiveTab(index);
        // Reset intern details readmore if switching away
        if (index !== 2 && showInternDetails) setShowInternDetails(false);
    };

    return (
        <div className="container mx-auto flex flex-col lg:flex-row gap-8 justify-between">
            <div className="w-full lg:w-5/12 space-y-5">
                <ul className="space-y-5  pt-10">
                    {orderedQuickLinks.map((link, index) => (
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
                <div>
                    {typeof tabContent[activeTab].description === "string"
                        ? <p>{tabContent[activeTab].description}</p>
                        : tabContent[activeTab].description
                    }
                </div>
                <div className="flex flex-col md:flex-row lg:items-center gap-5">
                    <Button variant="blue" href={tabContent[activeTab].buttonLink} target="_blank">
                        {tabContent[activeTab].buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}
