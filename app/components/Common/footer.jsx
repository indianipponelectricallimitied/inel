import { MdLocationOn } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer(){
    return(
        <footer>
            <div className="container mx-auto  py-20 border-primary border-b ">
               
            <a href='/' className="pb-10  block">  <img src="/logo.svg" alt="logo" /> </a>

            <div className="flex flex-col gap-5 text-dark">
                <div className="flex flex-wrap gap-10 md:gap-0">
                    <div className="flex flex-col gap-2 w-full md:w-1/5">
                        <p className="pb-3 font-bold">Company</p>
                        <a href="/about-us#about">Company Overview</a>
                        <a href="/about-us#legacy">Our Legacy</a>
                        <a href="/about-us#team">Leadership Team</a>
                        <a href="/about-us#achievements">Achievements & Awards</a>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/5">
                        <p className="pb-3 font-bold">Products & Solutions</p>
                        <a href="/Products&Solutions?type=category&value=2+Wheeler">2 Wheeler</a>
                        <a href="/Products&Solutions?type=category&value=3+Wheeler">3 Wheeler</a>
                        <a href="/Products&Solutions?type=type&value=Regulator">Regulator</a>
                        <a href="/Products&Solutions?type=type&value=Controller">Controller</a>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-1/5">
                        <p className="pb-3 font-bold">Investors</p>
                        <a href="#">Corporate Presentation</a>
                        <a href="#">Annual Report FY24</a>
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
                            <a href="/career#career">Life at INEL</a>
                            <a href="/career#openings">Open Positions</a>
                            <a href="/career#FAQ">FAQ</a>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/5">
                            <p className="pb-3 font-bold">Innovation and R&D</p>
                            <a href="/technology#research-development">Research & Development</a>
                            <a href="/technology#patents">Patents & Innovations</a>
                            <a href="/technology#innovation">Innovation </a>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/4">
                            <p className="pb-3 font-bold">Sustainability</p>
                            <a href="/sustainable">Environmental Initiatives</a>
                            <a href="/sustainable">Energy Efficiency Programs</a>
                            <a href="/sustainable">Corporate Social Responsibility (CSR)</a>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/5">
                            <p className="pb-3 font-bold">Follow us :</p>
                            <div className="flex gap-5">
                                <a href="https://www.facebook.com/indianippon" target="_blank"><FaFacebookF className="text-4xl" /></a>
                                <a href="https://twitter.com/IndiaNippon" target="_blank"><FaXTwitter className="text-4xl" /></a>
                                <a href="https://www.linkedin.com/company/india-nippon" target="_blank"><FaLinkedinIn className="text-4xl text-dark" /></a>
                                <a href="https://plus.google.com/118294691232195711937" target="_blank"><FaGooglePlusG className="text-4xl" /></a>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between py-5">
                <div className="flex justify-between md:gap-20">
                    <a href="/privacy-policy" className="text-sm md:text-base">Privacy Policy</a>
                    <a href="/terms-and-conditions" className="text-sm md:text-base">Terms & Condition</a>
                    <a href="/policies" className="text-sm md:text-base">Policies</a>
                    {/* <a href="#" className="text-sm md:text-base">Data Protection</a> */}
                </div>
                <p className="text-center md:text-left text-sm md:text-base pt-5 md:pt-0">© INEL. All Rights Reserved.</p>
            </div>
        </footer>
    )
}