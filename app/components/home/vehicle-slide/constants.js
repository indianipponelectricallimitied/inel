export const VEHICLE_TYPES = [
  {
    id: 0,
    title: "2 Wheeler",
    image: "/images/home/vehicle-(4).png",
    alt: "2 Wheeler",
    background: "2W",
    variants: {
      EV: {
        image: "/images/home/ev-scooter.png",
        hotspots: "2W_EV"
      },
      IC: {
        image: "/images/home/Scooter.png",
        hotspots: "2W_IC"
      }
    }
  },
  {
    id: 1,
    title: "3 Wheeler",
    image: "/images/home/vehicle-(1).png",
    alt: "3 Wheeler",
    background: "3W",
    variants: {
      EV: {
        image: "/3-whellar.png",
        hotspots: "3W_EV"
      },
      IC: {
        image: "/images/home/vehicle-(1).png",
        hotspots: "3W_IC"
      }
    }
  },
  {
    id: 2,
    title: "Commercial",
    image: "/images/home/vehicle-(2).png",
    alt: "Commercial",
    background: "4W",
    variants: {
      EV: {
        image: "/rrvr.webp",
        hotspots: "4W_EV"
      },
      IC: {
        image: "/images/home/vehicle-(2).png",
        hotspots: "4W_IC"
      }
    }
  }
];

export const VEHICLE_HOTSPOTS = {
  "2W_IC": [
    { label: "Ignition coils", x: 410, y: 5, object: "/Electronic_ai.glb",
      canvas_position: { x: 143, y: 35 },
      line_position: { x: -46, y: 30, width: 280 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    },
    { label: "Flywheel Magneto", x: 430, y: 35, object: "/Electronic_ai.glb",
      canvas_position: { x: -458, y: 60 },
      line_position: { x: -326, y: 40, width: 230 },
      linepath: `<svg width="166" height="5" viewBox="0 0 166 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="163.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M163 2.5H0" stroke="black"/>
      </svg>`
    }
  ],
  "2W_EV": [
    { label: "BLDC Motor Controller", x: 410, y: 5, object: "/Electronic_ai.glb",
      canvas_position: { x: 143, y: 35 },
      line_position: { x: -66, y: 30, width: 280 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    },
    { label: "Battery Management System", x: 430, y: 35, object: "/Electronic_ai.glb",
      canvas_position: { x: -458, y: 60 },
      line_position: { x: -326, y: 40, width: 200 },
      linepath: `<svg width="166" height="5" viewBox="0 0 166 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="163.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M163 2.5H0" stroke="black"/>
      </svg>`
    }
  ],
  // Similar pattern for 3W and 4W variants...
  "3W_IC": [
    { label: "Digital/analog CDI/TCI", x: 470, y: 65, object: "/Electronic_ai.glb",
      canvas_position: { x: -525, y: 160 },
      line_position: { x: -326, y: 140, width: 295 },
      linepath: `<svg width="304" height="5" viewBox="0 0 304 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="301.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M301 2.5L0 3" stroke="black"/>
      </svg>`
    }
  ],
  "3W_EV": [
    { label: "Motor Controller", x: 470, y: 65, object: "/Electronic_ai.glb",
      canvas_position: { x: -525, y: 160 },
      line_position: { x: -326, y: 140, width: 295 },
      linepath: `<svg width="304" height="5" viewBox="0 0 304 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="301.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M301 2.5L0 3" stroke="black"/>
      </svg>`
    }
  ],
  "4W_IC": [
    { label: "Engine Control Unit", x: 412, y: 25, object: "/Electronic_ai.glb",
      canvas_position: { x: 120, y: -30 },
      line_position: { x: -80, y: -20, width: 300 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    }
  ],
  "4W_EV": [
    { label: "Vehicle Control Unit", x: 412, y: 25, object: "/Electronic_ai.glb",
      canvas_position: { x: 120, y: -30 },
      line_position: { x: -80, y: -20, width: 300 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    }
  ]
}; 