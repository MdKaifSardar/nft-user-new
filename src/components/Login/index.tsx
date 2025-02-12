import Image from "next/image";
import Link from "next/link";
import { signupImage } from "@/utils/Auth";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-between p-4 bg-gradient-to-r from-blue-200 to-green-200">
      {/* Left Section - Login Form */}
      <div className="w-full md:w-[70%] p-6 bg-transparent rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Login
        </h2>
        <form className="flex flex-col justify-center items-center space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-white focus:ring-2 font-semibold focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-white focus:ring-2 font-semibold focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          <button className="w-fit bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 shadow-md">
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-white text-center mt-4">
          Dont have an account?{" "}
          <Link href="/signup" className="text-blue-300 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>

      {/* Right Section - Login Image */}
      <div className="md:flex hidden w-full justify-center">
        <Image
          src={signupImage}
          alt="Login Illustration"
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
