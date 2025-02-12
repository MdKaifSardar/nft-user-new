// import Hero from "@/components/Hero";
// import HeroImage from "@/components/HeroImage";
// import Navbar from "@/components/Navbar";

import FeaturedNFT from "@/components/FeaturedNFT";
// import CardList from "@/components/CardList";
import SecondSection from "@/components/SecondSection";
import NftShowcase from "@/components/NftShowcase";
import NftGallery from "@/components/NftGallery";

export default function Home() {
  return (
    <div className="w-full">
      {/* <HeroImage/> */}
      <SecondSection />
      {/* <CardList /> */}
      <FeaturedNFT />
      <NftShowcase />
      <NftGallery />
    </div>
  );
}
