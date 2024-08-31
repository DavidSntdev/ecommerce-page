import Descricao from "./Descricao";
import Imagem from "./Imagem";

interface ItemsProps {
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setImageFull: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  isCartEmpty: boolean;
  cartQuantity: number;
  isCartOpen: boolean;
  isMaxWidth: boolean;
  activeImage: number;
  isImageFull: boolean;
}

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
      />
      <Descricao
        setCartEmpty={setCartEmpty}
        setCartQuantity={setCartQuantity}
        cartQuantity={cartQuantity}
      />
    </div>
  );
}
export default Items;
