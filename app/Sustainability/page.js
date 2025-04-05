import BreadCrumb from "../components/Ui/bread-crumb"
import PlayVideo from "../components/Ui/playVideo"
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go";

const quickLinks = [
    {
      title: "Sustainability Programs",
      href: "/investor-relations",
    },
    {
      title: "Governance Structure",
      href: "/investor-relations",
    },
    {
      title: "Road Map to Net Zero",
      href: "/investor-relations",
    },
    {
      title: "Sustainable Report",
      href: "/investor-relations",
    },
    
  ];


export default function Sustainability(){
    return(
        <>
            <BreadCrumb 
                pageTitle= "Sustainability"
                breadCrumbBg= "/images/Sustainability/breadcrumb.png"
            />

            <section className="bg-white">
                <div className="container mx-auto px-5 md:px-0 py-20 text-center space-y-5">
                    <h5>Sustainability</h5>
                    <h1 >Powering a Sustainable Future</h1>
                    <p className="md:w-2/3 mx-auto pb-5">At India Nippon Electricals, sustainability is at the heart of everything we do. We are committed to creating a greener future through eco-friendly practices, energy-efficient solutions, and responsible manufacturing. Our approach focuses on reducing our environmental footprint while driving innovation and ensuring long-term value for our communities, customers, and the planet. Together, we power progress with purpose.</p>

                    <PlayVideo  videolink ="/videos/hero-placeholder-vid.mp4"/>


                </div>
            </section>

            <section className="bg-[url('/images/Sustainability/tree.webp')] bg-cover bg-center py-40 clip-path btmright relative">
                <div className="container mx-auto px-5 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  gap-5 mt-5">
                        <div className="md:col-span-1 md:row-span-2 bg-gradient-to-t from-[#246bf9da] to-[#b8cfffa1] backdrop-blur-md rounded-[20px] p-5 text-white">
                            <Image src="/images/home/Renewable.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                            <h1>85.2%</h1>
                            <p className="border-b border-white pb-2 mb-2">Renewable Energy</p>
                            <p> The Hosur facility is powered by renewable sources, minimizing environmental impact.</p>
                        </div>
                        
                        <div className="md:col-span-1 md:row-span-1 bg-[#D6FFBF8C] rounded-[20px] p-5 backdrop-blur-md">
                            <h1>~30%</h1>
                            <p className="border-b border-[#7B7B7B] pb-2 mb-2">Reduction in Hazardous Waste</p>
                            <p>Achieved at our Hosur and Puducherry plants, enhancing eco-friendly operations.</p>
                        </div>

                        <div className="md:row-start-2 md:col-start-2  bg-gradient-to-b from-[#b6e3ffcb] to-[#dbf1ffd3] rounded-[20px] backdrop-blur-md p-5">
                            <h1>Zero</h1>
                            <p className="border-b border-[#7B7B7B] pb-2 mb-2"> Liquid Discharge</p>
                            <p> Ensuring 100% water recycling through advanced treatment systems.</p>
                        </div>

                        <div className="md:col-span-1 md:col-start-3 md:row-start-1 md:row-span-2 bg-gradient-to-b from-[#ffffff70] to-[#bfbfbfcb] backdrop-blur-md rounded-[20px] p-5">
                            <Image src="/images/home/Emissions.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                            <h1>85.2%</h1>
                            <p className="border-b border-[#7B7B7B] pb-2 mb-2"> Reduction in GHG Emissions</p>
                            <p>Significant emissions reduction, supporting our commitment to carbon neutrality.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#ffffff] to-[#ECF9FF]">
                <div className="container mx-auto px-5 md:px-0 py-20 text-center space-y-5">
                    
                    <h1 className="text-center text-3xl md:text-5xl leading-[150%]">With a global footprint, India Nippon Electricals is committed to <span className="text-3xl md:text-5xl  text-[#6452BE] font-medium">sustainability through eco-friendly processes and energy-efficient innovations,</span> driving a greener future.</h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center py-10">
                       <Image src="/images/Sustainability/ugc.png" alt="sustainable" className="w-[100px] object-contain" width={500} height={500} />
                       <Image src="/images/Sustainability/iso14.png" alt="sustainable" className="w-[100px] object-contain" width={500} height={500} ></Image>
                       <Image src="/images/Sustainability/fsc.png" alt="sustainable" className="w-[100px] object-contain" width={500} height={500} />
                       <Image src="/images/Sustainability/iso.png" alt="sustainable" className="w-[100px] object-contain" width={500} height={500} />
                    </div>

                    <div className="flex justify-center md:gap-20 flex-col md:flex-row  text-left gap-10 pt-10">
                        <Image src="/images/Sustainability/Sustainable.webp" alt="sustainable" className="w-full md:w-2/5 rounded-[10px] object-cover" width={500} height={500} />
                        <div className="space-y-5">
                            <h5>Sustainable Updates</h5>
                            <h1>Knowledge Hub</h1>
                            <p>We’re always finding new ways to reach and exceed our sustainability goals. Explore our latest reports for more insights. </p>
                            <ul className="space-y-5 md:w-1/2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                    <a href={link.href} className="font-thin flex justify-between border-b border-black ite pb-2">
                                        {link.title}
                                        <GoArrowUpRight className="text-[20px]" />
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}