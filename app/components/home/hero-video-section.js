import Button from "../button";

export default function HeroVideoSection(){
    return(
        <section className="relative h-screen md:h-[130vh]">
            <video src="./videos/hero-placeholder-vid.mp4" autoPlay muted loop className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70 h-full w-full"></div>
            <div className="container mx-auto px-5 flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0">
                <h1 className="text-white text-center md:text-left text-[40px] md:text-[90px] font-normal">Driving The Future Mobility</h1>
                <div className="flex gap-4 pt-10">
                    <Button variant="blue" href="/contact">Explore Products</Button>
                    <Button variant="transparent" href="/about">Get in Touch</Button>
                </div>
                <div className="mt-20 bottom-10 right-10 animate-spin [animation-duration:8s] mb-[-100px]">
                    <svg className="w-[140px] h-[140px]" viewBox="0 0 100 100">
                        <defs>
                            <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                        </defs>
                        <text fill="white" fontSize="9.5" letterSpacing="1px">
                            <textPath href="#circle">
                            • Crafetd for Excellence  •  Crafetd for Excellence  
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </section>
    )
}   
