import { imgs } from "../../../data/data";
interface ThumbProps {
  setActiveImage: (value: number) => void;
}

function Thumb({ setActiveImage }: ThumbProps) {
  return (
    <div className="hidden lg:flex justify-between w-[450px] xl:w-[500px]">
      <button
        className="w-1/5 rounded-xl overflow-hidden"
        onClick={() => setActiveImage(1)}
      >
        <img src={imgs.thumb1} alt="" />
      </button>
      <button
        className="w-1/5 rounded-xl overflow-hidden"
        onClick={() => setActiveImage(2)}
      >
        <img src={imgs.thumb2} alt="" />
      </button>
      <button
        className="w-1/5 rounded-xl overflow-hidden"
        onClick={() => setActiveImage(3)}
      >
        <img src={imgs.thumb3} alt="" />
      </button>
      <button
        className="w-1/5 rounded-xl overflow-hidden"
        onClick={() => setActiveImage(4)}
      >
        <img src={imgs.thumb4} alt="" />
      </button>
    </div>
  );
}

export default Thumb;
