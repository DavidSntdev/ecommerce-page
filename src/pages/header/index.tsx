import { icons, imgs } from "../../data/data";

function Header() {
  return (
    <div className="flex justify-between p-5">
      <div className="flex gap-3 items-center justify-center">
        <button>
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
        <img className="h-6 w-6" src={imgs.avatar} alt="" />
      </div>
    </div>
  );
}
export default Header;
