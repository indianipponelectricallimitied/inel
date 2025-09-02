import Image from "next/image";
import QuickLinks from "../Ui/QuickLinks";
import Button from "../Ui/button";
import Accordion from "../Ui/accordion"
import { useState, useEffect } from "react";

const accordions = [
    {
      "id": 1,
      "header": "The Journey",
      "image": "/images/career/career.webp",
      content: [
        "With a legacy dating back to 1984, to becoming forerunners in advanced electronic systems, our journey in the automotive industry has been propelled by collective drive of individuals united by a shared vision. ",
        "We turn customer challenges into opportunities by leveraging the engineering expertise and skills of our people.",
        "From the foundational Flywheel Magnetos to our newest breakthroughs, our product portfolio is built on cutting-edge technology, notably our in-house built High Efficiency Regulator Rectifier systems, EV Motor Controllers, Sensors, Microcontrollers and ISG Controllers."
      ]
    },
    {
      "id": 2,
      "header": "Growth Horizon",
      "image": "/images/career/3.png",
      "content":[ 
        "A testament to our strength, our Research and Development Center holds 39    patents and positions it as the heart of innovation.",
        "We lead the 2W and 3W segments in India as the No.1 supplier of ACG, RR, and IG Coils. Ranked among the top three in ISG systems, we are also a key global source for ECV and a major supplier of HEC, driving India's mobility sector.",
        "Expanding beyond the domestic market, our OEM footprint spans the globe, establishing a strong presence in the 2W and EV sectors across North America, Europe, and Asia."
      ]
    },
    {
        "id": 3,
        "header": "Unlocking Potential",
        "image": "/images/career/2.png",
        "content":[ 
            "Certified as a \"Great Place to Work,\" INEL has earned its place as the preferred employer in the automotive sector for the fifth year in a row.",
            "Our commitment to a merit-based culture ensures the brightest minds drive unparalleled performance.",
            "Harnessing internal mobility, we offer an array of opportunities extending beyond INEL and span across LTVS groups."
        ]
    }
]


const steps = [
    {
        "id": 1,
        "header": "Step 1",
        "image": "/images/career/search.png",
        "content": "Explore"
    },
    {
        "id": 2,
        "header": "Step 2",
        "image": "/images/career/Vector.png",
        "content": "Apply"
    },
    {
        "id": 3,
        "header": "Step 3",
        "image": "/images/career/Icon.png",
        "content": "Connect"
    },
]
export default function OurPriority({quickLinks}) {
    const [activeAccordion, setActiveAccordion] = useState(1);
    const [imageKey, setImageKey] = useState(0); // Force re-render key
    
    // Get the current active accordion image
    const activeAccordionData = accordions.find(acc => acc.id === activeAccordion);
    const currentImage = activeAccordionData ? activeAccordionData.image : accordions[0].image;

    // Debug logging
    useEffect(() => {
        console.log('=== OurPriority Debug Info ===');
        console.log('Active accordion ID:', activeAccordion);
        console.log('Current image path:', currentImage);
        console.log('Active accordion data:', activeAccordionData);
        console.log('All accordions:', accordions);
        console.log('Image key:', imageKey);
        console.log('============================');
    }, [activeAccordion, currentImage, activeAccordionData, imageKey]);

    const handleAccordionChange = (newActiveId) => {
        console.log('=== Accordion Change Requested ===');
        console.log('Previous active ID:', activeAccordion);
        console.log('New active ID:', newActiveId);
        console.log('New accordion data:', accordions.find(acc => acc.id === newActiveId));
        console.log('===============================');
        
        if (newActiveId && newActiveId !== activeAccordion) {
            setActiveAccordion(newActiveId);
            // Force image re-render by changing the key
            setImageKey(prev => prev + 1);
        }
    };

    // Verify image paths exist
    useEffect(() => {
        accordions.forEach(acc => {
            console.log(`Checking image path for "${acc.header}":`, acc.image);
        });
    }, []);

    return (
        <>
            <div className="container mx-auto flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 space-y-5">
                    <h5>Your Triumph, Our Priority!</h5>
                    <h1 className="pb-5">INEL: Leading the ways</h1>
                    
                    <Accordion 
                        accordionData={accordions} 
                        initialActive={1}
                        onActiveChange={handleAccordionChange}
                    />
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="relative">
                        <Image 
                            key={`${currentImage}-${imageKey}`} // Force re-render
                            src={currentImage} 
                            alt="Career Opportunities" 
                            className="rounded-[20px] h-[450px] object-cover object-top transition-all duration-500 ease-in-out" 
                            width={800} 
                            height={800} 
                            priority
                            onError={(e) => {
                                console.error('=== Image Load Error ===');
                                console.error('Failed to load image:', currentImage);
                                console.error('Error event:', e);
                                console.error('Active accordion ID:', activeAccordion);
                                console.error('=====================');
                            }}
                            onLoad={() => {
                                console.log('=== Image Load Success ===');
                                console.log('Successfully loaded image:', currentImage);
                                console.log('Active accordion ID:', activeAccordion);
                                console.log('========================');
                            }}
                        />
                        {/* Debug overlay in development */}
                        {process.env.NODE_ENV === 'development' && (
                            <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs p-2 rounded">
                                Active: {activeAccordion}<br/>
                                Image: {currentImage}<br/>
                                Key: {imageKey}
                            </div>
                        )}
                        
                        {/* Test buttons for debugging */}
                        {process.env.NODE_ENV === 'development' && (
                            <div className="absolute bottom-2 left-2 space-y-1">
                                <button 
                                    onClick={() => handleAccordionChange(1)}
                                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                                >
                                    Test 1
                                </button>
                                <button 
                                    onClick={() => handleAccordionChange(2)}
                                    className="bg-green-500 text-white text-xs px-2 py-1 rounded"
                                >
                                    Test 2
                                </button>
                                <button 
                                    onClick={() => handleAccordionChange(3)}
                                    className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                                >
                                    Test 3
                                </button>
                            </div>
                        )}
                    </div>
                </div>    
            </div>
            <div className="container mx-auto py-20">
            <h1 className="text-center pb-10">Career Opportunities</h1 >
            <p className="w-2/3 mx-auto text-center">At INEL, you’re not just advancing a career; you’re embracing a legacy dedicated to enriching lives and shaping a brighter future. Venture Into a World of Endless Opportunities:</p>

                <h3 className="text-center pb-10 text-2xl pt-10">How to apply</h3>
                
                <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="card-top-right rounded-[20px] p-[1px] bg-[#A6A6A6]">
                        <div key={index} className="card-top-right p-5 rounded-[20px] bg-gradient-to-b from-[#ECF9FF] to-[#E4E4E4] text-center space-y-3">
                            <Image src={step.image} alt={step.header} width={50} height={100} className="mx-auto " />
                            <p >{step.header}</p>
                            <h3 className="text-xl font-medium">{step.content}</h3>
                            
                        </div>
                        </div>
                    ))}
                </div>
            </div>

        </> 
    )
}   
