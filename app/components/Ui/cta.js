import Image from "next/image";
import Link from "next/link";
export default function CTA(){
    return(
        <>
        <section className="diamond-gradient relative clip-path btmleft">
            <div className="flex flex-col justify-end md:gap-10 md:flex-row">
                <div className="w-full md:w-3/5 text-white py-10 px-5 pb-20 md:ms-20 lg:ms-30">
                    <h2 className="py-10">We craft customized automotive solutions to meet your unique requirements.</h2>
                    <Link href="/contact" className="underline decoration-1 underline-offset-[13px] font-medium text-[36px] md:text-[45px] decoration-textGray decoration-2 pb-10">Let’s innovate together!</Link>
                </div>
                <div className="w-full  md:w-2/5">
                    <Image src="/images/home/crafting.png" alt="about-section" className="w-full h-80 md:h-full object-cover" width={500} height={500} />
                </div>
            </div>
        </section>
        </>
    )
}
