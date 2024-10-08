import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import CartContent from "./CartContent";
import { CartProps } from "../../data/interfaces";

function Cart({
  isCartEmpty,
  isBrasileiro,
  cartQuantity,
  setCartQuantity,
  setCartEmpty,
  setCartOpen,
}: CartProps) {
  const [priceCart, setPriceCart] = useState<number>(0);
  const price = 125;

  useEffect(() => {
    setPriceCart(price * cartQuantity);
  }, [cartQuantity]);

  const finalizar = () => {
    setCartOpen(false);
    setCartEmpty(true);
    setCartQuantity(0);
  };

  return (
    <motion.div
      className="absolute lg:static lg:w-[400px] lg:h-[250px] lg:shadow-xl w-[95%] h-[85%] mt-[-25px] p-5 px-7 rounded-xl z-20 flex bg-white flex-col"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="font-bold text-lg">
        {isBrasileiro ? "Carrinho" : "Cart"}
      </h1>
      <div className="h-full w-full flex items-center justify-center">
        {isCartEmpty ? (
          <p className="font-bold text-[var(--colorDarkGrayBlue)]">
            {isBrasileiro ? "O seu carrinho está vazio" : "Your cart is empty."}
          </p>
        ) : (
          <div className="flex flex-col h-full justify-between py-5 lg:gap-8 w-full">
            <CartContent
              price={price}
              priceCart={priceCart}
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity}
              setCartEmpty={setCartEmpty}
              isBrasileiro={isBrasileiro}
            />
            <Button
              color="primary"
              variant="shadow"
              className="h-16 rounded-xl w-full bg-[var(--colorLaranja)] font-bold text-[var(--colorBlack)] text-lg"
              style={{ boxShadow: "0px 15px 40px -20px var(--colorLaranja)" }}
              onClick={finalizar}
            >
              {isBrasileiro ? "verificar" : "Checkout"}
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cart;
