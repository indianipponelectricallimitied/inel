import BreadCrumb from "../components/Ui/bread-crumb"
import Accordion from "../components/Ui/accordion"

// Define Accordion data
const accordions = [
    {
      id: 1,
      header: "What is Lorem Ipsum?",
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
      id: 2,
      header: "Where does it come from?",
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`
    },
    {
      id: 3,
      header: "Why do we use it?",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
      id: 4,
      header: "Where can I get some?",
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    }
  ];
export default function Policies() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Policies"
                breadCrumbBg= "/images/home/policies-breadcrunb.png"
            />


            <div className="container mx-auto px-5 md:px-0 py-20">
            <h5 className="text-center pb-5">Policies</h5>
            <h1 className="text-center pb-10 md:pb-20">Check out our policies to understand how we work</h1>
                <div className="w-full md:w-5/6 mx-auto">
                    <Accordion accordionData={accordions}  />
                </div>
            </div>
        </>
    )
}
