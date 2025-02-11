import sunset from "../assets/images/image1.jpg";
import city from "../assets/images/image2.jpg";
import ocean from "../assets/images/image3.jpg";
import { StaticImageData } from "next/image";

interface CardData {
  image: string | StaticImageData;
  title: string;
  text: string;
  likes: number;
  comments: number;
}

const cards: CardData[] = [
  {
    image: sunset,
    title: "Beautiful Sunset",
    text: "A breathtaking sunset view from the mountains.",
    likes: 120,
    comments: 45,
  },
  {
    image: city,
    title: "City Lights",
    text: "The city shines bright with neon and streetlights.",
    likes: 95,
    comments: 30,
  },
  {
    image: ocean,
    title: "Ocean Breeze",
    text: "Feel the freshness of the ocean waves.",
    likes: 200,
    comments: 80,
  },
];

export default cards;
