export const VEHICLE_TYPES = [
  {
    id: 0,
    title: "2 Wheeler",
    image: "/images/home/vehicle-(4).png",
    alt: "2 Wheeler",
    background: "2W"
  },
  {
    id: 1,
    title: "Commercial",
    image: "/images/home/vehicle-(2).png",
    alt: "Snow Mobile",
    background: "4W"
  },
  {
    id: 2,
    title: "3 Wheeler",
    image: "/images/home/vehicle-(1).png",
    alt: "3 Wheeler",
    background: "3W"
  },
  {
    id: 3,
    title: "EV",
    image: "/images/home/f77.png",
    alt: "EV",
    background: "EV"
  }
];

export const VEHICLE_HOTSPOTS = {
  "2W": [
    { label: " LCD Digital Instrument Cluster", x: 410, y: 5, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: 173,
        y: 55,
      },

      line_position: {
        x: -66,
        y: 30,
        width: 400,
      },

      linepath: `
        <svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
      <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
      <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>


      `,
     },
    { label: "  7.4 Inch TFT Instrument ", x: 390, y: 35, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: -483,
        y: 60,
      },

      line_position: {
        x: -326,
        y: 40,
        width: 200,
      },

      linepath: `
         <svg width="166" height="5" viewBox="0 0 166 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="163.5" cy="2.5" r="2" fill="black" stroke="black"/>
          <path d="M163 2.5H0" stroke="black"/>
          </svg>
      `,
     },
     { label: "Cluster Front Facia", x: 430, y: 70, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: 260,
        y: 187,
      },

      line_position: {
        x: 0,
        y: 120,
        width: 500,
      },

      linepath: `
        <svg width="504" height="253" viewBox="0 0 504 253" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L165 250.5H503.5" stroke="black"/>
        <circle cx="165.5" cy="250" r="2" fill="black" stroke="black"/>
        <circle cx="2.5" cy="2.5" r="2" fill="black" stroke="black"/>
        </svg>
      `,
     },

  ],
  "4W": [
    { label: "TPMS Graphical LCD Unit", x: 412, y: 25, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: 183,
        y: -10,
      },

      line_position: {
        x: -60,
        y: -20,
        width: 400,
      },

      linepath: `
        <svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
      <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
      <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>
      `,
     },
     { label: "Control Panel", x: 412, y: 25, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: -483,
        y: 60,
      },

      line_position: {
        x: -326,
        y: 40,
        width: 200,
      },

      linepath: `
         <svg width="166" height="5" viewBox="0 0 166 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="163.5" cy="2.5" r="2" fill="black" stroke="black"/>
          <path d="M163 2.5H0" stroke="black"/>
          </svg>
      `,
     },
  ],



// 3 whelaer 

  "3W": [
    { label: "Flywheels", x: 422, y:115, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: 233,
        y: 55,
      },

      line_position: {
        x: -10,
        y: 50,
        width: 400,
      },

      linepath: `
        <svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
      <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
      <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>


      `,
     },
    { label: "Ddigital/analog CDI/TCI", x: 412, y: 65, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: -525,
        y: 160,
      },

      line_position: {
        x: -326,
        y: 140,
        width: 250,
      },

      linepath: `
         <svg width="304" height="5" viewBox="0 0 304 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="301.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M301 2.5L0 3" stroke="black"/>
        </svg>
      `,
     },
    { label: "regulators/rectifiers, and ignition coils", x: -302, y: 20, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: 37,
        y: 60,
      },

      line_position: {
        x: 226,
        y: 40,
        width: 300,
      },

      linepath: `
        <svg width="282" height="142" viewBox="0 0 282 142" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M279 139.5L247.5 3H0.5" stroke="black"/>
        <circle cx="247.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <circle cx="279.5" cy="139.5" r="2" fill="black" stroke="black"/>
        </svg>
      `,
     },
   
  ],



  "EV": [
    { label: "BLDC Motor", x: 412, y: 25, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: 233,
        y: 55,
      },

      line_position: {
        x: -10,
        y: 50,
        width: 400,
      },

      linepath: `
        <svg width="340" height="64" viewBox="0 0 340 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 61.5L46.5 2H340" stroke="black"/>
      <circle cx="47" cy="2.5" r="2" fill="black" stroke="black"/>
      <circle cx="2.5" cy="61.5" r="2" fill="black" stroke="black"/>
      </svg>


      `,
     },
    { label: "DC Converter", x: 412, y: 25, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: -525,
        y: 160,
      },

      line_position: {
        x: -326,
        y: 140,
        width: 250,
      },

      linepath: `
         <svg width="304" height="5" viewBox="0 0 304 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="301.5" cy="2.5" r="2" fill="black" stroke="black"/>
        <path d="M301 2.5L0 3" stroke="black"/>
        </svg>
      `,
     },
  ],
}; 