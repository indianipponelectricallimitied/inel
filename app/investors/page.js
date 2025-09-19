"use client"
import BreadCrumb from "../components/Ui/bread-crumb"
import Newsletter from "../components/Common/newsletter"
import StockDataCard from "../components/Common/stockmarket/StockDataCard"
import InvestorTabs from "./investor-tabs"
import Button from "../components/Ui/button"
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go";
import { useState, useRef, useEffect } from "react";
import ApiService from '../services/api';

export default function Investors() {
    const [openPoliciesAccordion, setOpenPoliciesAccordion] = useState(false);
    const [openCorporateGovernanceAccordion, setOpenCorporateGovernanceAccordion] = useState(false);
    const [openInvestorMeetAccordion, setOpenInvestorMeetAccordion] = useState(false);
    const [openBoardMeetingAccordion, setOpenBoardMeetingAccordion] = useState(false);
    const [openAnnualReportAccordion, setOpenAnnualReportAccordion] = useState(false);
    const [openAGMInspectionAccordion, setOpenAGMInspectionAccordion] = useState(false);
    const [investorData, setInvestorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const investorDataRef = useRef(null);

    const collectionPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Investor Relations",
        "description": "Comprehensive investor information including financial reports, stock data, annual reports, and corporate governance details for India Nippon Electricals Limited.",
        "url": "https://indianippon.com/investors",
        "mainEntity": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited",
            "alternateName": "INEL"
        },
        "hasPart": [
            {
                "@type": "WebPage",
                "name": "Annual Reports",
                "description": "Annual financial reports and performance data"
            },
            {
                "@type": "WebPage", 
                "name": "Corporate Governance",
                "description": "Corporate governance policies and practices"
            },
            {
                "@type": "WebPage",
                "name": "Board Meeting Results",
                "description": "Outcome of board meetings and financial results"
            },
            {
                "@type": "WebPage",
                "name": "AGM-2025 Inspection documents",
                "description": "Inspection documents for AGM-2025"
            }
        ]
    };

    // Update document head for SEO
    useEffect(() => {
        // Update title
        document.title = "Investor Relations - Financial Information & Reports | India Nippon Electricals";
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Access comprehensive investor information for INEL including financial reports, stock data, annual reports, policies, and corporate governance details. Explore investment opportunities.");
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = "Access comprehensive investor information for INEL including financial reports, stock data, annual reports, policies, and corporate governance details. Explore investment opportunities.";
            document.head.appendChild(meta);
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'investor relations, financial reports, stock data, annual reports, corporate governance, investment opportunities, INEL shares');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'keywords';
            meta.content = 'investor relations, financial reports, stock data, annual reports, corporate governance, investment opportunities, INEL shares';
            document.head.appendChild(meta);
        }

        // Update canonical link
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', 'https://indianippon.com/investors');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://indianippon.com/investors';
            document.head.appendChild(link);
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Investor Relations - Financial Information & Reports | India Nippon Electricals');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:title');
            meta.content = 'Investor Relations - Financial Information & Reports | India Nippon Electricals';
            document.head.appendChild(meta);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', "Access comprehensive investor information for INEL including financial reports, stock data, annual reports, policies, and corporate governance details. Explore investment opportunities.");
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:description');
            meta.content = "Access comprehensive investor information for INEL including financial reports, stock data, annual reports, policies, and corporate governance details. Explore investment opportunities.";
            document.head.appendChild(meta);
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', 'https://indianippon.com/investors');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:url');
            meta.content = 'https://indianippon.com/investors';
            document.head.appendChild(meta);
        }

        const ogType = document.querySelector('meta[property="og:type"]');
        if (ogType) {
            ogType.setAttribute('content', 'website');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:type');
            meta.content = 'website';
            document.head.appendChild(meta);
        }

        const ogSiteName = document.querySelector('meta[property="og:site_name"]');
        if (ogSiteName) {
            ogSiteName.setAttribute('content', 'India Nippon Electricals');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:site_name');
            meta.content = 'India Nippon Electricals';
            document.head.appendChild(meta);
        }

        // Update Twitter Card tags
        const twitterCard = document.querySelector('meta[name="twitter:card"]');
        if (twitterCard) {
            twitterCard.setAttribute('content', 'summary_large_image');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'twitter:card';
            meta.content = 'summary_large_image';
            document.head.appendChild(meta);
        }

        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', 'Investor Relations - Financial Information & Reports | India Nippon Electricals');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'twitter:title';
            meta.content = 'Investor Relations - Financial Information & Reports | India Nippon Electricals';
            document.head.appendChild(meta);
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', "Access comprehensive investor information for INEL including financial reports, stock data, annual reports, policies, and corporate governance details. Explore investment opportunities.");
        } else {
            const meta = document.createElement('meta');
            meta.name = 'twitter:description';
            meta.content = "Access comprehensive investor information for INEL including financial reports, stock data, annual reports, policies, and corporate governance details. Explore investment opportunities.";
            document.head.appendChild(meta);
        }
    }, []);

    useEffect(() => {
        const fetchInvestorData = async () => {
            try {
                const data = await ApiService.getInvestorData();
                setInvestorData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching investor data:', error);
                setLoading(false);
            }
        };

        fetchInvestorData();
    }, []);

    // Function to find subheading by name
    const findSubheadingByName = (mainItemId, subheadingName) => {
        const mainItem = investorData.find(item => item.id === mainItemId);
        if (mainItem && mainItem.subheadings) {
            return mainItem.subheadings.find(sub => sub.name === subheadingName);
        }
        return null;
    };

    // Function to get the first content link from a subheading
    const getSubheadingLink = (mainItemId, subheadingName) => {
        const subheading = findSubheadingByName(mainItemId, subheadingName);
        if (subheading && subheading.contents && subheading.contents.length > 0) {
            return subheading.contents[0].link;
        }
        return null;
    };

    const reports = [
        {
            title: "Annual Reports",
            link: loading ? "files/INEL Annual Report - 2023-24.pdf" : (getSubheadingLink(11, "Annual Report") || "files/INEL Annual Report - 2023-24.pdf"),
            onClick: () => {
                if (!loading && investorData.length > 0) {
                    // Find the Annual Report subheading (id: 13) under main item (id: 11)
                    const mainItemIndex = investorData.findIndex(item => item.id === 11);
                    if (mainItemIndex !== -1) {
                        const annualReportSubheading = investorData[mainItemIndex].subheadings?.find(sub => sub.id === 13);
                        if (annualReportSubheading) {
                            // Set the annual report accordion to open
                            setOpenAnnualReportAccordion(true);
                            // Scroll to the section after a longer delay to ensure accordion is set
                            setTimeout(() => {
                                investorDataRef.current?.scrollIntoView({ 
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }, 400);
                        }
                    }
                }
            }
        },
        {
            title: "Policies",
            link: "#",
            onClick: () => {
                setOpenPoliciesAccordion(true);
                setTimeout(() => {
                    investorDataRef.current?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        },
        {
            title: "Corporate Governance",
            link: "#",
            onClick: () => {
                setOpenCorporateGovernanceAccordion(true);
                setTimeout(() => {
                    investorDataRef.current?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        },
        {
            title: "Outcome of Board Meeting/Results",
            link: "#",
            onClick: () => {
                setOpenBoardMeetingAccordion(true);
                // Scroll to the section after a longer delay to ensure accordion is set
                setTimeout(() => {
                    investorDataRef.current?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 400);
            }
        },
        // {
        //     title: "AGM-2025 Inspection documents",
        //     link: null,
        //     onClick: () => {
        //         setOpenAGMInspectionAccordion(true);
        //         setTimeout(() => {
        //             investorDataRef.current?.scrollIntoView({ 
        //                 behavior: 'smooth',
        //                 block: 'start'
        //             });
        //         }, 400);
        //     }
        // }
    ];
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionPageJsonLd),
                }}
            />

            <BreadCrumb
                pageTitle="Investors"
                breadCrumbBg="/images/invester/investor.png"
            />

            <div className="container mx-auto pt-20 pb-5 flex flex-col md:flex-row justify-between gap-20">
                <div className="w-full lg:w-2/6 space-y-5">
                    <h1>INEL at Glance</h1>
                    <p>INEL (India Nippon Electricals Limited) is a leader in automotive components, with expertise in electronic ignition systems and strong growth, including a 23% increase in aftermarket sales in FY 2023-24. The company is expanding into EV components and global markets.</p>
                    <p>
                    INEL maintains robust governance, a 30%+ dividend payout, and is committed to long-term shareholder value through growth in ICE and EV sectors. Investors can access key resources, including AGM details and share transfer information.
                    </p>
                </div>
                <div className="w-full lg:w-4/6 mx-auto">
                    <StockDataCard background="bg-[#F6F6F6]" />
                </div>
            </div>

            <div className="container mx-auto pb-20 flex flex-col md:flex-row justify-between gap-20">
                <div className="w-full lg:w-2/6"> 
                <ul className="space-y-5   pt-10">
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
                <div className="w-full lg:w-4/6 mx-auto flex flex-col lg:flex-row gap-5">
                    <div className="flex p-5 flex-col justify-between gap-5 h-80  lg:w-2/5 rounded-[20px] bg-[url('/images/invester/Investor-Presentation.png')] bg-cover bg-center">
                        <h2 className="text-white">Investor <br/> Presentation</h2>
                        <Button 
                            variant="white" 
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenInvestorMeetAccordion(true);
                                // Scroll to the investor data section after a small delay
                                setTimeout(() => {
                                    investorDataRef.current?.scrollIntoView({ 
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }, 100);
                            }}
                        >
                            Investor Presentation
                        </Button>
                    </div>
                    <div className="flex p-5 flex-col justify-between gap-5 h-80 lg:w-3/5 rounded-[20px] bg-[url('/images/invester/Board-Directors.png')] bg-cover bg-center">
                        <h2 className="text-white">Board  Of<br/> Directors</h2>
                        <Button variant="white" href="https://indian-nippon.s3.ap-south-1.amazonaws.com/investor/Board+of+Directors/Board+of+Directors.pdf" target="_blank">Know More</Button>
                    </div>
                </div>
            </div>

            {/* Investor Data Section */}
            <div ref={investorDataRef} className="container mx-auto  p-5 py-10 md:py-5  mb-20 bg-[#F6F6F6] rounded-[20px]">
                <InvestorTabs 
                    openPoliciesAccordion={openPoliciesAccordion} 
                    setOpenPoliciesAccordion={setOpenPoliciesAccordion}
                    openCorporateGovernanceAccordion={openCorporateGovernanceAccordion}
                    setOpenCorporateGovernanceAccordion={setOpenCorporateGovernanceAccordion}
                    openInvestorMeetAccordion={openInvestorMeetAccordion}
                    setOpenInvestorMeetAccordion={setOpenInvestorMeetAccordion}
                    openBoardMeetingAccordion={openBoardMeetingAccordion}
                    setOpenBoardMeetingAccordion={setOpenBoardMeetingAccordion}
                    openAnnualReportAccordion={openAnnualReportAccordion}
                    setOpenAnnualReportAccordion={setOpenAnnualReportAccordion}
                    openAGMInspectionAccordion={openAGMInspectionAccordion}
                    setOpenAGMInspectionAccordion={setOpenAGMInspectionAccordion}
                />
            </div>

                    
            
            <Newsletter />
        </>
    )
}
