export default function CTA(){
    return(
        <>
        <section className="diamond-gradient">
            <div className="flex flex-col justify-end md:gap-10 md:flex-row">
                <div className="w-full md:w-3/5 text-white py-10 px-5 pb-20">
                    <h2 className="py-10">We craft customized automotive solutions to meet your unique requirements.</h2>
                    <h1 className="underline underline-offset-[13px] decoration-textGray decoration-2 pb-10">Let’s innovate together!</h1>
                </div>
                <div className="w-full  md:w-2/5">
                    <img src="/dummy.jpg" alt="about-section" className="w-full h-80 md:h-full object-cover" />
                </div>
            </div>
        </section>
        </>
    )
}
