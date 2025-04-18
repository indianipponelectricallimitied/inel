import Image from "next/image";
import Button from "../Ui/button";

export default function TechnologyInnovation() {
  return (
    <section className="bg-[#F1F1F1EE]">
      <div className="container mx-auto  py-20">
        <div className="flex flex-col md:flex-row md:gap-[7rem] gap-10">
          <div className="w-full md:w-1/2">
          <h5>Technology & Innovation</h5>
            <h1 className="pb-10">Powering Innovation,  Shaping the Future</h1>
            <Image src="/images/home/Technology-2.webp" alt="technology-innovation"
            className="w-full h-[400px] object-cover rounded-[20px]"
            width={1500} height={1400} />
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
                  src="/images/home/Transformative.webp" 
                  alt="technology-innovation"
                  className="h-[200px] w-full object-cover rounded-[20px]"
                  width={1000} 
                  height={1000}
                />
              </div>
            </div>
           <div><p className="pb-5">At INEL, we are at the forefront of automotive technology, developing transformative solutions that redefine the future of mobility. Our state-of-the-art R&D center pioneers advancements in power electronics, intelligent sensors, and electric vehicle solutions, creating smarter, more efficient systems for the next generation of transportation.</p>
            <p>From high-efficiency motor controllers to ADAS-integrated safety systems, every innovation we create is designed to enhance vehicle performance, optimize safety, and promote sustainability.</p>
            </div> 
            <Button variant="blue" href="/contact">Explore Our Innovations</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
