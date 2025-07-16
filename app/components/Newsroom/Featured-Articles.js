import Image from "next/image";
import Button from "../Ui/button";

import { MdOutlineCalendarMonth } from "react-icons/md";


const Articles =[
    {
        id: 1,
        image: "/images/news-companies/thehindu-logo.svg",
        title: "Lucas Indian Service to up stake in India Nippon Electricals to 70%",
        date : "24, JUN 2023",
        status : "IN THE NEWS",
        channel : "The Hindu",
        link : "https://www.thehindu.com/business/lucas-indian-service-to-up-stake-in-india-nippon-electricals-to-70/article67005281.ece",
    },
  
    {
        id: 2,
        image: "/images/news-companies/mobility-logo-red.png",  
        title: "India Nippon Upbeat About New Generator System",
        date : "28, FEB 2023",
        status : "IN THE NEWS",
        channel : "Mobility Outlook",
        link: "https://www.mobilityoutlook.com/features/india-nippon-upbeat-about-new-generator-system/"
    },
    {
        id: 3,
        image: "/images/news-companies/thehindu-logo.svg",
        title: "India Nippon Electricals to develop EV product line",
        date : "30, AUG 2023",
        status : "IN THE NEWS",
        channel : "The Hindu",
        link : "https://www.thehindu.com/business/india-nippon-electricals-to-develop-ev-product-line/article67251688.ece",
    },
    {
        id: 4,
        image: "/images/news-companies/mti.jpeg",
        title: "Driving change with smart EV solution",
        date : "01, SEP 2023",
        status : "IN THE NEWS",
        channel : "Manufacturing Today India",
        link: "https://www.manufacturingtodayindia.com/driving-change-with-smart-ev-solutions"
    },
    {
        id: 5,
        image: "/images/news-companies/OLB-logo-1.svg",
        title: "India Nippon Electricals stands to gainas domestic OEMs shift to electronic ignition systems in order to meet BS-VI norms",
        date : "11, JUL 2018",
        status : "IN THE NEWS",
        channel : "Outlook Business",
        link: "https://www.outlookbusiness.com/magazine/business/story/revving-up-for-the-future-4522"
    },

]

export default function FeaturedArticles(){
    return(
        <div className="border border-black rounded-[10px] p-5 relative ">
            {/* <div className="absolute z-20 bottom-0 left-0 w-full h-52 bg-gradient-to-t rounded-[10px] from-white to-transparent "></div> */}
            <h2 className="font-medium mb-5">Featured Articles</h2>
            <div className="flex  flex-col h-[460px] overflow-y-scroll scrollbar-hide">
                {Articles.map((article) => (
                    <div key={article.id} className="border-b border-b-gradient-to-r from-[#13409C] to-[#578EFF] px-1  py-4 flex gap-2 mb-1 article-border">
                        <Image src={article.image} alt={article.title} className="rounded-md h-full md:h-20 w-20 object-contain " width={100} height={100} />
                        <div className="flex flex-col gap-2 pr-1 justify-between w-full">
                            <h3 className="md:text-md text-sm font-medium">
                              {article.title.split(' ').slice(0, 10).join(' ')}
                              {article.title.split(' ').length > 10 ? '...' : ''}
                            </h3>
                            <div className="flex gap-2 flex-wrap-reverse md:flex-nowrap items-end justify-between">
                                <p className="md:text-sm text-[10px] flex gap-1 items-center"><MdOutlineCalendarMonth className="text-gray-400 text-md" /> {article.date}</p>
                                {/* <p className="md:text-sm text-[10px] text-primary">{article.status}</p> */}
                                <Button variant="lightBlue" href={article.link} className="text-sm rounded-md  py-[4px] px-[10px]">{article.channel}</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   
