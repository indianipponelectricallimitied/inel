import Image from "next/image";


const awards = [
    {
        image: "/awards.png",
        alt: "award",
        title: "Awards & Recognition",
    },
    {
        image: "/awards.png",
        alt: "award",
        title: "Awards & Recognition",
    },
    {
        image: "/awards.png",
        alt: "award",
        title: "Awards & Recognition",
    }
]
export default function Awards(){
    return(
        <section className="bg-[#F8F8F8]">
            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-3  gap-20 py-20">
                {awards.map((award, index) => (
                    <div key={index} className="w-full h-full flex gap-3 items-center justify-center">
                        <Image src={award.image} alt={award.alt} width={500} height={500} className="w-40" />
                        <h3 className="text-2xl ">{award.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
