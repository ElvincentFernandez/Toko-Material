import React, { useState } from "react";
import { data } from "../../../Data/Data"; // Pastikan path sesuai
import { Button } from "@mantine/core"; // Gunakan Button dari Mantine

const { cards } = data;

const Kategori: React.FC = () => {
  const [search, setSearch] = useState("");

  // Filter kategori berdasarkan input pencarian (hanya yang diawali dengan huruf input)
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().startsWith(search.toLowerCase()) // Hanya cocokkan dari awal kata
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Kategori Material</h1>

      {/* Input pencarian */}
      <input
        type="text"
        placeholder="Cari kategori..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full max-w-md mx-auto block mb-4"
      />

      {/* Grid kategori */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 justify-center max-w-fit mx-auto">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div
              key={index}
              className="relative w-32 h-32 bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              onClick={() => console.log("Klik pada ${card.name}")}
            >
              {/* Gambar kategori */}
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
              />

              {/* Nama kategori dalam Button di dalam gambar */}
              <Button className="absolute bottom-2 left-2 bg-transparent text-black font-bold border border-black text-xs py-1 px-3 rounded-full">
                {card.name}
              </Button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Kategori tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};

export default Kategori;
