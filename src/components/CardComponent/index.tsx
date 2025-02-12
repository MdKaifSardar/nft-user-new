import React from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  text: string;
  likes: number;
  comments: number;
}

const Card: React.FC<CardProps> = ({ image, title, text, likes, comments }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-80 transition-transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
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

export default Card;
