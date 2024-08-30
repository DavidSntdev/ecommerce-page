import { icons, imgs } from "../../data/data";

function Header() {
  return (
    <div className="flex justify-between p-5 lg:py-10 lg:w-[1400px] lg:mx-auto">
      <div className="flex gap-3 items-center justify-center">
        <button className="lg:hidden">
          <img src={icons.menu} alt="" />
        </button>
        <h1 className="text-[var(--colorDarkBlue)] font-bold text-4xl mt-[-6px]">
          sneakers
        </h1>
      </div>
      <div className="flex gap-6 items-center">
        <button>
          <img src={icons.cart} alt="" />
        </button>
        <img className="h-6 w-6 lg:h-12 lg:w-12" src={imgs.avatar} alt="" />
      </div>
    </div>
  );
}
export default Header;
