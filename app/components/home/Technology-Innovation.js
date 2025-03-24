import Image from "next/image";
import Button from "../button";

export default function TechnologyInnovation() {
  return (
    <section className="bg-[#F1F1F1EE]">
      <div className="container mx-auto px-5 md:px-0 py-20">
        <div className="flex flex-col md:flex-row md:gap-[7rem] gap-10">
          <div className="w-full md:w-1/2">
          <h5>Technology & Innovation</h5>
            <h1 className="pb-10">Powering Innovation,  Shaping the Future</h1>
            <Image src="/dummy.jpg" alt="technology-innovation"
            className="w-full h-[400px] object-cover rounded-[20px]"
            width={500} height={400} />
          </div>
          <div className="w-full md:w-1/2 space-y-10 md:pt-10">
            <div className="flex gap-5 flex-1 w-full">
              <div className="w-1/2">
                <Image 
                  src="/dummy.jpg" 
                  alt="technology-innovation"
                  className="h-[200px] w-full object-cover rounded-[20px]"
                  width={500} 
                  height={500} 
                />
              </div>
              <div className="w-1/2">
                <Image 
                  src="/dummy.jpg" 
                  alt="technology-innovation"
                  className="h-[200px] w-full object-cover rounded-[20px]"
                  width={500} 
                  height={500}
                />
              </div>
            </div>
           <div><p className="pb-5">At INEL, innovation drives everything we do. Our state-of-the-art R&D center develops next-gen power electronics, intelligent sensors, and EV solutions for a smarter, more efficient future. From high-efficiency motor controllers to ADAS-integrated safety systems, we create cutting-edge technologies that enhance performance, safety, and sustainability.</p>
            <p>With a relentless focus on energy efficiency and smart mobility, we engineer solutions that power the vehicles of tomorrow.</p>
            </div> 
            <Button variant="blue" href="/contact">Explore Our Innovations</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
