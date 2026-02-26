'use client';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import ApiService from '@/app/services/api';
import Accordion from '../../components/Ui/accordion';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function InvestorTabPage() {
    const { slug } = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [itemData, setItemData] = useState(null);
    const [activeAccordionId, setActiveAccordionId] = useState(null);
    const [loading, setLoading] = useState(true);

    // Extract category and optional item from slug array
    const categorySlug = Array.isArray(slug) ? slug[0] : slug;
    const pathItemNameSlug = Array.isArray(slug) && slug.length > 1 ? slug[1] : null;
    const itemQueryParam = searchParams.get('item');

    const handleAccordionChange = (newActiveId) => {
        setActiveAccordionId(newActiveId);

        if (newActiveId && itemData?.subheadings) {
            const subheading = itemData.subheadings.find(s => s.id === newActiveId);
            if (subheading) {
                // Update URL to path structure: /investors/category/subheading
                router.push(`/investors/${categorySlug}/${subheading.name}`, { scroll: false });
            }
        } else {
            // If accordion is closed, revert URL to main category path
            router.push(`/investors/${categorySlug}`, { scroll: false });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.getInvestorData();
                const matchedItem = data.find(item => slugify(item.name) === categorySlug);

                if (matchedItem) {
                    setItemData(matchedItem);

                    // Handle item selection (Priority: path segment > query param)
                    const itemToFind = pathItemNameSlug || itemQueryParam;

                    if (itemToFind) {
                        // 1. Try to treat as ID (if it's a number and from query param)
                        const id = parseInt(itemToFind);
                        if (!isNaN(id) && itemToFind === itemQueryParam) {
                            setActiveAccordionId(id);
                        } else {
                            // 2. Try to treat as slugified name (from path or query)
                            const matchedSubheading = matchedItem.subheadings?.find(
                                sub => slugify(sub.name) === slugify(decodeURIComponent(itemToFind))
                            );
                            if (matchedSubheading) {
                                setActiveAccordionId(matchedSubheading.id);
                            }
                        }
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching investor data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [categorySlug, pathItemNameSlug, itemQueryParam]);

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
                        initialActive={activeAccordionId}
                        highlightedId={activeAccordionId}
                        onActiveChange={handleAccordionChange}
                    />
                </div>
            )}
        </div>
    );
}
