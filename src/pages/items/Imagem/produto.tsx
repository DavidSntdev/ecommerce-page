import { Button, Image } from "@nextui-org/react";
import { icons, imgs } from "../../../data/data";
import { useEffect, useState } from "react";
import Cart from "../../Cart";

interface ProdutoProps {
  isCartEmpty: boolean;
  isCartOpen: boolean;
  cartQuantity: number;
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
}

function Produto({
  isCartEmpty,
  isCartOpen,
  cartQuantity,
  setCartQuantity,
  setCartEmpty,
  setCartOpen,
}: ProdutoProps) {
  const [isMaxWidth, setMaxWidth] = useState<boolean>(false);
  const MAX_WIDTH = 1024;

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth <= MAX_WIDTH);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex items-center lg:items-start justify-center relative lg:w-[450px] xl:w-[500px] lg:rounded-md">
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Previous"
        className="absolute left-0 transform ml-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-[50%] lg:hidden"
      >
        <img src={icons.previous} alt="Previous" width={10} />
      </Button>
      {isMaxWidth && isCartOpen && (
        <Cart
          isCartEmpty={isCartEmpty}
          cartQuantity={cartQuantity}
          setCartQuantity={setCartQuantity}
          setCartEmpty={setCartEmpty}
          setCartOpen={setCartOpen}
        />
      )}
      {isMaxWidth ? (
        <img
          src={imgs.product1}
          alt="Product"
          className="w-full h-[300px] object-cover  sm:h-[400px] md:h-[500px] lg:rounded-2xl "
        />
      ) : (
        <Image
          isZoomed
          alt="Product"
          className="w-full h-[300px] object-cover md:h-[500px] lg:rounded-2xl "
          src={imgs.product1}
        />
      )}
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Next"
        className="mr-3 absolute right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-[50%] lg:hidden"
      >
        <img src={icons.next} alt="Next" width={10} />
      </Button>
    </div>
  );
}
export default Produto;
