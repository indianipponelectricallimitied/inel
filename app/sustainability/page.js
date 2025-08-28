import BreadCrumb from "../components/Ui/bread-crumb"
import PlayVideo from "../components/Ui/playVideo"
import Image from "next/image"
import KnowledgeHub from "../components/Ui/Knowledge-Hub"
import Popup from "../components/Ui/popup";
import SustainableSlider from "../components/Ui/SustainableSlider";
import { GoArrowUpRight } from "react-icons/go";

const quickLinks = [
    {
      title: "Sustainability Programs",
      content: (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Sustainability Programs</h2>
          <p>INEL's commitment to sustainability is woven into our core operations, focusing on comprehensive environmental stewardship and impactful social initiatives</p>
          <ul className="space-y-4 list-disc list-inside">
          <b>Environmental Stewardship:</b> We are actively reducing our ecological footprint through various initiatives across our manufacturing processes.
            <li>Climate Action & Energy Efficiency: We are dedicated to lowering our carbon footprint by integrating eco-friendly technologies and optimizing energy consumption [Previous turn, 20]. This includes the installation of LED lighting systems across our factories, establishing Solar PV power plants at all our facilities, and procuring renewable wind power through strategic Power Purchase Agreements [Previous turn, 287]. In FY 2023-24, 14,183 GJ of our total energy consumption of 37,148 GJ came from renewable sources [Previous turn]. Our total Scope 1 and Scope 2 GHG emissions for FY 2023-24 were 1,828 and 1,894 metric tonnes of CO2 equivalent, respectively [Previous turn]. We have also introduced measures like a 150-TR air-cooled HVAC system with VFD controls for SMT clean room operations and reduced potting machine booster pump capacity to save energy.
            </li>
            <li> Water Conservation: Recognizing the critical role of water, all our plants adhere to zero liquid discharge norms [Previous turn, 283]. This is achieved through the installation of Sewage Treatment Plants (STPs) at all facilities and an Effluent Treatment Plant (ETP) at our Hosur factory, treating and reusing polluted water [Previous turn, 283, 304]. Our average water consumption in FY 2023-24 was 142 KL/day [Previous turn].</li>
            <li> Waste Management & Circularity: We are committed to responsible waste management, actively promoting waste recycling and working towards a circular economy model to reduce waste production and landfill volumes [Previous turn, 36]. We diligently monitor hazardous chemical consumption and have successfully reduced average hazardous waste generated across our Hosur, Puducherry, and Rewari plants from FY 2022-23 to FY 2023-24. In FY 2023-24, our total waste generated was 542.14 metric tonnes, with 515.05 metric tonnes recovered through recycling. We have also implemented strategies to reduce hazardous chemical usage, such as replacing mineral oil-based coolants with biodegradable synthetic ones and introducing automatic chemical blending machines.
            </li>
            <li> Biodiversity & Green Initiatives: We support reforestation programs and have developed a "Kurungadukal" (Mini Forest) at our Hosur factory premises in 2022, in collaboration with the Government of Tamil Nadu [Previous turn, 270]. We also encourage employees and stakeholders to participate in community-based environmental projects.</li>
            <li>Sustainable Products & Processes: Our engineering and manufacturing processes incorporate sustainable practices, such as the introduction of Lead-Free Soldering Wire in over 85% of our soldering area to improve employee health and prevent environmental pollution. We also use Electro Static Filters and Fume Killers in our soldering processes to reduce fumes by 95%. </li>
            <li>Sustainable Sourcing: We have procedures in place for sustainable sourcing, with 75% of our inputs sourced sustainably in FY 2023-24. </li>
          </ul>
          <ul className="space-y-4 list-disc list-inside">
            <b>Social Impact & People-Centric Growth:</b>  Our employees are the cornerstone of our success, and we prioritize their well-being and development, alongside fostering strong community ties..
            <li>Employee Well-being & Development: We provide comprehensive training programs to enhance both technical expertise and personal development, ensuring our workforce stays at the forefront of technological advancements [Previous turn, 40]. All permanent and other-than-permanent employees are covered by health and accident insurance, and all female employees receive maternity benefits and access to day-care facilities [Previous turn, 254]. We ensure all new joinees receive health and safety training and conduct regular emergency mock drills every six months [Previous turn, 258]. Annually, 100% of our permanent employees undergo performance and career development reviews [Previous turn, 259]. We are proud to be certified as a ‘Great Place to Work’ for the 4th time in a row.</li>
            <li>Community Engagement & CSR: Our Corporate Social Responsibility (CSR) initiatives focus on empowering local communities near our operations. In FY 2023-24, we made a significant CSR contribution of ₹95.96 Lakhs [Previous turn, 45, 225]. Our programs address hunger, poverty, rural development, education, vocational skills, gender equality, healthcare, and sanitation [Previous turn, 113]. Notable achievements include the construction of a Community Hall for vulnerable groups in Sarandapalli village, Hosur, supporting children's education and self-help groups, and the installation of sanitary napkin incinerators in schools [Previous turn, 42, 44, 270]. We also equipped a Government Primary Health Center with RO water purification systems and advanced laboratory equipment.</li>
            <li>Human Rights & Inclusivity: We are committed to respecting and promoting human rights [Previous turn]. Our Business Head and HR Head are responsible for addressing human rights impacts and issues [Previous turn, 272]. In FY 2023-24, human rights training was provided to 21.892% of employees and 87.044% of workers [Previous turn, 271]. Our POSH policy protects complainants in sexual harassment cases, with two complaints resolved in FY 2023-24. We are also actively working to make our facilities accessible to differently abled visitors, with one facility already compliant with the Rights of Persons with Disabilities Act, 2016, and plans to extend these facilities to other units [Previous turn, 257, 276]. Human rights requirements are part of our business agreements and contracts.</li>
            </ul>
        </div>
      )
    },
    {
      title: "Governance Structure",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Governance Structure</h2>
          <div className="space-y-4">
            <ul className="space-y-4 list-disc list-inside">
            INEL operates under a philosophy founded on robust governance practices, emphasizing transparency, accountability, and ethical conduct
            <li>Board Composition and Oversight: Our Board of Directors comprises a balanced blend of Executive and Non-Executive members, including Independent Directors, ensuring diverse leadership and comprehensive oversight [Previous turn, 45, 144]. The Board is responsible for upholding corporate values, promoting an ethical culture, endorsing sustainability, and fostering innovation. It oversees business strategies, ensures fiscal prudence, ethical corporate behavior, and fair treatment of all stakeholders, including regulators, employees, customers, vendors, investors, and society at large.</li>
            <li className="list-disc list-inside">Committee Structure: The Board is supported by key committees that play a crucial role in governance:
            </li>
                <li>Risk Management Committee: Formed in accordance with Regulation 21 of the SEBI Listing Regulations, this committee frames, implements, and monitors the company's risk management plan. Its policy/framework is designed to ensure high standards of governance, business conduct, risk management, achievement of sustainable business growth, planning for business continuity, and compliance with legal requirements. The committee met three times in FY 2023-24.
                </li>
                <li>Corporate Social Responsibility (CSR) Committee: Constituted under Section 135 of the Companies Act, 2013, the CSR Committee comprises three directors, including an Independent Director as Chairperson. It reviews and approves the annual action plan and the CSR Policy, ensuring impact on communities and beneficiaries. This committee met four times in FY 2023-24.</li>
                <li>Audit Committee: This committee oversees financial risks and controls. The internal audit firm functionally reports to the Chairman of the Audit Committee, ensuring objectivity and independence </li>
                 
           
           
            <li>Ethical Conduct and Compliance: INEL maintains a publicly available Code of Conduct and Business Ethics, with all Board members and senior management confirming compliance [Previous turn, 181]. An adequate internal audit system is in place, and the company has a robust compliance mechanism with software-based tools to identify and monitor regulatory requirements [Previous turn, 73, 216]. The company has a Vigil Mechanism/Whistle-Blower Policy that allows directors and employees to report instances of unethical behavior or fraud to the management or the Audit Committee Chairperson. No person has been denied access to the Chairperson of the Audit Committee.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
        title: "Road Map to Net Zero",
        content: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Road Map to Net Zero</h2>
                <p>INEL is committed to environmental sustainability and has undertaken various initiatives to reduce its environmental impact. Our focus includes tracking energy utilization and associated GHG emissions, and through investments in sustainable technologies, optimizing energy consumption, and carbon offsetting, we are committed to reducing our environmental impact. We have made significant strides in this area by implementing LED lighting systems, installing Solar PV power plants at all our facilities, and procuring renewable wind power.</p>
                <p>
                As of the provided information, the company is in the process of defining an overall ESG (Environmental, Social, and Governance) strategy with specific goals and targets on material issues. While INEL is actively working to reduce its carbon footprint and GHG emissions, the provided sources do not explicitly state a "Net Zero" target or a detailed, publicly articulated "Road Map to Net Zero" with specific timelines for achieving carbon neutrality. However, our efforts towards renewable energy adoption and emission reduction are steps in that direction.
                </p>
            </div>
        )
    },
    {
        title: "Sustainable Report",
        content: (
            <div className="space-y-4">
                <h2 className="text-xl font-bold">INEL demonstrates its commitment to transparency and accountability by publishing a dedicated sustainability report.</h2>
                <ul className="space-y-4 list-disc list-inside">
                    <li> Business Responsibility and Sustainability Report (BRSR): For the financial year 2023-24, INEL has prepared its Business Responsibility and Sustainability Report (BRSR). This report is based on the framework of the National Guidelines on Responsible Business Conduct and adheres to the format prescribed by SEBI.
                    </li>
                    <li>Reporting Scope: The disclosures made in this BRSR are on a standalone basis</li>
                    <li>Accessibility: The BRSR is an integral part of the Annual Report, which is publicly available. Shareholders can find investor-related information, including the Annual Report, on the company's website.</li>
                    <li>Contact for Queries: For any queries related to the BRSR report, Ms. S. Logitha, Company Secretary, can be contacted via telephone at 044-2846 0073 or email at logitha.s@inel.co.in</li>
                    <li>Assurance: As per the report, there was no assurance provider mentioned, and the type of assurance obtained was noted as "Not Applicable" for FY 2023-24. This indicates that the BRSR was not independently assured by an external agency for this period.</li>
                </ul>
            </div>
        )
    },

];

