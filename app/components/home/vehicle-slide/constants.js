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
        image: "/images/home/icbike.webp",
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
  },
  {
    id: 3,
    title: "Engine",
    image: "/images/home/gen-image.webp",
    alt: "Engine",
    background: "IC",
    variants: {
      EV: {
        image: "/images/home/generators.webp",
        hotspots: "IC_EV"
      },
      IC: {
        image: "/images/home/icbike.webp",
        hotspots: "IC_IC"
      }
    }
  }
];

export const VEHICLE_HOTSPOTS = {
  "2W_IC": [
    {
      label: "5-inch Color LCD Instrument Cluster",
      marker_x: 120, marker_y: 40,
      start_point: { x: 0, y: 0 },
      mid_point: { x: -50, y: -20 },
      end_point: { x: -150, y: -20 },
      canvas_position: { x: -178, y: 10 },
      object: "/images/Products/front-cluster.webp",
      url: "/Product/5-color-lcd-Instrument-cluster"
    },
    {
      label: "Throttle Position Sensor",
      marker_x: 230, marker_y: 180,
      start_point: { x: 0, y: 0 }, // start at marker location
      mid_point: { x: -40, y: -50 },
      end_point: { x: -225, y: -50 },
      canvas_position: { x: -250, y: -50 },
      object: "/images/Products/track-tps.webp",
      url: "/Product/throttle-position-sensor"
    },
    {
      label: "ISG Controller",
      marker_x: 190, marker_y: 180,
      start_point: { x: 0, y: 0 }, // start at marker location
      mid_point: { x: -40, y: -50 },
      end_point: { x: -225, y: -50 },
      canvas_position: { x: -250, y: -50 },
      object: "/images/Products/ISG_Controller.webp",
      url: "/Product/isg-machine-controller"
    },
    {
      label: "ACG",
      marker_x: 200, marker_y: 215,
      start_point: { x: 0, y: 0 }, // start at marker location
      mid_point: { x: -40, y: -50 },
      end_point: { x: -225, y: -50 },
      canvas_position: { x: -250, y: -50 },
      object: "/images/Products/ac-generator.webp",
      url: "/Product/ac-generator"
    },
    {
      label: "Temperature Sensor",
      marker_x: 235, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: 90 },
      end_point: { x: 270, y: 90 },
      canvas_position: { x: 330, y: 70 },
      object: "/images/Products/temparture_sensor.webp",
      url: "/Product/temperature-sensor"
    },
    {
      label: "Gear Position Sensor",
      marker_x: 275, marker_y: 225,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: 60 },
      end_point: { x: 270, y: 60 },
      canvas_position: { x: 330, y: 30 },
      object: "/images/Products/gear-position-sensor.png",
      url: "/Product/temperature-sensor"
    },
    {
      label: "TMPS Sensor",
      marker_x: 430, marker_y: 205,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 180, y: 0 },
      canvas_position: { x: 250, y: 0 },
      object: "/images/Products/tpms-sensor.png",
      url: "/Product/tpms-sensor"
    },
    {
      label: "Electronic Fuel Injection ECU",
      marker_x: 375, marker_y: 100,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 180, y: 0 },
      canvas_position: { x: 250, y: 0 },
      object: "/images/Products/Electronics_Fuel_Injection.webp",
      url: "/Product/electronic-fuel-injection"
    },
    {
      label: "ABS - Wheel Speed Sensor",
      marker_x: 110, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -175, y: 0 },
      canvas_position: { x: -200, y: 10 },
      object: "/images/Products/Speed_Sensor-2-wire.webp",
      url: "/Product/speed-sensor"
    },
    // {
    //   label: "AC Generator",
    //   marker_x: 280, marker_y: 210,
    //   start_point: { x: 0, y: 0 },
    //   mid_point: { x: 100, y: -120 },
    //   end_point: { x: 200, y: -120 },
    //   canvas_position: { x: 270, y: -120 },
    //   object: "/images/Products/ac-generator.webp",
    //   url: "/Product/ac-generator"
    // },
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
      marker_x: 330, marker_y: 158,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 180, y: 0 },
      canvas_position: { x: 250, y: 0 },
      object: "/images/home/BLDC.webp",
      url: "/Product/bldc-controller"
    },
    {
      label: "7.4-inch-tft-instrument cluster",
      marker_x: 220, marker_y: 40,
      start_point: { x: 0, y: 0 },
      mid_point: { x: -50, y: -20 },
      end_point: { x: -150, y: -20 },
      canvas_position: { x: -178, y: 10 },
      object: "/images/home/cluster.png",
      url: "/Product/instrument-cluster"
    },
    {
      label: "ABS - Wheel Speed Sensor",
      marker_x: 110, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/Speed_Sensor-2-wire.webp",
      url: "/Product/speed-sensor"
    },
    {
      label: "TPMS Sensor",
      marker_x: 375, marker_y: 220,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 180, y: 0 },
      canvas_position: { x: 250, y: 0 },
      object: "/images/Products/tpms-sensor.png",
      url: "/Product/tpms-sensor"
    },
    {
      label: "DC - DC Converter",
      marker_x: 140, marker_y: 140,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/dc-convetor.webp",
      url: "/Product/dc-dc-converter(non-isolated)"
    },
    {
      label: "Motor",
      marker_x: 300, marker_y: 205,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -30 },
      end_point: { x: 150, y: -30 },
      canvas_position: { x:224, y: -20 },
      object: "/images/Products/Motor.png",
      url: "/Products-Solutions"
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
    // {
    //   label: "Dual Track TPS",
    //   marker_x: 120, marker_y: 90,
    //   start_point: { x: 0, y: 0 },
    //   mid_point: { x: 50, y: -40 },
    //   end_point: { x: 150, y: -40 },
    //   canvas_position: { x: 220, y: -40 },
    //   object: "/images/Products/track-tps.webp",
    //   url: "/Product/dual-track-tps"
    // },
    {
      label: "Reverse Parking Sensor",
      marker_x: 480, marker_y: 175,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 60, y: -60 },
      end_point: { x: 110, y: -60 },
      canvas_position: { x: 180, y: -60 },
      object: "/images/Products/reverse-parking.webp",
      url: "/Product/reverse-parking-assist-system"
    },
    {
      label: "ABS - Wheel Speed Sensor",
      marker_x: 40, marker_y: 250,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/Speed_Sensor-2-wire.webp",
      url: "/Product/speed-sensor"
    },
    {
      label: "Temperature Sensor",
      marker_x: 300, marker_y: 200,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 50, y: -110 },
      end_point: { x: 150, y: -150 },
      canvas_position: { x: 225, y: -150 },
      object: "/images/Products/temparture_sensor.webp",
      url: "/Product/temperature-sensor"
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
      marker_x: 360, marker_y: 250,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 200, y: 0 },
      canvas_position: { x: 275, y: 0 },
      object: "/images/Products/tpms-sensor.png",
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
      label: "Reverse Parking Sensor",
      marker_x: 445, marker_y: 145,
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
      label: "ABS - Wheel Speed Sensor",
      marker_x: 78, marker_y: 160,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -100, y: 0 },
      canvas_position: { x: -125, y: 10 },
      object: "/images/Products/Speed_Sensor-2-wire.webp",
      url: "/Product/speed-sensor"
    },
    // {
    //   label: "Oil Level Sensor",
    //   marker_x: 110, marker_y: 130,
    //   start_point: { x: 0, y: 0 },
    //   mid_point: { x: -60, y: 60 },
    //   end_point: { x: -100, y: 60 },
    //   canvas_position: { x: -127, y: 60 },
    //   object: "/images/Products/oil_lvl_sensor.webp",
    //   url: "/Product/oil-level-sensor"
    // },
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
      marker_x: 160, marker_y: 150,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -173, y: 0 },
      canvas_position: { x: -200, y: 10 },
      object: "/images/Products/oil_lvl_sensor.webp",
      url: "/Product/oil-level-sensor"
    },
    {
      label: "Crank / CAM Sensor",
      marker_x: 110, marker_y: 135,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -130, y: 0 },
      canvas_position: { x: -155, y: 10 },
      object: "/images/Products/crank_cam_sensor.webp",
      url: "/Product/speed-sensors-crank-sensors"
    },
    // {
    //   label: "Multi Functional ECU'S",
    //   marker_x: 300, marker_y: 120,
    //   start_point: { x: 0, y: 0 },
    //   mid_point: { x: 100, y: -70 },
    //   end_point: { x: 200, y: -70 },
    //   canvas_position: { x: 275, y: -30 },
    //   object: "/images/Products/",
    //   url: ""
    // },
    {
      label: "Steering Angle Sensor",
      marker_x: 60, marker_y: 90,
      start_point: { x: 0, y: 0 },
      mid_point: { x: -60, y: -60 },
      end_point: { x: -90, y: -60 },
      canvas_position: { x: -120, y: -60 },
      object: "/images/Products/steering-angle.webp",
      url: "/Product/steering-angle-sensor"
    },
    {
      label: "TPMS Sensor",
      marker_x: 375, marker_y: 150,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 200, y: 0 },
      canvas_position: { x: 275, y: 0 },
      object: "/images/Products/tpms-sensor.png",
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
  "IC_IC": [
    {
      label: "AC Generator",
      marker_x: 130, marker_y: 170,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: -170, y: 0 },
      canvas_position: { x: -200, y: 10 },
      object: "/images/Products/ac-generator.webp",
      url: "/Product/ac-generator"
    },
    {
      label: "Temperature Sensor",
      marker_x: 235, marker_y: 170,
      start_point: { x: 0, y: 0 },
      mid_point: { x: -20, y: 70 },
      end_point: { x: -280, y: 70 },
      canvas_position: { x: -300, y: 70 },
      object: "/images/Products/temparture_sensor.webp",
      url: "/Product/temperature-sensor"
    },
    {
      label: "Oil Level Sensor",
      marker_x: 280, marker_y: 170,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 20, y: 60 },
      end_point: { x: 250, y: 60 },
      canvas_position: { x: 320, y: 60 },
      object: "/images/Products/oil_lvl_sensor.webp",
      url: "/Product/oil-level-sensor"
    },
    {
      label: "Control Panel",
      marker_x: 310, marker_y: 135,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 200, y: 0 },
      canvas_position: { x: 275, y: 10 },
      object: "/images/home/ControlPanel.webp",
      url: "/Product/control-panel"
    },
    {
      label: "Ignition Coil",
      marker_x: 325, marker_y: 180,
      start_point: { x: 0, y: 0 },
      mid_point: { x: 0, y: 0 },
      end_point: { x: 200, y: 0 },
      canvas_position: { x: 275, y: 0 },
      object: "/images/Products/ig-coil.jpg",
      url: "/Product/ignition-coil"
    }
  ]
}; 