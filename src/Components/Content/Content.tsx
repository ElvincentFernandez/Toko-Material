import React from 'react';

const cards = [
  'Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5', 'Image 6', 'Image 7', 'Image 8',
  'Image 9', 'Image 10', 'Image 11', 'Image 12', 'Image 13', 'Image 14', 'Image 15', 'Image 16'
];

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
              src={`https://via.placeholder.com/150?text=${card}`}
              alt={card}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <p className="absolute bottom-0 left-0 p-2 text-white font-bold">{card}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
