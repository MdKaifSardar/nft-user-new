import cards from "@/utils/NftCard";
import React from "react";
import Card from "../CardComponent";

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
