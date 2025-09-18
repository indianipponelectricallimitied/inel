"use client"
import BreadCrumb from "../components/Ui/bread-crumb";
import PlayVideo from "../components/Ui/playVideo";
import Image from "next/image";
import JobListings from "../components/career/JobListings";
import CareerOpportunities from "../components/career/CareerOpportunities";
import CareeerForm from "../components/career/CareeerForm";
import BackflipSlider from "../components/Ui/BackflipSlider";
import Accordion from "../components/Ui/accordion";
import OurPriority from "../components/career/OurPriority";
import BlogSlide from "../components/Newsroom/blog-slide";
import BreadcrumbSlider from "../components/career/breadcrumb-slider";
import { useState, useEffect } from "react";

// from technology page 
import HoverExpand from "../components/Technology/HoverExpand";
import Newsletter from "../components/career/newsletter";
import BackToTop from "../components/Ui/BackToTop";
import Link from "next/link";

export const jobListings = [
    {
        Role: "Hardware Design Engineer",
        Place: "Tech Centre, Hosur",
        level: "Experienced",
        link: "#"
    },
    {
        Role: "Product Development Engineer",
        Place: "Tech Centre, Hosur",
        level: "Experienced",
        link: "#"
    },
    {
        Role: "Product Development Engineer",
        Place: "Tech Centre, Hosur",
        level: "Fresher",
        link: "#"
    },
    {
        Role: "Product Development Engineer",
        Place: "Tech Centre, Hosur",
        level: "1 - 2 Years",
        link: "#"
    },
]

const quickLinks = [
    {
        title: "Recent Graduates",
        href: "#apply-now"
    },
    {
        title: "Experienced Professionals",
        href: "#apply-now"
    },
    {
        title: "Interns",
        href: "#apply-now"
    },
    {
        title: "Explore more",
        href: "#apply-now"
    },
    
]

const testimonials = [
    {
        name: "John Doe",
        image: "/testi.png",
        identity: "Automobile Workshop Owner",
        feedbaktitle:"Reliable Parts, Exceptional Performance!",
        feedback:"I've been using this product for a few months now and it's been performing great. The quality is excellent and it's easy to install. I highly recommend it!"
    },
    {
        name: "John Doe",
        image: "/testi.png",
        identity: "Automobile Workshop Owner",
        feedbaktitle:"Reliable Parts, Exceptional Performance!",
        feedback:"I've been using this product for a few months now and it's been performing great. The quality is excellent and it's easy to install. I highly recommend it!"
    },
    {
        name: "John Doe",
        image: "/testi.png",
        identity: "Automobile Workshop Owner",
        feedbaktitle:"Reliable Parts, Exceptional Performance!",
        feedback:"I've been using this product for a few months now and it's been performing great. The quality is excellent and it's easy to install. I highly recommend it!"
    },
    {
        name: "John Doe",
        image: "/testi.png",
        identity: "Automobile Workshop Owner",
        feedbaktitle:"Reliable Parts, Exceptional Performance!",
        feedback:"I've been using this product for a few months now and it's been performing great. The quality is excellent and it's easy to install. I highly recommend it!"
    },
]

// Add mail and WhatsApp links to the relevant FAQ answers
const accordions = [
    {
      "id": 1,
      "header": "Should I be concerned if a job offer from INEL asks for money transfers during the process?",
      "content": (
        <>
          Yes, you should be very cautious. INEL does not require any money transfers or payments as part of our hiring process. If you receive a job offer requesting such payments, it is likely a scam. Please report it to our HR department at{" "}
          <a href="mailto:admin@inel.co.in" className="text-blue-600 underline">admin@inel.co.in</a>{" "}
          immediately, and do not disclose any personal or financial information.
        </>
      )
    },
    {
      "id": 2,
      "header": "How can I track the status of my application?",
      "content": (
        <>
          To track the status of your application, please log in to your candidate profile on our career's portal, where you can view real-time updates regarding your application. For additional inquiries, you may contact our HR department at{" "}
          <a href="mailto:admin@inel.co.in" className="text-blue-600 underline">admin@inel.co.in</a>.{" "}
          Alternatively, you can connect with us through WhatsApp –{" "}
          <a
            href="https://wa.me/917094445386"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            7094445386
          </a>
        </>
      )
    },
    {
      "id": 3,
      "header": "What is the typical timeline for the hiring process at INEL?",
      "content": "The hiring process at INEL generally takes a few weeks, depending on the specific position and other factors. We aim to keep candidates updated during each stage."
    },
    {
      "id": 4,
      "header": "Can I apply for multiple positions at the same time?",
      "content": "No, you cannot apply for multiple positions at INEL simultaneously. Nevertheless, we encourage candidates to explore various opportunities that align with their skills and interests."
    },
    {
      "id": 5,
      "header": "What are the locations of job openings available at INEL?",
      "content": "The locations for specific job openings at INEL will be mentioned alongside the respective job descriptions. Please refer to the job listing for detailed information about the location for each role. For the latest openings and more details, please explore our Job Opportunities."
    }
  ]
  


