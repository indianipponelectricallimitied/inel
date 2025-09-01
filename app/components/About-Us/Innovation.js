import Image from "next/image";

const innovation = [
    {
        image: "/images/about/Quality.png",
        title: "Integrity & Quality of Work",
        description: "Upholding the highest standards in everything we do.",
    },
    {
        image: "/images/about/Thrive.png",
        title: "Driven to be World Class",
        description: "Striving for excellence and global benchmarks.",
    },
    {
        image: "/images/about/Passion.png",
        title: "Anticipation & Being Proactive",
        description: "Staying ahead with foresight and timely action.",
    },
    {
        image: "/images/about/Innovation.png",
        title: "Innovation ",
        description: "Encouraging creativity and future-ready solutions.",
    },
    {
        image: "/images/about/global.png",
        title: "Being a Net Contributor ",
        description: "Adding value consistently to customers, stakeholders, and society.",
    },
   
    
]

export default function Innovation() {
    return (
        <div className="grid-with-gradients">
        <div className="gradient-sphere  w-[600px] h-[600px] -top-[200px] -left-[250px]"></div>
            <section className='py-20 bg-gril '>
                <div className='container mx-auto pb-10'>
                    <h5 className='text-center'>Values</h5>
                    <h1 className='text-center md:pb-20 pb-10'>Driving Innovation with Integrity</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-center'>
                    {innovation.map((item, index)=>(
                        <div className='bg-gradient-to-b from-[#B6C6FF] to-[#E4E4E4] p-5 rounded-[10px] space-y-4 card-square-right h-full' key={index}>
                            <Image src={item.image} alt={item.title} width={200} height={200} 
                            className="w-20 object-contain " 
                            />
                            <h2 className="font-medium text-xl">{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
