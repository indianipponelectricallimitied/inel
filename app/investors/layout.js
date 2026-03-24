'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import BreadCrumb from "../components/Ui/bread-crumb";
import InvestorNav from "./investor-nav";
import Newsletter from "../components/Common/newsletter";
import StockDataCard from "../components/Common/stockmarket/StockDataCard";
import Button from "../components/Ui/button";
import { InvestorProvider } from './InvestorContext';

export default function InvestorLayout({ children }) {
    const reports = [
        { title: "Annual Reports", link: "/investors/disclos-underreg-46-of-sebi-lodr/Annual Report", onClick: null },
        { title: "Policies", link: "/investors/disclos-underreg-46-of-sebi-lodr/Policies", onClick: null },
        { title: "Corporate Governance", link: "/investors/disclos-underreg-46-of-sebi-lodr/Corporate Governance-Compliance", onClick: null },
        { title: "Outcome of Board Meeting/Results", link: "/investors/disclos-underreg-46-of-sebi-lodr/Outcome of Board Meeting-Results", onClick: null },
    ];

    return (
        <InvestorProvider>
            <div className="bg-white min-h-screen">
                <BreadCrumb
                    pageTitle="Investors"
                    breadCrumbBg="/images/invester/investor.png"
                />

                {/* Overview Top Section (Global) */}
                <div className="container mx-auto py-20">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Left Column: Glance + Reports */}
                        <div className="w-full lg:w-[45%] space-y-16">
                            <div className="space-y-5">
                                <h1>INEL at Glance</h1>
                                <p>INEL (India Nippon Electricals Limited) is a leader in automotive components, with expertise in electronic ignition systems and strong growth, including a 23% increase in aftermarket sales in FY 2023-24. The company is expanding into EV components and global markets.</p>
                                <p>
                                    INEL maintains robust governance, a 30%+ dividend payout, and is committed to long-term shareholder value through growth in ICE and EV sectors. Investors can access key resources, including AGM details and share transfer information.
                                </p>
                            </div>

                            <ul className="space-y-5 pt-5">
                                {reports.map((report, index) => (
                                    <li key={index} className="flex gap-10 items-center">
                                        <Image src="/images/invester/pdf.png" alt={report.title} width={50} height={100} />
                                        {report.onClick ? (
                                            <button
                                                onClick={report.onClick}
                                                className="font-thin w-full flex justify-between border-b border-black pb-2 text-left"
                                            >
                                                {report.title}
                                                <GoArrowUpRight className="text-[20px]" />
                                            </button>
                                        ) : (
                                            <a href={report.link} className="font-thin w-full flex justify-between border-b border-black pb-2">
                                                {report.title}
                                                <GoArrowUpRight className="text-[20px]" />
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column: Stock + Cards */}
                        <div className="w-full lg:w-[55%] space-y-10">
                            <div className="w-full">
                                <StockDataCard background="bg-[#F6F6F6]" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex p-5 flex-col justify-between gap-5 h-80 rounded-[20px] bg-[url('/images/invester/Investor-Presentation.png')] bg-cover bg-center">
                                    <h2 className="text-white">Investor <br /> Presentation</h2>
                                    <Button
                                        variant="white"
                                        onClick={(e) => { e.preventDefault(); window.location.href = '/investors/investor-s-meet-presentation/2025-26'; }}
                                    >
                                        Investor Presentation
                                    </Button>
                                </div>
                                <div className="flex p-5 flex-col justify-between gap-5 h-80 rounded-[20px] bg-[url('/images/invester/Board-Directors.png')] bg-cover bg-center">
                                    <h2 className="text-white">Board  Of<br /> Directors</h2>
                                    <Button
                                        variant="white"
                                        href="https://indian-nippon.s3.ap-south-1.amazonaws.com/investor/Board+of+Directors/Board+of+Directors.pdf"
                                        target="_blank"
                                    >
                                        Know More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gray Content Section with Sidebar */}
                <div className="bg-[#f6f6f6] py-20">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row gap-20">
                            {/* Navigation Sidebar */}
                            <div className="w-full md:w-1/3">
                                <InvestorNav />
                            </div>

                            {/* Content Area */}
                            <div className="w-full md:w-2/3 h-full overflow-y-auto overflowbar">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>

                <Newsletter />
            </div>
        </InvestorProvider>
    );
}
