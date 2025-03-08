import React, { useState } from "react";
import { data } from "../../../Data/Data"; // Data kategori tetap dari file ini
import { Button } from "@mantine/core";

const { cards } = data; // Ambil data kategori dari Data.ts

const Kategori: React.FC = () => {
  const [search, setSearch] = useState(""); // State untuk pencarian
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [items, setItems] = useState<any[]>([]); // State untuk produk yang di-fetch
  const [loading, setLoading] = useState(false);

  // Filter kategori berdasarkan input pencarian
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().startsWith(search.toLowerCase())
  );

  // Fetch produk dari PHP API saat kategori diklik
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setLoading(true);

    fetch(`http://localhost/get/getitems.php?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Kategori Material</h1>

      {/* Input Pencarian */}
      <input
        type="text"
        placeholder="Cari kategori..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full max-w-md mx-auto block mb-4"
      />

      {/* Grid Kategori dari Data.ts */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 justify-center max-w-fit mx-auto">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div
              key={index}
              className="relative w-32 h-32 bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              onClick={() => handleCategoryClick(card.name)}
            >
              {/* Gambar kategori */}
              <img src={card.image} alt={card.name} className="w-full h-full object-cover" />

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

      {/* Menampilkan Produk berdasarkan Kategori yang dipilih */}
      {selectedCategory && (
        <div className="mt-6 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Produk: {selectedCategory}</h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((item, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
                  <img src={item.image_url} alt={item.name} className="w-full h-32 object-cover mb-2 rounded" />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">Harga: Rp{item.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Tidak ada produk dalam kategori ini.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Kategori;
