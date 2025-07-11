"use client"
import { useState, useEffect, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    
    const [responseMessage, setResponseMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // success, error
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
    const recaptchaRef = useRef(null);
    
    const RECAPTCHA_SITE_KEY = "6LfZbRArAAAAADTez66q309r32vnDil7axvD2I4P"; 

    const handleRecaptchaLoad = () => {
        console.log("reCAPTCHA loaded via Next.js Script");
        setRecaptchaLoaded(true);
    };

    // Fallback initialization in case Script component doesn't work
    useEffect(() => {
        // Only initialize if not already loaded by the Script component
        if (!recaptchaLoaded && typeof window !== 'undefined' && !window.grecaptcha) {
            const loadRecaptcha = async () => {
                try {
                    window.onRecaptchaLoaded = () => {
                        console.log("reCAPTCHA loaded successfully via fallback");
                        setRecaptchaLoaded(true);
                    };
                    
                    const script = document.createElement('script');
                    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoaded`;
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                    
                    return () => {
                        if (document.head.contains(script)) {
                            document.head.removeChild(script);
                        }
                    };
                } catch (error) {
                    console.error("Error loading reCAPTCHA:", error);
                }
            };
            
            loadRecaptcha();
        } else if (window.grecaptcha && !recaptchaLoaded) {
            console.log("reCAPTCHA already available");
            setRecaptchaLoaded(true);
        }
    }, [recaptchaLoaded]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const executeRecaptcha = () => {
        console.log("Executing reCAPTCHA...");
        return new Promise((resolve, reject) => {
            try {
                if (!window.grecaptcha) {
                    console.error("reCAPTCHA not loaded yet");
                    reject(new Error('reCAPTCHA not loaded'));
                    return;
                }

                window.grecaptcha.ready(() => {
                    console.log("reCAPTCHA ready, executing...");
                    window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' })
                        .then(token => {
                            console.log("reCAPTCHA token obtained");
                            resolve(token);
                        })
                        .catch(error => {
                            console.error("reCAPTCHA execution error:", error);
                            reject(error);
                        });
                });
            } catch (error) {
                console.error("Error in executeRecaptcha:", error);
                reject(error);
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submission started");
        
        if (isSubmitting) {
            console.log("Already submitting, preventing duplicate submission");
            return;
        }
        
        setIsSubmitting(true);
        setResponseMessage("");
        setMessageType("");

        try {
            console.log("Preparing form data:", formData);
            
            // Get reCAPTCHA token
            let recaptchaToken;
            try {
                recaptchaToken = await executeRecaptcha();
                console.log("reCAPTCHA token received:", recaptchaToken.substring(0, 10) + "...");
            } catch (recaptchaError) {
                console.error("Failed to get reCAPTCHA token:", recaptchaError);
                setResponseMessage("Error: Could not verify reCAPTCHA. Please try again or refresh the page.");
                setMessageType("error");
                setIsSubmitting(false);
                return;
            }
            
            // Include recaptcha token in the form data
            const dataWithToken = {
                ...formData,
                recaptchaToken
            };

            console.log("Sending data to API...");
            
            // Try the original contact endpoint first, then fallback to aftermarket endpoint
            let apiUrl = "https://inelbackend.vercel.app/api/contact";
            
            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json" 
                    },
                    body: JSON.stringify(dataWithToken),
                    credentials: 'omit',
                    mode: 'cors',
                });

                console.log("API response status:", response.status);
                
                let data;
                try {
                    data = await response.json();
                    console.log("API response data:", data);
                } catch (jsonError) {
                    console.error("Error parsing response JSON:", jsonError);
                    data = null;
                }

                if (response.ok) {
                    setResponseMessage("Thank you for your message! We'll get back to you soon.");
                    setMessageType("success");
                    // Reset form data on success
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: ""
                    });
                } else {
                    console.error("API error response:", data);
                    setResponseMessage(`Error: ${data?.message || "Something went wrong. Please try again later."}`);
                    setMessageType("error");
                }
            } catch (fetchError) {
                console.error("Fetch error:", fetchError);
                throw new Error("Network error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setResponseMessage("Error: Network issue or server unavailable. Please try again later.");
            setMessageType("error");
        } finally {
            setIsSubmitting(false);
            console.log("Form submission completed");
        }
    };

    return (
        <>
        <div className="grid md:grid-cols-2 grid-cols-1 bg-[#F2F2F2] rounded-[20px]">   
        <div className="py-20 px-8 diamond-gradient  rounded-[20px]">
            <h1 className="text-start pb-5 text-white">Get in Touch</h1>
            <p className="text-start pb-10 px-1 text-white">We’re here to help! Whether you have questions, feedback, or need assistance, drop us a message and we’ll get back to you promptly.</p>

            <div class="space-y-4 text-white">
          <p class="flex items-start gap-4 text-sm">
            <span class="text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg></span>
            India Nippon Electricals Ltd, Hosur-Thally Road,
Uliveernapalli, Hosur-635114, India
          </p>
          <a href="tel:+914428460063" className="flex items-center gap-4 text-sm">
          <p class="flex items-center gap-4 text-sm">
          <span class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg></span>
           
            +91-44-28460063
          </p>
          </a>
          <a href="mailto:inelcorp@inel.co.in" className="flex items-center gap-4 text-sm">
          <p class="flex items-center gap-4 text-sm">
            <span class="text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path></svg></span>
            inelcorp@inel.co.in
          </p>
          </a>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/5 text-white pt-6">
                            <p className="pb-3 font-bold">Follow us :</p>
                            <div className="flex gap-5">
                                <a href="#"><FaLinkedinIn className="text-2xl text-dark" /></a>
                                <a href="#"><FaInstagramSquare className="text-2xl" /></a>
                                <a href="#"><FaFacebookF className="text-2xl" /></a>
                                <a href="#"><FaXTwitter className="text-2xl" /></a>
                            </div>
                        </div>

        </div>
        <div className="py-20 px-5 ">
            <div className="container mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:w-4/6 mx-auto text-start">
                    <input 
                        type="text" 
                        id="name" 
                        className="form-input contact-form" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required
                        disabled={isSubmitting}
                    />
                    <input 
                        type="email" 
                        id="email" 
                        className="form-input contact-form" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required
                        disabled={isSubmitting}
                    />
                    <input 
                        type="tel" 
                        id="phone" 
                        className="form-input contact-form" 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required
                        disabled={isSubmitting}
                    />
                    <textarea 
                        id="message" 
                        className="form-input contact-form" 
                        rows={5} 
                        placeholder="Message" 
                        value={formData.message} 
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                    ></textarea>
                    
                    <button type="submit"  className="bg-blue w-fit mx-auto text-white px-4 py-2 rounded-md">
                        {isSubmitting ? "Submitting..." : "Enquire Now"}
                    </button>
                    
                </div>
            </form>

            {responseMessage && (
                <div className={`mt-5 text-center text-white p-3 rounded ${messageType === "success" ? "bg-green-500/30" : "bg-red-500/30"}`}>
                    {responseMessage}
                </div>
            )}
            </div>
        </div>
        </div>
        </>
    );
}
