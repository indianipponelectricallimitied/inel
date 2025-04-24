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

const quickLinks = [
    {
      title: "Installation Guides",
      href: "/Installation Manuals",
    },
    {
      title: "Product Documentation",
      href: "/iProduct Catalogs",
    },
    {
      title: "Troubleshooting Assistance",
      href: "/Troubleshooting FAQs",
    }
  ];

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


export default function aftermarket(){
    return(
    <>  

        <BreadCrumb 
                pageTitle= "Aftermarket"
                breadCrumbBg= "/images/Aftermarket/breadcrumb.jpeg"
        />


        <div className="container mx-auto flex flex-col md:flex-row gap-12  py-20">
            <div className="md:w-2/5 space-y-8">
                <h1 >Precision Parts, Perfectly Tailored for Your Vehicle</h1>
                <p >At INEL, we provide a meticulously curated selection of premium aftermarket parts to meet the highest standards of performance and reliability. From ignition systems to relays and regulators, our global offering ensures that you find the ideal components for your vehicle, no matter the make or model</p>
            </div>
            <div className="md:w-3/5">
                <SearchAftermarket />
            </div>
        </div>

        <section className="container mx-auto space-y-10 md:space-y-20 pb-20  ">
            <h1 className="text-center">Featured Products</h1>
                <FeaturedProducts />
                <Button href="/Products&Solutions" 
                        variant="blue" 
                        className="w-fit mx-auto">
                        Explore all Products
                    </Button>
        </section>

        <WhyAftermarket />


    <div className="grid-with-gradients">
    <div className="gradient-sphere  w-[600px] h-[600px] -top-[200px] -right-[250px]"></div>
    <div className="gradient-sphere  w-[600px] h-[600px] bottom-[300px] -left-[300px]"></div>
    <div className="gradient-sphere  w-[600px] h-[600px] -bottom-[300px]  left-[50%] translate-x-[-50%]"></div>

        
        <section className="container mx-auto  py-20">
            <div className="text-center space-y-5">
                <h5>Service & Support</h5>
                <h1>Tailored Support at Every Turn</h1>
                <p className="md:w-3/4 mx-auto">At INEL, we offer dedicated support designed to guide you through every phase, from installation to after-sales care. With our expertise, we ensure your experience is smooth, precise, and fully supported by our comprehensive services.</p>
            </div>
            <ServiceSupport />
        </section>

        <section className="container mx-auto flex flex-col md:flex-row gap-20  py-20">
            <div className="md:w-2/5">
                <h5>Customer Testimonials</h5>
                <h1>What Our Customers Say</h1>
                <p>See how our aftermarket parts have helped customers achieve 
                    long-lasting performance. Read real reviews and success stories 
                    from professionals who rely on our products.</p>
            </div>
            <div className="mx-auto w-9/12 md:w-[45%] pb-20">
                <BackflipSlider testimonials={testimonials} />
            </div>
        </section>

    </div>
        
        <section className="bg-[#F6F6F6]">
            <div className="container mx-auto  py-20">
                <KnowledgeHub 
                imageSrc="/images/Aftermarket/aerial-inel.jpeg"
                imageAlt="sustainable"
                tagline="Resources & Downloads"
                title="Explore Our Knowledge Hub"
                description="Empower yourself with the essential resources you need for seamless product installation, efficient troubleshooting, and more. Our comprehensive library ensures you have all the tools to optimize your experience with INEL."
                    quickLinks={quickLinks}
                />
            </div>
        </section>

        <section className="container mx-auto  py-20 flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-[38%] space-y-5">
                <h5>Get in Touch</h5>
                <h1>Got Questions? We’re Here to Help</h1>
                <p>If you have any inquiries regarding our aftermarket products, don’t hesitate to get in touch. Our team is ready to assist and provide the solutions you need.</p>
                <p>Complete the form, and we'll ensure the right support is provided to meet your requirements.</p>
            </div>
            <div className="w-full md:w-7/12">
                <AftermarketForm />
            </div>
        </section>  

        <Newsletter />

    </>

)}