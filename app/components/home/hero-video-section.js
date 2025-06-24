import Button from "../Ui/button";

export default function HeroVideoSection(){
    return(
        <section className="relative h-screen md:h-[105vh]">
            <video src="./videos/home-main.mp4" autoPlay muted loop className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 h-full w-full"></div>
            <div className="container mx-auto  flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0">
                <h1 className="text-white text-center  text-[40px] md:text-[72px] font-normal">Redefining Automotive Performance</h1>
                <p className="text-white text-light text-center py-10">Delivering custom ignition solutions for OEMs across diverse applications.</p>
                <div className="flex gap-4  pt-3 justify-center items-center">
                    <Button variant="blue" href="/Products&Solutions" className="text-[12px] md:text-[16px]">Explore Products</Button>
                    <Button variant="transparent" href="/contact-us" className="text-[12px] text-white md:text-[16px]">Get in Touch</Button>
                </div>
                {/* <div className="mt-28 bottom-10   mb-[-150px] relative">
                    <svg className="w-[140px] h-[140px] animate-spin [animation-duration:8s]" viewBox="0 0 100 100">
                        <defs>
                            <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                        </defs>
                        <text fill="white" fontSize="9.5" letterSpacing="1.5px" textLength="230">
                            <textPath href="#circle">
                            • Crafted for Excellence • Crafted for Excellence 
                            </textPath>
                        </text>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
                        <p className="text-[10px]">Scroll Down</p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}   
