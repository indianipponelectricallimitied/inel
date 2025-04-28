import { GoArrowRight } from "react-icons/go";

export default function Newsletter({newsletterBg}) {
    return (
        <>
            <section className="clip-path btmleft btmright bg-[url('/images/home/soldring.png')] bg-cover bg-center relative clippath-2  ">
            <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50 inset-0"></div>
                <div className="container mx-auto text-center text-white py-20  relative">
                    <h1 className="pb-5">Subscribe to the Newsletter</h1>
                    <p>Sign up and stay up to date with the latest news and updates</p>
                    <form className="flex justify-between items-center bg-white py-1 p-[3px] md:w-2/3 mx-auto mt-10 rounded-[20px]">
                        <input type="email" placeholder="Enter your email" className="bg-white text-black border-0 w-full  focus-visible:outline-none border-white p-2" />
                        <button type="submit" className="bg-primary text-white py-6 px-8 rounded-[18px]"><GoArrowRight className="text-3xl" /></button>
                    </form>
                </div>
            </section>
        </>
    )
}
