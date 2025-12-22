import Header from "../Header/Header";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const images = [port1, port2, port3];

  return (
    <div className="grow flex flex-col items-center justify-center min-h-dvh gap-6 p-10">
      <Header text="Portfolio Component" isDark={true} />
      {/* images container */}  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Looping to duplicate cards */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg bg-secondary w-[390px] h-[280px]">
            <img
              className="w-full rounded-lg"
              src={images[i % 3]}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
