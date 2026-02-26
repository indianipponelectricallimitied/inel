'use client';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import ApiService from '@/app/services/api';
import Accordion from '../../components/Ui/accordion';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function InvestorTabPage() {
    const { slug } = useParams();
    const searchParams = useSearchParams();
    const itemId = searchParams.get('item') ? parseInt(searchParams.get('item')) : null;

    const [itemData, setItemData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.getInvestorData();
                const matchedItem = data.find(item => slugify(item.name) === slug);

                if (matchedItem) {
                    setItemData(matchedItem);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching investor data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [slug]);

    if (loading) return <div className="py-20 text-center">Loading section...</div>;
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
                        initialActive={itemId}
                        highlightedId={itemId}
                    />
                </div>
            )}
        </div>
    );
}
