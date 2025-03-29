import BreadCrumb from "../components/Ui/bread-crumb";

export default function Products(){
    return(
        <>
            <BreadCrumb 
                pageTitle= "Products & Solutions"
                breadCrumbBg= "/images/ProductsSolutions/breadcrumb.png"
            />
            <div className="grid-background">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold">Products & Solutions</h1>
                    <button className="corner-btn">link</button>
                </div>
            </div>
        </>
    )
}