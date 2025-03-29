import Image from "next/image";

const visionMission = [
    {
        title: "Vission",
        description: "To become a supplier of choice for our customers for supply of Electricals and Electronic Products for Automotive and non-automotive domain.",
        
    },
    {
        title: "Mission",
        description: "To be a preferred supplier of Ignition Systems for Automotive and General Purpose engines. To Design, develop & Supply cost competitive, high Quality products to meet Customer requirements through involvement of Employees and Suppliers thru use of contemporary technology.",
    }
]

export default function VissionMission(){
    return(
        <section className="bg-[url('/images/about/vision-mission.webp')] bg-cover bg-center bg-no-repeat clip-path btmright">
            <div className="container mx-auto py-20 text-white px-5 md:px-0">
                <div className="flex flex-col gap-10">
                    <div className="w-full md:w-2/5 bg-black/40 backdrop-blur-sm p-8 border-white border-2 rounded-[20px] ">
                        <Image src="/images/about/vision.png" alt="vision" width={500} height={500}  className="h-32 w-32 object-contain"/>
                        <h1 className="pb-4">{visionMission[0].title}</h1>
                        <p>{visionMission[0].description}</p>
                    </div>
                    <div className="w-full md:w-2/5 bg-gradient-to-t from-[#246bf9ce] to-[#578fffa6] backdrop-blur-sm p-8 border-white border-2 rounded-[20px] ">
                        <Image src="/images/about/mission.png" alt="mission" width={500} height={500} className="h-32 w-32 object-contain" />
                        <h1 className="pb-4">{visionMission[1].title}</h1>
                        <p>{visionMission[1].description}</p>
                    </div>  
                </div>
            </div>
        </section>
    )
}
