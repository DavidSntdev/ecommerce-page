import { Button } from "@nextui-org/react";
import { icons } from "../../../data/data";
import Cart from "../../Cart";
import Img from "./img";

interface ProdutoProps {
  isCartEmpty: boolean;
  isCartOpen: boolean;
  cartQuantity: number;
  isMaxWidth: boolean;
  activeImage: number;
  isImageFull: boolean;
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  setImageFull: (value: boolean) => void;
}

function Produto({
  isCartEmpty,
  isCartOpen,
  cartQuantity,
  setCartQuantity,
  setCartEmpty,
  setCartOpen,
  isMaxWidth,
  activeImage,
  setActiveImage,
  setImageFull,
  isImageFull,
}: ProdutoProps) {
  const nextImg = () => {
    setActiveImage(activeImage < 4 ? activeImage + 1 : 1);
  };

  const prevImg = () => {
    setActiveImage(activeImage > 1 ? activeImage - 1 : 4);
  };

  return (
    <div className="w-full flex items-center lg:items-start justify-center relative md:w-[450px] xl:w-[500px] md:rounded-md">
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Previous"
        className="absolute left-0 transform ml-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-[50%] md:hidden"
        onClick={prevImg}
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
      <Img
        setImageFull={setImageFull}
        activeImage={activeImage}
        isMaxWidth={isMaxWidth}
        isImageFull={isImageFull}
      />
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Next"
        className="mr-3 absolute right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-[50%] md:hidden"
        onClick={nextImg}
      >
        <img src={icons.next} alt="Next" width={10} />
      </Button>
    </div>
  );
}
export default Produto;
