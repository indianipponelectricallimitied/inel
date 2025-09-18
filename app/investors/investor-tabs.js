'use client';
import { useState, useEffect } from 'react';
import ApiService from '@/app/services/api';
import Accordion from '../components/Ui/accordion';
import MobileAccordion from '../components/Ui/mobile-accordion';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';

export default function InvestorTabs({ 
    openPoliciesAccordion, 
    setOpenPoliciesAccordion,
    openCorporateGovernanceAccordion,
    setOpenCorporateGovernanceAccordion,
    openInvestorMeetAccordion,
    setOpenInvestorMeetAccordion,
    openBoardMeetingAccordion,
    setOpenBoardMeetingAccordion,
    openAnnualReportAccordion,
    setOpenAnnualReportAccordion,
    openAGMInspectionAccordion,
    setOpenAGMInspectionAccordion
}) {
    const [investorData, setInvestorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [highlightedAccordion, setHighlightedAccordion] = useState(null);
    const [activeMainAccordion, setActiveMainAccordion] = useState(null);

    // Debug useEffect to monitor activeTab changes
    useEffect(() => {
        console.log('Active tab changed to:', activeTab, 'Investor data length:', investorData.length);
        if (investorData.length > 0 && activeTab >= 0) {
            console.log('Current active tab data:', investorData[activeTab]);
        }
    }, [activeTab, investorData.length, investorData]);

    useEffect(() => {
        const fetchInvestorData = async () => {
            try {
                const data = await ApiService.getInvestorData();
                console.log('Fetched investor data:', data);
                setInvestorData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching investor data:', error);
                setLoading(false);
            }
        };

        fetchInvestorData();
    }, []);

    // Handle opening policies accordion
    useEffect(() => {
        if (openPoliciesAccordion && investorData.length > 0) {
            // Find the main item with id 11 (Disclos.underReg .46 of SEBI (LODR))
            const mainItemIndex = investorData.findIndex(item => item.id === 11);
            if (mainItemIndex !== -1) {
                setActiveTab(mainItemIndex);
                // Set the subheading with id 69 as active accordion (Policies)
                setActiveAccordion(69);
                // Set main accordion as active for mobile
                setActiveMainAccordion(11);
                // Highlight the policies accordion
                setHighlightedAccordion(69);
                // Reset the flag
                setOpenPoliciesAccordion(false);
                
                // Remove highlight after 3 seconds
                setTimeout(() => {
                    setHighlightedAccordion(null);
                }, 3000);
            }
        }
    }, [openPoliciesAccordion, investorData, setOpenPoliciesAccordion]);

    // Handle opening corporate governance accordion
    useEffect(() => {
        if (openCorporateGovernanceAccordion && investorData.length > 0) {
            // Find the main item with id 11 (Disclos.underReg .46 of SEBI (LODR))
            const mainItemIndex = investorData.findIndex(item => item.id === 11);
            if (mainItemIndex !== -1) {
                setActiveTab(mainItemIndex);
                // Set the subheading with id 48 as active accordion
                setActiveAccordion(48);
                // Set main accordion as active for mobile
                setActiveMainAccordion(11);
                // Highlight the corporate governance accordion
                setHighlightedAccordion(48);
                // Reset the flag
                setOpenCorporateGovernanceAccordion(false);
                
                // Remove highlight after 3 seconds
                setTimeout(() => {
                    setHighlightedAccordion(null);
                }, 3000);
            }
        }
    }, [openCorporateGovernanceAccordion, investorData, setOpenCorporateGovernanceAccordion]);

    // Handle opening investor meet accordion
    useEffect(() => {
        if (openInvestorMeetAccordion && investorData.length > 0) {
            // Find the main item with id 14 (Investor's Meet/Presentation)
            const mainItemIndex = investorData.findIndex(item => item.id === 14);
            if (mainItemIndex !== -1) {
                setActiveTab(mainItemIndex);
                // Set the subheading with id 21 as active accordion
                setActiveAccordion(21);
                // Set main accordion as active for mobile
                setActiveMainAccordion(14);
                // Highlight the investor meet accordion
                setHighlightedAccordion(21);
                // Reset the flag
                setOpenInvestorMeetAccordion(false);
                
                // Remove highlight after 3 seconds
                setTimeout(() => {
                    setHighlightedAccordion(null);
                }, 3000);
            }
        }
    }, [openInvestorMeetAccordion, investorData, setOpenInvestorMeetAccordion]);

    // Handle opening board meeting accordion
    useEffect(() => {
        if (openBoardMeetingAccordion && investorData.length > 0) {
            // Find the main item with id 11 (Disclos.underReg .46 of SEBI (LODR))
            const mainItemIndex = investorData.findIndex(item => item.id === 11);
            console.log('Board Meeting - Main item index:', mainItemIndex, 'Investor data:', investorData);
            if (mainItemIndex !== -1) {
                // First set the active tab
                setActiveTab(mainItemIndex);
                
                // Then set the accordion after a longer delay to ensure tab is fully rendered
                setTimeout(() => {
                    console.log('Setting activeAccordion to 70 for Board Meeting');
                    setActiveAccordion(70);
                    setActiveMainAccordion(11);
                    setHighlightedAccordion(70);
                }, 300);
                
                // Reset the flag
                setOpenBoardMeetingAccordion(false);
                
                // Remove highlight after 4 seconds to give more time for scrolling
                setTimeout(() => {
                    setHighlightedAccordion(null);
                }, 4000);
            } else {
                console.log('Could not find main item with id 11');
            }
        }
    }, [openBoardMeetingAccordion, investorData, setOpenBoardMeetingAccordion]);

    // Handle opening annual report accordion
    useEffect(() => {
        if (openAnnualReportAccordion && investorData.length > 0) {
            // Find the main item with id 11 (Disclos.underReg .46 of SEBI (LODR))
            const mainItemIndex = investorData.findIndex(item => item.id === 11);
            console.log('Annual Report - Main item index:', mainItemIndex, 'Investor data:', investorData);
            if (mainItemIndex !== -1) {
                // First set the active tab
                setActiveTab(mainItemIndex);
                
                // Then set the accordion after a longer delay to ensure tab is fully rendered
                setTimeout(() => {
                    console.log('Setting activeAccordion to 13 for Annual Report');
                    setActiveAccordion(13);
                    setActiveMainAccordion(11);
                    setHighlightedAccordion(13);
                }, 300);
                
                // Reset the flag
                setOpenAnnualReportAccordion(false);
                
                // Remove highlight after 4 seconds to give more time for scrolling
                setTimeout(() => {
                    setHighlightedAccordion(null);
                }, 4000);
            } else {
                console.log('Could not find main item with id 11');
            }
        }
    }, [openAnnualReportAccordion, investorData, setOpenAnnualReportAccordion]);

    // Handle opening AGM inspection accordion
    useEffect(() => {
        if (openAGMInspectionAccordion && investorData.length > 0) {
            // Find the main item with id 20 (AGM-2025 Inspection documents)
            const mainItemIndex = investorData.findIndex(item => item.id === 20);
            console.log('AGM Inspection - Main item index:', mainItemIndex, 'Investor data:', investorData);
            if (mainItemIndex !== -1) {
                // First set the active tab
                setActiveTab(mainItemIndex);
                
                // Then set the accordion after a longer delay to ensure tab is fully rendered
                setTimeout(() => {
                    console.log('Setting activeAccordion to 76 for AGM Inspection');
                    setActiveAccordion(76);
                    setActiveMainAccordion(20);
                    setHighlightedAccordion(76);
                }, 300);
                
                // Reset the flag
                setOpenAGMInspectionAccordion(false);
                
                // Remove highlight after 4 seconds to give more time for scrolling
                setTimeout(() => {
                    setHighlightedAccordion(null);
                }, 4000);
            } else {
                console.log('Could not find main item with id 20');
            }
        }
    }, [openAGMInspectionAccordion, investorData, setOpenAGMInspectionAccordion]);

    if (loading) {
        return (
            <div className="min-h-[200px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!investorData || investorData.length === 0) {
        return (
            <div className="min-h-[200px] flex items-center justify-center">
                <p className="text-gray-600">No investor data available</p>
            </div>
        );
    }

    // Transform subheadings into accordion format
    const transformToAccordionData = (subheadings) => {
        console.log('Transforming subheadings:', subheadings);
        return subheadings.map(subheading => ({
            id: subheading.id,
            header: subheading.name,
            content: (
                <div className="space-y-3">
                    {subheading.contents.map(content => (
                        <div key={content.id} className="space-y-5">
                            {
                            content.title && <h4 className="my-6  bg-primary text-white p-1 px-3 rounded-lg">{content.title}</h4>
                            }
                            {/* {content.pdf_name && (
                                <p className="text-gray-600 mb-2">Document: {content.pdf_name}</p>
                            )} */}
                            {content.editor_content && (
                                <div className="mb-3 overflowbar overflow-x-auto" dangerouslySetInnerHTML={{ __html: content.editor_content }} />
                            )}
                            {content.link && (
                                <div className="flex gap-10 items-center   ">
                                    <Image src="/images/invester/pdf.png" alt="pdf" width={50} height={100} />
                                    <a 
                                        href={content.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="font-thin w-full flex justify-between border-b border-black pb-2 "
                                    >
                                        
                                        {content.pdf_name}
                                        <GoArrowUpRight className="text-[20px]" />
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )
        }));
    };

    // Transform main investor data into accordion format for mobile
    const transformMainToAccordionData = () => {
        return investorData.map((item, index) => ({
            id: item.id,
            header: item.name,
            content: (
                <div>
                    {item.link && (
                        <div className="mb-4">
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                Visit External Link
                            </a>
                        </div>
                    )}

                    {/* Nested Accordions for subheadings */}
                    {item.subheadings && item.subheadings.length > 0 && (
                        <div className="space-y-4">
                            <MobileAccordion 
                                key={`mobile-accordion-${item.id}`}
                                accordionData={transformToAccordionData(item.subheadings)}
                                initialActive={activeAccordion}
                                onActiveChange={setActiveAccordion}
                                highlightedId={highlightedAccordion}
                            />
                        </div>
                    )}
                </div>
            )
        }));
    };

    return (
        <>
            {/* Desktop Layout - Tabs */}
            <div className="hidden md:flex gap-20 h-[calc(100vh-100px)]">
                {/* Tabs Navigation */}
                <div className="flex flex-col border-b bg-[#DEDEDE] p-2 rounded-xl w-2/6 overflowbar">
                    {investorData.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(index)}
                            className={`p-4 font-medium text-start capitalize transition-colors w-full ${
                                activeTab === index
                                    ? 'bg-white rounded-lg'
                                    : ' '
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content w-4/6 overflowbar">
                    {investorData.map((item, index) => (
                        <div
                            key={`${item.id}-${activeTab}`}
                            className={`${activeTab === index ? 'block' : 'hidden'}`}
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold capitalize mb-4">{item.name}</h2>
                                {item.link && (
                                    <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Visit External Link
                                    </a>
                                )}
                            </div>

                            {/* Accordions for subheadings */}
                            {item.subheadings && item.subheadings.length > 0 && (
                                <div className="space-y-4">
                                    {console.log('Rendering accordion for item:', item.name, 'activeAccordion:', activeAccordion, 'highlightedAccordion:', highlightedAccordion)}
                                    <Accordion 
                                        key={`accordion-${item.id}-${activeTab}-${activeAccordion}`}
                                        accordionData={transformToAccordionData(item.subheadings)}
                                        initialActive={activeAccordion}
                                        onActiveChange={setActiveAccordion}
                                        highlightedId={highlightedAccordion}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Layout - Full Accordion */}
            <div className="block md:hidden">
                <MobileAccordion 
                    key="mobile-main-accordion"
                    accordionData={transformMainToAccordionData()}
                    initialActive={activeMainAccordion}
                    onActiveChange={setActiveMainAccordion}
                />
            </div>
        </>
    );
} 