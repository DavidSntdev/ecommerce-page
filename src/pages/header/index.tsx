import { Button } from "@nextui-org/react";
import { icons, imgs } from "../../data/data";
import Text from "./text";
import Cart from "../Cart";
import { HeaderProps } from "../../data/interfaces";

function Header({
  isCartEmpty,
  cartQuantity,
  setCartOpen,
  isCartOpen,
  setCartEmpty,
  setCartQuantity,
  isMaxWidth,
  setMenuOpen,
  isBrasileiro,
}: HeaderProps) {
  return (
    <>
      <div className="flex justify-between p-5 md:py-10 md:w-full xl:w-[1300px] md:mx-auto">
        <Text setMenuOpen={setMenuOpen} isBrasileiro={isBrasileiro} />
        <div className="flex gap-6 items-center">
          <div className="relative">
            <Button
              isIconOnly
              color="default"
              variant="faded"
              aria-label="Cart Button"
              className="border-0 flex flex-col bg-transparent"
              onClick={() => setCartOpen(!isCartOpen)}
            >
              {!isCartEmpty && (
                <div className="absolute bg-[var(--colorLaranja)] text-xs px-2 font-bold text-white self-end mb-5 z-10 rounded-xl">
                  {cartQuantity}
                </div>
              )}
              <img src={icons.cart} alt="Cart" />
            </Button>
            {!isMaxWidth && isCartOpen && (
              <div className="absolute right-0 mt-10 w-[200px]">
                <Cart
                  isCartEmpty={isCartEmpty}
                  cartQuantity={cartQuantity}
                  setCartOpen={setCartOpen}
                  setCartEmpty={setCartEmpty}
                  setCartQuantity={setCartQuantity}
                  isBrasileiro={isBrasileiro}
                />
              </div>
            )}
          </div>
          <img
            className="h-6 w-6 md:h-12 md:w-12 hover:border-2 hover:border-[var(--colorLaranja)] rounded-[50%]"
            src={imgs.avatar}
            alt="Avatar"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
