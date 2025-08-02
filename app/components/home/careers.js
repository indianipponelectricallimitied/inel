import Button from "../Ui/button";
import Image from "next/image";
export default function Careers() {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto flex flex-col gap-10 lg:flex-row">
        <div className="w-full lg:w-[40%] space-y-5">
          <h5>Careers</h5>
          <h1>Ignite Your Career <br/> with Indian Nippon!</h1>
          <p>Join a certified team where innovation thrives, careers flourish, and your growth is our priority. Be part of a workplace that’s recognized for excellence and a culture of trust, collaboration, and opportunity.</p>
          <Button variant="blue" href="/career">Join Us</Button>
        </div>
        <div className="w-full lg:w-[50%] relative">
          <Image src="/images/home/career.png" alt="careers" className="w-full" width={550} height={500} />
         
          <Image src="/images/home/gptwlogo.webp" alt="careers" 
            className="absolute w-20 lg:w-36 top-0 right-0 lg:-top-20 lg:-right-10"
            width={140} height={500} />

        </div>
        
      </div>
    </section>
  );
}
