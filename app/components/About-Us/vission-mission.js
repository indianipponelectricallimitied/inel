import Image from "next/image";

const visionMission = [
    {
        title: "Vission",
        description: "To be the trusted partner for customers in the supply of high-quality electrical and electronic solutions across the automotive and non-automotive industries, while fostering sustainable growth and technological leadership.",
        
    },
    {
        title: "Mission",
        description: "To become the top choice for ignition systems in the automotive and general-purpose engine markets. We are dedicated to designing and delivering high-performance, cost-efficient products by engaging our team and suppliers in the pursuit of excellence.",
    }
]

export default function VissionMission(){
    return(
        <section className="bg-[url('/images/about/vision-mission.jpeg')] bg-cover bg-center bg-no-repeat clip-path btmright">
            <div className="container mx-auto py-20 text-white ">
                <div className="flex flex-col gap-10">
                    <div className="w-full lg:w-2/5 bg-black/40 backdrop-blur-sm p-8 border-white border-2 rounded-[20px] ">
                        <Image src="/images/about/vision.png" alt="vision" width={500} height={500}  className="h-32 w-32 object-contain"/>
                        <h1 className="pb-4">{visionMission[0].title}</h1>
                        <p>{visionMission[0].description}</p>
                    </div>
                    <div className="w-full lg:w-2/5 bg-gradient-to-t from-[#246bf9ce] to-[#578fffa6] backdrop-blur-sm p-8 border-white border-2 rounded-[20px] ">
                        <Image src="/images/about/mission.png" alt="mission" width={500} height={500} className="h-32 w-32 object-contain" />
                        <h1 className="pb-4">{visionMission[1].title}</h1>
                        <p>{visionMission[1].description}</p>
                    </div>  
                </div>
            </div>
        </section>
    )
}
