"use client"

import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function CareeerForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        application_type: "",
        role_applied_for: "",
        current_location: "",
        resume: "",
        message: "",
        agreed_to_terms: false,
        company_name: "",
        country: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Create FormData object for file upload
            const formDataToSend = new FormData();
            
            // Append all form fields
            Object.keys(formData).forEach(key => {
                if (key === 'resume' && formData[key]) {
                    formDataToSend.append(key, formData[key]);
                } else if (key === 'agreed_to_terms') {
                    formDataToSend.append(key, formData[key].toString());
                } else if (formData[key] !== '') {
                    formDataToSend.append(key, formData[key]);
                }
            });

            // Validate required fields
            const requiredFields = ['first_name', 'last_name', 'email', 'phone_number', 'application_type', 'role_applied_for'];
            const missingFields = requiredFields.filter(field => !formData[field]);
            
            if (missingFields.length > 0) {
                throw new Error(`Please fill in all required fields: ${missingFields.join(', ')}`);
            }

            if (!formData.agreed_to_terms) {
                throw new Error('Please agree to the Terms and Conditions');
            }

            const response = await fetch("https://inelbackend.vercel.app/api/career", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit the form');
            }

            setSubmitStatus({
                success: true,
                message: "Your career application has been submitted successfully!"
            });

            // Reset form
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                phone_number: "",
                application_type: "",
                role_applied_for: "",
                current_location: "",
                resume: "",
                message: "",
                agreed_to_terms: false,
                company_name: "",
                country: "",
            });

        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus({
                success: false,
                message: error.message || "An error occurred. Please try again later."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

            <form onSubmit={handleSubmit} className="space-y-6 p-5 md:p-10 text-start bg-[#E8E8E8] rounded-[10px] border border-[#00000033] shadow-[0px_4px_93.7px_0px_#9EB2FF3D]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <label htmlFor="first_name" className="block mb-2">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
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
                    
                    <div>
                        <label htmlFor="application_type" className="block mb-2">Application Type</label>
                        <div className="relative">
                            <select
                                id="application_type"
                                name="application_type"
                                value={formData.application_type}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none appearance-none"
                            >
                                <option value="" disabled className="text-[#BDBDBD]">Select Application Type</option>
                                <option value="full_time">Full Time</option>
                                <option value="part_time">Part Time</option>
                                <option value="contract">Contract</option>
                                <option value="internship">Internship</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                <svg className="w-5 h-5 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="role_applied_for" className="block mb-2">Role Applied For</label>
                        <input
                            type="text"
                            id="role_applied_for"
                            name="role_applied_for"
                            value={formData.role_applied_for}
                            onChange={handleChange}
                            placeholder="Enter Role Applied For"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="current_location" className="block mb-2">Current Location</label>
                        <input
                            type="text"
                            id="current_location"
                            name="current_location"
                            value={formData.current_location}
                            onChange={handleChange}
                            placeholder="Enter Current Location"
                            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2 justify-end ">
                        <p>Upload Resume</p>
                        <label htmlFor="resume" className="block relative custom-file-upload w-full p-[7px] rounded-md focus:outline-none bg-white">
                            <span className="text-sm  bg-primary flex w-fit gap-2 items-center text-white p-2 px-4 rounded-md">Attach your Resume
                                <FiUpload className="text-white text-lg"/>
                            </span>
                            <p className="text-xs text-gray-500  absolute top-16 lg:top-1/2 -translate-y-1/2 right-2">Upload(PDF/DOC, Max 5MB)</p>
                        </label>

                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                        />
                        
                    </div>
                </div>
                
                
                
                <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Enter your message here"
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none"
                    ></textarea>
                </div>
                
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="agreed_to_terms"
                            name="agreed_to_terms"
                            type="checkbox"
                            checked={formData.agreed_to_terms}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="agreed_to_terms" className="font-medium text-gray-700">
                            I agree to the Terms and Conditions and Privacy Policy
                        </label>
                    </div>
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
                    input, select, textarea , .custom-file-upload{
                    box-shadow: 0px 1px 7.1px -3px #00000040 ;
                        &::placeholder {
                            color: #BDBDBD;
                        }
                    }

                    input[type="file"] {
                        display: none;
                        }

                    .custom-file-upload {
                        display: inline-block;
                        cursor: pointer;
                    }
                `}</style>
            </form>
        
    );
}
