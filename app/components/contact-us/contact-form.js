"use client"
import { useState, useEffect, useRef } from "react";

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
            let apiUrl = "https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api/contact";
            
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
        <div className="py-20 px-5 diamond-gradient  rounded-[20px]">
            <h1 className="text-center pb-5 text-white">Get in Touch</h1>
            <p className="text-center pb-10 px-1 text-white">We’re here to help! Whether you have questions, feedback, or need assistance, drop us a message and we’ll get back to you promptly.</p>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:w-4/6 mx-auto">
                    <input 
                        type="text" 
                        id="name" 
                        className="form-input" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required
                        disabled={isSubmitting}
                    />
                    <input 
                        type="email" 
                        id="email" 
                        className="form-input" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required
                        disabled={isSubmitting}
                    />
                    <input 
                        type="tel" 
                        id="phone" 
                        className="form-input" 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required
                        disabled={isSubmitting}
                    />
                    <textarea 
                        id="message" 
                        className="form-input" 
                        rows={5} 
                        placeholder="Message" 
                        value={formData.message} 
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                    ></textarea>
                    
                    <button type="submit" className="bg-white w-fit mx-auto text-black px-4 py-2 rounded-md">
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
        </>
    );
}
