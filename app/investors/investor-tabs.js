'use client';
import { useState, useEffect } from 'react';
import ApiService from '@/app/services/api';
import Accordion from '../components/Ui/accordion';
import MobileAccordion from '../components/Ui/mobile-accordion';
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image';

export default function InvestorTabs() {
    const [investorData, setInvestorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);

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
                            key={item.id}
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
                                    <Accordion 
                                        key={`accordion-${item.id}-${activeTab}`}
                                        accordionData={transformToAccordionData(item.subheadings)} 
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
                />
            </div>
        </>
    );
} 