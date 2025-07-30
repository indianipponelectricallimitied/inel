"use client"
import { HiArrowRight } from "react-icons/hi";
import { useState, useEffect, useRef } from 'react';

// MobileAccordionItem Component
const MobileAccordionItem = ({ accordion, active, handleToggle, isHighlighted = false }) => {
  const itemRef = useRef();
  const { id, header, content } = accordion;

  // Scroll to highlighted item
  useEffect(() => {
    if (isHighlighted && itemRef.current) {
      const timer = setTimeout(() => {
        itemRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 500); // Delay to ensure accordion is opened
      return () => clearTimeout(timer);
    }
  }, [isHighlighted]);

  return (
    <div ref={itemRef} className={`rc-accordion-card rounded-[20px] mb-2 ${isHighlighted ? 'bg-blue-100 border-2 border-blue-300' : ''}`}> 
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-5 px-6 cursor-pointer ${active === id ? 'active' : ''} ${isHighlighted ? 'bg-blue-50' : ''}`}
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
export default function MobileAccordion({accordionData, initialActive = null, onActiveChange, highlightedId = null}) {
  const [active, setActive] = useState(initialActive);

  // Update active state when initialActive prop changes
  useEffect(() => {
    if (initialActive !== null) {
      setActive(initialActive);
    }
  }, [initialActive]);

  const handleToggle = (index) => {
    const newActive = active === index ? null : index;
    setActive(newActive);
    if (onActiveChange) {
      onActiveChange(newActive);
    }
  };

  return (
    <div className="mobile-accordion">
        {accordionData.map((accordion) => (
        <MobileAccordionItem
            key={accordion.id}
            active={active}
            handleToggle={handleToggle}
            accordion={accordion}
            isHighlighted={highlightedId === accordion.id}
        />
        ))}
    </div>
  );
} 