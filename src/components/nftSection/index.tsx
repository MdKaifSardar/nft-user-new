import cards from "@/utils/nftCard";
import React from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CardProps {
  image: string | StaticImageData;
  title: string;
  text: string;
  likes: number;
  comments: number;
}

const Card: React.FC<CardProps> = ({ image, title, text, likes, comments }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-72">
      <Image
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
        width={500}
        height={300}
      />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{text}</p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2 text-gray-700">
          <FaHeart className="text-red-500 w-5 h-5" />
          <span className="text-sm font-semibold">{likes}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <FaComment className="text-blue-500 w-5 h-5" />
          <span className="text-sm font-semibold">{comments}</span>
        </div>
      </div>
    </div>
  );
};

const CardList: React.FC = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap p-6 bg-gray-100 min-h-screen">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
