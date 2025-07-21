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
      label: "Cluster Front Facia",
      marker_x: 220, marker_y: 40,
      start_point: { x: 0, y: 0 }, // start at marker location
      mid_point: { x: 50, y: -40 },
      end_point: { x: 150, y: -40 },
      canvas_position: { x: 150, y: -40 },
      object: "/images/Products/front-cluster.webp",
      url: "/Product/cluster-front-facia"
    },
    {
      label: "Throttle Position Sensor",
      marker_x: 200, marker_y: 80,
      start_point: { x: 0, y: 0 }, // start at marker location
      mid_point: { x: 0, y: 0 },
      end_point: { x: -150, y: 10 },
      canvas_position: { x: -160, y: -10 },
      object: "/images/Products/throttle-body-sensors.webp",
      url: "/Product/throttle-body-with-sensors"
    },
    {
      label: "BLDC Motor Controller",
      marker_x: 310, marker_y: 198,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: 90 },
      end_point: { x: 180, y: 100 },
      canvas_position: { x: 250, y: 100 },
      object: "/images/home/BLDC.webp",
      url: "/products/bldc-controller"
    },
    {
      label: "TMPS Sensor",
      marker_x: 375, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 180, y: 0 },
      canvas_position: { x: 250, y: 0 },
      object: "/images/Products/tpms-sensor.webp",
      url: "/Product/tpms-sensor"
    },
    {
      label: "Speed Sensor - Wire Type",
      marker_x: 110, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/Speed_Sensor-2-Wire.webp",
      url: "/Product/speed-sensor"
    },{
      label: "AC Generator",
      marker_x: 280, marker_y: 210,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 20, y: -120 },
      end_point: { x: 170, y: -150 },
      canvas_position: { x: 220, y: -180 },
      object: "/images/Products/ac-generator.webp",
      url: "/Product/ac-generator"
    },
    // {
    //   label: "Ignition Coil",
    //   marker_x: 250, marker_y: 210,
    //   start_point: { x: 0, y: 0 },
    //   mid_point: { x: 20, y: 100 },
    //   end_point: { x: 170, y: 100 },
    //   canvas_position: { x: 240, y: 100 },
    //   object: "/images/Products/ac-generator.webp",
    //   url: "/Product/ac-generator"
    // }
    
  ],
  "2W_EV": [
    {
      label: "BLDC Motor Controller",
      marker_x: 310, marker_y: 198,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -60 },
      end_point: { x: 180, y: -60 },
      canvas_position: { x: 250, y: -60 },
      object: "/images/home/BLDC.webp",
      url: "/product/bldc-controller"
    },
    {
      label: "7.4-inch-tft-instrument cluster",
      marker_x: 220, marker_y: 40,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -40 },
      end_point: { x: 150, y: -40 },
      canvas_position: { x: 225, y: -20 },
      object: "/images/home/cluster.png",
      url: "/Product/instrument-cluster"
    },
    {
      label: "Speed Sensor - Wire Type",
      marker_x: 110, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/Speed_Sensor-2-Wire.webp",
      url: "/Product/speed-sensor"
    },
    {
      label: "TPMS Sensor",
      marker_x: 375, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 180, y: 0 },
      canvas_position: { x: 250, y: 0 },
      object: "/images/Products/tpms-sensor.webp",
      url: "/Product/tpms-sensor"
    },

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
      url: "/Product/7.4-tft-instrument-cluster"
    },
    {
      label: "Dual Track TPS",
      marker_x: 120, marker_y: 90,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -40 },
      end_point: { x: 150, y: -40 },
      canvas_position: { x: 220, y: -40 },
      object: "/images/Products/track-tps.webp",
      url: "/Product/dual-track-tps"
    },
    {
      label: "Reverse Parking Assist System",
      marker_x: 480, marker_y: 175,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -60 },
      end_point: { x: 110, y: -60 },
      canvas_position: { x: 180, y: -60 },
      object: "/images/Products/reverse-parking.webp",
      url: "/Product/reverse-parking-assist-system"
    },
    {
      label: "Speed Sensor - Wire Type",
      marker_x: 40, marker_y: 250,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/Speed_Sensor-2-Wire.webp",
      url: "/product/bldc-controller"
    },
    {
      label: "Temperature Sensor",
      marker_x: 300, marker_y: 200,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -110 },
      end_point: { x: 150, y: -150 },
      canvas_position: { x: 225, y: -150 },
      object: "/images/Products/temparture_sensor.webp",
      url: "/product/control-panel"
    },
    // {
    //   label: "Ignition coil",
    //   marker_x: 230, marker_y: 220,
    //   start_point: { x: 0, y: 0 },
    //   mid_point: { x: 20, y: -90 },
    //   end_point: { x: 100, y: -200 },
    //   canvas_position: { x: 170, y: -200 },
    //   object: "/images/home/ControlPanel.webp",
    //   url: "#"
    // },
    {
      label: "AC Generator",
      marker_x: 270, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 20, y: -90 },
      end_point: { x: 170, y: -150 },
      canvas_position: { x: 220, y: -180 },
      object: "/images/Products/ac-generator.webp",
      url: "/Product/ac-generator"
    },
    {
      label: "TPMS Sensor",
      marker_x: 350, marker_y: 250,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 200, y: -10 },
      canvas_position: { x: 275, y: 0 },
      object: "/images/Products/tpms-sensor.webp",
      url: "/Product/tpms-sensor"
    }
    
  ],
  // "3W_EV": [
  //   {
  //     label: "DC DC Converter",
  //     marker_x: 430, marker_y: 65,
  //     start_point: { x: 0, y: 0 },
  //     mid_point: { x: 50, y: -60 },
  //     end_point: { x: 150, y: -60 },
  //     canvas_position: { x: 150, y: -60 },
  //     object: "/images/home/dc-dc-iso.png",
  //     url: "/products/dc-converter"
  //   },
  //   {
  //     label: "BLDC Motor Controller",
  //     marker_x: 460, marker_y: 158,
  //     start_point: { x: 0, y: 0 },
  //     mid_point: { x: 60, y: -60 },
  //     end_point: { x: 180, y: -60 },
  //     canvas_position: { x: 180, y: -60 },
  //     object: "/images/home/BLDC.webp",
  //     url: "/products/bldc-controller"
  //   }
  // ],
  "CC_IC": [
    {
      label: "Reverse Parking Assist System - Sensors",
      marker_x: 445, marker_y: 155,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 150, y: 0 },
      canvas_position: { x: 220, y: 0 },
      object: "/images/Products/reverse-parking.webp",
      url: "/Product/reverse-parking-assist-system"
    },
    // {
    //   label: "Fuel Vapor Purge (FVP)",
    //   marker_x: 412, marker_y: 150,
    //   start_point: { x: 0, y: 0 },
    //   mid_point: { x: 60, y: -60 },
    //   end_point: { x: 180, y: -60 },
    //   canvas_position: { x: 180, y: -60 },
    //   object: "/images/home/Fuel_Vapor_Purge.webp",
    //   url: "/product/fuel-vapor-purge"
    // },
    {
      label: "Speed Sensor - Wire Type",
      marker_x: 97, marker_y: 183,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/Speed_Sensor-2-Wire.webp",
      url: "/product/bldc-controller"
    },
    {
      label: "Oil Level Sensor",
      marker_x: 110, marker_y: 140,
      start_point: { x: 0, y: 0 },
      mid_point: { x: -60, y: 100 },
      end_point: { x: -100, y: 100 },
      canvas_position: { x: -127, y: 120 },
      object: "/images/Products/oil_lvl_sensor.webp",
      url: "/Product/oil-level-sensor"
    },
    // {
    //   label: "Multi-Function",
    //   marker_x: 135, marker_y: 133,
    //   start_point: { x: 0, y: 0 },
    //   mid_point: { x: 100, y: -190 },
    //   end_point: { x: 330, y: -200 },
    //   canvas_position: { x: 400, y: -155 },
    //   object: "/images/Products/Speed_Sensor-2-Wire.webp",
    //   url: "#"
    // },
    {
      label: "Oil Level Sensor",
      marker_x: 70, marker_y: 135,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/oil_lvl_sensor.webp",
      url: "/Product/oil-level-sensor"
    },
    {
      label: "Crank / CAM Sensor",
      marker_x: 40, marker_y: 125,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/crank_cam_sensor.webp",
      url: "/Product/speed-sensors-crank-sensors"
    },
    {
      label: "Steering Angle Sensor",
      marker_x: 60, marker_y: 100,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -100 },
      end_point: { x: 140, y: -130 },
      canvas_position: { x: 210, y: -145 },
      object: "/images/Products/steering-angle.webp",
      url: "/Product/steering-angle-sensor"
    },
    {
      label: "TPMS Sensor",
      marker_x: 365, marker_y: 180,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 200, y: -10 },
      canvas_position: { x: 275, y: 0 },
      object: "/images/Products/tpms-sensor.webp",
      url: "/Product/tpms-sensor"
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