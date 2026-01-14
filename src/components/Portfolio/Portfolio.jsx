import Header from "../Header/Header";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import { useState } from "react";
import { Plus } from "lucide-react";

export default function Portfolio() {
  const images = [port1, port2, port3];
  const [isModalOpen, setisModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grow flex flex-col items-center justify-center min-h-dvh gap-6">
      <Header text="Portfolio Component" isDark={true} />
      {/* images container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Looping to duplicate cards */}
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            onClick={() => {
              setSelectedImage(images[i % 3]);
              setisModalOpen(true);
            }}
            key={i}
            className="rounded-lg w-[390px] h-[280px] cursor-pointer relative group"
          >
            <img
              className="w-full rounded-lg hover:opacity-30 duration-300"
              src={images[i % 3]}
              alt="image"
            />
            <div className="absolute inset-0 bg-secondary/90 rounded-lg hidden group-hover:flex justify-center items-center duration-300">
              <Plus className="size-20 text-white"/>
            </div>
          </button>
        ))}
      </div>
      {isModalOpen && (
        <div
          onClick={() => setisModalOpen(false)}
          className="bg-black/50 w-full h-full fixed top-0 left-0 z-50 flex justify-center items-center cursor-pointer"
        >
          <div className="relative">
            <img
              className="max-h-[50vh] max-w-[60vw] object-contain rounded-lg"
              src={selectedImage}
              alt="image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
