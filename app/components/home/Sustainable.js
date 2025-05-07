import Image from "next/image";
import Button from "../Ui/button";

export default function Sustainable(){
    return(
        <section className="py-20  diamond-gradient relative pt-40">
            <div className="container mx-auto">
               <div className="flex flex-col md:flex-row gap-10 text-white items-end">
                <div className="w-full md:w-1/2 space-y-5">
                    <h5>Sustainability</h5>
                    <h1>Driving Sustainable Innovation</h1>
                    <p>At INEL, we are shaping a sustainable future through pioneering automotive innovations and a steadfast commitment to environmental and social responsibility. By integrating sustainability into every aspect of our operations, we are creating lasting, positive impact for the planet and communities worldwide.</p>
                    <Button variant="white" href="/#">Know More</Button>
                </div>
                <div className="w-full md:w-1/2">
                    <Image src="/images/home/sustainable.jpg" alt="sustainable" width={1800} height={1000} className="object-cover rounded-[20px] w-full h-[350px]" />
                </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  gap-5 mt-5">
                    <div className="md:col-span-1 md:row-span-2 bg-gradient-to-t from-[#246AF9] to-[#578EFF] rounded-[20px] p-5 text-white">
                        <Image src="/images/home/Renewable.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                        <h1>85.2%</h1>
                        <p className="border-b border-white pb-2 mb-2">Renewable Energy</p>
                        <p> The Hosur facility is powered by renewable sources, minimizing environmental impact.</p>
                    </div>
                    
                    <div className="md:col-span-1 md:row-span-1 bg-[#E3E9FF] rounded-[20px] p-5">
                        <h1>~30%</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2">Reduction in Hazardous Waste</p>
                        <p>Achieved at our Hosur and Puducherry plants, enhancing eco-friendly operations.</p>
                    </div>

                    <div className="md:row-start-2 md:col-start-2  bg-[#E3FFF9] rounded-[20px] p-5">
                        <h1>Zero</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2"> Liquid Discharge</p>
                        <p> Ensuring 100% water recycling through advanced treatment systems.</p>
                    </div>

                    <div className="md:col-span-1 md:col-start-3 md:row-start-1 md:row-span-2 bg-white rounded-[20px] p-5">
                        <Image src="/images/home/Emissions.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                        <h1>85.2%</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2"> Reduction in GHG Emissions</p>
                        <p>Significant emissions reduction, supporting our commitment to carbon neutrality.</p>
                    </div>
               </div>
            </div>
        </section>
    )
}
