import Produto from "./produto";
import Thumb from "./thumb";

interface ImagemProps {
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setImageFull: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  activeImage: number;
  isCartEmpty: boolean;
  isCartOpen: boolean;
  cartQuantity: number;
  isMaxWidth: boolean;
  isImageFull: boolean;
}

function Imagem({
  isCartEmpty,
  isCartOpen,
  cartQuantity,
  setCartQuantity,
  setCartEmpty,
  setCartOpen,
  isMaxWidth,
  setImageFull,
  activeImage,
  setActiveImage,
  isImageFull,
}: ImagemProps) {
  return (
    <div className="flex flex-col gap-5 md:items-center lg:items-start">
      <Produto
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
        setCartEmpty={setCartEmpty}
        setCartOpen={setCartOpen}
        isMaxWidth={isMaxWidth}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
        setImageFull={setImageFull}
        isImageFull={isImageFull}
      />
      <Thumb setActiveImage={setActiveImage} activeImage={activeImage} />
    </div>
  );
}

export default Imagem;
