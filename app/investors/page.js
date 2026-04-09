"use client"
import { useState, useRef, useEffect } from "react";
import ApiService from '../services/api';
import Accordion from "../components/Ui/accordion"

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Investors() {
    const [investorData, setInvestorData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const aoaMoaItem = investorData.find(item => item.name === 'AoA & MoA');

    const transformToAccordionData = (subheadings) => {
        return subheadings.map(subheading => ({
            id: subheading.id,
            header: subheading.name,
            content: (
                <div className="space-y-3">
                    {subheading.contents.map(content => (
                        <div key={content.id} className="space-y-5">
                            {content.title && <h4 className="my-6 bg-primary text-white p-1 px-3 rounded-lg">{content.title}</h4>}
                            {content.editor_content && (
                                <div className="mb-3 overflowbar overflow-x-auto" dangerouslySetInnerHTML={{ __html: content.editor_content }} />
                            )}
                            {content.link && (
                                <div className="flex gap-10 items-center">
                                    <img src="/images/invester/pdf.png" alt="pdf" width={50} height={100} />
                                    <a
                                        href={content.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-thin w-full flex justify-between border-b border-black pb-2"
                                    >
                                        {content.pdf_name}
                                        <GoArrowUpRightIcon className="text-[20px]" />
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )
        }));
    };

    // Helper for Arrow icon since we removed React Icons from this file to keep it light
    const GoArrowUpRightIcon = ({ className }) => (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.53 17.53a.75.75 0 0 1-1.06-1.06L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75z"></path></svg>
    );

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

    if (loading) return <div className="py-20 text-center">Loading...</div>;

    return (
        <div className="animate-fadeIn">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionPageJsonLd),
                }}
            />

            {/* AoA & MoA Section directly on this page */}
            {aoaMoaItem && (
                <div id="aoa-moa" className="space-y-6">
                    <h2 className="text-3xl font-bold">{aoaMoaItem.name}</h2>
                    <Accordion
                        accordionData={transformToAccordionData(aoaMoaItem.subheadings)}
                    />
                </div>
            )}
        </div>
    )
}

