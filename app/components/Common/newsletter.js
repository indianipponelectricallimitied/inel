"use client"

import { GoArrowRight } from "react-icons/go";
import { useState } from "react";

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
            const response = await fetch("https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api/newsletter", {
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
                    <h1 className="pb-5">Subscribe to the Newsletter</h1>
                    <p>Sign up and stay up to date with the latest news and updates</p>
                    <form onSubmit={handleSubmit} className="flex justify-between items-center bg-white py-1 p-[3px] md:w-2/3 mx-auto mt-10 rounded-[20px]">
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
                    </form>
                    
                    <div className="my-6  relative ">
                    {status && (

                            <p className={`absolute bg-white w-full md:w-fit rounded-[10px] px-4 py-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${status.type === "success" ? "text-green-300" : "text-red-300"}`}>{status.message}</p>
                    )}
                    </div>
                </div>
            </section>
        </>
    );
}
