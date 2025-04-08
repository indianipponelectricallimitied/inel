
"use client"
import { useState } from "react";
import Button from "../ui/button";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    
    const [responseMessage, setResponseMessage] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api/contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setResponseMessage("Thank you for your message! We'll get back to you soon.");
            } else {
                setResponseMessage("Oops, something went wrong. Please try again later.");
            }
        } catch (error) {
            setResponseMessage("Error: Could not submit your form. Please try again.");
        }
    };

    return (
        <>
        <div className="py-20 bg-gradient-to-tl from-primary to-[#1D00B0] rounded-[20px]">
            <h1 className="text-center pb-5 text-white">Get in Touch</h1>
            <p className="text-center pb-10 px-1 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-4/6 mx-auto">
                    <input 
                        type="text" 
                        id="name" 
                        className="form-input" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                    />
                    <input 
                        type="email" 
                        id="email" 
                        className="form-input" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                    />
                    <input 
                        type="tel" 
                        id="phone" 
                        className="form-input" 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                    />
                    <textarea 
                        id="message" 
                        className="form-input" 
                        rows={5} 
                        placeholder="Message" 
                        value={formData.message} 
                        onChange={handleInputChange}
                    ></textarea>
                    <Button variant="white" className="mx-auto">Enquire Now</Button>
                </div>
            </form>

            {responseMessage && (
                <div className="mt-5 text-center text-white">
                    {responseMessage}
                </div>
            )}
        </div>
        </>
    );
}
