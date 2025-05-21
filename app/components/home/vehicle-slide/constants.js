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
    title: "Off Road",
    image: "/images/home/vehicle-(3).png",
    alt: "ATV",
    background: "ATV"
  }
];

export const VEHICLE_HOTSPOTS = {
  "2W": [
    { label: "BLDC Motor Controller", x: 412, y: 25, object: "/Electronic_ai.glb",
      
      canvas_position: {
        x: 184,
        y: 15,
      },

      line_position: {
        x: 26,
        y: 50,
        width: 200,
      },

      linepath: `
          <svg width="324" height="292" viewBox="0 0 324 292" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 287.5L146.5 2.5H323.5" stroke="black"/>
    <circle cx="146.5" cy="2.5" r="2" fill="black" stroke="black"/>
    <circle cx="2.5" cy="289.5" r="2" fill="black" stroke="black"/>
    </svg>
      `,
     },

  ],
  "4W": [
    { label: "BLDC Motor Controller", x: 20, y: 30, object: "/Electronic_ai.glb" },
  ],
  "3W": [
    { label: "BLDC Motor Controller", x: 20, y: 30, object: "/Electronic_ai.glb" },
  ],
  "ATV": [
    { label: "BLDC Motor Controller", x: 20, y: 30, object: "/Electronic_ai.glb" },
  ],
}; 