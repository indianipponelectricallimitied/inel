import Image from "next/image";

const innovation = [
    {
        image: "/images/about/Innovation.png",
        title: "Innovation",
        description: "Forward thinking, planning and execution to expand our horizons.",
    },
    {
        image: "/images/about/Passion.png",
        title: "Passion",
        description: "Enthusiasm, desire, and commitment to succeed.",
    },
    {
        image: "/images/about/Quality.png",
        title: "Quality",
        description: "Service and products we are proud to stand behind.",
    },
    {
        image: "/images/about/Thrive.png",
        title: "Thrive",
        description: "Commitment to growth to affect our customer’s success.",
    }
]

export default function Innovation() {
    return (
        <section className='py-20 bg-gril px-5 md:px-0'>
            <div className='container mx-auto pb-10'>
                <h5 className='text-center'>Values</h5>
                <h1 className='text-center md:pb-20 pb-10'>Driving Innovation with Integrity</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                   {innovation.map((item, index)=>(
                    <div className='bg-[#E0E7FF] p-5 rounded-[10px] space-y-5' key={index}>
                        <Image src={item.image} alt={item.title} width={200} height={200} 
                        className="w-20 object-contain " 
                        />
                        <h2 className="font-medium">{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                   ))}
                </div>
            </div>
        </section>
    )
}
