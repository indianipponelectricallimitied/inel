'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useInvestorData } from './InvestorContext';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function InvestorNav() {
    const { investorData, loading } = useInvestorData();
    const pathname = usePathname();

    if (loading) return <div className="h-20 animate-pulse bg-gray-100 rounded-lg mb-10"></div>;

    const tabs = investorData.map(item => ({
        name: item.name,
        path: `/investors/${slugify(item.name)}`
    }));

    return (
        <div className="flex flex-col bg-[#DEDEDE] p-2 rounded-xl sticky top-24 overflow-y-auto overflowbar">
            {tabs.map((tab, index) => {
                const isActive = pathname === tab.path || (tab.name === 'AoA & MoA' && (pathname === '/investors' || pathname === '/investors/'));
                return (
                    <Link
                        key={index}
                        href={tab.path}
                        className={`p-4 font-medium text-start transition-colors w-full rounded-lg ${isActive
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-700 hover:text-black'
                            }`}
                    >
                        {tab.name}
                    </Link>
                );
            })}
        </div>
    );
}
