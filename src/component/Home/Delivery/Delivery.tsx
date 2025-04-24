import { Button } from "@mantine/core"; 
import { data } from "../../data/Data"; 

const { send } = data; 

const Delivery: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Teks Pengiriman Material */}
      <div className="text-center mb-8">
        <p className="text-3xl font-semibold mb-4">Pengiriman Material</p>
        <p className="text-3xl font-semibold mb-4">Ke Seluruh Jabodetabek</p>
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-auto w-full justify-center">
        <div className="flex gap-4 w-fit mx-auto">
          {send.map((item, index) => (
            <div key={index} className="w-[224px] flex-shrink-0 relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`/${item.image}`} // Path gambar
                  alt={item.name}
                  className="w-full h-[350px] object-cover"
                />
                {/* Button transparan di pojok kiri bawah */}
                <Button className="absolute bottom-2 left-2 bg-transparent text-white font-bold border border-white text-xs py-1 px-3 rounded-full">
                  {item.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
