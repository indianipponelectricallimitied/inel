"use client"
// components/Map.js
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import Image from "next/image";

import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

// Create a singleton loader instance

const loader = new Loader({
  apiKey: "",
  version: "weekly",
  libraries: ["places"],
});

const Map = () => {
  const mapRef = useRef(null);
  const markers = useRef([]);
  const mapInstance = useRef(null);
  const infoWindow = useRef(null);

  // Set Tech Center as active by default
  const [selectedPlace, setSelectedPlace] = useState({
    id: 0,
    name: "Tech Center",
    address: "SIPCOT Industrial Complex, Plot No-137, Phase-1, Hosur, Tamil Nadu 635126",
    position: { lat: 13.0827, lng: 80.2707 },
    phone: "+91-4347-230273",
    email: " inelcorp@inel.co.in",
    image: "/images/contact-us/Registered-Office.png"
  });

  // Define places with their details, with Tech Center having active: true
  const places = [
    {
      id: 0,
      name: "Tech Center",
      address: "SIPCOT Industrial Complex, Plot No-137, Phase-1, Hosur, Tamil Nadu 635126",
      position: { lat: 13.0827, lng: 80.2707 },
      phone: "+91-4347-230273",
      email: " inelcorp@inel.co.in",
      image: "/images/contact-us/techcentre.svg",
      active: true
    },
    {
      id: 1,
      name: "Plant-I Hosur",
      address: "Hosur-Thali Road Unnamalai Hosur 635 114 Krishnagiri District Tamil Nadu, India",
      position: { lat: 12.7409, lng: 77.8253 },
      phone: "+91-4347-230273",
      email: " inelcorp@inel.co.in",
      image: "/images/contact-us/Plant-I-Hosur.png",
      active: false
    },
    {
      id: 2,
      name: "Plant-II Pondicherry",
      address: "Madukkarai Road Nettapakkam Commune Kariamanickam Village Puducherry 605 106 India",
      position: { lat: 11.9416, lng: 79.8083 },
      phone: "+91-413-2697811",
      email: " inelcorp@inel.co.in",
      image: "/images/contact-us/Plant-II-Pondicherry.png",
      active: false
    },
    {
      id: 3,
      name: "Plant-III Rewari",
      address: "Masani Village Rewari 122106 Haryana State India",
      position: { lat: 28.1990, lng: 76.6194 },
      phone: "+91-1274-240860",
      email: " inelcorp@inel.co.in",
      image: "/images/contact-us/Plant-III-Rewari.png",
      active: false
    }
  ];

  const createCustomInfoWindow = (place) => {
    return `
      <div class="bg-white rounded-[10px] shadow-lg max-w-[320px]">
        <img src="${place.image}" alt="${place.name}" style="height:150px; width:100%; object-fit:cover; border-radius:10px;" />
        <div class="space-y-3 p-5">
          <h2 class="text-lg text-primary font-medium">${place.name}</h2>
          <p class="flex items-center gap-4 text-sm">
            <span class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg></span>
            ${place.address}
          </p>
          <p class="flex items-center gap-4 text-sm">
            <span class="text-md"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg></span>
            ${place.phone}
          </p>
          <p class="flex items-center gap-4 text-sm">
            <span class="text-lg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path></svg></span>
            ${place.email}
          </p>
        </div>
      </div>
    `;
  };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    if (mapInstance.current) {
      mapInstance.current.panTo(place.position);
      mapInstance.current.setZoom(15);

      // Close existing info window if open
      if (infoWindow.current) {
        infoWindow.current.close();
      }

      infoWindow.current = new google.maps.InfoWindow({
        content: createCustomInfoWindow(place),
        position: place.position,
        maxWidth: 320
      });

      infoWindow.current.open(mapInstance.current);
    }
  };

  // Initialize the map and add markers
  useEffect(() => {
    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 20.5937, lng: 78.9629 }, // Center of India
        zoom: 5,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
        disableDefaultUI: true,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      mapInstance.current = map;

      // Create markers for each place
      markers.current = places.map((place) => {
        const marker = new google.maps.Marker({
          position: place.position,
          map,
          title: place.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#160959',
            fillOpacity: 1,
            strokeColor: '#16095994',
            strokeWeight: 15,
          }
        });

        // Add click event to marker
        marker.addListener("click", () => {
          handlePlaceClick(place);
        });

        return marker;
      });

      // Add MarkerClusterer
      new MarkerClusterer({ markers: markers.current, map });

      // On initial load, open info window for Tech Center (active: true)
      const techCenter = places.find((p) => p.active);
      if (techCenter) {
        setSelectedPlace(techCenter);
        // Center and zoom to Tech Center
        map.panTo(techCenter.position);
        map.setZoom(15);

        // Close existing info window if open
        if (infoWindow.current) {
          infoWindow.current.close();
        }

        infoWindow.current = new google.maps.InfoWindow({
          content: createCustomInfoWindow(techCenter),
          position: techCenter.position,
          maxWidth: 320
        });

        infoWindow.current.open(map);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rounded-[20px] flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col justify-center bg-[#F2F2F2] md:h-[640px]  w-full lg:w-2/6 rounded-t-[20px]  lg:rounded-l-[20px] lg:rounded-tr-none p-4 space-y-4 overflow-y-auto">
        {places.map((place) => (
          <div 
            key={place.id} 
            className={`flex flex-row items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#E3E9FF] ${
              selectedPlace?.id === place.id ? 'bg-[#E3E9FF]' : ''
            }`}
            onClick={() => handlePlaceClick(place)}
          >
            <div className="flex-1 pr-4">
              <p className="text-primary text-xl font-semibold">{place.name}</p>
              <p className="text-gray-600 text-xs mt-1">{place.address}</p>
            </div>
            <Image 
              src={place.image} 
              alt={place.name} 
              width={300} 
              height={200} 
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[100px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div id="map" ref={mapRef} className="rounded-b-[20px] lg:rounded-r-[20px] lg:rounded-bl-none h-[640px] w-full lg:w-4/6" />
    </div>
  );  
};

export default Map;
