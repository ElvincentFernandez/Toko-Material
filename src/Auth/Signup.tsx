import { useState } from "react";
import { FaFacebookF, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image Fullscreen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/mandiri.png')" }}
      ></div>

      {/* Overlay agar konten tetap terlihat */}
      <div className="relative bg-white p-8 rounded-2xl shadow-lg w-96 z-10">
        <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700">Create Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-gray-500 text-lg cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-gray-500 text-lg cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <a href="#" className="text-blue-500 font-semibold text-sm block mb-4">
            Forget password?
          </a>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-2 rounded-full font-semibold cursor-pointer"
            disabled
          >
            Sign Up
          </button>
        </form>

        {/* Social Login */}
        <div className="flex justify-center gap-4 my-6">
          <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full cursor-pointer">
            <FaFacebookF className="text-blue-600 w-6 h-6" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full cursor-pointer">
            <FaApple className="text-black w-6 h-6" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full cursor-pointer">
            <img 
              src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" 
              alt="Google Logo" 
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
