import Image from "next/image";
const reason= [
    {
        title: " OEM Grade Quality",
        image: "/images/Aftermarket/Quality.png"
    },
    {
        title: "Wide Compatibility",
        image: "/images/Aftermarket/Compatibility.png"
    },
    {
        title: "Reliable Support",
        image: "/images/Aftermarket/Support.png"
    },
    {
        title: "Sustainability Focus",
        image: "/images/Aftermarket/Sustainability.png"
    },

]

export default function WhyAftermarket() {
    return (
        <section className="diamond-gradient py-20 relative clip-path btmleft">
           <div className="container mx-auto flex flex-col lg:flex-row gap-20 ">
           <div className="w-full lg:w-1/2 text-white space-y-5">
                <h5 className="text-white">Built for Performance,  Trusted for Quality</h5>
                <h1>Engineered for Excellence, Trusted Worldwide</h1>
                <p className="pt-5">Our aftermarket products are engineered to deliver exceptional
reliability, durability, and performance. Designed to meet the highest 
industry standards, each part undergoes rigorous testing to ensure 
seamless compatibility and long-lasting efficiency for your vehicle.
                </p>
           </div>
           <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2  gap-4 justify-center">
                {reason.map((reason, index) => (
                    <div key={index} className="bg-gradient-to-b from-[#E3E9FF] to-[#FFFFFF] card-top-left-bottom-right rounded-[10px] p-4 md:p-6 ">
                         <Image src={reason.image} alt={reason.title} width={130} height={130} 
                         className="ms-auto -md:mb-10"
                         />
                        <h2 className="md:w-3/5 font-medium p-3 text-sm md:text-2xl">{reason.title}</h2>
                    </div>
                ))}
              </div>
           </div>
           </div>
        </section>
    )
}
