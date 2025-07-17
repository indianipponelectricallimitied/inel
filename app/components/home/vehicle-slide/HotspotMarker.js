"use client";

export default function HotspotMarker({ 
  x, 
  y, 
  isActive = false,
  onHover = () => {},
  onLeave = () => {},
}) {
  return (
    <div
      className="hotspot-marker-wrapper"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Hotspot SVG marker */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        className={`hotspot-marker ${isActive ? 'hotspot-active' : 'hotspot-glow'}`}
        style={{ cursor: 'pointer', zIndex: 11 }}
      >
        <circle cx="12" cy="12" r="8" fill="#7c3aed" stroke="#fff" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="#fff" />
      </svg>
    </div>
  );
} 