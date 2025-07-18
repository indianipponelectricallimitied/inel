// Function to generate SVG path from start, mid, and end points
const generateLinePath = (startPoint, midPoint, endPoint) => {
  return `<svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M${startPoint.x} ${startPoint.y} L${midPoint.x} ${midPoint.y} L${endPoint.x} ${endPoint.y}" stroke="black" stroke-width="1"/>
    <circle cx="${startPoint.x}" cy="${startPoint.y}" r="2" fill="black" stroke="black"/>
    <circle cx="${midPoint.x}" cy="${midPoint.y}" r="2" fill="black" stroke="black"/>
    <circle cx="${endPoint.x}" cy="${endPoint.y}" r="2" fill="black" stroke="black"/>
  </svg>`;
};

// URL constants for navigation
export const HOTSPOT_URLS = {
  "7.4-inch-tft-instrument cluster": "/products/instrument-cluster",
  "BLDC Motor Controller": "/products/bldc-controller",
  "Control Panel": "/products/control-panel",
  "DC DC Converter": "/products/dc-converter",
  "Gear Position Sensor": "/products/gear-sensor",
  "Fuel Vapor Purge (FVP)": "/products/fuel-vapor-purge",
  "Steering Angle Sensor": "/products/steering-sensor",
  "Speed Sensor": "/products/speed-sensor"
};

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
    {
      label: "7.4-inch-tft-instrument cluster",
      marker_x: 220, marker_y: 40,
      start_point: { x: 0, y: 0 }, // start at marker location
      mid_point: { x: 50, y: -40 },
      end_point: { x: 150, y: -40 },
      canvas_position: { x: 150, y: -40 },
      object: "/images/home/cluster.png",
      url: "/products/instrument-cluster"
    }
  ],
  "2W_EV": [
    {
      label: "BLDC Motor Controller",
      marker_x: 310, marker_y: 198,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -60 },
      end_point: { x: 180, y: -60 },
      canvas_position: { x: 180, y: -60 },
      object: "/images/home/BLDC.webp",
      url: "/products/bldc-controller"
    },
    {
      label: "7.4-inch-tft-instrument cluster",
      marker_x: 220, marker_y: 40,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -40 },
      end_point: { x: 150, y: -40 },
      canvas_position: { x: 150, y: -40 },
      object: "/images/home/cluster.png",
      url: "/products/instrument-cluster"
    }
  ],
  "3W_IC": [
    {
      label: "7.4-inch-tft-instrument cluster",
      marker_x: 86, marker_y: 100,
      start_point: { x: 0, y: 0 },
      mid_point: { x: -50, y: -40 },
      end_point: { x: -150, y: -40 },
      canvas_position: { x: -170, y: -40 },
      object: "/images/home/cluster.png",
      url: "/products/instrument-cluster"
    },
    {
      label: "BLDC Motor Controller",
      marker_x: 460, marker_y: 158,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -60 },
      end_point: { x: 180, y: -60 },
      canvas_position: { x: 180, y: -60 },
      object: "/images/home/BLDC.webp",
      url: "/products/bldc-controller"
    },
    {
      label: "Control Panel",
      marker_x: 470, marker_y: 65,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -60 },
      end_point: { x: 150, y: -60 },
      canvas_position: { x: 150, y: -60 },
      object: "/images/home/ControlPanel.webp",
      url: "/products/control-panel"
    },
    {
      label: "Control Panel",
      marker_x: 470, marker_y: 65,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -60 },
      end_point: { x: 150, y: -60 },
      canvas_position: { x: 150, y: -60 },
      object: "/images/home/ControlPanel.webp",
      url: "/products/control-panel"
    }
  ],
  "3W_EV": [
    {
      label: "DC DC Converter",
      marker_x: 430, marker_y: 65,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -60 },
      end_point: { x: 150, y: -60 },
      canvas_position: { x: 150, y: -60 },
      object: "/images/home/dc-dc-iso.png",
      url: "/products/dc-converter"
    },
    {
      label: "BLDC Motor Controller",
      marker_x: 460, marker_y: 158,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -60 },
      end_point: { x: 180, y: -60 },
      canvas_position: { x: 180, y: -60 },
      object: "/images/home/BLDC.webp",
      url: "/products/bldc-controller"
    }
  ],
  "CC_IC": [
    {
      label: "Gear Position Sensor",
      marker_x: 430, marker_y: 28,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -60 },
      end_point: { x: 150, y: -60 },
      canvas_position: { x: 150, y: -60 },
      object: "/images/home/Gear.png",
      url: "/products/gear-sensor"
    },
    {
      label: "Fuel Vapor Purge (FVP)",
      marker_x: 412, marker_y: 150,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -60 },
      end_point: { x: 180, y: -60 },
      canvas_position: { x: 180, y: -60 },
      object: "/images/home/Fuel_Vapor_Purge.webp",
      url: "/products/fuel-vapor-purge"
    }
  ],
  // "CC_EV": [
  //   {
  //     label: "Steering Angle Sensor",
  //     marker_x: 430, marker_y: 28,
  //     start_point: { x: 0, y: 0 },
  //     mid_point: { x: 50, y: -60 },
  //     end_point: { x: 150, y: -60 },
  //     canvas_position: { x: 150, y: -60 },
  //     object: "/images/home/Steering-Sensor.png",
  //     url: "/products/steering-sensor"
  //   },
  //   {
  //     label: "Speed Sensor",
  //     marker_x: 412, marker_y: 150,
  //     start_point: { x: 0, y: 0 },
  //     mid_point: { x: 60, y: -60 },
  //     end_point: { x: 180, y: -60 },
  //     canvas_position: { x: 180, y: -60 },
  //     object: "/images/home/Speed_Sensor.webp",
  //     url: "/products/speed-sensor"
  //   }
  // ]
}; 