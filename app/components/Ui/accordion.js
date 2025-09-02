"use client"
import { HiArrowRight } from "react-icons/hi";
import { useState, useRef, useEffect } from 'react';

// AccordionItem Component
const AccordionItem = ({ accordion, active, handleToggle, isHighlighted = false }) => {
  const contentEl = useRef();
  const itemRef = useRef();
  const [contentHeight, setContentHeight] = useState('0px');
  const [isFullyOpened, setIsFullyOpened] = useState(false);
  const { id, header, content } = accordion;
  
  // Debug logging
  console.log(`AccordionItem ${id} - active: ${active}, isHighlighted: ${isHighlighted}, isFullyOpened: ${isFullyOpened}`);

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

  // Update content height when active state changes
  useEffect(() => {
    if (active === id && contentEl.current) {
      // Longer delay to ensure content is fully rendered
      const timer = setTimeout(() => {
        if (contentEl.current) {
          setContentHeight(`${contentEl.current.scrollHeight}px`);
          // Mark as fully opened after content height is set
          setTimeout(() => {
            setIsFullyOpened(true);
          }, 200);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setContentHeight('0px');
      setIsFullyOpened(false);
    }
  }, [active, id]);

  // Scroll to highlighted item
  useEffect(() => {
    if (isHighlighted && itemRef.current && isFullyOpened) {
      const timer = setTimeout(() => {
        // Get the tab content container
        const tabContent = itemRef.current.closest('.tab-content');
        if (tabContent) {
          const itemRect = itemRef.current.getBoundingClientRect();
          const containerRect = tabContent.getBoundingClientRect();
          
          // Calculate the scroll position to show the item with some padding
          const scrollTop = tabContent.scrollTop + (itemRect.top - containerRect.top) - 40;
          
          tabContent.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        } else {
          // Fallback to scrollIntoView
          itemRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }
      }, 200); // Reduced delay since we now wait for isFullyOpened
      return () => clearTimeout(timer);
    }
  }, [isHighlighted, isFullyOpened]);

  return (
    <div ref={itemRef} className={`rc-accordion-card rounded-[20px] ${isHighlighted ? 'bg-blue-100 border-2 border-blue-300 mt-4' : 'bg-[#ebedf0]'}`}> 
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-5 px-6 ${active === id ? 'active' : ''} ${isHighlighted ? 'bg-blue-50' : ''}`}
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
        style={{ height: contentHeight, transition: 'height 0.3s ease' }}
      >
        <div className="rc-accordion-body p-5 px-6">
          {renderContent(content)}
        </div>
      </div>
    </div>
  );
};

// Accordion Component
export default function Accordion({accordionData, initialActive = null, onActiveChange, highlightedId = null}) {
  const [active, setActive] = useState(initialActive);

  // Update active state when initialActive prop changes
  useEffect(() => {
    console.log('Accordion - initialActive changed to:', initialActive);
    if (initialActive !== null) {
      setActive(initialActive);
    }
  }, [initialActive]);

  const handleToggle = (index) => {
    const newActive = active === index ? null : index;
    console.log('Accordion handleToggle - changing from', active, 'to', newActive);
    setActive(newActive);
    if (onActiveChange) {
      console.log('Accordion calling onActiveChange with:', newActive);
      onActiveChange(newActive);
    }
  };

  // Ensure parent state and local state are in sync
  useEffect(() => {
    if (onActiveChange && active !== initialActive) {
      console.log('Accordion syncing state - calling onActiveChange with:', active);
      onActiveChange(active);
    }
  }, [active, initialActive, onActiveChange]);

  return (
    <div className="card-body">
        {accordionData.map((accordion) => (
        <AccordionItem
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
