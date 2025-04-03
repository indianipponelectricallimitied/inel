
const programs = [
    {
        title: "Ideation",
        text: "The journey begins with a clear understanding of market needs and customer demands. INEL conducts thorough market research to identify gaps in current technologies and opportunities for innovation in areas like electric mobility, powertrains, and vehicle safety systems. ",
        image: "/tech-dummy.jpeg"
    },
    {
        title: "Conceptualization",
        text: "The journey begins with a clear understanding of market needs and customer demands. INEL conducts thorough market research to identify gaps in current technologies and opportunities for innovation in areas like electric mobility, powertrains, and vehicle safety systems. ",
        image: "/tech-dummy.jpeg"
    },
    {
        title: "Elaboration",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/tech-dummy.jpeg"
    },
    {
        title: "Incubation",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/tech-dummy.jpeg"
    },
    {
        title: "Acceleration",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/tech-dummy.jpeg"
    },
    {
        title: "Market Launch",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/tech-dummy.jpeg"
    },
]

export default function HoverExpand() {
    return (
        
    <section className="py-20 diamond-gradient  clip-path relative btmleft">
        <div className="container mx-auto px-5 md:px-0">
            <h1 className="text-center pb-5 text-white">Step by Step to Innovation at INEL</h1>
            <div className=" flex flex-col md:flex-row gap-5 md:gap-0 text-white mt-10 ">
                {programs.map((program, programIndex) => (
                    <div key={programIndex} className="group md:hover:w-[400%] w-full h-[400px] relative transition-all flex items-end justify-center duration-500 bg-cover bg-center rounded-[20px]  md:m-3 overflow-hidden    " 
                        style={{ backgroundImage: `url(${program.image})` }}>
                        <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-transparent to-black/90 rounded-[20px]">  </div>
                        <ul className=" w-full h-full  p-10 text-white
                            md:hidden flex md:group-hover:flex transition-all duration-300  relative
                            flex-col items-start justify-end gap-5">
                            
                            <p className="fade-up delay-1000">{program.text}</p>
                            <h2 className="fade-up ">{program.title}</h2>
                        </ul>
                        
                        <p className="text-2xl font-medium hidden md:block group-hover:hidden w-full absolute top-[250px]
                        transition-all duration-100
                        "
                        style={{ transform: 'rotate(-90deg)' }}
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
