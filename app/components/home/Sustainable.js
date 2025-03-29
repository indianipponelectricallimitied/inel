import Image from "next/image";
import Button from "../Ui/button";

export default function Sustainable(){
    return(
        <section className="py-20  diamond-gradient clip-path topleft">
            <div className="container mx-auto px-5">
               <div className="flex flex-col md:flex-row gap-10 text-white items-end">
                <div className="w-full md:w-1/2 space-y-5">
                    <h5>Sustainability</h5>
                    <h1>Powering a <br/> Sustainable Future</h1>
                    <p>At INEL, we are committed to driving environmental stewardship and social responsibility 
                        through innovative automotive technologies and dedicated community engagement.</p>
                    <Button variant="white" href="/#">Know More</Button>
                </div>
                <div className="w-full md:w-1/2">
                    <Image src="/images/home/sustainable.png" alt="sustainable" width={800} height={500} className="object-cover rounded-[20px]" />
                </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  gap-5 mt-10">
                    <div className="md:col-span-1 md:row-span-2 bg-gradient-to-t from-[#246AF9] to-[#578EFF] rounded-[20px] p-5 text-white">
                        <Image src="/images/home/Renewable.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                        <h1>85.2%</h1>
                        <p className="border-b border-white pb-2 mb-2">Renewable Energy</p>
                        <p>The Hosur plant operates on 85.2% renewable 
                        energy, minimizing reliance on conventional power</p>
                    </div>
                    
                    <div className="md:col-span-1 md:row-span-1 bg-[#E3E9FF] rounded-[20px] p-5">
                        <h1>~30%</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2">Renewable Energy</p>
                        <p>Hazardous waste reduced at Hosur and Puducherry  plants, driving eco-friendly operations.</p>
                    </div>

                    <div className="md:row-start-2 md:col-start-2  bg-[#E3FFF9] rounded-[20px] p-5">
                        <h1>Zero</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2">Liquid Discharge Achieved</p>
                        <p>100% water recycling with advanced treatment systems.</p>
                    </div>

                    <div className="md:col-span-1 md:col-start-3 md:row-start-1 md:row-span-2 bg-white rounded-[20px] p-5">
                        <Image src="/images/home/Emissions.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                        <h1>85.2%</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2">Renewable Energy</p>
                        <p>The Hosur plant operates on 85.2% renewable 
                        energy, minimizing reliance on conventional power</p>
                    </div>
               </div>
            </div>
        </section>
    )
}
