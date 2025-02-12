import React from "react";
import Image from "next/image";
import NftShowImages from "@/utils/NftShow";

const NftShowcase: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 h-screen max-w-7xl mx-auto">
      {/* NFT Cards */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 min-h-[300px] md:min-h-[500px]">
        {/* Background Images */}
        <div className="absolute left-[50%] top-[10%] -translate-x-[50%] md:right-[55%] md:top-[15%] scale-75 md:scale-90 opacity-75">
          <Image
            src={NftShowImages[0].image}
            alt="NFT 1"
            width={200}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="relative z-10">
          <Image
            src={NftShowImages[1].image}
            alt="NFT 2"
            width={280}
            height={280}
            className="rounded-xl shadow-xl"
          />
        </div>

        <div className="absolute left-[50%] bottom-[10%] -translate-x-[50%] md:left-[55%] md:bottom-[-20%] scale-75 md:scale-90 opacity-75">
          <Image
            src={NftShowImages[2].image}
            alt="NFT 3"
            width={200}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-8 md:mt-0 w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          RESERVE AND SELL YOUR NFT EASILY
        </h2>
        <p className="text-gray-600 mt-3">
          Earning income in TreasureNFT is simple: just RESERVE and then TRADE
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
