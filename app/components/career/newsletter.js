"use client"

import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";

export default function Newsletter({newsletterBg}) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email) return;
        
        setLoading(true);
        setStatus(null);
        
        try {
            const response = await fetch("https://inelbackend.vercel.app/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            
            if (response.ok) {
                setStatus({ type: "success", message: "Thank you for subscribing!" });
                setEmail("");
            } else {
                const errorData = await response.json();
                setStatus({ 
                    type: "error", 
                    message: errorData.message || "Failed to subscribe. Please try again." 
                });
            }
        } catch (error) {
            setStatus({ 
                type: "error", 
                message: "An error occurred. Please try again later." 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="clip-path btmleft btmright bg-[url('/images/home/soldring.png')] bg-cover bg-center relative clippath-2">
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50 inset-0"></div>
                <div className="container mx-auto text-center text-white py-20 relative">
                    <h1 className="pb-5">Engineering tomorrow, together with Your Talent</h1>
                    <p className="md:w-2/3 w-full mx-auto">At the heart of innovation lies passionate talent. We’re looking for engineers, thinkers, and creators who are ready to transform the future of mobility and technology.</p>
                    {/* <form onSubmit={handleSubmit} className="flex justify-between items-center bg-white py-1 p-[3px] md:w-2/3 mx-auto mt-10 rounded-[20px]">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white text-black border-0 w-full focus-visible:outline-none border-white p-2" 
                            disabled={loading}
                        />
                        <button 
                            type="submit" 
                            className="bg-primary text-white py-6 px-8 rounded-[18px]"
                            disabled={loading}
                        >
                            {loading ? "..." : <GoArrowRight className="text-3xl" />}
                        </button>
                    </form> */}
                    
                    <Link href="/contact-us" className="w-fit block mt-5 mx-auto text-primary font-medium bg-white py-4 px-6 rounded-[14px]">
                        Get in Touch
                    </Link>
                    
                    {/* <div className="my-6  relative ">
                    {status && (

                            <p className={`absolute bg-white w-full md:w-fit rounded-[10px] px-4 py-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${status.type === "success" ? "text-green-300" : "text-red-300"}`}>{status.message}</p>
                    )}
                    </div> */}
                </div>
            </section>
        </>
    );
}
