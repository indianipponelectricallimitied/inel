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

// from technology page 
import HoverExpand from "../components/Technology/HoverExpand";
import Newsletter from "../components/Common/newsletter";
 

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

const accordions = [
    {
      "id": 1,
      "header": "Should I be concerned if a job offer from INEL asks for money transfers during the process?",
      "content": "If a job offer from INEL asks for money transfers, you should be cautious. Legitimate companies typically do not ask for payments as part of the hiring process. It is likely a scam, and you should not send any money. Contact INEL directly through official channels to verify the legitimacy of the offer."
    },
    {
      "id": 2,
      "header": "How can I track the status of my application?",
      "content": "You can track the status of your application by logging into the INEL career portal where you submitted your application. Alternatively, you can reach out to the HR department or the recruiter handling your application for updates."
    },
    {
      "id": 3,
      "header": "What is the typical timeline for the hiring process at INEL?",
      "content": "The typical hiring process at INEL may take anywhere from a few weeks to a couple of months. It includes application review, interviews, background checks, and final selection. The timeline can vary depending on the position and number of applicants."
    },
    {
      "id": 4,
      "header": "Can I apply for multiple positions at the same time?",
      "content": "Yes, you can apply for multiple positions at INEL. However, it is advisable to ensure that your qualifications match the job requirements for each role. Applying for different positions can increase your chances of being considered for one of them."
    },
    {
      "id": 5,
      "header": "What are the locations of job openings available at INEL?",
      "content": "INEL job openings are available in various locations. You can check the current job listings on their official website to find positions in different regions. The availability of positions varies depending on business needs and specific job functions."
    }
  ]
  



export default function Career() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Career"
                breadCrumbBg= "/images/career/breadcrumb.jpg"
            />

            <section className="bg-gradient-to-b from-[#fff] to-[#E9E9E9]" id="career">
                <div className="container mx-auto space-y-5 py-20 ">
                    <h5 className="text-center">Career</h5>
                    <h1 className="text-center">Join Our Team – Power Your Future</h1>
                    <p className="md:w-4/5 mx-auto pb-10 text-center">At India Nippon Electricals, we believe our people are our greatest strength. We offer a dynamic work environment that fosters innovation, collaboration, and growth. Whether you’re an experienced professional or a passionate newcomer, you’ll find opportunities to build a rewarding career while contributing to cutting-edge solutions in the automotive industry. Join us and be part of a team that’s driving progress, every step of the way.</p>

                    {/* <PlayVideo videolink ="/videos/hero-placeholder-vid.mp4" /> */}
                    <Image src="/images/career/career-img.png" alt="career-banner" width={1000} height={1000} className="mx-auto"/>

                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-20'>
                        {perks.map((item, index)=>(
                            <div className='bg-[#fff] p-5 rounded-[10px] space-y-5' key={index}>
                                <Image src={item.image} alt={item.title} width={200} height={200} 
                                className="w-20 object-contain " 
                                />
                                <h2 className="font-medium">{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>

            <HoverExpand />

            <OurPriority />

            {/* <JobListings jobListings={jobListings} /> */}

            <section className="bg-gradient-to-b from-[#fff] to-[#ECF9FF] py-20">

                <CareerOpportunities quickLinks={quickLinks}   />

                {/* <div className="container mx-auto space-y-5 py-20 md:pt-40 text-center ">
                    <h5>Join Our Team</h5>
                    <h1>Drive Your Career Forward with INEL</h1>
                    <p className="md:w-4/5 mx-auto">At India Nippon Electricals, we believe in empowering talent and fostering growth. Whether you’re an experienced professional, a recent graduate, or seeking internship opportunities, we offer a dynamic environment where innovation thrives, and careers take flight. Fill out the form below, and take the first step toward joining a team that’s driving progress and shaping the future of automotive technology.</p>

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
                            <p>At India Nippon Electricals, our people are at the heart of everything we do. Don’t just take our word for it — hear directly from our employees as they share their experiences, growth stories, and what makes INEL a great place to build a career. Their journeys reflect the spirit of innovation, collaboration, and excellence that drives us forward.</p>
                    </div>
                    <div className="w-9/12 lg:w-[45%] mx-auto">
                            <BackflipSlider testimonials={testimonials} />
                    </div>
                </div> */}
                <div className="container mx-auto py-20">
                    <BlogSlide sildeperview={3} />
                </div>

                <div className="container mx-auto py-20 space-y-5" id="FAQ">
                    <h5 className="text-center">FAQ</h5>
                    <h1 className="text-center">Frequently Asked Questions</h1>
                    
                    <div className="w-full md:w-5/6 mx-auto pt-10">
                        <Accordion accordionData={accordions}  />
                    </div>
                </div>
            </div>
            
            <Newsletter/> 

        </>
    )
}
