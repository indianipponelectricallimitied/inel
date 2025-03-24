import Button from "./button";

export default function AboutSection(){
    return(
        <>
        <section className="clip-path clip-left bg-primary relative diamond-gradient">
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
