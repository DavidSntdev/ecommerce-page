import { Button } from "@nextui-org/react";
import { icons, imgs } from "../../data/data";

interface HeaderProps {
  isCartEmpty: boolean;
  cartQuantity: number;
}

function Header({ isCartEmpty, cartQuantity }: HeaderProps) {
  return (
    <div className="flex justify-between p-5 lg:py-10 lg:w-full xl:w-[1300px] lg:mx-auto">
      <div className="flex gap-3 lg:gap-16 items-center justify-center">
        <button className="lg:hidden">
          <img src={icons.menu} alt="" />
        </button>
        <h1 className="text-[var(--colorDarkBlue)] font-bold text-4xl mt-[-6px]">
          sneakers
        </h1>
        <div className="hidden lg:flex gap-7">
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)]">
            Collections
          </p>
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)]">Men</p>
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)]">
            Women
          </p>
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)]">
            About
          </p>
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)]">
            Contact
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <Button
          isIconOnly
          color="default"
          variant="faded"
          aria-label="Cart Button"
          className="border-0 flex flex-col"
        >
          {!isCartEmpty && (
            <div className="absolute bg-[var(--colorLaranja)] text-xs px-2 font-bold text-white self-end mb-5 z-10 rounded-xl">
              {cartQuantity}
            </div>
          )}
          <img src={icons.cart} alt="Cart" />
        </Button>
        <img className="h-6 w-6 lg:h-12 lg:w-12" src={imgs.avatar} alt="" />
      </div>
    </div>
  );
}
export default Header;
