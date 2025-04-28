import BreadCrumb from "../components/Ui/bread-crumb"
import Accordion from "../components/Ui/accordion"

// Define Accordion data
const accordions = [
  {
    id: 1,
    header: "Whistle Blower Policy and Vigil Mechanism",
    content: "/pdfs/whistle-blower-policy.pdf"
  },
  {
    id: 2,
    header: "CSR Policy",
    content: "/pdfs/csr-policy.pdf"
  },
  {
    id: 3,
    header: "CSR Projects",
    content: "/pdfs/csr-projects.pdf"
  },
  {
    id: 4,
    header: "Code of Fair Disclosure",
    content: "/pdfs/code-of-fair-disclosure.pdf"
  },
  {
    id: 5,
    header: "Code of Conduct and Business Ethics",
    content: "/pdfs/code-of-conduct.pdf"
  },
  {
    id: 6,
    header: "Risk Management",
    content: "/pdfs/risk-management.pdf"
  },
  {
    id: 7,
    header: "Familiarization Programme",
    content: "/pdfs/familiarization-programme.pdf"
  },
  {
    id: 8,
    header: "RPT Policy",
    content: "/pdfs/rpt-policy.pdf"
  },
  {
    id: 9,
    header: "Terms of Appointment of Independent Directors",
    content: "/pdfs/independent-directors.pdf"
  },
  {
    id: 10,
    header: "Policy for Determination of Materiality",
    content: "/pdfs/materiality-policy.pdf"
  },
  {
    id: 11,
    header: "Material Subsidiary Policy",
    content: "/pdfs/material-subsidiary-policy.pdf"
  },
  {
    id: 12,
    header: "Archival Policy",
    content: "/pdfs/archival-policy.pdf"
  },
  {
    id: 13,
    header: "N & R Policy",
    content: "/pdfs/nr-policy.pdf"
  },
  {
    id: 14,
    header: "Code of Conduct to Regulate, Monitor and Report Insider Trading",
    content: "/pdfs/insider-trading-policy.pdf"
  },
  {
    id: 15,
    header: "Dividend Distribution Policy",
    content: "/pdfs/dividend-policy.pdf"
  }
];

export default function Policies() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Policies"
                breadCrumbBg= "/images/home/policies-breadcrunb.png"
            />

            <div className="container mx-auto py-20">
                <h5 className="text-center pb-5">Policies</h5>
                <h1 className="text-center pb-10 md:pb-20">Check out our policies to understand how we work</h1>
                <div className="w-full md:w-5/6 mx-auto">
                    <Accordion accordionData={accordions} />
                </div>
            </div>
        </>
    )
}
