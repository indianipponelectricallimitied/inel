import Image from "next/image";
import QuickLinks from "../Ui/QuickLinks";
import Button from "../Ui/button";


export default function CareerOpportunities({quickLinks}) {
    return (
       
            <div className="container mx-auto flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 space-y-5">
                    <QuickLinks quickLinks={quickLinks} />
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                    <Image src="/images/career/careerop.png" alt="Career Opportunities" className="rounded-[20px] h-[400px] object-cover" width={800} height={800} />
                    <p >A window into the corporate world, where you can gain invaluable experience and guidance to build a strong foundation for your professional journey! Read more</p>
                    <div className="flex flex-col md:flex-row lg:items-center gap-5">
                        {/* <Button variant="white"  href={`#apply-now`} className="border-[#BBD3DF]"  >Check Your Eligibility</Button> */}
                        <Button variant="blue"  href={`#apply-now`}>Fuel Your Ambitions</Button>
                    </div>
                </div>    
            </div>

            
    )
}   
