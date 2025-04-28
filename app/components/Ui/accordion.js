"use client"
import { HiArrowRight } from "react-icons/hi";
import { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// AccordionItem Component
const AccordionItem = ({ accordion, active, handleToggle }) => {
  const contentEl = useRef();
  const { id, header, content } = accordion;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
          <div className="pdf-container">
            <Document
              file={content}
              onLoadSuccess={onDocumentLoadSuccess}
              className="pdf-document"
            >
              <Page 
                pageNumber={pageNumber} 
                width={contentEl.current?.clientWidth - 40 || 500}
                className="pdf-page"
              />
            </Document>
            {numPages && (
              <div className="pdf-controls mt-4 flex justify-center items-center gap-4">
                <button
                  onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                  disabled={pageNumber <= 1}
                  className="bg-primary text-white px-4 py-2 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-gray-700">
                  Page {pageNumber} of {numPages}
                </span>
                <button
                  onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                  disabled={pageNumber >= numPages}
                  className="bg-primary text-white px-4 py-2 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
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
