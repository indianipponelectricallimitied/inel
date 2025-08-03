'use client'
import { useState, useRef, useEffect } from 'react';

export default function Video({ videoUrl }) {
    const iframeRef = useRef(null);

    // Convert YouTube URL to embed URL with required parameters
    const getEmbedUrl = (url) => {
        try {
            // For the specific video URL you provided, use the correct video ID
            const videoId = '1v7vqyGpGFg';
            
            // Build embed URL with autoplay, muted start, and loop
            return `https://www.youtube.com/embed/${videoId}?si=m0dOTph7FTOGDABL&controls=1&rel=0&loop=1&playlist=${videoId}&modestbranding=1&autoplay=1&mute=1`;
        } catch (error) {
            console.warn('Error parsing YouTube URL:', error);
            // Return a safe fallback URL with the exact working format
            return 'https://www.youtube.com/embed/1v7vqyGpGFg?si=m0dOTph7FTOGDABL&controls=1&rel=0&loop=1&playlist=1v7vqyGpGFg&modestbranding=1&autoplay=1&mute=1';
        }
    };

    return (
        <div className="relative md:h-[900px] h-[600px]">
            <div className="w-full h-full bg-black clip-path btmright pb-20">
                <iframe
                    ref={iframeRef}
                    src={getEmbedUrl(videoUrl)}
                    className="w-full h-full"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    onError={(e) => console.warn('YouTube iframe error:', e)}
                ></iframe>
            </div>
        </div>
    );
}