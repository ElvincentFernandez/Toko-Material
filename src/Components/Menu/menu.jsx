import React, { useEffect, useState } from "react";

const Menu = () => {
  const images = ["/foto1.jpg", "/foto2.jpg", "/foto3.jpg", "/foto4.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Slide setiap 2 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative w-[900px] h-[400px] overflow-hidden shadow-lg bg-white rounded-2xl flex items-center justify-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-full flex justify-center items-center">
              <img
                src={src}
                alt={`Foto ${i + 1}`}
                className="w-[900px] h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
