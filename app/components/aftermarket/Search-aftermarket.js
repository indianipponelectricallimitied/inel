"use client"

import { useState, useEffect } from 'react'
import GlowingBox from "../Ui/GlowingBox"

export default function SearchAftermarket() {
    // State for each dropdown
    const [category, setCategory] = useState('')
    const [make, setMake] = useState('')
    const [bodyType, setBodyType] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [partNumber, setPartNumber] = useState('')

    // Dummy data
    const categories = ['Suspension', 'Brakes', 'Engine', 'Transmission', 'Electrical', 'Body Parts']
    const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Mazda', 'Volkswagen']
    const bodyTypes = ['Sedan', 'SUV', 'Truck', 'Coupe', 'Hatchback', 'Van']
    const models = ['Corolla', 'Civic', 'F-150', 'Silverado', 'Altima', 'Mazda3', 'Golf']
    const years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016']

    // Handle search action
    const handleSearch = (e) => {
        e.preventDefault()
        console.log('Search criteria:', { category, make, bodyType, model, year, partNumber })
        // Here you would normally fetch data based on search criteria
    }

    return (
        <GlowingBox borderColor="#9EB2FF" className='w-full h-full rounded-[20px] z-10 bg-gradient-to-br  shadow-[0px_0px_50px_-21px_#9EB2FF]' >
        <div className="grid-with-gradients">
            <div className="gradient-sphere  w-[600px] h-[600px] -bottom-[100px] -right-[200px]"></div>
            <section className="rounded-[20px] relative z-20">
                <div className="flex flex-col gap-6 z-20 relative p-6 md:p-10 lg:p-12">
                    <form onSubmit={handleSearch}>
                        <div className="mb-6">
                            <h2 className="text-primary text-lg font-medium mb-3">Category</h2>
                            <div className="relative">
                                <select 
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full bg-white rounded-md py-3 px-4 appearance-none z-[1]"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((cat, index) => (
                                        <option key={index} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <div className="-z-[1] absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-[#160959] rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                            <div>
                                <h2 className="text-primary text-lg font-medium mb-2">Make</h2>
                                <div className="relative">
                                    <select 
                                        value={make}
                                        onChange={(e) => setMake(e.target.value)}
                                        className="w-full bg-white rounded-md py-2 px-3 appearance-none "
                                    >
                                        <option value="">Select Brand</option>
                                        {makes.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-[#160959] rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-primary text-lg font-medium mb-2">Body Type</h2>
                                <div className="relative">
                                    <select 
                                        value={bodyType}
                                        onChange={(e) => setBodyType(e.target.value)}
                                        className="w-full bg-white rounded-md py-2 px-3 appearance-none "
                                    >
                                        <option value="">Body Type</option>
                                        {bodyTypes.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-[#160959] rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-primary text-lg font-medium mb-2">Model</h2>
                                <div className="relative">
                                    <select 
                                        value={model}
                                        onChange={(e) => setModel(e.target.value)}
                                        className="w-full bg-white rounded-md py-2 px-3 appearance-none "
                                    >
                                        <option value="">Select Model</option>
                                        {models.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-[#160959] rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-primary text-lg font-medium mb-2">Year</h2>
                                <div className="relative">
                                    <select 
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        className="w-full bg-white rounded-md py-2 px-3 appearance-none "
                                    >
                                        <option value="">Select Year</option>
                                        {years.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-[#160959] rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-primary text-lg font-medium mb-5">Or</h2>

                        <div className="mb-6">
                            <h2 className="text-primary text-lg font-medium mb-2">Part Number Search</h2>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Part Number / OE" 
                                    value={partNumber}
                                    onChange={(e) => setPartNumber(e.target.value)}
                                    className="w-full bg-white rounded-md py-2 px-3 "
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-[#160959] rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="bg-[#160959] text-white py-2 px-10 rounded-md hover:bg-[#2a1b7a] transition-colors"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </section>
        </div>
        </GlowingBox>
    );
}

