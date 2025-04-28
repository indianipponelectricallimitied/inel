import BreadCrumb from "../components/Ui/bread-crumb"
import Newsletter from "../components/Common/newsletter"
import StockDataCard from "../components/Common/stockmarket/StockDataCard"
export default function Investors() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Investors"
                breadCrumbBg= "/images/home/policies-breadcrunb.png"
            />

            <div className="container mx-auto py-20 flex flex-col md:flex-row justify-between gap-20">
                <div className="w-full lg:w-2/6 space-y-5">
                    <h1>INEL at Glance</h1>
                    <p>INEL is a leading global technology company providing cutting-edge solutions for electric mobility, automotive components, and industrial technology.</p>
                    <p>
                    INEL specializes in the manufacturing of advanced electric vehicle (EV) systems, focusing on power electronics, display & cluster systems, sensors, and engine & throttle control. The company’s product portfolio caters to OEMs (original equipment manufacturers) and other industry leaders, contributing to the advancement of sustainable, safe, and efficient transportation.
                    </p>
                </div>
                <div className="w-full lg:w-4/6 mx-auto text-white">
                    <StockDataCard />
                </div>
            </div>
            <Newsletter />
        </>
    )
}
