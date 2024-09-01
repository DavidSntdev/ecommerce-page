import { ImagemProps } from "../../../data/interfaces";
import Produto from "./produto";
import Thumb from "./thumb";

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
  isBrasileiro,
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
        isBrasileiro={isBrasileiro}
      />
      <Thumb setActiveImage={setActiveImage} activeImage={activeImage} />
    </div>
  );
}

export default Imagem;
