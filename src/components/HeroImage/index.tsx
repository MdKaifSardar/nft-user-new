"use client"; // Ensure this is at the top for Next.js 13+

import React from "react";
import Image from "next/image";
import slide1 from "../assets/images/image1.jpg"; // Import only image1

const HeroImage: React.FC = () => {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src={slide1}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default HeroImage;
