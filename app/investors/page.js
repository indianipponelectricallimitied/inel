import BreadCrumb from "../components/Ui/bread-crumb"
import Newsletter from "../components/Common/newsletter"
import StockDataCard from "../components/Common/stockmarket/StockDataCard"
import Button from "../components/Ui/button"
import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go";


export default function Investors() {

const reports=[
    {
        title: "Annual Reports",
        link: "#"
    },
    {
        title: "Financial Reports",
        link: "#"
    },
    {
        title: "Policies",
        link: "#"
    },
    {
        title: "Corporate Governance",
        link: "#"
    }
]
    return (
        <>
            <BreadCrumb 
                pageTitle= "Investors"
                breadCrumbBg= "/images/home/policies-breadcrunb.png"
            />

            <div className="container mx-auto pt-20 pb-5 flex flex-col md:flex-row justify-between gap-20">
                <div className="w-full lg:w-2/6 space-y-5">
                    <h1>INEL at Glance</h1>
                    <p>INEL is a leading global technology company providing cutting-edge solutions for electric mobility, automotive components, and industrial technology.</p>
                    <p>
                    INEL specializes in the manufacturing of advanced electric vehicle (EV) systems, focusing on power electronics, display & cluster systems, sensors, and engine & throttle control. The company’s product portfolio caters to OEMs (original equipment manufacturers) and other industry leaders, contributing to the advancement of sustainable, safe, and efficient transportation.
                    </p>
                </div>
                <div className="w-full lg:w-4/6 mx-auto">
                    <StockDataCard background="bg-[#F6F6F6]" />
                </div>
            </div>

            <div className="container mx-auto pb-20 flex flex-col md:flex-row justify-between gap-20">
                <div className="w-full lg:w-2/6"> 
                <ul className="space-y-5   pt-10">
                    {reports.map((report, index) => (
                        <li key={index} className="flex gap-10 items-center">
                            <Image src="/images/invester/pdf.png" alt={report.title} width={50} height={100} />
                            <a href={report.link} className="font-thin w-full flex justify-between border-b border-black pb-2">
                                {report.title}  
                                <GoArrowUpRight className="text-[20px]" />
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
                <div className="w-full lg:w-4/6 mx-auto flex flex-col lg:flex-row gap-5">
                    <div className="flex p-5 flex-col justify-between gap-5 h-80  lg:w-2/5 rounded-[20px] bg-[url('/images/invester/Investor-Presentation.png')] bg-cover bg-center">
                        <h2 className="text-white">Investor <br/> Presentation</h2>
                        <Button variant="white">Investor Presentation</Button>
                    </div>
                    <div className="flex p-5 flex-col justify-between gap-5 h-80 lg:w-3/5 rounded-[20px] bg-[url('/images/invester/Board-Directors.png')] bg-cover bg-center">
                        <h2 className="text-white">Board  Of<br/> Directors</h2>
                        <Button variant="white">Know More</Button>
                    </div>
                </div>
            </div>


            
            <Newsletter />
        </>
    )
}
