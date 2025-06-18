"use client"
import { HiArrowRight } from "react-icons/hi";
import { useState } from 'react';

// MobileAccordionItem Component
const MobileAccordionItem = ({ accordion, active, handleToggle }) => {
  const { id, header, content } = accordion;

  return (
    <div className="rc-accordion-card  rounded-[20px] mb-2"> 
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-5 px-6 cursor-pointer  ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
        >
          <h4 className="rc-accordion-title text-xl">{header}</h4>
          <HiArrowRight
            className={`transition-all flex-shrink-0 duration-300 text-lg ${active === id ? 'rotate-90 text-white' : 'rotate-[-30deg] text-black'}`}
          />
        </div>
      </div>
      {/* Simple CSS-only height management */}
      <div className={active === id ? 'block' : 'hidden'}>
        <div className="rc-accordion-body py-5 px-3 !bg-white">
          {content}
        </div>
      </div>
    </div>
  );
};

// MobileAccordion Component
export default function MobileAccordion({accordionData}) {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="mobile-accordion">
        {accordionData.map((accordion) => (
        <MobileAccordionItem
            key={accordion.id}
            active={active}
            handleToggle={handleToggle}
            accordion={accordion}
        />
        ))}
    </div>
  );
} 