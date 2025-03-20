import Image from "next/image";

export default function TechnologyInnovation() {
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
          <h5>Technology & Innovation</h5>
            <h1>Powering Innovation,  Shaping the Future</h1>
            <Image src="/dummy.jpg" alt="technology-innovation"
            className="w-full  object-cover rounded-[20px]"
            width={500} height={500} />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex gap-5">
              <Image src="/dummy.jpg" alt="technology-innovation"
                className="h-[200px]  object-cover rounded-[20px]"
                width={300} height={500} />
              <Image src="/dummy.jpg" alt="technology-innovation"
                className="h-[200px] w-full object-cover rounded-[20px]"
                width={300} height={500}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
