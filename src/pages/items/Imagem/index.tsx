import Produto from "./produto";
import Thumb from "./thumb";

interface ImagemProps {
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  isCartEmpty: boolean;
  isCartOpen: boolean;
  cartQuantity: number;
}

function Imagem({
  isCartEmpty,
  isCartOpen,
  cartQuantity,
  setCartQuantity,
  setCartEmpty,
  setCartOpen,
}: ImagemProps) {
  return (
    <div className="flex flex-col gap-5">
      <Produto
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
        setCartEmpty={setCartEmpty}
        setCartOpen={setCartOpen}
      />
      <Thumb />
    </div>
  );
}

export default Imagem;
