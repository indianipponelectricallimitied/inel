import BreadCrumb from "../components/Ui/bread-crumb"
import Pdfaccordian from "../components/Ui/pdf-accordian"
import ApiService from "../services/api"

export const metadata = {
    title: "Policies - Corporate Policies & Guidelines | India Nippon Electricals",
    description: "Access India Nippon Electricals' corporate policies and guidelines. Review our governance policies, compliance documents, and business conduct guidelines.",
    keywords: "corporate policies, business guidelines, governance policies, compliance documents, INEL policies, corporate governance", // Note: Google ignores keywords meta tag
    openGraph: {
        title: "Policies - Corporate Policies & Guidelines | India Nippon Electricals",
        description: "Access India Nippon Electricals' corporate policies and guidelines. Review our governance policies, compliance documents, and business conduct guidelines.",
        url: "https://indianippon.com/policies",
        siteName: "India Nippon Electricals",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Policies - Corporate Policies & Guidelines | India Nippon Electricals",
        description: "Access India Nippon Electricals' corporate policies and guidelines. Review our governance policies, compliance documents, and business conduct guidelines.",
    },
    alternates: {
        canonical: "https://indianippon.com/policies",
    },
};

export default async function Policies() {
    const policiesData = await ApiService.getPolicies();
    
    // Transform the API data to match Accordion component's expected format
    const transformedPolicies = policiesData.map(policy => ({
        id: policy.id,
        header: policy.pdf_title,
        content: policy.pdf_url
    }));

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Corporate Policies",
        "description": "Corporate policies and guidelines for India Nippon Electricals Limited, including governance policies, compliance documents, and business conduct guidelines.",
        "url": "https://indianippon.com/policies",
        "publisher": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited"
        },
        "about": {
            "@type": "Thing",
            "name": "Corporate Policies"
        },
        "keywords": "corporate policies, business guidelines, governance policies, compliance documents"
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
                pageTitle= "Policies"
                breadCrumbBg= "/images/terms&privacy/breadcrumb.jpg"
            />

            <div className="container mx-auto py-20">
                <h5 className="text-center pb-5">Policies</h5>
                <h1 className="text-center pb-10 md:pb-20">Check out our policies to understand how we work</h1>
                <div className="w-full md:w-4/6 mx-auto">
                    <Pdfaccordian accordionData={transformedPolicies} />
                </div>
            </div>
        </>
    )
}
