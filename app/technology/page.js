import BreadCrumb from "../components/Ui/bread-crumb";
import TechnologyPage from "../components/Technology/technology";
import HoverExpand from "../components/Technology/HoverExpand";
import Video from "../components/Technology/fullscreenVideo";
import Image from "next/image";

export const metadata = {
    title: "Technology & R&D - Innovation in Automotive Electronics | India Nippon Electricals",
    description: "Discover INEL's cutting-edge technology and R&D capabilities in automotive electronics. State-of-the-art research center developing advanced ignition systems, EFI, ISG, and EV solutions.",
    keywords: "automotive technology, R&D, research development, electronic ignition, EFI, ISG, powertrain systems, automotive electronics, innovation", // Note: Google ignores keywords meta tag
    openGraph: {
        title: "Technology & R&D - Innovation in Automotive Electronics | India Nippon Electricals",
        description: "Discover INEL's cutting-edge technology and R&D capabilities in automotive electronics. State-of-the-art research center developing advanced ignition systems, EFI, ISG, and EV solutions.",
        url: "https://www.indianippon.com/technology",
        siteName: "India Nippon Electricals",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Technology & R&D - Innovation in Automotive Electronics | India Nippon Electricals",
        description: "Discover INEL's cutting-edge technology and R&D capabilities in automotive electronics. State-of-the-art research center developing advanced ignition systems, EFI, ISG, and EV solutions.",
    },
    alternates: {
        canonical: "https://www.indianippon.com/technology",
    },
};

export default function Technology() {
    const techArticleJsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "State-of-the-Art Research Center - Technology & R&D",
        "description": "At INEL, Research and Development (R&D) is the cornerstone of our strategy for innovation, ensuring that we remain at the forefront of the automotive industry.",
        "url": "https://www.indianippon.com/technology",
        "author": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited"
        },
        "publisher": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.indianippon.com/logo.svg"
            }
        },
        "about": [
            {
                "@type": "Thing",
                "name": "Automotive Research & Development"
            },
            {
                "@type": "Thing", 
                "name": "Electronic Ignition Systems"
            },
            {
                "@type": "Thing",
                "name": "Electric Vehicle Technology"
            }
        ],
        "keywords": "automotive technology, R&D, electronic ignition, EFI, ISG, powertrain systems"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(techArticleJsonLd),
                }}
            />

            <BreadCrumb 
                pageTitle= "Technology"
                breadCrumbBg= "/images/Technology/banner.png"
            />


            <TechnologyPage />

            <section className="bg-black/10">
                <div className="container mx-auto  flex flex-col lg:flex-row gap-10 py-20" id="research-development">
                    <div className="lg:w-1/2 w-full space-y-5">
                        <h5 >Research & Development</h5>
                        <h1 >State-of-the-Art<br/>   Research Center</h1>
                        <p>At INEL, Research and Development (R&D) is the cornerstone of our strategy for innovation, ensuring that we remain at the forefront of the automotive industry. Our dedicated R&D centers and advanced technology infrastructure allow us to continuously push boundaries, developing cutting-edge products and solutions for both internal combustion engine (ICE) and electric vehicle (EV) markets.  </p>
                       <br/>
                        <p>At INEL, we lead in developing powertrain systems that maximize vehicle efficiency, from ignition systems for ICE vehicles to electronic fuel injection (EFI) and integrated starter generators (ISG). Our technologies are designed to reduce emissions, improve fuel economy, and enhance the driving experience, while also integrating seamlessly into electric vehicle powertrains for higher performance and lower environmental impact.</p>
                        
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <Image src="/images/Technology/stateofart.webp" alt="Research Development"
                        className="rounded-[20px] h-full object-cover w-full"
                        width={900}
                        height={900}
                        />
                    </div>
                </div>
            </section>

            <Video videoUrl="https://www.youtube-nocookie.com/embed/1v7vqyGpGFg?si=tf6ahW7t3Jx6_RPH"/>

        </>
    )
}
