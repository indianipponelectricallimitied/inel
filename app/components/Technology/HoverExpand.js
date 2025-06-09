
const programs = [
    {
        title: "Ideation",
        text: "INEL drives innovation by addressing market shifts toward sustainable mobility and EV adoption, while also focusing on improving ICE vehicle efficiency and meeting the growing demand for advanced sensors and controllers for connected and autonomous vehicles. ",
        image: "/images/Technology/Innovation-(3).jpg"
    },
    {
        title: "Conceptualization",
        text: "INEL establishes strategic partnerships, including with Athena for EFI technology, and enters the EV market with solutions like DC-DC Converters and ISG systems. A new R&D center in 2019 spearheads the development of innovative EV motor controllers and sensorless commutation.",
        image: "/images/Technology/Innovation-(4).jpg"
    },
    {
        title: "Elaboration",
        text: "INEL’s R&D center leads the detailed design and testing of products like ISG systems, EFI ECUs, and EV motor controllers. Extensive field trials and compliance testing, such as for RPAS, support product readiness.",
         image: "/images/Technology/Innovation-(5).jpg"
    },
    {
        title: "Incubation",
        text: "Innovations are refined through rigorous testing and customer engagement. INEL showcases prototypes like the EV motor and motor controller to customers, receiving positive feedback for scalability, while securing intellectual property for future products",
         image: "/images/Technology/Innovation-(6).jpg"
    },
    {
        title: "Acceleration",
        text: "INEL scales up production with expanded manufacturing facilities and clean room capabilities. Investments in automation and efficient production processes support increased demand and mass production of critical EV components.",
         image: "/images/Technology/Innovation-(1).jpg"
    },
    {
        title: "Market Launch",
        text: "INEL successfully introduces new products, including sensors, EV components, and advanced displays. Key contracts, patents, and expanded product offerings strengthen INEL’s market position, with significant expansion into the E2W sector.",
         image: "/images/Technology/Innovation-(2).jpg"
    },
]

export default function HoverExpand() {
    return (
        
    <section className="py-20 diamond-gradient  clip-path relative btmleft" id="innovation">
        <div className="container mx-auto ">
            <h1 className="text-center pb-5 text-white">Step by Step to Innovation at INEL</h1>
            <div className=" flex flex-col lg:flex-row gap-5 lg:gap-0 text-white mt-10 ">
                {programs.map((program, programIndex) => (
                    <div key={programIndex} className="group lg:hover:w-[400%] w-full h-[400px] relative transition-all flex items-end justify-center duration-500 bg-cover bg-center rounded-[20px]  lg:m-3 overflow-hidden    " 
                        style={{ backgroundImage: `url(${program.image})`}}>
                        <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-transparent to-black/90 rounded-[20px]">  </div>
                        <ul className=" w-full h-full  p-10 text-white
                            lg:hidden flex lg:group-hover:flex transition-all duration-300  relative
                            flex-col items-start justify-end gap-5">
                            
                            <p className="fade-up delay-1000">{program.text}</p>
                            <h2 className="fade-up ">{program.title}</h2>
                        </ul>
                        
                        <p className="text-2xl font-medium hidden lg:block group-hover:hidden w-full absolute top-[250px]
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
