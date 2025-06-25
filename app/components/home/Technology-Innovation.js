import Image from "next/image";
import Button from "../Ui/button";


const innovations = [
  {
    title: "39",
    description: "Indian Patents",
  },
  {
    title: "21",
    description: "Design Patents",
  },
  {
    title: "4",
    description: "Trademarks",
  },
]
export default function TechnologyInnovation() {
  return (
    <section className="bg-[#F1F1F1EE]">
      <div className="container mx-auto  py-20">
        <div className="flex flex-col md:flex-row lg:gap-[7rem] gap-10">
          <div className="w-full md:w-1/2">
          <h5>Technology & Innovation</h5>
            <h1 className="pb-10">Powering Innovation, 
            Shaping the Future</h1>
            <Image src="/images/home/Technology-2.png" alt="technology-innovation"
            className="w-full h-[400px] lg:h-[510px] object-cover rounded-[20px]"
            width={2500} height={2400} />
          </div>
          <div className="w-full md:w-1/2 space-y-10 md:pt-10">
            <div className="flex gap-5 flex-1 w-full">
              <div className="w-1/2">
                <Image 
                  src="/images/home/Innovation.png" 
                  alt="technology-innovation"
                  className="h-[200px] w-full object-cover rounded-[20px]"
                  width={1000} 
                  height={1000} 
                />
              </div>
              <div className="w-1/2">
                <Image 
                  src="/images/home/Transformative-inel.png" 
                  alt="technology-innovation"
                  className="h-[200px] w-full object-cover rounded-[20px]"
                  width={300} 
                  height={300}
                />
              </div>
            </div>
           <div><p className="pb-5">At INEL, innovation drives everything we do. Our state-of-the-art R&D center develops next-gen power electronics, intelligent sensors, and EV solutions for a smarter, more efficient future. From high-efficiency motor controllers to ADAS-integrated safety systems, we create cutting-edge technologies that enhance performance, safety, and sustainability.</p>
            <p>With a relentless focus on energy efficiency and smart mobility, we engineer solutions that power the vehicles of tomorrow.</p>
            </div> 
            <div className="flex gap-10">
              {innovations.map((innovation) => (
                <div key={innovation.title} className="flex flex-col justify-center">
                  <h1>{innovation.title}</h1>
                  <p >{innovation.description}</p>
                </div>
              ))}
            </div>
            <Button variant="blue" href="/technology">Explore Our Innovations</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
