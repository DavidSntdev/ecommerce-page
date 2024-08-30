import { imgs } from "../../../data/data";

function Thumb() {
  return (
    <div className="hidden lg:flex justify-between w-[500px]">
      <button className="w-1/5 rounded-xl overflow-hidden">
        <img src={imgs.thumb1} alt="" />
      </button>
      <button className="w-1/5 rounded-xl overflow-hidden">
        <img src={imgs.thumb2} alt="" />
      </button>
      <button className="w-1/5 rounded-xl overflow-hidden">
        <img src={imgs.thumb3} alt="" />
      </button>
      <button className="w-1/5 rounded-xl overflow-hidden">
        <img src={imgs.thumb4} alt="" />
      </button>
    </div>
  );
}

export default Thumb;
