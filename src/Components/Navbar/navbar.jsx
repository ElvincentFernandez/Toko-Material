import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold font-poppins">Mandiri Steel</h1>
        
        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md text-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-50 font-poppins"
          />
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 font-poppins">
          <li>
            <a href="#" className="text-white hover:text-gray-200 transition">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200 transition">
              Wishlist
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200 transition">
              Keranjang
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
