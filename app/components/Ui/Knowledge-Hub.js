import React from "react";
import Image from "next/image";
import QuickLinks from "./QuickLinks";

export default function KnowledgeHub({imageSrc, imageAlt, tagline, title, description, quickLinks}){
  return (
    <div className="flex justify-start items-center lg:gap-20 flex-col lg:flex-row text-left gap-10">
      <Image 
        src={imageSrc} 
        alt={imageAlt} 
        className="w-full lg:w-2/5 h-[400px] rounded-[10px] object-cover" 
        width={500} 
        height={500} 
      />
      <div className="space-y-3 lg:w-1/2">
        <h5>{tagline}</h5>
        <h1>{title}</h1>
        <p>{description}</p>
        <QuickLinks quickLinks={quickLinks} />
      </div>
    </div>
  );
};

