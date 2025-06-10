import BreadCrumb from "../components/Ui/bread-crumb"
import Pdfaccordian from "../components/Ui/pdf-accordian"
import ApiService from "../services/api"

export default async function Policies() {
    const policiesData = await ApiService.getPolicies();
    
    // Transform the API data to match Accordion component's expected format
    const transformedPolicies = policiesData.map(policy => ({
        id: policy.id,
        header: policy.pdf_title,
        content: policy.pdf_url
    }));

    return (
        <>
            <BreadCrumb 
                pageTitle= "Policies"
                breadCrumbBg= "/images/terms&privacy/breadcrumb.jpg"
            />

            <div className="container mx-auto py-20">
                <h5 className="text-center pb-5">Policies</h5>
                <h1 className="text-center pb-10 md:pb-20">Check out our policies to understand how we work</h1>
                <div className="w-full md:w-4/6 mx-auto">
                    <Pdfaccordian accordionData={transformedPolicies} />
                </div>
            </div>
        </>
    )
}
