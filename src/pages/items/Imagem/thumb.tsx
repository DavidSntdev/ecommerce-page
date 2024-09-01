import { imgs } from "../../../data/data";
import { ThumbProps } from "../../../data/interfaces";

function Thumb({ setActiveImage, activeImage }: ThumbProps) {
  return (
    <div className="hidden md:flex justify-between w-[450px] xl:w-[500px]">
      <button
        className="w-1/5 rounded-xl overflow-hidden relative"
        onClick={() => setActiveImage(1)}
        style={{
          border: activeImage === 1 ? "3px solid var(--colorLaranja)" : "none",
        }}
      >
        <img src={imgs.thumb1} alt="" className="w-full h-full" />
        <div
          className={`absolute inset-0 bg-white transition-opacity ${
            activeImage === 1 ? "opacity-50" : "opacity-0 hover:opacity-50"
          }`}
        ></div>
      </button>
      <button
        className="w-1/5 rounded-xl overflow-hidden relative"
        onClick={() => setActiveImage(2)}
        style={{
          border: activeImage === 2 ? "3px solid var(--colorLaranja)" : "none",
        }}
      >
        <img src={imgs.thumb2} alt="" className="w-full h-full" />
        <div
          className={`absolute inset-0 bg-white transition-opacity ${
            activeImage === 2 ? "opacity-50" : "opacity-0 hover:opacity-50"
          }`}
        ></div>
      </button>

      <button
        className="w-1/5 rounded-xl overflow-hidden relative"
        onClick={() => setActiveImage(3)}
        style={{
          border: activeImage === 3 ? "3px solid var(--colorLaranja)" : "none",
        }}
      >
        <img src={imgs.thumb3} alt="" className="w-full h-full" />
        <div
          className={`absolute inset-0 bg-white transition-opacity ${
            activeImage === 3 ? "opacity-50" : "opacity-0 hover:opacity-50"
          }`}
        ></div>
      </button>
      <button
        className="w-1/5 rounded-xl overflow-hidden relative"
        onClick={() => setActiveImage(4)}
        style={{
          border: activeImage === 4 ? "3px solid var(--colorLaranja)" : "none",
        }}
      >
        <img src={imgs.thumb4} alt="" className="w-full h-full" />
        <div
          className={`absolute inset-0 bg-white transition-opacity ${
            activeImage === 4 ? "opacity-50" : "opacity-0 hover:opacity-50"
          }`}
        ></div>
      </button>
    </div>
  );
}

export default Thumb;
