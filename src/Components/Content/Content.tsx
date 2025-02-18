import React from 'react';
import { cards } from '../Data/Data';  // Mengimpor data dari data.tsx

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col px-4">
      {/* Teks di pojok kiri atas */}
      <p className="text-lg font-semibold mt-10 mb-8">Apa yang Anda ingin cari ?</p>

      {/* Grid 8 Kolom per Baris */}
      <div className="grid grid-cols-8 gap-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full h-24 rounded-lg overflow-hidden shadow-lg transform"
          >
            <img
              src={`/${card.image}`}  // Path gambar di dalam public
              alt={card.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white opacity-10"></div>
            <p className="absolute bottom-0 left-0 p-2 text-black font-bold">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
