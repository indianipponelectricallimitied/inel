import Button from "./button";

export default function AboutSection(){
    return(
        <>
        <section className="clip-path clip-right bg-primary relative">
            <div className="flex flex-col md:gap-10 md:flex-row">
                <div className="w-full  md:w-1/2">
                    <img src="/dummy.jpg" alt="about-section" className="w-full h-80 md:h-full object-cover" />
                </div>
                <div className="w-full md:w-2/5 text-white py-10 px-5">
                    <h5 className="text-textGray">About</h5>
                    <h1>Crafting Precision Solutions</h1>
                    <p className="my-8">India Nippon Electricals (INEL) manufactures high-performance electronic ignition systems for two-wheelers, three-wheelers, and portable engines. Known for precision, reliability, and innovation, INEL adheres to global certifications like IATF 16949 and ISO/IEC 27001:2013, ensuring quality, sustainability, and efficiency in all its products.</p>
                    <Button variant="white" href="/contact">Learn More</Button>
                </div>
            </div>
        </section>
        <section className="clip-path clip-left bg-primary relative">
            <div className="flex flex-col justify-end md:gap-10 md:flex-row">
                <div className="w-full md:w-2/5 text-white py-10 px-5">
                    <h2 className="py-10">We craft customized automotive solutions to meet your unique requirements.</h2>
                    <h1 className="underline underline-offset-[13px] decoration-textGray decoration-2">Let’s innovate together!</h1>
                </div>
                <div className="w-full  md:w-1/2">
                    <img src="/dummy.jpg" alt="about-section" className="w-full h-80 md:h-full object-cover" />
                </div>
                
            </div>
        </section>
        </>
    )
}
