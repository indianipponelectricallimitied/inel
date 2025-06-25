"use client"
import { HiArrowRight } from "react-icons/hi";
import { useState, useRef } from 'react';

// AccordionItem Component
const AccordionItem = ({ accordion, active, handleToggle }) => {
  const contentEl = useRef();
  const { id, header, content } = accordion;

  // Function to render content based on its type
  const renderContent = (content) => {
    // If content is a string, render as paragraph
    if (typeof content === 'string') {
      return <p className="text-gray-700">{content}</p>;
    }
    
    // If content is an array, render each item
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <div key={index} className="mb-3 last:mb-0">
          {typeof item === 'string' ? (
            <p className="text-gray-700">{item}</p>
          ) : (
            item
          )}
        </div>
      ));
    }
    
    // If content is JSX/React element, render directly
    return content;
  };

  return (
    <div className="rc-accordion-card bg-[#ebedf0] rounded-[20px]"> 
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-5 px-6 ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
        >
          <h4 className="rc-accordion-title text-xl">{header}</h4>
          <HiArrowRight
            className={`transition-all flex-shrink-0 duration-300 text-lg ${active === id ? 'rotate-90 text-white' : 'rotate-[-30deg] text-black'}`}
          />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className="rc-accordion-body p-5 px-6">
          {renderContent(content)}
        </div>
      </div>
    </div>
  );
};

// Accordion Component
export default function Accordion({accordionData}) {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="card-body">
        {accordionData.map((accordion) => (
        <AccordionItem
            key={accordion.id}
            active={active}
            handleToggle={handleToggle}
            accordion={accordion}
        />
        ))}
    </div>
  );
}
