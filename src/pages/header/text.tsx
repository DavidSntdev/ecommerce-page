import { icons } from "../../data/data";

function Text() {
  return (
    <div className="flex gap-3 lg:gap-16 items-center justify-center">
      <button className="lg:hidden">
        <img src={icons.menu} alt="" />
      </button>
      <h1 className="text-[var(--colorDarkBlue)] font-bold text-4xl mt-[-6px]">
        sneakers
      </h1>
      <div className="hidden lg:flex gap-7 ">
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] h-full hover:border-b-2 hover:border-[var(--colorLaranja)]">
          Collections
        </p>
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
          Men
        </p>
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
          Women
        </p>
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
          About
        </p>
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
          Contact
        </p>
      </div>
    </div>
  );
}

export default Text;
