import Header from "../Header/Header";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import { useState } from "react";

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
            className="rounded-lg bg-secondary w-[390px] h-[280px] cursor-pointer "
          >
            <img
              className="w-full rounded-lg"
              src={images[i % 3]}
              alt="image"
            />
          </button>
        ))}
      </div>
      {isModalOpen && (
        <div className="bg-black/50 w-full h-full  absolute flex justify-center items-center">
          <img className="h-100" src={selectedImage} alt="image" />

          {/* Enahnce layout and make bg take full screen */}
          {/* implement close functionalitiy */}
        </div>
      )}
    </div>
  );
}
