import ContactForm from "../components/contact-us/contact-form"
import BreadCrumb from "../components/Ui/bread-crumb"
import Map from "../components/contact-us/contact-map"

export default function ContactUs() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Contact Us"
                breadCrumbBg= "/images/contact-us/breadcrunb.png"
            />
            <div className="container mx-auto px-5 md:px-0 py-20">
                <ContactForm />
            </div>
            <div className="container mx-auto px-5 md:px-0 pb-20">
                {/* <Map /> */}
            </div>
        </>
    )
}
