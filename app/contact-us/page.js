import ContactForm from "../components/contact-us/contact-form"
import BreadCrumb from "../components/Ui/bread-crumb"
import Map from "../components/contact-us/contact-map"

export const metadata = {
    title: "Contact Us - Get in Touch | India Nippon Electricals",
    description: "Contact India Nippon Electricals for inquiries about automotive components and solutions. Reach out to our offices in Hosur, Pondicherry, and Rewari. Get expert support and consultation.",
    keywords: "contact INEL, automotive components inquiry, customer support, India Nippon Electricals contact, business inquiry", // Note: Google ignores keywords meta tag
    openGraph: {
        title: "Contact Us - Get in Touch | India Nippon Electricals",
        description: "Contact India Nippon Electricals for inquiries about automotive components and solutions. Reach out to our offices in Hosur, Pondicherry, and Rewari. Get expert support and consultation.",
        url: "https://www.indianippon.com/contact-us",
        siteName: "India Nippon Electricals",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - Get in Touch | India Nippon Electricals",
        description: "Contact India Nippon Electricals for inquiries about automotive components and solutions. Reach out to our offices in Hosur, Pondicherry, and Rewari. Get expert support and consultation.",
    },
    alternates: {
        canonical: "https://www.indianippon.com/contact-us",
    },
};

export default function ContactUs() {
    const contactPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us",
        "description": "Contact India Nippon Electricals for inquiries about automotive components and solutions. Multiple office locations across India.",
        "url": "https://www.indianippon.com/contact-us",
        "mainEntity": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited",
            "email": "inelcorp@inel.co.in",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-4347-230273",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi"]
                },
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-413-2697811",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Tamil"]
                },
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-1274-240860",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi"]
                }
            ],
            "location": [
                {
                    "@type": "Place",
                    "name": "Tech Center",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "SIPCOT Industrial Complex, Plot No-137, Phase-1",
                        "addressLocality": "Hosur",
                        "addressRegion": "Tamil Nadu",
                        "postalCode": "635126",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 13.0827,
                        "longitude": 80.2707
                    },
                    "telephone": "+91-4347-230273"
                },
                {
                    "@type": "Place",
                    "name": "Plant-I Hosur",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Hosur-Thali Road Unnamalai",
                        "addressLocality": "Hosur",
                        "addressRegion": "Tamil Nadu",
                        "postalCode": "635114",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 12.7409,
                        "longitude": 77.8253
                    },
                    "telephone": "+91-4347-230273"
                },
                {
                    "@type": "Place",
                    "name": "Plant-II Pondicherry",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Madukkarai Road Nettapakkam Commune Kariamanickam Village",
                        "addressLocality": "Puducherry",
                        "addressRegion": "Puducherry",
                        "postalCode": "605106",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 11.9416,
                        "longitude": 79.8083
                    },
                    "telephone": "+91-413-2697811"
                },
                {
                    "@type": "Place",
                    "name": "Plant-III Rewari",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Masani Village",
                        "addressLocality": "Rewari",
                        "addressRegion": "Haryana",
                        "postalCode": "122106",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 28.1990,
                        "longitude": 76.6194
                    },
                    "telephone": "+91-1274-240860"
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactPageJsonLd),
                }}
            />

            <BreadCrumb 
                pageTitle= "Contact Us"
                breadCrumbBg= "/images/contact-us/contactusbanner.webp"
            />
            <div className="container mx-auto  py-20">
                <ContactForm />
            </div>
            <div className="container mx-auto  pb-20">
                <Map />
            </div>
        </>
    )
}
