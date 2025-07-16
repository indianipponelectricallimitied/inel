import Image from "next/image";
import Button from "../Ui/button";

export default function Sustainable(){
    return(
        <section className="py-20  bg-[url('/images/home/forest.jpg')] bg-cover bg-bottom relative pt-20 md:pt-40">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="container mx-auto relative z-10">
               <div className="flex flex-col md:flex-row gap-10 text-white items-end mb-10">
                <div className="w-full md:w-1/2 space-y-5">
                    <h5 className="text-white">Sustainability</h5>
                    <h1>A Step Forward to a 
                    Better Tomorrow</h1>
                </div>
                <div className="w-full md:w-1/2 space-y-5">
                    <p>INEL champions sustainability and community impact, advancing cleaner technologies and shaping a better world through responsible innovation.</p>
                    <Button variant="white" href="/sustainable">Know More</Button>
                </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  gap-5 ">
                    <div className="md:col-span-1 md:row-span-2 card-btm-right bg-[#D3CBFF] rounded-[12px] p-5 ">
                        <Image src="/images/home/Renewable.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                        <h1>85.2%</h1>
                        <p className="border-b border-black pb-2 mb-2 font-medium">Renewable Energy Usage</p>
                        <p> The Hosur plant operates on 85.2% renewable energy, minimizing reliance on conventional power.</p>
                    </div>
                    
                    <div className="card-top-left md:col-span-1 md:row-span-1 bg-[#8ead7f] rounded-[12px] p-5">
                        <h1>~30%</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2 font-medium">Reduction in Hazardous Waste</p>
                        <p>Hazardous waste reduced at Hosur and Puducherry plants, driving eco-friendly operations.</p>
                    </div>

                    <div className="md:row-start-2 card-top-right md:col-start-2  bg-[#B6E3FF] rounded-[12px] p-5">
                        <h1>Zero</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2 font-medium"> Liquid Discharge Achieved</p>
                        <p> 100% water recycling with advanced treatment systems.</p>
                    </div>

                    <div className="md:col-span-1 card-btm-right md:col-start-3 md:row-start-1 md:row-span-2 bg-[#FFEAC3] rounded-[12px] p-5">
                        <Image src="/images/home/Frame.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                        <h1>86.53%</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2 font-medium"> Reduction in GHG Emissions</p>
                        <p>Achieved a significant decrease in emissions,reinforcing our commitment to carbon neutrality.</p>
                    </div>
               </div>
            </div>
        </section>
    )
}
