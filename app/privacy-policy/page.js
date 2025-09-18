import BreadCrumb from "../components/Ui/bread-crumb";

export const metadata = {
    title: "Privacy Policy - Data Protection & Privacy | India Nippon Electricals",
    description: "Read India Nippon Electricals' privacy policy to understand how we collect, use, and protect your personal information. Learn about our data protection practices and user rights.",
    keywords: "privacy policy, data protection, personal information, user privacy, INEL privacy, data security", // Note: Google ignores keywords meta tag
    openGraph: {
        title: "Privacy Policy - Data Protection & Privacy | India Nippon Electricals",
        description: "Read India Nippon Electricals' privacy policy to understand how we collect, use, and protect your personal information. Learn about our data protection practices and user rights.",
        url: "https://www.indianippon.com/privacy-policy",
        siteName: "India Nippon Electricals",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Privacy Policy - Data Protection & Privacy | India Nippon Electricals",
        description: "Read India Nippon Electricals' privacy policy to understand how we collect, use, and protect your personal information. Learn about our data protection practices and user rights.",
    },
    alternates: {
        canonical: "https://www.indianippon.com/privacy-policy",
    },
};

export default function PrivacyPolicy() {
    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "Privacy Policy and Terms of Use for India Nippon Electricals Limited website, outlining how personal information is collected, used, and protected.",
        "url": "https://www.indianippon.com/privacy-policy",
        "publisher": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited"
        },
        "about": {
            "@type": "Thing",
            "name": "Privacy Policy"
        },
        "keywords": "privacy policy, data protection, personal information, user privacy"
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
                pageTitle= "Privacy Policy"
                breadCrumbBg= "/images/terms&privacy/policy.jpg"
            />

            <div className="container mx-auto py-20   gap-20 space-y-5 border-b border-gray-300" >
                <h2>Terms of Use and Privacy Policy</h2>
                <p>The information on www.indianippon.com may contain inaccuracies and/or typographical errors. India Nippon Electricals Ltd does not warrant any accuracy or completeness of the data or the reliability of any information displayed on the site. Reliance on any such information shall be at the sole risk of the person doing so. In view of our continuous endeavors to improve the quality of our products and services, India Nippon Electricals Ltd reserves the right to correct the errors or omissions, if any, in any portion of the site.</p>
                <p>India Nippon Electricals Ltd expressly reserves its sole discretion, and at times and intervals of its choosing the right to change this Privacy Policy periodically in the future without prior notice to the users. Users shall review our Privacy Policy available at the site regularly to be sure they are fully current with our practices and procedures in this area. Their continued use of the site will be subject to the then-current Privacy Policy.</p>
                <p>This Privacy Policy does not apply to any personally identifiable information that may be provided to third parties, such as through other sites linked to the Site. Please be aware that if the user chooses to visit such third party sites, they should contact such third parties directly to determine their respective privacy policies because that third parties' privacy policy, and not our site's, will govern the user's activities and any personally identifiable information disclosed while visiting the third party site.</p>
                <p><b>Questions and updates.</b></p>
                <p style={{display : "ruby"}}>If the user has any question or suggestion about our privacy practices, please feel free to contact us at :  
                 <a href="mailto:inelcorp@inel.co.in" className="block text-blue-500"> inelcorp@inel.co.in</a>
                </p>
            </div>
        </>
    )
}