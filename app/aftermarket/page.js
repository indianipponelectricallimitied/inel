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
      title: "Installation Manuals",
      href: "/Installation Manuals",
    },
    {
      title: "Product Catalogs",
      href: "/iProduct Catalogs",
    },
    {
      title: "Troubleshooting FAQs",
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
                breadCrumbBg= "/images/aftermarket/breadcrumb.jpeg"
        />


        <div className="container mx-auto flex flex-col md:flex-row gap-12  py-20">
            <div className="md:w-2/5 space-y-8">
                <h1 >Precision Parts, Perfectly Tailored for Your Vehicle</h1>
                <p >Whether you need ignition systems, relays, or regulators, 
                    we offer a wide selection of high-quality aftermarket products. 
                    Browse our categories to find the right fit for your vehicle.</p>
                <p>Use our smart filters to locate the perfect 
                match for your vehicle.</p>
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
                <h1>Expert Support at Every Step</h1>
                <p>Get guidance, installation help, and warranty support.</p>
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
                imageSrc="/images/aftermarket/Knowledge.jpeg"
                imageAlt="sustainable"
                tagline="Resources & Downloads"
                title="Knowledge Hub"
                description="Get access to installation guides, troubleshooting tips, and technical manuals."
                    quickLinks={quickLinks}
                />
            </div>
        </section>

        <section className="container mx-auto  py-20 flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-[38%] space-y-5">
                <h5>Get in Touch</h5>
                <h1>Need Help? Let's Talk</h1>
                <p>Have questions about our aftermarket parts? Reach out, and 
                we’ll get back to you soon.</p>
                <p>Fill out the form, and our team will provide the right solutions 
                for your needs.</p>
            </div>
            <div className="w-full md:w-7/12">
                <AftermarketForm />
            </div>
        </section>  

        <Newsletter />

    </>

)}