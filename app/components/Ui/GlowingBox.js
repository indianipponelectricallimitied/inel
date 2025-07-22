"use client"
import { useEffect, useRef } from 'react';

// Reusable Glowing Box Component
export default function GlowingBox({ children, borderColor = "#9EB2FF", style = {}, className = "", ...props }) {
    const boxRef = useRef(null);
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!boxRef.current) return;
            
            const box = boxRef.current;
            const rect = box.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;
            
            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
            angle = (angle + 360) % 360;
            
            box.style.setProperty("--start", angle + 60);
            box.style.setProperty("--border-color", borderColor);
        };
        
        const box = boxRef.current;
        if (box) {
            box.addEventListener("mousemove", handleMouseMove);
        }
        
        return () => {
            if (box) {
                box.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [borderColor]);

    const defaultStyle = {
        position: 'relative',

        zIndex: 1,
        overflow: 'hidden',
        ...style
    };

    return (
        <div 
            ref={boxRef} 
            className={`glowing-box ${className}`}
            style={defaultStyle}
            {...props}
        >
            {children}
            
            <style jsx>{`
                .glowing-box {
                    --start: 0;
                    --border-color: ${borderColor};
                }
                
                .glowing-box::before {
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 100%;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: inherit;
                    border: 4px solid transparent;
                    background: var(--border-color);
                    mask: linear-gradient(#0000, #0000), conic-gradient(from calc((
                                var(--start) - (20 * 1.1)
                            ) * 1deg), #ffffff1f 0deg, white, #ffffff00 100deg);
                    mask-composite: intersect;
                    mask-clip: padding-box, border-box;
                    opacity: 0;
                    transition: 0.5s ease;
                    z-index: 10;
                }
                
                
                .glowing-box:hover::before {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}   
 