export default function Career() {
    // Generate JobPosting JSON-LD for available jobs
    const jobPostingJsonLd = jobListings.length > 0 ? jobListings.map((job, index) => ({
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.Role,
        "description": `Join INEL as a ${job.Role} at our ${job.Place}. We are looking for ${job.level === 'Fresher' ? 'fresh graduates' : job.level === 'Experienced' ? 'experienced professionals' : `candidates with ${job.level} experience`} to join our dynamic team.`,
        "identifier": {
            "@type": "PropertyValue",
            "name": "INEL Job ID",
            "value": `INEL-${index + 1}`
        },
        "datePosted": new Date().toISOString().split('T')[0], // Current date as placeholder
        "hiringOrganization": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited",
            "sameAs": "https://www.indianippon.com",
            "logo": "https://www.indianippon.com/logo.svg"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": job.Place.split(', ')[1] || "Hosur",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
            }
        },
        "employmentType": "FULL_TIME",
        "experienceRequirements": job.level === 'Fresher' ? "0 years" : 
                                 job.level === 'Experienced' ? "2+ years" : 
                                 job.level,
        "industry": "Automotive Components Manufacturing",
        "qualifications": "Engineering degree in relevant field",
        "responsibilities": `Design and develop automotive electronic components, collaborate with cross-functional teams, ensure quality standards, and contribute to innovative solutions in the automotive industry.`,
        "skills": "Engineering, Automotive Electronics, Product Development, Problem Solving"
    })) : [];

    // Update document head for SEO
    useEffect(() => {
        // Update title
        document.title = "Careers - Join Our Team | India Nippon Electricals";
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "Explore career opportunities at INEL. Join our dynamic team and build a rewarding career in automotive electronics. We offer opportunities for experienced professionals, graduates, and interns.");
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = "Explore career opportunities at INEL. Join our dynamic team and build a rewarding career in automotive electronics. We offer opportunities for experienced professionals, graduates, and interns.";
            document.head.appendChild(meta);
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'careers, jobs, employment, automotive careers, engineering jobs, INEL careers, India Nippon Electricals jobs');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'keywords';
            meta.content = 'careers, jobs, employment, automotive careers, engineering jobs, INEL careers, India Nippon Electricals jobs';
            document.head.appendChild(meta);
        }

        // Update canonical link
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute('href', 'https://www.indianippon.com/career');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://www.indianippon.com/career';
            document.head.appendChild(link);
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Careers - Join Our Team | India Nippon Electricals');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:title');
            meta.content = 'Careers - Join Our Team | India Nippon Electricals';
            document.head.appendChild(meta);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', "Explore career opportunities at INEL. Join our dynamic team and build a rewarding career in automotive electronics. We offer opportunities for experienced professionals, graduates, and interns.");
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:description');
            meta.content = "Explore career opportunities at INEL. Join our dynamic team and build a rewarding career in automotive electronics. We offer opportunities for experienced professionals, graduates, and interns.";
            document.head.appendChild(meta);
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', 'https://www.indianippon.com/career');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:url');
            meta.content = 'https://www.indianippon.com/career';
            document.head.appendChild(meta);
        }

        const ogType = document.querySelector('meta[property="og:type"]');
        if (ogType) {
            ogType.setAttribute('content', 'website');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:type');
            meta.content = 'website';
            document.head.appendChild(meta);
        }

        const ogSiteName = document.querySelector('meta[property="og:site_name"]');
        if (ogSiteName) {
            ogSiteName.setAttribute('content', 'India Nippon Electricals');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:site_name');
            meta.content = 'India Nippon Electricals';
            document.head.appendChild(meta);
        }

        // Update Twitter Card tags
        const twitterCard = document.querySelector('meta[name="twitter:card"]');
        if (twitterCard) {
            twitterCard.setAttribute('content', 'summary_large_image');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'twitter:card';
            meta.content = 'summary_large_image';
            document.head.appendChild(meta);
        }

        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', 'Careers - Join Our Team | India Nippon Electricals');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'twitter:title';
            meta.content = 'Careers - Join Our Team | India Nippon Electricals';
            document.head.appendChild(meta);
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', "Explore career opportunities at INEL. Join our dynamic team and build a rewarding career in automotive electronics. We offer opportunities for experienced professionals, graduates, and interns.");
        } else {
            const meta = document.createElement('meta');
            meta.name = 'twitter:description';
            meta.content = "Explore career opportunities at INEL. Join our dynamic team and build a rewarding career in automotive electronics. We offer opportunities for experienced professionals, graduates, and interns.";
            document.head.appendChild(meta);
        }
    }, []);

    return (
        <>
            {jobPostingJsonLd.length > 0 && jobPostingJsonLd.map((jobLd, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jobLd),
                    }}
                />
            ))}

            <BreadcrumbSlider />

            {/* <section className="bg-gradient-to-b from-[#fff] to-[#E9E9E9]" id="career">
                <div className="container mx-auto space-y-5 py-20 ">
                    <h5 className="text-center">Career</h5>
                    <h1 className="text-center">Join Our Team – Power Your Future</h1>
                    <p className="md:w-4/5 mx-auto pb-10 text-center">At India Nippon Electricals, we believe our people are our greatest strength. We offer a dynamic work environment that fosters innovation, collaboration, and growth. Whether you're an experienced professional or a passionate newcomer, you'll find opportunities to build a rewarding career while contributing to cutting-edge solutions in the automotive industry. Join us and be part of a team that's driving progress, every step of the way.</p>

                    <PlayVideo videolink ="/videos/hero-placeholder-vid.mp4" />
                    <Image src="/images/career/career-img.png" alt="career-banner" width={1000} height={1000} className="mx-auto"/>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-20'>
                        {perks.map((item, index)=>(
                            <div className='bg-[#fff] p-5 rounded-[10px] space-y-5' key={index}>
                                <Image src={item.image} alt={item.title} width={200} height={200} 
                                className="w-20 object-contain " 
                                />
                                <h2 className="font-medium">{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <HoverExpand />

            <OurPriority />

            {/* <JobListings jobListings={jobListings} /> */}

            <section className="bg-gradient-to-b from-[#fff] to-[#ECF9FF] py-20">

                <CareerOpportunities quickLinks={quickLinks}   />

                {/* <div className="container mx-auto space-y-5 py-20 md:pt-40 text-center ">
                    <h5>Join Our Team</h5>
                    <h1>Drive Your Career Forward with INEL</h1>
                    <p className="md:w-4/5 mx-auto">At India Nippon Electricals, we believe in empowering talent and fostering growth. Whether you're an experienced professional, a recent graduate, or seeking internship opportunities, we offer a dynamic environment where innovation thrives, and careers take flight. Fill out the form below, and take the first step toward joining a team that's driving progress and shaping the future of automotive technology.</p>

                    <div className="lg:w-4/6 mx-auto pt-10" id="apply-now" itemID="apply-now">
                        <CareeerForm />
                    </div>
                </div> */}
            </section>

            <div className="grid-with-gradients">
            <div className="gradient-sphere  w-[600px] h-[600px] top-[100px] right-[350px]"></div>
                {/* <div className="container mx-auto py-20 md:pt-40 flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-2/5 space-y-5 ">
                            <h5>Career Testimonials</h5>
                            <h1>Hear from Our Team</h1>
                            <p>At India Nippon Electricals, our people are at the heart of everything we do. Don't just take our word for it — hear directly from our employees as they share their experiences, growth stories, and what makes INEL a great place to build a career. Their journeys reflect the spirit of innovation, collaboration, and excellence that drives us forward.</p>
                    </div>
                    <div className="w-9/12 lg:w-[45%] mx-auto">
                            <BackflipSlider testimonials={testimonials} />
                    </div>
                </div> */}
                <div className="container mx-auto py-20 space-y-8" id="inel-uncovered">
                   
                    <h1 className="text-center">INEL Uncovered</h1>
                    <p className="text-center lg:w-3/5 mx-auto">Get an exclusive look into the collaborative spirit that fuels INEL's success every day. Stay updated on our latest achievements and upcoming events at INEL.</p>
                    <BlogSlide sildeperview={3} includeCategories={["careers"]} />
                </div>

                <div className="container mx-auto py-20 space-y-5" id="FAQ">
                    {/* <h5 className="text-center">FAQ</h5> */}
                    <h1 className="text-center">Frequently Asked Questions</h1>
                    
                    <div className="w-full md:w-5/6 mx-auto pt-10">
                        <Accordion accordionData={accordions}  />
                    </div>
                </div>
            </div>
            
            <Newsletter/> 
            <BackToTop />

        </>
    )
}
