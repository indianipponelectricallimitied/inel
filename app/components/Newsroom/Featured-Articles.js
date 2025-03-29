import Image from "next/image";
import Button from "../Ui/button";

import { MdOutlineCalendarMonth } from "react-icons/md";


const Articles =[
    {
        id: 1,
        image: "/dummy.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date : "01, FEB 2025",
        status : "IN THE NEWS",
        channel : "NDTV",
    },
    {
        id: 2,
        image: "/dummy.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date : "01, FEB 2025",
        status : "IN THE NEWS",
        channel : "NDTV",
    },
    {
        id: 3,
        image: "/dummy.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date : "01, FEB 2025",
        status : "IN THE NEWS",
        channel : "NDTV",
    },
    {
        id: 4,
        image: "/dummy.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date : "01, FEB 2025",
        status : "IN THE NEWS",
        channel : "NDTV",
    },
    {
        id: 5,
        image: "/dummy.png",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        date : "01, FEB 2025",
        status : "IN THE NEWS",
        channel : "NDTV",
    },

]

export default function FeaturedArticles(){
    return(
        <div className="border border-black rounded-[10px] p-5 relative ">
            {/* <div className="absolute z-20 bottom-0 left-0 w-full h-52 bg-gradient-to-t rounded-[10px] from-white to-transparent "></div> */}
            <h2 className="font-medium mb-5">Featured Articles</h2>
            <div className="flex gap-4 flex-col h-[460px] overflow-y-scroll scrollbar-hide">
                {Articles.map((article) => (
                    <div key={article.id} className="border border-black rounded-[10px] p-1 flex gap-2 mb-1">
                        <Image src={article.image} alt={article.title} className="rounded-md h-full md:h-24 w-24 object-cover" width={100} height={100} />
                        <div className="flex flex-col gap-2 pr-1 justify-between">
                            <h3 className="md:text-md text-sm font-medium">
                              {article.title.split(' ').slice(0, 10).join(' ')}
                              {article.title.split(' ').length > 10 ? '...' : ''}
                            </h3>
                            <div className="flex gap-2 flex-wrap-reverse md:flex-nowrap items-end justify-between">
                                <p className="md:text-sm text-[10px] flex gap-1 items-center"><MdOutlineCalendarMonth className="text-gray-400 text-md" /> {article.date}</p>
                                <p className="md:text-sm text-[10px] text-primary">{article.status}</p>
                                <Button variant="blue" href="/#" className="text-sm rounded-md  py-[4px] px-[10px]">{article.channel}</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   
