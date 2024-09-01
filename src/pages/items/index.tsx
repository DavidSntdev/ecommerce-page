import { ItemsProps } from "../../data/interfaces";
import Descricao from "./Descricao";
import Imagem from "./Imagem";

function Items({
  isCartEmpty,
  setCartEmpty,
  setCartQuantity,
  cartQuantity,
  isCartOpen,
  setCartOpen,
  isMaxWidth,
  setImageFull,
  activeImage,
  setActiveImage,
  isImageFull,
  isBrasileiro,
}: ItemsProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[900px] xl:w-[1150px] lg:mx-auto lg:justify-between md:items-center">
      <Imagem
        setCartQuantity={setCartQuantity}
        setCartEmpty={setCartEmpty}
        setCartOpen={setCartOpen}
        setImageFull={setImageFull}
        cartQuantity={cartQuantity}
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
        isMaxWidth={isMaxWidth}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
        isImageFull={isImageFull}
        isBrasileiro={isBrasileiro}
      />
      <Descricao
        setCartEmpty={setCartEmpty}
        setCartQuantity={setCartQuantity}
        cartQuantity={cartQuantity}
        isBrasileiro={isBrasileiro}
      />
    </div>
  );
}
export default Items;
