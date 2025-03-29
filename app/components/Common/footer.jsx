import { MdLocationOn } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer(){
    return(
        <footer>
            <div className="container mx-auto border-t-1 py-20 border-primary border-b-1 px-5 md:px-0">
               
            <a href='#' className="pb-10  block">  <img src="/logo.svg" alt="logo" /> </a>

            <div className="flex flex-col gap-5 text-dark">
                <div className="flex flex-wrap gap-10 md:gap-0">
                    <div className="flex flex-col gap-2 w-full md:w-1/5">
                        <p className="pb-3 font-bold">Company</p>
                        <a href="#">Company Overview</a>
                        <a href="#">Our Legacy</a>
                        <a href="#">Leadership Team</a>
                        <a href="#">Manufacturing Facilities</a>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/5">
                        <p className="pb-3 font-bold">Products & Solutions</p>
                        <a href="#">Power Electronics</a>
                        <a href="#">Display & Cluster Systems</a>
                        <a href="#">Sensor Technologies</a>
                        <a href="#">Engine & Throttle Control</a>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/5">
                        <p className="pb-3 font-bold">Investors</p>
                        <a href="#">Corporate Presentation</a>
                        <a href="#">Annual ReportFY24</a>
                        <a href="#">Sensor Technologies</a>
                        <a href="#">Investor Presentation</a>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-2/6">
                        <p className="pb-3 font-bold">Contact</p>
                        <a href="https://maps.app.goo.gl/Tm43tVGYtd9RcmEL7" target="_blank" className="flex gap-2"><MdLocationOn className="text-3xl mt-1" /> India Nippon Electricals Ltd, Hosur-Thally Road, Uliveernapalli, Hosur-635114, India</a>
                        <a href="mailto:inelcorp@inel.co.in" className="flex gap-2"><TbMailFilled className="text-lg mt-1 " /> <span>inelcorp@inel.co.in</span></a>
                    </div>
                </div>

                    <div className="flex flex-col gap-10 md:gap-0 md:flex-row   pt-10 flex-wrap">
                        <div className="flex flex-col gap-2 w-full md:w-1/5">
                            <p className="pb-3 font-bold">Careers</p>
                            <a href="#">Life at INEL</a>
                            <a href="#">Open Positions</a>
                            <a href="#">Internship Programs</a>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/5">
                            <p className="pb-3 font-bold">Innovation & R&D</p>
                            <a href="#">Research & Development</a>
                            <a href="#">Patents & Innovations</a>
                            <a href="#">Technology Collaborations</a>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/4">
                            <p className="pb-3 font-bold">Sustainability</p>
                            <a href="#">Environmental Initiatives</a>
                            <a href="#">Energy Efficiency Programs</a>
                            <a href="#">Corporate Social Responsibility (CSR)</a>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/5">
                            <p className="pb-3 font-bold">Follow us :</p>
                            <div className="flex gap-5">
                                <a href="#"><FaLinkedinIn className="text-4xl text-dark" /></a>
                                <a href="#"><FaInstagramSquare className="text-4xl" /></a>
                                <a href="#"><FaFacebookF className="text-4xl" /></a>
                                <a href="#"><FaXTwitter className="text-4xl" /></a>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between py-5 px-5 md:px-0">
                <div className="flex justify-between md:gap-20">
                    <a href="#" className="text-sm md:text-base">Privacy Policy</a>
                    <a href="#" className="text-sm md:text-base">Terms & Condition</a>
                    <a href="#" className="text-sm md:text-base">Data Protection</a>
                </div>
                <p className="text-center md:text-left text-sm md:text-base pt-5 md:pt-0">© INEL. All Rights Reserved.</p>
            </div>
        </footer>
    )
}