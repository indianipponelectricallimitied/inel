import Image from "next/image";

export default function About(){
    return(
        <div className="container mx-auto py-20">
            <div className="flex flex-col-reverse md:flex-row gap-10">
                <div className="w-full md:w-1/2">
                    <Image src="/images/about/about-us.webp" alt="about" width={800} height={500} 
                    className="rounded-3xl h-full w-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-5">
                    <h5>About</h5>
                    <h1>Crafting Precision Solutions for a Smarter Future</h1>
                    <p>India Nippon Electricals Limited (INEL) was established in 1984 and transitioned into a joint venture in 1986 between Lucas Indian Service Limited, a fully owned subsidiary of Lucas-TVS Limited, and MAHLE Electric Drives Japan Corporation, a member of the globally renowned MAHLE Group, Germany. Specializing in the manufacturing of Electronic Ignition Systems for two-wheelers, three-wheelers, and portable engines, INEL has consistently driven technological innovation. Over the years, INEL has expanded its footprint, significantly broadening its customer base, and is now a key supplier to leading manufacturers in the two-wheeler, three-wheeler, and genset industries. For the fiscal year ending March 2015, the company reported net sales of Rs. 3274 Million (USD 50 Million).
                    With a focus on advancing product technology, INEL manufactures a wide array of ignition systems, including both digital and analog solutions. The company’s strategic expansion includes state-of-the-art facilities in Hosur (Tamil Nadu), Pondicherry, and Rewari (Haryana), positioning INEL to offer superior customer service, just-in-time supplies, and rapid product innovation.
                    </p>
                </div>
            </div>
        </div>
    )
}
