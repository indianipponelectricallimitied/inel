import BreadCrumb from "../components/Ui/bread-crumb"
import Accordion from "../components/Ui/accordion"

// Define Accordion data
const accordions = [
  {
    id: 1,
    header: "Whistle Blower Policy and Vigil Mechanism",
    content: "can't find PDF"
  },
  {
    id: 2,
    header: "CSR Policy",
    content: "can't find PDF"
  },
  {
    id: 3,
    header: "CSR Projects",
    content: "can't find PDF"
  },
  {
    id: 4,
    header: "Code of Fair Disclosure",
    content: "can't find PDF"
  },
  {
    id: 5,
    header: "Code of Conduct and Business Ethics",
    content: "can't find PDF"
  },
  {
    id: 6,
    header: "Risk Management",
    content: "can't find PDF"
  },
  {
    id: 7,
    header: "Familiarization Programme",
    content: "can't find PDF"
  },
  {
    id: 8,
    header: "RPT Policy",
    content: "can't find PDF"
  },
  {
    id: 9,
    header: "Terms of Appointment of Independent Directors",
    content: "can't find PDF"
  },
  {
    id: 10,
    header: "Policy for Determination of Materiality",
    content: "can't find PDF"
  },
  {
    id: 11,
    header: "Material Subsidiary Policy",
    content: "can't find PDF"
  },
  {
    id: 12,
    header: "Archival Policy",
    content: "can't find PDF"
  },
  {
    id: 13,
    header: "N & R Policy",
    content: "can't find PDF"
  },
  {
    id: 14,
    header: "Code of Conduct to Regulate, Monitor and Report Insider Trading",
    content: "can't find PDF"
  },
  {
    id: 15,
    header: "Dividend Distribution Policy",
    content: "can't find PDF"
  }
];

export default function Policies() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Policies"
                breadCrumbBg= "/images/home/policies-breadcrunb.png"
            />


            <div className="container mx-auto  py-20">
            <h5 className="text-center pb-5">Policies</h5>
            <h1 className="text-center pb-10 md:pb-20">Check out our policies to understand how we work</h1>
                <div className="w-full md:w-5/6 mx-auto">
                    <Accordion accordionData={accordions}  />
                </div>
            </div>
        </>
    )
}
