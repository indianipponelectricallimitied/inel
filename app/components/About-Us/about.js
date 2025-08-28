import Image from "next/image";
import Button from "../Ui/button";


export default function About(){
    return(
        <div className="container mx-auto py-20" id="about">
            <div className="flex flex-col-reverse lg:flex-row gap-10">
                <div className="w-full lg:w-1/2">
                    <Image src="/images/about/about.jpg" alt="about" width={800} height={500} 
                    className="rounded-3xl h-full w-full object-cover"
                    />
                </div>
                <div className="w-full lg:w-1/2 space-y-5">
                    <h5>About</h5>
                    <h1>Crafting Precision Solutions</h1>
                    <p>
India Nippon Electricals Limited (INEL), incorporated in 1984, is owned by Lucas Indian Service Limited, a wholly-owned subsidiary of Lucas-TVS Limited. The company specializes in manufacturing advanced electronic ignition systems for two-wheelers, three-wheelers, and portable engines.<br/><br/>    
INEL is a market leader in electronic ignition system products, trusted by leading OEMs across diverse vehicle segments. The company has also entered the growing electric vehicle (EV) space with solutions such as controllers, converters, sensors, and engine control units, while continuing to strengthen its offerings for internal combustion engines.<br/><br/>
With three state-of-the-art manufacturing facilities and a modern tech centre located in Tamil Nadu, Puducherry, and Haryana, INEL continues to deliver innovation, reliability, and performance.<br/><br/>
Over the years, INEL has developed a diverse and high-quality product portfolio that has enabled it to build a solid customer base in India and expand steadily into international markets, particularly across North America and Europe. The company remains committed to enhancing its global footprint, strengthening aftermarket solutions, and driving future-ready technologies for mobility.


</p>

                </div>
            </div>
        </div>
    )
}
