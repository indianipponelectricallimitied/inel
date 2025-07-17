"use client"
import { useState, useEffect, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Button from '../Ui/button';


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
            <div className="space-y-4 text-white">
          <p className="flex items-start gap-4 text-sm">
            <span className="text-2xl"><MdLocationOn /></span>
            India Nippon Electricals Ltd, Hosur-Thally Road,
Uliveernapalli, Hosur-635114, India
          </p>
          <a href="tel:+914428460063" className="flex items-center gap-4 text-sm">
          <p className="flex items-center gap-4 text-sm">
          <span className="text-xl"><MdPhone /></span>
           
            +91-44-28460063
          </p>
          </a>
          <a href="mailto:inelcorp@inel.co.in" className="flex items-center gap-4 text-sm">
          <p className="flex items-center gap-4 text-sm">
            <span className="text-2xl"><MdEmail /></span>
            inelcorp@inel.co.in
          </p>
          </a>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/5 text-white pt-6">
                            <p className="pb-3 font-bold">Follow us :</p>
                            <div className="flex gap-5">
                                

                                <a href="https://www.facebook.com/indianippon" target="_blank"><FaFacebookF className="text-2xl p-[2.5px]" /></a>
                                <a href="https://twitter.com/IndiaNippon" target="_blank"><FaXTwitter className="text-2xl p-[2px]" /></a>
                                <a href="https://www.linkedin.com/company/india-nippon" target="_blank"><FaLinkedinIn className="text-2xl p-[1px] text-dark" /></a>
                                <a href="https://plus.google.com/118294691232195711937" target="_blank"><FaGooglePlusG className="text-2xl" /></a>
                           
                            </div>
                        </div>

        </div>
        <div className="py-20 px-5 ">
            <div className="container mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 md:w-4/6 mx-auto text-start">
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
                    
                    <Button type="submit"  variant="blue" hasArrow={false} className="w-fit   px-4 py-2 rounded-md">
                        {isSubmitting ? "Submitting..." : "Enquire Now"}
                    </Button>
                    
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
