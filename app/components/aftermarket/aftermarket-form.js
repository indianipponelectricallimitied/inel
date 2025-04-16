"use client"

import { useState } from "react";

export default function AftermarketForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        company_name: "",
        country: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("https://inelbackend-fccmbmfjbhewhbhh.centralindia-01.azurewebsites.net/api/aftermarket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus({
                    success: true,
                    message: "Your service request has been submitted successfully!"
                });
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone_number: "",
                    company_name: "",
                    country: "",
                    message: "",
                });
            } else {
                const errorData = await response.json();
                setSubmitStatus({
                    success: false,
                    message: errorData.message || "Failed to submit the form. Please try again."
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus({
                success: false,
                message: "An error occurred. Please try again later."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
       
            
            
            <form onSubmit={handleSubmit} className="space-y-6 px-4 pb-10 py-6 bg-[#F6F6F6] rounded-[10px] border border-[#00000033] shadow-[0px_4px_93.7px_0px_#9EB2FF3D]">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <label htmlFor="first_name" className="block mb-2">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                            placeholder="Enter First Name"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="last_name" className="block mb-2">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                            placeholder="Enter Last Name"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter Email Address"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="phone_number" className="block mb-2">Phone Number</label>
                        <input
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                            placeholder="Enter Phone Number"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="company_name" className="block mb-2">Company Name</label>
                        <input
                            type="text"
                            id="company_name"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                            placeholder="Enter Company Name"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="country" className="block mb-2">Country</label>
                        <div className="relative">
                            <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none appearance-none"
                            >
                                <option value="" disabled className="text-[#BDBDBD]">Select Country</option>
                                <option value="india">India</option>
                                <option value="japan">Japan</option>
                                <option value="usa">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="germany">Germany</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="w-5 h-5 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Enter your message here"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                    ></textarea>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`bg-[#160959] text-white py-2 px-10 rounded-md   ${isSubmitting ? 'bg-indigo-800' : 'bg-primary'} `}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {submitStatus && (
                    <div className={`py-2 px-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {submitStatus.message}
                    </div>
                    )}
                </div>

                

                <style jsx>{`
                    input, select, textarea {
                    box-shadow: 0px 1px 7.1px -3px #00000040 inset;
                        &::placeholder {
                            color: #BDBDBD;
                        }
                    }
                `}</style>
            </form>
        
    );
}
