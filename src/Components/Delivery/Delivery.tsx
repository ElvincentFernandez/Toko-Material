import React from 'react';

const Delivery: React.FC = () => {
  const cards = [
    { image: "image1.jpeg", name: "Bata" },
    { image: "image2.jpeg", name: "Semen" },
    { image: "image3.jpg", name: "Tandon Air" },
    { image: "image4.jpg", name: "Besi Beton" },
    { image: "image5.jpeg", name: "Keramik" },
    { image: "image6.jpg", name: "Paku" },
  ];

  return (
    <div className="flex flex-col items-center py-10">

      {/* Teks Pengiriman Material */}
      <div className="text-center mb-8">
        <p className="text-3xl font-semibold mb-4">Pengiriman Material</p>
        <p className="text-3xl font-semibold mb-4">Ke Seluruh Jabodetabek</p>
      </div>


      {/* Carousel */}
      <div className="flex flex-row items-center w-full">
        <div className="relative w-full">
          <div className="flex overflow-x-auto gap-4">
            {cards.map((card, index) => (
              <div key={index} className="w-[224px]">
                <div className="bg-white rounded-lg">
                  <img
                    src={`/${card.image}`}
                    alt={card.name}
                    className="w-full h-[320px] object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{card.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Delivery;
