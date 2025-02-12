import Image from "next/image";
import { signupImage } from "@/utils/Auth";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-between p-4 bg-gradient-to-r from-blue-200 to-green-200">
      {/* Left Section - Signup Form */}
      <div className="w-full md:w-[70%] p-6 bg-transparent rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Sign Up
        </h2>
        <form className="flex flex-col justify-center items-center space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-white focus:ring-2 font-semibold focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-white focus:ring-2 font-semibold focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-white focus:ring-2 font-semibold focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-white focus:ring-2 font-semibold focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          <button className="w-fit bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 shadow-md">
            Sign Up
          </button>
        </form>
      </div>

      {/* Right Section - Signup Image */}
      <div className="md:flex hidden w-full justify-center">
        <Image
          src={signupImage}
          alt="Signup Illustration"
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
