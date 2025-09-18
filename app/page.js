import CTA from "./components/Ui/cta";
import VideoCTA from "./components/Ui/videoCTA";
import Newsletter from "./components/Common/newsletter";
import Tab from "./components/home/vehicle-slide/slider";
import HeroVideoSection from "./components/home/hero-video-section";
import Sustainable from "./components/home/Sustainable";
import TechnologyInnovation from "./components/home/Technology-Innovation";
import InvestorRelations from "./components/home/Investor-Relations";
import MarqueeSection from "./components/home/marquee-setion";
import Newsroom from "./components/Newsroom/newsroom";
import Awards from "./components/home/awaards";
import HowManyMarquee from "./components/home/howmany-marquee";
import Careers from "./components/home/careers";

export const metadata = {
  title: "India Nippon Electricals Ltd - Leading Automotive Component Manufacturer",
  description: "India Nippon Electricals (INEL) is a premier automotive component manufacturer specializing in electronic ignition systems, fuel injection systems, and EV solutions. Trusted partner for two-wheelers and commercial vehicles.",
  keywords: "automotive components, electronic ignition systems, fuel injection, EV solutions, two-wheeler parts, commercial vehicle components, INEL, India Nippon Electricals", // Note: Google ignores keywords meta tag
  openGraph: {
    title: "India Nippon Electricals Ltd - Leading Automotive Component Manufacturer",
    description: "India Nippon Electricals (INEL) is a premier automotive component manufacturer specializing in electronic ignition systems, fuel injection systems, and EV solutions. Trusted partner for two-wheelers and commercial vehicles.",
    url: "https://indianippon.com",
    siteName: "India Nippon Electricals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "India Nippon Electricals Ltd - Leading Automotive Component Manufacturer",
    description: "India Nippon Electricals (INEL) is a premier automotive component manufacturer specializing in electronic ignition systems, fuel injection systems, and EV solutions. Trusted partner for two-wheelers and commercial vehicles.",
  },
  alternates: {
    canonical: "https://indianippon.com",
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "India Nippon Electricals Limited",
    "alternateName": "INEL",
    "url": "https://indianippon.com",
    "logo": "https://indianippon.com/logo.svg",
    "description": "Leading automotive component manufacturer specializing in electronic ignition systems, fuel injection systems, and EV solutions for two-wheelers and commercial vehicles.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hosur-Bangalore Highway",
      "addressLocality": "Hosur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "635126",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-4344-301801",
      "contactType": "customer service",
      "areaServed": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/india-nippon-electricals-limited"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "India Nippon Electricals",
    "url": "https://indianippon.com",
    "description": "Leading automotive component manufacturer specializing in electronic ignition systems, fuel injection systems, and EV solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "India Nippon Electricals Limited"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
    
      <HeroVideoSection />
      <CTA />
      <Awards />
      <MarqueeSection />
      <Tab />
      <HowManyMarquee />
      <TechnologyInnovation />
      <InvestorRelations />
      <VideoCTA />
      <Sustainable />
      <Careers />
      <Newsroom />
      <Newsletter/> 
    </>
  );
}
