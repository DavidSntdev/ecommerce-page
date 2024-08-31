import { Button, Image } from "@nextui-org/react";
import { icons, imgs } from "../../../data/data";
import Cart from "../../Cart";

interface ProdutoProps {
  isCartEmpty: boolean;
  isCartOpen: boolean;
  cartQuantity: number;
  isMaxWidth: boolean;
  activeImage: number;
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setActiveImage: (value: number) => void;
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
}: ProdutoProps) {
  const img = (() => {
    switch (activeImage) {
      case 1:
        return imgs.product1;
      case 2:
        return imgs.product2;
      case 3:
        return imgs.product3;
      case 4:
        return imgs.product4;
      default:
        return imgs.product1;
    }
  })();

  const nextImg = () => {
    setActiveImage(activeImage < 4 ? activeImage + 1 : 1);
  };

  const prevImg = () => {
    setActiveImage(activeImage > 1 ? activeImage - 1 : 4);
  };

  return (
    <div className="w-full flex items-center lg:items-start justify-center relative lg:w-[450px] xl:w-[500px] lg:rounded-md">
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Previous"
        className="absolute left-0 transform ml-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-[50%] lg:hidden"
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
      {isMaxWidth ? (
        <img
          src={img}
          alt="Product"
          className="w-full h-[325px] object-cover xss:h-[380px] xs:h-[450px] sm:h-[500px] md:h-[600px] lg:h-[750px] lg:rounded-2xl"
        />
      ) : (
        <Image
          isZoomed
          alt="Product"
          className="w-full object-cover h-[500px] lg:rounded-2xl "
          src={img}
        />
      )}
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Next"
        className="mr-3 absolute right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-[50%] lg:hidden"
        onClick={nextImg}
      >
        <img src={icons.next} alt="Next" width={10} />
      </Button>
    </div>
  );
}
export default Produto;
