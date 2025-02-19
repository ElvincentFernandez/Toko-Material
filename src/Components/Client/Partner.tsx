import React from "react";
import { data } from "../Data/Data"; // Import data utama

const { partner } = data; // Ambil data 'partner'

const Partner: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Teks Partner */}
      <p className="text-3xl font-semibold mb-6">Partner Kami Yang Setia</p>

      {/* Logo Partner */}
      <div className="flex flex-wrap justify-center gap-4 px-4 w-full">
        {partner.map((item, index) => (
          <div key={index} className="w-24 h-24 flex items-center justify-center">
            <img
              src={`/${item.image}`} // Path gambar
              alt="Partner Logo"
              className="h-20 max-w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
