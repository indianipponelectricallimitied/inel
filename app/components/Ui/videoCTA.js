"use client"
import { useState } from 'react';
import { IoPlayCircle } from "react-icons/io5";

const videoCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);



    return (
        <>
        <section className="bg-[url('/Rectangle19.png')] bg-cover bg-center">
            <div className="container mx-auto flex flex-col md:flex-row text-white py-20 px-5 md:px-0">
                <div className="w-full md:w-2/3">
                    <h1 className="pb-5">Behind the Scenes<br/>
                    Driving Innovation Forward</h1>
                    <p className="pb-5">Step inside INEL and discover how our technology, expertise, and passion drive the future of automotive excellence.</p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center items-center">
                {/* <button onClick={openModal} >
                    <IoPlayCircle className="text-6xl" />
                </button>    */}
                </div>
            </div>
        </section>
        {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={closeModal}
          ></div>
          <div className="relative z-50 w-full max-w-4xl px-4">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video URL
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
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
            </div>
          </div>
        </div>
      )}
        </>
    )
}




export default videoCTA; 