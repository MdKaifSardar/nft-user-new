import React from "react";
import Image from "next/image";
import { nfts } from "@/utils/NftGallery";

const filters = ["Stake", "PolygonNFT", "Art", "Collectibles"];

const NftGallery: React.FC = () => {
  return (
    <section className="px-6 py-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6">
        DISCOVER MORE NFTS
      </h2>

      {/* Filters */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              filter === "Stake"
                ? "bg-blue-200 text-blue-800"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {filter}
          </button>
        ))}
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full flex items-center gap-2">
          <span>All Filters</span> <span>⚙️</span>
        </button>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="flex flex-col justify-center items-center bg-white p-4 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            <div className="relative">
              <Image
                src={nft.image}
                alt={`NFT ${nft.id}`}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <span className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">
                Stake
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">Stake_{nft.id}</h3>
            <p className="text-green-600 font-bold text-sm">{nft.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NftGallery;
