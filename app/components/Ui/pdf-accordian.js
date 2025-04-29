"use client"
import { HiArrowRight, HiDownload, HiExternalLink } from "react-icons/hi";
import { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Create an empty module file and configure the worker to use it
// This is a workaround to avoid the Promise.withResolvers error
// No need to import pdfjs since we're not using the worker directly

// AccordionItem Component
const AccordionItem = ({ accordion, active, handleToggle }) => {
  const contentEl = useRef();
  const { id, header, content } = accordion;
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset error state when accordion changes
  useEffect(() => {
    if (active === id) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [active, id]);

  // Handle iframe load events
  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Format PDF URLs to handle potential issues
  const getFormattedUrl = (url) => {
    // If using Google PDF Viewer as a proxy
    return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
  };

  return (
    <div className="rc-accordion-card bg-[#ebedf0] rounded-[20px] mb-4"> 
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
          {active === id && (
            <div className="pdf-container">
              {/* Try Google Docs PDF Viewer as a fallback */}
              <div className="pdf-viewer-container relative" style={{ minHeight: "500px" }}>
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-100 bg-opacity-80 z-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                    <p className="mt-3 text-gray-600">Loading PDF...</p>
                  </div>
                )}
                
                <iframe 
                  src={getFormattedUrl(content)}
                  width="100%" 
                  height="600px"
                  title={header}
                  className="border-0 rounded-md shadow-lg"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
              </div>

              {hasError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md text-center">
                  <p className="text-red-500 mb-2">
                    We're having trouble displaying this PDF. Please use the buttons above to view or download it directly.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Accordion Component
export default function Pdfaccordian({accordionData}) {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="card-body">
      {accordionData && accordionData.map((accordion) => (
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
