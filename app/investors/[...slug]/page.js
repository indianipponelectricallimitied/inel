'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import Accordion from '../../components/Ui/accordion';
import { useInvestorData } from '../InvestorContext';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function InvestorTabPage() {
    const { slug } = useParams();
    const { investorData, loading: globalLoading } = useInvestorData();

    // Local state for the active accordion — no URL sync to avoid remount
    const [activeAccordionId, setActiveAccordionId] = useState(null);

    // Derive category from URL
    const categorySlug = Array.isArray(slug) ? slug[0] : slug;

    // Derive itemData synchronously from shared context
    const itemData = investorData.find(item => slugify(item.name) === categorySlug);

    if (globalLoading) return <div className="py-20 text-center">Loading...</div>;
    if (!itemData) return <div className="py-20 text-center">Section not found.</div>;

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
                                    <Image src="/images/invester/pdf.png" alt="pdf" width={50} height={100} />
                                    <a
                                        href={content.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-thin w-full flex justify-between border-b border-black pb-2"
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

    return (
        <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-10">{itemData.name}</h2>

            {itemData.subheadings && itemData.subheadings.length > 0 && (
                <div className="space-y-4">
                    <Accordion
                        accordionData={transformToAccordionData(itemData.subheadings)}
                        initialActive={activeAccordionId}
                        onActiveChange={setActiveAccordionId}
                    />
                </div>
            )}
        </div>
    );
}
