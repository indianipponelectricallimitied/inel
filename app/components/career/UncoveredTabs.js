"use client"

import { useState } from "react";
import BlogSlide from "../Newsroom/blog-slide";
import NewsletterGrid from "./NewsletterGrid";

const tabs = [
    { id: "uncovered", label: "INEL Uncovered" },
    { id: "magazine", label: "Magazine" },
]

export default function UncoveredTabs() {
    const [active, setActive] = useState("uncovered");

    return (
        <div className="container mx-auto py-20 space-y-8" id="inel-uncovered">
            <div className="flex justify-center gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={`px-6 py-3 rounded-[14px] font-medium border border-primary transition-all duration-300 ${
                            active === tab.id
                                ? "bg-primary text-white"
                                : "bg-transparent text-primary hover:bg-primary/10"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {active === "uncovered" ? (
                <div className="space-y-8">
                    <div className="text-center space-y-5">
                        <h1>INEL Uncovered</h1>
                        <p className="lg:w-3/5 mx-auto">Get an exclusive look into the collaborative spirit that fuels INEL&apos;s success every day. Stay updated on our latest achievements and upcoming events at INEL.</p>
                    </div>
                    <BlogSlide sildeperview={3} includeCategories={["careers"]} />
                </div>
            ) : (
                <NewsletterGrid />
            )}
        </div>
    )
}
