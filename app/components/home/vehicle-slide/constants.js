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
    image: "/images/home/autothumb.webp",
    alt: "3 Wheeler",
    background: "3W",
    variants: {
      EV: {
        image: "/images/home/3-whellar.webp",
        hotspots: "3W_EV"
      },
      IC: {
        image: "/images/home/3-whellar.webp",
        hotspots: "3W_IC"
      }
    }
  },
  {
    id: 2,
    title: "Commercial",
    image: "/images/home/vehicle-(2).png",
    alt: "Commercial",
    background: "CC",
    variants: {
      EV: {
        image: "/images/home/truck.png",
        hotspots: "CC_EV"
      },
      IC: {
        image: "/images/home/truck.png",
        hotspots: "CC_IC"
      }
    }
  }
];

export const VEHICLE_HOTSPOTS = {
  "2W_IC": [
    { label: "7.4-inch-tft-instrument cluster", x: 390, y: -35, marker_x: 220, marker_y: 40, object: "/images/home/cluster.png",
      canvas_position: { x: 143, y: 35 },
      line_position: { x: -46, y: 30, width: 280 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    },
    // { label: "Control Panel", x: 540, y: 100, marker_x: 330, marker_y: 155, object: "/images/home/ControlPanel.webp",
    //   canvas_position: { x: -458, y: 60 },
    //   line_position: { x: -326, y: 40, width: 230 },
    //   linepath: `<svg width="166" height="5" viewBox="0 0 166 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <circle cx="163.5" cy="2.5" r="2" fill="black" stroke="black"/>
    //     <path d="M163 2.5H0" stroke="black"/>
    //   </svg>`
    // }
  ],
  "2W_EV": [
    { label: "BLDC Motor Controller", x: 505, y: 119, marker_x: 310, marker_y: 198, object: "/images/home/BLDC.webp",
      canvas_position: { x: 70, y: 25 },
      line_position: { x: -66, y: 30, width: 280 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    },
    // { label: "DC DC Converter", x: 430, y: 35, marker_x: 430, marker_y: 35, object: "/images/home/dc-dc-iso.png",
    //   canvas_position: { x: -458, y: 60 },
    //   line_position: { x: -326, y: 40, width: 200 },
    //   linepath: `<svg width="166" height="5" viewBox="0 0 166 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <circle cx="163.5" cy="2.5" r="2" fill="black" stroke="black"/>
    //     <path d="M163 2.5H0" stroke="black"/>
    //   </svg>`
    // },
    { label: "7.4-inch-tft-instrument cluster", x: 390, y: -35, marker_x: 220, marker_y: 40, object: "/images/home/cluster.png",
      canvas_position: { x: 143, y: 35 },
      line_position: { x: -46, y: 30, width: 280 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    },
  ],
  // Similar pattern for 3W and 4W variants...
  "3W_IC": [
    
    { label: "BLDC Motor Controller", x: 460, y: 158, marker_x: 460, marker_y: 158, object: "/images/home/BLDC.webp",
      canvas_position: { x: 121, y: 35 },
      line_position: { x: -66, y: 30, width: 280 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    },
    { label: "Control Panel", x: 470, y: 65, marker_x: 470, marker_y: 65, object: "/images/home/ControlPanel.webp",
      canvas_position: { x: -525, y: 160 },
      line_position: { x: -326, y: 140, width: 295 },
      linepath: `<svg width="304" height="5" viewBox="0 0 304 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="301.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M301 2.5L0 3" stroke="black"/>
      </svg>`
    },
  ],
  "3W_EV": [
    { label: "DC DC Converter", x: 430, y: 65, marker_x: 430, marker_y: 65, object: "/images/home/dc-dc-iso.png",
      canvas_position: { x: -525, y: 160 },
      line_position: { x: -326, y: 140, width: 295 },
      linepath: `<svg width="304" height="5" viewBox="0 0 304 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="301.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M301 2.5L0 3" stroke="black"/>
      </svg>`
    },
    { label: "BLDC Motor Controller", x: 460, y: 158, marker_x: 460, marker_y: 158, object: "/images/home/BLDC.webp",
      canvas_position: { x: 121, y: 35 },
      line_position: { x: -66, y: 30, width: 280 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    },
  ],
  "CC_IC": [
    { label: "Gear Position Sensor", x: 430, y: 28, marker_x: 430, marker_y: 28, object: "/images/home/Gear.png",
      canvas_position: { x: -525, y: 160 },
      line_position: { x: -326, y: 140, width: 295 },
      linepath: `<svg width="304" height="5" viewBox="0 0 304 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="301.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M301 2.5L0 3" stroke="black"/>
      </svg>`
    },
    { label: "Fuel Vapor Purge (FVP)", x: 412, y: 150, marker_x: 412, marker_y: 150, object: "/images/home/Fuel_Vapor_Purge.webp",
      canvas_position: { x: 120, y: -30 },
      line_position: { x: -80, y: -20, width: 300 },
      linepath: `<svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
        <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>`
    }
  ],
  "CC_EV": [
    { label: "Steering Angle Sensor", x: 430, y: 28, marker_x: 430, marker_y: 28, object: "/images/home/Steering-Sensor.png",
      canvas_position: { x: -525, y: 160 },
      line_position: { x: -326, y: 140, width: 295 },
      linepath: `<svg width="304" height="5" viewBox="0 0 304 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="301.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M301 2.5L0 3" stroke="black"/>
      </svg>`
    },
    { label: "Speed Sensor", x: 412, y: 150, marker_x: 412, marker_y: 150, object: "/images/home/Speed_Sensor.webp",
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