import BreadCrumb from "../components/Ui/bread-crumb";
import About from "../components/About-Us/about";
import VissionMission from "../components/About-Us/vission-mission";
import Journey from "../components/About-Us/Journey";
import OurLeadership from "../components/About-Us/OurLeadership";
import ManufacturingFacilities from "../components/About-Us/ManufacturingFacilities";
import Innovation from "../components/About-Us/Innovation";
import Achievements from "../components/About-Us/Achievements";
import Team from "../components/About-Us/Team";
import Map from "../components/About-Us/map";
import MarqueeSection from "../components/About-Us/marquee-setion";
import Newsletter from "../components/Common/newsletter";

export const metadata = {
    title: "About Us - Leading Automotive Component Manufacturer | India Nippon Electricals",
    description: "Learn about India Nippon Electricals, a leading automotive component manufacturer with 40+ years of excellence. Discover our vision, mission, leadership, and manufacturing facilities across India.",
    keywords: "about INEL, automotive manufacturer, company history, leadership team, manufacturing facilities, vision mission, India Nippon Electricals", // Note: Google ignores keywords meta tag
    openGraph: {
        title: "About Us - Leading Automotive Component Manufacturer | India Nippon Electricals",
        description: "Learn about India Nippon Electricals, a leading automotive component manufacturer with 40+ years of excellence. Discover our vision, mission, leadership, and manufacturing facilities across India.",
        url: "https://www.indianippon.com/about-us",
        siteName: "India Nippon Electricals",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Leading Automotive Component Manufacturer | India Nippon Electricals",
        description: "Learn about India Nippon Electricals, a leading automotive component manufacturer with 40+ years of excellence. Discover our vision, mission, leadership, and manufacturing facilities across India.",
    },
    alternates: {
        canonical: "https://www.indianippon.com/about-us",
    },
};

export default function AboutUs() {
    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "About Us",
        "description": "Learn about India Nippon Electricals, a leading automotive component manufacturer with over 40 years of excellence in developing and manufacturing automotive electronic components.",
        "url": "https://www.indianippon.com/about-us",
        "publisher": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited"
        },
        "about": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited"
        },
        "keywords": "about INEL, automotive manufacturer, company history, leadership team"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageJsonLd),
                }}
            />

            <BreadCrumb 
                pageTitle= "About Us"
                breadCrumbBg= "/images/about/breadcrumb.jpeg"
            />
            <About />
            <VissionMission />
            <Innovation />
            {/* <Journey /> */}
            <OurLeadership />
            <ManufacturingFacilities />


            <div className="grid-with-gradients">
            <div className="gradient-sphere  w-[1000px] h-[1000px] bottom-[300px] -left-[300px]"></div>
                <Achievements />
                <Team />
            </div>
            <Map />
            <Newsletter />
            {/* <MarqueeSection /> */}
        </>
    )
}
