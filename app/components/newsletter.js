import { GoArrowRight } from "react-icons/go";

export default function Newsletter() {
    return (
        <>
            <section className="bg-primary">
                <div className="container mx-auto text-center text-white py-20 px-5 md:px-0">
                        <h1>Subscribe to the Newsletter</h1>
                        <p>Sign up and stay up to date with the latest news and updates</p>
                        <form className="flex justify-between items-center bg-white  p-[2px] md:w-[800px] mx-auto mt-10">
                            <input type="email" placeholder="Enter your email" className="bg-white text-black border-0 w-full  focus-visible:outline-none border-white p-2" />
                            <button type="submit" className="bg-primary text-white py-4 px-6"><GoArrowRight className="text-3xl" /></button>
                        </form>
                </div>
            </section>
        </>
    )
}
