import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


const Page = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Section - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-[#f3f6fb]">
        <Image
          src="/images/computer-security-with-login-password-padlock.jpg"
          alt="Login Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center h-screen bg-white px-8 md:px-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <h1 className="text-3xl font-bold text-[#004274] text-center">BeezInfo</h1>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Welcome Back</h2>
          <p className="text-gray-500 mb-6 text-center">
            Please enter your details to sign in.
          </p>

          {/* Input fields */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone or Email address"
              className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-[#004274]"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-[#004274]"
            />
          </div>

          {/* Button */}
          <button className="bg-[#004274] hover:bg-[#003259] text-white w-full py-3 rounded-lg font-medium transition">
            Continue
          </button>

          {/* Footer text */}
          <p className="text-xs text-gray-400 mt-8 text-center">
            Join the millions of users who trust BeezInfo to manage their data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
