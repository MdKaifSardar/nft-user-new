import { BigNftImage } from "@/utils/NftShow";
import React from "react";
import Image from "next/image";

const NftShowcase: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8 h-screen w-full mx-auto">
      {/* NFT Image */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 h-fit">
        <Image
          src={BigNftImage}
          alt="NFT Showcase"
          width={400}
          height={400}
          className=" w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="mt-8 md:mt-0 w-full md:w-1/2 text-center md:text-right">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          RESERVE AND SELL YOUR NFT EASILY
        </h2>
        <p className="text-gray-600 mt-3">
          Earning income in JEONFT is simple: just RESERVE and then TRADE
          to EARN
        </p>
        <button className="mt-5 bg-gradient-to-r from-blue-400 to-pink-300 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-transform hover:scale-105">
          SIGN UP NOW
        </button>
      </div>
    </section>
  );
};

export default NftShowcase;
