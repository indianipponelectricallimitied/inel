const programs = [
    {
        title: "Culture Catalyst",
        bullets: [
            "Guided by entrepreneurial vision, we drive R&D to craft transformative, customer-centric solutions.",
            "Encouraging employees to try new and better ways of doing things, thereby fostering a spirit of precision, efficiency, and technological growth."
        ],
        image: "/images/career/culturecatalyst.webp"
    },
    {
        title: "People Power",
        bullets: [
            "At INEL, we celebrate generational diversity, from Gen X to Gen Z, cultivating an inclusive culture that offers unmatched guidance and smooth transition.",
            "Learning and leading together by advancing skills through upskilling and reskilling in a progressive setting."
        ],
        image: "/images/career/people.webp"
    },
    {
        title: "Vital Values",
        bullets: [
            "Integrity & Quality of Work",
            "Driven to be World class",
            "Being a Net contributor",
            "Anticipation and Being Proactive",
            "Innovating / Innovative Mindset"
        ],
        image: "/images/career/value.webp"
    },
]

export default function HoverExpand() {
    return (
        
    <section className="py-20 clip-path relative btmleft" id="the-inel-way">
        <div className="container mx-auto ">
            <h1 className="text-center pb-5 ">The INEL Way</h1>
            <h5 className="text-center pb-5 ">Powering Innovation, Enabling Excellence!</h5>
            <div className=" flex flex-col lg:flex-row gap-5 lg:gap-0 text-white mt-10 ">
                {programs.map((program, programIndex) => (
                    <div key={programIndex} className="group lg:hover:w-[200%] w-full h-[400px] relative transition-all flex items-end justify-center duration-500 bg-cover bg-center rounded-[20px]  lg:m-3 overflow-hidden    " 
                        style={{ backgroundImage: `url(${program.image})`}}>
                        <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-transparent to-black rounded-[20px]">  </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-black/60 lg:bg-black/0 lg:group-hover:bg-black/60 transition-all duration-500 rounded-[20px]">  </div>
                        <ul className=" w-full h-full  p-10 text-white
                            lg:hidden flex lg:group-hover:flex transition-all duration-300  relative
                            flex-col items-start justify-end gap-5 !list-outside">
                            
                                <h2 className="fade-up text-3xl font-medium  pb-2">{program.title}</h2>
                            <ul className="fade-up delay-1000 list-disc list-outside space-y-2 ml-6">
                                {program.bullets.map((bullet, index) => (
                                    <li key={index} className="text-base pb-3 lg:text-xl">{bullet}</li>
                                ))}
                            </ul>
                        </ul>
                        
                        <p className="text-3xl font-medium hidden lg:block group-hover:hidden w-full absolute bottom-10 left-10
                        transition-all duration-100" 
                        >
                            {program.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}