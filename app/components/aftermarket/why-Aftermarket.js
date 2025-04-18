import Image from "next/image";
const reason= [
    {
        title: " OEM Grade Quality",
        image: "/images/Aftermarket/Quality.png"
    },
    {
        title: "Broad Compatibility",
        image: "/images/Aftermarket/Compatibility.png"
    },
    {
        title: "Comprehensive Support",
        image: "/images/Aftermarket/Support.png"
    },
    {
        title: "Commitment to Sustainability",
        image: "/images/Aftermarket/Sustainability.png"
    },

]

export default function WhyAftermarket() {
    return (
        <section className="diamond-gradient py-20 relative clip-path btmleft">
           <div className="container mx-auto flex flex-col md:flex-row gap-20 ">
           <div className="w-full md:w-1/2 text-white space-y-5">
                <h5>Why Choose Our Aftermarket Products?</h5>
                <h1>Engineered for Excellence, Trusted Worldwide</h1>
                <p className="pt-5">Our aftermarket solutions are crafted to deliver outstanding performance, reliability, and durability. Each product is rigorously tested to meet the highest industry standards, ensuring seamless compatibility and long-lasting efficiency for your vehicle.
                </p>
           </div>
           <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2  gap-4 justify-center">
                {reason.map((reason, index) => (
                    <div key={index} className="bg-[#E3E9FF] rounded-[10px] p-2">
                         <Image src={reason.image} alt={reason.title} width={130} height={130} 
                         className="ms-auto -mb-10"
                         />
                        <h2 className="w-3/5 font-medium p-3">{reason.title}</h2>
                    </div>
                ))}
              </div>
           </div>
           </div>
        </section>
    )
}
