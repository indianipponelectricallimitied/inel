import BreadCrumb from "../components/Ui/bread-crumb"
import SearchAftermarket from "../components/aftermarket/Search-aftermarket"
import BackflipSlider from "../components/aftermarket/BackflipSlider"
import FeaturedProducts from "../components/Ui/Featured-Products"
import Button from "../components/Ui/button"
import WhyAftermarket from "../components/aftermarket/why-Aftermarket"


export default function aftermarket(){
    return(
    <>  



        <BreadCrumb 
                pageTitle= "Aftermarket"
                breadCrumbBg= "/images/Products/breadcrumb.png"
        />


        <div className="container mx-auto flex flex-col md:flex-row gap-12 px-5 md:px-0 py-20">
            <div className="md:w-2/5 space-y-8">
                <h1 >Perfect parts tailored for your needs.</h1>
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

        <section className="container mx-auto space-y-10 md:space-y-20 pb-20 px-5 md:px-0 ">
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
    <div className="gradient-sphere  w-[600px] h-[600px] -top-[100px] -right-[200px]"></div>
    <div className="gradient-sphere  w-[600px] h-[600px] -bottom-[200px] -left-[200px]"></div>


        <section className="container mx-auto flex flex-col md:flex-row gap-20 px-5 md:px-0 py-20">
            <div className="md:w-2/5">
                <h5>Customer Testimonials</h5>
                <h1>What Our Customers Say</h1>
                <p>See how our aftermarket parts have helped customers achieve 
                    long-lasting performance. Read real reviews and success stories 
                    from professionals who rely on our products.</p>
            </div>
            <div className="mx-auto w-9/12 md:w-[45%]">
                <BackflipSlider />
            </div>
        </section>

    </div>
        

    </>

)}