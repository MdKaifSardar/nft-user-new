import React from "react";
import { FaChartBar, FaChartPie } from "react-icons/fa";

const SecondSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#ebebeb] via-[#dbfffc] to-[#ffebf6] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            EXPLORE, DISCOVER AND EARN BIG WITH ONE OF THE TOP WEB3 NFT
            MARKETPLACES IN THE WORLD
          </h1>
        </div>

        {/* Features Section */}
        <div className="flex flex-col gap-6 max-w-lg">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <FaChartBar className="w-10 h-10 text-gray-700" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Multi-Reward
              </h3>
              <p className="text-gray-700">
                TreasureNFT leverages a proprietary AI-powered algorithmic
                trading model, and provides a dual earnings mechanism with
                trading rewards as well as referral rewards.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <FaChartPie className="w-10 h-10 text-gray-700" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Earn Future Value
              </h3>
              <p className="text-gray-700">
                TreasureNFT reduces transaction costs and increases trading
                efficiency, ensuring better returns for users in the long run.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
