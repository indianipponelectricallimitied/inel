import BreadCrumb from "../components/Ui/bread-crumb"
import SearchAftermarket from "../components/aftermarket/Search-aftermarket"
import BackflipSlider from "../components/Ui/BackflipSlider"
import FeaturedProducts from "../components/Ui/Featured-Products"
import Button from "../components/Ui/button"
import WhyAftermarket from "../components/aftermarket/why-Aftermarket"
import ServiceSupport from "../components/aftermarket/Service-Support"
import KnowledgeHub from "../components/Ui/Knowledge-Hub"
import AftermarketForm from "../components/aftermarket/aftermarket-form"
import Newsletter from "../components/Common/newsletter"
import IndiaMap from "../components/aftermarket/indiamap"

const quickLinks = [
    // {
    //   title: "Installation Guides",
    //   href: "#",
    // },
    // {
    //   title: "Product Documentation",
    //   href: "#",
    // },
    // {
    //   title: "Troubleshooting Assistance",
    //   href: "#",
    // }
  ];

  const testimonials = [
    {
        name: "Sandeep Kulkarni",
        image: "/images/Aftermarket/testimonial1.png",
        identity: "Automotive Parts Dealer, Pune",
        feedbaktitle:"Easy to stock, easy to sell",
        feedback:"INEL’s aftermarket range moves fast. The brand has earned a solid name among local mechanics, and the demand just keeps growing. With great packaging, low return rates, and strong word-of-mouth, it’s been a reliable addition to my inventory."
    },
    {
        name: "Krishna Kumar",
        image: "/images/Aftermarket/testimonial2.png",
        identity: "Service Manager, Multibrand Auto Center, Lucknow",
        feedbaktitle:"Built trust with technicians and customers alike.",
        feedback:"We switched to INEL for key aftermarket components last year, and the feedback has been great. Mechanics trust the fit and performance, and we’ve had fewer complaints and returns. It’s become a go-to brand in our workshop."
    },
    {
        name: "Ahmed Khan",
        image: "/images/Aftermarket/testimonial3.png",
        identity: "Regional Parts Distributor, Hyderabad",
        feedbaktitle:"A trusted brand with solid demand.",
        feedback:"As a distributor, I’ve seen INEL’s aftermarket parts fly off the shelves. Mechanics prefer them for reliability, and customers return asking for the same brand. The growth in demand over the last year has been impressive."
    }
]


export default function aftermarket(){
    return(
    <>  

        <BreadCrumb 
                pageTitle= "Aftermarket"
                breadCrumbBg= "/images/Aftermarket/breadcrumb.webp"
        />


        <div className="container mx-auto flex flex-col lg:flex-row gap-12  py-20">
            <div className="w-full text-center space-y-8">
                <h1 >Perfect parts tailored for your needs.</h1>
                <p >Whether you need ignition systems, relays, or regulators, 
                    we offer a wide selection of high-quality aftermarket products. 
                    {/* Browse our categories to find the right fit for your vehicle. */}
                    </p>
                {/* <p>Use our smart filters to locate the perfect match for your vehicle.</p> */}
            </div>
            {/* <div className="lg:w-3/5">
                <SearchAftermarket />
            </div> */}
        </div>

        {/* <section className="container mx-auto space-y-10 md:space-y-20 pb-20  ">
            <h1 className="text-center">Featured Products</h1>
                <FeaturedProducts />
                <Button href="/Products&Solutions" 
                        variant="blue" 
                        className="w-fit mx-auto">
                        Explore all Products
                    </Button>
        </section> */}

        <WhyAftermarket  />


    <div className="grid-with-gradients">
    <div className="gradient-sphere  w-[600px] h-[600px] -top-[200px] -right-[250px]"></div>
    <div className="gradient-sphere  w-[600px] h-[600px] bottom-[300px] -left-[300px]"></div>
    <div className="gradient-sphere  w-[600px] h-[600px] -bottom-[300px]  left-[50%] translate-x-[-50%]"></div>

        
        <section className="container mx-auto  py-20">
            <div className="text-center space-y-5">
                <h5>Service & Support</h5>
                <h1>Expert Support at Every Step</h1>
                <p className="md:w-3/4 mx-auto">Get guidance, installation help, and warranty support.</p>
            </div>
            <ServiceSupport />
        </section>


        <section className="container mx-auto py-20">
            <IndiaMap />
        </section>

        <section className="container mx-auto flex flex-col lg:flex-row gap-20  py-20">
            <div className="lg:w-2/5">
                <h5>Customer Testimonials</h5>
                <h1>What Our Customers Say</h1>
                <p>See how our aftermarket parts have helped customers achieve 
                    long-lasting performance. Read real reviews and success stories 
                    from professionals who rely on our products.</p>
            </div>
            <div className="mx-auto w-9/12 lg:w-[45%] pb-20">
                <BackflipSlider testimonials={testimonials} />
            </div>
        </section>

    </div>
        
        <section className="bg-[#F6F6F6]">
            <div className="container mx-auto py-20">
                <KnowledgeHub 
                imageSrc="/images/Aftermarket/resource.png"
                imageAlt="sustainable"
                tagline="Resources & Downloads"
                title="Our Knowledge Hub"
                description="Empower yourself with the essential resources you need for seamless product installation, efficient troubleshooting, and more. Our comprehensive library ensures you have all the tools to optimize your experience with INEL."
                    quickLinks={quickLinks}
                />
            </div>
        </section>

        <section className="container mx-auto  py-20 flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-[38%] space-y-5">
                <h5>Get in Touch</h5>
                <h1>Got Questions? We’re Here to Help</h1>
                <p>If you have any inquiries regarding our aftermarket products, don’t hesitate to get in touch. Our team is ready to assist and provide the solutions you need.</p>
                <p>Complete the form, and we'll ensure the right support is provided to meet your requirements.</p>
            </div>
            <div className="w-full lg:w-7/12">
                <AftermarketForm />
            </div>
        </section>  

        <Newsletter />

    </>

)}