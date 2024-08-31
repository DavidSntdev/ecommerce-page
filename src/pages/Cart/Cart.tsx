import { useState } from "react";
import { icons, imgs } from "../../data/data";
import { Button } from "@nextui-org/react";

function Cart() {
  const [isCartEmpty, setCartEmpty] = useState<boolean>(true);
  return (
    <>
      <div className="absolute w-[95%] h-[85%] mt-[-25px] p-5 px-7 rounded-xl z-20 flex  bg-white lg:hidden flex-col">
        <h1 className="font-bold text-lg">Cart</h1>
        <div className="h-full w-full flex items-center justify-center">
          {isCartEmpty ? (
            <p className="font-bold text-[var(--colorDarkGrayBlue)]">
              Your cart is empty.
            </p>
          ) : (
            <div className="flex flex-col w-full gap-5">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-5">
                  <img
                    src={imgs.thumb1}
                    alt=""
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <p className="font-medium text-[var(--colorDarkGrayBlue)]">
                      Fall Limited Edition Sneakers
                    </p>
                    <div className="flex gap-3">
                      <p className="font-medium text-[var(--colorDarkGrayBlue)]">
                        $125.00 x 3
                      </p>
                      <p className="font-bold text-black">$375.00</p>
                    </div>
                  </div>
                </div>
                <button>
                  <img src={icons.delete} alt="" className="h-6 w-5" />
                </button>
              </div>
              <Button
                color="primary"
                variant="shadow"
                className="h-16 rounded-xl w-full bg-[var(--colorLaranja)] font-bold text-[var(--colorBlack)] text-lg"
                style={{ boxShadow: "0px 15px 40px -20px var(--colorLaranja)" }}
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:flex"></div>
    </>
  );
}

export default Cart;
