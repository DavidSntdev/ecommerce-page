import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import CartContent from "./cartContent";

interface CartProps {
  isCartEmpty: boolean;
  cartQuantity: number;
}

function Cart({ isCartEmpty, cartQuantity }: CartProps) {
  const [priceCart, setPriceCart] = useState<number>(0);
  const price = 125;

  useEffect(() => {
    setPriceCart(price * cartQuantity);
  }, [cartQuantity]);

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
            <div>
              <CartContent
                price={price}
                priceCart={priceCart}
                cartQuantity={cartQuantity}
              />
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
