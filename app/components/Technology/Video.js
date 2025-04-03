'use client'
import { useState, useRef, useEffect } from 'react';
import { BsPlayCircle } from "react-icons/bs";
import { BsPauseCircle } from "react-icons/bs";

export default function Video() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef(null);
    const timeoutRef = useRef(null);

    // Clear timeout on component unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
            setShowControls(true);

            // Clear any existing timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Set new timeout to hide controls
            timeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 1000);
        }
    };

    const handleMouseMove = () => {
        setShowControls(true);
        
        // Reset timeout on mouse move
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
            setShowControls(false);
        }, 1000);
    };

    return (
        <div 
            className="relative clip-path btmright h-[600px]" 
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowControls(true)}
        >
            <video 
                ref={videoRef}
                src="/videos/hero-placeholder-vid.mp4" 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover"
            ></video>
            <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                <button 
                    onClick={togglePlay}
                    className="hover:scale-110 transition-transform duration-200"
                >
                    {isPlaying ? (
                        <BsPauseCircle className=" bg-white/30 rounded-full text-white text-6xl cursor-pointer" />
                    ) : (
                        <BsPlayCircle className=" bg-white/30 rounded-full text-white text-6xl cursor-pointer" />
                    )}
                </button>
            </div>
        </div>
    );
}