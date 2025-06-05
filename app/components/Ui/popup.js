"use client"
import { useState, useEffect } from 'react';

const Popup = ({ 
  trigger, // Element that triggers the popup
  content, // Content to show in the popup
  onClose // Optional callback when popup closes
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    onClose?.();
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div onClick={openModal} className="inline-block cursor-pointer w-full">
        {trigger}
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center !mt-0">
          <div
            className="absolute inset-0 bg-black/75"
            onClick={closeModal}
          />
          <div className="relative z-50 w-full max-w-4xl h-[70vh] overflow-y-auto  px-4 bg-white rounded-lg shadow-xl">
            <button
              onClick={closeModal}
              className="fixed top-2 right-2 text-white hover:text-gray-200"
              aria-label="Close Popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-6">
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup; 