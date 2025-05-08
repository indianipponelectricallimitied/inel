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
    { label: "BLDC Motor Controller", x: 15, y: 25, object: "/Electronic_ai.glb" },
    { label: "BLDC Motor Controller", x: 45, y: 35, object: "/Electronic_ai.glb" },
    { label: "BLDC Motor Controller", x: 75, y: 45, object: "/Electronic_ai.glb" },
  ],
  "4W": [
    { label: "BLDC Motor Controller", x: 20, y: 30, object: "/Electronic_ai.glb" },
    { label: "BLDC Motor Controller", x: 80, y: 60, object: "/Electronic_ai.glb" },
  ],
  "3W": [
    { label: "BLDC Motor Controller", x: 20, y: 30, object: "/Electronic_ai.glb" },
    { label: "BLDC Motor Controller", x: 80, y: 60, object: "/Electronic_ai.glb" },
  ],
  "ATV": [
    { label: "BLDC Motor Controller", x: 20, y: 30, object: "/Electronic_ai.glb" },
    { label: "BLDC Motor Controller", x: 80, y: 60, object: "/Electronic_ai.glb" },
  ],
}; 