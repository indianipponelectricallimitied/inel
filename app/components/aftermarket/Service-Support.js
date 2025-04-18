const support = [
    {
        title: "Dedicated Technical Expertise",
        image: "/placeholder.jpeg",
        description: "Our team of specialists is always available to provide the technical assistance you need, ensuring your systems perform at their best.",
    },
    {
        title: "Detailed Installation Assistance",
        image: "/placeholder.jpeg",
        description: "Access expert-designed installation guides and video tutorials to ensure every part is set up with accuracy and ease.",
    },
    {
        title: "Thorough Warranty Protection",
        image: "/placeholder.jpeg",
        description: " Rest easy with full access to warranty information that ensures coverage for all genuine parts, safeguarding your investment.",
    },
    
]

export default function ServiceSupport() {
    return (
        <>
            <div className="w-full md:w-3/4 mx-auto pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {support.map((item, index) => (
                        <div key={index} className="relative h-[350px] rounded-[10px]  shadow-[0px_0px_15.5px_0px_#16095970] ">
                            <img src={item.image} alt={item.title} className="rounded-[10px] object-cover h-full w-full" />
                           <div className="flex flex-col p-5 md:p-3 justify-end absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-50% to-[#160959] rounded-[10px] text-white gap-3">
                            <h2 className="text-2xl font-medium">{item.title}</h2>
                            <p >{item.description}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
