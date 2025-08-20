"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './hotspot.css';

function generateLinePath(start, mid, end) {
  // Defensive programming: ensure all points have x and y properties
  const safeStart = start && typeof start.x === 'number' && typeof start.y === 'number' ? start : { x: 0, y: 0 };
  const safeMid = mid && typeof mid.x === 'number' && typeof mid.y === 'number' ? mid : { x: 0, y: 0 };
  const safeEnd = end && typeof end.x === 'number' && typeof end.y === 'number' ? end : { x: 0, y: 0 };

  return `<svg width="200" height="100" style="overflow:visible" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M${safeStart.x} ${safeStart.y} L${safeMid.x} ${safeMid.y} L${safeEnd.x} ${safeEnd.y}" stroke="black" stroke-width="1"/>
    <circle cx="${safeStart.x}" cy="${safeStart.y}" r="2" fill="black" stroke="black"/>
    <circle cx="${safeMid.x}" cy="${safeMid.y}" r="2" fill="black" stroke="black"/>
    <circle cx="${safeEnd.x}" cy="${safeEnd.y}" r="2" fill="black" stroke="black"/>
  </svg>`;
}

export default function Hotspot({ 
  marker_x, 
  marker_y, 
  label, 
  object, 
  start_point, 
  mid_point, 
  end_point, 
  canvas_position = { x: 0, y: 0 },
  url = "#",
  isActive = false,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div
      className="hotspot-wrapper sonar"
      style={{
        position: 'absolute',
        left: `${marker_x}px`,
        top: `${marker_y}px`,
        transform: 'translate(-50%, -50%)',
        zIndex: 5,
        pointerEvents: 'none', // so marker gets pointer events, not this
      }}
    >
      {/* Show details only if active */}
      {isActive && (
        <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 20 }}>
          {/* SVG line from marker to popup */}
          <div
            className="line-path"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '200px',
              height: '100px',
              pointerEvents: 'none',
            }}
            dangerouslySetInnerHTML={{ __html: generateLinePath(start_point, mid_point, end_point) }}
          />
          {/* Popup content at end of line */}
          <div
            className={`hotspot-canvas flex flex-col justify-center items-center transition-opacity duration-500 opacity-100`}
            style={{
              position: "absolute",
              zIndex: 2,
              left: `${canvas_position.x}px`,
              top: `${canvas_position.y}px`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'auto',
            }}
          >
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="w-[100px] h-[100px] cursor-pointer flex items-center justify-center hover:scale-105 transition-transform duration-200"> 
                <div className="absolute roundedborder rotate top-0 -translate-x-1/2 w-[100px] h-[100px] rounded-full "></div>   
                <Image src={object} alt={label} width={90} height={90} className='object-contain object-center w-[80px] h-[80px]'/>
              </div>
              <div className="hotspot-label text-center pt-3 w-[150px] text-sm hover:text-blue-600 transition-colors duration-200">{label}</div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
} 