export default function Sustainability(){
    return(
        <>
            <BreadCrumb 
                pageTitle= "Sustainability"
                breadCrumbBg= "/images/Sustainability/breadcrumb.webp"
            />


            <section className="bg-white">
                <div className="container mx-auto  py-20 lg:pb-40 text-center space-y-5">
                    <h5>Sustainability</h5>
                    <h1 >Powering a Sustainable Future</h1>
                    <p className="md:w-2/3 mx-auto pb-5">At India Nippon Electricals, sustainability is at the heart of everything we do. We are committed to creating a greener future through eco-friendly practices, energy-efficient solutions, and responsible manufacturing. Our approach focuses on reducing our environmental footprint while driving innovation and ensuring long-term value for our communities, customers, and the planet. Together, we power progress with purpose.</p>
                    {/* <Image src="/images/Sustainability/SustainableGroup.png" alt="sustainable" width={1000} height={1000} className="w-full h-full object-cover" /> */}
                    {/* Replace static image with slider */}
                    <SustainableSlider />

                </div>
            </section>

            <section className="bg-[url('/images/Sustainability/bread.png')] bg-cover bg-center py-40 clip-path btmright relative">
                <div className="container mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2  gap-5 ">
                    <div className="md:col-span-1 md:row-span-2 card-btm-right bg-[#D3CBFF] rounded-[12px] p-5 ">
                        <Image src="/images/home/Renewable.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                        <h1>85%</h1>
                        <p className="border-b border-black pb-2 mb-2 font-medium">Renewable Energy Usage</p>
                        <p> The Hosur plant operates on 85.2% renewable energy, minimizing reliance on conventional power.</p>
                    </div>
                    
                    <div className="card-top-left md:col-span-1 md:row-span-1 bg-[#8ead7f] rounded-[12px] p-5">
                        <h1>~30%</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2 font-medium">Reduction in Hazardous Waste</p>
                        <p>Hazardous waste reduced at Hosur and Puducherry plants, driving eco-friendly operations.</p>
                    </div>

                    <div className="md:row-start-2 card-top-right md:col-start-2  bg-[#B6E3FF] rounded-[12px] p-5">
                        <h1>Zero</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2 font-medium"> Liquid Discharge Achieved</p>
                        <p> 100% water recycling with advanced treatment systems.</p>
                    </div>

                    <div className="md:col-span-1 card-btm-right md:col-start-3 md:row-start-1 md:row-span-2 bg-[#FFEAC3] rounded-[12px] p-5">
                        <Image src="/images/home/Frame.png" alt="sustainable" width={200} height={200} className="ms-auto" />
                        <h1>86%</h1>
                        <p className="border-b border-[#7B7B7B] pb-2 mb-2 font-medium"> Reduction in GHG Emissions</p>
                        <p>Achieved a significant decrease in emissions,reinforcing our commitment to carbon neutrality.</p>
                    </div>
               </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#ffffff] to-[#ECF9FF]">
                <div className="container mx-auto  py-20 text-center space-y-10">
                    
                    <h1 className="text-center text-3xl md:text-5xl !leading-[150%]">With a global footprint, India Nippon Electricals is committed to <span className="text-3xl md:text-5xl  text-[#6452BE] font-medium">sustainability through eco-friendly processes and energy-efficient innovations,</span> driving a greener future.</h1>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center py-10 pb-20">
                       <Image src="/images/Sustainability/ugc.png" alt="sustainable" className="md:w-[120px] w-[100px] object-contain" width={500} height={500} />
                       <Image src="/images/Sustainability/iso14.png" alt="sustainable" className="md:w-[120px] w-[100px] object-contain" width={500} height={500} />
                       <Image src="/images/Sustainability/fsc.png" alt="sustainable" className="md:w-[120px] w-[100px] object-contain" width={500} height={500} />
                       <Image src="/images/Sustainability/iso.png" alt="sustainable" className="md:w-[120px] w-[100px] object-contain" width={500} height={500} />
                       <Image src="/images/Sustainability/GreenCo.webp" alt="sustainable" className="md:w-[120px] w-[100px] object-contain" width={500} height={500} />

                    </div>



                    <div className="flex justify-start items-center lg:gap-20 flex-col lg:flex-row text-left gap-10">
                        <Image 
                            src="/images/Sustainability/sus1.png" 
                            alt="sustainable" 
                            className="w-full lg:w-2/5 h-[400px] rounded-[10px] object-cover" 
                            width={500} 
                            height={500} 
                        />
                        <div className="space-y-3">
                            <h5>Sustainable</h5>
                            <h1>Knowledge Hub</h1>
                            <p>We're always finding new ways to reach and exceed our sustainability goals. Explore our latest reports for more insights.</p>
                            
                            <ul className="space-y-5 md:w-1/2 pt-10">
                                {quickLinks.map((link, index) => (
                                    <Popup  key={index}
                                    trigger={
                                        <li key={index}  >
                                            <a href={link.href} className="font-thin flex justify-between border-b border-black pb-2">
                                                {link.title}
                                                <GoArrowUpRight className="text-[20px]" />
                                            </a>
                                        </li>
                                    }
                                    content={link.content}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}